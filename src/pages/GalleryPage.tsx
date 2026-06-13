/**
 * =============================================
 * GALLERY PAGE
 * =============================================
 * Masonry-style gallery with:
 * - Category filters
 * - Lightbox functionality
 * - Lazy loading
 * - Optimized image loading
 *
 * Images are configured in src/config/site.ts
 * Replace placeholder URLs with real club photos
 */

import { useState, useCallback } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { IMAGES, SITE_CONFIG } from "../config/site";
import { MessageCircle, ArrowRight } from "lucide-react";

// Gallery categories for filter UI
const CATEGORIES = ["All", "Community Runs", "Race Days", "Hikes", "Special Events"] as const;
type Category = typeof CATEGORIES[number];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Filter images by category
  const filteredImages = IMAGES.gallery.filter(
    (img) => activeCategory === "All" || img.category === activeCategory
  );

  // Lightbox navigation
  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
    document.body.style.overflow = "hidden";
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
    document.body.style.overflow = "";
  }, []);

  const prevImage = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null ? (prev - 1 + filteredImages.length) % filteredImages.length : null
    );
  }, [filteredImages.length]);

  const nextImage = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null ? (prev + 1) % filteredImages.length : null
    );
  }, [filteredImages.length]);

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "Escape") closeLightbox();
    },
    [prevImage, nextImage, closeLightbox]
  );

  return (
    <>
      {/* ─── PAGE HERO ──────────────────────────────────────────── */}
      <section className="relative pt-40 pb-24" aria-label="Gallery page hero">
        <div className="absolute inset-0">
          <img
            src={IMAGES.raceDay1}
            alt="Miles With Smiles gallery"
            className="w-full h-full object-cover grayscale"
            loading="eager"
          />
          <div className="absolute inset-0 bg-black/80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-white/30 text-xs font-bold tracking-widest uppercase mb-4 block">
            Our Community
          </span>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-tight">
            Moments in Motion
          </h1>
          <p className="mt-6 text-white/60 text-lg max-w-lg leading-relaxed">
            Real people. Real miles. Real smiles. A visual story of the Miles With Smiles community.
          </p>
        </div>
      </section>

      {/* ─── GALLERY SECTION ────────────────────────────────────── */}
      <section className="py-16 lg:py-24" aria-labelledby="gallery-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Category filters */}
          <div
            className="flex flex-wrap gap-2 mb-12"
            role="tablist"
            aria-label="Gallery categories"
          >
            {CATEGORIES.map((category) => (
              <button
                key={category}
                role="tab"
                aria-selected={activeCategory === category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === category
                    ? "bg-white text-black"
                    : "bg-white/5 border border-white/15 text-white/60 hover:text-white hover:border-white/30"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Results count */}
          <p className="text-white/30 text-sm mb-8">
            {filteredImages.length} photo{filteredImages.length !== 1 ? "s" : ""}
          </p>

          {/* Masonry grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {filteredImages.map((image, index) => (
              <div
                key={`${image.src}-${index}`}
                className="break-inside-avoid overflow-hidden rounded-xl cursor-pointer group relative"
                onClick={() => openLightbox(index)}
                role="button"
                tabIndex={0}
                aria-label={`Open image: ${image.alt}`}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") openLightbox(index);
                }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="w-full h-auto object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                  <ZoomIn
                    size={28}
                    className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
                {/* Category badge */}
                <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-xs bg-black/60 text-white px-2 py-1 rounded-full backdrop-blur-sm">
                    {image.category}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Empty state */}
          {filteredImages.length === 0 && (
            <div className="text-center py-24 text-white/40">
              <p className="text-lg">No images in this category yet.</p>
              <p className="text-sm mt-2">Check back soon!</p>
            </div>
          )}
        </div>
      </section>

      {/* ─── LIGHTBOX ───────────────────────────────────────────── */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
          onKeyDown={handleKeyDown}
          tabIndex={-1}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white/70 hover:text-white z-10 p-2 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Close lightbox"
          >
            <X size={24} />
          </button>

          {/* Previous button */}
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white z-10 p-3 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft size={28} />
          </button>

          {/* Next button */}
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white z-10 p-3 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Next image"
          >
            <ChevronRight size={28} />
          </button>

          {/* Image */}
          <div className="max-w-5xl max-h-[85vh] mx-auto px-14 flex flex-col items-center gap-4">
            <img
              src={filteredImages[lightboxIndex]?.src}
              alt={filteredImages[lightboxIndex]?.alt}
              className="max-h-[75vh] w-auto object-contain rounded-lg"
            />
            <div className="text-center">
              <p className="text-white/60 text-sm">{filteredImages[lightboxIndex]?.alt}</p>
              <p className="text-white/30 text-xs mt-1">
                {lightboxIndex + 1} / {filteredImages.length} · {filteredImages[lightboxIndex]?.category}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ─── JOIN CTA ───────────────────────────────────────────── */}
      <section className="bg-white py-24" aria-labelledby="gallery-join-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="gallery-join-heading" className="text-4xl sm:text-5xl font-black text-black tracking-tight mb-6">
            Want to Feature in Our Gallery?
          </h2>
          <p className="text-black/60 text-base sm:text-lg mb-10 max-w-xl mx-auto">
            Join Miles With Smiles and be part of our community story. Your miles, your smiles, your moments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={SITE_CONFIG.registrationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-black text-white font-bold px-8 py-4 rounded-full hover:bg-black/80 transition-all"
              aria-label="Join Miles With Smiles"
            >
              Join the Club
              <ArrowRight size={18} />
            </a>
            <a
              href={SITE_CONFIG.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border-2 border-black text-black font-semibold px-8 py-4 rounded-full hover:bg-black/5 transition-all"
            >
              <MessageCircle size={18} />
              Join WhatsApp Community
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
