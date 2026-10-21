import type { Metadata } from "next";
import Link from "next/link";
import { CalendarDays, MapPin } from "lucide-react";
import { ButtonLink, Card, Section, SectionHeading, Prose } from "@/components/site/ui";
import { ROSE, segments } from "./data";

export const metadata: Metadata = {
  title: "About the Smart Woman Summit | Money Out Loud | OneLife",
  description:
    "Smart Woman Summit — Zambia's most established women's financial literacy platform, founded and run by OneLife. 2027 edition: Money Out Loud.",
};

export default function SummitAboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-charcoal px-4 py-16 text-white sm:px-8 lg:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-sws-rose/35 via-charcoal to-charcoal" />
        <div className="relative mx-auto max-w-6xl">
          <span className="mb-4 block font-heading text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "#F06595" }}>
            Smart Woman Summit &rsquo;27
          </span>
          <h1 className="font-heading text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">Money Out Loud.</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl">
            Your money mindset. Your relationship with money.
          </p>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-2 text-sm font-medium text-white/90">
            <span className="flex items-center gap-2"><CalendarDays className="h-4 w-4" style={{ color: "#F06595" }} />Saturday, 13 March 2027</span>
            <span className="flex items-center gap-2"><MapPin className="h-4 w-4" style={{ color: "#F06595" }} />Lusaka</span>
          </div>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/events/smart-woman-summit/register">Register your interest</ButtonLink>
            <ButtonLink href="/events/smart-woman-summit/2027" variant="outline-light">2027 event details</ButtonLink>
          </div>
        </div>
      </section>

      <Section>
        <SectionHeading eyebrow="About the Summit" accent={ROSE} title="Zambia’s most established women’s financial literacy platform." />
        <Prose>
          <p>Smart Woman Summit is founded and run by OneLife, and 2027 is its 4th edition. Since 2023 it has brought women together to talk honestly about money — earning it, growing it, protecting it.</p>
          <p>SWS isn&rsquo;t just one day a year. It&rsquo;s a year-round platform, and the Summit is its flagship day. The Sip &amp; Read Book Club and SME Month are part of the same story — a road you can join right now.</p>
        </Prose>
        <div className="mt-10 grid max-w-md grid-cols-2 gap-4">
          <Card>
            <p className="font-heading text-4xl font-bold" style={{ color: ROSE }}>4th</p>
            <p className="mt-1 text-sm text-slate-grey">edition in 2027</p>
          </Card>
          <Card>
            <p className="font-heading text-4xl font-bold" style={{ color: ROSE }}>2023</p>
            <p className="mt-1 text-sm text-slate-grey">the year it began</p>
          </Card>
        </div>
      </Section>

      <Section tone="surface">
        <SectionHeading eyebrow="The 2027 theme" accent={ROSE} title="Money Out Loud." />
        <Prose>
          <p>Most of us learned about money in whispers. What we earn. What we owe. What we&rsquo;re afraid to ask. Those are the conversations women don&rsquo;t have out loud &mdash; and they shape every financial decision we make.</p>
          <p>In 2027 we&rsquo;re turning the volume up on your money mindset and your relationship with money: what you believe, what you were taught, and what you want it to look like from here.</p>
        </Prose>
      </Section>

      <Section>
        <SectionHeading eyebrow="Who it’s for" accent={ROSE} title="The five women of SWS." />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {segments.map((s) => (
            <Card key={s.name} accent={ROSE}>
              <h3 className="font-heading text-lg font-bold">{s.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-grey">{s.body}</p>
            </Card>
          ))}
        </div>
        <p className="mt-8 text-base font-medium">
          See yourself here?{" "}
          <Link href="/events/smart-woman-summit/register" className="underline underline-offset-4" style={{ color: ROSE }}>
            Register and tell us which one you are.
          </Link>
        </p>
      </Section>
    </>
  );
}
