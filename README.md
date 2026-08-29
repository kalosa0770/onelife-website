# OneLife Website

The marketing site for OneLife Communications & Events Company (Lusaka, Zambia), built on Next.js with a **built-in CMS**: staff, platforms, capabilities, track record, ventures, and every headline/paragraph on the site live in Postgres and are managed from `/admin` — not hardcoded in the source. Editing content doesn't require a code change or a redeploy.

## Features

- **Public site** — Home, Who We Are, Capabilities, Track Record, New Ventures, and a dedicated page per owned platform (`/platforms/[slug]`).
- **Admin CMS** (`/admin`) — password-protected. Every repeatable section (staff, platforms, capability cards, track-record stats/milestones/case studies, ventures, hero cards, core values, etc.) supports add / edit / delete / reorder. Every page-level text block (headlines, intros, contact details, footer copy) is editable too.
- **Live edits** — pages read content on every request, so a save in `/admin` is visible on the live site immediately, with no rebuild or redeploy.
- **Resilient reads** — if the database is briefly unreachable, pages fall back to placeholder content instead of crashing.
- **Image uploads** — admin-uploaded images go to Vercel Blob storage via the built-in upload endpoint.

## Tech Stack

- [Next.js 16](https://nextjs.org) (App Router, Turbopack) + React 19 + TypeScript
- [Tailwind CSS 4](https://tailwindcss.com) + [Framer Motion](https://www.framer.com/motion/) + [lucide-react](https://lucide.dev)
- [Prisma 7](https://www.prisma.io) ORM with the `@prisma/adapter-pg` driver adapter, backed by Postgres (built and tested against [Neon](https://neon.tech))
- [Vercel Blob](https://vercel.com/docs/vercel-blob) for admin image uploads
- Cookie-based session auth (JWT via [`jose`](https://github.com/panva/jose), passwords hashed with `bcryptjs`) — a single admin account, no third-party auth provider

## How the CMS is structured

Rather than one database table per content type, there are two generic tables:

- **`Singleton`** — one-off blocks of copy that only ever have one instance: the hero headline, contact details, page intros, etc. (`prisma/schema.prisma`)
- **`Item`** — rows in a repeatable, orderable list: staff members, platforms, capability cards, milestones, and so on.

What fields each of these has, and what kind of input it gets in the admin UI (plain text, a textarea, an image upload, an icon picker, a repeatable sub-list...) is defined once, in code, in **[`lib/content/registry.ts`](lib/content/registry.ts)**. That one file drives:

- The auto-generated admin forms and list views (`app/admin/`)
- The generic CRUD API (`app/api/admin/items/*`, `app/api/admin/singletons/*`)
- Validation of which collections/singletons exist

Adding a new editable field or an entirely new editable section is a change to that registry file, not a database migration. Pages read content through typed helpers in `lib/content/read.ts` (`getSingleton`, `getItems`), which fill in sane defaults for any field a given record doesn't have and never throw — a database error degrades to placeholder content rather than a crashed page.

## Getting Started

1. **Install dependencies**
   ```bash
   npm install
   ```
   (`postinstall` runs `prisma generate` automatically.)

2. **Configure environment variables** — copy `.env.example` to `.env.local` and fill in:

   | Variable | What it's for |
   |---|---|
   | `DATABASE_URL` | Postgres connection string. [Neon](https://neon.tech)'s free tier works well — use the **pooled** connection string (hostname contains `-pooler`). |
   | `BLOB_READ_WRITE_TOKEN` | Needed for local admin image uploads only (production authenticates automatically via OIDC once a Blob store is connected to the Vercel project). Create the store from the project's **Storage** tab in Vercel, then run `npx vercel link && npx vercel env pull .env.local` instead of copying it by hand. Can be left blank if you don't need to test uploads locally. |
   | `JWT_SECRET` | Any long random string (`openssl rand -base64 32`) — signs admin session cookies. |
   | `ADMIN_EMAIL` / `ADMIN_INITIAL_PASSWORD` | Credentials for the one admin account the seed script creates the first time it runs. Change the password from `/admin/account` after logging in. |

3. **Set up the database**
   ```bash
   npm run db:migrate   # creates the tables
   npm run db:seed      # creates the admin account and backfills today's content
   ```
   `db:seed` is safe to re-run — it only fills in rows that don't exist yet and never overwrites content that's already been edited.

4. **Run it**
   ```bash
   npm run dev
   ```
   - Site: [http://localhost:3000](http://localhost:3000)
   - Admin: [http://localhost:3000/admin/login](http://localhost:3000/admin/login)

## Editing content

Log in at `/admin`. The sidebar lists every editable page-text block under **Site Text** and every editable list under **Collections**. For a collection: **Add new** creates a row, **Edit** opens its form, the trash icon deletes it, and the ▲▼ buttons reorder it. Platforms automatically get a page at `/platforms/<slug>` and appear in the nav, footer, and homepage grid as soon as they're added — no code changes required.

## Deploying (Vercel)

1. Import the repo into a Vercel project.
2. Set the environment variables from the table above in the project's settings.
3. Set the **Build Command** to:
   ```
   prisma migrate deploy && next build
   ```
4. After the first deploy, run `npm run db:seed` once against the production `DATABASE_URL` (locally, or via `vercel env pull`) to create the admin account and seed initial content.
5. Log in at `https://<your-domain>/admin/login` and change the password from `/admin/account`.

## Project Structure

```
app/
  admin/                  Admin UI — login (public) + a (protected) route group
  api/admin/               Admin REST API (auth, items, singletons, upload)
  platforms/[slug]/        Public platform detail pages
  <page>/                  Public pages; complex ones split into page.tsx (server,
                            fetches data) + a co-located *Content.tsx (client, framer-motion UI)
components/
  admin/                   Admin UI building blocks (forms, field types, list editor)
  *.tsx                    Public site components — presentational, props-driven
lib/
  auth/                    Session cookies (JWT) + password hashing
  content/                 registry.ts (schema), read.ts (typed getters), icons.ts, defaults.ts
  db.ts                    Prisma client singleton
prisma/
  schema.prisma            Singleton/Item/AdminUser tables
  seed.ts                  Today's original copy, backfilled into the database
proxy.ts                  Gates /admin and /api/admin behind a logged-in session
```

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Start the dev server (Turbopack) |
| `npm run build` | Production build |
| `npm run start` | Serve a production build |
| `npm run lint` | ESLint |
| `npm run db:migrate` | Create/apply a migration locally (`prisma migrate dev`) |
| `npm run db:deploy` | Apply migrations in production (`prisma migrate deploy`) |
| `npm run db:seed` | Create the admin account and backfill missing content |
| `npm run db:studio` | Open Prisma Studio to browse the database |

## Known limitations

- The contact form on the homepage currently only simulates submission — it doesn't send an email or store a lead yet.
- Content fields are plain text (line breaks preserved), not rich text/WYSIWYG.
- Single admin account — no invite flow or per-user roles.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Vercel Blob Documentation](https://vercel.com/docs/vercel-blob)
