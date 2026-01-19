"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { HERO_CONTENT } from "./constants";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-linear-to-br from-brand-50 via-white to-brand-100">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-300/20 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1 animate-fade-in-up">
            {/* Greeting */}
            <p className="font-handwriting text-3xl md:text-4xl text-brand-500 mb-4">
              {HERO_CONTENT.greeting}
            </p>

            {/* Name */}
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-navy-900 uppercase tracking-tight mb-4">
              {HERO_CONTENT.name}
            </h1>

            {/* Title Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-500/10 border border-brand-200 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-brand-500" />
              <span className="text-sm font-medium text-brand-500">
                {HERO_CONTENT.title}
              </span>
            </div>

            {/* Slogan */}
            <p className="text-lg md:text-xl text-slate-600 max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed">
              {HERO_CONTENT.slogan}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Link
                href="/courses"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-brand-500 text-white rounded-full font-medium hover:bg-brand-900 transition-all shadow-lg shadow-brand-500/30 hover:shadow-xl hover:shadow-brand-500/40"
              >
                {HERO_CONTENT.ctaPrimary}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-navy-900 text-navy-900 rounded-full font-medium hover:bg-navy-900 hover:text-white transition-all"
              >
                {HERO_CONTENT.ctaSecondary}
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-brand-200">
              {HERO_CONTENT.stats.map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <p className="font-serif text-2xl md:text-3xl font-bold text-brand-500">
                    {stat.value}
                  </p>
                  <p className="text-sm text-slate-600 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative order-1 lg:order-2 flex justify-center animate-slide-in-right">
            <div className="relative">
              {/* Decorative Frame */}
              <div className="absolute -inset-4 bg-linear-to-br from-brand-200 to-brand-300 rounded-4xl rotate-3 opacity-50" />

              {/* Main Image Container */}
              <div className="relative w-72 h-96 md:w-80 md:h-112 lg:w-96 lg:h-128 rounded-4xl overflow-hidden shadow-2xl">
                <Image
                  src={HERO_CONTENT.image}
                  alt={HERO_CONTENT.fullName}
                  fill
                  priority
                  sizes="(max-width: 768px) 288px, (max-width: 1024px) 320px, 384px"
                  className="object-cover"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-linear-to-t from-brand-500/20 via-transparent to-transparent" />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-4 -left-4 md:-left-8 bg-white px-6 py-4 rounded-2xl shadow-xl border border-brand-100 animate-float">
                <p className="font-handwriting text-2xl text-brand-500">Welcome!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
