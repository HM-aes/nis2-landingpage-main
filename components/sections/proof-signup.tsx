"use client";

import { Check, ShieldCheck } from "lucide-react";
import FadeIn from "@/components/fade-in";
import FindingCard from "@/components/finding-card";
import SectionRule from "@/components/section-rule";
import { Button } from "@heroui/react";

const TRUST = [
  "Findings cite exact articles of the directive",
  "EU-hosted, GDPR-compliant, TLS-encrypted",
  "Air-gapped tier available for sensitive environments",
];

export default function ProofSignup() {
  return (
    <section id="signup" className="relative py-8">
      <SectionRule label="REPORT" />
      <div className="mx-auto grid max-w-5xl gap-10 px-6 pb-20 md:grid-cols-2">
        <FadeIn>
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Evidence your board — and your regulator — can read.
          </h2>
          <div className="mt-8 overflow-hidden rounded-xl border border-border bg-card shadow-xl">
            <div className="flex justify-between border-b border-border bg-surface-secondary px-4 py-2.5 font-mono text-xs text-muted-foreground dark:bg-zinc-950/90">
              <span className="flex items-center gap-1.5 text-amber-600 dark:text-amber-400 font-semibold">
                <ShieldCheck className="size-3.5" /> NIS2 GAP ANALYSIS
              </span>
              <span>p. 14</span>
            </div>
            <FindingCard
              severity="CRITICAL"
              title="No incident notification procedure within 24 hours"
              description="No documented process exists for early-warning notification to the CSIRT or competent authority within 24 hours of a significant incident."
              article="Art. 23(4)(a) — Incident notification"
            />
          </div>
          <ul className="mt-8 space-y-3">
            {TRUST.map((t) => (
              <li key={t} className="flex items-start gap-3 text-sm text-muted-foreground">
                <Check size={18} className="mt-0.5 shrink-0 text-amber-600 dark:text-amber-500" />
                {t}
              </li>
            ))}
          </ul>
        </FadeIn>

        <FadeIn delay={0.08}>
          <div className="glass-card rounded-2xl p-7 shadow-2xl">
            <h3 className="font-display text-xl font-bold text-foreground">Create your account</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Run your first audit free. No credit card required.
            </p>
            <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="mb-1 block font-mono text-xs tracking-wider text-muted-foreground uppercase">Work Email</label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  className="w-full rounded-xl border border-border bg-surface-secondary dark:bg-zinc-950/90 px-4 py-2.5 text-sm text-foreground placeholder-muted-foreground transition-all focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/30"
                />
              </div>
              <div>
                <label className="mb-1 block font-mono text-xs tracking-wider text-muted-foreground uppercase">Password</label>
                <input
                  type="password"
                  required
                  placeholder="••••••••••••"
                  className="w-full rounded-xl border border-border bg-surface-secondary dark:bg-zinc-950/90 px-4 py-2.5 text-sm text-foreground placeholder-muted-foreground transition-all focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/30"
                />
              </div>
              <Button
                type="submit"
                fullWidth
                className="btn-glow-primary h-11 rounded-xl text-sm font-bold tracking-wide transition-all"
              >
                Create Account
              </Button>
            </form>
            <div className="mt-5 grid grid-cols-2 gap-3">
              <Button type="button" variant="outline" className="h-10 rounded-xl border border-border bg-surface-secondary dark:bg-white/5 text-sm font-medium text-muted-foreground hover:bg-foreground/5 hover:text-foreground dark:hover:bg-white/10 dark:hover:text-white">
                Google
              </Button>
              <Button type="button" variant="outline" className="h-10 rounded-xl border border-border bg-surface-secondary dark:bg-white/5 text-sm font-medium text-muted-foreground hover:bg-foreground/5 hover:text-foreground dark:hover:bg-white/10 dark:hover:text-white">
                GitHub
              </Button>
            </div>
            <p className="mt-6 text-center font-mono text-[11px] tracking-widest text-muted-foreground uppercase">
              EU-HOSTED · GDPR · TLS 1.3
            </p>
            <p className="mt-3 text-center text-sm text-muted-foreground">
              Already have an account?{" "}
              <a href="#" className="font-semibold text-amber-600 dark:text-amber-400 underline underline-offset-4 hover:text-amber-500">
                Sign in
              </a>
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
