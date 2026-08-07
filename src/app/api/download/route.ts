import { readFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
import { courseFiles, resolveCoursePath, verifyDownloadToken } from "@/lib/downloads";

const EXPIRED_MESSAGE =
  "This download link has expired. Email Sfooxbeats@gmail.com from the address you bought with and you'll get a fresh one.";

export async function GET(req: NextRequest) {
  const token = req.nextUrl.searchParams.get("t");
  if (!token) {
    return NextResponse.json({ error: "Missing download token." }, { status: 400 });
  }

  let check;
  try {
    check = verifyDownloadToken(token);
  } catch (err) {
    console.error("download token verification failed:", err);
    return NextResponse.json({ error: "Download is unavailable right now." }, { status: 500 });
  }

  if (!check.ok) {
    const expired = check.reason === "expired";
    return NextResponse.json(
      { error: expired ? EXPIRED_MESSAGE : "This download link isn't valid." },
      { status: expired ? 410 : 403 }
    );
  }

  const course = courseFiles[check.courseId];
  try {
    const pdf = await readFile(resolveCoursePath(course.file));
    return new NextResponse(new Uint8Array(pdf), {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${course.file}"`,
        "Content-Length": String(pdf.byteLength),
        // Never let a CDN or search engine hold on to a paid asset
        "Cache-Control": "private, no-store, max-age=0",
        "X-Robots-Tag": "noindex, nofollow",
      },
    });
  } catch (err) {
    console.error("download read error:", err);
    return NextResponse.json({ error: "That course file is missing." }, { status: 404 });
  }
}
