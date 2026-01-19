"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ABOUT_CONTENT, HIGHLIGHTS } from "./constants";

export function AboutSection() {
  return (
    <section className="section-padding bg-brand-300 overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Images - Bento Grid Style */}
          <div className="relative animate-slide-in-left">
            <div className="grid grid-cols-12 gap-4">
              {/* Large Image */}
              <div className="col-span-7 row-span-2">
                <div className="polaroid -rotate-2 hover:rotate-0 transition-transform duration-300">
                  <div className="relative aspect-3/4 bg-brand-100 rounded overflow-hidden">
                    <Image
                      src={ABOUT_CONTENT.images[0]}
                      alt="Portrait"
                      fill
                      sizes="(max-width: 768px) 60vw, 30vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Small Images */}
              <div className="col-span-5 space-y-4">
                <div className="polaroid rotate-3 hover:rotate-0 transition-transform duration-300">
                  <div className="relative aspect-square bg-brand-100 rounded overflow-hidden">
                    <Image
                      src={ABOUT_CONTENT.images[1]}
                      alt="Event"
                      fill
                      sizes="(max-width: 768px) 40vw, 20vw"
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="polaroid -rotate-1 hover:rotate-0 transition-transform duration-300">
                  <div className="relative aspect-square bg-brand-100 rounded overflow-hidden">
                    <Image
                      src={ABOUT_CONTENT.images[2]}
                      alt="Teaching"
                      fill
                      sizes="(max-width: 768px) 40vw, 20vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="animate-slide-in-right">
            {/* Greeting */}
            <p className="font-handwriting text-3xl text-white mb-2">
              {ABOUT_CONTENT.greeting}
            </p>

            {/* Title */}
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white uppercase tracking-tight mb-6">
              {ABOUT_CONTENT.title}
            </h2>

            {/* Description */}
            <div className="space-y-4 text-white/90 mb-8">
              {ABOUT_CONTENT.description.split('\n\n').map((paragraph, index) => (
                <p key={index} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Signature */}
            <p className="font-handwriting text-3xl text-white mb-8">
              {ABOUT_CONTENT.signature}
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {HIGHLIGHTS.map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-colors"
                >
                  <Icon className="w-6 h-6 text-white mx-auto mb-2" />
                  <p className="text-xs text-white/70 uppercase tracking-wide">{label}</p>
                  <p className="text-sm font-medium text-white mt-1">{value}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Link
              href="/about"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-white text-brand-500 rounded-full font-medium hover:bg-brand-50 transition-colors"
            >
              Xem thêm về tôi
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
