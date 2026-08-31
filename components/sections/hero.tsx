"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, ArrowDown, Sparkles } from "lucide-react";
import { Chip } from "@heroui/react";
import { BOOKING_URL } from "@/lib/site";

const STACK_CONFIG: Record<
  string,
  { color: "warning" | "success" | "accent" | "danger" | "default" }
> = {
  Django: { color: "success" },
  "Pydantic AI": { color: "accent" },
  Qdrant: { color: "warning" },
  HTMX: { color: "danger" },
  "Alpine.js": { color: "default" },
};

const STACK = ["Django", "Pydantic AI", "Qdrant", "HTMX", "Alpine.js"] as const;

const PIPELINE = ["COMPLIANCE RAG", "OSINT PLATFORMS", "PRODUCTION LLM TOOLING"];

const ease = [0.22, 1, 0.36, 1] as const;

const BASE = 0.4;
const STEP = 0.28;

const settle = (i: number, distance = 20) => ({
  initial: { opacity: 0, y: distance },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.0, delay: BASE + i * STEP, ease },
});

export default function Hero() {
  const { scrollY } = useScroll();

  const opacity = useTransform(scrollY, [0, 420], [1, 0]);
  const y = useTransform(scrollY, [0, 420], [0, -60]);
  const scale = useTransform(scrollY, [0, 420], [1, 0.97]);

  return (
    <section className="relative overflow-hidden px-4 pt-16 pb-20 sm:px-10 sm:pt-20 sm:pb-24 lg:pl-16">
      {/* Background ambient glow */}
      <div className="aria-hidden pointer-events-none absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-amber-500/10 blur-3xl" />
      <div className="aria-hidden pointer-events-none absolute top-20 right-10 h-96 w-96 rounded-full bg-amber-400/5 blur-3xl" />

      <motion.div style={{ opacity, y, scale }}>
        {/* ── 1. Badge ── */}
        <motion.div {...settle(0, 12)} className="flex items-center gap-2.5">
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-500" />
          </span>
          <Chip
            size="sm"
            color="warning"
            className="px-1 font-mono text-[10px] font-semibold tracking-wide"
          >
            INDEPENDENT AI ENGINEERING · ONE CLIENT AT A TIME
          </Chip>
        </motion.div>

        {/* ── 2. Brand line + H1 ── */}
        <motion.div {...settle(1, 24)} className="mt-6 max-w-3xl">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-amber-400/90">
            AES AI Solutions
          </p>
          <h1 className="mt-3 font-display text-4xl font-extrabold leading-[1.06] tracking-tight text-foreground sm:text-5xl lg:text-[4.25rem]">
            I build the hard AI systems{" "}
            <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200 bg-clip-text text-transparent">
              most teams won&apos;t attempt.
            </span>
          </h1>
        </motion.div>

        {/* ── 3. Subtitle ── */}
        <motion.p
          {...settle(2, 18)}
          className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          Compliance RAG, OSINT platforms, and production LLM tooling — designed,
          built, and shipped by one person who&apos;s done it before.
        </motion.p>

        {/* ── 4. Stack chips ── */}
        <motion.div {...settle(3, 12)} className="mt-6 flex flex-wrap gap-2">
          {STACK.map((tech) => {
            const config = STACK_CONFIG[tech] || { color: "default" };
            return (
              <Chip
                key={tech}
                size="sm"
                color={config.color}
                className="font-sans text-xs font-semibold uppercase tracking-wide transition-all duration-200 hover:scale-105"
              >
                {tech}
              </Chip>
            );
          })}
        </motion.div>

        {/* ── 5. CTA buttons ── */}
        <motion.div
          {...settle(4, 14)}
          className="mt-8 flex flex-wrap items-center gap-4"
        >
          {/* TODO(placeholder): BOOKING_URL — set real Calendly/Cal.com link in lib/site.ts */}
          <a
            href={BOOKING_URL}
            className="group btn-glow-primary inline-flex h-11 items-center gap-2.5 rounded-xl px-6 text-sm font-semibold tracking-wide transition-all hover:scale-[1.03]"
          >
            <Sparkles className="size-4 animate-pulse text-amber-400" />
            Book a call
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
          <a
            href="#work"
            className="btn-corporate-light inline-flex h-11 items-center gap-2 rounded-xl px-5 text-sm font-medium transition-all"
          >
            See the work
            <ArrowDown size={14} className="opacity-60" />
          </a>
        </motion.div>

        {/* ── 6. Pipeline strip ── */}
        <motion.div
          {...settle(5, 10)}
          className="mt-10 flex flex-wrap items-center gap-2"
        >
          {PIPELINE.map((step, i) => (
            <span key={step} className="flex items-center gap-2">
              <Chip
                size="sm"
                color="warning"
                className="font-mono text-[10px] font-bold tracking-wide"
              >
                {step}
              </Chip>
              {i < PIPELINE.length - 1 && (
                <span className="relative flex items-center">
                  <svg
                    width="32"
                    height="2"
                    viewBox="0 0 32 2"
                    fill="none"
                    aria-hidden
                  >
                    <line
                      x1="0"
                      y1="1"
                      x2="32"
                      y2="1"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeDasharray="2 4"
                      className="dash-animate text-amber-500/40"
                    />
                  </svg>
                  <ArrowRight size={12} className="text-amber-400/60" />
                </span>
              )}
            </span>
          ))}
        </motion.div>

        {/* ── 7. Credibility strip ── */}
        <motion.div
          {...settle(6, 10)}
          className="mt-12 max-w-2xl border-t border-white/[.08] pt-8"
        >
          <p className="text-sm leading-relaxed text-muted-foreground">
            Most engineers can build the system. Far fewer can sit in a room with
            a non-technical executive and make them understand{" "}
            <span className="font-semibold text-foreground">why it matters</span>.
            My background training client-facing teams and working with
            financial-markets data means I ship the tech{" "}
            <span className="font-semibold text-foreground">and</span> translate
            it for the people who sign off on it.
          </p>
          <p className="mt-5 font-mono text-xs text-slatey-400">
            AES AI Solutions — KVK-registered, Netherlands · Operating from Porto,
            Portugal
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
