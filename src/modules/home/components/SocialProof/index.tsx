"use client";

import Image from "next/image";
import { Quote } from "lucide-react";
import { FEATURED_QUOTE, MEDIA_PARTNERS } from "./constants";

export function SocialProof() {
  // Duplicate array 3 times for seamless infinite scroll
  const duplicatedPartners = [...MEDIA_PARTNERS, ...MEDIA_PARTNERS, ...MEDIA_PARTNERS];

  return (
    <section className="py-16 md:py-20 bg-white border-y border-brand-100 overflow-hidden">
      <div className="container-custom">
        {/* Quote */}
        <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in-up">
          <Quote className="w-10 h-10 text-brand-200 mx-auto mb-6 rotate-180" />
          <blockquote className="font-serif text-xl md:text-2xl text-navy-900 italic leading-relaxed mb-4">
            &ldquo;{FEATURED_QUOTE.text}&rdquo;
          </blockquote>
          <cite className="text-sm font-medium text-brand-500 not-italic">
            — {FEATURED_QUOTE.source}
          </cite>
        </div>

        {/* Media Partners - Infinite Slider */}
        <div>
          <p className="text-center text-sm text-slate-600 uppercase tracking-widest mb-8">
            Được nhắc đến bởi
          </p>

          {/* Slider Container with mask */}
          <div className="relative slider-mask">
            {/* Infinite Slider Track */}
            <div className="flex animate-infinite-scroll">
              {duplicatedPartners.map((partner, index) => (
                <div
                  key={`${partner.name}-${index}`}
                  className="shrink-0 mx-8 md:mx-12 lg:mx-14 flex items-center justify-center"
                >
                  <div className="relative grayscale hover:grayscale-0 opacity-40 hover:opacity-100 transition-all duration-300 h-10 md:h-12 lg:h-14 flex items-center">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={partner.width}
                      height={partner.height}
                      className="object-contain h-full w-auto"
                      unoptimized
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
