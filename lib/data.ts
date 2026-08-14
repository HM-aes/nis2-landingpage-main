export type Tier = "essential" | "important";

export const SECTORS: { name: string; tier: Tier; examples: string }[] = [
  // Annex I — Essential
  { name: "Energy", tier: "essential", examples: "electricity, gas, hydrogen, district heating" },
  { name: "Transport", tier: "essential", examples: "air, rail, water, road operators" },
  { name: "Banking", tier: "essential", examples: "credit institutions" },
  { name: "Financial market infrastructure", tier: "essential", examples: "trading venues, CCPs" },
  { name: "Health", tier: "essential", examples: "providers, labs, pharma, medical devices" },
  { name: "Drinking water", tier: "essential", examples: "suppliers and distributors" },
  { name: "Waste water", tier: "essential", examples: "collection, treatment, disposal" },
  { name: "Digital infrastructure", tier: "essential", examples: "DNS, IXPs, cloud, data centres, trust services" },
  { name: "ICT service management (B2B)", tier: "essential", examples: "managed service and security providers" },
  { name: "Public administration", tier: "essential", examples: "central and regional government" },
  { name: "Space", tier: "essential", examples: "ground-based infrastructure operators" },
  // Annex II — Important
  { name: "Postal & courier services", tier: "important", examples: "postal operators, couriers" },
  { name: "Waste management", tier: "important", examples: "collection and processing" },
  { name: "Chemicals", tier: "important", examples: "manufacture, production, distribution" },
  { name: "Food", tier: "important", examples: "production, processing, distribution" },
  { name: "Manufacturing", tier: "important", examples: "medical devices, electronics, machinery, vehicles" },
  { name: "Digital providers", tier: "important", examples: "marketplaces, search engines, social platforms" },
  { name: "Research", tier: "important", examples: "research organisations" },
];

export const PENALTIES = {
  essential: { amount: "€10,000,000", turnover: "2%" },
  important: { amount: "€7,000,000", turnover: "1.4%" },
} as const;

export const PIPELINE_STEPS = [
  "UPLOAD",
  "SECURITY GATE",
  "UNDERSTAND",
  "RETRIEVE",
  "REASON",
  "REPORT",
];

// Hero demo content — real strings in the HTML, never canvas/video (PRD §4).
export const DEMO_DOC = {
  filename: "information-security-policy_v3.docx",
  uploadedAt: "09:41",
  paragraphs: [
    "All employees must use multi-factor authentication when accessing company systems remotely. Access rights are reviewed quarterly by the IT department and revoked within 24 hours of employment termination.",
    "Software updates and security patches are applied to production systems within 30 days of release, following testing in a staging environment.",
  ],
  flagged:
    "Third-party vendors are selected based on cost and delivery capability, and onboarded after signing a standard service agreement.",
  finding: {
    severity: "HIGH" as const,
    title: "No supply-chain security requirements for suppliers",
    description:
      "Vendor selection and onboarding define no cybersecurity criteria, no contractual security obligations, and no supplier risk assessment.",
    article: "Art. 21(2)(d) — Supply chain security",
  },
};
