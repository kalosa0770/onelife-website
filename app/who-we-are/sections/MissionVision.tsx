"use client";

import React from "react";
import Image from "next/image";
import type { MissionVisionCard, WithId } from "@/lib/site/content";

interface MissionVisionProps {
  cards: WithId<MissionVisionCard>[];
}

export const MissionVision = ({ cards: CARDS }: MissionVisionProps) => {
  return (
    <section className="relative py-24 px-4 sm:px-8 bg-warm-white border-b border-charcoal/10 overflow-hidden">
      {/* Section-level background image — subtle, muted, sits behind both cards */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2000&auto=format&fit=crop"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-[0.04] grayscale"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CARDS.map((card) => (
            <div
              key={card.id}
              className="relative rounded-lg overflow-hidden shadow-sm border border-charcoal/10 min-h-[320px] flex flex-col justify-end p-8 sm:p-10"
            >
              {/* Card's own background image */}
              <Image
                src={card.image}
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              {/* Dark gradient overlay for text legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/75 to-charcoal/20 pointer-events-none" />

              {/* Card content */}
              <div className="relative z-10 space-y-3">
                <span className="text-xs font-heading font-bold uppercase tracking-wider text-onelife-red block">
                  {card.eyebrow}
                </span>
                <h3 className="font-heading font-bold text-xl md:text-2xl text-warm-white tracking-tight">
                  {card.heading}
                </h3>
                <p className="text-sm text-warm-white leading-relaxed max-w-md">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};