"use client";

import React from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { Users, Handshake, Globe2, ShieldCheck } from "lucide-react";

interface StatItem {
  id: string;
  value: string;
  label: string;
  icon: React.ElementType;
}

const stats: StatItem[] = [
  {
    id: "years",
    value: "14+",
    label: "Years Proven Delivery",
    icon: ShieldCheck,
  },
  {
    id: "brands",
    value: "50+",
    label: "Partner Brands & Clients",
    icon: Handshake,
  },
  {
    id: "platforms",
    value: "3",
    label: "Owned Regional Platforms",
    icon: Globe2,
  },
  {
    id: "audience",
    value: "100%",
    label: "Accountable Delivery",
    icon: Users,
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

export const TrackRecord = () => {
  return (
    <section 
      id="track-record" 
      className="relative w-full py-20 bg-charcoal text-warm-white overflow-hidden"
    >
      {/* 1. Dark Event / Lighting Background Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2000&auto=format&fit=crop"
          alt="OneLife Event Production Atmosphere"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/70 to-transparent pointer-events-none" />
      </div>

      {/* Subtle Background Imperfect Ring Watermark */}
      <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none opacity-[0.03] select-none">
        <svg viewBox="0 0 100 100" fill="none" stroke="#FAFAF8" strokeWidth="1.5">
          <path d="M 50,50 m -40,0 a 40,38 0 1,0 80,0 a 40,38 0 1,0 -80,0" strokeDasharray="240 10" />
        </svg>
      </div>

      {/* 2. Counter Stats Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 items-center text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            const isFirstInMobileRow = index % 2 === 0;
            return (
              <motion.div 
                key={stat.id}
                variants={itemVariants}
                className={`relative flex flex-col items-center group px-6 py-6 md:py-0 ${
                  !isFirstInMobileRow ? "border-l border-white/10" : ""
                } ${index >= 2 ? "border-t border-white/10 md:border-t-0" : ""} ${
                  index > 0 ? "md:border-l md:border-white/10" : ""
                }`}
              >
                {/* Circular Icon Badge (matches Capabilities section treatment) */}
                <div className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center mb-4 transition-colors duration-300 group-hover:bg-onelife-red group-hover:border-onelife-red">
                  <IconComponent className="w-5 h-5 text-onelife-red group-hover:text-warm-white transition-colors duration-300" strokeWidth={2} />
                </div>

                {/* Bold Stat Value */}
                <h3 className="font-heading font-bold text-xl md:text-2xl text-warm-white tracking-tight mb-1">
                  {stat.value}
                </h3>

                {/* Stat Label */}
                <p className="text-[12px] md:text-[14px] font-body font-medium text-white tracking-wide">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};