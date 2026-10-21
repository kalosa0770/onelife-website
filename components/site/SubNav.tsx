"use client";

import Link from "next/link";
import { getActiveFlow, isItemActive, type NavSection, type NavItem } from "@/lib/site/nav";

interface SubNavProps {
  pathname: string;
  section?: NavSection;
}

function TabRow({
  items,
  pathname,
  accent,
  label,
  tone,
}: {
  items: NavItem[];
  pathname: string;
  accent: string;
  label: string;
  tone: "primary" | "secondary";
}) {
  return (
    <nav aria-label={label} className={tone === "primary" ? "border-b border-charcoal/10 bg-surface" : "border-b border-charcoal/10 bg-white"}>
      <ul className="no-scrollbar mx-auto flex max-w-7xl items-stretch gap-1 overflow-x-auto px-4 sm:px-8">
        {items.map((item) => {
          const active = isItemActive(pathname, item.href, items);
          return (
            <li key={item.href} className="shrink-0">
              <Link
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`relative flex h-11 items-center px-3 text-[13px] font-medium transition-colors sm:px-4 ${
                  active ? "font-semibold text-foreground" : "text-slate-grey hover:text-foreground"
                }`}
              >
                {item.label}
                <span
                  className={`absolute inset-x-3 bottom-0 h-0.5 rounded-full transition-opacity sm:inset-x-4 ${
                    active ? "opacity-100" : "opacity-0"
                  }`}
                  style={{ backgroundColor: accent }}
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export function SubNav({ pathname, section }: SubNavProps) {
  if (!section) return null;
  const flow = getActiveFlow(pathname, section);

  return (
    <>
      <TabRow
        items={section.items}
        pathname={pathname}
        accent={section.accent}
        label={`${section.label} sections`}
        tone="primary"
      />
      {flow && (
        <TabRow
          items={flow.items}
          pathname={pathname}
          accent={flow.accent}
          label={`${flow.label} pages`}
          tone="secondary"
        />
      )}
    </>
  );
}
