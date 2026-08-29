import type {
  CollectionDefinition,
  ContentDefinition,
  FieldSchema,
  SingletonDefinition,
} from "./types";

// This is the single source of truth for every editable piece of content on
// the site: what fields it has, what kind of input each one gets in the
// admin UI, and how each list is labeled. Nothing else needs to change to
// add a new editable field or a whole new editable section — the generic
// admin CRUD (app/admin, app/api/admin) and the Prisma Singleton/Item
// tables (prisma/schema.prisma) read this file, not the other way around.
//
// `key` is the Singleton.key or Item.collection value in the database.

const boolSelect: Pick<FieldSchema, "type" | "options"> = {
  type: "select",
  options: [
    { value: "true", label: "Yes" },
    { value: "false", label: "No" },
  ],
};

const singletons: SingletonDefinition[] = [
  {
    kind: "singleton",
    key: "site-settings",
    label: "Site Settings",
    description: "Contact details and social links used in the nav bar and footer.",
    fields: [
      { key: "address", label: "Address", type: "text" },
      { key: "email", label: "Contact Email", type: "text" },
      { key: "phone", label: "Phone", type: "text" },
      { key: "linkedinUrl", label: "LinkedIn URL", type: "url" },
      { key: "xUrl", label: "X (Twitter) URL", type: "url" },
      { key: "instagramUrl", label: "Instagram URL", type: "url" },
      {
        key: "footerBrandBlurb",
        label: "Footer Description",
        type: "textarea",
      },
      { key: "copyrightText", label: "Footer Copyright Line", type: "text" },
    ],
  },
  {
    kind: "singleton",
    key: "hero",
    label: "Homepage Hero",
    fields: [
      { key: "headline", label: "Headline", type: "textarea", rows: 3 },
      { key: "backgroundImage", label: "Background Image", type: "image" },
    ],
  },
  {
    kind: "singleton",
    key: "who-we-are-home",
    label: "Homepage “Who We Are” Section",
    fields: [
      { key: "eyebrow", label: "Eyebrow", type: "text" },
      { key: "heading", label: "Heading", type: "textarea", rows: 2 },
      { key: "quote", label: "Pull Quote", type: "textarea" },
      { key: "paragraph", label: "Paragraph", type: "textarea" },
      {
        key: "heroImage",
        label: "Main Image",
        type: "image",
        helpText: "The larger of the two photos.",
      },
      {
        key: "secondaryImage",
        label: "Secondary Image",
        type: "image",
        helpText: "The smaller stacked photo next to it.",
      },
    ],
  },
  {
    kind: "singleton",
    key: "capabilities-home-intro",
    label: "Homepage Capabilities Intro",
    fields: [
      { key: "eyebrow", label: "Eyebrow", type: "text" },
      { key: "heading", label: "Heading", type: "text" },
      { key: "description", label: "Description", type: "textarea" },
    ],
  },
  {
    kind: "singleton",
    key: "capabilities-intro",
    label: "Capabilities Page Intro",
    fields: [
      { key: "eyebrow", label: "Eyebrow", type: "text" },
      { key: "description", label: "Description", type: "textarea" },
    ],
  },
  {
    kind: "singleton",
    key: "capabilities-cta",
    label: "Capabilities Page Closing Banner",
    fields: [{ key: "heading", label: "Heading", type: "text" }],
  },
  {
    kind: "singleton",
    key: "track-record-home",
    label: "Homepage Track Record Section",
    fields: [{ key: "backgroundImage", label: "Background Image", type: "image" }],
  },
  {
    kind: "singleton",
    key: "track-record-intro",
    label: "Track Record Page Intro",
    fields: [
      { key: "eyebrow", label: "Eyebrow", type: "text" },
      { key: "description", label: "Description", type: "textarea" },
    ],
  },
  {
    kind: "singleton",
    key: "ventures-intro",
    label: "Ventures Page Intro",
    fields: [
      { key: "eyebrow", label: "Eyebrow", type: "text" },
      { key: "description", label: "Description", type: "textarea" },
    ],
  },
  {
    kind: "singleton",
    key: "who-we-are-hero",
    label: "Who We Are Page Intro",
    fields: [
      { key: "eyebrow", label: "Eyebrow", type: "text" },
      { key: "description", label: "Description", type: "textarea" },
    ],
  },
  {
    kind: "singleton",
    key: "imperfect-philosophy",
    label: "“Not A Perfect Circle” Section",
    fields: [
      { key: "eyebrow", label: "Eyebrow", type: "text" },
      { key: "heading", label: "Heading", type: "text" },
      { key: "paragraph1", label: "Paragraph 1", type: "textarea" },
      { key: "paragraph2", label: "Paragraph 2", type: "textarea" },
      { key: "quote", label: "Quote", type: "text" },
    ],
  },
  {
    kind: "singleton",
    key: "core-values-intro",
    label: "Core Values Section Intro",
    fields: [
      { key: "eyebrow", label: "Eyebrow", type: "text" },
      { key: "heading", label: "Heading", type: "text" },
    ],
  },
  {
    kind: "singleton",
    key: "four-phase-intro",
    label: "Operating Methodology Section Intro",
    fields: [
      { key: "eyebrow", label: "Eyebrow", type: "text" },
      { key: "description", label: "Description", type: "textarea" },
    ],
  },
  {
    kind: "singleton",
    key: "leadership-home-intro",
    label: "Homepage Leadership Section Intro",
    fields: [
      { key: "eyebrow", label: "Eyebrow", type: "text" },
      { key: "heading", label: "Heading", type: "textarea", rows: 2 },
    ],
  },
  {
    kind: "singleton",
    key: "leadership-alliance-intro",
    label: "Who We Are Leadership Section Intro",
    fields: [
      { key: "eyebrow", label: "Eyebrow", type: "text" },
      { key: "heading", label: "Heading", type: "text" },
      { key: "description", label: "Description", type: "textarea" },
    ],
  },
];

const highlightItemFields: FieldSchema[] = [
  { key: "icon", label: "Icon", type: "icon" },
  { key: "title", label: "Title", type: "text" },
  { key: "body", label: "Description", type: "textarea" },
];

const collections: CollectionDefinition[] = [
  {
    kind: "list",
    key: "hero-feature-cards",
    label: "Homepage Hero Feature Cards",
    titleField: "title",
    subtitleField: "tag",
    fields: [
      { key: "icon", label: "Icon", type: "icon" },
      { key: "title", label: "Title", type: "text" },
      { key: "body", label: "Description", type: "textarea" },
      { key: "tag", label: "Tag", type: "text" },
      {
        key: "variant",
        label: "Style",
        type: "select",
        options: [
          { value: "light", label: "Light card" },
          { value: "dark", label: "Dark / red card" },
        ],
      },
    ],
  },
  {
    kind: "list",
    key: "who-we-are-home-values",
    label: "Homepage “Who We Are” Checklist",
    titleField: "text",
    fields: [{ key: "text", label: "Text", type: "text" }],
  },
  {
    kind: "list",
    key: "capabilities-home",
    label: "Homepage Capability Cards",
    titleField: "title",
    subtitleField: "subtitle",
    fields: [
      { key: "title", label: "Title", type: "text" },
      { key: "subtitle", label: "Subtitle", type: "text" },
      { key: "description", label: "Description", type: "textarea" },
      { key: "icon", label: "Icon", type: "icon" },
      { key: "image", label: "Image", type: "image" },
      {
        key: "link",
        label: "Link",
        type: "text",
        helpText: 'e.g. "/capabilities#communications" — should match a Capability Section slug below.',
      },
    ],
  },
  {
    kind: "list",
    key: "capability-sections",
    label: "Capability Sections (Capabilities Page)",
    titleField: "title",
    subtitleField: "badge",
    fields: [
      {
        key: "slug",
        label: "Slug",
        type: "text",
        helpText: 'Used as the page anchor, e.g. "communications".',
      },
      { key: "badge", label: "Badge", type: "text" },
      { key: "title", label: "Title", type: "text" },
      { key: "tagline", label: "Tagline", type: "text" },
      { key: "description", label: "Description", type: "textarea" },
      { key: "icon", label: "Icon", type: "icon" },
      { key: "image", label: "Image", type: "image" },
      { key: "proofPoint", label: "Proof Point", type: "text" },
      {
        key: "deliverables",
        label: "Core Deliverables",
        type: "stringlist",
      },
    ],
  },
  {
    kind: "list",
    key: "track-record-stats",
    label: "Track Record Stats",
    titleField: "label",
    subtitleField: "value",
    description: "Shown on the homepage and the Track Record page.",
    fields: [
      { key: "value", label: "Value", type: "text", helpText: 'e.g. "14+"' },
      { key: "label", label: "Label", type: "text" },
      { key: "icon", label: "Icon", type: "icon" },
    ],
  },
  {
    kind: "list",
    key: "track-record-milestones",
    label: "Track Record Milestones",
    titleField: "title",
    subtitleField: "year",
    fields: [
      { key: "year", label: "Year", type: "text" },
      { key: "title", label: "Title", type: "text" },
      { key: "description", label: "Description", type: "textarea" },
    ],
  },
  {
    kind: "list",
    key: "track-record-case-studies",
    label: "Track Record Case Studies",
    titleField: "title",
    subtitleField: "category",
    fields: [
      { key: "category", label: "Category", type: "text" },
      { key: "title", label: "Title", type: "text" },
      { key: "challenge", label: "Challenge", type: "textarea" },
      { key: "solution", label: "Strategic Approach", type: "textarea" },
      { key: "impact", label: "Outcome", type: "textarea" },
      { key: "image", label: "Image", type: "image" },
    ],
  },
  {
    kind: "list",
    key: "staff",
    label: "Staff",
    titleField: "name",
    subtitleField: "role",
    description:
      "Add, edit, or remove team members here. The featured member gets the large photo treatment on the homepage and Who We Are page.",
    fields: [
      { key: "name", label: "Name", type: "text" },
      { key: "role", label: "Role / Title", type: "text" },
      { key: "bio", label: "Bio", type: "textarea" },
      { key: "photoUrl", label: "Photo", type: "image" },
      {
        key: "isFeatured",
        label: "Featured (large photo treatment)",
        ...boolSelect,
      },
      {
        key: "highlights",
        label: "Highlights",
        type: "objectlist",
        itemFields: highlightItemFields,
        helpText: "Short icon + title + description highlights shown next to this person.",
      },
    ],
  },
  {
    kind: "list",
    key: "alliance-highlights",
    label: "Leadership & Delivery Model Highlights",
    titleField: "title",
    description: 'Shown next to the featured staff member on the Who We Are page (e.g. "Owned Convening Power").',
    fields: highlightItemFields,
  },
  {
    kind: "list",
    key: "platforms",
    label: "Platforms",
    titleField: "name",
    subtitleField: "category",
    description:
      "Each platform gets its own page at /platforms/[slug], plus a card on the homepage and a link in the nav and footer.",
    fields: [
      { key: "name", label: "Name", type: "text" },
      {
        key: "slug",
        label: "Slug",
        type: "text",
        helpText: 'URL path, e.g. "impex" → /platforms/impex. Letters, numbers, and dashes only.',
      },
      { key: "category", label: "Category", type: "text" },
      { key: "badge", label: "Badge", type: "text" },
      { key: "description", label: "Short Description (cards)", type: "textarea" },
      {
        key: "longDescription",
        label: "Full Description (platform page)",
        type: "textarea",
        rows: 6,
      },
      { key: "icon", label: "Icon", type: "icon" },
      { key: "image", label: "Image", type: "image" },
      { key: "accentColorHex", label: "Accent Color (hex)", type: "text" },
      { key: "externalHref", label: "External URL", type: "url" },
      { key: "isExternal", label: "Opens in a new tab", ...boolSelect },
      { key: "linkLabel", label: "External Link Button Label", type: "text" },
    ],
  },
  {
    kind: "list",
    key: "ventures",
    label: "New Ventures",
    titleField: "title",
    subtitleField: "badge",
    fields: [
      { key: "badge", label: "Badge", type: "text", helpText: 'e.g. "Venture Track 01"' },
      { key: "title", label: "Title", type: "text" },
      { key: "description", label: "Description", type: "textarea" },
      { key: "icon", label: "Icon", type: "icon" },
      { key: "image", label: "Image", type: "image" },
      {
        key: "points",
        label: "Highlights",
        type: "objectlist",
        itemFields: [
          { key: "title", label: "Title (optional)", type: "text" },
          { key: "body", label: "Text", type: "textarea" },
        ],
      },
      { key: "ctaLabel", label: "Button Label (optional)", type: "text" },
      { key: "ctaHref", label: "Button Link (optional)", type: "text" },
    ],
  },
  {
    kind: "list",
    key: "mission-vision-cards",
    label: "Mission & Vision Cards",
    titleField: "heading",
    subtitleField: "eyebrow",
    fields: [
      { key: "eyebrow", label: "Eyebrow", type: "text" },
      { key: "heading", label: "Heading", type: "text" },
      { key: "description", label: "Description", type: "textarea" },
      { key: "image", label: "Background Image", type: "image" },
    ],
  },
  {
    kind: "list",
    key: "core-values",
    label: "Core Values",
    titleField: "title",
    fields: [
      { key: "title", label: "Title", type: "text" },
      { key: "description", label: "Description", type: "textarea" },
      { key: "icon", label: "Icon", type: "icon" },
    ],
  },
  {
    kind: "list",
    key: "four-phase-steps",
    label: "Operating Methodology Steps",
    titleField: "name",
    subtitleField: "step",
    fields: [
      { key: "step", label: "Step Number", type: "text", helpText: 'e.g. "01"' },
      { key: "name", label: "Name", type: "text" },
      { key: "detail", label: "Detail", type: "textarea" },
    ],
  },
];

export const CONTENT_REGISTRY: ContentDefinition[] = [
  ...singletons,
  ...collections,
];

export function getDefinition(key: string): ContentDefinition | undefined {
  return CONTENT_REGISTRY.find((entry) => entry.key === key);
}

export function getSingletonDefinition(
  key: string
): SingletonDefinition | undefined {
  const def = getDefinition(key);
  return def?.kind === "singleton" ? def : undefined;
}

export function getCollectionDefinition(
  key: string
): CollectionDefinition | undefined {
  const def = getDefinition(key);
  return def?.kind === "list" ? def : undefined;
}
