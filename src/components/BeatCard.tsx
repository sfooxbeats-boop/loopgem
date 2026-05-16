"use client";

import { useState, useRef } from "react";
import PayPalButton from "./PayPalButton";

interface Beat {
  id: string;
  title: string;
  genre: string;
  bpm: number;
  key: string;
  tags: string[];
  waveHeights: number[];
  audioSrc?: string;
}

interface ClientInfo {
  legalName: string;
  stageName: string;
  address: string;
}

type Step = "idle" | "form" | "payment" | "done";

async function generateContract(beat: Beat, client: ClientInfo) {
  const { jsPDF } = await import("jspdf");
  const doc = new jsPDF({ unit: "mm", format: "a4" });
  const today = new Date().toLocaleDateString("en-US", {
    year: "numeric", month: "long", day: "numeric",
  });

  const W = 210;
  const margin = 20;
  const textWidth = W - margin * 2;

  // Header bar
  doc.setFillColor(10, 10, 10);
  doc.rect(0, 0, W, 40, "F");
  doc.setTextColor(201, 168, 76);
  doc.setFontSize(22);
  doc.setFont("helvetica", "bold");
  doc.text("LOOPGEM", margin, 18);
  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(160, 160, 160);
  doc.text("by Sfooxbeats  |  loopgem.com  |  Sfooxbeats@gmail.com", margin, 27);
  doc.setFontSize(11);
  doc.setTextColor(201, 168, 76);
  doc.text("EXCLUSIVE BEAT LICENSE AGREEMENT", margin, 36);

  let y = 52;

  // Agreement intro
  doc.setFontSize(10);
  doc.setTextColor(30, 30, 30);
  doc.setFont("helvetica", "normal");
  const intro = `This Exclusive Beat License Agreement ("Agreement") is entered into as of ${today}, between Soufiane Remdane, professionally known as Sfooxbeats ("Producer"), and the Licensee identified below ("Licensee"). By completing the purchase of this beat, Licensee agrees to all terms set forth in this Agreement.`;
  const introLines = doc.splitTextToSize(intro, textWidth);
  doc.text(introLines, margin, y);
  y += introLines.length * 5 + 8;

  // Section helper
  const section = (title: string, lines: string[]) => {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.setTextColor(10, 10, 10);
    doc.text(title, margin, y);
    y += 6;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9.5);
    doc.setTextColor(50, 50, 50);
    lines.forEach((line) => {
      const split = doc.splitTextToSize(line, textWidth - 5);
      doc.text(split, margin + 4, y);
      y += split.length * 5 + 1;
    });
    y += 4;
  };

  // 1. Licensee info
  section("1. LICENSEE INFORMATION", [
    `Legal Name:   ${client.legalName}`,
    `Stage Name:   ${client.stageName}`,
    `Address:      ${client.address}`,
  ]);

  // 2. Beat info
  section("2. BEAT INFORMATION", [
    `Beat Title:   ${beat.title}`,
    `Genre:        ${beat.genre}`,
    `BPM:          ${beat.bpm}`,
    `Key:          ${beat.key}`,
    `Producer:     Sfooxbeats (Soufiane Remdane)`,
    `License Type: Exclusive`,
    `Price Paid:   $250.00 USD`,
    `Date:         ${today}`,
  ]);

  // 3. Rights granted
  section("3. RIGHTS GRANTED", [
    "Producer grants Licensee full exclusive rights to the Beat upon receipt of payment. This includes:",
    "• Unlimited commercial releases, streams, sales, and performances worldwide.",
    "• Use in music videos, films, advertisements, sync licensing, and broadcast.",
    "• Right to register the finished song with PROs (ASCAP, BMI, SOCAN, etc.).",
    "• Files delivered: MP3 (320kbps), WAV (24-bit), and all individual stem tracks.",
  ]);

  // 4. Exclusivity
  section("4. EXCLUSIVITY", [
    "Upon execution of this Agreement and receipt of full payment, the Beat will be permanently removed from all platforms and marketplaces. No other party will be granted any license to this Beat. Licensee holds sole commercial rights to the Beat.",
  ]);

  // 5. Producer credit
  section("5. PRODUCER CREDIT", [
    `Licensee agrees to credit the Producer as "Prod. Sfooxbeats" in all song titles, streaming metadata, and release descriptions wherever reasonably possible.`,
  ]);

  // 6. Ownership
  section("6. OWNERSHIP & COPYRIGHT", [
    "Producer retains full copyright ownership of the instrumental composition. Licensee owns the master recording of any finished song created using this Beat. Producer retains the right to use the Beat for non-commercial portfolio, promotional, or streaming platform demonstration purposes.",
  ]);

  // 7. Warranties
  section("7. WARRANTIES", [
    "Producer warrants that this Beat is an original composition and that Producer has full authority to license it. Producer is not aware of any third-party claims that would conflict with the rights granted herein.",
  ]);

  // 8. Termination
  section("8. TERMINATION", [
    "This Agreement is perpetual and irrevocable once payment is received in full. Licensee's rights may be terminated only in the event of material breach of this Agreement that is not cured within 30 days of written notice.",
  ]);

  // 9. Governing law
  section("9. GOVERNING LAW", [
    "This Agreement shall be governed by the laws applicable in the Producer's jurisdiction. Any disputes shall be resolved through good-faith negotiation, and if unresolved, through binding arbitration.",
  ]);

  // Signature block
  if (y > 240) { doc.addPage(); y = 20; }
  y += 6;
  doc.setDrawColor(42, 42, 42);
  doc.line(margin, y, margin + 75, y);
  doc.line(margin + 95, y, margin + 170, y);
  y += 5;
  doc.setFontSize(8.5);
  doc.setTextColor(80, 80, 80);
  doc.text("Producer: Soufiane Remdane (Sfooxbeats)", margin, y);
  doc.text(`Licensee: ${client.legalName}`, margin + 95, y);
  y += 4;
  doc.text(`Date: ${today}`, margin, y);
  doc.text(`Date: ${today}`, margin + 95, y);

  // Footer on each page
  const totalPages = doc.getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    doc.setFillColor(10, 10, 10);
    doc.rect(0, 285, W, 12, "F");
    doc.setFontSize(7.5);
    doc.setTextColor(120, 120, 120);
    doc.text(
      `LoopGem / Sfooxbeats — Exclusive Beat License — ${beat.title} — ${today} — Page ${i} of ${totalPages}`,
      W / 2, 292, { align: "center" }
    );
  }

  doc.save(`LoopGem_Exclusive_Contract_${beat.title.replace(/\s+/g, "_")}.pdf`);
}

export default function BeatCard({ beat }: { beat: Beat }) {
  const [playing, setPlaying] = useState(false);
  const [step, setStep] = useState<Step>("idle");
  const [client, setClient] = useState<ClientInfo>({ legalName: "", stageName: "", address: "" });
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggle = () => {
    if (!beat.audioSrc) return;
    if (!audioRef.current) {
      audioRef.current = new Audio(beat.audioSrc);
      audioRef.current.onended = () => setPlaying(false);
    }
    if (playing) { audioRef.current.pause(); setPlaying(false); }
    else { audioRef.current.play(); setPlaying(true); }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("payment");
  };

  const handlePaid = () => {
    generateContract(beat, client);
    setStep("done");
  };

  return (
    <div className="border border-[#2a2a2a] rounded-xl bg-[#111111] p-5 flex flex-col gap-4 card-hover">
      {/* Waveform + play */}
      <div className="relative h-16 flex items-end gap-0.5 cursor-pointer group" onClick={toggle}>
        {beat.waveHeights.map((h, i) => (
          <div
            key={i}
            className={`flex-1 rounded-sm transition-colors duration-150 ${playing ? "bg-[#c9a84c]/70" : "bg-[#c9a84c]/25 group-hover:bg-[#c9a84c]/40"}`}
            style={{ height: `${h}%` }}
          />
        ))}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-150">
          <div className="w-10 h-10 rounded-full bg-[#c9a84c] flex items-center justify-center shadow-lg">
            {playing
              ? <svg width="16" height="16" fill="#0a0a0a" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" /></svg>
              : <svg width="16" height="16" fill="#0a0a0a" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>}
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="flex items-start justify-between gap-2">
        <div>
          <p className="font-semibold">{beat.title}</p>
          <p className="text-xs text-[#7a7a7a] mt-0.5">{beat.genre} · {beat.bpm} BPM · {beat.key}</p>
        </div>
        <span className="text-[#c9a84c] font-bold text-sm shrink-0">$250.00</span>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {beat.tags.map((tag) => (
          <span key={tag} className="px-2 py-0.5 rounded text-[10px] font-medium bg-[#1e1e1e] text-[#7a7a7a] border border-[#2a2a2a]">
            {tag}
          </span>
        ))}
      </div>

      {/* Included note */}
      <div className="flex flex-col gap-1">
        {["MP3 + WAV + Stems", "Exclusive contract (PDF)", "Beat removed from store"].map((item) => (
          <div key={item} className="flex items-center gap-1.5 text-[11px] text-[#7a7a7a]">
            <svg width="11" height="11" fill="none" viewBox="0 0 24 24" stroke="#c9a84c" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
            {item}
          </div>
        ))}
      </div>

      {/* Step: idle */}
      {step === "idle" && (
        <button
          onClick={() => setStep("form")}
          className="w-full py-2.5 rounded-md bg-[#c9a84c] text-[#0a0a0a] text-sm font-semibold hover:bg-[#e5c97e] transition-colors duration-150"
        >
          Buy Exclusive — $250
        </button>
      )}

      {/* Step: form — collect client info for contract */}
      {step === "form" && (
        <form onSubmit={handleFormSubmit} className="flex flex-col gap-3">
          <p className="text-xs text-[#a0a0a0] font-medium">Your details for the contract:</p>
          <input
            required
            placeholder="Legal full name"
            value={client.legalName}
            onChange={(e) => setClient((c) => ({ ...c, legalName: e.target.value }))}
            className="w-full px-3 py-2.5 rounded-lg bg-[#161616] border border-[#2a2a2a] text-sm text-[#ededed] placeholder-[#4a4a4a] focus:outline-none focus:border-[#c9a84c] transition-colors duration-150"
          />
          <input
            required
            placeholder="Stage / artist name"
            value={client.stageName}
            onChange={(e) => setClient((c) => ({ ...c, stageName: e.target.value }))}
            className="w-full px-3 py-2.5 rounded-lg bg-[#161616] border border-[#2a2a2a] text-sm text-[#ededed] placeholder-[#4a4a4a] focus:outline-none focus:border-[#c9a84c] transition-colors duration-150"
          />
          <input
            required
            placeholder="Full address (street, city, country)"
            value={client.address}
            onChange={(e) => setClient((c) => ({ ...c, address: e.target.value }))}
            className="w-full px-3 py-2.5 rounded-lg bg-[#161616] border border-[#2a2a2a] text-sm text-[#ededed] placeholder-[#4a4a4a] focus:outline-none focus:border-[#c9a84c] transition-colors duration-150"
          />
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setStep("idle")}
              className="flex-1 py-2.5 rounded-md border border-[#2a2a2a] text-xs text-[#7a7a7a] hover:text-[#a0a0a0] transition-colors duration-150"
            >
              Back
            </button>
            <button
              type="submit"
              className="flex-1 py-2.5 rounded-md bg-[#c9a84c] text-[#0a0a0a] text-sm font-semibold hover:bg-[#e5c97e] transition-colors duration-150"
            >
              Continue to Payment
            </button>
          </div>
        </form>
      )}

      {/* Step: payment */}
      {step === "payment" && (
        <div className="flex flex-col gap-2">
          <p className="text-xs text-[#a0a0a0]">
            Paying as: <span className="text-[#ededed] font-medium">{client.stageName}</span>
          </p>
          <PayPalButton
            amount="250.00"
            description={`Exclusive Beat: ${beat.title} — Licensee: ${client.legalName}`}
            successMessage="Payment confirmed — downloading your contract now..."
            onPaid={handlePaid}
          />
          <button
            onClick={() => setStep("form")}
            className="text-xs text-[#7a7a7a] hover:text-[#a0a0a0] transition-colors duration-150"
          >
            ← Edit info
          </button>
        </div>
      )}

      {/* Step: done */}
      {step === "done" && (
        <div className="rounded-lg bg-[#c9a84c]/10 border border-[#c9a84c]/30 px-4 py-4 text-center">
          <p className="text-sm text-[#c9a84c] font-bold mb-1">Payment Complete!</p>
          <p className="text-xs text-[#a0a0a0]">
            Your exclusive contract PDF has been downloaded. Also check your email — we&apos;ll send the beat files shortly.
          </p>
        </div>
      )}
    </div>
  );
}
