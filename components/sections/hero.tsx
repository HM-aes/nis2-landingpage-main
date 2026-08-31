"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, ArrowDown } from "lucide-react";
import { Chip } from "@heroui/react";
import { BOOKING_URL } from "@/lib/site";

const STACK = ["Django", "Pydantic AI", "Qdrant", "HTMX", "Alpine.js"] as const;

const ease = [0.22, 1, 0.36, 1] as const;
const BASE = 0.15;
const STEP = 0.12;

const settle = (i: number, distance = 20) => ({
  initial: { opacity: 0, y: distance },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay: BASE + i * STEP, ease },
});

export default function Hero() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 420], [1, 0]);
  const y = useTransform(scrollY, [0, 420], [0, -60]);

  return (
    <section className="relative overflow-hidden px-4 pt-16 pb-16 sm:px-10 sm:pt-24 sm:pb-20 lg:pl-16">
      {/* Ambient glow — single accent, dialled back */}
      <div className="aria-hidden pointer-events-none absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-amber-500/[.07] blur-3xl" />

      <motion.div style={{ opacity, y }} className="max-w-4xl">
        {/* ── 1. HERO ── */}
        <motion.h1
          {...settle(0, 24)}
          className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-[4.25rem]"
        >
          I build the hard AI systems{" "}
          <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200 bg-clip-text text-transparent">
            most teams won&apos;t attempt.
          </span>
        </motion.h1>

        <motion.p
          {...settle(1, 18)}
          className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          Compliance RAG, OSINT platforms, and production LLM tooling — designed,
          built, and shipped by one person who&apos;s done it before.
        </motion.p>

        <motion.div
          {...settle(2, 14)}
          className="mt-8 flex flex-wrap items-center gap-4"
        >
          {/* TODO(placeholder): BOOKING_URL — set real Calendly/Cal.com link in lib/site.ts */}
          <a
            href={BOOKING_URL}
            className="group btn-glow-primary inline-flex h-11 items-center gap-2.5 rounded-xl px-6 text-sm font-semibold tracking-wide transition-all hover:scale-[1.03]"
          >
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

        {/* ── 2. CREDIBILITY STRIP ── */}
        <motion.div
          {...settle(3, 12)}
          className="mt-14 border-t border-white/[.08] pt-8"
        >
          <div className="flex flex-wrap items-center gap-2">
            <span className="mr-1 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-slatey-400">
              Stack
            </span>
            {STACK.map((tech) => (
              <Chip
                key={tech}
                size="sm"
                variant="soft"
                className="font-mono text-[11px] font-semibold tracking-wide"
              >
                {tech}
              </Chip>
            ))}
          </div>

          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Most engineers can build the system. Far fewer can sit in a room with
            a non-technical executive and make them understand{" "}
            <em className="text-foreground/90 not-italic">why it matters</em>. My
            background training client-facing teams and working with
            financial-markets data means I ship the tech{" "}
            <strong className="font-semibold text-foreground">and</strong>{" "}
            translate it for the people who sign off on it.
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
