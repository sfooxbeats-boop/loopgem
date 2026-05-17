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
      <div className="w-full rounded-lg bg-[#c9a84c]/10 border border-[#c9a84c]/30 px-4 py-3 text-center">
        <p className="text-sm text-[#c9a84c] font-semibold">Payment Complete!</p>
        <p className="text-xs text-[#a0a0a0] mt-0.5">
          {successMessage ?? "Check your email for next steps."}
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
