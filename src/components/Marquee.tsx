"use client";

type Props = {
  items?: string[];
  accent?: boolean;
};

const defaultItems = [
  "Built by a producer, for producers",
  "Sfooxbeats · 5.0 ★ Fiverr",
  "$27 · $47 · $89.99",
  "No fluff. No theory.",
  "Real numbers. Real clients.",
];

export default function Marquee({ items, accent = false }: Props) {
  const list = items && items.length ? items : defaultItems;
  const phrase = list.flatMap((t, i) => [
    <span
      key={`t-${i}`}
      className="marquee-item"
      style={accent ? { color: "var(--accent)" } : undefined}
    >
      {t}
    </span>,
    <span key={`s-${i}`} className="marquee-item star" aria-hidden="true">
      ✦
    </span>,
  ]);
  return (
    <div className="marquee">
      <div className="marquee-track">
        {phrase}
        {phrase}
      </div>
    </div>
  );
}
