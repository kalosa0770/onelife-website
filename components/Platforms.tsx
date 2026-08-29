"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowUpRight, Tag, ShieldCheck } from "lucide-react";
import { ContentIcon } from "@/components/ContentIcon";
import type { Platform, WithId } from "@/lib/content/read";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const MotionLink = motion.create(Link);

interface PlatformsProps {
  platforms: WithId<Platform>[];
}

export const Platforms = ({ platforms }: PlatformsProps) => {
  return (
    <section 
      id="platforms" 
      className="py-24 px-4 sm:px-8 bg-warm-white border-b border-charcoal/10 relative overflow-hidden"
    >
      {/* Subtle Background Watermark Ring */}
      <div className="absolute right-[-100px] bottom-[-100px] w-[500px] h-[500px] pointer-events-none opacity-[0.03] select-none">
        <svg viewBox="0 0 100 100" fill="none" stroke="#2B2B2D" strokeWidth="1.5">
          <path d="M 50,50 m -40,0 a 40,38 0 1,0 80,0 a 40,38 0 1,0 -80,0" strokeDasharray="240 10" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header: eyebrow + headline left, pill CTA right */}
        <div className="flex flex-row items-end sm:items-center justify-between mb-14 gap-4">
          <div>
            <span className="text-xs font-heading font-semibold uppercase tracking-[0.2em] text-onelife-red block mb-2">
              Proprietary Ecosystem
            </span>
            <h2 className="font-heading font-bold text-xl md:text-2xl  text-charcoal tracking-tight leading-none">
              Platforms No One Else Owns
            </h2>
          </div>

          <Link
            href="/new-ventures"
            className="hidden sm:inline-flex shrink-0 items-center gap-2 bg-onelife-red hover:bg-[#d1171e] text-white font-heading font-semibold text-[10px] uppercase tracking-wider px-6 py-3.5 rounded-full shadow-sm hover:shadow-md transition-all duration-200"
          >
            <span>View All Ventures</span>
          </Link>
        </div>

        {/* 3 Platforms Grid — image-topped editorial cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {platforms.map((platform) => {
            return (
              <MotionLink
                key={platform.id}
                href={`/platforms/${platform.slug}`}
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group block rounded-lg border border-charcoal/10 bg-white shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                {/* Card Image */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={platform.image}
                    alt={platform.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  {/* Badge chip over the image */}
                  <span
                    className="absolute top-4 left-4 inline-flex items-center gap-1.5 text-[10px] font-heading font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full text-white shadow-sm"
                    style={{ backgroundColor: platform.accentColorHex }}
                  >
                    <ContentIcon name={platform.icon} className="w-3 h-3" strokeWidth={2.5} />
                    {platform.badge}
                  </span>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  {/* Meta Row: category + "By OneLife" endorsement */}
                  <div className="flex items-center gap-4 text-xs text-slate-grey mb-3">
                    <span className="flex items-center gap-1.5">
                      <Tag className="w-3.5 h-3.5" style={{ color: platform.accentColorHex }} />
                      {platform.category}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-onelife-red" />
                      By OneLife
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading font-bold text-[14px] text-charcoal mb-2 tracking-tight leading-snug">
                    {platform.name}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-[12px] text-slate-grey leading-relaxed line-clamp-3 mb-5">
                    {platform.description}
                  </p>

                  {/* Read More Link */}
                  <span
                    className="inline-flex items-center gap-1.5 text-[12px] font-heading font-bold uppercase tracking-wider transition-transform duration-200 group-hover:translate-x-0.5"
                    style={{ color: platform.accentColorHex }}
                  >
                    Learn More
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </MotionLink>
            );
          })}
        </motion.div>

        {/* Mobile CTA (hidden on desktop, shown under the grid on small screens) */}
        <div className="mt-10 text-center sm:hidden">
          <Link
            href="/new-ventures"
            className="inline-flex items-center gap-2 bg-onelife-red hover:bg-[#d1171e] text-white font-heading font-semibold text-xs uppercase tracking-wider px-6 py-3.5 rounded-full shadow-sm transition-all duration-200"
          >
            <span>View All Ventures</span>
          </Link>
        </div>

        {/* Footnote / Architecture Context */}
        <p className="mt-14 text-xs text-slate-grey text-center max-w-2xl mx-auto leading-relaxed">
          All platforms operate under the OneLife master brand system while maintaining dedicated audiences and editorial independence.
        </p>

      </div>
    </section>
  );
};