"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Facebook, Instagram, Youtube, Linkedin, Mail, Phone, MapPin, Heart } from "lucide-react";
import { SITE_CONFIG, SOCIAL_LINKS, NAV_LINKS } from "@/lib/constants";

const socialIcons = [
  { icon: Facebook, href: SOCIAL_LINKS.facebook, label: "Facebook" },
  { icon: Instagram, href: SOCIAL_LINKS.instagram, label: "Instagram" },
  { icon: Youtube, href: SOCIAL_LINKS.youtube, label: "YouTube" },
  { icon: Linkedin, href: SOCIAL_LINKS.linkedin, label: "LinkedIn" },
];

export function Footer() {
  return (
    <footer className="bg-navy-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="container-custom py-16">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="font-handwriting text-3xl md:text-4xl text-brand-200 mb-3">
              Đừng bỏ lỡ!
            </h3>
            <h4 className="font-serif text-2xl md:text-3xl uppercase tracking-wide mb-4">
              Đăng ký nhận tin
            </h4>
            <p className="text-white/70 mb-8">
              Nhận thông tin về các khóa học mới, sự kiện và những chia sẻ độc quyền từ tôi.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Email của bạn..."
                className="flex-1 px-5 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-brand-500 focus:bg-white/15 transition-all"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="px-8 py-3 bg-brand-500 text-white rounded-full font-medium hover:bg-brand-900 transition-colors shadow-lg shadow-brand-500/25"
              >
                Đăng ký
              </motion.button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="font-serif text-2xl font-bold text-white">
              {SITE_CONFIG.name}
            </Link>
            <p className="mt-4 text-white/70 text-sm leading-relaxed">
              {SITE_CONFIG.description}
            </p>
            <div className="flex items-center gap-3 mt-6">
              {socialIcons.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-brand-500 hover:text-white transition-colors"
                  aria-label={label}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="font-serif text-lg font-semibold mb-4 uppercase tracking-wide">
              Điều hướng
            </h5>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-brand-200 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h5 className="font-serif text-lg font-semibold mb-4 uppercase tracking-wide">
              Dịch vụ
            </h5>
            <ul className="space-y-3 text-sm text-white/70">
              <li>
                <Link href="/courses" className="hover:text-brand-200 transition-colors">
                  Khóa học Online
                </Link>
              </li>
              <li>
                <Link href="/courses" className="hover:text-brand-200 transition-colors">
                  Workshop Offline
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brand-200 transition-colors">
                  Tư vấn 1-1
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brand-200 transition-colors">
                  Hợp tác Doanh nghiệp
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h5 className="font-serif text-lg font-semibold mb-4 uppercase tracking-wide">
              Liên hệ
            </h5>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-brand-200" />
                <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-brand-200 transition-colors">
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-brand-200" />
                <a href={`tel:${SITE_CONFIG.phone}`} className="hover:text-brand-200 transition-colors">
                  {SITE_CONFIG.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-brand-200 mt-0.5" />
                <span>Hồ Chí Minh, Việt Nam</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/50">
          <p>© {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart size={14} className="text-brand-500 fill-brand-500" /> in Vietnam
          </p>
        </div>
      </div>
    </footer>
  );
}
