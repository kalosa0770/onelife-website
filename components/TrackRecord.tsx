"use client";

import React, { useState } from "react";
import Image from "next/image";
import type { TrackRecordHome, TrackRecordStat, WithId } from "@/lib/site/content";

interface TrackRecordProps {
  content: TrackRecordHome;
  stats: WithId<TrackRecordStat>[];
}

export const TrackRecord = ({ content, stats }: TrackRecordProps) => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section
      id="track-record"
      className="relative scroll-mt-32 w-full overflow-hidden bg-charcoal py-20 text-warm-white sm:py-24 md:py-28"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={content.backgroundImage}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="pointer-events-none absolute inset-0 bg-charcoal/85" />
      </div>

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 select-none opacity-[0.04]">
        <svg viewBox="0 0 100 100" fill="none" stroke="#FAFAF8" strokeWidth="1.5">
          <path d="M 50,50 m -40,0 a 40,38 0 1,0 80,0 a 40,38 0 1,0 -80,0" strokeDasharray="240 10" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-8">
        <div className="mb-10 flex items-end justify-between gap-6 sm:mb-14">
          <div className="max-w-2xl">
            <span className="mb-3 block text-xs font-heading font-semibold uppercase tracking-[0.2em] text-onelife-red">
              Track Record
            </span>
            <h2 className="font-heading text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
              Experience you can measure.
            </h2>
          </div>
          {stats.length > 1 && (
            <button
              type="button"
              className="track-record-motion-control shrink-0 border border-white/20 px-4 py-2 text-xs font-medium text-white/75 transition-colors hover:bg-white/10 hover:text-white"
              aria-pressed={isPaused}
              onClick={() => setIsPaused((paused) => !paused)}
            >
              {isPaused ? "Resume" : "Pause"}
            </button>
          )}
        </div>

        {stats.length > 0 ? (
          <div
            className="track-record-viewport overflow-hidden border-y border-white/15"
            role="region"
            aria-label="Track record statistics"
          >
            <div className="track-record-track flex py-4" data-paused={isPaused}>
              {Array.from({ length: stats.length > 1 ? 2 : 1 }, (_, groupIndex) => (
                <ul
                  key={groupIndex}
                  className="flex shrink-0 gap-4 pr-4"
                  aria-hidden={groupIndex > 0 ? true : undefined}
                >
                  {stats.map((stat) => (
                    <li
                      key={stat.id}
                      className="flex min-h-48 w-[min(82vw,22rem)] shrink-0 flex-col justify-center border border-white/15 bg-white/[0.03] px-6 py-6 sm:min-h-52 sm:px-8 sm:py-8"
                    >
                      <h3 className="mb-3 font-heading text-5xl font-bold tracking-tight text-warm-white sm:text-6xl">
                        {stat.value}
                      </h3>
                      <p className="max-w-[14rem] text-xs font-medium leading-relaxed tracking-wide text-white/75 sm:text-sm">
                        {stat.label}
                      </p>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        ) : (
          <p role="status" className="border-y border-white/15 py-10 text-sm text-white/75">
            No track record statistics are available.
          </p>
        )}
      </div>
    </section>
  );
};