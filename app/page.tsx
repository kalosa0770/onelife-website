import { Hero } from "@/components/Hero";
import { WhoWeAre } from "@/components/WhoWeAre";
import { Capabilities } from "@/components/Capabilities";
import { TrackRecord } from "@/components/TrackRecord";
import { Platforms } from "@/components/Platforms";
import { Leadership } from "@/components/Leadership";
import { Contact } from "@/components/Contact";
import { getSingleton, getItems } from "@/lib/content/read";
import type {
  HeroContent,
  HeroFeatureCard,
  WhoWeAreHome,
  WhoWeAreValue,
  CapabilitiesHomeIntro,
  CapabilityHomeCard,
  TrackRecordStat,
  Platform,
  StaffMember,
  EyebrowHeading,
  SiteSettings,
} from "@/lib/content/read";

// Content is stored in Postgres, not the build — render every request so
// admin edits show up immediately instead of only after a redeploy.
export const dynamic = "force-dynamic";

export default async function HomePage() {
  const [
    hero,
    heroFeatureCards,
    whoWeAreHome,
    whoWeAreValues,
    capabilitiesHomeIntro,
    capabilitiesHomeCards,
    trackRecordStats,
    platforms,
    staff,
    leadershipHomeIntro,
    siteSettings,
  ] = await Promise.all([
    getSingleton<HeroContent>("hero", { headline: "" }),
    getItems<HeroFeatureCard>("hero-feature-cards", {
      icon: "Award",
      title: "",
      body: "",
      tag: "",
      variant: "light",
    }),
    getSingleton<WhoWeAreHome>("who-we-are-home", {
      eyebrow: "",
      heading: "",
      quote: "",
      paragraph: "",
    }),
    getItems<WhoWeAreValue>("who-we-are-home-values", { text: "" }),
    getSingleton<CapabilitiesHomeIntro>("capabilities-home-intro", {
      eyebrow: "",
      heading: "",
      description: "",
    }),
    getItems<CapabilityHomeCard>("capabilities-home", {
      title: "",
      subtitle: "",
      description: "",
      icon: "Compass",
      image: "",
      link: "",
    }),
    getItems<TrackRecordStat>("track-record-stats", {
      value: "",
      label: "",
      icon: "ShieldCheck",
    }),
    getItems<Platform>("platforms", {
      name: "",
      slug: "",
      category: "",
      badge: "",
      description: "",
      longDescription: "",
      icon: "Globe",
      image: "",
      accentColorHex: "#2B2B2D",
      externalHref: "",
      isExternal: "false",
      linkLabel: "",
    }),
    getItems<StaffMember>("staff", {
      name: "",
      role: "",
      bio: "",
      photoUrl: "",
      isFeatured: "false",
      highlights: [],
    }),
    getSingleton<EyebrowHeading>("leadership-home-intro", {
      eyebrow: "",
      heading: "",
    }),
    getSingleton<SiteSettings>("site-settings", {
      address: "",
      email: "",
      phone: "",
      linkedinUrl: "",
      xUrl: "",
      instagramUrl: "",
      footerBrandBlurb: "",
      copyrightText: "",
    }),
  ]);

  return (
    <main className="min-h-screen bg-warm-white text-charcoal overflow-hidden">
      <Hero headline={hero.headline} featureCards={heroFeatureCards} />
      <WhoWeAre content={whoWeAreHome} values={whoWeAreValues} phone={siteSettings.phone} />
      <Capabilities intro={capabilitiesHomeIntro} cards={capabilitiesHomeCards} />
      <TrackRecord stats={trackRecordStats} />
      <Platforms platforms={platforms} />
      <Leadership intro={leadershipHomeIntro} staff={staff} />
      <Contact siteSettings={siteSettings} />
    </main>
  );
}
