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
      className="relative overflow-hidden border-y border-charcoal/10 bg-[#F4F4F0] px-4 py-20 sm:px-8 md:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 grid grid-cols-1 items-end gap-5 sm:mb-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <span className="mb-3 block text-xs font-heading font-semibold uppercase tracking-[0.2em] text-onelife-red">
              {intro.eyebrow}
            </span>
            <h2 className="max-w-3xl font-heading text-3xl font-bold leading-tight tracking-tight text-charcoal sm:text-4xl md:text-5xl">
              {intro.heading}
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-relaxed text-slate-grey sm:text-base lg:col-span-5 lg:justify-self-end">
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
          {cards.map((item) => {
            return (
              <motion.div
                key={item.id}
                variants={cardVariants}
                className="group relative flex min-h-[22rem] flex-col justify-end overflow-hidden rounded-2xl border border-charcoal/10 bg-charcoal p-5 shadow-sm transition-shadow duration-300 hover:shadow-xl sm:min-h-[24rem] sm:p-6"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/5" />

                <div className="relative z-10 flex h-full flex-col justify-end text-warm-white">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm transition-colors group-hover:border-onelife-red group-hover:bg-onelife-red">
                    <ContentIcon
                      name={item.icon}
                      className="h-5 w-5 text-warm-white"
                      strokeWidth={2}
                    />
                  </div>

                  <span className="mb-1 block text-xs font-heading font-semibold uppercase tracking-wider text-white/75">
                    {item.subtitle}
                  </span>

                  <h3 className="mb-2 font-heading text-xl font-bold leading-snug text-warm-white">
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
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-charcoal px-7 py-3 font-heading text-xs font-semibold uppercase tracking-wider text-warm-white transition-colors hover:bg-black sm:px-8"
          >
            <span>View All Capabilities</span>
            <ArrowRight className="h-4 w-4 text-onelife-red" />
          </Link>
        </div>
      </div>
    </section>
  );
};