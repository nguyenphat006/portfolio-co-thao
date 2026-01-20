"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, ArrowRight } from "lucide-react";
import { PAGE_CONTENT, COURSES_DATA, CourseItem } from "./constants";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

// Course Card Component
function CourseCard({ course }: { course: CourseItem }) {
  const levelColors = {
    "Cơ bản": "bg-green-100 text-green-700",
    "Nâng cao": "bg-blue-100 text-blue-700",
    "Chuyên sâu": "bg-purple-100 text-purple-700",
  };

  return (
    <motion.article
      variants={itemVariants}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
    >
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={course.image}
          alt={course.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Level Badge */}
        <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium ${levelColors[course.level]}`}>
          {course.level}
        </span>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-serif text-xl font-bold text-navy-900 mb-2 group-hover:text-brand-500 transition-colors">
          {course.title}
        </h3>
        <p className="text-slate-500 text-sm mb-4 line-clamp-2">
          {course.description}
        </p>

        {/* Meta */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
          <div className="flex items-center gap-2 text-slate-400 text-sm">
            <Clock size={16} />
            <span>{course.duration}</span>
          </div>
          {course.price && (
            <span className="text-brand-500 font-semibold text-sm">
              {course.price}
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export function CoursesPage() {
  return (
    <div className="min-h-screen bg-brand-50">
      {/* Hero Section */}
      <section className="pt-16 pb-12 md:pt-24 md:pb-16 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-navy-900 mb-4">
              {PAGE_CONTENT.title}
            </h1>
            <p className="font-handwriting text-2xl md:text-3xl text-brand-500 mb-4">
              {PAGE_CONTENT.subtitle}
            </p>
            <p className="text-slate-500 text-lg">
              {PAGE_CONTENT.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-12 md:py-16">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
          >
            {COURSES_DATA.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-xl mx-auto"
          >
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-navy-900 mb-4">
              Bạn muốn tư vấn khóa học phù hợp?
            </h2>
            <p className="text-slate-500 mb-6">
              Liên hệ ngay để được tư vấn miễn phí và nhận ưu đãi đặc biệt.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-navy-900 text-white rounded-full font-medium hover:bg-brand-500 transition-colors"
            >
              Liên hệ ngay
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
