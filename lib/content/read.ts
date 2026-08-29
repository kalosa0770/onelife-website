import "server-only";
import { prisma } from "@/lib/db";

// Typed shapes for every collection/singleton's `data` JSON. These mirror
// the field lists in registry.ts (which drives the admin forms) — if you
// add a field there, add it here too so pages get type-checked access to it.
// Every string field is optional at the type level because content lives in
// a JSON column Prisma can't validate; getSingleton/getItems fill in "" for
// any field missing at runtime so components never see `undefined`.

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
}

export interface EyebrowHeading {
  eyebrow: string;
  heading: string;
}

export interface EyebrowDescription {
  eyebrow: string;
  description: string;
}

export interface WhoWeAreHome {
  eyebrow: string;
  heading: string;
  quote: string;
  paragraph: string;
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

export interface Platform {
  name: string;
  slug: string;
  category: string;
  badge: string;
  description: string;
  longDescription: string;
  icon: string;
  image: string;
  accentColorHex: string;
  externalHref: string;
  isExternal: "true" | "false";
  linkLabel: string;
}

export interface VenturePoint {
  title: string;
  body: string;
}

export interface Venture {
  badge: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  points: VenturePoint[];
  ctaLabel: string;
  ctaHref: string;
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

/**
 * These are used by every public page (see app/layout.tsx, app/page.tsx,
 * etc.), so a transient database hiccup — a cold-starting serverless
 * Postgres instance, a dropped connection — should degrade to placeholder
 * content, not take down the whole site with a 500. Errors are logged so
 * they're still visible in server logs.
 */

/** Fetches a singleton's `data` JSON, filling in `fallback` for any missing key. */
export async function getSingleton<T extends object>(
  key: string,
  fallback: T
): Promise<T> {
  try {
    const row = await prisma.singleton.findUnique({ where: { key } });
    const data = (row?.data as Partial<T>) ?? {};
    return { ...fallback, ...data };
  } catch (error) {
    console.error(`getSingleton("${key}") failed, using fallback:`, error);
    return fallback;
  }
}

/** Fetches every Item row in a collection, ordered, with sane fallbacks per row. */
export async function getItems<T extends object>(
  collection: string,
  fallback: T
): Promise<WithId<T>[]> {
  try {
    const rows = await prisma.item.findMany({
      where: { collection },
      orderBy: { order: "asc" },
    });
    return rows.map((row) => ({
      ...fallback,
      ...(row.data as Partial<T>),
      id: row.id,
    }));
  } catch (error) {
    console.error(`getItems("${collection}") failed, using fallback:`, error);
    return [];
  }
}

/** Fetches a single Item by id (used by the /platforms/[slug] page and admin edit forms). */
export async function getItem<T extends object>(
  id: string,
  fallback: T
): Promise<WithId<T> | null> {
  try {
    const row = await prisma.item.findUnique({ where: { id } });
    if (!row) return null;
    return { ...fallback, ...(row.data as Partial<T>), id: row.id };
  } catch (error) {
    console.error(`getItem("${id}") failed:`, error);
    return null;
  }
}
