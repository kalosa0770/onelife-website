"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Mail, Phone, ArrowRight, ArrowUp } from "lucide-react";
import { HOME_NAV_ITEMS } from "@/lib/site/nav";
import { SITE_SETTINGS } from "@/lib/site/content-data";
import { SocialLinks } from "@/components/site/SocialLinks";

export const Footer = () => {
  const phoneHref = SITE_SETTINGS.phone ? `tel:${SITE_SETTINGS.phone.replace(/\s+/g, "")}` : "";

  return (
    <footer className="relative overflow-hidden bg-[#0B0B0C] px-4 pb-8 pt-16 text-white sm:px-8 sm:pt-20">
      {/* Soft red glow, echoing the Leadership section */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-0 h-[28rem] w-[28rem] rounded-full bg-onelife-red/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Columns */}
        <div className="grid grid-cols-1 gap-12 border-b border-white/10 pb-12 sm:grid-cols-2 lg:grid-cols-12">
          {/* Brand */}
          <div className="space-y-5 sm:col-span-2 lg:col-span-5">
            <span className="inline-block rounded bg-white p-2">
              <Image src="/logo-onelife.jpg" alt="OneLife" width={120} height={32} className="h-8 w-auto" />
            </span>
            {SITE_SETTINGS.footerBrandBlurb && (
              <p className="max-w-sm text-sm leading-relaxed text-white/60">{SITE_SETTINGS.footerBrandBlurb}</p>
            )}
            <SocialLinks siteSettings={SITE_SETTINGS} className="gap-4 text-white/60" />
          </div>

          {/* Navigation */}
          <nav aria-label="Footer" className="lg:col-span-4">
            <h3 className="mb-5 font-heading text-xs font-semibold uppercase tracking-[0.18em] text-white">
              Explore OneLife
            </h3>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-3 text-sm text-white/60">
              {HOME_NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h3 className="mb-5 font-heading text-xs font-semibold uppercase tracking-[0.18em] text-white">
              Get in touch
            </h3>
            <ul className="space-y-3 text-sm text-white/60">
              {SITE_SETTINGS.email && (
                <li className="flex items-center gap-3">
                  <Mail className="h-4 w-4 shrink-0 text-onelife-red" />
                  <a href={`mailto:${SITE_SETTINGS.email}`} className="transition-colors hover:text-white">
                    {SITE_SETTINGS.email}
                  </a>
                </li>
              )}
              {SITE_SETTINGS.phone && (
                <li className="flex items-center gap-3">
                  <Phone className="h-4 w-4 shrink-0 text-onelife-red" />
                  <a href={phoneHref} className="transition-colors hover:text-white">
                    {SITE_SETTINGS.phone}
                  </a>
                </li>
              )}
              {SITE_SETTINGS.address && (
                <li className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 shrink-0 text-onelife-red" />
                  {SITE_SETTINGS.address}
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 pt-6 text-xs text-white/45 sm:flex-row">
          <p>
            {SITE_SETTINGS.copyrightText ||
              `© ${new Date().getFullYear()} OneLife Communications & Events Company`}
          </p>
          <div className="flex items-center gap-6">
            <p className="italic">Not a perfect circle.</p>
            <a
              href="#top"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              aria-label="Back to top"
              className="flex h-9 w-9 items-center justify-center border border-white/15 text-white/70 transition-colors hover:border-onelife-red hover:bg-onelife-red hover:text-white"
            >
              <ArrowUp className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};