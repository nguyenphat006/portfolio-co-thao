"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { 
  Clock, Calendar, Video, Sparkles, CheckCircle, ArrowLeft
} from "lucide-react";
import { INSTRUCTOR_INFO, REGISTRATION_INFO } from "@/lib/constants";
import { COURSES_DATA } from "@/modules/courses/constants";
import { RegistrationModal } from "./course-modal";

interface CourseDetailPageProps {
  slug: string;
}

export function CourseDetailPage({ slug }: CourseDetailPageProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const course = COURSES_DATA.find((c) => c.slug === slug);
  
  if (!course) {
    notFound();
  }

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
            <Link 
              href="/courses" 
              className="inline-flex items-center gap-2 text-slate-500 hover:text-brand-500 transition-colors mb-6"
            >
              <ArrowLeft size={18} />
              <span>Tất cả khóa học</span>
            </Link>
            <p className="font-handwriting text-2xl md:text-3xl text-brand-500 mb-2">
              Khóa học
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-navy-900 mb-4">
              {course.title}
            </h1>
            <p className="text-xl text-slate-600">
              {course.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Course Detail */}
      <section className="py-12 md:py-16">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="aspect-4/5 overflow-hidden rounded-2xl bg-brand-100 sticky top-24">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                {/* Price Badge */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-5 py-3 rounded-2xl shadow-lg">
                  <p className="text-xs text-slate-400 mb-1">Học phí</p>
                  <p className="text-brand-500 font-bold text-2xl">{course.price}</p>
                  <p className="text-slate-500 text-sm">{course.priceNote}</p>
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-8"
            >
              {/* Description */}
              <div>
                <h2 className="font-serif text-2xl font-bold text-navy-900 mb-4">
                  Giới thiệu khóa học
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  {course.description}
                </p>
              </div>

              {/* Schedule */}
              <div>
                <h2 className="font-serif text-2xl font-bold text-navy-900 mb-4">
                  Thông tin khóa học
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-brand-100">
                    <div className="w-12 h-12 rounded-full bg-brand-50 flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-brand-500" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400">Lịch học</p>
                      <p className="font-medium text-navy-900">{course.schedule.days}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-brand-100">
                    <div className="w-12 h-12 rounded-full bg-brand-50 flex items-center justify-center">
                      <Clock className="w-6 h-6 text-brand-500" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400">Thời gian</p>
                      <p className="font-medium text-navy-900">{course.schedule.time}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-brand-100">
                    <div className="w-12 h-12 rounded-full bg-brand-50 flex items-center justify-center">
                      <Video className="w-6 h-6 text-brand-500" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400">Hình thức</p>
                      <p className="font-medium text-navy-900">{course.schedule.format}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-brand-100">
                    <div className="w-12 h-12 rounded-full bg-brand-50 flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-brand-500" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400">Số buổi</p>
                      <p className="font-medium text-navy-900">{course.schedule.sessions}</p>
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-sm text-slate-500">
                  <span className="font-medium text-navy-900">Khai giảng:</span> {course.schedule.startDate}
                </p>
              </div>

              {/* Highlights */}
              <div>
                <h2 className="font-serif text-2xl font-bold text-navy-900 mb-4">
                  Bạn sẽ nhận được
                </h2>
                <ul className="space-y-3">
                  {course.highlights.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                      <span className="text-slate-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Instructor */}
              <div>
                <h2 className="font-serif text-2xl font-bold text-navy-900 mb-4">
                  Giảng viên
                </h2>
                <div className="p-6 bg-white rounded-2xl border border-brand-100">
                  <h3 className="font-serif text-xl font-bold text-navy-900 mb-1">
                    {INSTRUCTOR_INFO.name}
                  </h3>
                  <p className="text-brand-500 font-medium mb-4">
                    {INSTRUCTOR_INFO.title}
                  </p>
                  <ul className="space-y-2">
                    {INSTRUCTOR_INFO.credentials.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-slate-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-400 mt-2 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* CTA */}
              <div className="sticky bottom-4 pt-4">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full py-4 bg-brand-500 text-white rounded-full font-semibold text-lg hover:bg-brand-600 transition-colors shadow-lg shadow-brand-500/30"
                >
                  Đăng ký ngay - {course.price}
                </button>
                <p className="text-center text-sm text-slate-500 mt-3">
                  Liên hệ: {REGISTRATION_INFO.contact.phone} ({REGISTRATION_INFO.contact.name})
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Registration Modal */}
      <RegistrationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        course={course}
      />
    </div>
  );
}
