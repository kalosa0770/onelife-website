"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Mail } from "lucide-react";
import { HOME_NAV_ITEMS } from "@/lib/site/nav";
import { SITE_SETTINGS } from "@/lib/site/content-data";
import { SocialLinks } from "@/components/site/SocialLinks";

export const Footer = () => {
  return (
    <footer className="bg-charcoal px-4 pb-8 pt-16 text-white sm:px-8">
      <div className="mx-auto max-w-7xl">
        <section aria-labelledby="partners-heading" className="mb-12 border-b border-white/10 pb-10">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-onelife-red">In good company</p>
              <h2 id="partners-heading" className="font-heading text-xl font-semibold text-white">
                Our Partners
              </h2>
            </div>
            <div
              aria-label="Mélange Digital, creative delivery partner"
              className="inline-flex min-h-20 items-center gap-4 self-start rounded-lg border border-white/10 bg-white/[0.04] px-6 py-4 sm:self-auto"
            >
              <span aria-hidden="true" className="flex h-11 w-11 items-center justify-center rounded-full bg-white font-heading text-xl font-bold text-charcoal">
                M
              </span>
              <span className="leading-tight">
                <span className="block font-heading text-base font-semibold tracking-[0.08em] text-white">MÉLANGE</span>
                <span className="mt-1 block text-[10px] font-medium uppercase tracking-[0.28em] text-white/55">Digital</span>
              </span>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 gap-12 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-5 lg:col-span-2">
            <span className="inline-block rounded bg-white p-2">
              <Image src="/logo-onelife.jpg" alt="OneLife" width={120} height={32} className="h-8 w-auto" />
            </span>
            {SITE_SETTINGS.footerBrandBlurb && (
              <p className="max-w-sm text-sm leading-relaxed text-white/65">{SITE_SETTINGS.footerBrandBlurb}</p>
            )}
            <div className="space-y-2 text-sm text-white/65">
              {SITE_SETTINGS.address && (
                <p className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 shrink-0 text-onelife-red" />
                  {SITE_SETTINGS.address}
                </p>
              )}
              {SITE_SETTINGS.email && (
                <p className="flex items-center gap-2">
                  <Mail className="h-4 w-4 shrink-0 text-onelife-red" />
                  <a href={`mailto:${SITE_SETTINGS.email}`} className="transition-colors hover:text-white">
                    {SITE_SETTINGS.email}
                  </a>
                </p>
              )}
            </div>
            <SocialLinks siteSettings={SITE_SETTINGS} className="gap-4 text-white/65" />
          </div>

          <div className="lg:col-span-2">
              <h3 className="mb-4 font-heading text-xs font-semibold uppercase tracking-wider text-white">
                Explore OneLife
              </h3>
              <ul className="grid gap-x-8 gap-y-2.5 text-sm text-white/65 sm:grid-cols-2">
                {HOME_NAV_ITEMS.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="transition-colors hover:text-white">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 pt-6 text-xs text-white/50 sm:flex-row">
          <p>{SITE_SETTINGS.copyrightText || `© ${new Date().getFullYear()} OneLife Communications & Events Company`}</p>
          <p className="italic">Not a perfect circle.</p>
        </div>
      </div>
    </footer>
  );
};
