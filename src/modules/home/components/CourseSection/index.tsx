"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, Users, Star, Play } from "lucide-react";
import { COURSES, SECTION_CONTENT } from "./constants";

export function CourseSection() {
  return (
    <section className="section-padding bg-brand-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16 animate-fade-in-up">
          <p className="font-handwriting text-2xl md:text-3xl text-brand-500 mb-2">
            {SECTION_CONTENT.subtitle}
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 uppercase tracking-tight mb-4">
            {SECTION_CONTENT.title}
          </h2>
          <p className="text-slate-600 leading-relaxed">
            {SECTION_CONTENT.description}
          </p>
        </div>

        {/* Course Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {COURSES.map((course, index) => (
            <article
              key={course.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-brand-100 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-navy-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <Play className="w-5 h-5 text-brand-500 ml-1" fill="currentColor" />
                  </div>
                </div>

                {/* Type Badge */}
                <span className={`absolute top-4 left-4 px-3 py-1 text-xs font-medium rounded-full ${
                  course.type === "Online" 
                    ? "bg-brand-500 text-white" 
                    : "bg-white text-navy-900"
                }`}>
                  {course.type}
                </span>

                {/* Featured Badge */}
                {course.featured && (
                  <span className="absolute top-4 right-4 px-3 py-1 bg-amber-400 text-navy-900 text-xs font-medium rounded-full">
                    Nổi bật
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-serif text-xl font-bold text-navy-900 mb-2 group-hover:text-brand-500 transition-colors">
                  {course.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-2">
                  {course.description}
                </p>

                {/* Meta */}
                <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {course.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="w-3.5 h-3.5" />
                    {course.students}
                  </span>
                  <span className="flex items-center gap-1 text-amber-500">
                    <Star className="w-3.5 h-3.5" fill="currentColor" />
                    {course.rating}
                  </span>
                </div>

                {/* CTA */}
                <Link
                  href={`/courses/${course.id}`}
                  className="inline-flex items-center gap-1 text-sm font-medium text-brand-500 hover:text-brand-900 transition-colors"
                >
                  Xem chi tiết
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-12">
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-brand-500 text-brand-500 rounded-full font-medium hover:bg-brand-500 hover:text-white transition-all"
          >
            {SECTION_CONTENT.ctaText}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
