import React from "react";
import Link from "next/link";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="bg-background text-white pt-16 pb-8 px-4 sm:px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Image src="/logo-onelife.jpg" alt="OneLife Logo" width={120} height={32} className="h-8 w-auto" />
            <p className="text-xs text-[#A0A0A2] max-w-sm leading-relaxed">
              One strategic partner assembling brand, events, trade intelligence, and digital delivery. 14 years of regional execution across Zambia and SADC-COMESA.
            </p>
            <div className="pt-2 text-xs text-[#A0A0A2] space-y-1">
              <p className="text-charcoal font-semibold">Lusaka, Zambia</p>
              <p>Email: <a href="mailto:info@onelife.co.zm" className="hover:text-white transition-colors">info@onelife.co.zm</a></p>
            </div>
          </div>

          {/* Column: Owned Platforms */}
          <div>
            <ul className="space-y-2.5 text-xs text-[#A0A0A2]">
              <li>
                <a 
                  href="https://impex.onelife.co.zm" 
                  className="hover:text-[#2B2B2D] transition-colors inline-flex items-center gap-1"
                >
                  <span>IMPEX Corridor</span>
                  <ExternalLink className="w-3 h-3 text-slate-grey" />
                </a>
              </li>
              <li>
                <a 
                  href="https://smartwomansummit.co.zm" 
                  className="hover:text-[#2B2B2D] transition-colors inline-flex items-center gap-1"
                >
                  <span>Smart Woman Summit</span>
                  <ExternalLink className="w-3 h-3 text-slate-grey" />
                </a>
              </li>
              <li>
                <a 
                  href="https://mariamasiri.substack.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-[#2B2B2D] transition-colors inline-flex items-center gap-1"
                >
                  <span>Trade Intelligence (OTI)</span>
                  <ArrowUpRight className="w-3 h-3 text-oti-gold" />
                </a>
              </li>
              <li>
                <Link href="/new-ventures" className="hover:text-[#2B2B2D] transition-colors">
                  Brand Accelerator
                </Link>
              </li>
            </ul>
          </div>

          {/* Column: Core Capabilities */}
          <div>
            <ul className="space-y-2.5 text-xs text-[#A0A0A2]">
              <li>
                <Link href="/capabilities#communications" className="hover:text-[#2B2B2D] transition-colors">
                  Strategic Communications
                </Link>
              </li>
              <li>
                <Link href="/capabilities#events" className="hover:text-[#2B2B2D] transition-colors">
                  Events &amp; Summits
                </Link>
              </li>
              <li>
                <Link href="/capabilities#trade" className="hover:text-[#2B2B2D] transition-colors">
                  Trade Intelligence
                </Link>
              </li>
              <li>
                <Link href="/capabilities#digital" className="hover:text-[#2B2B2D] transition-colors">
                  Digital Strategy
                </Link>
              </li>
            </ul>
          </div>

          {/* Column: Governance & Social */}
          <div>
            
            <ul className="space-y-2.5 text-xs text-[#A0A0A2] mb-6">
              <li>
                <Link href="/who-we-are" className="hover:text-[#2B2B2D] transition-colors">
                  Who We Are
                </Link>
              </li>
              <li>
                <Link href="/track-record" className="hover:text-[#2B2B2D] transition-colors">
                  Track Record
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-[#2B2B2D] transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>

            {/* Inline Social SVGs */}
            <div className="flex items-center gap-3 text-[#A0A0A2]">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-[#2B2B2D] transition-colors" 
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a 
                href="https://x.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-[#2B2B2D] transition-colors" 
                aria-label="X (Twitter)"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-[#2B2B2D] transition-colors" 
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Brand Philosophy */}
        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-[#7A7A7C] gap-3">
          <p>&copy; 2026 OneLife Communications &amp; Events Company. All rights reserved.</p>
          <div className="flex items-center gap-2 italic">
            <span>Not a perfect circle.</span>
          </div>
        </div>

      </div>
    </footer>
  );
};