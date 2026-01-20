import { useState, useRef, useCallback, FormEvent } from "react";
import emailjs from "@emailjs/browser";

// ====== TYPES ======
export type FormStatus = "idle" | "sending" | "success" | "error";

export interface FormData {
  from_name: string;
  from_email: string;
  subject: string;
  message: string;
}

export interface ValidationErrors {
  from_name?: string;
  from_email?: string;
  subject?: string;
  message?: string;
}

interface UseContactFormOptions {
  serviceId: string;
  templateId: string;
  publicKey: string;
  rateLimitMs?: number; // Minimum time between submissions (default: 60 seconds)
  maxSubmissionsPerHour?: number; // Max submissions per hour (default: 3)
}

interface UseContactFormReturn {
  formRef: React.RefObject<HTMLFormElement | null>;
  status: FormStatus;
  errorMessage: string;
  validationErrors: ValidationErrors;
  isRateLimited: boolean;
  remainingTime: number;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void>;
  validateField: (name: keyof FormData, value: string) => string;
  resetForm: () => void;
}

// ====== STORAGE KEYS ======
const STORAGE_KEY = "contact_form_submissions";

// ====== VALIDATION HELPERS ======
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const MIN_NAME_LENGTH = 2;
const MAX_NAME_LENGTH = 100;
const MIN_SUBJECT_LENGTH = 3;
const MAX_SUBJECT_LENGTH = 200;
const MIN_MESSAGE_LENGTH = 10;
const MAX_MESSAGE_LENGTH = 2000;

export function validateEmail(email: string): string {
  if (!email.trim()) return "Vui lòng nhập email";
  if (!EMAIL_REGEX.test(email)) return "Email không hợp lệ";
  return "";
}

export function validateName(name: string): string {
  const trimmed = name.trim();
  if (!trimmed) return "Vui lòng nhập họ và tên";
  if (trimmed.length < MIN_NAME_LENGTH) return `Họ tên phải có ít nhất ${MIN_NAME_LENGTH} ký tự`;
  if (trimmed.length > MAX_NAME_LENGTH) return `Họ tên không được quá ${MAX_NAME_LENGTH} ký tự`;
  return "";
}

export function validateSubject(subject: string): string {
  const trimmed = subject.trim();
  if (!trimmed) return "Vui lòng nhập chủ đề";
  if (trimmed.length < MIN_SUBJECT_LENGTH) return `Chủ đề phải có ít nhất ${MIN_SUBJECT_LENGTH} ký tự`;
  if (trimmed.length > MAX_SUBJECT_LENGTH) return `Chủ đề không được quá ${MAX_SUBJECT_LENGTH} ký tự`;
  return "";
}

export function validateMessage(message: string): string {
  const trimmed = message.trim();
  if (!trimmed) return "Vui lòng nhập nội dung";
  if (trimmed.length < MIN_MESSAGE_LENGTH) return `Nội dung phải có ít nhất ${MIN_MESSAGE_LENGTH} ký tự`;
  if (trimmed.length > MAX_MESSAGE_LENGTH) return `Nội dung không được quá ${MAX_MESSAGE_LENGTH} ký tự`;
  return "";
}

// ====== RATE LIMITING HELPERS ======
interface SubmissionRecord {
  timestamps: number[];
}

function getSubmissionRecord(): SubmissionRecord {
  if (typeof window === "undefined") return { timestamps: [] };
  
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return { timestamps: [] };
    return JSON.parse(stored);
  } catch {
    return { timestamps: [] };
  }
}

function saveSubmissionRecord(record: SubmissionRecord): void {
  if (typeof window === "undefined") return;
  
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(record));
  } catch {
    // Ignore storage errors
  }
}

function cleanOldSubmissions(record: SubmissionRecord, hourMs: number): SubmissionRecord {
  const now = Date.now();
  const oneHourAgo = now - hourMs;
  return {
    timestamps: record.timestamps.filter((ts) => ts > oneHourAgo),
  };
}

// ====== MAIN HOOK ======
export function useContactForm({
  serviceId,
  templateId,
  publicKey,
  rateLimitMs = 60 * 1000, // 60 seconds default
  maxSubmissionsPerHour = 3,
}: UseContactFormOptions): UseContactFormReturn {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [validationErrors, setValidationErrors] = useState<ValidationErrors>({});
  const [isRateLimited, setIsRateLimited] = useState(false);
  const [remainingTime, setRemainingTime] = useState(0);

  // Validate a single field
  const validateField = useCallback((name: keyof FormData, value: string): string => {
    switch (name) {
      case "from_name":
        return validateName(value);
      case "from_email":
        return validateEmail(value);
      case "subject":
        return validateSubject(value);
      case "message":
        return validateMessage(value);
      default:
        return "";
    }
  }, []);

  // Validate entire form
  const validateForm = useCallback((formData: FormData): ValidationErrors => {
    return {
      from_name: validateName(formData.from_name),
      from_email: validateEmail(formData.from_email),
      subject: validateSubject(formData.subject),
      message: validateMessage(formData.message),
    };
  }, []);

  // Check rate limiting
  const checkRateLimit = useCallback((): { allowed: boolean; waitTime: number } => {
    const record = cleanOldSubmissions(getSubmissionRecord(), 60 * 60 * 1000);
    const now = Date.now();

    // Check max submissions per hour
    if (record.timestamps.length >= maxSubmissionsPerHour) {
      const oldestAllowed = record.timestamps[record.timestamps.length - maxSubmissionsPerHour];
      const waitTime = Math.ceil((oldestAllowed + 60 * 60 * 1000 - now) / 1000);
      return { allowed: false, waitTime };
    }

    // Check minimum time between submissions
    if (record.timestamps.length > 0) {
      const lastSubmission = record.timestamps[record.timestamps.length - 1];
      const timeSinceLast = now - lastSubmission;
      if (timeSinceLast < rateLimitMs) {
        const waitTime = Math.ceil((rateLimitMs - timeSinceLast) / 1000);
        return { allowed: false, waitTime };
      }
    }

    return { allowed: true, waitTime: 0 };
  }, [maxSubmissionsPerHour, rateLimitMs]);

  // Record a submission
  const recordSubmission = useCallback(() => {
    const record = cleanOldSubmissions(getSubmissionRecord(), 60 * 60 * 1000);
    record.timestamps.push(Date.now());
    saveSubmissionRecord(record);
  }, []);

  // Reset form
  const resetForm = useCallback(() => {
    setStatus("idle");
    setErrorMessage("");
    setValidationErrors({});
    formRef.current?.reset();
  }, []);

  // Handle form submission
  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (!formRef.current) return;

      // Check EmailJS config
      if (!serviceId || !templateId || !publicKey) {
        setStatus("error");
        setErrorMessage("Cấu hình email chưa được thiết lập. Vui lòng liên hệ admin.");
        return;
      }

      // Check rate limiting
      const { allowed, waitTime } = checkRateLimit();
      if (!allowed) {
        setIsRateLimited(true);
        setRemainingTime(waitTime);
        setStatus("error");
        setErrorMessage(`Bạn đã gửi quá nhiều tin nhắn. Vui lòng đợi ${waitTime} giây.`);

        // Start countdown
        const interval = setInterval(() => {
          setRemainingTime((prev) => {
            if (prev <= 1) {
              clearInterval(interval);
              setIsRateLimited(false);
              setStatus("idle");
              setErrorMessage("");
              return 0;
            }
            return prev - 1;
          });
        }, 1000);

        return;
      }

      // Get form data
      const formData = new FormData(formRef.current);
      const data: FormData = {
        from_name: formData.get("from_name") as string || "",
        from_email: formData.get("from_email") as string || "",
        subject: formData.get("subject") as string || "",
        message: formData.get("message") as string || "",
      };

      // Validate form
      const errors = validateForm(data);
      const hasErrors = Object.values(errors).some((error) => error !== "");

      if (hasErrors) {
        setValidationErrors(errors);
        setStatus("error");
        setErrorMessage("Vui lòng kiểm tra lại thông tin.");
        return;
      }

      // Clear validation errors
      setValidationErrors({});
      setStatus("sending");
      setErrorMessage("");

      try {
        await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);

        // Record successful submission
        recordSubmission();

        setStatus("success");
        formRef.current.reset();

        // Reset status after 5 seconds
        setTimeout(() => setStatus("idle"), 5000);
      } catch (error) {
        console.error("EmailJS Error:", error);
        setStatus("error");
        setErrorMessage("Có lỗi xảy ra. Vui lòng thử lại hoặc liên hệ trực tiếp qua email.");

        // Reset status after 5 seconds
        setTimeout(() => setStatus("idle"), 5000);
      }
    },
    [serviceId, templateId, publicKey, checkRateLimit, validateForm, recordSubmission]
  );

  return {
    formRef,
    status,
    errorMessage,
    validationErrors,
    isRateLimited,
    remainingTime,
    handleSubmit,
    validateField,
    resetForm,
  };
}
