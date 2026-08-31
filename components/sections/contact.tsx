"use client";

import { ArrowRight } from "lucide-react";
import FadeIn from "@/components/fade-in";
import SectionRule from "@/components/section-rule";
import { BOOKING_URL, CONTACT_EMAIL, mailto } from "@/lib/site";

export default function Contact() {
  return (
    <section id="contact" className="relative py-6">
      <SectionRule label="CONTACT" align="left" />
      <div className="mx-auto max-w-3xl px-4 pb-24 sm:px-10 lg:px-16">
        <FadeIn>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Have a hard problem?
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            The fastest way to find out if I can help is a short call. No pitch
            deck, no obligation — just a conversation about what you&apos;re
            trying to build.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            {/* TODO(placeholder): BOOKING_URL — set real Calendly/Cal.com link in lib/site.ts */}
            <a
              href={BOOKING_URL}
              className="group btn-glow-primary inline-flex h-11 items-center gap-2.5 rounded-xl px-6 text-sm font-semibold tracking-wide transition-all hover:scale-[1.03]"
            >
              Book a call
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            Or email me directly:{" "}
            {/* TODO(placeholder): CONTACT_EMAIL — set real address in lib/site.ts */}
            <a
              href={mailto("AES AI Solutions — project enquiry")}
              className="font-semibold text-amber-400 underline underline-offset-4 hover:text-amber-300"
            >
              {CONTACT_EMAIL}
            </a>
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
