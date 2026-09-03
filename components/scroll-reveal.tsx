"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
  useReducedMotion,
  type MotionValue,
} from "motion/react";

function Word({
  children,
  progress,
  range,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.22, 1]);
  const blurPx = useTransform(progress, range, [4, 0]);
  const filter = useMotionTemplate`blur(${blurPx}px)`;
  return (
    <motion.span style={{ opacity, filter }} className="mr-[0.25em] inline-block">
      {children}
    </motion.span>
  );
}

/**
 * Cinematic scroll-reveal heading — words illuminate one by one as the
 * block passes through the viewport. Renders fully visible when reduced
 * motion is requested.
 */
export default function ScrollReveal({
  text,
  as = "h2",
  className = "",
}: {
  text: string;
  as?: "h2" | "h3" | "p";
  className?: string;
}) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "end 0.45"],
  });

  const Tag = motion[as];
  const words = text.split(" ");

  if (reduced) {
    const Static = as;
    return <Static className={className}>{text}</Static>;
  }

  return (
    <Tag ref={ref} className={className}>
      {words.map((w, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={`${w}-${i}`} progress={scrollYProgress} range={[start, end]}>
            {w}
          </Word>
        );
      })}
    </Tag>
  );
}
