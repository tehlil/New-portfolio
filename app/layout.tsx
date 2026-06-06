import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CommandPalette from "@/components/CommandPalette";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
};

const siteUrl = process.env.URL || process.env.NEXT_PUBLIC_SITE_URL || "https://tehlilkhan.netlify.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Tehlil Khan | AI-First Product Engineer",
    template: "%s | Tehlil Khan",
  },
  description: "Building intelligent systems for scalable businesses. Bridging engineering, AI systems, and operations.",
  keywords: [
    "Tehlil Khan", 
    "AI-First", 
    "Product Engineer", 
    "Intelligent Systems", 
    "Systems Engineering", 
    "Operations Intelligence", 
    "Software Engineer",
    "Machine Learning",
    "Next.js Developer"
  ],
  authors: [{ name: "Tehlil Khan", url: siteUrl }],
  creator: "Tehlil Khan",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Tehlil Khan | AI-First Product Engineer",
    description: "Building intelligent systems for scalable businesses. Bridging engineering, AI systems, and operations.",
    url: siteUrl,
    siteName: "Tehlil Khan Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tehlil Khan | AI-First Product Engineer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tehlil Khan | AI-First Product Engineer",
    description: "Building intelligent systems for scalable businesses. Bridging engineering, AI systems, and operations.",
    images: ["/og-image.png"],
    creator: "@tehlil",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col pt-24 text-[var(--color-foreground)] bg-[var(--color-background)]">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <CommandPalette />
      </body>
    </html>
  );
}

