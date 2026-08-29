import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { requireAdmin } from "@/lib/auth/guard";
import { getCollectionDefinition } from "@/lib/content/registry";
import type { Prisma } from "@/generated/prisma/client";

// Public pages read content with plain Prisma calls on routes marked
// `force-dynamic` (see e.g. app/page.tsx), so there is no cache to
// invalidate here — a write in these routes is visible on the very next
// page load.

export async function GET(request: Request) {
  const session = await requireAdmin();
  if (session instanceof NextResponse) return session;

  const collection = new URL(request.url).searchParams.get("collection");
  if (!collection || !getCollectionDefinition(collection)) {
    return NextResponse.json({ error: "Unknown collection" }, { status: 400 });
  }

  const items = await prisma.item.findMany({
    where: { collection },
    orderBy: { order: "asc" },
  });
  return NextResponse.json({ items });
}

export async function POST(request: Request) {
  const session = await requireAdmin();
  if (session instanceof NextResponse) return session;

  let body: { collection?: string; data?: Record<string, unknown> };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const { collection, data } = body;
  if (!collection || !getCollectionDefinition(collection)) {
    return NextResponse.json({ error: "Unknown collection" }, { status: 400 });
  }
  if (!data || typeof data !== "object") {
    return NextResponse.json({ error: "data is required" }, { status: 400 });
  }

  if (collection === "platforms" && typeof data.slug === "string") {
    const existing = await prisma.item.findMany({
      where: { collection: "platforms" },
    });
    const slugTaken = existing.some(
      (item) => (item.data as { slug?: string }).slug === data.slug
    );
    if (slugTaken) {
      return NextResponse.json(
        { error: `Slug "${data.slug}" is already used by another platform` },
        { status: 409 }
      );
    }
  }

  const last = await prisma.item.findFirst({
    where: { collection },
    orderBy: { order: "desc" },
  });

  const item = await prisma.item.create({
    data: {
      collection,
      data: data as Prisma.InputJsonValue,
      order: (last?.order ?? -1) + 1,
    },
  });

  return NextResponse.json({ item }, { status: 201 });
}
