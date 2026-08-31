import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "@heroui/styles";
import "./theme-light.css";
import "./theme-dark.css";
import "./globals.css";
import LenisProvider from "@/components/lenis-provider";
import Header from "@/components/header";
import { cn } from "@/lib/utils";
import {
  GITHUB_URL,
  KVK_NUMBER,
  LINKEDIN_URL,
  SITE_DOMAIN,
  mailto,
} from "@/lib/site";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AES AI Solutions — Hard AI systems, built by one person",
  description:
    "Compliance RAG, OSINT platforms, and production LLM tooling — designed, built, and shipped by one person who's done it before.",
};

// Force dark mode always
const themeScript = `(function(){
  try {
    document.documentElement.classList.add("dark");
    document.documentElement.setAttribute("data-theme", "dark");
  } catch(e) {}
})();`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={cn("dark", plusJakartaSans.variable, jetbrains.variable)}
      data-theme="dark"
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="bg-background bg-grid-dots text-foreground font-sans">
        <LenisProvider>
          <Header />
          <main id="top">{children}</main>
          <footer className="border-t border-white/[.08] py-10">
            <div className="mx-auto flex max-w-5xl flex-col gap-3 px-6 font-mono text-xs text-slatey-400 sm:flex-row sm:items-center sm:justify-between">
              <p>
                {/* TODO(placeholder): KVK_NUMBER — set real number in lib/site.ts */}
                AES AI Solutions · KVK {KVK_NUMBER} · {SITE_DOMAIN}
              </p>
              <div className="flex items-center gap-4">
                {/* TODO(placeholder): LINKEDIN_URL / GITHUB_URL / CONTACT_EMAIL — set in lib/site.ts */}
                <a href={LINKEDIN_URL} className="transition-colors hover:text-foreground">
                  LinkedIn
                </a>
                <a href={GITHUB_URL} className="transition-colors hover:text-foreground">
                  GitHub
                </a>
                <a
                  href={mailto("AES AI Solutions — enquiry")}
                  className="transition-colors hover:text-foreground"
                >
                  Email
                </a>
              </div>
            </div>
            <p className="mx-auto mt-6 max-w-5xl px-6 font-mono text-xs text-slatey-400">
              © {new Date().getFullYear()} AES AI Solutions
            </p>
          </footer>
        </LenisProvider>
      </body>
    </html>
  );
}
