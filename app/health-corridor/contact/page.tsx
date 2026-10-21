import type { Metadata } from "next";
import { PageHero, TEAL } from "@/components/site/ui";
import { ContactPanel } from "@/components/site/ContactPanel";
import { SITE_SETTINGS } from "@/lib/site/content-data";

export const metadata: Metadata = {
  title: "Contact the Health Corridor | OneLife Health Corridor",
  description: "Contact the OneLife Health Corridor team — hospitals, insurers, institutions and patients.",
};

export default function HealthCorridorContactPage() {
  return (
    <>
      <PageHero
        eyebrow="OneLife Health Corridor"
        accent={TEAL}
        title="Contact the Health Corridor team"
        intro="Hospitals, insurers, institutions and patients — tell us how we can help and the corridor team will respond."
      />
      <ContactPanel
        settings={SITE_SETTINGS}
        formId="health-corridor"
        accent={TEAL}
        eyebrow="Get in touch"
        title="Join or enquire about the corridor"
        intro="Register a hospital, propose an insurance partnership, or ask a question."
      />
    </>
  );
}
