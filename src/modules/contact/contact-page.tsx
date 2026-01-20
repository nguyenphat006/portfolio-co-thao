"use client";

import { useState, ChangeEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Loader2, Clock } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { useContactForm, type FormData } from "./hooks";

// ====== EMAILJS CONFIGURATION (from .env) ======
const EMAILJS_CONFIG = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "",
};

const contactInfo = [
  { icon: Mail, label: "Email", value: SITE_CONFIG.email, href: `mailto:${SITE_CONFIG.email}` },
  { icon: Phone, label: "Điện thoại", value: SITE_CONFIG.phone, href: `tel:${SITE_CONFIG.phone}` },
  { icon: MapPin, label: "Địa điểm", value: "TP. Hồ Chí Minh, Việt Nam", href: null },
];

export function ContactPage() {
  const {
    formRef,
    status,
    errorMessage,
    validationErrors,
    isRateLimited,
    remainingTime,
    handleSubmit,
    validateField,
  } = useContactForm({
    ...EMAILJS_CONFIG,
    rateLimitMs: 60 * 1000, // 60 seconds between submissions
    maxSubmissionsPerHour: 3, // Max 3 submissions per hour
  });

  // Local state for real-time validation
  const [touched, setTouched] = useState<Record<keyof FormData, boolean>>({
    from_name: false,
    from_email: false,
    subject: false,
    message: false,
  });

  const [localErrors, setLocalErrors] = useState<Record<keyof FormData, string>>({
    from_name: "",
    from_email: "",
    subject: "",
    message: "",
  });

  // Handle blur for real-time validation
  const handleBlur = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const fieldName = name as keyof FormData;
    
    setTouched((prev) => ({ ...prev, [fieldName]: true }));
    setLocalErrors((prev) => ({ ...prev, [fieldName]: validateField(fieldName, value) }));
  };

  // Get error message for a field
  const getFieldError = (fieldName: keyof FormData): string => {
    if (touched[fieldName]) {
      return localErrors[fieldName] || validationErrors[fieldName] || "";
    }
    return validationErrors[fieldName] || "";
  };

  const isDisabled = status === "sending" || isRateLimited;

  return (
    <section className="pt-16 pb-16 md:pt-24 md:pb-24 bg-brand-50 min-h-screen">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <p className="font-handwriting text-2xl md:text-3xl text-brand-500 mb-2">
            Kết nối
          </p>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 uppercase tracking-tight mb-4">
            Liên hệ với tôi
          </h1>
          <p className="text-slate-500">
            Hãy để lại lời nhắn, tôi sẽ phản hồi sớm nhất có thể.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10"
          >
            {contactInfo.map((item) => {
              const Icon = item.icon;
              const Wrapper = item.href ? "a" : "div";
              return (
                <Wrapper
                  key={item.label}
                  {...(item.href ? { href: item.href } : {})}
                  className="flex items-center gap-3 p-4 bg-white rounded-xl border border-brand-100 hover:border-brand-200 hover:shadow-sm transition-all"
                >
                  <div className="w-10 h-10 rounded-full bg-brand-50 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-brand-500" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">{item.label}</p>
                    <p className="text-sm font-medium text-navy-900">{item.value}</p>
                  </div>
                </Wrapper>
              );
            })}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-2xl p-6 md:p-8 border border-brand-100"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5" noValidate>
              {/* Name & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="from_name" className="block text-sm font-medium text-navy-900 mb-2">
                    Họ và tên
                  </label>
                  <input
                    type="text"
                    id="from_name"
                    name="from_name"
                    placeholder="Nguyễn Văn A"
                    className={`w-full px-4 py-3 rounded-xl bg-brand-50 border text-navy-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all text-sm ${
                      getFieldError("from_name")
                        ? "border-red-300 focus:border-red-500 focus:ring-red-500/20"
                        : "border-brand-100 focus:border-brand-500 focus:ring-brand-500/20"
                    }`}
                    required
                    disabled={isDisabled}
                    onBlur={handleBlur}
                    maxLength={100}
                  />
                  {getFieldError("from_name") && (
                    <p className="mt-1 text-xs text-red-500">{getFieldError("from_name")}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="from_email" className="block text-sm font-medium text-navy-900 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="from_email"
                    name="from_email"
                    placeholder="email@example.com"
                    className={`w-full px-4 py-3 rounded-xl bg-brand-50 border text-navy-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all text-sm ${
                      getFieldError("from_email")
                        ? "border-red-300 focus:border-red-500 focus:ring-red-500/20"
                        : "border-brand-100 focus:border-brand-500 focus:ring-brand-500/20"
                    }`}
                    required
                    disabled={isDisabled}
                    onBlur={handleBlur}
                  />
                  {getFieldError("from_email") && (
                    <p className="mt-1 text-xs text-red-500">{getFieldError("from_email")}</p>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-navy-900 mb-2">
                  Chủ đề
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Tôi muốn hỏi về..."
                  className={`w-full px-4 py-3 rounded-xl bg-brand-50 border text-navy-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all text-sm ${
                    getFieldError("subject")
                      ? "border-red-300 focus:border-red-500 focus:ring-red-500/20"
                      : "border-brand-100 focus:border-brand-500 focus:ring-brand-500/20"
                  }`}
                  required
                  disabled={isDisabled}
                  onBlur={handleBlur}
                  maxLength={200}
                />
                {getFieldError("subject") && (
                  <p className="mt-1 text-xs text-red-500">{getFieldError("subject")}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-navy-900 mb-2">
                  Nội dung
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Nhập nội dung tin nhắn của bạn..."
                  className={`w-full px-4 py-3 rounded-xl bg-brand-50 border text-navy-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all text-sm resize-none ${
                    getFieldError("message")
                      ? "border-red-300 focus:border-red-500 focus:ring-red-500/20"
                      : "border-brand-100 focus:border-brand-500 focus:ring-brand-500/20"
                  }`}
                  required
                  disabled={isDisabled}
                  onBlur={handleBlur}
                  maxLength={2000}
                />
                {getFieldError("message") && (
                  <p className="mt-1 text-xs text-red-500">{getFieldError("message")}</p>
                )}
              </div>

              {/* Status Messages */}
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-4 bg-green-50 border border-green-200 rounded-xl text-green-700"
                >
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  <p className="text-sm">Gửi tin nhắn thành công! Tôi sẽ phản hồi sớm nhất có thể.</p>
                </motion.div>
              )}

              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700"
                >
                  {isRateLimited ? (
                    <Clock className="w-5 h-5 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  )}
                  <p className="text-sm">
                    {isRateLimited
                      ? `Vui lòng đợi ${remainingTime} giây trước khi gửi tin nhắn tiếp theo.`
                      : errorMessage}
                  </p>
                </motion.div>
              )}

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: isDisabled ? 1 : 1.01 }}
                whileTap={{ scale: isDisabled ? 1 : 0.99 }}
                type="submit"
                disabled={isDisabled}
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-brand-500 text-white rounded-xl font-medium hover:bg-brand-600 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === "sending" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Đang gửi...
                  </>
                ) : isRateLimited ? (
                  <>
                    <Clock className="w-4 h-4" />
                    Đợi {remainingTime}s
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Gửi tin nhắn
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
