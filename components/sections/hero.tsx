"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Chip } from "@heroui/react";

const SECTOR_CONFIG: Record<string, { color: "warning" | "success" | "accent" | "danger" | "default" }> = {
  ENERGY: { color: "warning" },
  HEALTH: { color: "success" },
  FINANCE: { color: "accent" },
  TRANSPORT: { color: "default" },
  "DIGITAL INFRASTRUCTURE": { color: "danger" },
  MANUFACTURING: { color: "warning" },
  FOOD: { color: "success" },
  CHEMICALS: { color: "accent" },
  "+ 10 MORE": { color: "default" },
};

const SECTORS = [
  "ENERGY", "HEALTH", "FINANCE", "TRANSPORT",
  "DIGITAL INFRASTRUCTURE", "MANUFACTURING",
  "FOOD", "CHEMICALS", "+ 10 MORE",
] as const;

const PIPELINE = [
  "UPLOAD POLICIES",
  "AI AUDITS 46 ARTICLES",
  "BOARD-READY REPORT",
];

const ease = [0.22, 1, 0.36, 1] as const;

const BASE = 2.7;
const STEP = 0.35;

const settle = (i: number, distance = 20) => ({
  initial: { opacity: 0, y: distance },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.1, delay: BASE + i * STEP, ease },
});

export default function Hero() {
  // Track window scroll — no target ref, avoids SSR hydration mismatch
  const { scrollY } = useScroll();

  // Hero section is roughly viewport height (~800px)
  // Fade and drift up as user scrolls the first 400px
  const opacity = useTransform(scrollY, [0, 420], [1, 0]);
  const y       = useTransform(scrollY, [0, 420], [0, -60]);
  const scale   = useTransform(scrollY, [0, 420], [1, 0.97]);

  return (
    <section className="relative overflow-hidden px-4 pt-16 pb-20 sm:px-10 sm:pt-20 sm:pb-24 lg:pl-16">
      {/* Background ambient glow */}
      <div className="aria-hidden pointer-events-none absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-amber-500/10 blur-3xl" />
      <div className="aria-hidden pointer-events-none absolute top-20 right-10 h-96 w-96 rounded-full bg-amber-400/5 blur-3xl" />

      {/* Scroll-driven wrapper */}
      <motion.div style={{ opacity, y, scale }}>

        {/* ── 1. Badge ── */}
        <motion.div {...settle(0, 12)} className="flex items-center gap-2.5">
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-500" />
          </span>
          <Chip size="sm" color="warning" className="font-mono text-[10px] tracking-wide font-semibold px-1">
            EU DIRECTIVE 2022/2555 · IN FORCE ACROSS ALL MEMBER STATES
          </Chip>
        </motion.div>

        {/* ── 2. H1 ── */}
        <motion.h1
          {...settle(1, 24)}
          className="mt-6 max-w-3xl font-display text-4xl font-extrabold leading-[1.06] tracking-tight sm:text-5xl lg:text-[4.25rem] text-foreground"
        >
          Your AI compliance auditor{" "}
          <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200 bg-clip-text text-transparent">
            for NIS2.
          </span>
        </motion.h1>

        {/* ── 3. Subtitle ── */}
        <motion.p
          {...settle(2, 18)}
          className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          Upload your security policies — our AI analyses them against all 46
          articles of the directive, flags every gap with severity and exact
          article citation, and delivers a board-ready report in minutes.
        </motion.p>

        {/* ── 4. Sector chips ── */}
        <motion.div {...settle(3, 12)} className="mt-6 flex flex-wrap gap-2">
          {SECTORS.map((sector) => {
            const config = SECTOR_CONFIG[sector] || { color: "default" };
            return (
              <Chip
                key={sector}
                size="sm"
                color={config.color}
                className="transition-all duration-200 hover:scale-105 font-sans text-xs uppercase font-semibold tracking-wide"
              >
                {sector}
              </Chip>
            );
          })}
        </motion.div>

        {/* ── 5. CTA buttons ── */}
        <motion.div {...settle(4, 14)} className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#signup"
            className="group btn-glow-primary inline-flex h-11 items-center gap-2.5 rounded-xl px-6 font-semibold text-sm tracking-wide transition-all hover:scale-[1.03]"
          >
            <Sparkles className="size-4 text-amber-400 animate-pulse" />
            Start free audit
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#scope"
            className="btn-corporate-light inline-flex h-11 items-center gap-2 rounded-xl px-5 text-sm font-medium transition-all"
          >
            See if you&apos;re covered
            <ArrowRight size={14} className="opacity-60" />
          </a>
        </motion.div>

        {/* ── 6. Pipeline strip ── */}
        <motion.div {...settle(5, 10)} className="mt-10 flex flex-wrap items-center gap-2">
          {PIPELINE.map((step, i) => (
            <span key={step} className="flex items-center gap-2">
              <Chip size="sm" color="warning" className="font-mono text-[10px] font-bold tracking-wide">
                {step}
              </Chip>
              {i < PIPELINE.length - 1 && (
                <span className="relative flex items-center">
                  <svg width="32" height="2" viewBox="0 0 32 2" fill="none" aria-hidden>
                    <line x1="0" y1="1" x2="32" y2="1" stroke="currentColor" strokeWidth="1" strokeDasharray="2 4" className="text-amber-500/40 dash-animate" />
                  </svg>
                  <ArrowRight size={12} className="text-amber-400/60" />
                </span>
              )}
            </span>
          ))}
        </motion.div>

      </motion.div>
    </section>
  );
}
