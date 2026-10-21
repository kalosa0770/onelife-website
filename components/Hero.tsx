"use client";

import React from "react";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};



interface HeroProps {
  headline: string;
  backgroundImage: string;
}

export const Hero = ({ headline, backgroundImage }: HeroProps) => {
  return (
    <section className="relative z-10 overflow-hidden bg-charcoal px-4 py-16 text-warm-white sm:px-8 sm:py-20 lg:py-28">
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-charcoal/65 via-charcoal/75 to-charcoal/95" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          className="mx-auto flex max-w-5xl flex-col items-center text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={itemVariants}
            className="mb-7 font-heading text-4xl font-bold leading-[1.08] tracking-tight text-warm-white sm:text-5xl lg:text-7xl"
          >
            {headline}
          </motion.h1>

          <motion.div variants={itemVariants} className="flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row sm:gap-4">
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-onelife-red px-6 py-3 font-heading text-sm font-semibold uppercase tracking-wider text-white shadow-lg shadow-onelife-red/20 transition hover:bg-[#d1171e] group"
            >
              Contact Us
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/capabilities"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/30 px-6 py-3 font-heading text-sm font-medium uppercase tracking-wider text-warm-white transition hover:border-white/60 hover:bg-white/10"
            >
              Explore Capabilities
              <ArrowRight className="h-4 w-4 text-onelife-red" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};