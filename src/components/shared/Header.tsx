"use client";

import { useState, useCallback, memo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok, FaLinkedinIn } from "react-icons/fa";
import { NAV_LINKS, SOCIAL_LINKS, SITE_CONFIG } from "@/lib/constants";
import { SiZalo } from "react-icons/si"
const SOCIAL_ICONS = [
  { icon: FaFacebookF, href: SOCIAL_LINKS.facebook, label: "Facebook" },
  { icon: FaInstagram, href: SOCIAL_LINKS.instagram, label: "Instagram" },
  { icon: FaYoutube, href: SOCIAL_LINKS.youtube, label: "YouTube" },
  { icon: SiZalo, href: SOCIAL_LINKS.zalo, label: "Zalo" },
  // { icon: FaLinkedinIn, href: SOCIAL_LINKS.linkedin, label: "LinkedIn" },
];

// Optimized animation variants - defined outside component to prevent recreation
const menuPanelVariants = {
  closed: { x: "-100%" },
  open: { x: 0 },
};

const backdropVariants = {
  closed: { opacity: 0 },
  open: { opacity: 1 },
};

const navItemVariants = {
  closed: { opacity: 0, x: -20 },
  open: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.1 + i * 0.04, duration: 0.3 },
  }),
};

const ctaVariants = {
  closed: { opacity: 0, y: 20 },
  open: { opacity: 1, y: 0, transition: { delay: 0.35 } },
};

// Memoized Social Icon Component
const SocialIcon = memo(function SocialIcon({
  icon: Icon,
  href,
  label,
}: {
  icon: typeof FaFacebookF;
  href: string;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 text-slate-500 hover:text-brand-500 hover:bg-brand-50 rounded-lg transition-colors duration-200"
      aria-label={label}
    >
      <Icon size={18} />
    </a>
  );
});

// Memoized Nav Link Component
const NavLink = memo(function NavLink({
  href,
  label,
  index,
  onClick,
}: {
  href: string;
  label: string;
  index: number;
  onClick: () => void;
}) {
  return (
    <motion.li
      custom={index}
      variants={navItemVariants}
      initial="closed"
      animate="open"
    >
      <Link
        href={href}
        onClick={onClick}
        className="group flex items-center py-4 text-lg font-medium text-slate-600 hover:text-navy-900 transition-colors"
      >
        <span className="w-8 h-[2px] bg-transparent group-hover:bg-brand-500 mr-4 transition-all duration-200" />
        {label}
      </Link>
    </motion.li>
  );
});

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  return (
    <>
      {/* ===== DESKTOP: Fixed Left Sidebar ===== */}
      <aside className="hidden md:flex fixed left-0 top-0 h-screen w-20 bg-white/95 backdrop-blur-xl border-r border-slate-200/50 z-50 flex-col items-center justify-between py-6">
        {/* Menu Toggle Button */}
        <button
          onClick={toggleMenu}
          className="p-3 text-navy-900 hover:text-brand-500 hover:bg-brand-50 rounded-xl transition-colors duration-200"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Social Icons - Vertically Centered */}
        <nav className="flex flex-col items-center gap-5">
          {SOCIAL_ICONS.map((social) => (
            <SocialIcon key={social.label} {...social} />
          ))}
        </nav>

        {/* Bottom Spacer for Visual Balance */}
        <div className="w-8 h-8" />
      </aside>

      {/* ===== MOBILE: Top Header Bar ===== */}
      <header className="md:hidden fixed top-0 left-0 right-0 h-16 bg-white/95 backdrop-blur-xl border-b border-slate-200/50 z-50 flex items-center justify-between px-4">
        {/* Menu Toggle Button */}
        <button
          onClick={toggleMenu}
          className="p-2 text-navy-900 hover:text-brand-500 transition-colors duration-200"
          aria-label="Toggle menu"
        >
          <Menu size={24} />
        </button>

        {/* Logo */}
        <Link
          href="/"
          className="font-serif text-lg font-bold text-navy-900 italic"
        >
          {SITE_CONFIG.name}
        </Link>

        {/* Placeholder for visual balance */}
        <div className="w-10" />
      </header>

      {/* ===== Navigation Menu Overlay ===== */}
      <AnimatePresence mode="wait">
        {isMenuOpen && (
          <>
            {/* Backdrop - only on desktop */}
            <motion.div
              variants={backdropVariants}
              initial="closed"
              animate="open"
              exit="closed"
              transition={{ duration: 0.25 }}
              className="hidden md:block fixed inset-0 bg-navy-900/50 backdrop-blur-sm z-40"
              onClick={closeMenu}
            />

            {/* Navigation Panel */}
            <motion.nav
              variants={menuPanelVariants}
              initial="closed"
              animate="open"
              exit="closed"
              transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
              className="fixed inset-0 md:inset-auto md:left-0 md:top-0 md:h-screen md:w-80 bg-white z-50 will-change-transform"
            >
              <div className="flex flex-col h-full py-8 md:py-12 px-6 md:px-8">
                {/* Header Row */}
                <div className="flex items-center justify-between mb-8 md:mb-12">
                  {/* Back/Close Button */}
                  <button
                    onClick={closeMenu}
                    className="p-2 -ml-2 text-navy-900 hover:text-brand-500 transition-colors duration-200"
                    aria-label="Close menu"
                  >
                    <X size={24} />
                  </button>

                  {/* Logo / Brand */}
                  <Link
                    href="/"
                    onClick={closeMenu}
                    className="font-serif text-xl md:text-2xl font-bold text-navy-900 italic"
                  >
                    {SITE_CONFIG.name}
                  </Link>

                  {/* Spacer */}
                  <div className="w-10" />
                </div>

                {/* Navigation Links */}
                <ul className="flex-1 space-y-1">
                  {NAV_LINKS.map((link, index) => (
                    <NavLink
                      key={link.href}
                      href={link.href}
                      label={link.label}
                      index={index}
                      onClick={closeMenu}
                    />
                  ))}
                </ul>

                {/* Social Icons - Mobile Only (Bottom) */}
                <div className="md:hidden flex items-center justify-center gap-4 py-6 border-t border-slate-100">
                  {SOCIAL_ICONS.map((social) => (
                    <SocialIcon key={social.label} {...social} />
                  ))}
                </div>

                {/* CTA Button */}
                <motion.div variants={ctaVariants} initial="closed" animate="open">
                  <Link
                    href="/contact"
                    onClick={closeMenu}
                    className="block w-full py-4 text-center text-white bg-navy-900 rounded-full hover:bg-brand-500 transition-colors duration-200 font-medium"
                  >
                    Liên hệ ngay
                  </Link>
                </motion.div>

                {/* Copyright - Bottom */}
                <p className="text-center text-xs text-slate-400 mt-6">
                  © {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
                </p>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
