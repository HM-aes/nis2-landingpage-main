"use client";

import { useEffect, type ReactNode } from "react";
import Lenis from "lenis";
import { frame, cancelFrame } from "motion/react";

const HEADER_OFFSET = 72;

export default function LenisProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    // Start every fresh load at the top unless the URL points at a section.
    // (history.scrollRestoration is already set to "manual" in the head script.)
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    window.__lenis = lenis;

    function update(data: { timestamp: number }) {
      lenis.raf(data.timestamp);
    }
    frame.update(update, true);

    // Anchor links (header nav, hero CTAs, etc.) need to be routed through
    // Lenis explicitly — it takes over scrolling, so the browser's native
    // hash-jump no longer fires.
    const handleClick = (event: MouseEvent) => {
      const anchor = (event.target as HTMLElement).closest<HTMLAnchorElement>(
        'a[href^="#"]'
      );
      if (!anchor) return;
      const hash = anchor.getAttribute("href");
      if (!hash || hash === "#") return;
      const target = document.querySelector(hash);
      if (!target) return;

      event.preventDefault();
      lenis.scrollTo(target as HTMLElement, { offset: -HEADER_OFFSET });
      history.pushState(null, "", hash);
    };
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
      cancelFrame(update);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
