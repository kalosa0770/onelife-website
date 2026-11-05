export const HOME_NAV_ITEMS = [
  { label: "About", href: "/#who-we-are" },
  { label: "Services", href: "/#capabilities" },
  { label: "Track Record", href: "/#track-record" },
  { label: "Leadership", href: "/#leadership" },
  { label: "Contact", href: "/#contact" },
];

export const NAV_GROUPS = [
  {
    label: "Home",
    items: [{ label: "Home", href: "/#home" }, ...HOME_NAV_ITEMS],
  },
  {
    label: "Events",
    items: [
      { label: "Events Overview", href: "/events" },
      { label: "IMPEX 2027", href: "/events/impex" },
      { label: "Corridors Tracked", href: "/events/impex#corridors" },
      { label: "The Ledger", href: "/events/impex#ledger" },
      { label: "OTI", href: "/events/impex#oti" },
      { label: "IMPEX Registration", href: "/events/impex#register" },
      { label: "Smart Woman Summit", href: "/events/smart-woman-summit" },
      { label: "Financial Literacy", href: "/events/smart-woman-summit#literacy" },
      { label: "Summit 2027", href: "/events/smart-woman-summit#event" },
      { label: "Summit Registration", href: "/events/smart-woman-summit#register" },
    ],
  },
  {
    label: "Health Corridor",
    items: [
      { label: "About the Corridor", href: "/health-corridor" },
      { label: "Registered Hospitals", href: "/health-corridor#hospitals" },
      { label: "Partner Insurance", href: "/health-corridor#insurance" },
      { label: "Contact", href: "/health-corridor#contact" },
    ],
  },
];
