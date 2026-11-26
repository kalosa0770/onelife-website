"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ContentIcon } from "@/components/ContentIcon";
import type { StaffMember, WithId, EyebrowHeading } from "@/lib/site/content";

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
};

const listVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

interface LeadershipProps {
  intro: EyebrowHeading;
  staff: WithId<StaffMember>[];
}

export const Leadership = ({ intro, staff }: LeadershipProps) => {
  const featured = staff.find((s) => s.isFeatured === "true") ?? staff[0];
  const others = staff.filter((s) => s.id !== featured?.id);

  if (!featured) return null;

  const firstName = featured.name.split(" ")[0];

  return (
    <section
      id="leadership"
      aria-labelledby="leadership-heading"
      className="relative scroll-mt-32 overflow-hidden bg-[#0B0B0C] px-4 py-20 text-white sm:px-8 md:py-28"
    >
      {/* Soft red glow for depth */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-1/3 h-[32rem] w-[32rem] rounded-full bg-onelife-red/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Intro */}
        <motion.div
          className="mb-12 flex flex-col gap-4 border-b border-white/10 pb-10 sm:mb-16 lg:flex-row lg:items-end lg:justify-between"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
        >
          <div className="max-w-2xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-10 bg-onelife-red" />
              <span className="text-xs font-heading font-semibold uppercase tracking-[0.2em] text-onelife-red">
                {intro.eyebrow}
              </span>
            </div>
            <h2
              id="leadership-heading"
              className="font-heading text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl md:text-4xl"
            >
              {intro.heading}
            </h2>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Portrait (right on desktop, first on mobile) */}
          <motion.figure
            className="relative mx-auto w-full max-w-md lg:order-2 lg:col-span-5 lg:mx-0 lg:max-w-none"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
          >
            {/* Offset outline frame */}
            <span
              aria-hidden="true"
              className="absolute inset-0 translate-x-3 translate-y-3 border border-onelife-red sm:translate-x-5 sm:translate-y-5"
            />

            <div className="relative aspect-[4/5] overflow-hidden bg-white/5">
              {featured.photoUrl && (
                <Image
                  src={featured.photoUrl}
                  alt={`${featured.name}, ${featured.role}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-top"
                />
              )}
            </div>

            {/* Proof badge */}
            <div className="absolute -left-3 bottom-8 bg-onelife-red px-5 py-4 text-white shadow-2xl shadow-black/50 sm:-left-6">
              <span className="block font-heading text-3xl font-bold leading-none">14+</span>
              <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.16em] text-white/85">
                Years leading OneLife
              </span>
            </div>

            <figcaption className="mt-8 text-xs text-white/50 sm:mt-10">
              {featured.name} · Lusaka, Zambia
            </figcaption>
          </motion.figure>

          {/* Profile */}
          <motion.div
            className="lg:order-1 lg:col-span-7"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={listVariants}
          >
            <motion.div variants={fadeUp} className="mb-10">
              <h3 className="font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl">
                {featured.name}
              </h3>
              <p className="mt-3 text-xs font-heading font-semibold uppercase tracking-[0.18em] text-onelife-red">
                {featured.role}
              </p>
              {featured.bio && (
                <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/65 sm:text-base">
                  {featured.bio}
                </p>
              )}
            </motion.div>

            {/* Roles */}
            <ol className="border-t border-white/10">
              {featured.highlights.map((item, index) => (
                <motion.li
                  key={item.title}
                  variants={fadeUp}
                  className="group grid grid-cols-[auto_1fr] gap-x-5 gap-y-2 border-b border-white/10 py-6 sm:grid-cols-[3rem_auto_1fr] sm:gap-x-6"
                >
                  <span className="hidden pt-1 font-heading text-xs tracking-widest text-white/35 sm:block">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 transition-colors group-hover:border-onelife-red group-hover:bg-onelife-red">
                    <ContentIcon
                      name={item.icon}
                      className="h-5 w-5 text-onelife-red transition-colors group-hover:text-white"
                      strokeWidth={2}
                    />
                  </span>
                  <div>
                    <h4 className="font-heading text-base font-semibold text-white sm:text-lg">
                      {item.title}
                    </h4>
                    <p className="mt-1.5 text-sm leading-relaxed text-white/60">{item.body}</p>
                  </div>
                </motion.li>
              ))}
            </ol>

            {/* Additional team members */}
            {others.length > 0 && (
              <motion.div variants={fadeUp} className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {others.map((member) => (
                  <div key={member.id} className="flex items-center gap-3 border border-white/10 bg-white/5 p-3">
                    {member.photoUrl && (
                      <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full">
                        <Image src={member.photoUrl} alt={member.name} fill sizes="44px" className="object-cover" />
                      </div>
                    )}
                    <div>
                      <p className="font-heading text-sm font-semibold text-white">{member.name}</p>
                      <p className="text-xs text-white/55">{member.role}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {/* CTAs */}
            <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-6">
              <Link
                href="#contact"
                className="group inline-flex min-h-12 items-center gap-2 bg-onelife-red px-6 py-3 font-heading text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:bg-[#C81920]"
              >
                Work with {firstName}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/who-we-are#leadership"
                className="font-heading text-xs font-semibold uppercase tracking-wider text-white underline decoration-onelife-red decoration-2 underline-offset-8 transition-colors hover:text-onelife-red"
              >
                Our delivery model
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};