// Single source of truth for the public lead forms: the pages render from
// these definitions and the API route validates against them, so a field can
// never be shown without being accepted (or accepted without being shown).

export type FieldType = "text" | "email" | "tel" | "select" | "textarea" | "checkbox";

export interface FormField {
  name: string;
  label: string;
  type: FieldType;
  required?: boolean;
  options?: { value: string; label: string }[];
  placeholder?: string;
  hint?: string;
  /** Only shown (and validated) while another field has this value. */
  showWhen?: { field: string; equals: string };
  maxLength?: number;
}

export interface FormDefinition {
  id: string;
  submitLabel: string;
  successTitle: string;
  successBody: string;
  /** Fired to Meta Pixel / GA4 on success. */
  conversion: { pixelEvent: string; gaEvent: string };
  /** Default recipient for the notification email; the env var overrides it. */
  notifyTo: string;
  notifyEnv: string;
  /** Send the submitter an acknowledgement email (needs an `email` field). */
  acknowledge?: { subject: string; body: string };
  fields: FormField[];
}

const opts = (values: string[]) => values.map((v) => ({ value: v, label: v }));

export const SWS_SEGMENTS = [
  { value: "The Builder", label: "The Builder — early-career professional building income and first investments" },
  { value: "The Ascender", label: "The Ascender — senior leader or executive stepping into bigger financial decisions" },
  { value: "The Founder", label: "The Founder — business owner growing revenue and looking for capital and structure" },
  { value: "The Foundation", label: "The Foundation — informal economy: chilimba, market trade, micro-business" },
  { value: "The Innovator", label: "The Innovator — social entrepreneur or digital creator working out how to earn from impact" },
];

export const IMPEX_CORRIDORS = [
  "Battery Value Chain",
  "Lobito Corridor",
  "Zambia Mining Supply Chain",
  "Zimbabwe Lithium Processing",
  "Agro-Processing & Storage",
  "Tobacco Value Chain",
];

export const IMPEX_BANDS = [
  "Ground Floor (under USD 100K)",
  "Middle Market (USD 100K – 5M)",
  "Anchor / Institutional (USD 5M+)",
];

const CONSENT_LABEL =
  "I agree to OneLife storing my details and contacting me about Smart Woman Summit. I can withdraw this at any time.";

export const FORMS: Record<string, FormDefinition> = {
  "sws-register": {
    id: "sws-register",
    submitLabel: "Register your interest",
    successTitle: "You're on the list.",
    successBody:
      "Thank you — we'll keep you in the loop on the road to 13 March 2027. If you said yes to the Sip & Read Book Club, watch WhatsApp for your invite.",
    conversion: { pixelEvent: "Lead", gaEvent: "generate_lead" },
    notifyTo: "admin@onelife.co.zm",
    notifyEnv: "SWS_NOTIFY_TO",
    fields: [
      { name: "name", label: "Name", type: "text", required: true, maxLength: 120 },
      { name: "email", label: "Email", type: "email", required: true, maxLength: 200 },
      {
        name: "whatsapp",
        label: "WhatsApp number",
        type: "tel",
        required: true,
        placeholder: "e.g. +260 97 000 0000",
        hint: "We use WhatsApp for the Book Club group invite.",
        maxLength: 30,
      },
      {
        name: "segment",
        label: "Which of the five women are you?",
        type: "select",
        required: true,
        options: SWS_SEGMENTS,
      },
      {
        name: "bookClub",
        label: "I'm interested in the Sip & Read Book Club",
        type: "checkbox",
      },
      {
        name: "source",
        label: "How did you hear about SWS?",
        type: "select",
        options: opts(["Facebook", "Instagram", "TikTok", "WhatsApp", "LinkedIn", "Friend or colleague", "Past edition", "Other"]),
      },
      { name: "consent", label: CONSENT_LABEL, type: "checkbox", required: true },
    ],
  },
  "sws-partner": {
    id: "sws-partner",
    submitLabel: "Send partner enquiry",
    successTitle: "Enquiry received.",
    successBody: "Thank you — a member of the OneLife team will be in touch about partnering with Smart Woman Summit.",
    conversion: { pixelEvent: "Contact", gaEvent: "generate_lead" },
    notifyTo: "admin@onelife.co.zm",
    notifyEnv: "SWS_NOTIFY_TO",
    fields: [
      { name: "name", label: "Name", type: "text", required: true, maxLength: 120 },
      { name: "organisation", label: "Organisation", type: "text", required: true, maxLength: 160 },
      { name: "role", label: "Role", type: "text", required: true, maxLength: 120 },
      { name: "email", label: "Email", type: "email", required: true, maxLength: 200 },
      { name: "phone", label: "Phone", type: "tel", required: true, maxLength: 30 },
      {
        name: "interest",
        label: "Area of interest",
        type: "select",
        required: true,
        options: opts(["Speaker", "Activation", "Platform partner", "Other"]),
      },
      { name: "message", label: "Message", type: "textarea", maxLength: 2000 },
    ],
  },
  "impex-delegate": {
    id: "impex-delegate",
    submitLabel: "Register Now",
    successTitle: "Registration received.",
    successBody:
      "Thank you. You'll get an acknowledgement email shortly, followed by a short qualification questionnaire before Founding Delegate status is confirmed.",
    conversion: { pixelEvent: "CompleteRegistration", gaEvent: "sign_up" },
    notifyTo: "maria.masiri26@gmail.com",
    notifyEnv: "IMPEX_DELEGATE_NOTIFY_TO",
    acknowledge: {
      subject: "IMPEX 2027 — Founding Delegate registration received",
      body:
        "Thank you for registering your interest in IMPEX 2027 as a Founding Delegate.\n\nWe'll send a short qualification questionnaire shortly. Founding Delegate status is confirmed once it is complete. Dates and venue are announced to OTI subscribers and Founding Delegates first.\n\n— The IMPEX team, Onelife Communications & Events Company",
    },
    fields: [
      { name: "name", label: "Full name", type: "text", required: true, maxLength: 120 },
      { name: "email", label: "Email", type: "email", required: true, maxLength: 200, hint: "Your acknowledgement and questionnaire are sent here." },
      { name: "organisation", label: "Organisation name", type: "text", required: true, maxLength: 160 },
      { name: "country", label: "Country of operation", type: "text", required: true, maxLength: 80 },
      { name: "corridor", label: "Primary corridor of interest", type: "select", required: true, options: opts(IMPEX_CORRIDORS) },
      { name: "band", label: "Transaction band of interest", type: "select", required: true, options: opts(IMPEX_BANDS) },
      {
        name: "source",
        label: "How did you hear about IMPEX?",
        type: "select",
        options: opts(["OTI", "LinkedIn", "WhatsApp", "Referral", "Event", "Other"]),
      },
    ],
  },
  "impex-partner": {
    id: "impex-partner",
    submitLabel: "Send Enquiry",
    successTitle: "Enquiry received.",
    successBody: "Thank you — the IMPEX team will be in touch about your partnership enquiry.",
    conversion: { pixelEvent: "Contact", gaEvent: "generate_lead" },
    notifyTo: "admin@onelife.co.zm",
    notifyEnv: "IMPEX_PARTNER_NOTIFY_TO",
    fields: [
      { name: "name", label: "Full name", type: "text", required: true, maxLength: 120 },
      { name: "email", label: "Email", type: "email", required: true, maxLength: 200 },
      { name: "organisation", label: "Organisation", type: "text", required: true, maxLength: 160 },
      { name: "country", label: "Country", type: "text", required: true, maxLength: 80 },
      {
        name: "category",
        label: "Partnership category of interest",
        type: "select",
        required: true,
        options: opts([
          "Capital Access Track",
          "Corridor Sponsor",
          "Corridor Intelligence Partner",
          "Deal Room Sponsor",
          "Host",
          "Other",
        ]),
      },
      {
        name: "corridor",
        label: "Which corridor?",
        type: "select",
        required: true,
        options: opts(IMPEX_CORRIDORS),
        showWhen: { field: "category", equals: "Corridor Sponsor" },
      },
      { name: "message", label: "Brief note on partnership intent", type: "textarea", maxLength: 1000 },
    ],
  },
};

export function isVisible(field: FormField, values: Record<string, unknown>) {
  return !field.showWhen || values[field.showWhen.field] === field.showWhen.equals;
}
