"use client";

import React from "react";
import type { EyebrowDescription, FourPhaseStep, WithId } from "@/lib/content/read";

interface FourPhaseApproachProps {
  intro: EyebrowDescription;
  steps: WithId<FourPhaseStep>[];
}

export const FourPhaseApproach = ({ intro, steps: fourPhases }: FourPhaseApproachProps) => {
  return (
    <section className="py-24 px-4 sm:px-8 bg-[#F4F4F0] border-b border-charcoal/10">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-16">
          <span className="text-[12px] font-heading font-semibold uppercase tracking-[0.2em] text-onelife-red block mb-2">
            {intro.eyebrow}
          </span>
          <p className="text-[12px] md:text-[14px] text-slate-grey mt-3">
            {intro.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {fourPhases.map((phase) => (
            <div key={phase.step} className="bg-white p-8 rounded-lg border border-charcoal/10 shadow-sm flex flex-col justify-between">
              <div>
                <span className="font-heading font-bold text-2xl text-onelife-red block mb-4">
                  {phase.step}
                </span>
                <h3 className="font-heading font-bold text-[12px] text-charcoal mb-2">
                  {phase.name}
                </h3>
                <p className="text-[12px] text-slate-grey leading-relaxed">
                  {phase.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};