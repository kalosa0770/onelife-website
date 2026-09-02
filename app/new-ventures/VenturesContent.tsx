"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { getIcon } from "@/lib/content/icons";
import type { EyebrowDescription, Venture, WithId } from "@/lib/content/read";

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

interface VenturesContentProps {
  intro: EyebrowDescription;
  ventures: WithId<Venture>[];
}

export function VenturesContent({ intro, ventures }: VenturesContentProps) {
  return (
    <div className="min-h-screen bg-warm-white text-charcoal flex flex-col justify-between">
      <main>
        {/* HERO SECTION */}
        <section className="relative pt-28 pb-24 sm:pt-36 sm:pb-32 px-4 sm:px-8 overflow-hidden bg-charcoal">
          {/* Background Image */}
          {intro.backgroundImage && (
            <div className="absolute inset-0">
              <Image
                src={intro.backgroundImage}
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

          <div className="max-w-5xl mx-auto text-center relative z-10">
            <motion.div variants={containerVariants} initial="hidden" animate="visible">
              <motion.span variants={itemVariants} className="text-xs font-heading font-semibold uppercase tracking-[0.2em] text-onelife-red block mb-3">
                {intro.eyebrow}
              </motion.span>
              <motion.p variants={itemVariants} className="text-base sm:text-lg text-white/90 font-normal leading-relaxed max-w-3xl mx-auto">
                {intro.description}
              </motion.p>
            </motion.div>
          </div>
        </section>

        {ventures.map((venture, idx) => {
          const Icon = getIcon(venture.icon);
          const isReversed = idx % 2 === 1;
          return (
            <section
              key={venture.id}
              className={`py-24 px-4 sm:px-8 border-b border-charcoal/10 ${
                isReversed ? "bg-[#F4F4F0]" : "bg-warm-white"
              }`}
            >
              <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                <div
                  className={`lg:col-span-5 relative h-80 sm:h-[440px] rounded-lg overflow-hidden shadow-xl border border-charcoal/10 bg-charcoal ${
                    isReversed ? "order-1 lg:order-2" : ""
                  }`}
                >
                  <Image src={venture.image} alt={venture.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <span className="text-[10px] font-heading font-bold uppercase tracking-wider text-onelife-red block">
                      {venture.badge}
                    </span>
                    <p className="text-[12px] font-semibold text-white">{venture.title}</p>
                  </div>
                </div>

                <div
                  className={`lg:col-span-7 space-y-6 ${
                    isReversed ? "order-2 lg:order-1" : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded bg-white border border-charcoal/10 flex items-center justify-center shadow-sm">
                      <Icon className="w-5 h-5 text-onelife-red" strokeWidth={2} />
                    </div>
                    <span className="text-[12px] font-heading font-semibold uppercase tracking-wider text-slate-grey">
                      {venture.badge}
                    </span>
                  </div>

                  <h2 className="font-heading font-bold text-[14px] md:text-base text-charcoal tracking-tight">
                    {venture.title}
                  </h2>

                  <p className="text-[12px] md:text-[14px] text-slate-grey leading-relaxed">
                    {venture.description}
                  </p>

                  {venture.points.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                      {venture.points.map((point, pIdx) => (
                        <div
                          key={pIdx}
                          className="flex items-start gap-2.5 text-[12px] md:text-[14px] font-medium text-charcoal bg-white p-3 rounded border border-charcoal/5"
                        >
                          <CheckCircle2 className="w-4 h-4 text-onelife-red shrink-0 mt-0.5" />
                          <span>
                            {point.title && <strong>{point.title}: </strong>}
                            {point.body}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {venture.ctaLabel && venture.ctaHref && (
                    <div className="pt-4">
                      <Link
                        href={venture.ctaHref}
                        className="inline-flex items-center gap-2 bg-onelife-red hover:bg-[#d1171e] text-white font-heading font-semibold text-xs uppercase tracking-wider px-7 py-4 rounded transition-all"
                      >
                        <span>{venture.ctaLabel}</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </section>
          );
        })}
      </main>
    </div>
  );
}
