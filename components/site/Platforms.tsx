"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Plus } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const platforms = [
  {
    id: "impex",
    eyebrow: "OneLife Events",
    title: "IMPEX 2027",
    text: "A practitioner trade summit in Lusaka connecting buyers, manufacturers and investors across six SADC-COMESA corridors.",
    href: "/events/impex",
    image:
      "/images/impex.jpg",
    color: "text-impex-green",
    accent: "bg-impex-green",
  },
  {
    id: "sws",
    eyebrow: "OneLife Events",
    title: "Smart Woman Summit ’27",
    text: "Money Out Loud: a year-round women’s financial literacy community with a flagship summit, dates to be announced.",
    href: "/events/smart-woman-summit",
    image: "/images/sws-women-focused-01.jpg",
    color: "text-sws-rose",
    accent: "bg-sws-rose",
  },
];

export function Platforms() {
  const [activeId, setActiveId] = useState(platforms[0].id);
  const active = platforms.find((p) => p.id === activeId) ?? platforms[0];

  return (
    <section
      id="platforms"
      aria-labelledby="platforms-heading"
      className="scroll-mt-32 bg-surface px-5 py-16 sm:px-8 sm:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl sm:mb-14">
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-onelife-red">
            OneLife in action
          </p>
          <h2
            id="platforms-heading"
            className="font-heading text-2xl font-semibold tracking-tight text-charcoal sm:text-3xl"
          >
            Platforms that connect people, trade and care.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-14">
          {/* Picture */}
          <div className="relative h-72 overflow-hidden bg-charcoal sm:h-96 lg:col-span-6 lg:h-auto lg:min-h-[30rem]">
            <AnimatePresence initial={false}>
              <motion.div
                key={active.id}
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1, transition: { duration: 0.8, ease: EASE } }}
                exit={{ opacity: 0, transition: { duration: 0.5 } }}
              >
                <Image
                  src={active.image}
                  alt={active.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <span
              className={`absolute bottom-0 left-0 h-1.5 w-24 transition-colors duration-500 ${active.accent}`}
            />
          </div>

          {/* Accordion */}
          <div className="flex flex-col justify-center lg:col-span-6">
            <ul className="border-t border-charcoal/15">
              {platforms.map((p, i) => {
                const isOpen = p.id === activeId;
                const panelId = `platform-panel-${p.id}`;
                const buttonId = `platform-button-${p.id}`;

                return (
                  <li key={p.id} className="relative border-b border-charcoal/15">
                    <span
                      aria-hidden="true"
                      className={`absolute left-0 top-0 h-full w-0.5 origin-top transition-transform duration-500 ${p.accent} ${
                        isOpen ? "scale-y-100" : "scale-y-0"
                      }`}
                    />

                    <h3>
                      <button
                        id={buttonId}
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        onClick={() => setActiveId(p.id)}
                        className="group flex w-full items-center gap-5 py-6 pl-5 pr-1 text-left sm:py-7"
                      >
                        <span
                          className={`font-heading text-xs tracking-widest transition-colors ${
                            isOpen ? p.color : "text-charcoal/35"
                          }`}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="flex-1">
                          <span
                            className={`mb-1 block text-[10px] font-semibold uppercase tracking-[0.2em] ${p.color}`}
                          >
                            {p.eyebrow}
                          </span>
                          <span
                            className={`block font-heading text-xl font-semibold transition-colors sm:text-2xl ${
                              isOpen ? "text-charcoal" : "text-charcoal/60 group-hover:text-charcoal"
                            }`}
                          >
                            {p.title}
                          </span>
                        </span>
                        <span
                          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                            isOpen
                              ? "rotate-45 border-onelife-red bg-onelife-red text-white"
                              : "border-charcoal/20 text-charcoal group-hover:border-onelife-red"
                          }`}
                        >
                          <Plus className="h-4 w-4" />
                        </span>
                      </button>
                    </h3>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={panelId}
                          role="region"
                          aria-labelledby={buttonId}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1, transition: { duration: 0.45, ease: EASE } }}
                          exit={{ height: 0, opacity: 0, transition: { duration: 0.3, ease: EASE } }}
                          className="overflow-hidden"
                        >
                          <div className="pb-7 pl-5 pr-12 sm:pl-[3.25rem]">
                            <p className="max-w-md text-sm leading-relaxed text-slate-grey sm:text-base">
                              {p.text}
                            </p>
                            <Link
                              href={p.href}
                              className="group mt-6 inline-flex items-center gap-2 font-heading text-xs font-semibold uppercase tracking-wider text-charcoal transition-colors hover:text-onelife-red"
                            >
                              Explore {p.title}
                              <ArrowRight className="h-4 w-4 text-onelife-red transition-transform group-hover:translate-x-1" />
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}