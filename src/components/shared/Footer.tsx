"use client";

import Link from "next/link";
import { Facebook, Instagram, Youtube, Mail, Heart, Phone, MapPin } from "lucide-react";
import { SITE_CONFIG, SOCIAL_LINKS, NAV_LINKS } from "@/lib/constants";

const socialIcons = [
  { icon: Facebook, href: SOCIAL_LINKS.facebook, label: "Facebook" },
  { icon: Instagram, href: SOCIAL_LINKS.instagram, label: "Instagram" },
  { icon: Youtube, href: SOCIAL_LINKS.youtube, label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="bg-brand-50 border-t border-brand-100">
      <div className="container-custom py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Brand & Description */}
            <div>
              <Link href="/" className="inline-block font-serif text-xl md:text-2xl font-bold text-navy-900 italic mb-3">
                {SITE_CONFIG.name}
              </Link>
              <p className="text-slate-500 text-sm leading-relaxed mb-4">
                {SITE_CONFIG.title}
              </p>
              {/* Social Icons */}
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

            {/* Navigation Links */}
            <div>
              <h3 className="font-semibold text-navy-900 mb-4 text-sm uppercase tracking-wide">Liên kết</h3>
              <nav className="flex flex-col gap-2">
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
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-semibold text-navy-900 mb-4 text-sm uppercase tracking-wide">Liên hệ</h3>
              <div className="flex flex-col gap-3">
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-center gap-2 text-slate-500 hover:text-brand-500 transition-colors text-sm"
                >
                  <Mail size={16} className="shrink-0" />
                  <span>{SITE_CONFIG.email}</span>
                </a>
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="flex items-center gap-2 text-slate-500 hover:text-brand-500 transition-colors text-sm"
                >
                  <Phone size={16} className="shrink-0" />
                  <span>{SITE_CONFIG.phone}</span>
                </a>
                <div className="flex items-center gap-2 text-slate-500 text-sm">
                  <MapPin size={16} className="shrink-0" />
                  <span>TP. Hồ Chí Minh, Việt Nam</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-brand-100">
        <div className="container-custom py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} {SITE_CONFIG.fullName}. All rights reserved.</p>
          <a
            href="https://github.com/nguyenphat006"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-brand-500 transition-colors"
          >
            Made with <Heart size={12} className="text-brand-500 fill-brand-500" /> in Vietnam
          </a>
        </div>
      </div>
    </footer>
  );
}
