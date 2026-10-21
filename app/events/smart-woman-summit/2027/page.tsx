import type { Metadata } from "next";
import { CalendarDays, MapPin, MessageCircle, Mail } from "lucide-react";
import { ButtonLink, PageHero, Section, SectionHeading } from "@/components/site/ui";
import { SITE_SETTINGS } from "@/lib/site/content-data";
import { ROSE, faqs, road, whatsappNumber } from "../data";

export const metadata: Metadata = {
  title: "2027 Event Details | Smart Woman Summit | OneLife",
  description:
    "Smart Woman Summit '27 — Money Out Loud. Saturday, 13 March 2027, Lusaka. Dates, programme, speakers and FAQs.",
};

export default function Summit2027Page() {
  return (
    <>
      <PageHero
        eyebrow="Smart Woman Summit · 2027 event"
        accent={ROSE}
        title="Smart Woman Summit ’27: Money Out Loud."
        intro="Zambia’s most established women’s financial literacy platform returns for its 4th edition."
      >
        <ButtonLink href="/events/smart-woman-summit/register">Register your interest</ButtonLink>
      </PageHero>

      <Section>
        <div className="grid gap-5 sm:grid-cols-3">
          {[
            { icon: CalendarDays, label: "Date", value: "Saturday, 13 March 2027" },
            { icon: MapPin, label: "Location", value: "Lusaka — venue to be confirmed" },
            { icon: Mail, label: "Tickets", value: "Open from February 2027" },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="rounded-xl border border-charcoal/10 bg-white p-6 shadow-sm">
              <Icon className="h-6 w-6" style={{ color: ROSE }} />
              <p className="mt-4 font-heading text-[11px] font-semibold uppercase tracking-wider text-slate-grey">{label}</p>
              <p className="mt-1 font-heading text-lg font-bold">{value}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="surface">
        <SectionHeading eyebrow="Timeline" accent={ROSE} title="The road to 13 March" />
        <ol className="grid gap-8 md:grid-cols-4">
          {road.map((step) => (
            <li key={step.when} className="relative border-l-2 pl-6 md:border-l-0 md:border-t-2 md:pl-0 md:pt-6" style={{ borderColor: ROSE }}>
              <span className="absolute -left-[7px] top-1 h-3 w-3 rounded-full md:-top-[7px] md:left-0" style={{ backgroundColor: ROSE }} />
              <span className="font-heading text-[11px] font-semibold uppercase tracking-wider text-slate-grey">{step.when}</span>
              <h3 className="mt-1 font-heading text-base font-bold">{step.what}</h3>
              <p className="mt-1 text-sm leading-relaxed text-slate-grey">{step.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section>
        <SectionHeading eyebrow="Speakers & programme" accent={ROSE} title="Speakers announced from January 2027." />
        <p className="max-w-2xl text-base leading-relaxed text-slate-grey">
          Register your interest and you&rsquo;ll hear first when the programme and speakers are released.
        </p>
      </Section>

      <Section tone="surface">
        <div className="mx-auto max-w-3xl">
          <SectionHeading eyebrow="FAQ" accent={ROSE} title="Good questions." />
          <div className="divide-y divide-charcoal/15 border-y border-charcoal/15">
            {faqs.map((f) => (
              <details key={f.q} className="group py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading text-base font-semibold">
                  {f.q}
                  <span className="text-2xl leading-none transition-transform group-open:rotate-45" style={{ color: ROSE }}>+</span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-slate-grey">{f.a}</p>
              </details>
            ))}
          </div>
          <div className="mt-10 flex flex-col gap-3 text-sm sm:flex-row sm:items-center sm:gap-6">
            <span className="font-heading font-semibold">Questions? Talk to OneLife.</span>
            <a href={`mailto:${SITE_SETTINGS.email}`} className="inline-flex items-center gap-2 text-slate-grey hover:text-onelife-red">
              <Mail className="h-4 w-4" />{SITE_SETTINGS.email}
            </a>
            {whatsappNumber && (
              <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-slate-grey hover:text-onelife-red">
                <MessageCircle className="h-4 w-4" />Chat on WhatsApp
              </a>
            )}
          </div>
        </div>
      </Section>
    </>
  );
}
