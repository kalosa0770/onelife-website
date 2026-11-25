"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface HeroSlide {
  word: string;
  backgroundImage: string;
}

interface HeroCarouselProps {
  staticHeadline: string;
  slides: HeroSlide[];
  autoPlayInterval?: number;
}

export const HeroCarousel = ({
  staticHeadline,
  slides,
  autoPlayInterval = 5000,
}: HeroCarouselProps) => {
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

  const wordVariants = {
    enter: (dir: number) => ({
      y: dir > 0 ? 20 : -20,
      opacity: 0,
    }),
    center: {
      y: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      y: dir > 0 ? -20 : 20,
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
        className="absolute inset-0 z-10 bg-gradient-to-b from-black/50 via-black/40 to-black/60"
      />

      {/* Content: Bottom Left - Static Headline + Carousel Word */}
      <div className="relative z-20 flex h-full flex-col justify-end px-6 pb-20 sm:px-8 sm:pb-24 lg:px-10 lg:pb-28">
        <div className="max-w-4xl">
          <div className="font-heading text-[clamp(2rem,5vw,3.8rem)] font-bold leading-tight tracking-tight text-white">
            {/* Static Part */}
            <div className="mb-2 sm:mb-3">
              <span>{staticHeadline}</span>
            </div>
            {/* Carousel Word */}
            <div>
              <AnimatePresence mode="wait" custom={direction}>
                <motion.span
                  key={`word-${current}`}
                  custom={direction}
                  variants={wordVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    y: { type: "spring", stiffness: 200, damping: 25 },
                    opacity: { duration: 0.4 },
                  }}
                  className="inline-block min-w-[150px] text-onelife-red sm:min-w-[200px]"
                >
                  {slide.word}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators - Bottom Center (No Arrows) */}
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
              className={`h-2 rounded-full backdrop-blur-sm transition-all duration-300 ${
                idx === current ? "w-8 bg-onelife-red" : "w-2 bg-white/50 hover:bg-white/70"
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
