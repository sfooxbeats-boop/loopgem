import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";
import { buildDownloadUrl, courseFiles, LINK_TTL_DAYS } from "@/lib/downloads";
import { PayPalNotConfiguredError, verifyOrder } from "@/lib/paypal";

export async function POST(req: NextRequest) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { orderId, courseId } = await req.json();

    const course = courseFiles[courseId];
    if (!course) {
      return NextResponse.json({ error: "Course not found" }, { status: 400 });
    }

    if (typeof orderId !== "string" || !orderId.trim()) {
      return NextResponse.json({ error: "Missing PayPal order id" }, { status: 400 });
    }

    // Never trust the client about payment — confirm the order with PayPal.
    // Buyer identity comes back from PayPal too, so a replayed order id can
    // only re-deliver the course to whoever actually paid.
    let verified;
    try {
      verified = await verifyOrder(orderId.trim(), course.price);
    } catch (err) {
      if (err instanceof PayPalNotConfiguredError) {
        // Fail closed: without credentials we cannot tell a real sale from a forgery
        console.error("send-course: PayPal credentials missing —", err.message);
        return NextResponse.json(
          { error: "Payment verification is unavailable. Contact Sfooxbeats@gmail.com." },
          { status: 503 }
        );
      }
      console.error("send-course: PayPal verification error:", err);
      return NextResponse.json(
        { error: "Could not verify your payment. Contact Sfooxbeats@gmail.com." },
        { status: 502 }
      );
    }

    if (!verified.ok) {
      console.warn(`send-course: rejected order ${orderId} — ${verified.reason}`);
      return NextResponse.json({ error: "Payment could not be verified." }, { status: 402 });
    }

    const { payerEmail, payerName } = verified;

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.loopgem.com";
    // Signed link, valid for LINK_TTL_DAYS — the PDF itself is not publicly served
    const downloadUrl = buildDownloadUrl(siteUrl, courseId);
    const firstName = payerName?.split(" ")[0] ?? "there";

    const buyerResult = await resend.emails.send({
      from: "LoopGem <courses@loopgem.com>",
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
              Thank you for purchasing <strong style="color:#0c0a05;">${course.name}</strong>. Tap the button below to download your PDF, then save it somewhere safe — the file is yours to keep.
            </p>

            <p style="color:rgba(12,10,5,0.55);font-size:13px;line-height:1.6;margin:0 0 28px;">
              Heads up: this download link works for the next ${LINK_TTL_DAYS} days. If it stops working, just reply to this email and I'll send you a fresh one.
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

    // The buyer email is the critical one — if it failed, surface a real error
    if (buyerResult.error) {
      console.error("send-course buyer email error:", buyerResult.error);
      return NextResponse.json(
        { error: `Email delivery failed: ${buyerResult.error.message}` },
        { status: 502 }
      );
    }

    // Notify yourself — same brand styling
    const notifyResult = await resend.emails.send({
      from: "LoopGem <courses@loopgem.com>",
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
              <p style="margin:0 0 10px;font-size:14px;color:rgba(12,10,5,0.65);"><strong style="color:#0c0a05;">Buyer:</strong> ${payerName || "Unknown"}</p>
              <p style="margin:0 0 10px;font-size:14px;color:rgba(12,10,5,0.65);"><strong style="color:#0c0a05;">Paid:</strong> $${verified.paid.toFixed(2)} USD &middot; verified with PayPal (order ${orderId})</p>
              <p style="margin:0;font-size:14px;color:rgba(12,10,5,0.65);"><strong style="color:#0c0a05;">Email:</strong> <a href="mailto:${payerEmail}" style="color:#e11d2c;">${payerEmail}</a></p>
            </div>

            <p style="color:rgba(12,10,5,0.55);font-size:12px;line-height:1.6;margin:16px 0 0;">
              PDF delivery email sent automatically to the buyer.
            </p>
          </div>
        </div>
      `,
    });

    // Buyer already got their PDF; a failed self-notification shouldn't fail the request
    if (notifyResult.error) {
      console.error("send-course notify email error:", notifyResult.error);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("send-course error:", err);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
