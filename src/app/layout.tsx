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
  title: "PT. KID NUSA GEMILANG | General Construction",
  description: "Certified General Construction Contractor for Bridges, Roads, and Civil Infrastructure in Indonesia.",
  icons: {
    icon: "/favicon.ico",
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
