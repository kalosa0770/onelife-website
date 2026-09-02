"use client";

import React from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import type { EyebrowDescription } from "@/lib/content/read";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

interface WhoWeAreHeroProps {
  content: EyebrowDescription;
}

export const WhoWeAreHero = ({ content }: WhoWeAreHeroProps) => {
  return (
    <section className="relative pt-28 pb-24 sm:pt-36 sm:pb-32 px-4 sm:px-8 overflow-hidden bg-charcoal">
      {/* Background Image */}
      {content.backgroundImage && (
        <div className="absolute inset-0">
          <Image
            src={content.backgroundImage}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-40"
          />
        </div>
      )}
      {/* Darkening Overlay */}
      <div className="absolute inset-0 bg-charcoal/70 pointer-events-none" />

      {/* Subtle Watermark */}
      <div className="absolute right-[-120px] -top-20 w-[550px] h-[550px] pointer-events-none opacity-[0.05] select-none">
        <svg viewBox="0 0 100 100" fill="none" stroke="#FFFFFF" strokeWidth="1.5">
          <path d="M 50,50 m -40,0 a 40,38 0 1,0 80,0 a 40,38 0 1,0 -80,0" strokeDasharray="240 10" />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span
            variants={itemVariants}
            className="text-xs font-heading font-semibold uppercase tracking-[0.2em] text-onelife-red block mb-3"
          >
            {content.eyebrow}
          </motion.span>

          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-white/90 font-normal leading-relaxed max-w-3xl mx-auto"
          >
            {content.description}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};