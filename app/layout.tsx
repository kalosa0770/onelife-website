import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  getSingleton,
  getItems,
  type SiteSettings,
  type Platform,
  type CapabilitySection,
} from "@/lib/content/read";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "OneLife Communications & Events Company | Lusaka, Zambia",
  description:
    "One strategic partner. Every discipline your challenge needs. 14 years of regional execution across brand, events, and trade intelligence.",
  icons: {
    icon: "/favicon.ico",
  },
};

// Content is stored in Postgres, not the build — render every request so
// admin edits show up immediately instead of only after a redeploy.
export const dynamic = "force-dynamic";

const siteSettingsFallback: SiteSettings = {
  address: "Lusaka, Zambia",
  email: "info@onelife.co.zm",
  phone: "",
  linkedinUrl: "https://linkedin.com",
  xUrl: "https://x.com",
  instagramUrl: "https://instagram.com",
  footerBrandBlurb: "",
  copyrightText: "",
};

const platformFallback: Platform = {
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
};

const capabilitySectionFallback: CapabilitySection = {
  slug: "",
  badge: "",
  title: "",
  tagline: "",
  description: "",
  icon: "Compass",
  image: "",
  proofPoint: "",
  deliverables: [],
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [siteSettings, platforms, capabilities] = await Promise.all([
    getSingleton<SiteSettings>("site-settings", siteSettingsFallback),
    getItems<Platform>("platforms", platformFallback),
    getItems<CapabilitySection>("capability-sections", capabilitySectionFallback),
  ]);

  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body>
        <Navbar
          siteSettings={siteSettings}
          platforms={platforms.map((p) => ({
            slug: p.slug,
            name: p.name,
            accentColorHex: p.accentColorHex,
            externalHref: p.externalHref,
            isExternal: p.isExternal,
          }))}
        />
        {children}
        <Footer
          siteSettings={siteSettings}
          platforms={platforms.map((p) => ({ slug: p.slug, name: p.name }))}
          capabilities={capabilities.map((c) => ({ slug: c.slug, title: c.title }))}
        />
      </body>
    </html>
  );
}
