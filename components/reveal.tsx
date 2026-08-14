"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

/**
 * Reveal — scroll-triggered entrance animation.
 *
 * Wraps any content and fades + lifts it in as it enters the viewport.
 * Designed to feel slow, elegant and deliberate — not snappy.
 * Includes prefers-reduced-motion safety check.
 */
export function Reveal({
  children,
  delay = 0,
  distance = 32,
  className,
}: {
  children: ReactNode;
  delay?: number;
  distance?: number;
  className?: string;
}) {
  const reduced = useReducedMotion();

  if (reduced) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1], // heavy deceleration — feels weighty, not snappy
      }}
    >
      {children}
    </motion.div>
  );
}

// Stagger container for lists / grids
export const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

export const staggerItem = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};
