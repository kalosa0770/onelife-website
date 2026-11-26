"use client";

import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface SlideshowProps {
  images: string[];
  interval?: number;
  className?: string;
  autoPlay?: boolean;
  /** Show clickable dots. Off by default because in the Hero the overlays sit above this component. */
  showDots?: boolean;
}

export const Slideshow = ({
  images,
  interval = 5000,
  className = "",
  autoPlay = true,
  showDots = false,
}: SlideshowProps) => {
  const [current, setCurrent] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!autoPlay || reduceMotion || images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, reduceMotion, images.length, interval]);

  if (images.length === 0) return null;

  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      {/* All slides stay mounted and stacked, so they are preloaded and crossfade with no blank gap */}
      {images.map((src, idx) => {
        const active = idx === current;
        return (
          <motion.img
            key={src + idx}
            src={src}
            alt=""
            aria-hidden="true"
            loading={idx === 0 ? "eager" : "lazy"}
            className="absolute inset-0 h-full w-full object-cover"
            initial={false}
            animate={{
              opacity: active ? 1 : 0,
              scale: reduceMotion ? 1 : active ? 1.06 : 1,
            }}
            transition={{
              opacity: { duration: 1.2, ease: "easeInOut" },
              // Slow, subtle zoom while a slide is visible
              scale: { duration: active ? interval / 1000 + 1.2 : 0, ease: "linear" },
            }}
          />
        );
      })}

      {showDots && images.length > 1 && (
        <div className="absolute bottom-6 right-6 z-10 flex gap-2">
          {images.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrent(idx)}
              className={`h-2 rounded-full transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                idx === current
                  ? "w-8 bg-white"
                  : "w-2 bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
              aria-current={idx === current}
            />
          ))}
        </div>
      )}
    </div>
  );
};