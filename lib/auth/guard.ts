import "server-only";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import {
  SESSION_COOKIE,
  verifySessionToken,
  type AdminSessionPayload,
} from "./session";

/**
 * Reads and verifies the admin session cookie. Returns the session payload
 * if the caller is logged in, or null otherwise.
 *
 * `proxy.ts` already blocks unauthenticated requests to /admin and
 * /api/admin before they reach here — this is a second, defense-in-depth
 * check inside route handlers and the admin layout itself.
 */
export async function getAdminSession(): Promise<AdminSessionPayload | null> {
  const store = await cookies();
  const token = store.get(SESSION_COOKIE)?.value;
  if (!token) return null;
  return verifySessionToken(token);
}

/**
 * For use at the top of API route handlers: returns the session payload, or
 * a ready-to-return 401 NextResponse if the caller isn't logged in.
 *
 * ```ts
 * const session = await requireAdmin();
 * if (session instanceof NextResponse) return session;
 * ```
 */
export async function requireAdmin(): Promise<
  AdminSessionPayload | NextResponse
> {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  return session;
}
