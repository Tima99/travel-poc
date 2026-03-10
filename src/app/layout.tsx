import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "../../styles/theme.css";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TourLandHolidays | Premium Travel Experiences",
  description:
    "Discover curated holiday packages, flights, and hotels with TourLandHolidays – your trusted partner for premium travel experiences.",
  metadataBase: new URL("https://tourlandholidays.example"),
  openGraph: {
    title: "TourLandHolidays | Premium Travel Experiences",
    description:
      "Book unforgettable holidays, flights, and hotels with a modern, intuitive booking experience.",
    url: "https://tourlandholidays.example",
    siteName: "TourLandHolidays",
    locale: "en_IN",
    type: "website",
  },
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
        <div className="flex min-h-screen w-full overflow-x-hidden flex-col bg-gradient-to-b from-slate-50/60 via-slate-50 to-slate-100/60">
          <Navbar />
          <main className="mx-auto flex w-full max-w-6xl flex-1 px-4 pb-12 pt-24 sm:px-6 lg:px-8">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
