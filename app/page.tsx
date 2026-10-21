import { Hero } from "@/components/Hero";
import { WhoWeAre } from "@/components/WhoWeAre";
import { Capabilities } from "@/components/Capabilities";
import { Leadership } from "@/components/Leadership";
import { ContactPanel } from "@/components/site/ContactPanel";
import { Pillars } from "@/components/site/Pillars";
import { FeaturedCards } from "@/components/FeaturedCards";
import { HOME_CONTENT, SITE_SETTINGS } from "@/lib/site/content-data";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-warm-white text-charcoal overflow-hidden">
      <Hero
        headline={HOME_CONTENT.hero.headline}
        backgroundImage={HOME_CONTENT.hero.backgroundImage}
      />
      <FeaturedCards featureCards={HOME_CONTENT.featureCards} />
      <WhoWeAre content={HOME_CONTENT.whoWeAre} />
      <Capabilities intro={HOME_CONTENT.capabilitiesIntro} cards={HOME_CONTENT.capabilityCards} />
      <Pillars />
      <Leadership intro={HOME_CONTENT.leadershipIntro} staff={HOME_CONTENT.staff} />
      <ContactPanel
        settings={SITE_SETTINGS}
        formId="contact"
        accent="#ED1C24"
        eyebrow="Contact"
        title="Let’s talk"
        intro="Use the form or contact us directly."
      />
    </main>
  );
}
