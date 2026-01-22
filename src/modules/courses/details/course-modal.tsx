"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Copy, CheckCircle, Phone, MessageCircle } from "lucide-react";
import { REGISTRATION_INFO } from "@/lib/constants";
import { CourseItem } from "@/modules/courses/constants";

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  course: CourseItem;
}

// Generate VietQR URL
function generateVietQRUrl(
  bankId: string,
  accountNumber: string,
  accountName: string,
  amount: string,
  description: string
) {
  // VietQR format: https://img.vietqr.io/image/{bankId}-{accountNumber}-compact.png
  // With additional params: ?amount={amount}&addInfo={description}&accountName={accountName}
  const baseUrl = `https://img.vietqr.io/image/${bankId}-${accountNumber}-compact2.png`;
  const params = new URLSearchParams({
    amount: amount,
    addInfo: description,
    accountName: accountName,
  });
  return `${baseUrl}?${params.toString()}`;
}

export function RegistrationModal({ isOpen, onClose, course }: RegistrationModalProps) {
  const [copied, setCopied] = useState<string | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleCopy = async (text: string, field: string) => {
    await navigator.clipboard.writeText(text);
    setCopied(field);
    setTimeout(() => setCopied(null), 2000);
  };

  // Extract number from price for QR and copy
  const priceNumber = course.price.replace(/[^\d]/g, "");
  
  // VPBank bank ID for VietQR
  const bankId = "970432";
  
  // Generate QR URL
  const qrUrl = generateVietQRUrl(
    bankId,
    REGISTRATION_INFO.accountNumber,
    REGISTRATION_INFO.accountName,
    priceNumber,
    course.transferNote
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-50"
          />
          
          {/* Modal Container */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-lg shadow-xl w-full max-w-md max-h-[calc(100vh-2rem)] overflow-y-auto pointer-events-auto"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100 sticky top-0 bg-white z-10">
                <div>
                  <h3 className="font-semibold text-navy-900 text-base">Thanh toán đăng ký</h3>
                  <p className="text-sm text-slate-500 mt-0.5">Quét mã QR hoặc chuyển khoản thủ công</p>
                </div>
                <button
                  onClick={onClose}
                  aria-label="Đóng"
                  className="w-9 h-9 flex items-center justify-center text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded transition-colors"
                >
                  <X size={22} />
                </button>
              </div>

              {/* Content */}
              <div className="p-5">
                {/* QR Code */}
                <div className="flex justify-center mb-5">
                  <div className="bg-white p-2 border border-slate-200 rounded">
                    <Image
                      src={qrUrl}
                      alt="QR Code thanh toán"
                      width={200}
                      height={200}
                      className="w-44 h-44 md:w-50 md:h-50"
                      unoptimized
                    />
                  </div>
                </div>

                {/* Amount */}
                <div className="text-center mb-5 pb-5 border-b border-slate-100">
                  <p className="text-sm text-slate-500 mb-1">Số tiền thanh toán</p>
                  <p className="text-2xl md:text-3xl font-bold text-navy-900">{course.price}</p>
                </div>

                {/* Bank Info */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between py-2">
                    <span className="text-slate-500">Ngân hàng</span>
                    <span className="font-medium text-navy-900">{REGISTRATION_INFO.bankName}</span>
                  </div>

                  <div className="flex items-center justify-between py-2 border-t border-slate-50">
                    <span className="text-slate-500">Chủ tài khoản</span>
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-navy-900">{REGISTRATION_INFO.accountName}</span>
                      <button
                        onClick={() => handleCopy(REGISTRATION_INFO.accountName, "name")}
                        className="p-1.5 hover:bg-slate-100 rounded transition-colors"
                      >
                        {copied === "name" ? (
                          <CheckCircle size={18} className="text-green-500" />
                        ) : (
                          <Copy size={18} className="text-slate-400" />
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between py-2 border-t border-slate-50">
                    <span className="text-slate-500">Số tài khoản</span>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-navy-900 text-lg tracking-wide">{REGISTRATION_INFO.accountNumber}</span>
                      <button
                        onClick={() => handleCopy(REGISTRATION_INFO.accountNumber, "number")}
                        className="p-1.5 hover:bg-slate-100 rounded transition-colors"
                      >
                        {copied === "number" ? (
                          <CheckCircle size={18} className="text-green-500" />
                        ) : (
                          <Copy size={18} className="text-slate-400" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Transfer Note */}
                <div className="mt-4 p-3 bg-slate-50 rounded border border-slate-100">
                  <p className="text-sm text-slate-500 mb-1">Nội dung chuyển khoản</p>
                  <div className="flex items-center justify-between gap-2">
                    <p className="font-medium text-navy-900">{course.transferNote}</p>
                    <button
                      onClick={() => handleCopy(course.transferNote, "note")}
                      className="p-1.5 hover:bg-slate-200 rounded transition-colors shrink-0"
                    >
                      {copied === "note" ? (
                        <CheckCircle size={18} className="text-green-500" />
                      ) : (
                        <Copy size={18} className="text-slate-400" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Contact Buttons */}
                <div className="mt-5 pt-5 border-t border-slate-100">
                  <p className="text-sm text-slate-500 text-center mb-3">
                    Liên hệ hỗ trợ: {REGISTRATION_INFO.contact.phone} ({REGISTRATION_INFO.contact.name})
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    <a
                      href={`tel:${REGISTRATION_INFO.contact.phone}`}
                      className="flex items-center justify-center gap-2 py-3 bg-slate-100 text-slate-700 rounded font-medium hover:bg-slate-200 transition-colors"
                    >
                      <Phone size={18} />
                      <span>Gọi điện</span>
                    </a>
                    <a
                      href={`https://zalo.me/${REGISTRATION_INFO.contact.phone}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 py-3 bg-blue-500 text-white rounded font-medium hover:bg-blue-600 transition-colors"
                    >
                      <MessageCircle size={18} />
                      <span>Nhắn Zalo</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
