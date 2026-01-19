"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { VIDEO_SECTION } from "../constants";
import { useState } from "react";

export function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="font-handwriting text-2xl md:text-3xl text-brand-500 mb-2">
            Video
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 uppercase tracking-tight mb-4">
            {VIDEO_SECTION.title}
          </h2>
          <p className="text-slate-600">
            {VIDEO_SECTION.description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl bg-navy-900">
            {isPlaying ? (
              <iframe
                src={`https://www.youtube.com/embed/${VIDEO_SECTION.videoId}?autoplay=1`}
                title={VIDEO_SECTION.title}
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <>
                {/* Thumbnail */}
                <img
                  src={`https://img.youtube.com/vi/${VIDEO_SECTION.videoId}/maxresdefault.jpg`}
                  alt={VIDEO_SECTION.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-navy-900/40 flex items-center justify-center">
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="group w-20 h-20 md:w-24 md:h-24 rounded-full bg-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
                  >
                    <Play className="w-8 h-8 md:w-10 md:h-10 text-brand-500 ml-1 group-hover:text-brand-900 transition-colors" fill="currentColor" />
                  </button>
                </div>
              </>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
