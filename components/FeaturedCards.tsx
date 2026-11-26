"use client";

import { useCallback, useState } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { ArrowLeft, ArrowRight, Pause, Play } from "lucide-react";
import type { HeroFeatureCard } from "@/lib/site/content";
import { ContentIcon } from "@/components/ContentIcon";

const EASE = [0.22, 1, 0.36, 1] as const;

const slideVariants: Variants = {
  enter: (dir: number) => ({ opacity: 0, x: dir * 40 }),
  center: { opacity: 1, x: 0, transition: { duration: 0.55, ease: EASE } },
  exit: (dir: number) => ({ opacity: 0, x: dir * -40, transition: { duration: 0.3, ease: EASE } }),
};

const pad = (n: number) => String(n).padStart(2, "0");

export const FeaturedCards = ({ featureCards }: { featureCards: HeroFeatureCard[] }) => {
  const count = featureCards.length;
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

  const active = featureCards[index];
  const isDark = active.variant === "dark";

  const controlClass =
    "flex h-10 w-10 items-center justify-center border border-charcoal/15 text-charcoal transition-colors hover:border-onelife-red hover:bg-onelife-red hover:text-white";

  return (
    <section aria-label="Why OneLife" className="border-b border-charcoal/10 bg-white px-5 py-14 sm:px-8 sm:py-20">
      <div
        className="mx-auto max-w-7xl"
        role="region"
        aria-roledescription="carousel"
        aria-label="Why OneLife"
        onMouseEnter={() => setInteracting(true)}
        onMouseLeave={() => setInteracting(false)}
        onFocus={() => setInteracting(true)}
        onBlur={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setInteracting(false);
        }}
      >
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-stretch lg:gap-12">
          {/* Intro + controls */}
          <div className="flex flex-col justify-between gap-8 lg:col-span-5">
            <div>
              <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-onelife-red">
                Built around your brief
              </p>
              <h2 className="font-heading text-2xl font-semibold tracking-tight text-charcoal sm:text-3xl">
                One team. More ways to move forward.
              </h2>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-grey">
                Connected thinking, local understanding, and delivery that reaches across the region.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button type="button" onClick={prev} aria-label="Previous" className={controlClass}>
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button type="button" onClick={next} aria-label="Next" className={controlClass}>
                <ArrowRight className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => setUserPaused((p) => !p)}
                aria-label={userPaused ? "Resume slideshow" : "Pause slideshow"}
                className={`capability-motion-control ${controlClass}`}
              >
                {userPaused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
              </button>
              <span className="ml-3 font-heading text-xs tracking-widest text-charcoal/50">
                {pad(index + 1)} / {pad(count)}
              </span>
            </div>
          </div>

          {/* Stage */}
          <motion.div
            className={`relative min-h-[18rem] cursor-grab overflow-hidden transition-colors duration-500 active:cursor-grabbing sm:min-h-[20rem] lg:col-span-7 ${
              isDark ? "bg-charcoal" : "bg-[#f7f6f2]"
            }`}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.15}
            onDragEnd={(_, info) => {
              if (info.offset.x < -60) next();
              else if (info.offset.x > 60) prev();
            }}
          >
            {/* Oversized background number */}
            <span
              aria-hidden="true"
              className={`pointer-events-none absolute -bottom-8 right-4 select-none font-heading text-[9rem] font-bold leading-none sm:text-[12rem] ${
                isDark ? "text-white/5" : "text-charcoal/5"
              }`}
            >
              {pad(index + 1)}
            </span>

            <AnimatePresence mode="wait" custom={direction} initial={false}>
              <motion.article
                key={active.title}
                id="feature-slide"
                role="group"
                aria-roledescription="slide"
                aria-label={`${index + 1} of ${count}: ${active.title}`}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="relative flex h-full flex-col justify-between gap-10 p-7 sm:p-10"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-onelife-red">
                    <ContentIcon name={active.icon} className="h-5 w-5 text-white" strokeWidth={2} />
                  </span>
                  {active.tag && (
                    <span
                      className={`border px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] ${
                        isDark ? "border-white/20 text-white/70" : "border-charcoal/15 text-charcoal/70"
                      }`}
                    >
                      {active.tag}
                    </span>
                  )}
                </div>

                <div className="max-w-lg">
                  <h3
                    className={`mb-3 font-heading text-2xl font-semibold leading-snug sm:text-3xl ${
                      isDark ? "text-white" : "text-charcoal"
                    }`}
                  >
                    {active.title}
                  </h3>
                  <p className={`text-sm leading-relaxed sm:text-base ${isDark ? "text-white/70" : "text-slate-grey"}`}>
                    {active.body}
                  </p>
                </div>
              </motion.article>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Tabs with progress (drives autoplay) */}
        <div
          role="tablist"
          aria-label="Choose a highlight"
          className="mt-8 grid grid-cols-2 border-t border-charcoal/10 lg:grid-cols-4"
        >
          {featureCards.map((card, i) => {
            const isActive = i === index;
            return (
              <button
                key={card.title}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls="feature-slide"
                onClick={() => goTo(i)}
                className="relative py-4 pr-4 text-left"
              >
                <span className="absolute inset-x-0 top-0 -mt-px h-0.5 overflow-hidden">
                  {isActive && (
                    <span
                      key={`${card.title}-${index}`}
                      className="capability-progress block h-full origin-left bg-onelife-red"
                      data-paused={isPaused}
                      onAnimationEnd={next}
                    />
                  )}
                </span>
                <span
                  className={`mb-1 block font-heading text-xs tracking-widest ${
                    isActive ? "text-onelife-red" : "text-charcoal/35"
                  }`}
                >
                  {pad(i + 1)}
                </span>
                <span
                  className={`block font-heading text-xs font-semibold leading-snug transition-colors sm:text-sm ${
                    isActive ? "text-charcoal" : "text-charcoal/50 hover:text-charcoal/80"
                  }`}
                >
                  {card.title}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};