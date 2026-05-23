"use client";

import { useState } from "react";

type Props = {
  videoId?: string;
  title?: string;
  duration?: string;
};

export default function VideoBlock({
  videoId = "7n5qK_hXs_U",
  title = "Sfooxbeats — How I make my money on Fiverr",
  duration = "2:14",
}: Props) {
  const [playing, setPlaying] = useState(false);

  return (
    <div
      style={{
        position: "relative",
        aspectRatio: "16 / 9",
        borderRadius: "var(--radius-lg)",
        overflow: "hidden",
        background: "var(--bg-3)",
        border: "1px solid var(--border-strong)",
        boxShadow:
          "0 30px 80px -40px color-mix(in oklch, var(--accent) 35%, transparent), 0 1px 0 rgba(255,255,255,0.04) inset",
      }}
    >
      {playing ? (
        <iframe
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }}
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        <button
          onClick={() => setPlaying(true)}
          aria-label="Play intro video"
          style={{
            position: "absolute",
            inset: 0,
            display: "grid",
            placeItems: "center",
            background: `radial-gradient(60% 50% at 50% 45%, color-mix(in oklch, var(--accent) 12%, transparent), transparent 70%),
              linear-gradient(180deg, var(--bg-3) 0%, color-mix(in oklch, var(--accent) 4%, var(--bg-3)) 100%)`,
            border: 0,
            cursor: "pointer",
            color: "inherit",
            padding: 0,
          }}
        >
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,
              background: `repeating-linear-gradient(135deg,
                color-mix(in oklch, var(--fg) 3%, transparent),
                color-mix(in oklch, var(--fg) 3%, transparent) 10px,
                transparent 10px, transparent 20px)`,
              opacity: 0.55,
            }}
          />
          <div
            style={{
              position: "relative",
              zIndex: 2,
              display: "grid",
              placeItems: "center",
              width: "clamp(72px, 9vw, 110px)",
              height: "clamp(72px, 9vw, 110px)",
              borderRadius: 999,
              background: "var(--accent)",
              color: "var(--accent-fg)",
              boxShadow:
                "0 24px 60px -16px color-mix(in oklch, var(--accent) 75%, transparent), 0 0 0 8px color-mix(in oklch, var(--accent) 20%, transparent)",
              transition: "transform 0.25s cubic-bezier(.2,.7,.2,1), box-shadow 0.25s",
            }}
          >
            <svg width="36%" height="36%" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M8 5.5v13a.5.5 0 0 0 .78.41l10-6.5a.5.5 0 0 0 0-.83l-10-6.5A.5.5 0 0 0 8 5.5z" />
            </svg>
          </div>
          <div
            style={{
              position: "absolute",
              left: 28,
              right: 28,
              bottom: 22,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 16,
              zIndex: 2,
              flexWrap: "wrap",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <span className="h-eyebrow" style={{ color: "var(--fg-dim)" }}>
                Intro video · {duration}
              </span>
              <span
                style={{
                  color: "var(--fg)",
                  fontWeight: 700,
                  fontSize: 16,
                  fontFamily: "var(--font-manrope), sans-serif",
                }}
              >
                {title}
              </span>
            </div>
            <div style={{ display: "flex", gap: 6 }}>
              <span className="chip">Watch</span>
              <span className="chip chip-accent">Free</span>
            </div>
          </div>
        </button>
      )}
    </div>
  );
}
