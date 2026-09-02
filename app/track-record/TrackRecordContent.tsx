"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type {
  EyebrowDescription,
  TrackRecordStat,
  TrackRecordMilestone,
  TrackRecordCaseStudy,
  WithId,
} from "@/lib/content/read";

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

interface TrackRecordContentProps {
  intro: EyebrowDescription;
  stats: WithId<TrackRecordStat>[];
  milestones: WithId<TrackRecordMilestone>[];
  caseStudies: WithId<TrackRecordCaseStudy>[];
}

export function TrackRecordContent({
  intro,
  stats,
  milestones,
  caseStudies,
}: TrackRecordContentProps) {
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

        {/* STATS BAR */}
        <section className="py-12 bg-onelife-red text-white border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.id}>
                <h3 className="font-heading font-bold text-xl md:text-2xl text-white">{stat.value}</h3>
                <p className="text-[12px] md:text-[14px] text-white/80 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 14-YEAR MILESTONE TIMELINE */}
        <section className="py-24 px-4 sm:px-8 bg-warm-white border-b border-charcoal/10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-[12px] font-heading font-semibold uppercase tracking-[0.2em] text-onelife-red block mb-2">
                Chronology
              </span>
              <h2 className="font-heading font-bold text-xl md:text-2xl text-charcoal">
                Milestones: {milestones[0]?.year ?? ""} to Present
              </h2>
            </div>

            <div className="relative border-l-2 border-charcoal/15 pl-6 sm:pl-8 ml-4 sm:ml-8 space-y-10">
              {milestones.map((m) => (
                <div key={m.id} className="relative group">
                  {/* Timeline Dot */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-onelife-red group-hover:scale-125 transition-transform" />

                  <span className="text-[12px] font-heading font-bold text-onelife-red uppercase tracking-wider block mb-1">
                    {m.year}
                  </span>
                  <h3 className="font-heading font-bold text-[14px] md:text-base text-charcoal mb-1">
                    {m.title}
                  </h3>
                  <p className="text-[12px] md:text-[14px] text-slate-grey leading-relaxed">
                    {m.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SELECTED CASE STUDIES */}
        <section className="py-24 px-4 sm:px-8 bg-[#F4F4F0] border-b border-charcoal/10">
          <div className="max-w-7xl mx-auto">
            <div className="mb-14">
              <span className="text-[12px] font-heading font-semibold uppercase tracking-[0.2em] text-onelife-red block mb-2">
                Demonstrated Proof
              </span>
              <h2 className="font-heading font-bold text-xl md:text-2xl text-charcoal">
                Selected Case Studies
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {caseStudies.map((cs) => (
                <div key={cs.id} className="bg-white rounded-lg overflow-hidden border border-charcoal/10 shadow-sm flex flex-col justify-between">
                  <div className="relative h-60 w-full bg-charcoal">
                    <Image src={cs.image} alt={cs.title} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent" />
                    <span className="absolute bottom-4 left-4 text-[11px] font-heading font-semibold uppercase tracking-wider bg-onelife-red text-white px-2.5 py-1 rounded">
                      {cs.category}
                    </span>
                  </div>

                  <div className="p-6 sm:p-8 space-y-4">
                    <h3 className="font-heading font-bold text-[14px] md:text-base text-charcoal">{cs.title}</h3>

                    <div className="space-y-2 text-[12px] md:text-[14px] text-slate-grey">
                      <p><strong className="text-charcoal">Challenge:</strong> {cs.challenge}</p>
                      <p><strong className="text-charcoal">Strategic Approach:</strong> {cs.solution}</p>
                      <p><strong className="text-charcoal">Outcome:</strong> {cs.impact}</p>
                    </div>
                  </div>

                  <div className="p-6 sm:p-8 pt-0 border-t border-charcoal/5">
                    <Link href="/#contact" className="inline-flex items-center gap-2 text-xs font-heading font-bold uppercase text-onelife-red hover:underline">
                      <span>Get More Information</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
