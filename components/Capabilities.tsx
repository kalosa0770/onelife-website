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
} from "@/lib/site/content";

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
      className="relative scroll-mt-32 overflow-hidden bg-[#101112] px-4 py-20 text-white sm:px-8 md:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 grid grid-cols-1 items-end gap-5 sm:mb-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <span className="mb-3 block text-xs font-heading font-semibold uppercase tracking-[0.2em] text-onelife-red">
              {intro.eyebrow}
            </span>
            <h2 className="max-w-3xl font-heading text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl md:text-4xl">
              {intro.heading}
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-relaxed text-white/60 sm:text-base lg:col-span-5 lg:justify-self-end">
            {intro.description}
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {cards.map((item, index) => {
            return (
              <motion.div
                key={item.id}
                variants={cardVariants}
                className="group relative flex min-h-[22rem] flex-col justify-end overflow-hidden border border-white/10 bg-[#1a1b1c] p-5 transition-colors duration-300 hover:border-onelife-red/70 sm:min-h-[24rem] sm:p-6"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-black/10 transition-colors group-hover:from-black/90" />

                <div className="relative z-10 flex h-full flex-col justify-end text-warm-white">
                  <div className="mb-5 flex items-center justify-between">
                    <span className="flex h-10 w-10 items-center justify-center border border-white/25 bg-white/10 backdrop-blur-sm transition-colors group-hover:border-onelife-red group-hover:bg-onelife-red">
                      <ContentIcon
                        name={item.icon}
                        className="h-5 w-5 text-warm-white"
                        strokeWidth={2}
                      />
                    </span>
                    <span className="font-heading text-xs font-medium tracking-widest text-white/55">0{index + 1}</span>
                  </div>

                  <span className="mb-1 block text-xs font-heading font-semibold uppercase tracking-wider text-white/75">
                    {item.subtitle}
                  </span>

                  <h3 className="mb-2 font-heading text-lg font-bold leading-snug text-warm-white">
                    {item.title}
                  </h3>

                  <p className="mb-5 line-clamp-3 text-sm leading-relaxed text-white/85">
                    {item.description}
                  </p>

                  <Link
                    href={item.link}
                    className="inline-flex min-h-8 items-center gap-2 text-xs font-heading font-bold uppercase tracking-wider text-white transition-colors hover:text-onelife-red"
                  >
                    <span>Explore</span>
                    <ArrowRight className="h-4 w-4 text-onelife-red transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* View All Capabilities CTA */}
        <div className="mt-10 text-center sm:mt-12">
          <Link
            href="/capabilities"
            className="inline-flex min-h-12 items-center justify-center gap-2 border border-white/25 px-7 py-3 font-heading text-xs font-semibold uppercase tracking-wider text-warm-white transition-colors hover:border-onelife-red hover:bg-onelife-red sm:px-8"
          >
            <span>View All Capabilities</span>
            <ArrowRight className="h-4 w-4 text-onelife-red" />
          </Link>
        </div>
      </div>
    </section>
  );
};