"use client";

import { motion, useReducedMotion } from "motion/react";
import SectionRule from "@/components/section-rule";
import Nis2AboutContent from "@/components/nis2-ai-card";

const ease = [0.22, 1, 0.36, 1] as const;

export default function About() {
  const reduced = useReducedMotion();

  return (
    <section id="about" className="relative py-6">
      {/*
       * Behavior 2 — Section header drop:
       * The rule (section label) drops from y:-30, opacity:0 to settled.
       * whileInView fires once when the section enters the viewport.
       */}
      <motion.div
        initial={reduced ? false : { opacity: 0, y: -30 }}
        whileInView={reduced ? {} : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease }}
      >
        <SectionRule label="NIS2 & AI SOLUTION" align="left" />
      </motion.div>

      {/* Content block — animations are handled inside Nis2AboutContent */}
      <div className="px-6 pb-24 sm:px-10 lg:px-16">
        <Nis2AboutContent />
      </div>
    </section>
  );
}
