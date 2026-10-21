export { ROSE } from "@/components/site/ui";

export const segments = [
  { name: "The Builder", body: "Early-career professional building income and first investments" },
  { name: "The Ascender", body: "Senior leader or executive stepping into bigger financial decisions" },
  { name: "The Founder", body: "Business owner growing revenue and looking for capital and structure" },
  { name: "The Foundation", body: "Informal economy — chilimba, market trade, micro-business" },
  { name: "The Innovator", body: "Social entrepreneur or digital creator working out how to earn from impact" },
];

export const road = [
  { when: "Now – December 2026", what: "Sip & Read Book Club", body: "Monthly. Venue and first date announced soon." },
  { when: "January 2027", what: "SME Month", body: "Partnership announcements and activations." },
  { when: "February – March 2027", what: "Countdown", body: "Speakers, programme and tickets." },
  { when: "13 March 2027", what: "Summit day", body: "Smart Woman Summit '27, Lusaka." },
];

export const faqs = [
  { q: "When and where?", a: "Saturday, 13 March 2027, in Lusaka. We'll confirm the venue as soon as it is final — email the team from the Registrations page to ask for an update." },
  { q: "Who is it for?", a: "Women at every stage of their money journey: the Builder, the Ascender, the Founder, the Foundation and the Innovator. If you're wondering whether it's for you, it is — tell us which of the five you are when you register." },
  { q: "How do I get tickets?", a: "Ticketing opens from February 2027. Email the team from the Registrations page to ask for ticket updates." },
  { q: "Can my organisation partner?", a: "Yes. Use the partner enquiry form on the Registrations page to email the team." },
  { q: "How is SWS different from a networking event?", a: "SWS is a year-round financial literacy platform, and the Summit is its flagship day. It starts with the conversations about money that women don't usually have out loud — and it keeps going long after the day itself." },
];

export const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "");
