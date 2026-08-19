"use client";

import React from "react";
import Image from "next/image";

export const ImperfectOPhilosophy = () => {
  return (
    <section className="py-20 px-4 sm:px-8 bg-white border-b border-charcoal/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 flex items-center justify-center p-8 bg-warm-white rounded-2xl border border-charcoal/10 shadow-sm">
            <Image
              src="/favicon.jpg"
              alt="Not A Perfect Circle"
              width={320}
              height={320}
              className="rounded-lg"
            />
            <span className="absolute bottom-4 text-[12px] font-heading font-semibold uppercase tracking-wider text-slate-grey">
              Not A Perfect Circle
            </span>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-5">
          <span className="text-xs font-heading font-semibold uppercase tracking-[0.2em] text-onelife-red block">
            What We Believe In
          </span>
          <h2 className="font-heading font-bold text-xl md:text-2xl text-charcoal tracking-tight">
            Continuity Over Flawlessness.
          </h2>
          <p className="text-[12px] md:text-[14px] text-slate-grey leading-relaxed">
            Look closely at our logo: it was never a clean, compass-drawn circle. It has a hand-drawn stroke, an uneven curve, and a subtle break. That is our philosophy: a life, or a growing business, is not a perfect circle.
          </p>
          <p className="text-[12px] md:text-[14px] text-slate-grey leading-relaxed">
            True continuity means staying whole while navigating economic headwinds, structural pivots, and market realities. It is why our 14-year track record has stayed unbroken—we adapt, solve, and build without pretending challenges do not exist.
          </p>
          <div className="pt-2">
            <blockquote className="border-l-2 border-onelife-red pl-4 text-[12px] md:text-[14px] font-semibold text-charcoal italic">
              &ldquo;Imagination is the beginning of creation.&rdquo; — OneLife Motto
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};