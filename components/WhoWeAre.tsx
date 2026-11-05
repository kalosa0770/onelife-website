"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { WhoWeAreHome } from "@/lib/site/content";

interface WhoWeAreProps {
  content: WhoWeAreHome;
}

export const WhoWeAre = ({ content }: WhoWeAreProps) => {
  return (
    <section
      id="who-we-are"
      className="relative scroll-mt-32 overflow-hidden bg-[#f7f6f2] px-4 py-20 sm:px-8 md:py-28"
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
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-onelife-red" />
              <span className="text-xs font-heading font-semibold uppercase tracking-[0.2em] text-onelife-red">
                {content.eyebrow}
              </span>
            </div>
            <h2 className="max-w-xl font-heading text-3xl font-bold leading-[1.12] tracking-tight text-charcoal sm:text-4xl">
              {content.heading}
            </h2>
            <p className="mt-6 max-w-lg text-sm leading-relaxed text-slate-grey sm:text-base">
              {content.paragraph}
            </p>
            <Link
              href="/who-we-are"
              className="group mt-7 inline-flex items-center gap-2 font-heading text-xs font-semibold uppercase tracking-[0.14em] text-charcoal transition-colors hover:text-onelife-red"
            >
              Get to know us
              <ArrowRight className="h-4 w-4 text-onelife-red transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="lg:col-span-7">
            <blockquote className="relative border border-charcoal/10 bg-white p-7 shadow-sm sm:p-10 lg:p-12">
              <span
                aria-hidden="true"
                className="absolute right-6 top-1 font-heading text-8xl leading-none text-onelife-red/15 sm:right-10 sm:text-9xl"
              >
                &ldquo;
              </span>
              <p className="relative font-heading text-lg font-medium leading-relaxed text-charcoal sm:text-xl lg:text-2xl">
                {content.quote}
              </p>
              <span className="mt-8 block h-1 w-12 bg-onelife-red" />
            </blockquote>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
