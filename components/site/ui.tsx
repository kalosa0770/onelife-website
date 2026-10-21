import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

export const RED = "#ED1C24";
export const GREEN = "#1F4D3A";
export const AMBER = "#D99A1E";
export const ROSE = "#D6336C";
export const TEAL = "#0F766E";

/** Lighter green used on dark backgrounds where #1F4D3A would disappear. */
export const GREEN_LIGHT = "#3F8F6A";

const onDark = (accent: string) => (accent === GREEN ? GREEN_LIGHT : accent);

export function ButtonLink({
  href,
  children,
  variant = "primary",
  external,
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "outline-light" | "dark";
  external?: boolean;
  className?: string;
}) {
  const styles = {
    primary: "bg-onelife-red text-white hover:bg-[#d1171e] shadow-sm hover:shadow-md",
    dark: "bg-charcoal text-white hover:bg-black",
    outline: "border-2 border-charcoal/20 text-foreground hover:border-foreground",
    "outline-light": "border-2 border-white/35 text-white hover:border-white hover:bg-white/10",
  }[variant];
  const cls = `group inline-flex min-h-12 items-center justify-center gap-2 rounded-lg px-7 py-3 font-heading text-xs font-semibold uppercase tracking-wider transition ${styles} ${className}`;
  const content = (
    <>
      {children}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </>
  );
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {content}
    </Link>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
  accent = RED,
  image,
  children,
  aside,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  accent?: string;
  image?: string;
  children?: ReactNode;
  aside?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-charcoal px-4 py-16 text-white sm:px-8 sm:py-20 lg:py-28">
      {image && <Image src={image} alt="" fill priority sizes="100vw" className="object-cover opacity-30" />}
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal/95 to-charcoal/80" />
      <div
        className="absolute -right-24 -top-24 h-96 w-96 rounded-full opacity-20 blur-3xl"
        style={{ backgroundColor: onDark(accent) }}
        aria-hidden="true"
      />
      <div className={`relative mx-auto grid max-w-7xl items-center gap-12 ${aside ? "lg:grid-cols-2" : ""}`}>
        <div className={aside ? "" : "max-w-3xl"}>
          <span
            className="mb-4 block font-heading text-xs font-semibold uppercase tracking-[0.2em]"
            style={{ color: onDark(accent) }}
          >
            {eyebrow}
          </span>
          <h1 className="font-heading text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          {intro && <div className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">{intro}</div>}
          {children && <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">{children}</div>}
        </div>
        {aside}
      </div>
    </section>
  );
}

export function Section({
  tone = "white",
  id,
  children,
  className = "",
}: {
  tone?: "white" | "surface" | "dark";
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  const bg = { white: "bg-white", surface: "bg-surface", dark: "bg-charcoal text-white" }[tone];
  return (
    <section id={id} className={`scroll-mt-40 px-4 py-16 sm:px-8 md:py-24 ${bg} ${className}`}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  accent = RED,
  light,
  center,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  accent?: string;
  light?: boolean;
  center?: boolean;
}) {
  return (
    <div className={`mb-10 max-w-3xl md:mb-14 ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <span
          className="mb-3 block font-heading text-xs font-semibold uppercase tracking-[0.2em]"
          style={{ color: light ? onDark(accent) : accent }}
        >
          {eyebrow}
        </span>
      )}
      <h2 className={`font-heading text-2xl font-bold leading-tight tracking-tight md:text-4xl ${light ? "text-white" : "text-foreground"}`}>
        {title}
      </h2>
      {intro && (
        <div className={`mt-4 text-base leading-relaxed md:text-lg ${light ? "text-white/75" : "text-slate-grey"}`}>{intro}</div>
      )}
    </div>
  );
}

export function Card({
  children,
  accent,
  className = "",
}: {
  children: ReactNode;
  accent?: string;
  className?: string;
}) {
  return (
    <div
      className={`rounded-xl border border-charcoal/10 bg-white p-6 shadow-sm transition hover:shadow-md ${accent ? "border-t-4" : ""} ${className}`}
      style={accent ? { borderTopColor: accent } : undefined}
    >
      {children}
    </div>
  );
}

export function Prose({ children }: { children: ReactNode }) {
  return <div className="max-w-3xl space-y-4 text-base leading-relaxed text-slate-grey md:text-lg">{children}</div>;
}

export function Checklist({ items, accent = RED, light }: { items: ReactNode[]; accent?: string; light?: boolean }) {
  return (
    <ul className={`space-y-3 text-sm md:text-base ${light ? "text-white/80" : "text-slate-grey"}`}>
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <span className="mt-2 h-2 w-2 shrink-0 rounded-full" style={{ backgroundColor: onDark(accent) }} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function EmptyState({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-xl border border-dashed border-charcoal/25 bg-white p-8 text-center sm:p-12">
      <h3 className="font-heading text-lg font-bold text-foreground">{title}</h3>
      <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-slate-grey">{body}</p>
    </div>
  );
}
