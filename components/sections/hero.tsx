"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, ArrowDown } from "lucide-react";
import { BOOKING_URL } from "@/lib/site";

const ease = [0.22, 1, 0.36, 1] as const;
const BASE = 0.15;
const STEP = 0.14;

const settle = (i: number, distance = 20) => ({
  initial: { opacity: 0, y: distance },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.95, delay: BASE + i * STEP, ease },
});

export default function Hero() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [140, 720], [1, 0]);
  const y = useTransform(scrollY, [140, 720], [0, -40]);

  return (
    <section className="relative overflow-hidden px-4 pt-20 pb-24 sm:px-10 sm:pt-28 sm:pb-28 lg:pl-16">
      {/* Ambient aurora */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div
          className="absolute -left-10 -top-24 h-[32rem] w-[32rem] rounded-full bg-amber-500/[.09] blur-[130px]"
          style={{ animation: "bento-aurora-a 24s ease-in-out infinite" }}
        />
        <div
          className="absolute right-0 top-10 h-[24rem] w-[24rem] rounded-full bg-violet-500/[.06] blur-[120px]"
          style={{ animation: "bento-aurora-b 30s ease-in-out infinite" }}
        />
      </div>

      <motion.div style={{ opacity, y }} className="relative max-w-3xl">
        {/* Eyebrow */}
        <motion.p
          {...settle(0, 12)}
          className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-amber-400/90"
        >
          AI solutions for compliance, security, and complex work
        </motion.p>

        {/* Headline */}
        <motion.h1
          {...settle(1, 24)}
          className="mt-5 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-[4.25rem]"
        >
          Hard problems,{" "}
          <span className="text-amber-300">quietly solved.</span>
        </motion.h1>

        {/* Subhead */}
        <motion.p
          {...settle(2, 18)}
          className="mt-6 max-w-xl text-base font-light leading-relaxed text-foreground/75 sm:text-lg"
        >
          AES builds AI tools that take the heavy, expert-level work off your
          team&apos;s plate — and hand back clear answers anyone can act on.
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...settle(3, 14)}
          className="mt-9 flex flex-wrap items-center gap-4"
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
            href="#solutions"
            className="btn-corporate-light inline-flex h-11 items-center gap-2 rounded-xl px-5 text-sm font-medium transition-all"
          >
            See our solutions
            <ArrowDown size={14} className="opacity-60" />
          </a>
        </motion.div>

        {/* Supporting line */}
        <motion.p
          {...settle(4, 10)}
          className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-slatey-400"
        >
          <span>Built to run in production.</span>
          <span className="text-slatey-500">·</span>
          <span>Explained in plain language.</span>
          <span className="text-slatey-500">·</span>
          <span>Yours to control.</span>
        </motion.p>
      </motion.div>
    </section>
  );
}
