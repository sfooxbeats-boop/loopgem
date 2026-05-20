import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const courseFiles: Record<string, { name: string; file: string }> = {
  "c1": {
    name: "Fiverr Beat Seller Blueprint",
    file: "course-fiverr-beat-seller-blueprint.pdf",
  },
  "c2": {
    name: "Sell Music Services on Fiverr",
    file: "course-sell-music-services-fiverr.pdf",
  },
  "c3": {
    name: "The Full Freelance Music Producer Playbook",
    file: "course-full-freelance-music-producer-playbook.pdf",
  },
};

export async function POST(req: NextRequest) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { payerEmail, payerName, courseId } = await req.json();

    const course = courseFiles[courseId];
    if (!course) {
      return NextResponse.json({ error: "Course not found" }, { status: 400 });
    }

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://loopgem.vercel.app";
    const downloadUrl = `${siteUrl}/downloads/${course.file}`;
    const firstName = payerName?.split(" ")[0] ?? "there";

    await resend.emails.send({
      from: "LoopGem <courses@loopgem.com>",
      to: payerEmail,
      replyTo: "Sfooxbeats@gmail.com",
      subject: `Your PDF is here — ${course.name}`,
      html: `
        <div style="background:#0a0a0a;padding:40px 20px;font-family:Arial,sans-serif;color:#ededed;">
          <div style="max-width:560px;margin:0 auto;">

            <h1 style="color:#c9a84c;font-size:24px;margin-bottom:4px;">LoopGem</h1>
            <p style="color:#7a7a7a;font-size:12px;margin-top:0;margin-bottom:32px;">by Sfooxbeats</p>

            <h2 style="font-size:20px;margin-bottom:8px;">Hey ${firstName}, your PDF is ready!</h2>
            <p style="color:#a0a0a0;font-size:15px;line-height:1.6;margin-bottom:24px;">
              Thank you for purchasing <strong style="color:#ededed;">${course.name}</strong>.
              Click the button below to download your PDF guide.
            </p>

            <a href="${downloadUrl}"
               style="display:inline-block;background:#c9a84c;color:#0a0a0a;font-weight:700;
                      font-size:15px;padding:14px 32px;border-radius:6px;text-decoration:none;
                      margin-bottom:24px;">
              Download Your PDF
            </a>

            <p style="color:#7a7a7a;font-size:13px;line-height:1.6;">
              If the button doesn't work, copy and paste this link into your browser:<br/>
              <a href="${downloadUrl}" style="color:#c9a84c;">${downloadUrl}</a>
            </p>

            <hr style="border:none;border-top:1px solid #2a2a2a;margin:32px 0;"/>

            <p style="color:#7a7a7a;font-size:13px;line-height:1.6;">
              Questions? Just reply to this email or reach out at
              <a href="mailto:Sfooxbeats@gmail.com" style="color:#c9a84c;">Sfooxbeats@gmail.com</a>
            </p>

            <p style="color:#4a4a4a;font-size:12px;margin-top:32px;">
              &copy; ${new Date().getFullYear()} LoopGem &mdash; loopgem.com
            </p>
          </div>
        </div>
      `,
    });

    // Also notify yourself
    await resend.emails.send({
      from: "LoopGem <courses@loopgem.com>",
      to: "Sfooxbeats@gmail.com",
      subject: `New course sale — ${course.name}`,
      html: `
        <p><strong>Course sold:</strong> ${course.name}</p>
        <p><strong>Buyer email:</strong> ${payerEmail}</p>
        <p><strong>Buyer name:</strong> ${payerName ?? "Unknown"}</p>
        <p>PDF delivery email sent automatically.</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("send-course error:", err);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
