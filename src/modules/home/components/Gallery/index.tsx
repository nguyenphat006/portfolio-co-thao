"use client";

import { useState, useCallback, useEffect, memo } from "react";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Volume2, VolumeX } from "lucide-react";
import { GALLERY_IMAGES, SECTION_CONTENT, GRID_PATTERNS } from "./constants";

// Animation variants - defined outside to prevent recreation
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
  },
};

// Memoized Gallery Item Component
const GalleryItem = memo(function GalleryItem({
  item,
  index,
  gridClass,
  onClick,
}: {
  item: typeof GALLERY_IMAGES[0];
  index: number;
  gridClass: string;
  onClick: () => void;
}) {
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMuted(!isMuted);
  };

  return (
    <motion.div
      variants={itemVariants}
      className={`group relative overflow-hidden ${gridClass} ${
        item.type === "image" ? "cursor-pointer" : ""
      }`}
      onClick={item.type === "image" ? onClick : undefined}
      style={{ willChange: "transform" }}
    >
      {item.type === "video" ? (
        <>
          <video
            src={item.src}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            preload="metadata"
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          {/* Mute/Unmute Button */}
          <button
            onClick={toggleMute}
            className="absolute top-3 right-3 p-2 bg-black/60 hover:bg-black/80 text-white rounded-lg transition-all opacity-0 group-hover:opacity-100 backdrop-blur-sm z-10"
            aria-label={isMuted ? "Bật tiếng" : "Tắt tiếng"}
          >
            {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
          </button>
        </>
      ) : (
        <Image
          src={item.src}
          alt={item.alt}
          fill
          sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          loading={index < 6 ? "eager" : "lazy"}
          priority={index < 3}
          quality={85}
        />
      )}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Caption on hover */}
      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <p className="text-white text-sm font-medium">{item.alt}</p>
      </div>
    </motion.div>
  );
});

export function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Filter only images for modal (exclude videos) - memoized
  const imageItems = GALLERY_IMAGES.filter((item) => item.type !== "video");

  const openModal = useCallback(
    (index: number) => {
      const imageIndex = imageItems.findIndex(
        (img) => img.id === GALLERY_IMAGES[index].id
      );
      if (imageIndex !== -1) {
        setSelectedIndex(imageIndex);
        document.body.style.overflow = "hidden";
      }
    },
    [imageItems]
  );

  const closeModal = useCallback(() => {
    setSelectedIndex(null);
    document.body.style.overflow = "";
  }, []);

  const goToPrevious = useCallback(() => {
    setSelectedIndex((prev) =>
      prev !== null ? (prev - 1 + imageItems.length) % imageItems.length : null
    );
  }, [imageItems.length]);

  const goToNext = useCallback(() => {
    setSelectedIndex((prev) =>
      prev !== null ? (prev + 1) % imageItems.length : null
    );
  }, [imageItems.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;

      switch (e.key) {
        case "Escape":
          closeModal();
          break;
        case "ArrowLeft":
          goToPrevious();
          break;
        case "ArrowRight":
          goToNext();
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, closeModal, goToPrevious, goToNext]);

  return (
    <>
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-12 md:mb-16"
          >
            <p className="font-handwriting text-2xl md:text-3xl text-brand-500 mb-2">
              {SECTION_CONTENT.subtitle}
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 uppercase tracking-tight mb-4">
              {SECTION_CONTENT.title}
            </h2>
            <p className="text-slate-500">{SECTION_CONTENT.description}</p>
          </motion.div>

          {/* Seamless Bento Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-12 auto-rows-[200px] md:auto-rows-[250px] gap-1"
          >
            {GALLERY_IMAGES.map((item, index) => {
              const gridClass = GRID_PATTERNS[index % GRID_PATTERNS.length];

              return (
                <GalleryItem
                  key={item.id}
                  item={item}
                  index={index}
                  gridClass={gridClass}
                  onClick={() => openModal(index)}
                />
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Image Modal */}
      <AnimatePresence mode="wait">
        {selectedIndex !== null && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closeModal}
              className="fixed inset-0 bg-black/95 z-50"
            />

            {/* Modal Content */}
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 p-2 text-white hover:text-brand-500 hover:bg-white/10 rounded-lg transition-colors z-10 pointer-events-auto"
                aria-label="Đóng (Esc)"
              >
                <X size={32} />
              </button>

              {/* Previous Button */}
              <button
                onClick={goToPrevious}
                className="absolute left-4 p-3 text-white hover:text-brand-500 hover:bg-white/10 rounded-lg transition-colors z-10 pointer-events-auto"
                aria-label="Ảnh trước (←)"
              >
                <ChevronLeft size={40} />
              </button>

              {/* Image Container */}
              <motion.div
                key={selectedIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
                className="relative w-full h-full flex items-center justify-center pointer-events-auto"
                style={{ willChange: "transform, opacity" }}
              >
                <div className="relative max-w-7xl max-h-full w-full h-full flex items-center justify-center">
                  <Image
                    src={imageItems[selectedIndex].src}
                    alt={imageItems[selectedIndex].alt}
                    fill
                    sizes="100vw"
                    className="object-contain"
                    quality={95}
                    priority
                  />
                </div>

                {/* Image Caption */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur-sm px-6 py-3 rounded-full pointer-events-none">
                  <p className="text-white text-sm font-medium">
                    {imageItems[selectedIndex].alt} ({selectedIndex + 1}/
                    {imageItems.length})
                  </p>
                </div>
              </motion.div>

              {/* Next Button */}
              <button
                onClick={goToNext}
                className="absolute right-4 p-3 text-white hover:text-brand-500 hover:bg-white/10 rounded-lg transition-colors z-10 pointer-events-auto"
                aria-label="Ảnh tiếp theo (→)"
              >
                <ChevronRight size={40} />
              </button>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
