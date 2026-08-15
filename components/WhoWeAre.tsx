"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { Phone, ArrowRight, CheckCircle2 } from "lucide-react";

const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.1 },
  },
};

export const WhoWeAre = () => {
  return (
    <section 
      id="who-we-are" 
      className="pt-24 md:pt-42 md:mt-24 mt-12 pb-24 px-4 sm:px-8 bg-warm-white relative z-10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* 1. LEFT COLUMN: IMAGE MOSAIC (Wix Reference Layout) */}
        <motion.div 
          className="lg:col-span-6 grid grid-cols-12 gap-4 items-end"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInLeft}
        >
          {/* Main Hero Photo: Conference / Summit Stage */}
          <div className="col-span-8 relative h-72 sm:h-[400px] rounded-lg overflow-hidden shadow-xl border border-charcoal/10">
            <Image
              src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1000&auto=format&fit=crop"
              alt="OneLife Strategic Summit Production and Panel"
              fill
              sizes="(max-width: 768px) 66vw, 33vw"
              className="object-cover hover:scale-105 transition-transform duration-500"
              priority
            />
          </div>

          {/* Secondary Stacked Photo: Event Detail / VIP Catering / Interaction */}
          <div className="col-span-4 relative h-52 sm:h-72 rounded-lg overflow-hidden shadow-lg border border-charcoal/10">
            <Image
              src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800&auto=format&fit=crop"
              alt="OneLife Strategic Event Execution Detail"
              fill
              sizes="(max-width: 768px) 33vw, 16vw"
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </motion.div>

        {/* 2. RIGHT COLUMN: COPY & POSITIONING */}
        <motion.div 
          className="lg:col-span-6 space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInRight}
        >
          <div>
            <span className="text-xs font-heading font-semibold uppercase tracking-[0.2em] text-onelife-red block mb-2">
              Who We Are
            </span>
            <h2 className="font-heading font-bold text-xl md:text-2xl text-charcoal tracking-tight leading-tight">
              We are a strategic partner that is always there for your needs.
            </h2>
          </div>

          {/* Highlighted Mission / Quote Box with OneLife Red Border Accent */}
          <div className="bg-[#F2F2EE] border-l-4 border-onelife-red p-4 sm:p-5 rounded-r">
            <p className="text-[12px] md:text-[14px] font-medium italic text-charcoal leading-relaxed">
              &ldquo;We exist to spread bold ideas that transform how African businesses do marketing — and to connect them to the intelligence, platforms and partnerships that help them grow.&rdquo;
            </p>
          </div>

          {/* Narrative / Track Record */}
          <p className="text-[12px] md:text-[14px] text-slate-grey leading-relaxed">
            For 14 years across Zambia and the SADC-COMESA corridor, OneLife has eliminated vendor fragmentation. We think strategically first, then assemble the exact team needed — brand, flagship summits, trade intelligence, and high-velocity digital delivery.
          </p>

          {/* Key Value Points */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div className="flex items-center gap-2 text-[12px] md:text-[14px] font-heading font-semibold text-charcoal">
              <CheckCircle2 className="w-4 h-4 text-onelife-red shrink-0" />
              <span>Plug-and-Play Assembly</span>
            </div>
            <div className="flex items-center gap-2 text-[12px] md:text-[14px] font-heading font-semibold text-charcoal">
              <CheckCircle2 className="w-4 h-4 text-onelife-red shrink-0" />
              <span>14-Year Proven Track Record</span>
            </div>
            <div className="flex items-center gap-2 text-[12px] md:text-[14px] font-heading font-semibold text-charcoal">
              <CheckCircle2 className="w-4 h-4 text-onelife-red shrink-0" />
              <span>Proprietary Owned Platforms</span>
            </div>
            <div className="flex items-center gap-2 text-[12px] md:text-[14px] font-heading font-semibold text-charcoal">
              <CheckCircle2 className="w-4 h-4 text-onelife-red shrink-0" />
              <span>Pan-African &amp; Corridor Fluent</span>
            </div>
          </div>

          {/* Action Row: Primary Button & Phone Call Out Badge */}
          <div className="pt-4 flex flex-wrap items-center gap-6">
            <Link 
              href="/who-we-are" 
              className="bg-onelife-red hover:bg-[#d1171e] text-white font-heading font-semibold text-xs uppercase tracking-wider px-7 py-4 rounded shadow-sm hover:shadow transition-all flex items-center gap-2 group"
            >
              <span>More About Us</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            {/* Direct Line Badge (matching reference template) */}
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-white border border-charcoal/10 flex items-center justify-center shadow-sm">
                <Phone className="w-4 h-4 text-onelife-red" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-slate-grey block">
                  Direct Inquiries
                </span>
                <a 
                  href="tel:+260211000000" 
                  className="text-xs font-heading font-bold text-charcoal hover:text-onelife-red transition-colors"
                >
                  +260 961 888 009
                </a>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};