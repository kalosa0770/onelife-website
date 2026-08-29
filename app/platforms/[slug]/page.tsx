import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowUpRight, ShieldCheck, Tag } from "lucide-react";
import { ContentIcon } from "@/components/ContentIcon";
import { getItems } from "@/lib/content/read";
import type { Platform } from "@/lib/content/read";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";

interface PageProps {
  params: Promise<{ slug: string }>;
}

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

async function findPlatformBySlug(slug: string) {
  const platforms = await getItems<Platform>("platforms", platformFallback);
  return platforms.find((platform) => platform.slug === slug) ?? null;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const platform = await findPlatformBySlug(slug);
  if (!platform) return {};
  return {
    title: `${platform.name} | OneLife`,
    description: platform.description,
  };
}

export default async function PlatformPage({ params }: PageProps) {
  const { slug } = await params;
  const platform = await findPlatformBySlug(slug);
  if (!platform) notFound();

  const isExternal = platform.isExternal === "true";

  return (
    <div className="min-h-screen bg-warm-white text-charcoal">
      <main>
        {/* HERO */}
        <section className="relative h-[50vh] min-h-[380px] w-full bg-charcoal overflow-hidden">
          {platform.image && (
            <Image
              src={platform.image}
              alt={platform.name}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-charcoal/20" />

          <div className="relative z-10 max-w-5xl mx-auto h-full flex flex-col justify-end px-4 sm:px-8 pb-14">
            <span
              className="inline-flex items-center gap-1.5 text-[10px] font-heading font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full text-white shadow-sm w-fit mb-4"
              style={{ backgroundColor: platform.accentColorHex }}
            >
              <ContentIcon name={platform.icon} className="w-3 h-3" strokeWidth={2.5} />
              {platform.badge}
            </span>
            <h1 className="font-heading font-bold text-3xl md:text-5xl text-white tracking-tight leading-tight">
              {platform.name}
            </h1>
          </div>
        </section>

        {/* BODY */}
        <section className="py-16 px-4 sm:px-8">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 space-y-5">
              <div className="flex items-center gap-4 text-xs text-slate-grey">
                <span className="flex items-center gap-1.5">
                  <Tag className="w-3.5 h-3.5" style={{ color: platform.accentColorHex }} />
                  {platform.category}
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-onelife-red" />
                  By OneLife
                </span>
              </div>

              {(platform.longDescription || platform.description)
                .split("\n")
                .filter(Boolean)
                .map((paragraph, idx) => (
                  <p key={idx} className="text-sm md:text-base text-slate-grey leading-relaxed">
                    {paragraph}
                  </p>
                ))}
            </div>

            {/* SIDEBAR CTA */}
            <div className="lg:col-span-4">
              <div className="border border-charcoal/10 rounded-lg p-6 bg-[#F4F4F0] space-y-4 sticky top-24">
                {platform.externalHref && (
                  <a
                    href={platform.externalHref}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    className="w-full inline-flex items-center justify-center gap-2 text-white font-heading font-semibold text-xs uppercase tracking-wider px-6 py-3.5 rounded shadow-sm transition-opacity hover:opacity-90"
                    style={{ backgroundColor: platform.accentColorHex }}
                  >
                    <span>{platform.linkLabel || `Visit ${platform.name}`}</span>
                    {isExternal ? (
                      <ArrowUpRight className="w-4 h-4" />
                    ) : (
                      <ArrowRight className="w-4 h-4" />
                    )}
                  </a>
                )}
                <Link
                  href="/#contact"
                  className="w-full inline-flex items-center justify-center gap-2 border border-charcoal/20 hover:border-charcoal text-charcoal font-heading font-semibold text-xs uppercase tracking-wider px-6 py-3.5 rounded transition-colors"
                >
                  <span>Get In Touch</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
