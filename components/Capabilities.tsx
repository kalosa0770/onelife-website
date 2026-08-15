"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { 
  Compass, 
  Calendar, 
  TrendingUp, 
  Layers, 
  ArrowRight 
} from "lucide-react";

interface CapabilityItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
  image: string;
  link: string;
}

const capabilities: CapabilityItem[] = [
  {
    id: "communications",
    title: "Strategic Communications",
    subtitle: "Brand & Public Affairs",
    description:
      "Market positioning, stakeholder alignment, reputation management, and multi-channel campaign architectures tailored for local and regional African contexts.",
    icon: Compass,
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800&auto=format&fit=crop",
    link: "/capabilities#communications",
  },
  {
    id: "events",
    title: "Flagship Summits & Events",
    subtitle: "End-to-End Production",
    description:
      "Full-scale production of national-level dialogues, trade exhibitions, and proprietary summits with zero vendor fragmentation and single-point accountability.",
    icon: Calendar,
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop",
    link: "/capabilities#events",
  },
  {
    id: "trade",
    title: "Trade Intelligence",
    subtitle: "Corridor & Deal Advisory",
    description:
      "Proprietary corridor data, SME deal-readiness frameworks, and market link facilitation across Southern and Eastern African trade routes.",
    icon: TrendingUp,
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
    link: "/capabilities#trade",
  },
  {
    id: "digital",
    title: "Media & Digital Production",
    subtitle: "Creative Execution",
    description:
      "Delivered in partnership with Mélange Digital: high-velocity content creation, corporate performance marketing, and multimedia publishing.",
    icon: Layers,
    image:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800&auto=format&fit=crop",
    link: "/capabilities#digital",
  },
];

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

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export const Capabilities = () => {
  return (
    <section 
      id="capabilities" 
      className="py-12 bg-[#F4F4F0] border-y border-charcoal/10 px-4 sm:px-8 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-5xl mx-auto mb-16">
          <span className="text-xs font-heading font-semibold uppercase tracking-[0.2em] text-onelife-red block mb-2">
            What We Offer
          </span>
          <h2 className="font-heading font-bold text-xl md:text-2xl text-charcoal tracking-tight mb-4">
            Integrated Capabilities &amp; Execution
          </h2>
          <p className="text-[12px] sm:text-base text-slate-grey leading-relaxed">
            Every practice area is built to operate either independently or seamlessly orchestrated together under a single accountable partner.
          </p>
        </div>

        {/* 4 Cards Grid (Matching Reference Template) */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {capabilities.map((item) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.id}
                variants={cardVariants}
                className="group relative h-96 rounded-lg overflow-hidden shadow-md border border-charcoal/10 flex flex-col justify-end p-6 bg-charcoal"
              >
                {/* Background Image with Zoom on Hover */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent pointer-events-none" />

                {/* Foreground Content */}
                <div className="relative z-10 text-warm-white flex flex-col justify-end h-full">
                  {/* Circular Line Icon Badge */}
                  <div className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center mb-4 transition-colors group-hover:bg-onelife-red group-hover:border-onelife-red">
                    <IconComponent className="w-5 h-5 text-warm-white" strokeWidth={2} />
                  </div>

                  <span className="text-[10px] font-heading font-semibold uppercase tracking-wider text-white/70 block mb-1">
                    {item.subtitle}
                  </span>

                  <h3 className="font-heading font-bold text-lg sm:text-xl text-warm-white mb-2 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-white leading-relaxed line-clamp-3 mb-4">
                    {item.description}
                  </p>

                  <Link
                    href={item.link}
                    className="inline-flex items-center gap-1.5 text-xs font-heading font-semibold uppercase tracking-wider text-onelife-red hover:text-white transition-colors group-hover:translate-x-0.5 duration-200"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* View All Capabilities CTA */}
        <div className="mt-14 text-center">
          <Link
            href="/capabilities"
            className="inline-flex items-center justify-center gap-2 bg-charcoal hover:bg-black text-warm-white font-heading font-semibold text-xs uppercase tracking-wider px-8 py-4 rounded shadow transition-all duration-200"
          >
            <span>Explore All Capabilities</span>
            <ArrowRight className="w-4 h-4 text-onelife-red" />
          </Link>
        </div>

      </div>
    </section>
  );
};