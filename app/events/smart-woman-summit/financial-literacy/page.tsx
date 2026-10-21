import type { Metadata } from "next";
import { BookOpen, Briefcase, Mic } from "lucide-react";
import { ButtonLink, Card, PageHero, Section, SectionHeading, Prose } from "@/components/site/ui";
import { ROSE, road, segments } from "../data";

export const metadata: Metadata = {
  title: "Financial Literacy Platform | Smart Woman Summit | OneLife",
  description:
    "SWS is a year-round financial literacy platform for women in Zambia — the Sip & Read Book Club, SME Month, and the flagship Summit.",
};

const programmes = [
  { icon: BookOpen, name: "Sip & Read Book Club", body: "A monthly club for women who want to read, talk and learn about money together." },
  { icon: Briefcase, name: "SME Month", body: "Each January: partnership announcements and activations for women in business." },
  { icon: Mic, name: "The Summit", body: "The flagship day — honest conversations about earning, growing and protecting money." },
];

export default function FinancialLiteracyPage() {
  return (
    <>
      <PageHero
        eyebrow="Smart Woman Summit · Financial literacy platform"
        accent={ROSE}
        title="Financial literacy, all year round."
        intro="The Summit is the flagship day of a year-round platform that starts with the money conversations women don’t usually have out loud — and keeps going long after the day itself."
      >
        <ButtonLink href="/events/smart-woman-summit/register">Join the platform</ButtonLink>
      </PageHero>

      <Section>
        <SectionHeading eyebrow="How the platform works" accent={ROSE} title="Three ways to take part" />
        <div className="grid gap-5 md:grid-cols-3">
          {programmes.map(({ icon: Icon, name, body }) => (
            <Card key={name}>
              <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg" style={{ backgroundColor: `${ROSE}15`, color: ROSE }}>
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="font-heading text-lg font-bold">{name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-grey">{body}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section tone="surface">
        <SectionHeading eyebrow="Every stage of the money journey" accent={ROSE} title="Content built for five women" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {segments.map((s) => (
            <Card key={s.name} accent={ROSE}>
              <h3 className="font-heading text-lg font-bold">{s.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-grey">{s.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="The road to March" accent={ROSE} title="A journey you can join now." />
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

      <Section tone="dark">
        <SectionHeading
          light
          accent={ROSE}
          eyebrow="Partner with us"
          title="Reach women who are ready to act on their money."
        />
        <Prose>
          <p className="text-white/75">Partners get access to a clearly defined audience of women across five financial profiles, co-branded content that speaks to them directly, and outcomes we measure and share.</p>
        </Prose>
        <div className="mt-8"><ButtonLink href="/events/smart-woman-summit/register#partner">Partner enquiry</ButtonLink></div>
      </Section>
    </>
  );
}
