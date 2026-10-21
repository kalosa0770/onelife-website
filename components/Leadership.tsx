"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ShieldCheck, ArrowRight } from "lucide-react";
import { ContentIcon } from "@/components/ContentIcon";
import type { StaffMember, WithId, EyebrowHeading } from "@/lib/site/content";

const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.1 },
  },
};

interface LeadershipProps {
  intro: EyebrowHeading;
  staff: WithId<StaffMember>[];
}

export const Leadership = ({ intro, staff }: LeadershipProps) => {
  const featured = staff.find((s) => s.isFeatured === "true") ?? staff[0];
  const others = staff.filter((s) => s.id !== featured?.id);

  if (!featured) return null;

  return (
    <section
      id="leadership"
      className="py-24 px-4 sm:px-8 bg-warm-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

        {/* 1. LEFT COLUMN: OFFSET IMAGE FRAME WITH ACCENTS (Reference Layout) */}
        <motion.div
          className="lg:col-span-6 relative flex justify-center lg:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInLeft}
        >
          {/* Subtle Background Halftone Dot Matrix Accent (Top Right) */}
          <div className="absolute -top-6 right-4 sm:right-12 w-28 h-28 pointer-events-none opacity-20 z-0">
            <svg width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
              <pattern id="dotPattern" x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="2" fill="#ED1C24" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#dotPattern)" />
            </svg>
          </div>

          {/* Solid OneLife Red Accent Box Behind Image (Bottom Left) */}
          <div className="absolute -bottom-6 -left-2 sm:left-4 w-32 sm:w-48 h-32 sm:h-48 bg-onelife-red rounded-lg z-0" />

          {/* Main Portrait / Leadership Image */}
          <div className="relative z-10 w-full max-w-md h-[420px] sm:h-[480px] overflow-hidden">
            {featured.photoUrl && (
              <Image
                src={featured.photoUrl}
                alt={`${featured.name} - ${featured.role}`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-top hover:scale-105 transition-transform duration-500"
              />
            )}
            {/* Subtle Gradient Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent pointer-events-none" />

            {/* Overlay Name Badge */}
            <div className="absolute bottom-6 left-6 right-6 text-warm-white">
              <div className="flex items-center gap-1.5 text-onelife-red text-xs font-heading font-semibold uppercase tracking-wider mb-0.5">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Executive Leadership</span>
              </div>
              <h3 className="font-heading font-bold text-xl text-white">{featured.name}</h3>
              <p className="text-xs text-[#C2C2C4]">{featured.role}</p>
            </div>
          </div>
        </motion.div>

        {/* 2. RIGHT COLUMN: STACKED FEATURE LIST */}
        <motion.div
          className="lg:col-span-6 space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInRight}
        >
          <div>
            <span className="text-xs font-heading font-semibold uppercase tracking-[0.2em] text-onelife-red block mb-2">
              {intro.eyebrow}
            </span>
            <h2 className="font-heading font-bold text-xl sm:text-2xl text-charcoal tracking-tight leading-tight">
              {intro.heading}
            </h2>
          </div>

          {/* Stacked List (Reference Layout Rows) */}
          <div className="space-y-6">
            {featured.highlights.map((item, index) => {
              return (
                <div key={index} className="flex items-start gap-4 sm:gap-5 group">
                  {/* Circular / Outlined Icon with OneLife Red Stroke */}
                  <div className="w-12 h-12 rounded-lg bg-warm-white border border-charcoal/10 flex items-center justify-center shrink-0 transition-colors group-hover:border-onelife-red group-hover:bg-white shadow-sm">
                    <ContentIcon name={item.icon} className="w-6 h-6 text-onelife-red" strokeWidth={2} />
                  </div>

                  <div className="space-y-1">
                    <h3 className="font-heading font-bold text-[12px] md:text-[14px] text-charcoal group-hover:text-onelife-red transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-[10px] sm:text-sm text-slate-grey leading-relaxed">
                      {item.body}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Additional Team Members (once more than one staff member exists) */}
          {others.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {others.map((member) => (
                <div
                  key={member.id}
                  className="flex items-center gap-3 p-3 rounded-lg border border-charcoal/10 bg-warm-white"
                >
                  {member.photoUrl && (
                    <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0 border border-charcoal/10">
                      <Image src={member.photoUrl} alt={member.name} fill className="object-cover" />
                    </div>
                  )}
                  <div>
                    <p className="font-heading font-bold text-xs text-charcoal">{member.name}</p>
                    <p className="text-[11px] text-slate-grey">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* CTA Link */}
          <div className="pt-2">
            <Link
              href="/who-we-are#leadership"
              className="inline-flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-wider text-charcoal hover:text-onelife-red transition-colors group"
            >
              <span>Reach Out</span>
              <ArrowRight className="w-4 h-4 text-onelife-red transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
