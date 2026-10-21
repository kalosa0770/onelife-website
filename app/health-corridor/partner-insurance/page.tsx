import type { Metadata } from "next";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { ButtonLink, Card, EmptyState, PageHero, Section, TEAL } from "@/components/site/ui";
import { CORRIDOR_INSURERS } from "@/lib/site/content-data";

export const metadata: Metadata = {
  title: "Partner Health Insurance | OneLife Health Corridor",
  description: "Health insurers partnering with the OneLife Zambia–Zimbabwe Health Corridor.",
};

export default function PartnerInsurancePage() {
  return (
    <>
      <PageHero
        eyebrow="OneLife Health Corridor"
        accent={TEAL}
        title="Partner health insurance"
        intro="Insurers that recognise corridor hospitals and support smooth, transparent cross-border care for their members."
      >
        <ButtonLink href="/health-corridor/contact">Become an insurance partner</ButtonLink>
      </PageHero>

      <Section tone="surface">
        {CORRIDOR_INSURERS.length === 0 ? (
          <EmptyState
            title="Insurance partners will be announced soon"
            body="Partner insurers will be listed here as agreements are finalised. If you are an insurer interested in the corridor, get in touch."
          />
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CORRIDOR_INSURERS.map((i) => (
              <Card key={i.name} className="flex flex-col">
                {i.logo && (
                  <div className="relative mb-5 h-24 rounded-lg bg-surface">
                    <Image src={i.logo} alt={i.name} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-contain p-4" />
                  </div>
                )}
                <h3 className="font-heading text-lg font-bold">{i.name}</h3>
                {i.country && <p className="mt-1 text-sm text-slate-grey">{i.country}</p>}
                {i.description && <p className="mt-3 text-sm leading-relaxed text-slate-grey">{i.description}</p>}
                {i.website && (
                  <a
                    href={i.website}
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
