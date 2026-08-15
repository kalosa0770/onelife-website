"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  MapPin, 
  Mail, 
  ChevronDown, 
  Menu, 
  X, 
  ExternalLink 
} from "lucide-react";
import Image from "next/image";


const NAV_LINKS = [
  { href: "/who-we-are", label: "Who We Are" },
  { href: "/capabilities", label: "Capabilities" },
  { href: "/track-record", label: "Track Record" },
  { href: "/new-ventures", label: "Ventures" },
];

const PLATFORMS = [
  {
    href: "https://impex.onelife.co.zm",
    name: "IMPEX",
    color: "text-impex-blue",
    accent: "hover:border-impex-blue",
    external: false,
  },
  {
    href: "https://smartwomansummit.co.zm",
    name: "Smart Woman Summit",
    color: "text-sws-rose",
    accent: "hover:border-sws-rose",
    external: false,
  },
  {
    href: "https://mariamasiri.substack.com",
    name: "OTI Substack",
    color: "text-oti-gold",
    accent: "hover:border-oti-gold",
    external: true,
  },
];

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [platformDropdownOpen, setPlatformDropdownOpen] = useState(false);
  const [mobilePlatformsOpen, setMobilePlatformsOpen] = useState(false);
  const platformDropdownRef = useRef<HTMLDivElement>(null);

  // Lock body scroll while the mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Reset the mobile Platforms accordion whenever the drawer itself closes
  useEffect(() => {
    if (!mobileMenuOpen) setMobilePlatformsOpen(false);
  }, [mobileMenuOpen]);

  // Close the desktop Platforms dropdown on outside click and on Escape
  useEffect(() => {
    if (!platformDropdownOpen) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (
        platformDropdownRef.current &&
        !platformDropdownRef.current.contains(e.target as Node)
      ) {
        setPlatformDropdownOpen(false);
      }
    };
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setPlatformDropdownOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [platformDropdownOpen]);

  return (
    <header className="w-full sticky top-0 z-50 shadow-sm bg-warm-white">
      {/* 1. TOP UTILITY BAR */}
      <div className="hidden sm:block bg-charcoal text-warm-white text-xs py-2 px-4 sm:px-8 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          {/* Left: Contact Info */}
          <div className="flex items-center gap-6 text-[#A0A0A2]">
            <div className="flex items-center gap-1.5 hover:text-warm-white transition-colors">
              <MapPin className="w-3.5 h-3.5 text-onelife-red shrink-0" />
              <span>Lusaka, Zambia</span>
            </div>
            <div className="flex items-center gap-1.5 hover:text-warm-white transition-colors">
              <Mail className="w-3.5 h-3.5 text-onelife-red shrink-0" />
              <a href="mailto:info@onelife.co.zm">info@onelife.co.zm</a>
            </div>
          </div>

          {/* Right: Ecosystem Link & Social SVGs */}
          <div className="flex items-center gap-4">
            <span className="hidden md:inline text-[11px] text-[#A0A0A2] uppercase tracking-wider">
              Owned Ecosystem:
            </span>
            <a 
              href="https://mariamasiri.substack.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#A0A0A2] hover:text-oti-gold transition-colors text-[11px] font-medium"
            >
              OTI Substack
            </a>
            <span className="text-white/20">|</span>
            
            {/* Social Links (Inline SVGs) */}
            <div className="flex items-center gap-3.5 text-[#A0A0A2]">
              {/* LinkedIn */}
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-warm-white transition-colors" 
                aria-label="LinkedIn"
              >
                <svg 
                  className="w-3.5 h-3.5" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>

              {/* X (formerly Twitter) */}
              <a 
                href="https://x.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-warm-white transition-colors" 
                aria-label="X (Twitter)"
              >
                <svg 
                  className="w-3.5 h-3.5" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* Instagram */}
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-warm-white transition-colors" 
                aria-label="Instagram"
              >
                <svg 
                  className="w-3.5 h-3.5" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVIGATION */}
      <nav className="border-b border-charcoal/10 py-3.5 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-6">
          
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <Image src="/logo-onelife.jpg" alt="OneLife Logo" width={120} height={32} className="h-8 w-auto" />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8 font-heading text-[13px] font-semibold text-charcoal tracking-wider uppercase">
            <Link href="/" className="relative text-onelife-red transition-colors py-2">
              Home
              <span className="absolute left-0 -bottom-[1px] w-full h-[2px] bg-onelife-red rounded-full" />
            </Link>
            
            {NAV_LINKS.slice(0, 2).map(({ href, label }) => (
              <Link 
                key={href} 
                href={href} 
                className="relative py-2 text-charcoal/80 hover:text-onelife-red transition-colors"
              >
                {label}
              </Link>
            ))}

            {/* Dropdown for Owned Platforms — click to open/close */}
            <div className="relative" ref={platformDropdownRef}>
              <button 
                onClick={() => setPlatformDropdownOpen((open) => !open)}
                className="flex items-center gap-1 py-2 text-charcoal/80 hover:text-onelife-red transition-colors uppercase font-semibold"
                aria-expanded={platformDropdownOpen}
                aria-haspopup="true"
              >
                <span>Platforms</span>
                <ChevronDown 
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    platformDropdownOpen ? "rotate-180 text-onelife-red" : ""
                  }`} 
                />
              </button>

              <AnimatePresence>
                {platformDropdownOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                    className="absolute top-full left-1/2 -translate-x-1/2 w-72 bg-white border border-charcoal/10 rounded shadow-xl overflow-hidden py-1.5 z-50 normal-case tracking-normal"
                  >
                    {PLATFORMS.map(({ href, name, color, accent, external }) => (
                      <a
                        key={href}
                        href={href}
                        target={external ? "_blank" : undefined}
                        rel={external ? "noopener noreferrer" : undefined}
                        onClick={() => setPlatformDropdownOpen(false)}
                        className={`block px-4 py-3 hover:bg-warm-white border-l-2 border-transparent ${accent} transition-colors`}
                      >
                        <span className={`font-heading font-semibold text-xs ${color} flex items-center justify-between uppercase tracking-wider`}>
                          {name}
                          {external && <ExternalLink className="w-3 h-3" />}
                        </span>
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {NAV_LINKS.slice(2).map(({ href, label }) => (
              <Link 
                key={href} 
                href={href} 
                className="relative py-2 text-charcoal/80 hover:text-onelife-red transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Right Action Button */}
          <div className="hidden lg:flex items-center gap-4 shrink-0">
            <Link 
              href="#contact" 
              className="bg-onelife-red hover:bg-[#d1171e] text-white font-heading font-semibold text-xs uppercase tracking-wider px-6 py-3 rounded shadow-sm hover:shadow-md transition-all duration-200"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button 
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden p-2 -mr-2 text-charcoal hover:text-onelife-red focus:outline-none focus-visible:ring-2 focus-visible:ring-onelife-red rounded transition-colors"
            aria-label="Open navigation menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* 3. MOBILE DRAWER (slides in from the right) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-charcoal/50 backdrop-blur-[2px] z-[60] lg:hidden"
              aria-hidden="true"
            />

            {/* Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              className="fixed top-0 right-0 h-dvh w-[84%] max-w-sm bg-warm-white z-[70] lg:hidden flex flex-col shadow-2xl"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-charcoal/10">
                <Image src="/logo-onelife.jpg" alt="OneLife Logo" width={120} height={32} className="h-8 w-auto" />
                <button 
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 -mr-2 text-charcoal hover:text-onelife-red focus:outline-none focus-visible:ring-2 focus-visible:ring-onelife-red rounded transition-colors"
                  aria-label="Close navigation menu"
                >
                  <X className="w-5.5 h-5.5" />
                </button>
              </div>

              {/* Drawer Links */}
              <div className="flex-1 overflow-y-auto px-5 py-6 space-y-1 font-heading text-sm font-semibold">
                <Link 
                  href="/" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-2 py-3 text-onelife-red border-b border-charcoal/5"
                >
                  Home
                </Link>
                {NAV_LINKS.slice(0, 2).map(({ href, label }) => (
                  <Link 
                    key={href}
                    href={href} 
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-2 py-3 text-charcoal hover:text-onelife-red border-b border-charcoal/5 transition-colors"
                  >
                    {label}
                  </Link>
                ))}
                
                {/* Mobile Platforms — clickable accordion, same click-to-open pattern as desktop */}
                <div className="border-b border-charcoal/5">
                  <button
                    onClick={() => setMobilePlatformsOpen((open) => !open)}
                    aria-expanded={mobilePlatformsOpen}
                    className="w-full flex items-center justify-between px-2 py-3 text-charcoal"
                  >
                    <span className="text-[11px] text-slate-grey uppercase tracking-widest font-bold">
                      Platforms
                    </span>
                    <ChevronDown 
                      className={`w-4 h-4 text-slate-grey transition-transform duration-200 ${
                        mobilePlatformsOpen ? "rotate-180 text-onelife-red" : ""
                      }`} 
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {mobilePlatformsOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.22, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-2 pb-4 space-y-3">
                          {PLATFORMS.map(({ href, name, color, external }) => (
                            <a
                              key={href}
                              href={href}
                              target={external ? "_blank" : undefined}
                              rel={external ? "noopener noreferrer" : undefined}
                              onClick={() => setMobileMenuOpen(false)}
                              className="flex items-center justify-between gap-2 group"
                            >
                              <span className={`text-xs font-semibold ${color}`}>{name}</span>
                              {external && <ExternalLink className="w-3 h-3 text-slate-grey shrink-0" />}
                            </a>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {NAV_LINKS.slice(2).map(({ href, label }) => (
                  <Link 
                    key={href}
                    href={href} 
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-2 py-3 text-charcoal hover:text-onelife-red border-b border-charcoal/5 transition-colors"
                  >
                    {label}
                  </Link>
                ))}
              </div>

              {/* Drawer Footer CTA */}
              <div className="px-5 py-5 border-t border-charcoal/10">
                <Link 
                  href="#contact" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-center bg-onelife-red hover:bg-[#d1171e] text-white py-3.5 rounded uppercase tracking-wider text-xs font-semibold font-heading transition-colors"
                >
                  Contact Us
                </Link>
                <div className="flex items-center justify-center gap-2 mt-4 text-[11px] text-slate-grey">
                  <MapPin className="w-3 h-3 text-onelife-red" />
                  <span>Lusaka, Zambia</span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};