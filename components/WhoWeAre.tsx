"use client";

import React from "react";
import { motion } from "framer-motion";
import type { WhoWeAreHome } from "@/lib/site/content";

interface WhoWeAreProps {
  content: WhoWeAreHome;
}

export const WhoWeAre = ({ content }: WhoWeAreProps) => {
  return (
    <section
      id="who-we-are"
      className="relative overflow-hidden bg-warm-white px-4 py-20 sm:px-8 md:py-28"
    >
      <div className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full border border-onelife-red/10 md:h-96 md:w-96" />
      <div className="pointer-events-none absolute -right-12 top-22 h-56 w-56 rounded-full border border-onelife-red/10 md:h-72 md:w-72" />

      <motion.div
        className="relative mx-auto max-w-7xl"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-onelife-red" />
              <span className="text-xs font-heading font-semibold uppercase tracking-[0.2em] text-onelife-red">
                {content.eyebrow}
              </span>
            </div>
            <h2 className="max-w-xl font-heading text-4xl font-bold leading-[1.08] tracking-tight text-charcoal sm:text-5xl">
              {content.heading}
            </h2>
          </div>

          <div className="lg:col-span-7 lg:pt-8">
            <blockquote className="relative border-l-2 border-onelife-red py-2 pl-6 sm:pl-8">
              <span
                aria-hidden="true"
                className="absolute -left-1 -top-8 font-heading text-6xl leading-none text-onelife-red/20"
              >
                &ldquo;
              </span>
              <p className="relative font-heading text-xl font-medium leading-relaxed text-charcoal sm:text-2xl lg:text-3xl">
                {content.quote}
              </p>
            </blockquote>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
