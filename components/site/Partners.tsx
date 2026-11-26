"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export const Partners = () => {
  return (
    <section
      id="partners"
      aria-labelledby="partners-heading"
      className="relative overflow-hidden bg-[#0B0B0C] px-4 py-16 text-white sm:px-8 sm:py-20"
    >
      {/* Soft red glow, matching Leadership and Footer */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-24 h-[26rem] w-[26rem] rounded-full bg-onelife-red/10 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-12 lg:items-center lg:gap-14">
        <div className="lg:col-span-5">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-10 bg-onelife-red" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-onelife-red">
              In good company
            </span>
          </div>
          <h2
            id="partners-heading"
            className="font-heading text-2xl font-semibold tracking-tight text-white sm:text-3xl"
          >
            Our Partners
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/60 sm:text-base">
            Our creative delivery partner, extending production, digital distribution and
            multi-market media capability across our campaigns and platforms.
          </p>
        </div>

        <a
          href="https://melangedigital.co/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Mélange Digital, creative delivery partner (opens in a new tab)"
          className="group relative flex flex-col gap-6 border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-onelife-red/60 sm:flex-row sm:items-center sm:justify-between sm:p-8 lg:col-span-7 lg:px-10"
        >
          <span className="flex items-center justify-center rounded-lg bg-white px-6 py-4 shadow-lg shadow-black/40">
            <Image
              src="/logo-melange.png"
              alt="Mélange Digital"
              width={774}
              height={192}
              className="h-12 w-auto sm:h-14"
            />
          </span>

          <span className="flex flex-col gap-2 sm:items-end sm:text-right">
            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/45">
              Creative delivery partner
            </span>
            <span className="inline-flex items-center gap-2 font-heading text-xs font-semibold uppercase tracking-wider text-white transition-colors group-hover:text-onelife-red">
              Visit melangedigital.co
              <ArrowUpRight className="h-4 w-4 text-onelife-red transition-transform group-hover:-translate-x-0 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </span>
          </span>
        </a>
      </div>
    </section>
  );
};