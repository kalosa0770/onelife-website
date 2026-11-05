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
      { label: "IMPEX 2027", href: "/events/impex" },
      { label: "Smart Woman Summit", href: "/events/smart-woman-summit" },
    ],
  },
];
