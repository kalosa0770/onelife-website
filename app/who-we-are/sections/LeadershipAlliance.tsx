"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ContentIcon } from "@/components/ContentIcon";
import type {
  LeadershipAllianceIntro,
  StaffMember,
  HighlightItem,
  WithId,
} from "@/lib/content/read";

interface LeadershipAllianceProps {
  intro: LeadershipAllianceIntro;
  staff: WithId<StaffMember>[];
  highlights: WithId<HighlightItem>[];
}

export const LeadershipAlliance = ({
  intro,
  staff,
  highlights,
}: LeadershipAllianceProps) => {
  const featured = staff.find((s) => s.isFeatured === "true") ?? staff[0];
  if (!featured) return null;
  return (
    <section className="py-24 px-4 sm:px-8 bg-warm-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <div className="lg:col-span-5">
          <div className="relative h-[420px] sm:h-[480px] rounded-lg overflow-hidden shadow-xl border border-charcoal/10 bg-charcoal">
            {featured.photoUrl && (
              <Image
                src={featured.photoUrl}
                alt={`${featured.name} - ${featured.role}`}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-top"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="text-[12px] font-heading font-semibold uppercase tracking-wider text-onelife-red block">
                Leadership
              </span>
              <h3 className="font-heading font-bold text-2xl text-white">{featured.name}</h3>
              <p className="text-[12px] text-[#C2C2C4]">{featured.role}</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-6">
          <span className="text-[12px] font-heading font-semibold uppercase tracking-[0.2em] text-onelife-red block">
            {intro.eyebrow}
          </span>
          <h2 className="font-heading font-bold text-xl md:text-2xl text-charcoal tracking-tight">
            {intro.heading}
          </h2>
          <p className="text-[12px] md:text-[14px] text-slate-grey leading-relaxed">
            {intro.description}
          </p>

          <div className="space-y-3 pt-2">
            {highlights.map((item) => {
              return (
                <div
                  key={item.id}
                  className="p-4 bg-white rounded border border-charcoal/10 flex items-start gap-3.5 shadow-sm"
                >
                  <ContentIcon name={item.icon} className="w-5 h-5 text-onelife-red shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-heading font-bold text-sm text-charcoal">{item.title}</h4>
                    <p className="text-[12px] text-slate-grey">{item.body}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="pt-4">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 bg-onelife-red hover:bg-[#d1171e] text-white font-heading font-semibold text-xs uppercase tracking-wider px-7 py-4 rounded transition-all duration-200"
            >
              <span>Contact Maria</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};