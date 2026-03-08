import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
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
    default: "Rich Exposure | Premium NYC Wedding, Portrait & Travel Photography",
    template: "%s | Rich Exposure Photography",
  },
  description:
    "Rich Exposure — premium photography by RM Bibeault. NYC-based, specializing in weddings, destination weddings, portraits, headshots, travel, and street photography. Available worldwide.",
  keywords: [
    "NYC photographer",
    "wedding photographer",
    "destination wedding photographer",
    "portrait photographer",
    "headshot photographer",
    "travel photography",
    "street photography",
    "New York City photographer",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
