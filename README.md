# OneLife Website

The OneLife Communications & Events Company marketing site, built with Next.js 16, React 19, TypeScript, Tailwind CSS 4, and Framer Motion.

## Sections

- **OneLife:** Home, Who We Are, Capabilities, Track Record & Clients, and Contact.
- **OneLife Events:** IMPEX and Smart Woman Summit, including their corridor, ledger, OTI, financial literacy, event details, and registration pages.
- **OneLife Health Corridor:** About, Registered Hospitals, Partner Health Insurance, and Contact.

## Local development

```bash
npm install
npm run dev
```

The site runs without a database or CMS. Public copy and lists are maintained in `lib/site/content-data.ts`; navigation is maintained in `lib/site/nav.ts`. Update those files and deploy the site to publish content changes.

Inquiry and registration forms open a prefilled draft in the visitor's email application. The visitor must review and send the draft; submissions are not stored or sent by this website.

## Validation

```bash
npm run lint
npm run build
```
