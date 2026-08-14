"use client";

/**
 * useLenisScroll
 * --------------
 * Returns a Framer Motion MotionValue that mirrors the Lenis scroll position.
 * This lets useTransform() read smooth scroll values (not the browser's raw
 * scroll position which Lenis overrides) so parallax effects stay perfectly
 * in sync with the silk-smooth Lenis scroll.
 */

import { useEffect } from "react";
import { useMotionValue } from "motion/react";
import Lenis from "lenis";

// Singleton so multiple hooks share the same Lenis instance created by LenisProvider
declare global {
  interface Window { __lenis?: Lenis }
}

export function useLenisScroll() {
  const scrollY = useMotionValue(0);

  useEffect(() => {
    // Poll until LenisProvider has created the instance
    const poll = setInterval(() => {
      if (!window.__lenis) return;
      clearInterval(poll);

      const unsubscribe = window.__lenis.on("scroll", ({ scroll }: { scroll: number }) => {
        scrollY.set(scroll);
      });

      return () => unsubscribe();
    }, 50);

    return () => clearInterval(poll);
  }, [scrollY]);

  return scrollY;
}
