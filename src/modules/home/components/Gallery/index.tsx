"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GALLERY_IMAGES, SECTION_CONTENT } from "./constants";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export function Gallery() {
  return (
    <section className="py-16 md:py-24 bg-white">
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
          <p className="text-slate-500">
            {SECTION_CONTENT.description}
          </p>
        </motion.div>

        {/* Seamless Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-12 grid-rows-[200px_200px_200px_200px] md:grid-rows-[250px_250px] gap-1"
        >
          {GALLERY_IMAGES.map((image) => (
            <motion.div
              key={image.id}
              variants={itemVariants}
              className={`group relative overflow-hidden ${image.gridClass}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Caption on hover */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white text-sm font-medium">{image.alt}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
