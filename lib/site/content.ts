// Typed shapes for the site's locally maintained content.

export interface SiteSettings {
  address: string;
  email: string;
  phone: string;
  linkedinUrl: string;
  xUrl: string;
  instagramUrl: string;
  footerBrandBlurb: string;
  copyrightText: string;
}

export interface HeroContent {
  headline: string;
  backgroundImage: string;
}

export interface TrackRecordHome {
  backgroundImage: string;
}

export interface EyebrowHeading {
  eyebrow: string;
  heading: string;
}

export interface EyebrowDescription {
  eyebrow: string;
  description: string;
  backgroundImage: string;
}

export interface WhoWeAreHome {
  eyebrow: string;
  heading: string;
  quote: string;
  paragraph: string;
  heroImage: string;
  secondaryImage: string;
}

export interface CapabilitiesHomeIntro {
  eyebrow: string;
  heading: string;
  description: string;
}

export interface HeadingOnly {
  heading: string;
}

export interface ImperfectPhilosophy {
  eyebrow: string;
  heading: string;
  paragraph1: string;
  paragraph2: string;
  quote: string;
}

export interface LeadershipAllianceIntro {
  eyebrow: string;
  heading: string;
  description: string;
}

export interface HighlightItem {
  icon: string;
  title: string;
  body: string;
}

export interface HeroFeatureCard {
  icon: string;
  title: string;
  body: string;
  tag: string;
  variant: "light" | "dark";
}

export interface WhoWeAreValue {
  text: string;
}

export interface CapabilityHomeCard {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  image: string;
  link: string;
}

export interface CapabilitySection {
  slug: string;
  badge: string;
  title: string;
  tagline: string;
  description: string;
  icon: string;
  image: string;
  proofPoint: string;
  deliverables: string[];
}

export interface TrackRecordStat {
  value: string;
  label: string;
  icon: string;
}

export interface TrackRecordMilestone {
  year: string;
  title: string;
  description: string;
}

export interface TrackRecordCaseStudy {
  category: string;
  title: string;
  challenge: string;
  solution: string;
  impact: string;
  image: string;
}

export interface StaffMember {
  name: string;
  role: string;
  bio: string;
  photoUrl: string;
  isFeatured: "true" | "false";
  highlights: HighlightItem[];
}

export interface CorridorHospital {
  name: string;
  city: string;
  country: string;
  specialities: string[];
  description: string;
  logo: string;
  website: string;
}

export interface CorridorInsurer {
  name: string;
  country: string;
  description: string;
  logo: string;
  website: string;
}

export interface MissionVisionCard {
  eyebrow: string;
  heading: string;
  description: string;
  image: string;
}

export interface CoreValue {
  title: string;
  description: string;
  icon: string;
}

export interface FourPhaseStep {
  step: string;
  name: string;
  detail: string;
}

export type WithId<T> = T & { id: string };
