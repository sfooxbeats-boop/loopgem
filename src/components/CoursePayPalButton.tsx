"use client";

import { useEffect, useRef, useState } from "react";

interface Props {
  amount: string;
  courseId: string;
  courseName: string;
}

type State = "idle" | "sending" | "done" | "error";

export default function CoursePayPalButton({ amount, courseId, courseName }: Props) {
  const paypalRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const rendered = useRef(false);
  const [state, setState] = useState<State>("idle");

  useEffect(() => {
    if (rendered.current) return;
    const clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID ?? "test";

    const initButtons = () => {
      if (!window.paypal || rendered.current) return;
      rendered.current = true;

      const createOrder = (_d: unknown, actions: PayPalOrderActions) =>
        actions.order.create({
          purchase_units: [{
            description: `LoopGem PDF Course: ${courseName}`,
            amount: { value: amount, currency_code: "USD" },
          }],
        });

      const onApprove = async (_d: unknown, actions: PayPalOrderActions) => {
        const details = await actions.order.capture();
        const payerEmail = details?.payer?.email_address ?? "";
        const payerName = [
          details?.payer?.name?.given_name,
          details?.payer?.name?.surname,
        ].filter(Boolean).join(" ");

        setState("sending");
        try {
          await fetch("/api/send-course", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ payerEmail, payerName, courseId }),
          });
          setState("done");
        } catch {
          setState("error");
        }
      };

      const onError = (err: unknown) => console.error("PayPal error:", err);
      const style = { layout: "vertical", shape: "rect", label: "pay", height: 44, tagline: false };

      if (paypalRef.current) {
        const btn = window.paypal!.Buttons({
          fundingSource: window.paypal!.FUNDING.PAYPAL,
          createOrder, onApprove, onError,
          style: { ...style, color: "gold" },
        });
        if (btn.isEligible()) btn.render(paypalRef.current);
      }

      if (cardRef.current) {
        const btn = window.paypal!.Buttons({
          fundingSource: window.paypal!.FUNDING.CARD,
          createOrder, onApprove, onError,
          style: { ...style, color: "black" },
        });
        if (btn.isEligible()) btn.render(cardRef.current);
      }
    };

    const existing = document.querySelector("script[data-paypal-sdk]");
    if (existing) {
      if (window.paypal) initButtons();
      else existing.addEventListener("load", initButtons);
    } else {
      const s = document.createElement("script");
      s.src = `https://www.paypal.com/sdk/js?client-id=${clientId}&currency=USD&enable-funding=card&disable-funding=venmo,paylater`;
      s.setAttribute("data-paypal-sdk", "true");
      s.onload = initButtons;
      document.head.appendChild(s);
    }
  }, [amount, courseId, courseName]);

  if (state === "sending") {
    return (
      <div style={notice("muted")}>
        <p style={{ margin: 0, fontSize: 14, color: "var(--fg-muted)" }}>
          Payment confirmed — sending your PDF...
        </p>
      </div>
    );
  }

  if (state === "done") {
    return (
      <div style={notice("accent")}>
        <p style={{ margin: 0, fontSize: 14, color: "var(--accent)", fontWeight: 700 }}>
          PDF sent to your email!
        </p>
        <p style={{ margin: "4px 0 0", fontSize: 12, color: "var(--fg-muted)" }}>
          Check your inbox (and spam folder) for the download link.
        </p>
      </div>
    );
  }

  if (state === "error") {
    return (
      <div style={notice("error")}>
        <p style={{ margin: 0, fontSize: 14, color: "#b8131f", fontWeight: 700 }}>
          Payment received!
        </p>
        <p style={{ margin: "4px 0 0", fontSize: 12, color: "var(--fg-muted)" }}>
          Email delivery failed — contact{" "}
          <a href="mailto:Sfooxbeats@gmail.com" style={{ color: "var(--accent)", textDecoration: "underline" }}>
            Sfooxbeats@gmail.com
          </a>{" "}
          and we&apos;ll send your PDF right away.
        </p>
      </div>
    );
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8, width: "100%" }}>
      <div ref={paypalRef} style={{ width: "100%" }} />
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <div style={{ flex: 1, height: 1, background: "var(--border)" }} />
        <span
          style={{
            fontSize: 10,
            color: "var(--fg-dim)",
            textTransform: "uppercase",
            letterSpacing: "0.18em",
            fontFamily: "var(--font-jetbrains-mono), monospace",
          }}
        >
          or
        </span>
        <div style={{ flex: 1, height: 1, background: "var(--border)" }} />
      </div>
      <div ref={cardRef} style={{ width: "100%" }} />
    </div>
  );
}

function notice(variant: "muted" | "accent" | "error"): React.CSSProperties {
  const base: React.CSSProperties = {
    width: "100%",
    borderRadius: 12,
    padding: "14px 16px",
    textAlign: "center",
  };
  if (variant === "accent") {
    return {
      ...base,
      background: "var(--accent-soft)",
      border: "1px solid color-mix(in oklch, var(--accent) 35%, var(--border))",
    };
  }
  if (variant === "error") {
    return {
      ...base,
      background: "rgba(184,19,31,0.08)",
      border: "1px solid rgba(184,19,31,0.30)",
    };
  }
  return {
    ...base,
    background: "var(--bg-3)",
    border: "1px solid var(--border)",
  };
}
