import type { Metadata } from "next";
import Image from "next/image";
import { Building2, ShieldCheck, Plane, HeartPulse } from "lucide-react";
import { ButtonLink, Card, PageHero, Section, SectionHeading, TEAL, Checklist } from "@/components/site/ui";

export const metadata: Metadata = {
  title: "About the Health Corridor | OneLife Health Corridor",
  description:
    "OneLife serves as Corridor Manager for the Zambia–Zimbabwe medical tourism corridor, coordinating providers, insurers and institutions.",
};

const pillars = [
  { icon: Building2, title: "Institutional alignment", body: "Coordinating ministries, regulators and health operators on both sides of the border." },
  { icon: Plane, title: "Referral & travel facilitation", body: "Cross-border patient pathways and specialised healthcare referral support." },
  { icon: ShieldCheck, title: "Provider & insurer standards", body: "Service standardisation between healthcare providers and private insurers." },
  { icon: HeartPulse, title: "Patient trust", body: "Bespoke communications that build patient confidence and regulatory transparency." },
];

export default function HealthCorridorAboutPage() {
  return (
    <>
      <PageHero
        eyebrow="OneLife Health Corridor"
        accent={TEAL}
        title="Zambia–Zimbabwe medical tourism, managed end to end."
        intro="Serving as institutional Corridor Manager, OneLife coordinates bilateral stakeholder engagement, patient pathway protocols and service standardisation between healthcare providers and private insurers across Zambia and Zimbabwe."
        image="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1600&auto=format&fit=crop"
      >
        <ButtonLink href="/health-corridor/registered-hospitals">Registered hospitals</ButtonLink>
        <ButtonLink href="/health-corridor/contact" variant="outline-light">Get in touch</ButtonLink>
      </PageHero>

      <Section>
        <SectionHeading eyebrow="About the Corridor" accent={TEAL} title="What the Corridor Manager does" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map(({ icon: Icon, title, body }) => (
            <Card key={title}>
              <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg" style={{ backgroundColor: `${TEAL}15`, color: TEAL }}>
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="font-heading text-base font-bold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-grey">{body}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section tone="surface">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Who it serves" accent={TEAL} title="One corridor, every stakeholder" />
            <Checklist
              accent={TEAL}
              items={[
                "Hospitals and clinics that want to receive cross-border patients",
                "Health insurers extending cover across the corridor",
                "Government bodies and regulators aligning standards",
                "Patients and families seeking trusted specialist care",
              ]}
            />
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/health-corridor/partner-insurance">Partner health insurance</ButtonLink>
              <ButtonLink href="/health-corridor/contact" variant="outline">Join the corridor</ButtonLink>
            </div>
          </div>
          <div className="relative h-72 overflow-hidden rounded-2xl shadow-xl sm:h-96">
            <Image
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200&auto=format&fit=crop"
              alt="Healthcare professionals in a hospital corridor"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </Section>
    </>
  );
}
