"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowDownRight, ArrowRight } from "lucide-react";
import { Slideshow } from "@/components/Slideshow";

const introVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

interface HeroProps {
  headline: string;
  backgroundImage: string | string[];
}

export const Hero = ({ headline, backgroundImage }: HeroProps) => {
  const isSlideshow = Array.isArray(backgroundImage);
  const images = isSlideshow ? backgroundImage : [backgroundImage];

  return (
    <section
      id="home"
      className="relative isolate min-h-[min(760px,calc(100svh-5rem))] scroll-mt-32 overflow-hidden bg-[#101112] text-white"
    >
      {/* Background Image/Slideshow */}
      <div className="absolute inset-0 -z-20">
        {isSlideshow ? (
          <Slideshow
            images={images}
            interval={5000}
            autoPlay={true}
            className="h-full w-full"
          />
        ) : (
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${images[0]}')` }}
          />
        )}
      </div>

      {/* Overlays: left-weighted for h1 legibility, bottom-weighted for the paragraph */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(10,11,12,0.92)_0%,rgba(10,11,12,0.7)_50%,rgba(10,11,12,0.25)_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 -z-10 h-72 bg-gradient-to-t from-[#101112] via-[#101112]/80 to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute -right-36 top-20 -z-10 h-[30rem] w-[30rem] rounded-full border border-white/10 sm:h-[40rem] sm:w-[40rem]"
      />
      <div
        aria-hidden="true"
        className="absolute -right-16 top-40 -z-10 h-[23rem] w-[23rem] rounded-full border border-onelife-red/40 sm:h-[32rem] sm:w-[32rem]"
      />

      <div className="mx-auto flex min-h-[inherit] max-w-7xl flex-col justify-between px-5 pb-8 pt-16 sm:px-8 sm:pb-12 sm:pt-24 lg:px-10 lg:pt-28">
        {/* Top: headline + CTAs */}
        <motion.div
          className="max-w-4xl"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.14 } },
          }}
        >
          <motion.p
            variants={introVariants}
            className="mb-6 flex items-center gap-3 text-sm font-medium tracking-wide text-white/80"
          >
            <span className="h-[2px] w-10 bg-onelife-red" />
            OneLife Communications &amp; Events
          </motion.p>

          <motion.h1
            variants={introVariants}
            className="font-heading text-[clamp(2.5rem,6.5vw,5.25rem)] font-semibold leading-[1.04] tracking-[-0.04em] text-white text-balance [text-shadow:0_2px_24px_rgba(0,0,0,0.35)]"
          >
            {headline}
          </motion.h1>

          <motion.div
            variants={introVariants}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4"
          >
            <Link
              href="/contact"
              className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-onelife-red px-7 py-3 font-heading text-sm font-semibold text-white transition-colors hover:bg-[#d1171e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Start a conversation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/capabilities"
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/35 px-7 py-3 font-heading text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Explore our work
              <ArrowDownRight className="h-4 w-4 text-onelife-red transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Bottom: paragraph anchored bottom-left, stats on the right */}
        <motion.div
          className="mt-20 flex flex-col gap-8 border-t border-white/20 pt-7 lg:flex-row lg:items-end lg:justify-between lg:gap-12"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="max-w-md text-left text-base leading-relaxed text-white/80 sm:text-lg">
            Strategy, creative and execution — brought together around the
            challenge, not a rigid agency menu.
          </p>

          <dl className="grid grid-cols-3 gap-6 sm:gap-12">
            {[
              { value: "14+", label: "Years in the region" },
              { value: "1", label: "Accountable partner" },
              { value: "SADC", label: "Regional reach" },
            ].map((stat) => (
              <div key={stat.label}>
                <dd className="font-heading text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  {stat.value}
                </dd>
                <dt className="mt-1 text-xs text-white/60 sm:text-sm">
                  {stat.label}
                </dt>
              </div>
            ))}
          </dl>
        </motion.div>
      </div>
    </section>
  );
};