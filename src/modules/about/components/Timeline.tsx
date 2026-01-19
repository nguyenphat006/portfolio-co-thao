"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Crown, Mic, GraduationCap, Star } from "lucide-react";
import { TIMELINE_CHAPTERS } from "../constants";

const chapterIcons = [Crown, Mic, GraduationCap];

function TimelineNode({
  index,
  isActive
}: {
  index: number;
  isActive: boolean;
}) {
  const Icon = chapterIcons[index] || Star;

  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
      className={`relative z-10 w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500 ${isActive
        ? "bg-brand-500 shadow-lg shadow-brand-500/50"
        : "bg-white border-4 border-brand-200"
        }`}
    >
      <Icon className={`w-7 h-7 ${isActive ? "text-white" : "text-brand-500"}`} />

      {/* Ripple effect */}
      {isActive && (
        <>
          <span className="absolute inset-0 rounded-full bg-brand-500 animate-ping opacity-25" />
          <span className="absolute -inset-2 rounded-full border-2 border-brand-500/30" />
        </>
      )}
    </motion.div>
  );
}

// Curved connector between chapters
function CurvedConnector({ isEven, index }: { isEven: boolean; index: number }) {
  const gradientId = `gradient-${index}`;

  return (
    <div className="absolute left-1/2 -translate-x-1/2 top-16 w-full h-[calc(100%+5rem)] md:h-[calc(100%+8rem)] pointer-events-none overflow-visible">
      <svg
        className="w-full h-full"
        viewBox="0 0 200 400"
        fill="none"
        preserveAspectRatio="none"
      >
        <motion.path
          d={isEven
            ? "M100 0 C100 80, 160 120, 160 200 C160 280, 100 320, 100 400"
            : "M100 0 C100 80, 40 120, 40 200 C40 280, 100 320, 100 400"
          }
          stroke={`url(#${gradientId})`}
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
        />
        {/* Decorative dots along the path */}
        <motion.circle
          cx={isEven ? "160" : "40"}
          cy="200"
          r="4"
          fill="#BE185D"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9 }}
        />
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#BE185D" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#F472B6" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#E1B0B9" stopOpacity="0.3" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function TimelineChapter({
  chapter,
  index,
  totalChapters
}: {
  chapter: typeof TIMELINE_CHAPTERS[number];
  index: number;
  totalChapters: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0.3, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [80, 0]);

  const isEven = index % 2 === 0;
  const isLast = index === totalChapters - 1;

  return (
    <div ref={ref} className="relative">
      {/* Curved connector to next chapter */}
      {!isLast && <CurvedConnector isEven={isEven} index={index} />}

      {/* Timeline node */}
      <div className="flex justify-center mb-8">
        <TimelineNode index={index} isActive={true} />
      </div>

      {/* Content */}
      <motion.div
        style={{ opacity, y }}
        className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${isEven ? "" : "md:direction-rtl"
          }`}
      >
        {/* Text Content */}
        <div className={`${isEven ? "" : "md:order-2 direction-ltr"}`}>
          {/* Year badge */}
          <motion.div
            initial={{ opacity: 0, x: isEven ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 mb-4"
          >
            <span className="px-4 py-2 bg-brand-500 text-white text-sm font-bold rounded-full">
              {chapter.year}
            </span>
            <span className="text-slate-400 font-medium">{chapter.chapter}</span>
          </motion.div>

          {/* Title */}
          <h3 className="font-serif text-3xl md:text-4xl font-bold text-navy-900 mb-2">
            {chapter.title}
          </h3>

          <p className="font-handwriting text-xl text-brand-500 mb-4">
            {chapter.subtitle}
          </p>

          {/* Description */}
          <div className="prose text-slate-600 mb-6">
            {chapter.description.split('\n\n').map((paragraph, i) => (
              <p key={i} className="leading-relaxed text-sm md:text-base">{paragraph}</p>
            ))}
          </div>

          {/* Achievements as tags */}
          <div className="flex flex-wrap gap-2">
            {chapter.achievements.slice(0, 3).map((achievement, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="inline-flex items-center gap-1 px-3 py-1.5 bg-brand-50 text-brand-500 text-xs font-medium rounded-full"
              >
                <Star className="w-3 h-3" />
                {achievement}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Image */}
        <div className={`${isEven ? "md:order-2" : "md:order-1 direction-ltr"}`}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Decorative elements */}
            <div className={`absolute -inset-3 bg-brand-100 rounded-3xl ${isEven ? "rotate-3" : "-rotate-3"}`} />

            <div className="relative aspect-4/5 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={chapter.image}
                alt={chapter.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              {/* Chapter number overlay */}
              <div className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
                <span className="font-serif text-xl font-bold text-brand-500">
                  {chapter.id}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export function Timeline() {
  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-brand-100/50 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-brand-200/30 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="font-handwriting text-2xl md:text-3xl text-brand-500 mb-2">
            Câu chuyện
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy-900 uppercase tracking-tight mb-4">
            Hành trình của tôi
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Từ cô sinh viên 20 tuổi đăng quang Hoa khôi đến vị trí Giảng viên Đại học và Phó Tổng Giám đốc
          </p>
        </motion.div>

        {/* Timeline chapters */}
        <div className="space-y-20 md:space-y-32 max-w-5xl mx-auto">
          {TIMELINE_CHAPTERS.map((chapter, index) => (
            <TimelineChapter
              key={chapter.id}
              chapter={chapter}
              index={index}
              totalChapters={TIMELINE_CHAPTERS.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
