"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { COURSES, SECTION_CONTENT } from "./constants";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export function CourseSection() {
  return (
    <section className="section-padding bg-brand-50">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-start justify-between mb-12 md:mb-16"
        >
          <div>
            <p className="text-sm text-slate-500 uppercase tracking-widest mb-4">
              {SECTION_CONTENT.label}
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 leading-tight">
              {SECTION_CONTENT.title}
              <br />
              <span className="font-handwriting text-brand-500 normal-case font-normal">
                {SECTION_CONTENT.subtitle}
              </span>
            </h2>
          </div>

          {/* Navigation Arrows */}
          <div className="hidden md:flex items-center gap-3">
            <button className="w-12 h-12 rounded-full border border-slate-300 flex items-center justify-center hover:bg-white hover:border-brand-500 transition-colors">
              <ChevronLeft className="w-5 h-5 text-slate-600" />
            </button>
            <button className="w-12 h-12 rounded-full border border-slate-300 flex items-center justify-center hover:bg-white hover:border-brand-500 transition-colors">
              <ChevronRight className="w-5 h-5 text-slate-600" />
            </button>
          </div>
        </motion.div>

        {/* Course Grid - Simple Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {COURSES.map((course) => (
            <motion.article
              key={course.id}
              variants={itemVariants}
              className="group"
            >
              {/* Image with organic shape */}
              <Link href={`/courses/${course.id}`} className="block mb-5">
                <div className="relative aspect-square overflow-hidden rounded-2xl bg-brand-100">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </Link>

              {/* Content - Simple */}
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-serif text-xl md:text-2xl font-bold text-navy-900 italic group-hover:text-brand-500 transition-colors">
                  {course.title}
                </h3>
                <span className="shrink-0 text-sm text-slate-500 mt-1">
                  {course.duration}
                </span>
              </div>

              <p className="text-slate-600 text-sm mt-2 mb-4 line-clamp-2">
                {course.description}
              </p>

              {/* Simple Button */}
              <Link
                href={`/courses/${course.id}`}
                className="inline-flex items-center justify-center px-6 py-3 bg-navy-900 text-white text-sm font-medium rounded-full hover:bg-brand-500 transition-colors"
              >
                Xem thêm
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
