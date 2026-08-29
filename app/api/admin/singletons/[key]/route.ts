import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { requireAdmin } from "@/lib/auth/guard";
import { getSingletonDefinition } from "@/lib/content/registry";
import type { Prisma } from "@/generated/prisma/client";

interface RouteParams {
  params: Promise<{ key: string }>;
}

export async function GET(_request: Request, { params }: RouteParams) {
  const session = await requireAdmin();
  if (session instanceof NextResponse) return session;
  const { key } = await params;

  if (!getSingletonDefinition(key)) {
    return NextResponse.json({ error: "Unknown key" }, { status: 400 });
  }

  const row = await prisma.singleton.findUnique({ where: { key } });
  return NextResponse.json({ data: row?.data ?? {} });
}

export async function PUT(request: Request, { params }: RouteParams) {
  const session = await requireAdmin();
  if (session instanceof NextResponse) return session;
  const { key } = await params;

  if (!getSingletonDefinition(key)) {
    return NextResponse.json({ error: "Unknown key" }, { status: 400 });
  }

  let body: { data?: Record<string, unknown> };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
  if (!body.data || typeof body.data !== "object") {
    return NextResponse.json({ error: "data is required" }, { status: 400 });
  }

  const row = await prisma.singleton.upsert({
    where: { key },
    create: { key, data: body.data as Prisma.InputJsonValue },
    update: { data: body.data as Prisma.InputJsonValue },
  });

  return NextResponse.json({ data: row.data });
}
