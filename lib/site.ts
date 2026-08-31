// ─────────────────────────────────────────────────────────────────────────────
// AES AI Solutions — site-wide config
//
// TODO(placeholders): fill these in before launch. Every value below is a
// placeholder — nothing here is a real address, number, or URL.
// ─────────────────────────────────────────────────────────────────────────────

/** Calendly / Cal.com booking URL for every "Book a call" button. */
export const BOOKING_URL = "#book"; // TODO: replace with real Calendly/Cal.com link

/** Public contact email (used for the "email me directly" fallback + footer). */
export const CONTACT_EMAIL = "your@email.com"; // TODO: replace with real address

/** KVK registration number — shown in the trust line + footer. */
export const KVK_NUMBER = "00000000"; // TODO: replace with real KVK number

/** Primary domain shown in the footer. */
export const SITE_DOMAIN = "aes-ai.nl";

export const LINKEDIN_URL = "#linkedin"; // TODO: replace with real LinkedIn URL
export const GITHUB_URL = "#github"; // TODO: replace with real GitHub URL

/**
 * Where "Request case study →" links point.
 * TODO: decide per project — mailto vs. a real form. Placeholder for now.
 */
export const CASE_STUDY_URL = "#case-study"; // TODO

export const mailto = (subject: string) =>
  `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}`;
