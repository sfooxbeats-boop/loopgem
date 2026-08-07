import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const MAX = { name: 120, email: 200, subject: 160, message: 5000 };

function clean(v: unknown, max: number) {
  return typeof v === "string" ? v.trim().slice(0, max) : "";
}

function escapeHtml(v: string) {
  return v
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(req: NextRequest) {
  try {
    // Resend must be initialised inside the handler — see CLAUDE.md
    const resend = new Resend(process.env.RESEND_API_KEY);
    const body = await req.json();

    const name = clean(body.name, MAX.name);
    const email = clean(body.email, MAX.email);
    const subject = clean(body.subject, MAX.subject);
    const message = clean(body.message, MAX.message);

    if (!email || !message) {
      return NextResponse.json(
        { error: "Email and message are required." },
        { status: 400 }
      );
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "That email doesn't look right." }, { status: 400 });
    }

    const heading = subject || "New contact form message";

    const result = await resend.emails.send({
      from: "LoopGem <courses@loopgem.com>",
      to: "Sfooxbeats@gmail.com",
      replyTo: email,
      subject: `Contact form — ${heading}`,
      html: `
        <div style="background:#f7f3ea;padding:40px 20px;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;color:#0c0a05;">
          <div style="max-width:520px;margin:0 auto;background:#ffffff;padding:36px 32px;border-radius:24px;border:1px solid rgba(20,17,11,0.08);">

            <span style="font-family:'Arial Black',Arial,sans-serif;font-weight:900;font-size:22px;letter-spacing:-0.01em;color:#0c0a05;">Loop<span style="color:#e11d2c;">Gem</span></span>

            <h2 style="font-family:'Arial Black',Arial,sans-serif;font-weight:900;font-size:24px;line-height:1.05;margin:20px 0 16px;color:#0c0a05;">
              New message from the <span style="color:#e11d2c;">contact form.</span>
            </h2>

            <div style="background:#f7f3ea;border-radius:16px;padding:20px 24px;margin:16px 0;">
              <p style="margin:0 0 10px;font-size:14px;color:rgba(12,10,5,0.65);"><strong style="color:#0c0a05;">Name:</strong> ${escapeHtml(name) || "(not given)"}</p>
              <p style="margin:0 0 10px;font-size:14px;color:rgba(12,10,5,0.65);"><strong style="color:#0c0a05;">Email:</strong> <a href="mailto:${escapeHtml(email)}" style="color:#e11d2c;">${escapeHtml(email)}</a></p>
              <p style="margin:0;font-size:14px;color:rgba(12,10,5,0.65);"><strong style="color:#0c0a05;">Reason:</strong> ${escapeHtml(subject) || "(not given)"}</p>
            </div>

            <p style="margin:0 0 8px;font-size:12px;letter-spacing:0.14em;text-transform:uppercase;color:rgba(12,10,5,0.42);font-weight:600;">Message</p>
            <p style="color:rgba(12,10,5,0.75);font-size:15px;line-height:1.6;margin:0;white-space:pre-wrap;">${escapeHtml(message)}</p>

            <p style="color:rgba(12,10,5,0.55);font-size:12px;line-height:1.6;margin:24px 0 0;">
              Hit reply to answer ${escapeHtml(name) || "them"} directly.
            </p>
          </div>
        </div>
      `,
    });

    // The Resend SDK returns {error} rather than throwing — check it explicitly
    if (result.error) {
      console.error("contact email error:", result.error);
      return NextResponse.json(
        { error: `Could not send your message: ${result.error.message}` },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("contact error:", err);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
