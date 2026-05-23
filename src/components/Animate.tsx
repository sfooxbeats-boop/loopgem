"use client";

import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

type FadeProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
  style?: React.CSSProperties;
};

/**
 * Defaults to visible after a 700ms fallback timer so content never gets
 * permanently hidden in iframe/preview contexts where IntersectionObserver
 * doesn't fire.
 */
export function FadeIn({
  children,
  className = "",
  delay = 0,
  duration = 0.8,
  style,
}: FadeProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const fallback = setTimeout(() => setShown(true), 700);
    let io: IntersectionObserver | undefined;
    try {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              setShown(true);
              io?.unobserve(el);
            }
          });
        },
        { threshold: 0.05, rootMargin: "0px 0px -40px 0px" }
      );
      io.observe(el);
    } catch {
      setShown(true);
    }
    const raf = requestAnimationFrame(() => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight && r.bottom > 0) setShown(true);
    });
    return () => {
      clearTimeout(fallback);
      cancelAnimationFrame(raf);
      io?.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${shown ? "in" : ""} ${className}`}
      style={{
        ...style,
        ["--reveal-delay" as string]: `${delay * 1000}ms`,
        transitionDuration: `${duration}s`,
      }}
    >
      {children}
    </div>
  );
}

type StaggerProps = {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  baseDelay?: number;
};

export function StaggerChildren({
  children,
  className,
  staggerDelay = 0.1,
  baseDelay = 0,
}: StaggerProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        visible: { transition: { staggerChildren: staggerDelay, delayChildren: baseDelay } },
        hidden: {},
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 28 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function ScaleIn({ children, className, delay = 0 }: FadeProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, scale: 0.92 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.92 }}
      transition={{ duration: 0.55, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
}

type CountUpProps = {
  to: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  decimals?: number;
};

export function CountUp({
  to,
  prefix = "",
  suffix = "",
  duration = 1800,
  decimals = 0,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [val, setVal] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || started) return;
    const fallback = setTimeout(() => setStarted(true), 900);
    let io: IntersectionObserver | undefined;
    try {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              setStarted(true);
              io?.unobserve(el);
            }
          });
        },
        { threshold: 0.3 }
      );
      io.observe(el);
    } catch {
      setStarted(true);
    }
    return () => {
      clearTimeout(fallback);
      io?.disconnect();
    };
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let raf = 0;
    let t0: number | null = null;
    const animate = (t: number) => {
      if (t0 === null) t0 = t;
      const p = Math.min(1, (t - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(to * eased);
      if (p < 1) raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [started, to, duration]);

  const formatted =
    decimals > 0 ? val.toFixed(decimals) : Math.floor(val).toLocaleString();

  return (
    <span ref={ref}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
