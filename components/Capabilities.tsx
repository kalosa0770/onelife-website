"use client";

import React, { useCallback, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { ArrowLeft, ArrowRight, Pause, Play } from "lucide-react";
import { ContentIcon } from "@/components/ContentIcon";
import type {
  CapabilityHomeCard,
  CapabilitiesHomeIntro,
  WithId,
} from "@/lib/site/content";

const EASE = [0.22, 1, 0.36, 1] as const;

const textVariants: Variants = {
  enter: (dir: number) => ({ opacity: 0, x: dir * 48 }),
  center: { opacity: 1, x: 0, transition: { duration: 0.6, ease: EASE } },
  exit: (dir: number) => ({ opacity: 0, x: dir * -48, transition: { duration: 0.35, ease: EASE } }),
};

interface CapabilitiesProps {
  intro: CapabilitiesHomeIntro;
  cards: WithId<CapabilityHomeCard>[];
}

export const Capabilities = ({ intro, cards }: CapabilitiesProps) => {
  const count = cards.length;
  const [[index, direction], setSlide] = useState<[number, number]>([0, 1]);
  const [userPaused, setUserPaused] = useState(false);
  const [interacting, setInteracting] = useState(false);
  const isPaused = userPaused || interacting;

  const goTo = useCallback(
    (target: number, dir?: number) => {
      setSlide(([current]) => {
        const next = (target + count) % count;
        return [next, dir ?? (next > current ? 1 : -1)];
      });
    },
    [count],
  );

  const next = useCallback(() => goTo(index + 1, 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1, -1), [goTo, index]);

  if (count === 0) return null;

  const active = cards[index];
  const image = Array.isArray(active.image) ? active.image[0] : active.image;

  return (
    <section
      id="capabilities"
      className="relative scroll-mt-32 overflow-hidden bg-[#101112] px-4 py-20 text-white sm:px-8 md:py-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* Intro */}
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

        {/* Slider */}
        <div
          role="region"
          aria-roledescription="carousel"
          aria-label="Capabilities"
          onMouseEnter={() => setInteracting(true)}
          onMouseLeave={() => setInteracting(false)}
          onFocus={() => setInteracting(true)}
          onBlur={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setInteracting(false);
          }}
        >
          {/* Stage */}
          <div className="relative h-[34rem] overflow-hidden border border-white/10 bg-[#1a1b1c] sm:h-[30rem] lg:h-[34rem]">
            <AnimatePresence initial={false}>
              <motion.div
                key={active.id}
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1, transition: { duration: 0.9, ease: EASE } }}
                exit={{ opacity: 0, transition: { duration: 0.6 } }}
              >
                <Image
                  src={image}
                  alt=""
                  fill
                  sizes="(max-width: 1280px) 100vw, 1280px"
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/20 lg:bg-gradient-to-r lg:from-black/95 lg:via-black/65 lg:to-black/5" />

            {/* Controls */}
            <div className="absolute right-4 top-4 z-20 flex items-center gap-2 sm:right-6 sm:top-6">
              <button
                type="button"
                onClick={() => setUserPaused((p) => !p)}
                aria-label={userPaused ? "Resume slideshow" : "Pause slideshow"}
                className="capability-motion-control flex h-10 w-10 items-center justify-center border border-white/25 bg-black/30 backdrop-blur-sm transition-colors hover:border-onelife-red hover:bg-onelife-red"
              >
                {userPaused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
              </button>
              <button
                type="button"
                onClick={prev}
                aria-label="Previous capability"
                className="flex h-10 w-10 items-center justify-center border border-white/25 bg-black/30 backdrop-blur-sm transition-colors hover:border-onelife-red hover:bg-onelife-red"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Next capability"
                className="flex h-10 w-10 items-center justify-center border border-white/25 bg-black/30 backdrop-blur-sm transition-colors hover:border-onelife-red hover:bg-onelife-red"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            {/* Slide content (swipeable) */}
            <motion.div
              id="capability-slide"
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${count}: ${active.title}`}
              className="absolute inset-0 z-10 flex cursor-grab items-end p-6 active:cursor-grabbing sm:p-10 lg:items-center lg:p-14"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.15}
              onDragEnd={(_, info) => {
                if (info.offset.x < -60) next();
                else if (info.offset.x > 60) prev();
              }}
            >
              <AnimatePresence mode="wait" custom={direction} initial={false}>
                <motion.div
                  key={active.id}
                  custom={direction}
                  variants={textVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="max-w-xl text-warm-white"
                >
                  <div className="mb-6 flex items-center gap-4">
                    <span className="flex h-12 w-12 items-center justify-center bg-onelife-red">
                      <ContentIcon name={active.icon} className="h-6 w-6 text-warm-white" strokeWidth={2} />
                    </span>
                    <span className="font-heading text-xs font-medium tracking-widest text-white/60">
                      {String(index + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
                    </span>
                  </div>

                  <span className="mb-2 block text-xs font-heading font-semibold uppercase tracking-wider text-white/75">
                    {active.subtitle}
                  </span>
                  <h3 className="mb-4 font-heading text-2xl font-bold leading-tight text-warm-white sm:text-3xl lg:text-4xl">
                    {active.title}
                  </h3>
                  <p className="mb-7 text-sm leading-relaxed text-white/85 sm:text-base">
                    {active.description}
                  </p>

                  <Link
                    href={active.link}
                    className="group inline-flex min-h-11 items-center gap-2 border border-white/25 px-5 py-2.5 text-xs font-heading font-bold uppercase tracking-wider text-white transition-colors hover:border-onelife-red hover:bg-onelife-red"
                  >
                    <span>Explore</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Tabs with progress bar (drives autoplay) */}
          <div
            role="tablist"
            aria-label="Choose a capability"
            className="grid grid-cols-2 gap-px border-x border-b border-white/10 bg-white/10 lg:grid-cols-4"
          >
            {cards.map((card, i) => {
              const isActive = i === index;
              return (
                <button
                  key={card.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls="capability-slide"
                  onClick={() => goTo(i)}
                  className={`relative bg-[#101112] px-4 py-4 text-left transition-colors sm:px-5 sm:py-5 ${
                    isActive ? "bg-[#1a1b1c]" : "hover:bg-[#161718]"
                  }`}
                >
                  <span className="absolute inset-x-0 top-0 h-0.5 overflow-hidden bg-white/10">
                    {isActive && (
                      <span
                        key={`${card.id}-${index}`}
                        className="capability-progress block h-full origin-left bg-onelife-red"
                        data-paused={isPaused}
                        onAnimationEnd={next}
                      />
                    )}
                  </span>
                  <span
                    className={`mb-1 block font-heading text-xs tracking-widest ${
                      isActive ? "text-onelife-red" : "text-white/40"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`block font-heading text-xs font-semibold leading-snug sm:text-sm ${
                      isActive ? "text-white" : "text-white/60"
                    }`}
                  >
                    {card.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

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