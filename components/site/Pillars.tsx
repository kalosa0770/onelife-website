import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { NAV_SECTIONS } from "@/lib/site/nav";

const BLURBS: Record<string, string> = {
  onelife: "Who we are, what we do, our track record and the clients we serve.",
  events: "IMPEX and the SMART Woman Summit: corridors, financial literacy and registrations.",
  health: "Cross-border healthcare: registered hospitals, partner insurers and referrals.",
};

export function Pillars() {
  return (
    <section className="bg-surface px-4 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-10 text-center font-heading text-2xl font-bold tracking-tight text-charcoal sm:text-4xl">
          Explore OneLife
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {NAV_SECTIONS.map((s) => (
            <Link
              key={s.id}
              href={s.id === "onelife" ? "/who-we-are" : s.items[0].href}
              className="group flex flex-col rounded-2xl border-t-4 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              style={{ borderTopColor: s.accent }}
            >
              <h3 className="font-heading text-xl font-bold text-charcoal">{s.label}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-grey">{BLURBS[s.id]}</p>
              <span
                className="mt-6 inline-flex items-center gap-2 font-heading text-xs font-semibold uppercase tracking-wider"
                style={{ color: s.accent }}
              >
                Explore
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
