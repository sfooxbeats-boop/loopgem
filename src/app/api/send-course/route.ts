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
      from: "LoopGem <onboarding@resend.dev>",
      to: payerEmail,
      replyTo: "Sfooxbeats@gmail.com",
      subject: `Your PDF is here — ${course.name}`,
      html: `
        <div style="background:#f7f3ea;padding:40px 20px;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;color:#0c0a05;">
          <div style="max-width:560px;margin:0 auto;background:#ffffff;padding:48px 40px;border-radius:24px;border:1px solid rgba(20,17,11,0.08);">

            <div style="margin-bottom:36px;">
              <span style="font-family:'Arial Black',Arial,sans-serif;font-weight:900;font-size:28px;letter-spacing:-0.01em;color:#0c0a05;">Loop<span style="color:#e11d2c;">Gem</span></span>
              <p style="color:rgba(12,10,5,0.55);font-size:11px;letter-spacing:0.18em;text-transform:uppercase;margin:6px 0 0;font-weight:600;">by Sfooxbeats</p>
            </div>

            <h2 style="font-family:'Arial Black',Arial,sans-serif;font-weight:900;font-size:32px;line-height:1.05;letter-spacing:-0.02em;margin:0 0 16px;color:#0c0a05;">
              Hey ${firstName},<br/>your PDF is <span style="color:#e11d2c;">ready.</span>
            </h2>

            <p style="color:rgba(12,10,5,0.65);font-size:15px;line-height:1.6;margin:0 0 32px;">
              Thank you for purchasing <strong style="color:#0c0a05;">${course.name}</strong>. Tap the button below to download your PDF — it's yours forever.
            </p>

            <a href="${downloadUrl}"
               style="display:inline-block;background:#e11d2c;color:#ffffff;font-weight:800;
                      font-size:13px;letter-spacing:0.10em;text-transform:uppercase;
                      padding:16px 32px;border-radius:9999px;text-decoration:none;
                      box-shadow:0 14px 32px -10px rgba(225,29,44,0.55);">
              Download your PDF →
            </a>

            <p style="color:rgba(12,10,5,0.55);font-size:13px;line-height:1.6;margin:32px 0 0;">
              If the button doesn't work, paste this link into your browser:<br/>
              <a href="${downloadUrl}" style="color:#e11d2c;word-break:break-all;">${downloadUrl}</a>
            </p>

            <hr style="border:none;border-top:1px solid rgba(20,17,11,0.10);margin:36px 0;"/>

            <p style="color:rgba(12,10,5,0.65);font-size:13px;line-height:1.6;margin:0 0 12px;">
              Questions? Reply to this email or reach out at
              <a href="mailto:Sfooxbeats@gmail.com" style="color:#e11d2c;font-weight:600;">Sfooxbeats@gmail.com</a>
            </p>

            <p style="color:rgba(12,10,5,0.42);font-size:11px;letter-spacing:0.14em;text-transform:uppercase;margin:24px 0 0;font-weight:600;">
              &copy; ${new Date().getFullYear()} LoopGem &middot; loopgem.com
            </p>
          </div>
        </div>
      `,
    });

    // Notify yourself — same brand styling
    await resend.emails.send({
      from: "LoopGem <onboarding@resend.dev>",
      to: "Sfooxbeats@gmail.com",
      subject: `New course sale — ${course.name}`,
      html: `
        <div style="background:#f7f3ea;padding:40px 20px;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;color:#0c0a05;">
          <div style="max-width:520px;margin:0 auto;background:#ffffff;padding:36px 32px;border-radius:24px;border:1px solid rgba(20,17,11,0.08);">

            <span style="font-family:'Arial Black',Arial,sans-serif;font-weight:900;font-size:22px;letter-spacing:-0.01em;color:#0c0a05;">Loop<span style="color:#e11d2c;">Gem</span></span>

            <h2 style="font-family:'Arial Black',Arial,sans-serif;font-weight:900;font-size:24px;line-height:1.05;margin:20px 0 16px;color:#0c0a05;">
              New sale — <span style="color:#e11d2c;">cha-ching.</span>
            </h2>

            <div style="background:#f7f3ea;border-radius:16px;padding:20px 24px;margin:16px 0;">
              <p style="margin:0 0 10px;font-size:14px;color:rgba(12,10,5,0.65);"><strong style="color:#0c0a05;">Course:</strong> ${course.name}</p>
              <p style="margin:0 0 10px;font-size:14px;color:rgba(12,10,5,0.65);"><strong style="color:#0c0a05;">Buyer:</strong> ${payerName ?? "Unknown"}</p>
              <p style="margin:0;font-size:14px;color:rgba(12,10,5,0.65);"><strong style="color:#0c0a05;">Email:</strong> <a href="mailto:${payerEmail}" style="color:#e11d2c;">${payerEmail}</a></p>
            </div>

            <p style="color:rgba(12,10,5,0.55);font-size:12px;line-height:1.6;margin:16px 0 0;">
              PDF delivery email sent automatically to the buyer.
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("send-course error:", err);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
