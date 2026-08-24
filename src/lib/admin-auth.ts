import { createHmac, timingSafeEqual } from "crypto";

const COOKIE = "hapyzo_admin";

export function getAdminPassword() {
  const raw = process.env.ADMIN_PASSWORD || "hapyzo@369147";
  // Strip accidental quotes / CRLF from CLI env uploads
  return raw.replace(/^["']|["']$/g, "").replace(/\\r\\n$/g, "").replace(/[\r\n]+$/g, "").trim();
}

function getSecret() {
  return process.env.ADMIN_SESSION_SECRET || `${getAdminPassword()}::session`;
}

export function createAdminToken() {
  const day = Math.floor(Date.now() / 86_400_000);
  return createHmac("sha256", getSecret()).update(`ok:${day}`).digest("hex");
}

export function isValidAdminToken(token: string | undefined | null) {
  if (!token) return false;
  const expected = createAdminToken();
  try {
    const a = Buffer.from(token);
    const b = Buffer.from(expected);
    if (a.length !== b.length) return false;
    return timingSafeEqual(a, b);
  } catch {
    return false;
  }
}

export function passwordMatches(input: string) {
  const expected = getAdminPassword();
  try {
    const a = Buffer.from(input);
    const b = Buffer.from(expected);
    if (a.length !== b.length) return false;
    return timingSafeEqual(a, b);
  } catch {
    return false;
  }
}

export { COOKIE as ADMIN_COOKIE };
