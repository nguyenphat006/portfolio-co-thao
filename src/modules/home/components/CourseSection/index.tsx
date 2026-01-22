"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, Calendar, Video, Sparkles, ArrowRight } from "lucide-react";
import { SECTION_CONTENT } from "./constants";
import { COURSES_DATA } from "@/modules/courses/constants";

export function CourseSection() {
  // Get the first (featured) course
  const course = COURSES_DATA[0];

  if (!course) return null;

  return (
    <section className="section-padding bg-brand-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <Link href={`/courses/${course.slug}`} className="block">
              <div className="relative aspect-4/5 overflow-hidden rounded-2xl bg-brand-100">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
                {/* Price Badge */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                  <span className="text-brand-500 font-bold text-lg">{course.price}</span>
                  <span className="text-slate-500 text-sm">{course.priceNote}</span>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-sm text-slate-500 uppercase tracking-widest mb-4">
              {SECTION_CONTENT.label}
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 leading-tight mb-2">
              {SECTION_CONTENT.title}
            </h2>
            <p className="font-handwriting text-2xl md:text-3xl text-brand-500 mb-4">
              {SECTION_CONTENT.subtitle}
            </p>
            <p className="text-slate-600 mb-6">
              {course.subtitle}
            </p>

            {/* Schedule Info */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center gap-3 p-3 bg-white rounded-xl">
                <div className="w-10 h-10 rounded-full bg-brand-50 flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-brand-500" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Lịch học</p>
                  <p className="text-sm font-medium text-navy-900">{course.schedule.days}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white rounded-xl">
                <div className="w-10 h-10 rounded-full bg-brand-50 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-brand-500" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Thời gian</p>
                  <p className="text-sm font-medium text-navy-900">{course.schedule.time}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white rounded-xl">
                <div className="w-10 h-10 rounded-full bg-brand-50 flex items-center justify-center">
                  <Video className="w-5 h-5 text-brand-500" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Hình thức</p>
                  <p className="text-sm font-medium text-navy-900">{course.schedule.format}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white rounded-xl">
                <div className="w-10 h-10 rounded-full bg-brand-50 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-brand-500" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Số buổi</p>
                  <p className="text-sm font-medium text-navy-900">{course.schedule.sessions}</p>
                </div>
              </div>
            </div>

            {/* Highlights */}
            <ul className="space-y-2 mb-8">
              {course.highlights.map((item, index) => (
                <li key={index} className="flex items-center gap-2 text-slate-600 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-500" />
                  {item}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <Link
              href={`/courses/${course.slug}`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-navy-900 text-white rounded-full font-medium hover:bg-brand-500 transition-colors"
            >
              {SECTION_CONTENT.ctaText}
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
