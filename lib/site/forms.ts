export type FieldType = "text" | "email" | "tel" | "select" | "textarea" | "checkbox";

export interface FormField {
  name: string;
  label: string;
  type: FieldType;
  required?: boolean;
  options?: { value: string; label: string }[];
  placeholder?: string;
  hint?: string;
  showWhen?: { field: string; equals: string };
  maxLength?: number;
}

export interface FormDefinition {
  id: string;
  subject: string;
  submitLabel: string;
  fields: FormField[];
}

const options = (values: string[]) => values.map((value) => ({ value, label: value }));

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

const consentLabel =
  "I agree to be contacted about Smart Woman Summit. I can withdraw this consent at any time.";

export const FORMS = {
  "sws-register": {
    id: "sws-register",
    subject: "Smart Woman Summit — register your interest",
    submitLabel: "Register your interest",
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
      { name: "segment", label: "Which of the five women are you?", type: "select", required: true, options: SWS_SEGMENTS },
      { name: "bookClub", label: "I'm interested in the Sip & Read Book Club", type: "checkbox" },
      { name: "source", label: "How did you hear about SWS?", type: "select", options: options(["Facebook", "Instagram", "TikTok", "WhatsApp", "LinkedIn", "Friend or colleague", "Past edition", "Other"]) },
      { name: "consent", label: consentLabel, type: "checkbox", required: true },
    ],
  },
  "sws-partner": {
    id: "sws-partner",
    subject: "Smart Woman Summit — partnership enquiry",
    submitLabel: "Send partner enquiry",
    fields: [
      { name: "name", label: "Name", type: "text", required: true, maxLength: 120 },
      { name: "organisation", label: "Organisation", type: "text", required: true, maxLength: 160 },
      { name: "role", label: "Role", type: "text", required: true, maxLength: 120 },
      { name: "email", label: "Email", type: "email", required: true, maxLength: 200 },
      { name: "phone", label: "Phone", type: "tel", required: true, maxLength: 30 },
      { name: "interest", label: "Area of interest", type: "select", required: true, options: options(["Speaker", "Activation", "Platform partner", "Other"]) },
      { name: "message", label: "Message", type: "textarea", maxLength: 2000 },
    ],
  },
  "impex-delegate": {
    id: "impex-delegate",
    subject: "IMPEX — Founding Delegate registration",
    submitLabel: "Register Now",
    fields: [
      { name: "name", label: "Full name", type: "text", required: true, maxLength: 120 },
      { name: "email", label: "Email", type: "email", required: true, maxLength: 200, hint: "The IMPEX team can reply to this address with next steps." },
      { name: "organisation", label: "Organisation name", type: "text", required: true, maxLength: 160 },
      { name: "country", label: "Country of operation", type: "text", required: true, maxLength: 80 },
      { name: "corridor", label: "Primary corridor of interest", type: "select", required: true, options: options(IMPEX_CORRIDORS) },
      { name: "band", label: "Transaction band of interest", type: "select", required: true, options: options(IMPEX_BANDS) },
      { name: "source", label: "How did you hear about IMPEX?", type: "select", options: options(["OTI", "LinkedIn", "WhatsApp", "Referral", "Event", "Other"]) },
    ],
  },
  "impex-partner": {
    id: "impex-partner",
    subject: "IMPEX — partnership enquiry",
    submitLabel: "Send Enquiry",
    fields: [
      { name: "name", label: "Full name", type: "text", required: true, maxLength: 120 },
      { name: "email", label: "Email", type: "email", required: true, maxLength: 200 },
      { name: "organisation", label: "Organisation", type: "text", required: true, maxLength: 160 },
      { name: "country", label: "Country", type: "text", required: true, maxLength: 80 },
      { name: "category", label: "Partnership category of interest", type: "select", required: true, options: options(["Capital Access Track", "Corridor Sponsor", "Corridor Intelligence Partner", "Deal Room Sponsor", "Host", "Other"]) },
      { name: "corridor", label: "Which corridor?", type: "select", required: true, options: options(IMPEX_CORRIDORS), showWhen: { field: "category", equals: "Corridor Sponsor" } },
      { name: "message", label: "Brief note on partnership intent", type: "textarea", maxLength: 1000 },
    ],
  },
  contact: {
    id: "contact",
    subject: "OneLife — general enquiry",
    submitLabel: "Send message",
    fields: [
      { name: "name", label: "Full name", type: "text", required: true, maxLength: 120 },
      { name: "email", label: "Email", type: "email", required: true, maxLength: 200 },
      { name: "organisation", label: "Organisation", type: "text", maxLength: 160 },
      { name: "topic", label: "What is this about?", type: "select", required: true, options: options(["General enquiry", "Capabilities & services", "Partnership", "Media"]) },
      { name: "message", label: "Message", type: "textarea", required: true, maxLength: 2000 },
    ],
  },
  "health-corridor": {
    id: "health-corridor",
    subject: "OneLife Health Corridor — enquiry",
    submitLabel: "Send enquiry",
    fields: [
      { name: "name", label: "Full name", type: "text", required: true, maxLength: 120 },
      { name: "email", label: "Email", type: "email", required: true, maxLength: 200 },
      { name: "organisation", label: "Organisation", type: "text", maxLength: 160 },
      { name: "interest", label: "I am a…", type: "select", required: true, options: options(["Hospital or clinic", "Health insurer", "Government or regulator", "Patient or family", "Other"]) },
      { name: "message", label: "Message", type: "textarea", required: true, maxLength: 2000 },
    ],
  },
} satisfies Record<string, FormDefinition>;

export function isVisible(field: FormField, values: Record<string, unknown>) {
  return !field.showWhen || values[field.showWhen.field] === field.showWhen.equals;
}
