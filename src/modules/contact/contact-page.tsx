"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

const contactInfo = [
  { icon: Mail, label: "Email", value: SITE_CONFIG.email, href: `mailto:${SITE_CONFIG.email}` },
  { icon: Phone, label: "Điện thoại", value: SITE_CONFIG.phone, href: `tel:${SITE_CONFIG.phone}` },
  { icon: MapPin, label: "Địa điểm", value: "TP. Hồ Chí Minh, Việt Nam", href: null },
];

export function ContactPage() {
  return (
    <section className="pt-28 pb-16 md:pt-32 md:pb-24 bg-brand-50 min-h-screen">
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
            <form className="space-y-5">
              {/* Name & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-navy-900 mb-2">
                    Họ và tên
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Nguyễn Văn A"
                    className="w-full px-4 py-3 rounded-xl bg-brand-50 border border-brand-100 text-navy-900 placeholder:text-slate-400 focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 transition-all text-sm"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-navy-900 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="email@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-brand-50 border border-brand-100 text-navy-900 placeholder:text-slate-400 focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 transition-all text-sm"
                    required
                  />
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
                  className="w-full px-4 py-3 rounded-xl bg-brand-50 border border-brand-100 text-navy-900 placeholder:text-slate-400 focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 transition-all text-sm"
                  required
                />
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
                  className="w-full px-4 py-3 rounded-xl bg-brand-50 border border-brand-100 text-navy-900 placeholder:text-slate-400 focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 transition-all text-sm resize-none"
                  required
                />
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-brand-500 text-white rounded-xl font-medium hover:bg-brand-600 transition-colors"
              >
                <Send className="w-4 h-4" />
                Gửi tin nhắn
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
