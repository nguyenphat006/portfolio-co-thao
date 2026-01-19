"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GALLERY_LEFT, GALLERY_RIGHT, SECTION_CONTENT } from "./constants";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export function Gallery() {
  return (
    <section className="section-padding bg-brand-50/50">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12 md:mb-16"
        >
          <p className="font-handwriting text-2xl md:text-3xl text-brand-500 mb-2">
            {SECTION_CONTENT.subtitle}
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 uppercase tracking-tight mb-4">
            {SECTION_CONTENT.title}
          </h2>
          <p className="text-slate-600 leading-relaxed">
            {SECTION_CONTENT.description}
          </p>
        </motion.div>

        {/* Organic Bento Grid - 2 Column Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4"
        >
          {/* LEFT COLUMN - 1/3 width */}
          <div className="md:col-span-1 flex flex-col gap-3 md:gap-4">
            {GALLERY_LEFT.map((image) => (
              <motion.div
                key={image.id}
                variants={itemVariants}
                className={`group relative overflow-hidden rounded-2xl md:rounded-3xl ${image.className}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-navy-900/0 group-hover:bg-navy-900/20 transition-colors duration-300" />
              </motion.div>
            ))}
          </div>

          {/* RIGHT COLUMNS - 2/3 width with sub-grid */}
          <div className="md:col-span-2 grid grid-cols-2 gap-3 md:gap-4 auto-rows-auto">
            {GALLERY_RIGHT.map((image) => (
              <motion.div
                key={image.id}
                variants={itemVariants}
                className={`group relative overflow-hidden rounded-2xl md:rounded-3xl ${image.className}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 66vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-navy-900/0 group-hover:bg-navy-900/20 transition-colors duration-300" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
