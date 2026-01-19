"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show header when scrolling up, hide when scrolling down
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
        setIsMenuOpen(false); // Close mobile menu when hiding
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.header
      initial={{ y: 0, opacity: 1 }}
      animate={{
        y: isVisible ? 0 : -100,
        opacity: isVisible ? 1 : 0
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-4xl"
    >
      {/* Floating Pill Header */}
      <nav className="flex items-center justify-between h-14 md:h-16 px-4 md:px-8 bg-white/80 backdrop-blur-xl border border-white/50 rounded-full shadow-lg shadow-black/5">
        {/* Logo */}
        <Link
          href="/"
          className="font-serif text-lg md:text-xl font-bold text-navy-900 hover:text-brand-500 transition-colors italic"
        >
          {SITE_CONFIG.name}
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8">
          {NAV_LINKS.slice(0, 3).map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-navy-900 transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <Link
          href="/contact"
          className="hidden md:inline-flex items-center justify-center px-5 py-2 text-sm font-medium text-navy-900 bg-transparent border border-navy-900 rounded-full hover:bg-navy-900 hover:text-white transition-all"
        >
          Liên hệ ngay
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-navy-900 hover:text-brand-500 transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-2 bg-white/95 backdrop-blur-xl border border-white/50 rounded-3xl shadow-lg overflow-hidden"
          >
            <div className="py-3 px-2 space-y-1">
              {NAV_LINKS.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-3 px-4 text-navy-900 hover:text-brand-500 hover:bg-brand-50 rounded-xl transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.05 }}
                className="px-2 pt-2"
              >
                <Link
                  href="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-3 text-center text-white bg-navy-900 rounded-full hover:bg-brand-500 transition-colors"
                >
                  Liên hệ ngay
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
