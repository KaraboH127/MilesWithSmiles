/**
 * GALLERY PAGE
 */
import SEOHead from '../components/SEOHead';
import { useState, useCallback } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { IMAGES } from "../config/site";
import { Hero, JoinCTA, Section } from "../components/ui";
import { cn } from "../utils/cn";

const CATEGORIES = ["All", "Community Runs", "Race Days", "Hikes", "Special Events"] as const;
type Category = (typeof CATEGORIES)[number];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredImages = IMAGES.gallery.filter(
    (img) => activeCategory === "All" || img.category === activeCategory
  );

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
      <SEOHead
        title="Gallery | Miles With Smiles Social Running Club Alexandra"
        description="Photos from our weekly runs, monthly hikes, and community events in Alexandra, Johannesburg."
        canonical="/gallery"
      />
      <Hero
        eyebrow="Our Community"
        backgroundImage={IMAGES.raceDay1}
        title="Moments in Motion"
        description="Real people. Real miles. Real smiles. A visual story of the Miles With Smiles community."
      />

      <Section spacing="compact" aria-labelledby="gallery-heading">
        <h2 id="gallery-heading" className="sr-only">
          Gallery photos
        </h2>

        <div className="mb-12 flex flex-wrap gap-2" role="tablist" aria-label="Gallery categories">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              role="tab"
              aria-selected={activeCategory === category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "rounded-md border px-4 py-2 text-sm font-medium transition-colors duration-200",
                activeCategory === category
                  ? "border-black bg-white text-black"
                  : "border-white/20 bg-transparent text-white/60 hover:border-white/40 hover:text-white"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <p className="text-caption mb-8 normal-case tracking-normal text-white/30">
          {filteredImages.length} photo{filteredImages.length !== 1 ? "s" : ""}
        </p>

        <div className="columns-1 gap-4 space-y-4 sm:columns-2 lg:columns-3">
          {filteredImages.map((image, index) => (
            <div
              key={`${image.src}-${index}`}
              className="group relative cursor-pointer break-inside-avoid overflow-hidden rounded-md"
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
                width="800"
                height="600"
                className="h-auto w-full object-cover grayscale transition-all duration-300 group-hover:grayscale-0"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-200 group-hover:bg-black/30">
                <ZoomIn
                  size={20}
                  className="text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                />
              </div>
              <div className="absolute bottom-3 left-3 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                <span className="rounded-md border border-white/20 bg-black px-2 py-1 text-xs text-white">
                  {image.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <div className="py-16 text-center text-white/40">
            <p className="text-lg">No images in this category yet.</p>
            <p className="text-body mt-2 text-sm">Check back soon.</p>
          </div>
        )}
      </Section>

      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95"
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
          onKeyDown={handleKeyDown}
          tabIndex={-1}
        >
          <button
            onClick={closeLightbox}
            className="absolute right-6 top-6 z-10 rounded-md p-2 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
            aria-label="Close lightbox"
          >
            <X size={24} />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-md p-3 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
            aria-label="Previous image"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-md p-3 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
            aria-label="Next image"
          >
            <ChevronRight size={20} />
          </button>

          <div className="mx-auto flex max-h-[85vh] max-w-5xl flex-col items-center gap-4 px-14">
            <img
              src={filteredImages[lightboxIndex]?.src}
              alt={filteredImages[lightboxIndex]?.alt}
              width="800"
              height="600"
              className="max-h-[75vh] w-auto rounded-md object-contain"
            />
            <div className="text-center">
              <p className="text-body text-sm text-white/60">
                {filteredImages[lightboxIndex]?.alt}
              </p>
              <p className="text-caption mt-1 normal-case tracking-normal text-white/30">
                {lightboxIndex + 1} / {filteredImages.length} · {filteredImages[lightboxIndex]?.category}
              </p>
            </div>
          </div>
        </div>
      )}

      <JoinCTA
        title="Want to Feature in Our Gallery?"
        description="Join Miles With Smiles and be part of our community story. Your miles, your smiles, your moments."
        headingId="gallery-join-heading"
      />
    </>
  );
}
