"use client";

import { useState, useCallback } from "react";
import type { SoundPreview } from "@/data/drum-kits";

interface Props {
  sounds: SoundPreview[];
  accentColor: string;
}

function triggerSound(name: string): void {
  const ctx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
  const n = name.toLowerCase();

  if (n.includes("808") || n.includes("sub")) {
    // Deep 808 bass
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const dist = ctx.createWaveShaper();
    // Soft saturation curve
    const curve = new Float32Array(256);
    for (let i = 0; i < 256; i++) {
      const x = (i * 2) / 256 - 1;
      curve[i] = (Math.PI + 200) * x / (Math.PI + 200 * Math.abs(x));
    }
    dist.curve = curve;
    osc.connect(dist);
    dist.connect(gain);
    gain.connect(ctx.destination);
    osc.type = "sine";
    osc.frequency.setValueAtTime(n.includes("slide") ? 70 : 55, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(28, ctx.currentTime + (n.includes("slide") ? 0.7 : 0.5));
    gain.gain.setValueAtTime(0.9, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.9);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.9);
    return;
  }

  if (n.includes("kick") || n.includes("floor")) {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.frequency.setValueAtTime(180, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(40, ctx.currentTime + 0.18);
    gain.gain.setValueAtTime(1.0, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.35);
    return;
  }

  if (n.includes("snare") || n.includes("snap") || n.includes("rim")) {
    // Noise burst + tone layer
    const noiseLen = Math.floor(ctx.sampleRate * 0.18);
    const noiseBuf = ctx.createBuffer(1, noiseLen, ctx.sampleRate);
    const data = noiseBuf.getChannelData(0);
    for (let i = 0; i < noiseLen; i++) data[i] = Math.random() * 2 - 1;
    const noiseSrc = ctx.createBufferSource();
    noiseSrc.buffer = noiseBuf;
    const hp = ctx.createBiquadFilter();
    hp.type = "highpass";
    hp.frequency.value = 900;
    const noiseGain = ctx.createGain();
    noiseSrc.connect(hp);
    hp.connect(noiseGain);
    noiseGain.connect(ctx.destination);
    noiseGain.gain.setValueAtTime(0.7, ctx.currentTime);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.18);
    noiseSrc.start();

    const toneOsc = ctx.createOscillator();
    const toneGain = ctx.createGain();
    toneOsc.connect(toneGain);
    toneGain.connect(ctx.destination);
    toneOsc.frequency.setValueAtTime(n.includes("rim") ? 320 : 220, ctx.currentTime);
    toneGain.gain.setValueAtTime(0.4, ctx.currentTime);
    toneGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
    toneOsc.start(ctx.currentTime);
    toneOsc.stop(ctx.currentTime + 0.08);
    return;
  }

  if (n.includes("clap")) {
    // Clap = multiple rapid noise bursts
    for (let i = 0; i < 3; i++) {
      const len = Math.floor(ctx.sampleRate * 0.03);
      const buf = ctx.createBuffer(1, len, ctx.sampleRate);
      const d = buf.getChannelData(0);
      for (let j = 0; j < len; j++) d[j] = Math.random() * 2 - 1;
      const src = ctx.createBufferSource();
      src.buffer = buf;
      const hp = ctx.createBiquadFilter();
      hp.type = "highpass";
      hp.frequency.value = 1200;
      const g = ctx.createGain();
      src.connect(hp); hp.connect(g); g.connect(ctx.destination);
      g.gain.setValueAtTime(0.5, ctx.currentTime + i * 0.012);
      g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + i * 0.012 + 0.03);
      src.start(ctx.currentTime + i * 0.012);
    }
    return;
  }

  if (n.includes("hi-hat") || (n.includes("hat") && !n.includes("shaker"))) {
    const len = Math.floor(ctx.sampleRate * (n.includes("roll") || n.includes("pattern") ? 0.12 : 0.04));
    const buf = ctx.createBuffer(1, len, ctx.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
    const src = ctx.createBufferSource();
    src.buffer = buf;
    const hp = ctx.createBiquadFilter();
    hp.type = "highpass";
    hp.frequency.value = 9000;
    const g = ctx.createGain();
    src.connect(hp); hp.connect(g); g.connect(ctx.destination);
    g.gain.setValueAtTime(0.35, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + len / ctx.sampleRate);
    src.start();
    return;
  }

  if (n.includes("boom") || n.includes("impact") || n.includes("taiko") || n.includes("timpani")) {
    for (let i = 0; i < 3; i++) {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.frequency.setValueAtTime(90 / (i + 1), ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(22, ctx.currentTime + 0.9);
      gain.gain.setValueAtTime(0.5 - i * 0.1, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.9);
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.9);
    }
    // Add noise burst for attack
    const len2 = Math.floor(ctx.sampleRate * 0.05);
    const buf2 = ctx.createBuffer(1, len2, ctx.sampleRate);
    const d2 = buf2.getChannelData(0);
    for (let i = 0; i < len2; i++) d2[i] = Math.random() * 2 - 1;
    const src2 = ctx.createBufferSource();
    src2.buffer = buf2;
    const g2 = ctx.createGain();
    src2.connect(g2); g2.connect(ctx.destination);
    g2.gain.setValueAtTime(0.6, ctx.currentTime);
    g2.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);
    src2.start();
    return;
  }

  if (n.includes("conga") || n.includes("djembe") || n.includes("talking") || n.includes("log")) {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.type = "sine";
    osc.frequency.setValueAtTime(n.includes("log") ? 180 : 260, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(n.includes("log") ? 100 : 140, ctx.currentTime + 0.14);
    gain.gain.setValueAtTime(0.85, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.18);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.18);
    return;
  }

  if (n.includes("shaker") || n.includes("tamb") || n.includes("wood") || n.includes("afro")) {
    const len = Math.floor(ctx.sampleRate * 0.08);
    const buf = ctx.createBuffer(1, len, ctx.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
    const src = ctx.createBufferSource();
    src.buffer = buf;
    const bp = ctx.createBiquadFilter();
    bp.type = "bandpass";
    bp.frequency.value = n.includes("wood") ? 4000 : 7000;
    bp.Q.value = 2;
    const g = ctx.createGain();
    src.connect(bp); bp.connect(g); g.connect(ctx.destination);
    g.gain.setValueAtTime(0.4, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
    src.start();
    return;
  }

  if (n.includes("riser") || n.includes("sweep") || n.includes("atmosphere") || n.includes("fx") || n.includes("transition")) {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.type = "sawtooth";
    const isDown = n.includes("down");
    osc.frequency.setValueAtTime(isDown ? 800 : 150, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(isDown ? 80 : 900, ctx.currentTime + 1.0);
    gain.gain.setValueAtTime(isDown ? 0.3 : 0.0, ctx.currentTime);
    gain.gain.linearRampToValueAtTime(isDown ? 0.0 : 0.25, ctx.currentTime + 0.8);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.0);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 1.0);
    return;
  }

  if (n.includes("midi") || n.includes("vinyl") || n.includes("ride") || n.includes("cymbal")) {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const len = Math.floor(ctx.sampleRate * 0.3);
    const buf = ctx.createBuffer(1, len, ctx.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
    const src = ctx.createBufferSource();
    src.buffer = buf;
    const bp = ctx.createBiquadFilter();
    bp.type = "bandpass";
    bp.frequency.value = 5000;
    bp.Q.value = 0.5;
    const g = ctx.createGain();
    src.connect(bp); bp.connect(g); g.connect(ctx.destination);
    g.gain.setValueAtTime(0.3, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);
    src.start();
    osc.connect(gain); gain.connect(ctx.destination);
    osc.frequency.value = n.includes("vinyl") ? 50 : 200;
    gain.gain.setValueAtTime(0.3, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.2);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.2);
    return;
  }

  // Generic percussion fallback
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.frequency.setValueAtTime(350, ctx.currentTime);
  osc.frequency.exponentialRampToValueAtTime(120, ctx.currentTime + 0.1);
  gain.gain.setValueAtTime(0.6, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.12);
  osc.start(ctx.currentTime);
  osc.stop(ctx.currentTime + 0.12);
}

export default function DrumKitAudioPlayer({ sounds, accentColor }: Props) {
  const [playing, setPlaying] = useState<number | null>(null);

  const handlePlay = useCallback((index: number, name: string) => {
    setPlaying(index);
    triggerSound(name);
    // Reset after ~1s
    setTimeout(() => setPlaying((prev) => (prev === index ? null : prev)), 1000);
  }, []);

  return (
    <div className="space-y-1">
      {sounds.map((sound, i) => {
        const isPlaying = playing === i;
        return (
          <button
            key={i}
            onClick={() => handlePlay(i, sound.name)}
            className="w-full flex items-center gap-4 px-4 py-3 bg-[#0f0f0f] hover:bg-[#161616] transition-colors duration-150 border border-transparent hover:border-white/5 group text-left"
          >
            {/* Track number / play icon */}
            <div className="w-8 shrink-0 flex items-center justify-center">
              {isPlaying ? (
                <div className="flex items-end gap-[2px] h-5">
                  {[0, 1, 2, 3].map((j) => (
                    <div
                      key={j}
                      className="w-[3px] rounded-sm animate-bounce"
                      style={{
                        height: `${50 + j * 12}%`,
                        background: accentColor,
                        animationDelay: `${j * 80}ms`,
                        animationDuration: "0.5s",
                      }}
                    />
                  ))}
                </div>
              ) : (
                <span className="text-xs text-[#444] group-hover:hidden font-mono">{String(i + 1).padStart(2, "0")}</span>
              )}
              {!isPlaying && (
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  className="hidden group-hover:block"
                  fill={accentColor}
                >
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              )}
            </div>

            {/* Sound name */}
            <span
              className="flex-1 text-sm font-medium text-[#ccc] group-hover:text-white transition-colors"
              style={isPlaying ? { color: accentColor } : {}}
            >
              {sound.name}
            </span>

            {/* Decorative mini waveform */}
            <div className="hidden sm:flex items-end gap-[2px] h-4 w-16 opacity-20 group-hover:opacity-60 transition-opacity">
              {[60, 90, 40, 70, 50, 80, 35, 65].map((h, j) => (
                <div
                  key={j}
                  className="flex-1 rounded-sm"
                  style={{ height: `${h}%`, background: accentColor }}
                />
              ))}
            </div>

            {/* BPM tag */}
            {sound.bpm > 0 && (
              <span className="hidden sm:block text-[10px] font-bold text-[#444] w-14 text-right shrink-0">
                {sound.bpm} BPM
              </span>
            )}

            {/* Key tag */}
            <span
              className="text-[10px] font-bold w-12 text-right shrink-0"
              style={{ color: sound.key === "—" ? "#333" : accentColor + "99" }}
            >
              {sound.key}
            </span>
          </button>
        );
      })}
    </div>
  );
}
