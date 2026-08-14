"use client";

import FadeIn from "@/components/fade-in";
import SectionRule from "@/components/section-rule";
import DashboardPreview from "@/components/dashboard-preview";

export default function ProductPreview() {
  return (
    <section id="evidence" className="relative py-6">
      <SectionRule label="INTELLIGENCE DASHBOARD" align="left" />
      <div className="mx-auto max-w-6xl px-6 pb-20">
        <FadeIn className="text-center max-w-4xl mx-auto mb-10">
          <h2 className="font-display text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl lg:text-4xl whitespace-nowrap">
            One dashboard.{" "}
            <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200 bg-clip-text text-transparent">
              Real-time RAG index.
            </span>
          </h2>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed sm:text-base">
            Monitor document ingestion, autonomous query history, and active legal index chunks live in a single unified workspace.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <DashboardPreview />
        </FadeIn>
      </div>
    </section>
  );
}
