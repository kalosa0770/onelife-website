"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Plus_Jakarta_Sans, Newsreader } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MapPin, Mail } from "lucide-react";
import { NAV_GROUPS } from "@/lib/site/nav";
import { SITE_SETTINGS } from "@/lib/site/content-data";
import { SocialLinks } from "@/components/site/SocialLinks";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-institutional-sans",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-institutional-serif",
  display: "swap",
});

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Lock body scroll while the menu overlay is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <header
      className={`${plusJakartaSans.variable} ${newsreader.variable} sticky top-0 z-50 w-full bg-[#ED1C24]/95 backdrop-blur`}
      style={{ fontFamily: "var(--font-institutional-sans)" }}
    >
      {/* Utility bar */}
      <div className="hidden border-b border-white/20 px-8 py-1.5 text-white/80 md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 text-[11px] font-medium tracking-wide">
          <div className="flex items-center gap-6">
            {SITE_SETTINGS.address && (
              <span className="flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 shrink-0 text-white/70" />
                {SITE_SETTINGS.address}
              </span>
            )}
            {SITE_SETTINGS.email && (
              <a
                href={`mailto:${SITE_SETTINGS.email}`}
                className="flex items-center gap-1.5 transition-colors hover:text-white"
              >
                <Mail className="h-3.5 w-3.5 shrink-0 text-white/70" />
                {SITE_SETTINGS.email}
              </a>
            )}
          </div>
          <SocialLinks
            siteSettings={SITE_SETTINGS}
            className="gap-4 text-white/80"
            iconClassName="h-3.5 w-3.5"
            hoverClassName="hover:text-white"
          />
        </div>
      </div>

      {/* Main bar: just the logo and the menu trigger, identical at every breakpoint */}
      <nav aria-label="Primary" className="border-b border-white/20 px-4 sm:px-8">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 lg:h-24">
          <Link
            href="/#home"
            className="flex shrink-0 items-center rounded-sm border border-white/30 bg-white px-3 py-2"
            aria-label="OneLife home"
          >
            <Image
              src="/logo-onelife.jpg"
              alt="OneLife"
              width={200}
              height={54}
              priority
              className="h-10 w-auto sm:h-11 lg:h-14"
            />
          </Link>

          <button
            onClick={() => setMenuOpen(true)}
            className="inline-flex items-center gap-2 rounded-sm p-2 text-white transition-colors hover:text-white/70"
            aria-label="Open navigation menu"
            aria-haspopup="dialog"
            aria-expanded={menuOpen}
          >
            <Menu className="h-7 w-7" />
          </button>
        </div>
      </nav>

      {/* Full-screen menu — slides down from the top, same on mobile and desktop */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ type: "tween", duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className={`${plusJakartaSans.variable} ${newsreader.variable} fixed inset-0 z-[70] flex h-dvh w-full flex-col overflow-y-auto bg-[#ED1C24]`}
            style={{ fontFamily: "var(--font-institutional-sans)" }}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            <div className="flex h-20 shrink-0 items-center justify-between border-b border-white/20 px-4 sm:px-8 lg:h-24">
              <Link
                href="/#home"
                onClick={() => setMenuOpen(false)}
                className="flex items-center rounded-sm border border-white/30 bg-white px-3 py-2"
                aria-label="OneLife home"
              >
                <Image
                  src="/logo-onelife.jpg"
                  alt="OneLife"
                  width={200}
                  height={54}
                  className="h-10 w-auto sm:h-11 lg:h-14"
                />
              </Link>
              <button
                onClick={() => setMenuOpen(false)}
                className="rounded-sm p-2 text-white transition-colors hover:text-white/70"
                aria-label="Close navigation menu"
              >
                <X className="h-7 w-7" />
              </button>
            </div>

            <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col justify-center gap-10 px-6 py-12 sm:px-8 lg:flex-row lg:gap-20 lg:py-16">
              {NAV_GROUPS.map((group) => (
                <div key={group.label} className="flex-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                    {group.label}
                  </p>
                  <ul className="mt-5 space-y-3">
                    {group.items.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={() => setMenuOpen(false)}
                          style={{ fontFamily: "var(--font-institutional-serif)" }}
                          className="text-2xl text-white transition-colors hover:text-white/70 sm:text-3xl"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="flex shrink-0 flex-col gap-6 border-t border-white/20 px-6 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8">
              <Link
                href="/#contact"
                onClick={() => setMenuOpen(false)}
                className="inline-flex w-fit items-center rounded-sm bg-[#F8F7F4] px-6 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-[#ED1C24] transition-colors hover:bg-white"
              >
                Contact Us
              </Link>
              <SocialLinks
                siteSettings={SITE_SETTINGS}
                className="gap-5 text-white"
                iconClassName="h-5 w-5"
                hoverClassName="hover:text-white/70"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
