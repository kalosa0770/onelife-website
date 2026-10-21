// Single source of truth for the site's information architecture:
// three top-level tabs, each with a uniform sub-navigation. The navbar,
// sub-navigation, mobile drawer and footer all render from this file.

export interface NavItem {
  label: string;
  href: string;
}

export interface NavFlow {
  id: string;
  label: string;
  /** Path prefix that puts a visitor "inside" this flow. */
  base: string;
  accent: string;
  items: NavItem[];
}

export interface NavSection {
  id: "onelife" | "events" | "health";
  label: string;
  shortLabel: string;
  href: string;
  accent: string;
  /** Exact paths or path prefixes that belong to this tab. */
  paths: string[];
  items: NavItem[];
  /** Nested flows that get a second row of tabs (Events only). */
  flows?: NavFlow[];
}

export const NAV_SECTIONS: NavSection[] = [
  {
    id: "onelife",
    label: "OneLife",
    shortLabel: "OneLife",
    href: "/",
    accent: "#ED1C24",
    paths: ["/", "/who-we-are", "/capabilities", "/track-record", "/contact"],
    items: [
      { label: "Home", href: "/" },
      { label: "About OneLife", href: "/who-we-are" },
      { label: "Capabilities", href: "/capabilities" },
      { label: "Track Record & Clients", href: "/track-record" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    id: "events",
    label: "OneLife Events",
    shortLabel: "Events",
    href: "/events",
    accent: "#1F4D3A",
    paths: ["/events"],
    items: [
      { label: "Overview", href: "/events" },
      { label: "IMPEX", href: "/events/impex" },
      { label: "Smart Woman Summit", href: "/events/smart-woman-summit" },
    ],
    flows: [
      {
        id: "impex",
        label: "IMPEX",
        base: "/events/impex",
        accent: "#1F4D3A",
        items: [
          { label: "About IMPEX", href: "/events/impex" },
          { label: "Corridors Tracked", href: "/events/impex/corridors" },
          { label: "The Ledger", href: "/events/impex/ledger" },
          { label: "OTI", href: "/events/impex/oti" },
          { label: "Registrations", href: "/events/impex/register" },
        ],
      },
      {
        id: "sws",
        label: "Smart Woman Summit",
        base: "/events/smart-woman-summit",
        accent: "#D6336C",
        items: [
          { label: "About the Summit", href: "/events/smart-woman-summit" },
          { label: "Financial Literacy", href: "/events/smart-woman-summit/financial-literacy" },
          { label: "2027 Event", href: "/events/smart-woman-summit/2027" },
          { label: "Registrations", href: "/events/smart-woman-summit/register" },
        ],
      },
    ],
  },
  {
    id: "health",
    label: "OneLife Health Corridor",
    shortLabel: "Health Corridor",
    href: "/health-corridor",
    accent: "#0F766E",
    paths: ["/health-corridor"],
    items: [
      { label: "About the Corridor", href: "/health-corridor" },
      { label: "Registered Hospitals", href: "/health-corridor/registered-hospitals" },
      { label: "Partner Health Insurance", href: "/health-corridor/partner-insurance" },
      { label: "Contact", href: "/health-corridor/contact" },
    ],
  },
];

function matches(pathname: string, path: string) {
  if (path === "/") return pathname === "/";
  return pathname === path || pathname.startsWith(`${path}/`);
}

export function getActiveSection(pathname: string): NavSection | undefined {
  return NAV_SECTIONS.find((s) => s.paths.some((p) => matches(pathname, p)));
}

export function getActiveFlow(pathname: string, section?: NavSection): NavFlow | undefined {
  return section?.flows?.find((f) => matches(pathname, f.base));
}

export function isItemActive(pathname: string, href: string, siblings: NavItem[]) {
  if (pathname === href) return true;
  if (href === "/" || !pathname.startsWith(`${href}/`)) return false;
  // Don't highlight a parent when a longer sibling href matches better.
  return !siblings.some((s) => s.href !== href && s.href.length > href.length && matches(pathname, s.href));
}
