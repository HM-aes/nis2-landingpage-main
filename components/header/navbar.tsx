"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

const SECTIONS = [
  { label: "About", href: "#about" },
  { label: "Dashboard", href: "#evidence" },
  { label: "Scope", href: "#scope" },
  { label: "Tech", href: "#tech" },
  { label: "Report", href: "#signup" },
];

const ease = [0.22, 1, 0.36, 1] as const;

const LOGO_AT   = 0.5;
const NAV_START = 0.85;
const NAV_STEP  = 0.18;
const CTA_AT    = NAV_START + SECTIONS.length * NAV_STEP + 0.2;

const item = (delay: number) => ({
  initial: { opacity: 0, y: -6 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.0, delay, ease },
});

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ── Main navbar bar ── */}
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:px-6">

        {/* ── Logo ── */}
        <motion.a
          href="#top"
          aria-label="NIS2 Analyzer — back to top"
          {...item(LOGO_AT)}
          className="font-mono text-sm tracking-widest font-semibold transition-opacity hover:opacity-75 shrink-0"
        >
          <span style={{ color: "#d97706" }}>NIS2</span>
          <span style={{ color: "#f59e0b", fontWeight: 900 }}>·</span>
          <span style={{ color: "#a1a1aa" }}>ANALYZER</span>
        </motion.a>

        {/* ── Desktop nav links ── */}
        <nav
          aria-label="Sections"
          className="hidden items-center gap-0.5 md:flex"
        >
          {SECTIONS.map((section, i) => (
            <motion.a
              key={section.href}
              href={section.href}
              {...item(NAV_START + i * NAV_STEP)}
              className="group relative px-3 py-1.5 rounded-lg text-[13px] font-medium transition-all duration-200"
              style={{ color: "#a1a1aa" }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.textDecoration = "underline";
                (e.currentTarget as HTMLElement).style.textUnderlineOffset = "4px";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.textDecoration = "none";
              }}
            >
              {section.label}
            </motion.a>
          ))}
        </nav>

        {/* ── Right side: CTA + mobile hamburger ── */}
        <motion.div {...item(CTA_AT)} className="flex items-center gap-2 sm:gap-3">
          {/* CTA — hidden on very small screens, shown from sm upward */}
          <a
            href="#signup"
            className="hidden sm:inline-flex btn-glow-primary rounded-lg px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition-all hover:scale-105"
          >
            Start free audit
          </a>
          {/* Hamburger — md and below */}
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(v => !v)}
            className="flex md:hidden items-center justify-center w-9 h-9 rounded-lg transition-colors"
            style={{ color: "#71717a" }}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </motion.div>
      </div>

      {/* ── Mobile slide-down menu ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease }}
            className="md:hidden overflow-hidden border-t border-white/[0.06]"
            style={{ background: "rgba(24,24,27,0.97)" }}
          >
            <nav className="flex flex-col px-4 py-3 gap-1">
              {SECTIONS.map((section, i) => (
                <motion.a
                  key={section.href}
                  href={section.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.3, ease }}
                  onClick={() => setOpen(false)}
                  className="flex items-center px-3 py-3 rounded-xl text-sm font-medium transition-all duration-150"
                  style={{ color: "#a1a1aa" }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.textDecoration = "underline";
                    (e.currentTarget as HTMLElement).style.textUnderlineOffset = "4px";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.textDecoration = "none";
                  }}
                >
                  {section.label}
                </motion.a>
              ))}
              {/* CTA in mobile menu */}
              <a
                href="#signup"
                onClick={() => setOpen(false)}
                className="mt-2 btn-glow-primary flex items-center justify-center rounded-xl px-4 py-3 text-sm font-semibold uppercase tracking-wider"
              >
                Start free audit
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
