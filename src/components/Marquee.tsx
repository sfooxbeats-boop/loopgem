"use client";

import { motion } from "motion/react";

const items = [
  "Sell Your Beats",
  "Get Consistent Clients",
  "Build Your Music Business",
  "Stop Working for Free",
  "Turn Skills Into Income",
  "Dominate Fiverr",
  "Real Results Only",
];

export default function Marquee({ speed = 35 }: { speed?: number }) {
  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden border-y border-white/[0.04] py-4 bg-[#050505]">
      <motion.div
        className="flex gap-0 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-6 px-6 text-[11px] font-black uppercase tracking-[0.28em]"
            style={{ color: i % 2 === 0 ? "#2a2a2a" : "#222" }}
          >
            {item}
            <span style={{ color: "#c9a84c", opacity: 0.5 }}>✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
