"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Newsreader, Plus_Jakarta_Sans } from "next/font/google";
import { AnimatePresence, motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";

const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500"],
  variable: "--font-institutional-serif",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-institutional-sans",
  display: "swap",
});

export interface HeroCta {
  label: string;
  href: string;
}

export interface HeroStat {
  value: string;
  label: string;
}

export interface HeroProps {
  headline: string;
  subheadline: string;
  primaryCta: HeroCta;
  secondaryCta: HeroCta;
  images: string[];
  eyebrow?: string;
  stats?: HeroStat[];
}

const DEFAULT_STATS: HeroStat[] = [
  { value: "14+", label: "Years of regional delivery" },
  { value: "50+", label: "Partner brands" },
  { value: "3", label: "Owned platforms" },
];

const INTERVAL = 6000;
const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

export const HeroInstitutional = ({
  headline,
  subheadline,
  primaryCta,
  secondaryCta,
  images,
  eyebrow = "Communications · Events · Trade Intelligence",
  stats = DEFAULT_STATS,
}: HeroProps) => {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const count = images.length;

  useEffect(() => {
    if (reduceMotion || count < 2) return;
    const id = window.setTimeout(() => setIndex((i) => (i + 1) % count), INTERVAL);
    return () => window.clearTimeout(id);
  }, [index, count, reduceMotion]);

  return (
    <section
      className={`${newsreader.variable} ${plusJakartaSans.variable} relative isolate min-h-[calc(100svh-5rem)] overflow-hidden bg-[#1F1F22] lg:bg-[#F8F7F4]`}
      style={{ fontFamily: "var(--font-institutional-sans)" }}
    >
      {/* Photo slideshow: full background on mobile, right half on desktop */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-[#2B2B2D] lg:left-auto lg:w-[52%]">
        <AnimatePresence initial={false}>
          <motion.div
            key={images[index]}
            aria-hidden="true"
            className="absolute inset-0"
            initial={{ opacity: 0, scale: reduceMotion ? 1 : 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 1.2, ease: "easeOut" },
              scale: { duration: (INTERVAL + 1200) / 1000, ease: "linear" },
            }}
          >
            <Image
              src={images[index]}
              alt=""
              fill
              priority={index === 0}
              sizes="(max-width: 1024px) 100vw, 52vw"
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* Mobile: dark overlay so white text reads over the photo */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/65 to-black/35 lg:hidden" />

        {/* Desktop: blend into the copy panel + soft shade at the bottom */}
        <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-2/5 bg-gradient-to-r from-[#F8F7F4] via-[#F8F7F4]/40 to-transparent lg:block" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 hidden h-1/3 bg-gradient-to-t from-black/50 to-transparent lg:block" />
      </div>

      {/* Faint brand ring (desktop) */}
      <svg
        aria-hidden="true"
        viewBox="0 0 100 100"
        className="pointer-events-none absolute -left-24 -top-24 z-0 hidden h-80 w-80 text-[#ED1C24]/[0.07] lg:block"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.6"
      >
        <path d="M 50,50 m -40,0 a 40,38 0 1,0 80,0 a 40,38 0 1,0 -80,0" strokeDasharray="240 10" />
      </svg>

      {/* Copy */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-5rem)] w-full max-w-7xl items-end px-6 pb-12 pt-24 lg:items-center lg:px-12 lg:py-20">
        <motion.div
          className="w-full max-w-xl lg:max-w-[46%]"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-[#ED1C24]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#FF4A50] lg:text-[#ED1C24]">
              {eyebrow}
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            style={{ fontFamily: "var(--font-institutional-serif)" }}
            className="text-[2.4rem] font-normal leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.6rem] lg:text-[#1F1F22]"
          >
            {headline}
          </motion.h1>

          {subheadline && (
            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-md text-base leading-relaxed text-white/80 sm:text-lg lg:text-[#5C5C61]"
            >
              {subheadline}
            </motion.p>
          )}

          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap items-center gap-3 sm:gap-4">
            <Link
              href={primaryCta.href}
              className="group inline-flex min-h-12 items-center gap-2 bg-[#ED1C24] px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-[#ED1C24]/20 transition-colors hover:bg-[#C81920]"
            >
              {primaryCta.label}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href={secondaryCta.href}
              className="inline-flex min-h-12 items-center gap-2 border border-white/35 bg-white/10 px-7 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20 lg:border-[#1F1F22]/20 lg:bg-white/60 lg:text-[#1F1F22] lg:hover:border-[#1F1F22]/50 lg:hover:bg-white"
            >
              {secondaryCta.label}
            </Link>
          </motion.div>

          {stats.length > 0 && (
            <motion.dl
              variants={fadeUp}
              className="mt-10 grid max-w-lg grid-cols-3 border-t border-white/15 pt-6 lg:mt-12 lg:border-[#1F1F22]/10"
            >
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={
                    i > 0 ? "border-l border-white/15 pl-4 sm:pl-6 lg:border-[#1F1F22]/10" : "pr-4"
                  }
                >
                  <dt className="sr-only">{stat.label}</dt>
                  <dd
                    style={{ fontFamily: "var(--font-institutional-serif)" }}
                    className="text-3xl leading-none text-white sm:text-4xl lg:text-[#1F1F22]"
                  >
                    {stat.value}
                  </dd>
                  <dd className="mt-2 text-[11px] leading-snug text-white/65 sm:text-xs lg:text-[#5C5C61]">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </motion.dl>
          )}
        </motion.div>
      </div>

      {/* Slide indicators: top-right on mobile, bottom-right of photo on desktop */}
      {count > 1 && (
        <div className="absolute right-5 top-5 z-20 flex items-center gap-4 sm:right-8 sm:top-8 lg:bottom-8 lg:top-auto">
          <span className="text-xs font-medium tabular-nums tracking-widest text-white/80">
            {String(index + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
          </span>
          <div className="flex gap-1.5">
            {images.map((src, i) => (
              <button
                key={src}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Show image ${i + 1} of ${count}`}
                aria-current={i === index}
                className="group flex h-6 items-center"
              >
                <span
                  className={`block h-0.5 transition-all duration-500 ${
                    i === index ? "w-8 bg-white" : "w-4 bg-white/40 group-hover:bg-white/70"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};