import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { LeadForm } from "@/components/forms/LeadForm";
import { Tracking } from "@/components/Tracking";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";

const GREEN = "#1F4D3A";
const AMBER = "#D99A1E";

// Interim link until an OTI-branded home is live — swap here (see brief, Section 6).
const OTI_URL = "https://mariamasiri.substack.com";
const otiLink = (campaign: string) =>
  `${OTI_URL}?utm_source=impex-page&utm_medium=website&utm_campaign=${campaign}`;

export const metadata: Metadata = {
  title: "IMPEX 2027 | Trade Intelligence to Deal Room | OneLife",
  description:
    "IMPEX 2027 is a practitioner deal-making summit in Lusaka, Zambia — where OTI's trade intelligence becomes a deal room across six SADC-COMESA corridors.",
};

const pipeline = ["Identify", "Screen", "Track", "Package", "Convene", "Follow Through"];

const activities = [
  { title: "Corridor Conversations", body: "Curated bilateral and multilateral sessions between buyers, manufacturers, distributors, and financiers operating across IMPEX's six tracked corridors." },
  { title: "The Deal Room", body: "A managed, pre-qualified matchmaking environment where documented transaction intent is the entry requirement." },
  { title: "The SME Fundability Programme", body: "A pre-event structuring and readiness process that helps SME founders arrive bankable, not just present." },
];

const facts = [
  ["Date", "2027 — dates announced to OTI subscribers first"],
  ["Location", "Lusaka, Zambia"],
  ["Event type", "Invitation-only, practitioner deal-making summit"],
  ["Positioning", "Trade Intelligence to Deal Room Platform for Southern Africa"],
  ["Corridors tracked", "6 — see below"],
  ["Organiser", "Onelife Communications & Events Company"],
];

const corridors = [
  { name: "Battery Value Chain", geo: "Zambia · DRC · Zimbabwe", focus: "Copper-cobalt beneficiation, Musompo SEZ, the economics of not exporting raw.", status: "LIVE" },
  { name: "Lobito Corridor", geo: "Angola · DRC · Zambia", focus: "The rail-and-port route repositioning Central-Southern Africa's mineral exports.", status: "LIVE" },
  { name: "Zambia Mining Supply Chain", geo: "Zambia", focus: "Local content and supplier development around Zambia's mining sector.", status: "LIVE" },
  { name: "Zimbabwe Lithium Processing", geo: "Zimbabwe", focus: "Moving from ore export to processed lithium products.", status: "LIVE" },
  { name: "Agro-Processing & Storage", geo: "SADC-wide", focus: "Food security, smallholder cooperative financing, cold-chain and export readiness.", status: "LIVE" },
  { name: "Tobacco Value Chain", geo: "Malawi · Zimbabwe · Mozambique · Tanzania · Zambia", focus: "115,000+ growers, a US$1.2bn crop, and a five-year plan to localise financing and processing. Organising window closes before the 2027 marketing season.", status: "TIME-SENSITIVE" },
];

const delegates = [
  "SME founders and mid-market operators with active cross-border trade intent",
  "Manufacturers seeking distribution corridors into SADC-COMESA markets",
  "Importers and exporters operating in the USD 100K–5M transaction range",
  "Investors and DFI representatives seeking verified deal flow",
  "Sector specialists across all six tracked corridors",
];

const partnerTracks = [
  ["Capital Access Track", "anchor sponsor for the SME Fundability Programme"],
  ["Corridor Intelligence Partner", "co-branded OTI editorial partnership"],
  ["Corridor Sponsor", "one per corridor, six available — naming rights to a Corridor Intelligence Session and co-selection of its Champion"],
  ["Deal Room Sponsor", "naming rights to the summit's transaction facilitation environment"],
  ["Host City & Venue Partners", "institutional positioning with the Zambia government and trade bodies"],
];

const ledger = [
  ["Ground Floor", "opportunities under USD 100K", "opened, Issue 009"],
  ["Middle Market", "USD 100K to USD 5M", "opened, Issue 010"],
  ["Anchor / Institutional", "USD 5M and above", "opening in Issue 012"],
];

const delegateBenefits = [
  "Priority Deal Room placement and corridor matching",
  "Access to the SME Fundability Programme",
  "Exclusive OTI intelligence briefings in the lead-up to the summit",
  "First notice of event dates and venue",
  "Recognition in all IMPEX 2027 materials as a Founding Delegate",
  "First right of refusal on IMPEX 2028 Founding Delegate status",
];

const eyebrow = "text-xs font-heading font-semibold uppercase tracking-[0.2em] block mb-3";
const h2 = "font-heading font-bold text-2xl md:text-3xl tracking-tight leading-tight";
const primaryCta = "inline-flex items-center justify-center gap-2 bg-onelife-red hover:bg-[#d1171e] text-white font-heading font-semibold text-xs uppercase tracking-wider px-8 py-4 rounded transition-colors";
const outlineCta = "inline-flex items-center justify-center gap-2 border-2 font-heading font-semibold text-xs uppercase tracking-wider px-8 py-3.5 rounded transition-colors";

// Schematic, not geographic: Lusaka as the junction, six corridor lines out.
const mapNodes = [
  { label: "Battery Value Chain", x: 300, y: 40 },
  { label: "Lobito Corridor", x: 60, y: 130 },
  { label: "Zambia Mining Supply Chain", x: 100, y: 300 },
  { label: "Zimbabwe Lithium Processing", x: 500, y: 300 },
  { label: "Agro-Processing & Storage", x: 540, y: 130 },
  { label: "Tobacco Value Chain", x: 300, y: 340 },
];

const CorridorMap = () => (
  <svg viewBox="0 0 600 370" role="img" aria-label="Schematic of the six IMPEX corridors radiating from Lusaka" className="w-full h-auto">
    {mapNodes.map((n) => (
      <line key={n.label} x1="300" y1="190" x2={n.x} y2={n.y} stroke="#3F8F6A" strokeWidth="2.5" strokeLinecap="round" />
    ))}
    {mapNodes.map((n) => (
      <g key={n.label}>
        <circle cx={n.x} cy={n.y} r="6" fill="#3F8F6A" />
        <text
          x={n.x}
          y={n.y + (n.y < 190 ? -14 : 24)}
          textAnchor="middle"
          fontSize="12"
          fill="#FFFFFF"
          fillOpacity="0.85"
          fontFamily="var(--font-inter), sans-serif"
        >
          {n.label}
        </text>
      </g>
    ))}
    <circle cx="300" cy="190" r="12" fill={AMBER} />
    <circle cx="300" cy="190" r="20" fill="none" stroke={AMBER} strokeOpacity="0.4" />
    <text x="300" y="228" textAnchor="middle" fontSize="13" fontWeight="600" fill={AMBER} fontFamily="var(--font-poppins), sans-serif">Lusaka</text>
  </svg>
);

export default function ImpexPage() {
  return (
    <div className="bg-warm-white text-foreground">
      <Tracking />
      <main>
        {/* 1. HERO */}
        <section className="bg-foreground text-white px-4 sm:px-8 py-20 md:py-28">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className={eyebrow} style={{ color: AMBER }}>Lusaka, Zambia · 2027</span>
              <h1 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight leading-[1.1]">
                Africa doesn&rsquo;t have a business problem. Africa has a connection problem.
              </h1>
              <p className="mt-6 text-base md:text-lg text-white/80 leading-relaxed">
                Every week, OTI documents the deals that don&rsquo;t get made, the corridors that go quiet, and the capital that circles without landing. IMPEX 2027 is where that ledger becomes a deal room &mdash; across six corridors in the SADC-COMESA region.
              </p>
              <p className="mt-4 text-sm md:text-base text-white/65 leading-relaxed">
                IMPEX (Intra-African Trade &amp; Manufacturers&rsquo; Exchange) is a practitioner deal-making summit taking place in Lusaka, Zambia, in 2027. It is the live-event end of a year-round pipeline: OTI identifies and tracks the projects, IMPEX convenes the capital, the policy support, and the implementers around them. Transactions are the agenda, not the afterthought.
              </p>
              <p className="mt-4 text-sm text-white/65">Dates announced to OTI subscribers and Founding Delegates first.</p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a href="#register" className={primaryCta}>Register as a Founding Delegate <ArrowRight className="w-4 h-4" /></a>
                <a href={otiLink("hero")} target="_blank" rel="noopener noreferrer" className={`${outlineCta} border-white/40 hover:border-white text-white`}>
                  Read OTI &mdash; our trade intelligence publication <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
            <CorridorMap />
          </div>
        </section>

        {/* 2. WHAT IS IMPEX */}
        <section className="px-4 sm:px-8 py-16 md:py-20">
          <div className="max-w-5xl mx-auto">
            <span className={eyebrow} style={{ color: GREEN }}>What is IMPEX?</span>
            <h2 className={h2}>The Room Where Deals Get Done</h2>
            <p className="mt-5 max-w-3xl text-base text-slate-grey leading-relaxed">
              IMPEX 2027 is not a conference. There are no panels for the sake of panels, no death-by-PowerPoint keynotes, and no networking sessions where nothing gets exchanged except business cards that go straight to a drawer.
            </p>
            <p className="mt-4 max-w-3xl text-base text-slate-grey leading-relaxed">
              IMPEX is a practitioner deal-making summit &mdash; structured around three core activities:
            </p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              {activities.map((a) => (
                <div key={a.title} className="border border-charcoal/15 rounded-lg p-6 border-t-4" style={{ borderTopColor: GREEN }}>
                  <h3 className="font-heading font-bold text-base">{a.title}</h3>
                  <p className="mt-2 text-sm text-slate-grey leading-relaxed">{a.body}</p>
                </div>
              ))}
            </div>
            <dl className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-10 border-t border-charcoal/15">
              {facts.map(([k, v]) => (
                <div key={k} className="py-3 border-b border-charcoal/15 flex gap-4">
                  <dt className="w-36 shrink-0 text-[11px] font-heading font-semibold uppercase tracking-wider text-slate-grey pt-0.5">{k}</dt>
                  <dd className="text-sm font-medium">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* 3. WHY LUSAKA */}
        <section className="px-4 sm:px-8 py-16 md:py-20 bg-[#F4F4F0]">
          <div className="max-w-5xl mx-auto">
            <span className={eyebrow} style={{ color: GREEN }}>Why Lusaka? Why now?</span>
            <h2 className={h2}>The Corridor Is Moving. The Question Is Whether You&rsquo;re In It.</h2>
            <div className="mt-5 max-w-3xl space-y-4 text-base text-slate-grey leading-relaxed">
              <p>The SADC-COMESA region represents over 600 million consumers, a manufacturing base actively restructuring, and a trade policy environment shaped by the AfCFTA that is &mdash; finally &mdash; moving from aspiration to implementation.</p>
              <p>Lusaka sits at the geographic and logistical heart of this corridor. It connects east to Dar es Salaam and Mombasa, south to Harare and Johannesburg, north to the DRC and Lubumbashi. It is not a destination. It is a junction.</p>
              <p>IMPEX 2027 is built on a pipeline, not a calendar. OTI identifies projects through reporting, research, and partner networks. It screens them for strategic relevance, feasibility, and readiness. It tracks them through milestones, dependencies, and funding gaps. The strongest are packaged into conference-ready profiles and convened in the Deal Room with investors, lenders, government, and technical partners &mdash; and followed through after the summit with monitoring and transaction support.</p>
              <p className="font-semibold text-foreground">OTI has been running that pipeline in public since May 2026. IMPEX is where it convenes.</p>
            </div>
            <ol className="mt-10 grid grid-cols-2 md:grid-cols-6 gap-3">
              {pipeline.map((step, i) => (
                <li key={step} className="rounded-lg p-4 text-white" style={{ backgroundColor: GREEN }}>
                  <span className="inline-flex w-6 h-6 rounded-full items-center justify-center text-xs font-bold text-foreground" style={{ backgroundColor: AMBER }}>{i + 1}</span>
                  <p className="mt-3 font-heading font-semibold text-sm">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* 4. SIX CORRIDORS */}
        <section className="px-4 sm:px-8 py-16 md:py-20">
          <div className="max-w-5xl mx-auto">
            <span className={eyebrow} style={{ color: GREEN }}>The six corridors</span>
            <h2 className={h2}>Six Corridors. One Room.</h2>
            <p className="mt-5 max-w-3xl text-base text-slate-grey leading-relaxed">
              IMPEX doesn&rsquo;t organise around geography for its own sake. Each corridor mirrors a live OTI editorial track &mdash; the intelligence and the deal flow run on the same rails &mdash; and each corridor carries a named Corridor Champion who chairs its session and vets its Deal Room applicants.
            </p>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
              {corridors.map((c) => (
                <article key={c.name} className="border border-charcoal/15 rounded-lg overflow-hidden flex flex-col">
                  <header className="flex items-start justify-between gap-3 px-5 py-3 text-white" style={{ backgroundColor: GREEN }}>
                    <h3 className="font-heading font-bold text-base">{c.name}</h3>
                    <span className="shrink-0 text-[10px] font-heading font-bold tracking-wider px-2 py-1 rounded text-foreground" style={{ backgroundColor: AMBER }}>{c.status}</span>
                  </header>
                  <div className="p-5 space-y-2 flex-1">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-grey">{c.geo}</p>
                    <p className="text-sm text-slate-grey leading-relaxed">{c.focus}</p>
                    <p className="text-xs text-slate-grey pt-2 border-t border-charcoal/10">Champion: announcement to follow</p>
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-8 max-w-3xl space-y-2 text-sm text-slate-grey leading-relaxed">
              <h3 className="font-heading font-bold text-base text-foreground">Corridor Champions</h3>
              <p>Each corridor is chaired by a named practitioner &mdash; not a generalist MC &mdash; who sets the session agenda, sits on the IMPEX Deal Committee for that sector, and anchors the corresponding OTI corridor report.</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Practitioner credibility in the sector, not primarily academic standing</li>
                <li>An existing public track record on the corridor&rsquo;s specific bottlenecks</li>
                <li>Willingness to be co-selected alongside that corridor&rsquo;s sponsor</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 5. WHO IS IT FOR */}
        <section className="px-4 sm:px-8 py-16 md:py-20 bg-[#F4F4F0]">
          <div className="max-w-5xl mx-auto">
            <span className={eyebrow} style={{ color: GREEN }}>Who is IMPEX for?</span>
            <h2 className={h2}>Built for the People Who Build Things</h2>
            <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-warm-white border border-charcoal/15 rounded-lg p-6 sm:p-8 flex flex-col">
                <h3 className="font-heading font-bold text-lg" style={{ color: GREEN }}>Founding Delegates</h3>
                <p className="mt-3 text-sm font-semibold">IMPEX is built for:</p>
                <ul className="mt-2 space-y-2 text-sm text-slate-grey leading-relaxed list-disc pl-5">
                  {delegates.map((d) => <li key={d}>{d}</li>)}
                </ul>
                <p className="mt-4 text-sm text-slate-grey leading-relaxed">Founding Delegate status is limited. Early registrants access pre-summit Deal Room preparation, OTI intelligence briefings, and priority corridor matching.</p>
                <a href="#register" className={`${primaryCta} mt-6 self-start`}>Secure Your Founding Delegate Place <ArrowRight className="w-4 h-4" /></a>
              </div>
              <div className="bg-warm-white border border-charcoal/15 rounded-lg p-6 sm:p-8 flex flex-col">
                <h3 className="font-heading font-bold text-lg" style={{ color: GREEN }}>Sponsors &amp; Strategic Partners</h3>
                <p className="mt-3 text-sm font-semibold">IMPEX offers category-exclusive partnership positions across:</p>
                <ul className="mt-2 space-y-2 text-sm text-slate-grey leading-relaxed list-disc pl-5">
                  {partnerTracks.map(([name, desc]) => (
                    <li key={name}><strong className="text-foreground">{name}</strong> &mdash; {desc}</li>
                  ))}
                </ul>
                <a href="#partner" className={`${primaryCta} mt-6 self-start`}>Enquire About Partnership <ArrowRight className="w-4 h-4" /></a>
              </div>
            </div>
          </div>
        </section>

        {/* 6. OTI CONNECTION */}
        <section className="px-4 sm:px-8 py-16 md:py-20">
          <div className="max-w-5xl mx-auto">
            <span className={eyebrow} style={{ color: GREEN }}>The OTI connection</span>
            <h2 className={h2}>Every IMPEX Deal Starts With Intelligence</h2>
            <div className="mt-5 max-w-3xl space-y-4 text-base text-slate-grey leading-relaxed">
              <p>IMPEX does not exist in isolation. It is the annual culmination of OTI &mdash; Onelife Trade Intelligence &mdash; a pan-African trade publication that tracks deal flow, corridor infrastructure, capital access, and business policy across the SADC-COMESA region.</p>
              <p>OTI publishes every Thursday, weekly from September 2026. Its current series, <em>The Ledger</em>, is opening the Opportunity Register band by band:</p>
            </div>
            <ul className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              {ledger.map(([band, range, state]) => (
                <li key={band} className="rounded-lg p-5 border-l-4 bg-[#F4F4F0]" style={{ borderLeftColor: GREEN }}>
                  <p className="font-heading font-bold text-base">{band}</p>
                  <p className="text-sm text-slate-grey">{range}</p>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-wider" style={{ color: GREEN }}>{state}</p>
                </li>
              ))}
            </ul>
            <p className="mt-6 max-w-3xl text-base text-slate-grey leading-relaxed">
              OTI subscribers get early intelligence on IMPEX deal flow, pre-qualified corridor opportunities, and first access to Founding Delegate registration windows and event dates.
            </p>
            <a href={otiLink("oti-block")} target="_blank" rel="noopener noreferrer" className={`${outlineCta} mt-6`} style={{ borderColor: GREEN, color: GREEN }}>
              Subscribe to OTI &mdash; Free <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>

        {/* 7. OPPORTUNITY REGISTER */}
        <section className="px-4 sm:px-8 py-16 md:py-20 bg-[#F4F4F0]">
          <div className="max-w-5xl mx-auto">
            <span className={eyebrow} style={{ color: GREEN }}>The Opportunity Register</span>
            <h2 className={h2}>This Is What&rsquo;s Actually on the Table</h2>
            <div className="mt-5 max-w-3xl space-y-4 text-base text-slate-grey leading-relaxed">
              <p>The IMPEX Opportunity Register is a live, curated catalogue of verified trade, investment, and supply-chain opportunities across the SADC-COMESA corridor, sourced through OTI&rsquo;s editorial and intelligence network and published band by band in OTI&rsquo;s Ledger series.</p>
              <p>This is not a pitch deck. Every entry represents a documented need, a named sector, and a transaction band &mdash; submitted by operators who are ready to move.</p>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
              <article className="md:col-span-2 bg-warm-white border border-charcoal/15 rounded-lg overflow-hidden">
                <header className="px-5 py-3 text-white flex flex-wrap items-center justify-between gap-2" style={{ backgroundColor: GREEN }}>
                  <h3 className="font-heading font-bold text-base">Cross-Border Beneficiation Hub &mdash; Tobacco Value Chain</h3>
                  <span className="text-[10px] font-heading font-bold tracking-wider px-2 py-1 rounded text-foreground" style={{ backgroundColor: AMBER }}>BAND: USD 5M+ · OTI ISSUE 007</span>
                </header>
                <p className="p-5 text-sm text-slate-grey leading-relaxed">
                  115,000+ registered growers across Malawi, Zimbabwe, Mozambique, Tanzania and Zambia produced a 2026 crop projected at 360M kg, worth close to USD 1.2bn &mdash; yet roughly 9 in 10 tobacco dollars still leave the region as raw, unprocessed leaf. Zimbabwe&rsquo;s Tobacco Value Chain Transformation Plan II (2026&ndash;2030) targets value addition rising from 11% to 30% and 70% of production financing localised by plan end. Anchor/Institutional entry point: a cross-border beneficiation hub processing leaf from Zambia, Malawi, Mozambique and Tanzania, not Zimbabwean leaf alone.
                </p>
              </article>
              {corridors.filter((c) => c.name !== "Tobacco Value Chain").map((c) => (
                <div key={c.name} className="bg-warm-white border border-dashed border-charcoal/25 rounded-lg p-5">
                  <h3 className="font-heading font-bold text-sm" style={{ color: GREEN }}>{c.name}</h3>
                  <p className="mt-1 text-sm text-slate-grey">Register entries opening in OTI.</p>
                </div>
              ))}
            </div>

            <div className="mt-10 max-w-3xl space-y-3 text-sm text-slate-grey leading-relaxed">
              <h3 className="font-heading font-bold text-base text-foreground">Submit an opportunity</h3>
              <p>Operators with a documented need can submit to the Register via <a className="underline underline-offset-2 hover:text-onelife-red" href="mailto:maria.masiri26@gmail.com">maria.masiri26@gmail.com</a>. Submissions are screened for strategic relevance, feasibility, and readiness before publication.</p>
              <p>The Full Register is available to OTI subscribers and registered IMPEX delegates. Founding Delegates receive corridor-matched opportunity alerts ahead of general publication.</p>
            </div>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href={otiLink("register")} target="_blank" rel="noopener noreferrer" className={`${outlineCta} bg-warm-white`} style={{ borderColor: GREEN, color: GREEN }}>
                Subscribe to OTI to Access the Full Register <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#register" className={primaryCta}>Register as a Founding Delegate <ArrowRight className="w-4 h-4" /></a>
            </div>
          </div>
        </section>

        {/* 8. FUNDABILITY */}
        <section id="fundability" className="scroll-mt-32 px-4 sm:px-8 py-16 md:py-20">
          <div className="max-w-5xl mx-auto">
            <span className={eyebrow} style={{ color: GREEN }}>The SME Fundability Programme</span>
            <h2 className={h2}>Don&rsquo;t Just Attend. Arrive Bankable.</h2>
            <div className="mt-5 max-w-3xl space-y-4 text-base text-slate-grey leading-relaxed">
              <p>The single biggest reason African SMEs leave trade summits without deals is not the absence of capital. It is the absence of readiness. Investors are in the room. The deals are not structured.</p>
              <p>The IMPEX SME Fundability Programme is a pre-summit structuring and readiness process that takes enrolled delegates through business model documentation, financial presentation, corridor opportunity mapping, and deal introduction facilitation.</p>
              <p className="font-semibold text-foreground">Completion of the programme is the qualification for access to the IMPEX Deal Room.</p>
            </div>
            <ul className="mt-6 space-y-2 text-sm text-slate-grey list-disc pl-5">
              <li>Open to Founding Delegates and Early-Bird registrants</li>
              <li>Delivered digitally in the months preceding the summit</li>
              <li>Facilitated by Onelife&rsquo;s practitioner network across finance, audit, law, and trade logistics</li>
            </ul>
            <a href="#register" className={`${outlineCta} mt-6`} style={{ borderColor: GREEN, color: GREEN }}>
              Learn More About the Fundability Programme <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>

        {/* 9. REGISTRATION */}
        <section id="register" className="scroll-mt-32 px-4 sm:px-8 py-16 md:py-20 bg-foreground text-white">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-5">
              <span className={eyebrow} style={{ color: AMBER }}>Founding Delegate registration</span>
              <h2 className={h2}>Founding Delegate Status Is Limited</h2>
              <p className="text-base text-white/75 leading-relaxed">IMPEX 2027 is a managed, invitation-quality event. Founding Delegate status confers:</p>
              <ul className="space-y-2 text-sm text-white/80 list-disc pl-5">
                {delegateBenefits.map((b) => <li key={b}>{b}</li>)}
              </ul>
              <p className="text-sm text-white/65 leading-relaxed">After you submit, you&rsquo;ll receive an acknowledgement email and a short qualification questionnaire before Founding Delegate status is confirmed.</p>
            </div>
            <div className="bg-warm-white text-foreground rounded-lg p-6 sm:p-8">
              <LeadForm formId="impex-delegate" accent={GREEN} />
            </div>
          </div>
        </section>

        {/* 10. PARTNER ENQUIRY */}
        <section id="partner" className="scroll-mt-32 px-4 sm:px-8 py-16 md:py-20 bg-[#F4F4F0]">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-5">
              <span className={eyebrow} style={{ color: GREEN }}>Partner / sponsor enquiry</span>
              <h2 className={h2}>Category Partnerships Are Exclusive</h2>
              <p className="text-base text-slate-grey leading-relaxed">
                IMPEX 2027 offers a small number of category-exclusive partnership positions. No category is sold twice. If you are considering a partnership conversation, the time to start it is now &mdash; several categories are already in discussion.
              </p>
            </div>
            <div className="bg-warm-white rounded-lg p-6 sm:p-8 border border-charcoal/10">
              <LeadForm formId="impex-partner" accent={GREEN} />
            </div>
          </div>
        </section>

        {/* 11. ORGANISER */}
        <section className="px-4 sm:px-8 py-14">
          <div className="max-w-5xl mx-auto space-y-4 text-sm text-slate-grey leading-relaxed">
            <p>IMPEX 2027 is organised by Onelife Communications &amp; Events Company, Lusaka, Zambia &mdash; a multi-practice agency in communications, events, and trade intelligence.</p>
            <p>A Onelife Events production. OTI is an editorial brand of Onelife Communications.</p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 font-medium">
              <Link href="/" className="hover:text-onelife-red transition-colors">About Onelife</Link>
              <a href={otiLink("footer")} target="_blank" rel="noopener noreferrer" className="hover:text-onelife-red transition-colors">Subscribe to OTI</a>
              <a href="mailto:admin@onelife.co.zm" className="inline-flex items-center gap-1.5 hover:text-onelife-red transition-colors"><Mail className="w-4 h-4" />Contact the IMPEX team &mdash; admin@onelife.co.zm</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
