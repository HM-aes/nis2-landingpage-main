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

      <div className="mx-auto max-w-5xl px-4 pb-24 sm:px-10 lg:px-16">
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 24 }}
          whileInView={reduced ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1, ease }}
          className="max-w-2xl"
        >
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Who&apos;s behind AES
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              I&apos;m Hassan — a solo developer and the founder of AES AI
              Solutions. I build RAG-based compliance tools and OSINT platforms
              for clients who need serious systems without a serious headcount.
            </p>
            <p>
              Before this I spent years as a client-facing trainer and a
              financial-markets data specialist. That&apos;s not a footnote —
              it&apos;s the reason my technical work actually lands with the
              non-technical people who have to approve it.
            </p>
            <p>
              AES AI Solutions is KVK-registered in the Netherlands. I operate as
              a freelancing digital nomad, based for now in Porto.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
