import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { requireAdmin } from "@/lib/auth/guard";
import type { Prisma } from "@/generated/prisma/client";

interface RouteParams {
  params: Promise<{ id: string }>;
}

export async function PATCH(request: Request, { params }: RouteParams) {
  const session = await requireAdmin();
  if (session instanceof NextResponse) return session;
  const { id } = await params;

  let body: { data?: Record<string, unknown> };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
  if (!body.data || typeof body.data !== "object") {
    return NextResponse.json({ error: "data is required" }, { status: 400 });
  }

  const existing = await prisma.item.findUnique({ where: { id } });
  if (!existing) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  if (existing.collection === "platforms" && typeof body.data.slug === "string") {
    const others = await prisma.item.findMany({
      where: { collection: "platforms", NOT: { id } },
    });
    const slugTaken = others.some(
      (item) => (item.data as { slug?: string }).slug === body.data!.slug
    );
    if (slugTaken) {
      return NextResponse.json(
        { error: `Slug "${body.data.slug}" is already used by another platform` },
        { status: 409 }
      );
    }
  }

  const item = await prisma.item.update({
    where: { id },
    data: { data: body.data as Prisma.InputJsonValue },
  });
  return NextResponse.json({ item });
}

export async function DELETE(_request: Request, { params }: RouteParams) {
  const session = await requireAdmin();
  if (session instanceof NextResponse) return session;
  const { id } = await params;

  await prisma.item.delete({ where: { id } }).catch(() => null);
  return NextResponse.json({ ok: true });
}
