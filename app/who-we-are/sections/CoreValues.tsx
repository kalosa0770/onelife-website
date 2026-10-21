"use client";

import React from "react";
import { ContentIcon } from "@/components/ContentIcon";
import type { CoreValue, EyebrowHeading, WithId } from "@/lib/site/content";

interface CoreValuesProps {
  intro: EyebrowHeading;
  values: WithId<CoreValue>[];
}

export const CoreValues = ({ intro, values }: CoreValuesProps) => {
  return (
    <section className="py-24 px-4 sm:px-8 bg-warm-white border-b border-charcoal/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-[12px] font-heading font-semibold uppercase tracking-[0.2em] text-onelife-red block mb-2">
            {intro.eyebrow}
          </span>
          <h2 className="font-heading font-bold text-xl md:text-2xl text-charcoal">
            {intro.heading}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {values.map((v) => {
            return (
              <div key={v.id} className="bg-white p-6 rounded-lg border border-charcoal/10 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded bg-warm-white flex items-center justify-center mb-4 border border-charcoal/5">
                    <ContentIcon name={v.icon} className="w-5 h-5 text-onelife-red" strokeWidth={2} />
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