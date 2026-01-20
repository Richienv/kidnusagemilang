import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google"; // Using Geist as it's modern and clean
import "./globals.css";
import { SiteHeader } from "@/components/site-header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kidnusagemilang.com"), // Base URL for resolving relative OG links
  title: {
    default: "PT. KID NUSA GEMILANG",
    template: "%s | PT. KID NUSA GEMILANG"
  },
  description: "General Contractor terpercaya di Indonesia Timur sejak 2019. Spesialis konstruksi jembatan, jalan, dan infrastruktur sipil dengan standar kualitas tinggi.",
  keywords: ["Kontraktor Jembatan", "Konstruksi Jalan", "Sipil", "Kalimantan", "General Contractor", "Kid Nusa Gemilang"],
  authors: [{ name: "PT. Kid Nusa Gemilang" }],
  creator: "PT. Kid Nusa Gemilang",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://kidnusagemilang.com",
    title: "PT. KID NUSA GEMILANG | Membangun Indonesia",
    description: "Partner konstruksi terpercaya untuk pembangunan infrastruktur jembatan dan jalan di Indonesia.",
    siteName: "PT. KID NUSA GEMILANG",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "PT. Kid Nusa Gemilang Projects",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PT. KID NUSA GEMILANG",
    description: "Membangun Indonesia dari Pelosok Negeri.",
    images: ["/opengraph-image.png"],
    creator: "@kidnusagemilang",
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <SiteHeader />
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
