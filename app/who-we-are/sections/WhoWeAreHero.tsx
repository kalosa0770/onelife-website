"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";

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

export const WhoWeAreHero = () => {
  return (
    <section className="relative pt-20 pb-20 px-4 sm:px-8 border-b border-charcoal/10 bg-warm-white overflow-hidden">
      {/* Subtle Watermark */}
      <div className="absolute right-[-120px] -top-20 w-[550px] h-[550px] pointer-events-none opacity-[0.035] select-none">
        <svg viewBox="0 0 100 100" fill="none" stroke="#2B2B2D" strokeWidth="1.5">
          <path d="M 50,50 m -40,0 a 40,38 0 1,0 80,0 a 40,38 0 1,0 -80,0" strokeDasharray="240 10" />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span 
            variants={itemVariants} 
            className="text-xs font-heading font-semibold uppercase tracking-[0.2em] text-onelife-red block mb-3"
          >
            Who We Are
          </motion.span>

          <motion.p 
            variants={itemVariants}
            className="text-base sm:text-lg text-slate-grey font-normal leading-relaxed max-w-3xl mx-auto"
          >
            For over 14 years, OneLife has partnered with African enterprises, institutions, and development actors to deliver strategically grounded, creatively bold work across Zambia and the SADC-COMESA region.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};