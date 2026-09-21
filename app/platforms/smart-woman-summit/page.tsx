import { ArrowRight, CalendarDays, MapPin, MessageCircle, Mail } from "lucide-react";
import { LeadForm } from "@/components/forms/LeadForm";
import { Tracking } from "@/components/Tracking";
import { getSingleton } from "@/lib/content/read";
import type { SiteSettings } from "@/lib/content/read";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";

const ROSE = "#D6336C";

export const metadata: Metadata = {
  title: "Smart Woman Summit 2027 | Money Out Loud | OneLife",
  description:
    "Smart Woman Summit '27 — Money Out Loud. Saturday, 13 March 2027, Lusaka. Register your interest in Zambia's most established women's financial literacy platform.",
};

const segments = [
  { name: "The Builder", body: "Early-career professional building income and first investments" },
  { name: "The Ascender", body: "Senior leader or executive stepping into bigger financial decisions" },
  { name: "The Founder", body: "Business owner growing revenue and looking for capital and structure" },
  { name: "The Foundation", body: "Informal economy — chilimba, market trade, micro-business" },
  { name: "The Innovator", body: "Social entrepreneur or digital creator working out how to earn from impact" },
];

const road = [
  { when: "Now – December 2026", what: "Sip & Read Book Club", body: "Monthly. Venue and first date announced soon." },
  { when: "January 2027", what: "SME Month", body: "Partnership announcements and activations." },
  { when: "February – March 2027", what: "Countdown", body: "Speakers, programme and tickets." },
  { when: "13 March 2027", what: "Summit day", body: "Smart Woman Summit '27, Lusaka." },
];

const faqs = [
  { q: "When and where?", a: "Saturday, 13 March 2027, in Lusaka. We'll confirm the venue as soon as it is final — register your interest and you'll hear first." },
  { q: "Who is it for?", a: "Women at every stage of their money journey: the Builder, the Ascender, the Founder, the Foundation and the Innovator. If you're wondering whether it's for you, it is — tell us which of the five you are when you register." },
  { q: "How do I get tickets?", a: "Ticketing opens from February 2027. Register your interest now and you'll be told the moment it does." },
  { q: "Can my organisation partner?", a: "Yes. Use the partner enquiry form below and the team will come back to you." },
  { q: "How is SWS different from a networking event?", a: "SWS is a year-round financial literacy platform, and the Summit is its flagship day. It starts with the conversations about money that women don't usually have out loud — and it keeps going long after the day itself." },
];

const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "");

const settingsFallback: SiteSettings = {
  address: "Lusaka, Zambia",
  email: "info@onelife.co.zm",
  phone: "",
  linkedinUrl: "",
  xUrl: "",
  instagramUrl: "",
  footerBrandBlurb: "",
  copyrightText: "",
};

const eyebrow = "text-xs font-heading font-semibold uppercase tracking-[0.2em] block mb-3";
const h2 = "font-heading font-bold text-2xl md:text-3xl text-foreground tracking-tight leading-tight";

export default async function SmartWomanSummitPage() {
  const settings = await getSingleton<SiteSettings>("site-settings", settingsFallback);

  return (
    <div className="bg-warm-white text-foreground">
      <Tracking />
      <main>
        {/* HERO */}
        <section className="bg-foreground text-white px-4 sm:px-8 py-20 md:py-28">
          <div className="max-w-5xl mx-auto">
            <span className={eyebrow} style={{ color: ROSE }}>Smart Woman Summit &rsquo;27</span>
            <h1 className="font-heading font-bold text-4xl sm:text-5xl md:text-7xl tracking-tight leading-[1.05]">
              Money Out Loud.
            </h1>
            <p className="mt-5 text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">
              Your money mindset. Your relationship with money.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-2 text-sm font-medium text-white/90">
              <span className="flex items-center gap-2"><CalendarDays className="w-4 h-4" style={{ color: ROSE }} />Saturday, 13 March 2027</span>
              <span className="flex items-center gap-2"><MapPin className="w-4 h-4" style={{ color: ROSE }} />Lusaka</span>
            </div>
            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <a href="#register" className="inline-flex items-center justify-center gap-2 bg-onelife-red hover:bg-[#d1171e] text-white font-heading font-semibold text-xs uppercase tracking-wider px-8 py-4 rounded transition-colors">
                Register your interest <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#partner" className="inline-flex items-center justify-center gap-2 border border-white/40 hover:border-white text-white font-heading font-semibold text-xs uppercase tracking-wider px-8 py-4 rounded transition-colors">
                Partner with us
              </a>
            </div>
          </div>
        </section>

        {/* WHAT SWS IS */}
        <section className="px-4 sm:px-8 py-16 md:py-20">
          <div className="max-w-3xl mx-auto space-y-5">
            <span className={eyebrow} style={{ color: ROSE }}>What SWS is</span>
            <h2 className={h2}>Zambia&rsquo;s most established women&rsquo;s financial literacy platform.</h2>
            <p className="text-base text-slate-grey leading-relaxed">
              Smart Woman Summit is founded and run by OneLife, and this is its 4th edition. Since 2023 it has brought women together to talk honestly about money — earning it, growing it, protecting it.
            </p>
            <p className="text-base text-slate-grey leading-relaxed">
              SWS isn&rsquo;t just one day a year. It&rsquo;s a year-round platform, and the Summit is its flagship day. The Sip &amp; Read Book Club and SME Month are part of the same story — a road you can join right now.
            </p>
          </div>
        </section>

        {/* THEME */}
        <section className="px-4 sm:px-8 py-16 md:py-20 bg-[#F4F4F0]">
          <div className="max-w-3xl mx-auto space-y-5">
            <span className={eyebrow} style={{ color: ROSE }}>The 2027 theme</span>
            <h2 className={h2}>Money Out Loud.</h2>
            <p className="text-base text-slate-grey leading-relaxed">
              Most of us learned about money in whispers. What we earn. What we owe. What we&rsquo;re afraid to ask. Those are the conversations women don&rsquo;t have out loud &mdash; and they shape every financial decision we make.
            </p>
            <p className="text-base text-slate-grey leading-relaxed">
              In 2027 we&rsquo;re turning the volume up on your money mindset and your relationship with money: what you believe, what you were taught, and what you want it to look like from here.
            </p>
          </div>
        </section>

        {/* FIVE WOMEN */}
        <section className="px-4 sm:px-8 py-16 md:py-20">
          <div className="max-w-5xl mx-auto">
            <span className={eyebrow} style={{ color: ROSE }}>Who it&rsquo;s for</span>
            <h2 className={h2}>The five women of SWS.</h2>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {segments.map((s) => (
                <div key={s.name} className="border border-charcoal/15 rounded-lg p-6 border-t-4" style={{ borderTopColor: ROSE }}>
                  <h3 className="font-heading font-bold text-lg text-foreground">{s.name}</h3>
                  <p className="mt-2 text-sm text-slate-grey leading-relaxed">{s.body}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-base font-medium text-foreground">
              See yourself here? <a href="#register" className="underline underline-offset-4" style={{ color: ROSE }}>Register and tell us which one you are.</a>
            </p>
          </div>
        </section>

        {/* ROAD TO MARCH */}
        <section className="px-4 sm:px-8 py-16 md:py-20 bg-[#F4F4F0]">
          <div className="max-w-5xl mx-auto">
            <span className={eyebrow} style={{ color: ROSE }}>The road to March</span>
            <h2 className={h2}>A journey you can join now.</h2>
            <ol className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-6">
              {road.map((step, i) => (
                <li key={step.when} className="relative pl-6 md:pl-0 md:pt-6 border-l-2 md:border-l-0 md:border-t-2" style={{ borderColor: ROSE }}>
                  <span className="hidden md:block absolute -top-[7px] left-0 w-3 h-3 rounded-full" style={{ backgroundColor: ROSE }} />
                  <span className="md:hidden absolute -left-[7px] top-1 w-3 h-3 rounded-full" style={{ backgroundColor: ROSE }} />
                  <span className="text-[11px] font-heading font-semibold uppercase tracking-wider text-slate-grey">{step.when}</span>
                  <h3 className="mt-1 font-heading font-bold text-base text-foreground">{step.what}</h3>
                  <p className="mt-1 text-sm text-slate-grey leading-relaxed">{step.body}</p>
                  <span className="sr-only">Step {i + 1} of {road.length}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* TRACK RECORD */}
        <section className="px-4 sm:px-8 py-16 md:py-20">
          <div className="max-w-5xl mx-auto">
            <span className={eyebrow} style={{ color: ROSE }}>Track record</span>
            <h2 className={h2}>Built edition by edition.</h2>
            <div className="mt-10 grid grid-cols-2 gap-4 max-w-md">
              <div className="border border-charcoal/15 rounded-lg p-6">
                <p className="font-heading font-bold text-4xl" style={{ color: ROSE }}>4th</p>
                <p className="mt-1 text-sm text-slate-grey">edition in 2027</p>
              </div>
              <div className="border border-charcoal/15 rounded-lg p-6">
                <p className="font-heading font-bold text-4xl" style={{ color: ROSE }}>2023</p>
                <p className="mt-1 text-sm text-slate-grey">the year it began</p>
              </div>
            </div>
          </div>
        </section>

        {/* PARTNER */}
        <section id="partner" className="scroll-mt-32 px-4 sm:px-8 py-16 md:py-20 bg-foreground text-white">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-5">
              <span className={eyebrow} style={{ color: ROSE }}>Partner with us</span>
              <h2 className="font-heading font-bold text-2xl md:text-3xl tracking-tight leading-tight">Reach women who are ready to act on their money.</h2>
              <p className="text-base text-white/75 leading-relaxed">
                Partners get access to a clearly defined audience of women across five financial profiles, co-branded content that speaks to them directly, and outcomes we measure and share.
              </p>
              <p className="text-base text-white/75 leading-relaxed">
                Tell us how you&rsquo;d like to get involved and we&rsquo;ll send the full partner information on request.
              </p>
            </div>
            <div className="bg-warm-white text-foreground rounded-lg p-6 sm:p-8">
              <LeadForm formId="sws-partner" accent={ROSE} />
            </div>
          </div>
        </section>

        {/* SPEAKERS */}
        <section className="px-4 sm:px-8 py-16 md:py-20">
          <div className="max-w-5xl mx-auto">
            <span className={eyebrow} style={{ color: ROSE }}>Speakers &amp; programme</span>
            <h2 className={h2}>Speakers announced from January 2027.</h2>
          </div>
        </section>

        {/* REGISTER */}
        <section id="register" className="scroll-mt-32 px-4 sm:px-8 py-16 md:py-20 bg-[#F4F4F0]">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-5">
              <span className={eyebrow} style={{ color: ROSE }}>Register your interest</span>
              <h2 className={h2}>Be part of Money Out Loud.</h2>
              <p className="text-base text-slate-grey leading-relaxed">
                Tell us who you are and we&rsquo;ll keep you in the loop on the road to 13 March &mdash; the Book Club, SME Month, and the moment tickets open.
              </p>
              <p className="text-sm text-slate-grey leading-relaxed">
                Tickets aren&rsquo;t on sale yet. Ticketing opens from February 2027.
              </p>
            </div>
            <div className="bg-warm-white rounded-lg p-6 sm:p-8 border border-charcoal/10">
              <LeadForm formId="sws-register" accent={ROSE} />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-4 sm:px-8 py-16 md:py-20">
          <div className="max-w-3xl mx-auto">
            <span className={eyebrow} style={{ color: ROSE }}>FAQ</span>
            <h2 className={h2}>Good questions.</h2>
            <div className="mt-8 divide-y divide-charcoal/15 border-y border-charcoal/15">
              {faqs.map((f) => (
                <details key={f.q} className="group py-4">
                  <summary className="flex items-center justify-between gap-4 cursor-pointer list-none font-heading font-semibold text-base text-foreground">
                    {f.q}
                    <span className="text-xl leading-none transition-transform group-open:rotate-45" style={{ color: ROSE }}>+</span>
                  </summary>
                  <p className="mt-3 text-sm text-slate-grey leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="px-4 sm:px-8 pb-16">
          <div className="max-w-3xl mx-auto flex flex-col sm:flex-row sm:items-center gap-4 text-sm">
            <span className="font-heading font-semibold text-foreground">Questions? Talk to OneLife.</span>
            <a href={`mailto:${settings.email}`} className="inline-flex items-center gap-2 text-slate-grey hover:text-onelife-red transition-colors">
              <Mail className="w-4 h-4" />{settings.email}
            </a>
            {whatsappNumber && (
              <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-slate-grey hover:text-onelife-red transition-colors">
                <MessageCircle className="w-4 h-4" />Chat on WhatsApp
              </a>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
