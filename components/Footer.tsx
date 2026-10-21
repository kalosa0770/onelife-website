"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Mail } from "lucide-react";
import { NAV_SECTIONS } from "@/lib/site/nav";
import { SITE_SETTINGS } from "@/lib/site/content-data";
import { SocialLinks } from "@/components/site/SocialLinks";

export const Footer = () => {
  return (
    <footer className="bg-charcoal px-4 pb-8 pt-16 text-white sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-5">
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

          {NAV_SECTIONS.map((section) => (
            <div key={section.id}>
              <h3 className="mb-4 flex items-center gap-2 font-heading text-xs font-semibold uppercase tracking-wider text-white">
                <span className="h-2 w-2 rounded-full" style={{ backgroundColor: section.accent === "#1F4D3A" ? "#3F8F6A" : section.accent }} />
                {section.label}
              </h3>
              <ul className="space-y-2.5 text-sm text-white/65">
                {section.items.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="transition-colors hover:text-white">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-3 pt-6 text-xs text-white/50 sm:flex-row">
          <p>{SITE_SETTINGS.copyrightText || `© ${new Date().getFullYear()} OneLife Communications & Events Company`}</p>
          <p className="italic">Not a perfect circle.</p>
        </div>
      </div>
    </footer>
  );
};
