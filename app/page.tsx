import { HeroInstitutional } from "@/components/HeroInstitutional";
import { WhoWeAre } from "@/components/WhoWeAre";
import { Capabilities } from "@/components/Capabilities";
import { Leadership } from "@/components/Leadership";
import { ContactPanel } from "@/components/site/ContactPanel";
import { Platforms } from "@/components/site/Platforms";
import { FeaturedCards } from "@/components/FeaturedCards";
import { TrackRecord } from "@/components/TrackRecord";
import { Partners } from "@/components/site/Partners";
import {
  HOME_CONTENT,
  INSTITUTIONAL_HERO_CONTENT,
  SITE_SETTINGS,
  TRACK_RECORD_CONTENT,
} from "@/lib/site/content-data";

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-warm-white text-charcoal">
      {/* Pinned hero: stays put while the content below scrolls over it */}
      <div className="sticky top-0 z-0">
        <HeroInstitutional {...INSTITUTIONAL_HERO_CONTENT} />
      </div>

      {/* Cover layer */}
      <div className="relative z-10 bg-warm-white shadow-[0_-24px_48px_-16px_rgba(0,0,0,0.3)]">
        <Partners />
        <WhoWeAre content={HOME_CONTENT.whoWeAre} />
        <Capabilities intro={HOME_CONTENT.capabilitiesIntro} cards={HOME_CONTENT.capabilityCards} />
        <Platforms />
        <FeaturedCards featureCards={HOME_CONTENT.featureCards} />
        {/* <TrackRecord content={TRACK_RECORD_CONTENT.intro} stats={TRACK_RECORD_CONTENT.stats} /> */}
        <Leadership intro={HOME_CONTENT.leadershipIntro} staff={HOME_CONTENT.staff} />
        <div id="contact" className="scroll-mt-32">
          <ContactPanel
            settings={SITE_SETTINGS}
            formId="contact"
            accent="#ED1C24"
            eyebrow="Contact"
            title="Let’s talk"
            intro="Use the form or contact us directly."
          />
        </div>
      </div>
    </main>
  );
}
