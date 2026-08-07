import { readFile } from "fs/promises";
import { NextResponse } from "next/server";
import { isKnownFile, isLegacyGraceActive, resolveCoursePath } from "@/lib/downloads";

/**
 * Legacy handler for the old public `/downloads/<file>.pdf` links that were emailed
 * to buyers before downloads moved behind signed, expiring links.
 *
 * Until LEGACY_GRACE_UNTIL these still serve the PDF so past buyers aren't cut off.
 * After that date they return a "link expired" message. See src/lib/downloads.ts.
 */
export async function GET(
  _req: Request,
  { params }: { params: Promise<{ file: string }> }
) {
  // Next 16: params is a Promise and must be awaited
  const { file } = await params;

  if (!isKnownFile(file)) {
    return NextResponse.json({ error: "Not found." }, { status: 404 });
  }

  if (!isLegacyGraceActive()) {
    return NextResponse.json(
      {
        error:
          "This download link has expired. Email Sfooxbeats@gmail.com from the address you bought with and you'll get a fresh one.",
      },
      { status: 410 }
    );
  }

  try {
    const pdf = await readFile(resolveCoursePath(file));
    return new NextResponse(new Uint8Array(pdf), {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${file}"`,
        "Content-Length": String(pdf.byteLength),
        "Cache-Control": "private, no-store, max-age=0",
        "X-Robots-Tag": "noindex, nofollow",
      },
    });
  } catch (err) {
    console.error("legacy download read error:", err);
    return NextResponse.json({ error: "That course file is missing." }, { status: 404 });
  }
}
