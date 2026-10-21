"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Mail, Menu, X, ChevronDown } from "lucide-react";
import {
  NAV_SECTIONS,
  getActiveSection,
  isItemActive,
} from "@/lib/site/nav";
import { SITE_SETTINGS } from "@/lib/site/content-data";
import { SubNav } from "@/components/site/SubNav";
import { SocialLinks } from "@/components/site/SocialLinks";

export const Navbar = () => {
  const pathname = usePathname() ?? "/";
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);
  const active = getActiveSection(pathname);

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

  function openDrawer() {
    setOpenSection(active?.id ?? null);
    setMobileOpen(true);
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
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

      {/* Main navigation: the three tabs */}
      <nav aria-label="Primary" className="border-b border-charcoal/10 px-4 sm:px-8">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6">
          <Link href="/" className="flex shrink-0 items-center" aria-label="OneLife home">
            <Image
              src="/logo-onelife.jpg"
              alt="OneLife"
              width={120}
              height={32}
              priority
              className="h-8 w-auto"
            />
          </Link>

          <ul className="hidden h-full items-stretch gap-1 lg:flex">
            {NAV_SECTIONS.map((section) => {
              const isActive = active?.id === section.id;
              return (
                <li key={section.id} className="flex">
                  <Link
                    href={section.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`relative flex items-center px-5 font-heading text-[13px] font-semibold uppercase tracking-wider transition-colors ${
                      isActive ? "text-foreground" : "text-slate-grey hover:text-foreground"
                    }`}
                  >
                    {section.label}
                    <span
                      className={`absolute inset-x-5 bottom-0 h-[3px] rounded-t-full transition-opacity ${
                        isActive ? "opacity-100" : "opacity-0"
                      }`}
                      style={{ backgroundColor: section.accent }}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="hidden shrink-0 lg:block">
            <Link
              href="/contact"
              className="rounded bg-onelife-red px-6 py-2.5 font-heading text-xs font-semibold uppercase tracking-wider text-white shadow-sm transition hover:bg-[#d1171e] hover:shadow-md"
            >
              Contact Us
            </Link>
          </div>

          <button
            onClick={openDrawer}
            className="-mr-2 rounded p-2 text-foreground transition-colors hover:text-onelife-red lg:hidden"
            aria-label="Open navigation menu"
            aria-expanded={mobileOpen}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {/* Uniform sub-navigation for the active tab */}
      <SubNav pathname={pathname} section={active} />

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
                <Image src="/logo-onelife.jpg" alt="OneLife" width={120} height={32} className="h-8 w-auto" />
                <button
                  onClick={closeMobile}
                  className="-mr-2 rounded p-2 text-foreground hover:text-onelife-red"
                  aria-label="Close navigation menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-5 py-4">
                {NAV_SECTIONS.map((section) => {
                  const expanded = openSection === section.id;
                  return (
                    <div key={section.id} className="border-b border-charcoal/10 last:border-b-0">
                      <button
                        onClick={() => setOpenSection(expanded ? null : section.id)}
                        aria-expanded={expanded}
                        className="flex w-full items-center justify-between py-4 text-left font-heading text-sm font-semibold uppercase tracking-wider text-foreground"
                      >
                        <span className="flex items-center gap-3">
                          <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: section.accent }} />
                          {section.label}
                        </span>
                        <ChevronDown
                          className={`h-4 w-4 text-slate-grey transition-transform ${expanded ? "rotate-180" : ""}`}
                        />
                      </button>
                      {expanded && (
                        <ul className="space-y-0.5 pb-4 pl-5">
                          {section.items.map((item) => {
                            const itemActive = isItemActive(pathname, item.href, section.items);
                            return (
                              <li key={item.href}>
                                <Link
                                  href={item.href}
                                  onClick={closeMobile}
                                  className={`block rounded px-3 py-2.5 text-sm transition-colors ${
                                    itemActive
                                      ? "bg-surface font-semibold text-foreground"
                                      : "text-slate-grey hover:bg-surface hover:text-foreground"
                                  }`}
                                >
                                  {item.label}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="shrink-0 space-y-4 border-t border-charcoal/10 p-5">
                <Link
                  href="/contact"
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
