import { GREEN, AMBER } from "@/components/site/ui";

export { GREEN, AMBER };

// Interim link until an OTI-branded home is live.
export const OTI_URL = "https://mariamasiri.substack.com";
export const otiLink = (campaign: string) =>
  `${OTI_URL}?utm_source=impex-page&utm_medium=website&utm_campaign=${campaign}`;

export const pipeline = ["Identify", "Screen", "Track", "Package", "Convene", "Follow Through"];

export const activities = [
  { title: "Corridor Conversations", body: "Curated bilateral and multilateral sessions between buyers, manufacturers, distributors, and financiers operating across IMPEX's six tracked corridors." },
  { title: "The Deal Room", body: "A managed, pre-qualified matchmaking environment where documented transaction intent is the entry requirement." },
  { title: "The SME Fundability Programme", body: "A pre-event structuring and readiness process that helps SME founders arrive bankable, not just present." },
];

export const facts = [
  ["Date", "2027 — dates announced to OTI subscribers first"],
  ["Location", "Lusaka, Zambia"],
  ["Event type", "Invitation-only, practitioner deal-making summit"],
  ["Positioning", "Trade Intelligence to Deal Room Platform for Southern Africa"],
  ["Corridors tracked", "6"],
  ["Organiser", "Onelife Communications & Events Company"],
];

export const corridors = [
  { name: "Battery Value Chain", geo: "Zambia · DRC · Zimbabwe", focus: "Copper-cobalt beneficiation, Musompo SEZ, the economics of not exporting raw.", status: "LIVE" },
  { name: "Lobito Corridor", geo: "Angola · DRC · Zambia", focus: "The rail-and-port route repositioning Central-Southern Africa's mineral exports.", status: "LIVE" },
  { name: "Zambia Mining Supply Chain", geo: "Zambia", focus: "Local content and supplier development around Zambia's mining sector.", status: "LIVE" },
  { name: "Zimbabwe Lithium Processing", geo: "Zimbabwe", focus: "Moving from ore export to processed lithium products.", status: "LIVE" },
  { name: "Agro-Processing & Storage", geo: "SADC-wide", focus: "Food security, smallholder cooperative financing, cold-chain and export readiness.", status: "LIVE" },
  { name: "Tobacco Value Chain", geo: "Malawi · Zimbabwe · Mozambique · Tanzania · Zambia", focus: "115,000+ growers, a US$1.2bn crop, and a five-year plan to localise financing and processing. Organising window closes before the 2027 marketing season.", status: "TIME-SENSITIVE" },
];

export const delegates = [
  "SME founders and mid-market operators with active cross-border trade intent",
  "Manufacturers seeking distribution corridors into SADC-COMESA markets",
  "Importers and exporters operating in the USD 100K–5M transaction range",
  "Investors and DFI representatives seeking verified deal flow",
  "Sector specialists across all six tracked corridors",
];

export const partnerTracks = [
  ["Capital Access Track", "anchor sponsor for the SME Fundability Programme"],
  ["Corridor Intelligence Partner", "co-branded OTI editorial partnership"],
  ["Corridor Sponsor", "one per corridor, six available — naming rights to a Corridor Intelligence Session and co-selection of its Champion"],
  ["Deal Room Sponsor", "naming rights to the summit's transaction facilitation environment"],
  ["Host City & Venue Partners", "institutional positioning with the Zambia government and trade bodies"],
];

export const ledger = [
  { band: "Ground Floor", range: "Opportunities under USD 100K", state: "Opened, Issue 009" },
  { band: "Middle Market", range: "USD 100K to USD 5M", state: "Opened, Issue 010" },
  { band: "Anchor / Institutional", range: "USD 5M and above", state: "Opening in Issue 012" },
];

export const delegateBenefits = [
  "Priority Deal Room placement and corridor matching",
  "Access to the SME Fundability Programme",
  "Exclusive OTI intelligence briefings in the lead-up to the summit",
  "First notice of event dates and venue",
  "Recognition in all IMPEX 2027 materials as a Founding Delegate",
  "First right of refusal on IMPEX 2028 Founding Delegate status",
];

// Article links point at the OTI archive until individual article URLs are
// supplied — replace `href` with the direct Substack post links.
export const otiArticles = [
  { issue: "Issue 007", title: "Cross-Border Beneficiation Hub — the Tobacco Value Chain", href: `${OTI_URL}/archive` },
  { issue: "Issue 009", title: "The Ledger: the Ground Floor opens (under USD 100K)", href: `${OTI_URL}/archive` },
  { issue: "Issue 010", title: "The Ledger: the Middle Market opens (USD 100K – 5M)", href: `${OTI_URL}/archive` },
  { issue: "All issues", title: "Browse the full OTI archive", href: `${OTI_URL}/archive` },
];

export const mapNodes = [
  { label: "Battery Value Chain", x: 300, y: 40 },
  { label: "Lobito Corridor", x: 60, y: 130 },
  { label: "Zambia Mining Supply Chain", x: 100, y: 300 },
  { label: "Zimbabwe Lithium Processing", x: 500, y: 300 },
  { label: "Agro-Processing & Storage", x: 540, y: 130 },
  { label: "Tobacco Value Chain", x: 300, y: 340 },
];
