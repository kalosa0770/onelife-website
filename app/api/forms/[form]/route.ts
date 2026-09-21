import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { FORMS, isVisible } from "@/lib/forms/definitions";
import { notifyFormSubmission } from "@/lib/forms/notify";
import type { Prisma } from "@/generated/prisma/client";

interface RouteParams {
  params: Promise<{ form: string }>;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const META_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "referrer", "page"];

export async function POST(request: Request, { params }: RouteParams) {
  const { form } = await params;
  const def = FORMS[form];
  if (!def) return NextResponse.json({ error: "Unknown form" }, { status: 404 });

  let body: { values?: Record<string, unknown>; meta?: Record<string, unknown> };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
  const input = body.values ?? {};

  // Honeypot: real visitors never see or fill this field. Pretend success.
  if (typeof input._hp === "string" && input._hp !== "") {
    return NextResponse.json({ ok: true });
  }

  const values: Record<string, string | boolean> = {};
  const errors: Record<string, string> = {};

  for (const field of def.fields) {
    if (!isVisible(field, input)) continue;
    const raw = input[field.name];

    if (field.type === "checkbox") {
      const checked = raw === true;
      if (field.required && !checked) errors[field.name] = "This is required.";
      values[field.name] = checked;
      continue;
    }

    const value = typeof raw === "string" ? raw.trim() : "";
    if (!value) {
      if (field.required) errors[field.name] = "This is required.";
      continue;
    }
    if (value.length > (field.maxLength ?? 200)) {
      errors[field.name] = "This is too long.";
      continue;
    }
    if (field.type === "email" && !EMAIL_RE.test(value)) {
      errors[field.name] = "Enter a valid email address.";
      continue;
    }
    if (field.type === "select" && !field.options?.some((o) => o.value === value)) {
      errors[field.name] = "Choose one of the options.";
      continue;
    }
    values[field.name] = value;
  }

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ error: "Please check the highlighted fields.", errors }, { status: 400 });
  }

  const meta: Record<string, string> = {};
  for (const key of META_KEYS) {
    const v = body.meta?.[key];
    if (typeof v === "string" && v) meta[key] = v.slice(0, 300);
  }

  try {
    await prisma.formSubmission.create({
      data: { form: def.id, data: { ...values, _meta: meta } as Prisma.InputJsonValue },
    });
  } catch (err) {
    console.error(`[forms] ${def.id} save failed:`, err);
    return NextResponse.json({ error: "We couldn't save that. Please try again." }, { status: 500 });
  }

  await notifyFormSubmission(def, values);
  return NextResponse.json({ ok: true });
}
