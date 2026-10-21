"use client";

import React from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import type { TrackRecordHome, TrackRecordStat, WithId } from "@/lib/site/content";

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
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

interface TrackRecordProps {
  content: TrackRecordHome;
  stats: WithId<TrackRecordStat>[];
}

export const TrackRecord = ({ content, stats }: TrackRecordProps) => {
  return (
    <section
      id="track-record"
      className="relative w-full overflow-hidden bg-charcoal py-20 text-warm-white sm:py-24 md:py-28"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={content.backgroundImage}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="pointer-events-none absolute inset-0 bg-charcoal/85" />
      </div>

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 select-none opacity-[0.04]">
        <svg viewBox="0 0 100 100" fill="none" stroke="#FAFAF8" strokeWidth="1.5">
          <path d="M 50,50 m -40,0 a 40,38 0 1,0 80,0 a 40,38 0 1,0 -80,0" strokeDasharray="240 10" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-8">
        <div className="mb-10 max-w-2xl sm:mb-14">
          <span className="mb-3 block text-xs font-heading font-semibold uppercase tracking-[0.2em] text-onelife-red">
            Track Record
          </span>
          <h2 className="font-heading text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
            Experience you can measure.
          </h2>
        </div>

        <motion.div
          className="grid grid-cols-2 border-l border-t border-white/15 md:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              variants={itemVariants}
              className="group flex min-h-36 flex-col justify-center border-b border-r border-white/15 px-4 py-6 transition-colors hover:bg-white/5 sm:min-h-44 sm:px-8 sm:py-8"
            >
                <h3 className="mb-2 font-heading text-4xl font-bold tracking-tight text-warm-white transition-colors group-hover:text-onelife-red sm:text-5xl md:text-6xl">
                  {stat.value}
                </h3>
                <p className="max-w-[14rem] text-xs font-medium leading-relaxed tracking-wide text-white/75 sm:text-sm">
                  {stat.label}
                </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};