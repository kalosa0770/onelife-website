"use client";

import React from "react";
import Image from "next/image";

const CARDS = [
  {
    id: "mission",
    eyebrow: "Our Mission",
    title: "To Spread Bold Ideas.",
    description:
      "To spread bold ideas that transform how African businesses do marketing, and to connect them to the intelligence, platforms, and partnerships that help them grow.",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "vision",
    eyebrow: "Our Vision",
    title: "The Valued Strategic Partner.",
    description:
      "To be the most valued strategic communications partner for African institutions, enterprises, and development actors operating across the continent.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop",
  },
];

export const MissionVision = () => {
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
                <span className="text-xs font-heading font-semibold uppercase tracking-wider text-onelife-red block">
                  {card.eyebrow}
                </span>
                <h3 className="font-heading font-bold text-2xl text-[#E5E5E2]">
                  {card.title}
                </h3>
                <p className="text-sm text-[#E5E5E2] leading-relaxed max-w-md">
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