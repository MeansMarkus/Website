import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Markus Means — Software Engineer",
    template: "%s — Markus Means",
  },
  description:
    "Software engineer specializing in AI, ML, and full‑stack development.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  openGraph: {
    title: "Markus Means — Software Engineer",
    description:
      "Projects in AI/ML and full‑stack development including Watchly and Japanese AI Tutor.",
    url:
      typeof window === "undefined"
        ? (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000")
        : window.location.origin,
    siteName: "Markus Means Portfolio",
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-dvh flex flex-col`}
      >
        <Navbar />
        <main className="flex-1 container py-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
