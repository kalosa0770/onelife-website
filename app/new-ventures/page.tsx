"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { 
  Rocket, 
  ArrowRight, 
  CheckCircle2, 
  Globe2
} from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function NewVenturesPage() {
  return (
    <div className="min-h-screen bg-warm-white text-charcoal flex flex-col justify-between">
      <main>
        {/* HERO SECTION */}
        <section className="relative pt-20 pb-20 px-4 sm:px-8 border-b border-charcoal/10 bg-warm-white overflow-hidden">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div variants={containerVariants} initial="hidden" animate="visible">
              <motion.span variants={itemVariants} className="text-xs font-heading font-semibold uppercase tracking-[0.2em] text-onelife-red block mb-3">
                Forward Motion &amp; Incubation
              </motion.span>
              <motion.p variants={itemVariants} className="text-base sm:text-lg text-slate-grey font-normal leading-relaxed max-w-3xl mx-auto">
                Beyond traditional advisory, OneLife acts as an incubator and corridor manager, initiating platforms that unlock cross-border trade, specialized services, and SME acceleration.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* VENTURE 01: CORRIDOR MANAGEMENT */}
        <section className="py-24 px-4 sm:px-8 bg-warm-white border-b border-charcoal/10">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5 relative h-80 sm:h-[440px] rounded-lg overflow-hidden shadow-xl border border-charcoal/10 bg-charcoal">
              <Image
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1000&auto=format&fit=crop"
                alt="Zambia Zimbabwe Medical Tourism Corridor"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-[10px] font-heading font-bold uppercase tracking-wider text-onelife-red block">
                  Cross-Border Initiative
                </span>
                <p className="text-[12px] font-semibold text-white">Zambia–Zimbabwe Medical Tourism &amp; Trade Corridor</p>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded bg-white border border-charcoal/10 flex items-center justify-center shadow-sm">
                  <Globe2 className="w-5 h-5 text-onelife-red" strokeWidth={2} />
                </div>
                <span className="text-[12px] font-heading font-semibold uppercase tracking-wider text-slate-grey">
                  Venture Track 01
                </span>
              </div>

              <h2 className="font-heading font-bold text-[14px] md:text-base text-charcoal tracking-tight">
                Corridor Manager: Zambia–Zimbabwe Medical Tourism
              </h2>

              <p className="text-[12px] md:text-[14px] text-slate-grey leading-relaxed">
                Serving in the institutional role of Corridor Manager, OneLife coordinates bilateral stakeholder engagement, patient pathway protocols, and service standardization between healthcare providers and private insurers across Zambia and Zimbabwe.
              </p>

              <div className="space-y-2.5 pt-2">
                <div className="flex items-start gap-2.5 text-xs sm:text-sm font-medium text-charcoal bg-white p-3 rounded border border-charcoal/5">
                  <CheckCircle2 className="w-4 h-4 text-onelife-red shrink-0 mt-0.5" />
                  <span>Institutional alignment between ministries, regulators, and health operators.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm font-medium text-charcoal bg-white p-3 rounded border border-charcoal/5">
                  <CheckCircle2 className="w-4 h-4 text-onelife-red shrink-0 mt-0.5" />
                  <span>Cross-border travel and specialized healthcare referral facilitation.</span>
                </div>
                <div className="flex items-start gap-2.5 text-[12px] sm:text-sm font-medium text-charcoal bg-white p-3 rounded border border-charcoal/5">
                  <CheckCircle2 className="w-4 h-4 text-onelife-red shrink-0 mt-0.5" />
                  <span>Bespoke communications to build patient trust and regulatory transparency.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* VENTURE 02: BRAND ACCELERATOR */}
        <section className="py-24 px-4 sm:px-8 bg-[#F4F4F0] border-b border-charcoal/10">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 space-y-6 order-2 lg:order-1">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded bg-white border border-charcoal/10 flex items-center justify-center shadow-sm">
                  <Rocket className="w-5 h-5 text-onelife-red" strokeWidth={2} />
                </div>
                <span className="text-[12px] font-heading font-semibold uppercase tracking-wider text-slate-grey">
                  Venture Track 02
                </span>
              </div>

              <h2 className="font-heading font-bold text-[14px] md:text-base text-charcoal tracking-tight">
                OneLife Brand Accelerator
              </h2>

              <p className="text-[12px] md:text-[14px] text-slate-grey leading-relaxed">
                Growth-stage SMEs frequently hit a ceiling due to fragmented, generic branding that cannot attract institutional buyers or regional capital. The OneLife Brand Accelerator provides high-potential African enterprises with agency-grade strategic positioning at accessible cohorts.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-4 bg-white rounded border border-charcoal/10">
                  <h4 className="font-heading font-bold text-[12px] md:text-[14px] text-charcoal mb-1">Deal-Readiness Audits</h4>
                  <p className="text-[12px] md:text-[14px] text-slate-grey">Aligning visual identity, product collateral, and value propositions for investor diligence.</p>
                </div>
                <div className="p-4 bg-white rounded border border-charcoal/10">
                  <h4 className="font-heading font-bold text-[12px] md:text-[14px] text-charcoal mb-1">Corridor Route-to-Market</h4>
                  <p className="text-[12px] md:text-[14px] text-slate-grey">Direct integration into the IMPEX trade tracks and regional buyer discovery.</p>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 bg-onelife-red hover:bg-[#d1171e] text-white font-heading font-semibold text-xs uppercase tracking-wider px-7 py-4 rounded transition-all"
                >
                  <span>Apply for Accelerator Cohort</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative h-80 sm:h-[440px] rounded-lg overflow-hidden shadow-xl border border-charcoal/10 bg-charcoal order-1 lg:order-2">
              <Image
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1000&auto=format&fit=crop"
                alt="OneLife Brand Accelerator Program"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}