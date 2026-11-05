"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MapPin, Mail, Menu, X } from "lucide-react";
import { NAV_GROUPS } from "@/lib/site/nav";
import { SITE_SETTINGS } from "@/lib/site/content-data";
import { SocialLinks } from "@/components/site/SocialLinks";

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Lock body scroll while the mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && closeMobile();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  function closeMobile() {
    setMobileOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-[#101112] shadow-sm">
      {/* Utility bar */}
      <div className="hidden bg-charcoal px-8 py-1.5 text-white/80 md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 text-[11px] font-medium tracking-wide">
          <div className="flex items-center gap-6">
            {SITE_SETTINGS.address && (
              <span className="flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 shrink-0 text-onelife-red" />
                {SITE_SETTINGS.address}
              </span>
            )}
            {SITE_SETTINGS.email && (
              <a
                href={`mailto:${SITE_SETTINGS.email}`}
                className="flex items-center gap-1.5 transition-colors hover:text-white"
              >
                <Mail className="h-3.5 w-3.5 shrink-0 text-onelife-red" />
                {SITE_SETTINGS.email}
              </a>
            )}
          </div>
          <SocialLinks siteSettings={SITE_SETTINGS} className="gap-4" iconClassName="h-3.5 w-3.5" />
        </div>
      </div>

      <nav aria-label="Primary" className="border-b border-white/10 px-4 sm:px-8">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6">
          <Link href="/#home" className="flex shrink-0 items-center rounded-sm bg-white px-2 py-1" aria-label="OneLife home">
            <Image
              src="/logo-onelife.jpg"
              alt="OneLife"
              width={120}
              height={32}
              priority
              className="h-7 w-auto"
            />
          </Link>

          <ul className="hidden h-full items-stretch gap-1 lg:flex">
            {NAV_GROUPS.map((group) => (
              <li key={group.label} className="flex items-center">
                <details className="group relative">
                  <summary className="flex h-16 cursor-pointer list-none items-center gap-1 px-4 font-heading text-[12px] font-semibold uppercase tracking-wider text-white/70 transition-colors hover:text-white [&::-webkit-details-marker]:hidden">
                    {group.label}
                    <ChevronDown className="h-3.5 w-3.5 transition-transform group-open:rotate-180" />
                  </summary>
                  <ul className="absolute left-0 top-full z-50 min-w-56 border border-white/10 bg-[#101112] py-2 shadow-xl">
                    {group.items.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={(event) => {
                            const details = event.currentTarget.closest("details");
                            if (details) details.open = false;
                          }}
                          className="block whitespace-nowrap px-5 py-3 text-xs font-medium text-white/70 transition-colors hover:bg-white/5 hover:text-white"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </details>
              </li>
            ))}
          </ul>

          <div className="hidden shrink-0 lg:block">
            <Link
              href="/#contact"
              className="rounded-full bg-onelife-red px-6 py-2.5 font-heading text-xs font-semibold uppercase tracking-wider text-white shadow-sm transition hover:bg-[#d1171e] hover:shadow-md"
            >
              Contact Us
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(true)}
            className="-mr-2 rounded p-2 text-white transition-colors hover:text-onelife-red lg:hidden"
            aria-label="Open navigation menu"
            aria-expanded={mobileOpen}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closeMobile}
              className="fixed inset-0 z-[60] bg-black/50 lg:hidden"
              aria-hidden="true"
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="fixed right-0 top-0 z-[70] flex h-dvh w-full max-w-sm flex-col bg-white shadow-2xl lg:hidden"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
            >
              <div className="flex h-16 shrink-0 items-center justify-between border-b border-charcoal/10 px-5">
                <Link href="/#home" onClick={closeMobile} aria-label="OneLife home">
                  <Image src="/logo-onelife.jpg" alt="OneLife" width={120} height={32} className="h-8 w-auto" />
                </Link>
                <button
                  onClick={closeMobile}
                  className="-mr-2 rounded p-2 text-foreground hover:text-onelife-red"
                  aria-label="Close navigation menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-5 py-4">
                <ul className="divide-y divide-charcoal/10">
                  {NAV_GROUPS.map((group, index) => (
                    <li key={group.label}>
                      <details open={index === 0} className="group">
                        <summary className="flex cursor-pointer list-none items-center justify-between py-4 font-heading text-sm font-semibold uppercase tracking-wider text-foreground [&::-webkit-details-marker]:hidden">
                          {group.label}
                          <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
                        </summary>
                        <ul className="pb-3 pl-3">
                          {group.items.map((item) => (
                            <li key={item.href}>
                              <Link
                                href={item.href}
                                onClick={closeMobile}
                                className="block py-2.5 text-sm text-slate-grey transition-colors hover:text-onelife-red"
                              >
                                {item.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </details>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="shrink-0 space-y-4 border-t border-charcoal/10 p-5">
                <Link
                  href="/#contact"
                  onClick={closeMobile}
                  className="block rounded bg-onelife-red py-3.5 text-center font-heading text-xs font-semibold uppercase tracking-wider text-white"
                >
                  Contact Us
                </Link>
                <SocialLinks
                  siteSettings={SITE_SETTINGS}
                  className="justify-center gap-5 text-slate-grey"
                  iconClassName="h-5 w-5"
                />
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};
