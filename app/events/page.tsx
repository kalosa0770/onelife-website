import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CalendarDays, MapPin } from "lucide-react";
import { PageHero, Section, GREEN, ROSE } from "@/components/site/ui";

export const metadata: Metadata = {
  title: "OneLife Events | IMPEX & Smart Woman Summit",
  description: "OneLife Events produces IMPEX, a trade deal-making summit, and the Smart Woman Summit, a women's financial literacy platform.",
};

const events = [
  {
    href: "/events/impex",
    name: "IMPEX 2027",
    tag: "Trade intelligence to deal room",
    body: "A practitioner deal-making summit connecting capital, policy support and implementers across six SADC-COMESA corridors.",
    meta: [["Lusaka, Zambia", MapPin], ["2027 — dates to be announced", CalendarDays]] as const,
    accent: GREEN,
    pages: ["About IMPEX", "Corridors tracked", "The Ledger", "OTI", "Registrations"],
  },
  {
    href: "/events/smart-woman-summit",
    name: "Smart Woman Summit ’27",
    tag: "Money Out Loud",
    body: "Zambia’s most established women’s financial literacy platform — a year-round community with a flagship summit day.",
    meta: [["Lusaka, Zambia", MapPin], ["Saturday, 13 March 2027", CalendarDays]] as const,
    accent: ROSE,
    pages: ["About the Summit", "Financial literacy", "2027 event", "Registrations"],
  },
];

export default function EventsPage() {
  return (
    <>
      <PageHero
        eyebrow="OneLife Events"
        title="Two platforms. One standard of execution."
        intro="OneLife Events produces the flagship convenings that move business and money conversations from talk to action."
      />
      <Section tone="surface">
        <div className="grid gap-8 lg:grid-cols-2">
          {events.map((e) => (
            <Link
              key={e.href}
              href={e.href}
              className="group flex flex-col overflow-hidden rounded-2xl border border-charcoal/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="h-2" style={{ backgroundColor: e.accent }} />
              <div className="flex flex-1 flex-col p-7 sm:p-9">
                <span className="font-heading text-xs font-semibold uppercase tracking-[0.18em]" style={{ color: e.accent }}>
                  {e.tag}
                </span>
                <h2 className="mt-3 font-heading text-2xl font-bold sm:text-3xl">{e.name}</h2>
                <p className="mt-4 text-base leading-relaxed text-slate-grey">{e.body}</p>
                <ul className="mt-5 space-y-1.5 text-sm text-slate-grey">
                  {e.meta.map(([text, Icon]) => (
                    <li key={text} className="flex items-center gap-2">
                      <Icon className="h-4 w-4" style={{ color: e.accent }} />
                      {text}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-2">
                  {e.pages.map((p) => (
                    <span key={p} className="rounded-full bg-surface px-3 py-1 text-xs font-medium text-slate-grey">{p}</span>
                  ))}
                </div>
                <span className="mt-8 inline-flex items-center gap-2 font-heading text-xs font-semibold uppercase tracking-wider text-onelife-red">
                  Explore {e.name.split(" ")[0]}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
