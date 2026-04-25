import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aus Property Hub — Find Your Place",
  description: "Australia's smartest property platform. AI-powered search, agent tools, and instant pre-approval.",
  openGraph: {
    title: "Aus Property Hub",
    description: "Find, finance, and move into your next home — all in one place.",
    url: "https://auspropertyhub.com.au",
    siteName: "Aus Property Hub",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=Instrument+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-ink text-white font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
