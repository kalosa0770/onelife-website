"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface HeroSlide {
  headline: string;
  backgroundImage: string;
}

interface HeroCarouselProps {
  slides: HeroSlide[];
  autoPlayInterval?: number;
}

export const HeroCarousel = ({ slides, autoPlayInterval = 8000 }: HeroCarouselProps) => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const slide = slides[current];

  // Auto-play effect
  useEffect(() => {
    if (!isAutoPlaying || slides.length <= 1) return;

    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % slides.length);
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [isAutoPlaying, slides.length, autoPlayInterval]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleNext = () => {
    setIsAutoPlaying(false);
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX;
    handleSwipe();
  };

  const handleSwipe = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      zIndex: 0,
      x: dir > 0 ? -1000 : 1000,
      opacity: 0,
    }),
  };

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-charcoal"
      style={{ minHeight: "clamp(80vh, 85vh, 100vh)" }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Image Carousel */}
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={current}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.5 },
          }}
          className="absolute inset-0"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${slide.backgroundImage}')` }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Dark Gradient Overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-10 bg-gradient-to-b from-black/40 via-transparent to-black/60"
      />

      {/* Minimal Content: Centered Bold Headline in White Box */}
      <div className="relative z-20 flex h-full items-center justify-center px-6 sm:px-8 lg:px-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={`title-${current}`}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl"
          >
            <div className="rounded-xl bg-white/95 px-8 py-6 backdrop-blur-sm shadow-2xl sm:px-12 sm:py-8 lg:px-16 lg:py-10">
              <h1 className="font-heading text-[clamp(1.8rem,5vw,3.2rem)] font-bold leading-tight tracking-tight text-charcoal">
                {slide.headline}
              </h1>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Carousel Navigation - Left Arrow */}
      {slides.length > 1 && (
        <motion.button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 z-30 -translate-y-1/2 rounded-full bg-white/30 p-3 text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/50 lg:left-8"
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </motion.button>
      )}

      {/* Carousel Navigation - Right Arrow */}
      {slides.length > 1 && (
        <motion.button
          onClick={handleNext}
          className="absolute right-4 top-1/2 z-30 -translate-y-1/2 rounded-full bg-white/30 p-3 text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/50 lg:right-8"
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </motion.button>
      )}

      {/* Slide Indicators - Bottom Center */}
      {slides.length > 1 && (
        <div className="absolute bottom-6 left-1/2 z-30 flex -translate-x-1/2 gap-2 sm:bottom-8">
          {slides.map((_, idx) => (
            <motion.button
              key={idx}
              onClick={() => {
                setIsAutoPlaying(false);
                setDirection(idx > current ? 1 : -1);
                setCurrent(idx);
              }}
              className={`h-2 rounded-full backdrop-blur-sm transition-all ${
                idx === current ? "w-8 bg-white" : "w-2 bg-white/60 hover:bg-white/80"
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
};
