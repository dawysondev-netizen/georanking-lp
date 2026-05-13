import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";

import { SiteFooter } from "@/components/lp/site-footer";
import { SiteHeader } from "@/components/lp/site-header";
import { SITE_INFO } from "@/content/site";

import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(`https://${SITE_INFO.domain}`),
  title: {
    default: `${SITE_INFO.name} — Seja encontrado primeiro no Google e Maps`,
    template: `%s | ${SITE_INFO.name}`,
  },
  description: SITE_INFO.description,
  openGraph: {
    title: `${SITE_INFO.name} — Inteligência de SEO local e Perfil de Empresa no Google`,
    description: SITE_INFO.description,
    type: "website",
    locale: "pt_BR",
    siteName: SITE_INFO.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_INFO.name} — Seja encontrado primeiro`,
    description: SITE_INFO.description,
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${manrope.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-[#F5F5F5] text-[#1A1A1A]">
        <SiteHeader />
        <main className="flex-1 pt-16">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
