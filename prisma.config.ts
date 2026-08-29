// Prisma 7 moved the migration connection string out of schema.prisma and
// into this file (the schema itself just declares `provider = "postgresql"`).
// The Prisma Client's runtime connection is separate — see lib/db.ts, which
// connects via the @prisma/adapter-pg driver adapter.
// Next.js reads .env.local itself, but this file runs outside Next (via the
// `prisma` CLI), so it needs to load it explicitly.
import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });
import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
    seed: "tsx prisma/seed.ts",
  },
  datasource: {
    url: env("DATABASE_URL"),
  },
});
