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
      <div className="w-full rounded-lg bg-[#111111] border border-[#2a2a2a] px-4 py-4 text-center">
        <p className="text-sm text-[#a0a0a0]">Payment confirmed — sending your PDF...</p>
      </div>
    );
  }

  if (state === "done") {
    return (
      <div className="w-full rounded-lg bg-[#c9a84c]/10 border border-[#c9a84c]/30 px-4 py-4 text-center">
        <p className="text-sm text-[#c9a84c] font-bold mb-1">PDF sent to your email!</p>
        <p className="text-xs text-[#a0a0a0]">Check your inbox (and spam folder) for the download link.</p>
      </div>
    );
  }

  if (state === "error") {
    return (
      <div className="w-full rounded-lg bg-red-900/20 border border-red-800/40 px-4 py-4 text-center">
        <p className="text-sm text-red-400 font-semibold mb-1">Payment received!</p>
        <p className="text-xs text-[#a0a0a0]">
          Email delivery failed — contact{" "}
          <a href="mailto:Sfooxbeats@gmail.com" className="text-[#c9a84c] underline">Sfooxbeats@gmail.com</a>
          {" "}and we&apos;ll send your PDF right away.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2 w-full">
      <div ref={paypalRef} className="w-full" />
      <div className="flex items-center gap-2">
        <div className="flex-1 h-px bg-[#2a2a2a]" />
        <span className="text-[10px] text-[#4a4a4a] uppercase tracking-widest">or</span>
        <div className="flex-1 h-px bg-[#2a2a2a]" />
      </div>
      <div ref={cardRef} className="w-full" />
    </div>
  );
}
