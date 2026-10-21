import type { Metadata } from "next";
import Image from "next/image";
import { MapPin, ExternalLink } from "lucide-react";
import { ButtonLink, Card, EmptyState, PageHero, Section, TEAL } from "@/components/site/ui";
import { CORRIDOR_HOSPITALS } from "@/lib/site/content-data";

export const metadata: Metadata = {
  title: "Registered Hospitals | OneLife Health Corridor",
  description: "Hospitals and clinics registered on the OneLife Zambia–Zimbabwe Health Corridor.",
};

export default function RegisteredHospitalsPage() {
  return (
    <>
      <PageHero
        eyebrow="OneLife Health Corridor"
        accent={TEAL}
        title="Registered hospitals"
        intro="Hospitals and clinics that have been onboarded to the corridor and meet its service and referral standards."
      >
        <ButtonLink href="/health-corridor/contact">Register your hospital</ButtonLink>
      </PageHero>

      <Section tone="surface">
        {CORRIDOR_HOSPITALS.length === 0 ? (
          <EmptyState
            title="Hospital onboarding is under way"
            body="Registered hospitals will be listed here as they are confirmed. If you run a hospital or clinic and would like to join the corridor, get in touch."
          />
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CORRIDOR_HOSPITALS.map((h) => (
              <Card key={h.name} className="flex flex-col">
                {h.logo && (
                  <div className="relative mb-5 h-36 overflow-hidden rounded-lg bg-surface">
                    <Image src={h.logo} alt={h.name} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" />
                  </div>
                )}
                <h3 className="font-heading text-lg font-bold">{h.name}</h3>
                {(h.city || h.country) && (
                  <p className="mt-1 flex items-center gap-1.5 text-sm text-slate-grey">
                    <MapPin className="h-4 w-4" style={{ color: TEAL }} />
                    {[h.city, h.country].filter(Boolean).join(", ")}
                  </p>
                )}
                {h.description && <p className="mt-3 text-sm leading-relaxed text-slate-grey">{h.description}</p>}
                {h.specialities.length > 0 && (
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {h.specialities.map((s) => (
                      <li key={s} className="rounded-full bg-surface px-3 py-1 text-xs font-medium text-slate-grey">{s}</li>
                    ))}
                  </ul>
                )}
                {h.website && (
                  <a
                    href={h.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold hover:underline"
                    style={{ color: TEAL }}
                  >
                    Visit website <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
              </Card>
            ))}
          </div>
        )}
      </Section>
    </>
  );
}
