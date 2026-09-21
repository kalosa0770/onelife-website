import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { requireAdmin } from "@/lib/auth/guard";
import { FORMS } from "@/lib/forms/definitions";

// CSV export of form submissions — the monthly sign-up report (sign-ups by
// segment and source, Book Club opt-ins). GET /api/admin/submissions?form=sws-register

function csvCell(value: unknown) {
  const s = value === undefined || value === null ? "" : String(value);
  return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
}

export async function GET(request: Request) {
  const session = await requireAdmin();
  if (session instanceof NextResponse) return session;

  const form = new URL(request.url).searchParams.get("form") ?? "";
  const def = FORMS[form];
  if (!def) {
    return NextResponse.json({ error: `form must be one of: ${Object.keys(FORMS).join(", ")}` }, { status: 400 });
  }

  const rows = await prisma.formSubmission.findMany({
    where: { form },
    orderBy: { createdAt: "desc" },
  });

  const metaCols = ["utm_source", "utm_medium", "utm_campaign", "referrer"];
  const header = ["submitted_at", ...def.fields.map((f) => f.name), ...metaCols];
  const lines = [header.join(",")];
  for (const row of rows) {
    const data = row.data as Record<string, unknown>;
    const meta = (data._meta ?? {}) as Record<string, unknown>;
    lines.push(
      [
        row.createdAt.toISOString(),
        ...def.fields.map((f) => data[f.name]),
        ...metaCols.map((c) => meta[c]),
      ]
        .map(csvCell)
        .join(",")
    );
  }

  return new NextResponse(lines.join("\n"), {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="${form}-submissions.csv"`,
    },
  });
}
