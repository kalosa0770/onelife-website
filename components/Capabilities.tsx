"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ContentIcon } from "@/components/ContentIcon";
import type {
  CapabilityHomeCard,
  CapabilitiesHomeIntro,
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

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

interface CapabilitiesProps {
  intro: CapabilitiesHomeIntro;
  cards: WithId<CapabilityHomeCard>[];
}

export const Capabilities = ({ intro, cards }: CapabilitiesProps) => {
  return (
    <section 
      id="capabilities" 
      className="py-12 bg-[#F4F4F0] border-y border-charcoal/10 px-4 sm:px-8 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-5xl mx-auto mb-16">
          <span className="text-xs font-heading font-semibold uppercase tracking-[0.2em] text-onelife-red block mb-2">
            {intro.eyebrow}
          </span>
          <h2 className="font-heading font-bold text-xl md:text-2xl text-charcoal tracking-tight mb-4">
            {intro.heading}
          </h2>
          <p className="text-[12px] sm:text-base text-slate-grey leading-relaxed">
            {intro.description}
          </p>
        </div>

        {/* 4 Cards Grid (Matching Reference Template) */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {cards.map((item) => {
            return (
              <motion.div
                key={item.id}
                variants={cardVariants}
                className="group relative h-96 rounded-lg overflow-hidden shadow-md border border-charcoal/10 flex flex-col justify-end p-6 bg-charcoal"
              >
                {/* Background Image with Zoom on Hover */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent pointer-events-none" />

                {/* Foreground Content */}
                <div className="relative z-10 text-warm-white flex flex-col justify-end h-full">
                  {/* Circular Line Icon Badge */}
                  <div className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center mb-4 transition-colors group-hover:bg-onelife-red group-hover:border-onelife-red">
                    <ContentIcon name={item.icon} className="w-5 h-5 text-warm-white" strokeWidth={2} />
                  </div>

                  <span className="text-[10px] font-heading font-semibold uppercase tracking-wider text-white/70 block mb-1">
                    {item.subtitle}
                  </span>

                  <h3 className="font-heading font-bold text-lg sm:text-xl text-warm-white mb-2 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-white leading-relaxed line-clamp-3 mb-4">
                    {item.description}
                  </p>

                  <Link
                    href={item.link}
                    className="inline-flex items-center gap-1.5 text-xs font-heading font-semibold uppercase tracking-wider text-onelife-red hover:text-white transition-colors group-hover:translate-x-0.5 duration-200"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* View All Capabilities CTA */}
        <div className="mt-14 text-center">
          <Link
            href="/capabilities"
            className="inline-flex items-center justify-center gap-2 bg-charcoal hover:bg-black text-warm-white font-heading font-semibold text-xs uppercase tracking-wider px-8 py-4 rounded shadow transition-all duration-200"
          >
            <span>Explore All Capabilities</span>
            <ArrowRight className="w-4 h-4 text-onelife-red" />
          </Link>
        </div>

      </div>
    </section>
  );
};