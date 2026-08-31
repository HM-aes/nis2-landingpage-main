"use client";

import { motion, useReducedMotion } from "motion/react";
import SectionRule from "@/components/section-rule";

const ease = [0.22, 1, 0.36, 1] as const;

export default function About() {
  const reduced = useReducedMotion();

  return (
    <section id="about" className="relative py-6">
      <motion.div
        initial={reduced ? false : { opacity: 0, y: -30 }}
        whileInView={reduced ? {} : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease }}
      >
        <SectionRule label="ABOUT" align="left" />
      </motion.div>

      <div className="mx-auto max-w-5xl px-6 pb-24">
        <motion.div
          className="flex flex-wrap items-center gap-3"
          initial={reduced ? false : { opacity: 0, y: -30 }}
          whileInView={reduced ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease }}
        >
          <span className="inline-flex items-center rounded-full border border-amber-300 bg-amber-400 px-4 py-1.5 font-mono text-xs font-bold tracking-wider text-black shadow-sm">
            Who&apos;s behind AES
          </span>
          <span className="inline-flex items-center rounded-full border border-violet-500/25 bg-violet-500/10 px-4 py-1.5 font-mono text-xs font-semibold tracking-wider text-violet-400">
            KVK-REGISTERED · NL
          </span>
        </motion.div>

        <motion.h2
          className="mt-5 font-display text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          initial={reduced ? false : { opacity: 0, y: -30 }}
          whileInView={reduced ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.08, ease }}
        >
          A solo developer who{" "}
          <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200 bg-clip-text text-transparent">
            ships and translates.
          </span>
        </motion.h2>

        <motion.div
          className="mt-6 max-w-3xl space-y-4 text-lg leading-relaxed text-muted-foreground"
          initial={reduced ? false : { opacity: 0, x: -40 }}
          whileInView={reduced ? {} : { opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.25, ease }}
        >
          <p>
            I&apos;m Hassan — a solo developer and the founder of AES AI
            Solutions. I build RAG-based compliance tools and OSINT platforms for
            clients who need serious systems without a serious headcount.
          </p>
          <p>
            Before this I spent years as a client-facing trainer and a
            financial-markets data specialist. That&apos;s not a footnote —
            it&apos;s the reason my technical work actually lands with the
            non-technical people who have to approve it.
          </p>
          <p>
            AES AI Solutions is KVK-registered in the Netherlands. I operate as a
            freelancing digital nomad, based for now in Porto.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
