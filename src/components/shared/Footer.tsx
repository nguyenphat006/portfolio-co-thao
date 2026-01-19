"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Facebook, Instagram, Youtube, Mail, Heart } from "lucide-react";
import { SITE_CONFIG, SOCIAL_LINKS, NAV_LINKS } from "@/lib/constants";

const socialIcons = [
  { icon: Facebook, href: SOCIAL_LINKS.facebook, label: "Facebook" },
  { icon: Instagram, href: SOCIAL_LINKS.instagram, label: "Instagram" },
  { icon: Youtube, href: SOCIAL_LINKS.youtube, label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="bg-brand-50">
      {/* Newsletter Section */}
      <div className="border-y border-brand-100">
        <div className="container-custom py-12 md:py-16">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="font-handwriting text-2xl md:text-3xl text-brand-500 mb-2">
              Đừng bỏ lỡ!
            </h3>
            <h4 className="font-serif text-xl md:text-2xl text-navy-900 uppercase tracking-wide mb-3">
              Đăng ký nhận tin
            </h4>
            <p className="text-slate-500 text-sm mb-6">
              Nhận thông tin về các khóa học mới và chia sẻ độc quyền.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Email của bạn..."
                className="flex-1 px-5 py-3 rounded-full bg-white border border-brand-100 text-navy-900 placeholder:text-slate-400 focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 transition-all text-sm"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="px-6 py-3 bg-brand-500 text-white rounded-full font-medium hover:bg-brand-600 transition-colors text-sm"
              >
                Đăng ký
              </motion.button>
            </form>
          </div>
        </div>
      </div>

      {/* Simple Footer */}
      <div className="container-custom py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Social */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link href="/" className="font-serif text-xl font-bold text-navy-900 italic">
              {SITE_CONFIG.name}
            </Link>
            <div className="flex items-center gap-2">
              {socialIcons.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-white border border-brand-100 text-slate-500 hover:bg-brand-500 hover:text-white hover:border-brand-500 transition-colors"
                  aria-label={label}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links - inline */}
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-slate-500 hover:text-brand-500 transition-colors text-sm"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Contact */}
          <a
            href={`mailto:${SITE_CONFIG.email}`}
            className="flex items-center gap-2 text-slate-500 hover:text-brand-500 transition-colors text-sm"
          >
            <Mail size={14} />
            {SITE_CONFIG.email}
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-brand-100">
        <div className="container-custom py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart size={12} className="text-brand-500 fill-brand-500" /> in Vietnam
          </p>
        </div>
      </div>
    </footer>
  );
}
