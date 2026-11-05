import { LeadForm } from "@/components/forms/LeadForm";
import { Section, SectionHeading } from "@/components/site/ui";
import { ROSE } from "../data";

export function Register() {
  return (
    <>
      <Section id="register">
        <div className="grid gap-12 lg:grid-cols-2">
          <SectionHeading
            eyebrow="Register your interest"
            accent={ROSE}
            title="Be part of Money Out Loud."
            intro="Tickets aren’t on sale yet — ticketing opens from February 2027. Use the form to draft an email about the Book Club, SME Month, or ticket updates, then send it to reach the team."
          />
          <div className="self-start rounded-xl border border-charcoal/10 bg-white p-6 shadow-lg sm:p-8">
            <LeadForm formId="sws-register" accent={ROSE} />
          </div>
        </div>
      </Section>

      <Section id="partner" tone="surface">
        <div className="grid gap-12 lg:grid-cols-2">
          <SectionHeading
            eyebrow="Partner with us"
            accent={ROSE}
            title="Reach women who are ready to act on their money."
            intro="Partners get access to a clearly defined audience across five financial profiles, co-branded content, and outcomes we measure and share. Tell us how you’d like to get involved."
          />
          <div className="self-start rounded-xl border border-charcoal/10 bg-white p-6 shadow-lg sm:p-8">
            <LeadForm formId="sws-partner" accent={ROSE} />
          </div>
        </div>
      </Section>
    </>
  );
}
