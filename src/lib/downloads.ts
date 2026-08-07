import crypto from "crypto";
import path from "path";

/**
 * Paid course PDFs live in `private/downloads/` (NOT `public/`) so they are never
 * served as static files. They are only reachable through a signed, expiring link
 * issued by /api/send-course after a successful PayPal capture.
 */
export const courseFiles: Record<string, { name: string; file: string }> = {
  c1: {
    name: "Fiverr Beat Seller Blueprint",
    file: "course-fiverr-beat-seller-blueprint.pdf",
  },
  c2: {
    name: "Sell Music Services on Fiverr",
    file: "course-sell-music-services-fiverr.pdf",
  },
  c3: {
    name: "The Full Freelance Music Producer Playbook",
    file: "course-full-freelance-music-producer-playbook.pdf",
  },
};

/** How long a freshly issued download link stays valid. */
export const LINK_TTL_DAYS = 30;

/**
 * Links emailed to buyers BEFORE the signed-link migration pointed at the old
 * public `/downloads/<file>.pdf` path. Those keep working until this date, then
 * the path starts returning a "link expired" message instead. Shorten or remove
 * this once past buyers have had a fair chance to re-download.
 */
export const LEGACY_GRACE_UNTIL = new Date("2026-09-30T23:59:59Z");

export function isLegacyGraceActive(now: Date = new Date()) {
  return now <= LEGACY_GRACE_UNTIL;
}

/** Absolute path to a course PDF, guarded against traversal. */
export function resolveCoursePath(file: string) {
  const safe = path.basename(file);
  return path.join(process.cwd(), "private", "downloads", safe);
}

export function isKnownFile(file: string) {
  const safe = path.basename(file);
  return Object.values(courseFiles).some((c) => c.file === safe);
}

function secret() {
  // Prefer a dedicated secret; fall back to the Resend key so the feature still
  // works before DOWNLOAD_TOKEN_SECRET is added in Vercel. Never has a default.
  const s = process.env.DOWNLOAD_TOKEN_SECRET || process.env.RESEND_API_KEY;
  if (!s) throw new Error("No signing secret configured for download links");
  return s;
}

function sign(payload: string) {
  return crypto.createHmac("sha256", secret()).update(payload).digest("base64url");
}

/** Build the query string for a signed download link. */
export function createDownloadToken(courseId: string, expiresAtMs: number) {
  const payload = `${courseId}.${expiresAtMs}`;
  return `${payload}.${sign(payload)}`;
}

export type TokenCheck =
  | { ok: true; courseId: string }
  | { ok: false; reason: "malformed" | "badsig" | "expired" };

export function verifyDownloadToken(token: string): TokenCheck {
  const parts = token.split(".");
  if (parts.length !== 3) return { ok: false, reason: "malformed" };

  const [courseId, expRaw, sig] = parts;
  const exp = Number(expRaw);
  if (!courseFiles[courseId] || !Number.isFinite(exp)) {
    return { ok: false, reason: "malformed" };
  }

  const expected = sign(`${courseId}.${expRaw}`);
  const a = Buffer.from(sig);
  const b = Buffer.from(expected);
  if (a.length !== b.length || !crypto.timingSafeEqual(a, b)) {
    return { ok: false, reason: "badsig" };
  }

  if (Date.now() > exp) return { ok: false, reason: "expired" };
  return { ok: true, courseId };
}

export function buildDownloadUrl(siteUrl: string, courseId: string) {
  const expiresAt = Date.now() + LINK_TTL_DAYS * 24 * 60 * 60 * 1000;
  const token = createDownloadToken(courseId, expiresAt);
  return `${siteUrl}/api/download?t=${encodeURIComponent(token)}`;
}
