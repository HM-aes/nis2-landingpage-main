import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "@heroui/styles";
import "./theme-light.css";
import "./theme-dark.css";
import "./globals.css";
import LenisProvider from "@/components/lenis-provider";
import Header from "@/components/header";
import { cn } from "@/lib/utils";

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
  title: "NIS2 Analyzer — Prove NIS2 compliance in minutes",
  description:
    "Upload your security policies. Get every compliance gap cited to the exact NIS2 article, in a board-ready report.",
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
          <footer className="border-t border-white/[.08] py-8">
            <p className="mx-auto max-w-5xl px-6 font-mono text-xs text-slatey-400">
              NIS2 ANALYZER · Compliance, cited to the article · {new Date().getFullYear()}
            </p>
          </footer>
        </LenisProvider>
      </body>
    </html>
  );
}
