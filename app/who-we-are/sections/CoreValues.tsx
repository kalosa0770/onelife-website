"use client";

import React from "react";
import {
  Compass,
  Search,
  Lightbulb,
  FlaskConical,
  Zap,
} from "lucide-react";

const values = [
  {
    title: "Passion",
    description: "We care about the outcome, not just the output.",
    icon: Compass,
  },
  {
    title: "Curiosity",
    description: "We ask why before we ask how.",
    icon: Search,
  },
  {
    title: "Exploration",
    description: "We go looking for the idea no one else found.",
    icon: Lightbulb,
  },
  {
    title: "Experimentation",
    description: "We test, learn, and adapt in the open.",
    icon: FlaskConical,
  },
  {
    title: "Boldness",
    description: "We say the thing that needs saying, and build the thing that needs building.",
    icon: Zap,
  },
];

export const CoreValues = () => {
  return (
    <section className="py-24 px-4 sm:px-8 bg-warm-white border-b border-charcoal/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-[12px] font-heading font-semibold uppercase tracking-[0.2em] text-onelife-red block mb-2">
            Guiding Principles
          </span>
          <h2 className="font-heading font-bold text-xl md:text-2xl text-charcoal">
            What Drives Our Work
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {values.map((v) => {
            const Icon = v.icon;
            return (
              <div key={v.title} className="bg-white p-6 rounded-lg border border-charcoal/10 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded bg-warm-white flex items-center justify-center mb-4 border border-charcoal/5">
                    <Icon className="w-5 h-5 text-onelife-red" strokeWidth={2} />
                  </div>
                  <h4 className="font-heading font-bold text-xl text-charcoal mb-2">{v.title}</h4>
                  <p className="text-[12px] md:text-[14px] text-slate-grey leading-relaxed">{v.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};