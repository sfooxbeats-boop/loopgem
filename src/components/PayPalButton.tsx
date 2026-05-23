"use client";

import { useEffect, useRef, useState } from "react";

interface PayPalButtonProps {
  amount: string;
  description: string;
  successMessage?: string;
  onPaid?: () => void;
}

export default function PayPalButton({ amount, description, successMessage, onPaid }: PayPalButtonProps) {
  const paypalRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const rendered = useRef(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (rendered.current) return;
    const clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID ?? "test";

    const initButtons = () => {
      if (!window.paypal || rendered.current) return;
      rendered.current = true;

      const orderConfig = {
        purchase_units: [{ description, amount: { value: amount, currency_code: "USD" } }],
      };

      const createOrder = (_d: unknown, actions: PayPalOrderActions) =>
        actions.order.create(orderConfig);

      const onApprove = async (_d: unknown, actions: PayPalOrderActions) => {
        await actions.order.capture();
        setSuccess(true);
        onPaid?.();
      };

      const onError = (err: unknown) => console.error("PayPal error:", err);

      if (paypalRef.current) {
        const btn = window.paypal!.Buttons({
          fundingSource: window.paypal!.FUNDING.PAYPAL,
          createOrder, onApprove, onError,
          style: { layout: "vertical", color: "gold", shape: "rect", label: "pay", height: 44, tagline: false },
        });
        if (btn.isEligible()) btn.render(paypalRef.current);
      }

      if (cardRef.current) {
        const btn = window.paypal!.Buttons({
          fundingSource: window.paypal!.FUNDING.CARD,
          createOrder, onApprove, onError,
          style: { layout: "vertical", color: "black", shape: "rect", label: "pay", height: 44, tagline: false },
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
  }, [amount, description, onPaid]);

  if (success) {
    return (
      <div
        style={{
          width: "100%",
          borderRadius: 12,
          background: "var(--accent-soft)",
          border: "1px solid color-mix(in oklch, var(--accent) 35%, var(--border))",
          padding: "14px 16px",
          textAlign: "center",
        }}
      >
        <p style={{ margin: 0, fontSize: 14, color: "var(--accent)", fontWeight: 700 }}>
          Payment Complete!
        </p>
        <p style={{ margin: "4px 0 0", fontSize: 12, color: "var(--fg-muted)" }}>
          {successMessage ?? "Check your email for next steps."}
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
