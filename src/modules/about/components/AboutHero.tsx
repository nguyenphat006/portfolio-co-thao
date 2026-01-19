"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ImQuotesRight } from 'react-icons/im'
import { HERO_CONTENT, STATS } from "../constants";

export function AboutHero() {
  return (
    <section className="pt-28 pb-12 md:pt-32 md:pb-16 bg-brand-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left - Image (4 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4"
          >
            <div className="relative max-w-xs mx-auto lg:max-w-none">
              {/* Decorative background */}
              <div className="absolute -inset-3 bg-brand-200/50 rounded-3xl rotate-3" />
              <div className="relative aspect-4/5 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={HERO_CONTENT.image}
                  alt={HERO_CONTENT.name}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 80vw, 30vw"
                />
              </div>
            </div>
          </motion.div>

          {/* Right - Content (8 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-8"
          >
            {/* Breadcrumb style title */}
            <p className="text-brand-500 font-medium text-sm mb-2">Về tôi</p>

            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 mb-4">
              {HERO_CONTENT.name}
            </h1>

            <p className="text-slate-500 text-lg mb-6">
              Hoa khôi VMU 2014 • MC VTV9 • Giảng viên FPT Polytechnic
            </p>

            {/* Quote */}
            <div className="relative bg-white rounded-2xl p-6 shadow-sm border border-brand-100 mb-8">
              <ImQuotesRight className="absolute -top-3 -left-3 w-10 h-10 text-brand-200" />
              <blockquote className="font-serif text-lg md:text-xl text-navy-900 leading-relaxed italic">
                &ldquo;Vẻ đẹp đích thực đến từ trí tuệ, sự nỗ lực không ngừng và khát vọng cống hiến.&rdquo;
              </blockquote>
              <p className="text-sm text-slate-400 mt-3">— Triết lý sống</p>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {STATS.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="text-center p-4 bg-white rounded-xl border border-brand-50"
                >
                  <p className="font-serif text-2xl md:text-3xl font-bold text-brand-500">
                    {stat.value}
                  </p>
                  <p className="text-xs text-slate-500 mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
