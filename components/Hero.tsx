"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowDownRight, ArrowRight } from "lucide-react";

const introVariants: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

interface HeroProps {
  headline: string;
  backgroundImage: string;
}

export const Hero = ({ headline, backgroundImage }: HeroProps) => {
  return (
    <section id="home" className="relative isolate min-h-[min(680px,calc(100svh-5rem))] scroll-mt-32 overflow-hidden bg-[#101112] text-white">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(10,11,12,0.94)_0%,rgba(10,11,12,0.78)_52%,rgba(10,11,12,0.33)_100%)]"
      />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 -z-10 h-48 bg-gradient-to-t from-[#101112] to-transparent" />
      <div aria-hidden="true" className="absolute -right-36 top-20 -z-10 h-[30rem] w-[30rem] rounded-full border border-white/10 sm:h-[40rem] sm:w-[40rem]" />
      <div aria-hidden="true" className="absolute -right-16 top-40 -z-10 h-[23rem] w-[23rem] rounded-full border border-onelife-red/40 sm:h-[32rem] sm:w-[32rem]" />

      <div className="mx-auto flex min-h-[inherit] max-w-7xl flex-col justify-between px-5 pb-8 pt-14 sm:px-8 sm:pb-10 sm:pt-20 lg:px-10 lg:pt-24">
        <motion.div
          className="max-w-3xl"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.14 } },
          }}
        >
          <motion.p variants={introVariants} className="mb-5 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/75 sm:text-[11px]">
            <span className="h-px w-8 bg-onelife-red" />
            OneLife Communications & Events
          </motion.p>
          <motion.h1
            variants={introVariants}
            className="max-w-3xl font-heading text-[clamp(1.8rem,4vw,3rem)] font-semibold leading-[1.12] tracking-[-0.035em] text-white"
          >
            {headline}
          </motion.h1>
          <motion.div variants={introVariants} className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <Link
              href="/contact"
              className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-onelife-red px-6 py-3 font-heading text-xs font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#d1171e]"
            >
              Start a conversation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/capabilities"
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/30 px-6 py-3 font-heading text-xs font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:border-white hover:bg-white/10"
            >
              Explore our work
              <ArrowDownRight className="h-4 w-4 text-onelife-red transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </Link>
          </motion.div>
        </motion.div>

        <div className="mt-16 flex flex-col gap-7 border-t border-white/20 pt-6 sm:flex-row sm:items-end sm:justify-between sm:gap-10">
          <p className="max-w-sm text-sm leading-relaxed text-white/65 sm:text-base">
            Strategy, creative and execution — brought together around the challenge, not a rigid agency menu.
          </p>
          <div className="grid grid-cols-3 gap-5 sm:gap-10">
            <div>
              <p className="font-heading text-2xl font-semibold tracking-tight text-white sm:text-3xl">14+</p>
              <p className="mt-1 text-[9px] font-medium uppercase tracking-[0.16em] text-white/55 sm:text-[10px]">Years in the region</p>
            </div>
            <div>
              <p className="font-heading text-2xl font-semibold tracking-tight text-white sm:text-3xl">01</p>
              <p className="mt-1 text-[9px] font-medium uppercase tracking-[0.16em] text-white/55 sm:text-[10px]">Accountable partner</p>
            </div>
            <div>
              <p className="font-heading text-2xl font-semibold tracking-tight text-white sm:text-3xl">SADC</p>
              <p className="mt-1 text-[9px] font-medium uppercase tracking-[0.16em] text-white/55 sm:text-[10px]">Regional reach</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
