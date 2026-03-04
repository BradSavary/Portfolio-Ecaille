"use client";

import Image from "next/image";
import { useState, useEffect, useCallback, useRef } from "react";

type ImageGalleryProps = {
  images: string[];
  isOpen: boolean;
  onClose: () => void;
};

export default function ImageGallery({ images, isOpen, onClose }: ImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState<"left" | "right" | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const maxThumbnails = 5;

  // Calculer les miniatures visibles (centrées autour de l'image courante)
  const getVisibleThumbnails = () => {
    if (images.length <= maxThumbnails) return images.map((img, i) => ({ src: img, index: i }));

    let start = currentIndex - Math.floor(maxThumbnails / 2);
    if (start < 0) start = 0;
    if (start + maxThumbnails > images.length) start = images.length - maxThumbnails;

    return images.slice(start, start + maxThumbnails).map((img, i) => ({
      src: img,
      index: start + i,
    }));
  };

  const goTo = useCallback(
    (index: number) => {
      if (isAnimating || index === currentIndex) return;
      setSlideDirection(index > currentIndex ? "right" : "left");
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex(index);
        setIsAnimating(false);
        setSlideDirection(null);
      }, 300);
    },
    [currentIndex, isAnimating]
  );

  const goNext = useCallback(() => {
    if (currentIndex < images.length - 1) goTo(currentIndex + 1);
  }, [currentIndex, images.length, goTo]);

  const goPrev = useCallback(() => {
    if (currentIndex > 0) goTo(currentIndex - 1);
  }, [currentIndex, goTo]);

  // Gestion clavier
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, goNext, goPrev]);

  // Empêcher le scroll du body quand la galerie est ouverte
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Reset index à la fermeture
  useEffect(() => {
    if (!isOpen) {
      setCurrentIndex(0);
      setSlideDirection(null);
      setIsAnimating(false);
    }
  }, [isOpen]);

  if (!isOpen || images.length === 0) return null;

  const visibleThumbnails = getVisibleThumbnails();

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

      {/* Contenu */}
      <div
        ref={containerRef}
        className="relative z-10 flex flex-col items-center gap-6 w-full max-w-5xl px-4 py-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Bouton fermer */}
        <button
          onClick={onClose}
          className="absolute top-0 left-4 md:left-0 text-white hover:text-accent-tertiary transition-colors z-20"
          aria-label="Fermer la galerie"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Image principale + flèches */}
        <div className="relative w-full flex items-center justify-center">
          {/* Flèche gauche */}
          <button
            onClick={goPrev}
            disabled={currentIndex === 0}
            className={`absolute left-0 md:-left-12 z-20 p-2 text-white transition-all ${
              currentIndex === 0
                ? "opacity-30"
                : "hover:text-accent-secondary hover:scale-110"
            }`}
            aria-label="Image précédente"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Container de l'image avec animation slide */}
          <div className="relative w-full aspect-video overflow-hidden rounded-2xl">
            <div
              className={`absolute inset-0 transition-transform duration-300 ease-in-out ${
                isAnimating
                  ? slideDirection === "right"
                    ? "-translate-x-full"
                    : "translate-x-full"
                  : "translate-x-0"
              }`}
            >
              <Image
                src={images[currentIndex]}
                alt={`Image ${currentIndex + 1}`}
                fill
                className="object-contain"
                unoptimized
                priority
              />
            </div>
          </div>

          {/* Flèche droite */}
          <button
            onClick={goNext}
            disabled={currentIndex === images.length - 1}
            className={`absolute right-0 md:-right-12 z-20 p-2 text-white transition-all ${
              currentIndex === images.length - 1
                ? "opacity-30"
                : "hover:text-accent-secondary hover:scale-110"
            }`}
            aria-label="Image suivante"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

        {/* Compteur */}
        <p className="text-white/70 text-sm">
          {currentIndex + 1} / {images.length}
        </p>

        {/* Miniatures */}
        {images.length > 1 && (
          <div className="flex gap-3 items-center">
            {images.length > maxThumbnails && visibleThumbnails[0].index > 0 && (
              <span className="text-white/50 text-sm">...</span>
            )}
            {visibleThumbnails.map(({ src, index }) => (
              <button
                key={index}
                onClick={() => goTo(index)}
                className={`relative w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden border-2 transition-all shrink-0 ${
                  index === currentIndex
                    ? "border-accent-secondary scale-105"
                    : "border-white/30 hover:border-white/70 opacity-60 hover:opacity-100"
                }`}
                aria-label={`Voir image ${index + 1}`}
              >
                <Image
                  src={src}
                  alt={`Miniature ${index + 1}`}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </button>
            ))}
            {images.length > maxThumbnails &&
              visibleThumbnails[visibleThumbnails.length - 1].index < images.length - 1 && (
                <span className="text-white/50 text-sm">...</span>
              )}
          </div>
        )}
      </div>
    </div>
  );
}
