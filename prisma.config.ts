// Prisma 7 moved the migration connection string out of schema.prisma and
// into this file (the schema itself just declares `provider = "postgresql"`).
// The Prisma Client's runtime connection is separate — see lib/db.ts, which
// connects via the @prisma/adapter-pg driver adapter.
// Next.js reads .env.local itself, but this file runs outside Next (via the
// `prisma` CLI), so it needs to load it explicitly.
import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });
import { defineConfig } from "prisma/config";

// `defineConfig`'s `env()` helper throws immediately if the variable isn't
// set — even for `prisma generate`, which doesn't touch the database at
// all. That breaks `npm install` (which runs `generate` via postinstall)
// anywhere DATABASE_URL isn't configured yet, e.g. a fresh clone or the
// very first Vercel build before env vars are set. Falling back to `""` for
// `generate`, while still giving `migrate`/`db seed` a real error if they
// run without one, is worth doing here instead.
export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
    seed: "tsx prisma/seed.ts",
  },
  datasource: {
    url: process.env.DATABASE_URL ?? "",
  },
});
