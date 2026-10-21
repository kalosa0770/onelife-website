import type { Metadata } from "next";
import { ButtonLink, Card, Section, SectionHeading, Prose } from "@/components/site/ui";
import { CorridorMap } from "./CorridorMap";
import { GREEN, AMBER, activities, facts, pipeline, delegates, partnerTracks, otiLink } from "./data";
import { Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "About IMPEX 2027 | Trade Intelligence to Deal Room | OneLife",
  description:
    "IMPEX 2027 is a practitioner deal-making summit in Lusaka, Zambia — where OTI's trade intelligence becomes a deal room across six SADC-COMESA corridors.",
};

export default function ImpexAboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-charcoal px-4 py-16 text-white sm:px-8 lg:py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-impex-green/50 via-charcoal to-charcoal" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="mb-4 block font-heading text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: AMBER }}>
              IMPEX 2027 · Lusaka, Zambia
            </span>
            <h1 className="font-heading text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl">
              Africa doesn&rsquo;t have a business problem. Africa has a connection problem.
            </h1>
            <p className="mt-6 text-base leading-relaxed text-white/80 md:text-lg">
              Every week, OTI documents the deals that don&rsquo;t get made, the corridors that go quiet, and the capital that circles without landing. IMPEX 2027 is where that ledger becomes a deal room &mdash; across six corridors in the SADC-COMESA region.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/65 md:text-base">
              IMPEX (Intra-African Trade &amp; Manufacturers&rsquo; Exchange) is the live-event end of a year-round pipeline: OTI identifies and tracks the projects, IMPEX convenes the capital, the policy support, and the implementers around them.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/events/impex/register">Register as a Founding Delegate</ButtonLink>
              <ButtonLink href="/events/impex/corridors" variant="outline-light">Explore the corridors</ButtonLink>
            </div>
          </div>
          <CorridorMap />
        </div>
      </section>

      <Section>
        <SectionHeading
          eyebrow="About IMPEX"
          accent={GREEN}
          title="The Room Where Deals Get Done"
          intro="IMPEX 2027 is not a conference. There are no panels for the sake of panels, and no networking sessions where nothing gets exchanged except business cards. Transactions are the agenda, not the afterthought."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {activities.map((a) => (
            <Card key={a.title} accent={GREEN}>
              <h3 className="font-heading text-lg font-bold">{a.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-grey">{a.body}</p>
            </Card>
          ))}
        </div>
        <dl className="mt-12 grid gap-x-10 border-t border-charcoal/15 sm:grid-cols-2">
          {facts.map(([k, v]) => (
            <div key={k} className="flex gap-4 border-b border-charcoal/15 py-3.5">
              <dt className="w-32 shrink-0 pt-0.5 font-heading text-[11px] font-semibold uppercase tracking-wider text-slate-grey">{k}</dt>
              <dd className="text-sm font-medium">{v}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section tone="surface">
        <SectionHeading eyebrow="Why Lusaka? Why now?" accent={GREEN} title="The Corridor Is Moving. The Question Is Whether You’re In It." />
        <Prose>
          <p>The SADC-COMESA region represents over 600 million consumers, a manufacturing base actively restructuring, and a trade policy environment shaped by the AfCFTA that is &mdash; finally &mdash; moving from aspiration to implementation.</p>
          <p>Lusaka sits at the geographic and logistical heart of this corridor. It connects east to Dar es Salaam and Mombasa, south to Harare and Johannesburg, north to the DRC and Lubumbashi. It is not a destination. It is a junction.</p>
          <p className="font-semibold text-foreground">OTI has been running the pipeline below in public since May 2026. IMPEX is where it convenes.</p>
        </Prose>
        <ol className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-6">
          {pipeline.map((step, i) => (
            <li key={step} className="rounded-xl p-4 text-white" style={{ backgroundColor: GREEN }}>
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold text-foreground" style={{ backgroundColor: AMBER }}>
                {i + 1}
              </span>
              <p className="mt-3 font-heading text-sm font-semibold">{step}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section>
        <SectionHeading eyebrow="Who is IMPEX for?" accent={GREEN} title="Built for the People Who Build Things" />
        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="flex flex-col sm:p-8">
            <h3 className="font-heading text-xl font-bold" style={{ color: GREEN }}>Founding Delegates</h3>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-grey">
              {delegates.map((d) => <li key={d}>{d}</li>)}
            </ul>
            <p className="mt-4 text-sm leading-relaxed text-slate-grey">Founding Delegate status is limited. Early registrants access pre-summit Deal Room preparation, OTI intelligence briefings, and priority corridor matching.</p>
            <div className="mt-auto pt-6"><ButtonLink href="/events/impex/register">Secure your place</ButtonLink></div>
          </Card>
          <Card className="flex flex-col sm:p-8">
            <h3 className="font-heading text-xl font-bold" style={{ color: GREEN }}>Sponsors &amp; Strategic Partners</h3>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-grey">
              {partnerTracks.map(([name, desc]) => (
                <li key={name}><strong className="text-foreground">{name}</strong> &mdash; {desc}</li>
              ))}
            </ul>
            <div className="mt-auto pt-6"><ButtonLink href="/events/impex/register#partner" variant="outline">Enquire about partnership</ButtonLink></div>
          </Card>
        </div>
      </Section>

      <Section tone="surface">
        <div className="flex flex-col gap-6 text-sm text-slate-grey md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl space-y-2 leading-relaxed">
            <p>IMPEX 2027 is organised by Onelife Communications &amp; Events Company, Lusaka, Zambia. A Onelife Events production. OTI is an editorial brand of Onelife Communications.</p>
          </div>
          <div className="flex flex-col gap-2 font-medium sm:flex-row sm:gap-6">
            <a href={otiLink("about-footer")} target="_blank" rel="noopener noreferrer" className="hover:text-onelife-red">Subscribe to OTI</a>
            <a href="mailto:info@onelife.co.zm" className="inline-flex items-center gap-1.5 hover:text-onelife-red">
              <Mail className="h-4 w-4" />info@onelife.co.zm
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
