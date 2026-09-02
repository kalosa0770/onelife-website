import { NextResponse } from "next/server";
import { Prisma } from "@/generated/prisma/client";
import { prisma } from "@/lib/db";
import { requireAdmin } from "@/lib/auth/guard";
import { verifyPassword } from "@/lib/auth/password";
import {
  createSessionToken,
  SESSION_COOKIE,
  sessionCookieOptions,
} from "@/lib/auth/session";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const session = await requireAdmin();
  if (session instanceof NextResponse) return session;

  let body: { newEmail?: string; currentPassword?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const newEmail = body.newEmail?.trim().toLowerCase();
  const currentPassword = body.currentPassword;
  if (!newEmail || !currentPassword) {
    return NextResponse.json(
      { error: "New email and current password are required" },
      { status: 400 }
    );
  }
  if (!EMAIL_RE.test(newEmail)) {
    return NextResponse.json({ error: "Enter a valid email address" }, { status: 400 });
  }

  const user = await prisma.adminUser.findUnique({ where: { id: session.sub } });
  if (!user || !(await verifyPassword(currentPassword, user.passwordHash))) {
    return NextResponse.json({ error: "Current password is incorrect" }, { status: 401 });
  }

  if (newEmail === user.email) {
    return NextResponse.json({ error: "That's already your email address" }, { status: 400 });
  }

  try {
    await prisma.adminUser.update({
      where: { id: user.id },
      data: { email: newEmail },
    });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2002") {
      return NextResponse.json(
        { error: "That email is already in use by another account" },
        { status: 409 }
      );
    }
    throw error;
  }

  // Re-issue the session so the cookie (and everywhere it's displayed,
  // e.g. the sidebar) reflects the new email immediately — no re-login.
  const token = await createSessionToken({ sub: user.id, email: newEmail });
  const response = NextResponse.json({ ok: true, email: newEmail });
  response.cookies.set(SESSION_COOKIE, token, sessionCookieOptions);
  return response;
}
