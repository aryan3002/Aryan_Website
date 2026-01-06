import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CursorGlow from "@/components/CursorGlow";
import Navigation from "@/components/Navigation";
import AIAssistant from "@/components/AIAssistant";
import LoadingScreen from "@/components/LoadingScreen";
import ScrollProgress from "@/components/ScrollProgress";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aryan Tripathi | AI Engineer · Full-Stack Builder · Systems Thinker",
  description:
    "I build AI systems that don't feel like software. Explore my portfolio of LLM-powered applications, distributed systems, and innovative products.",
  keywords: [
    "AI Engineer",
    "Full-Stack Developer",
    "LLM",
    "Machine Learning",
    "Next.js",
    "React",
    "Python",
    "OpenAI",
    "LangChain",
  ],
  authors: [{ name: "Aryan Tripathi" }],
  creator: "Aryan Tripathi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aryantripathi.com",
    title: "Aryan Tripathi | AI Engineer",
    description: "I build AI systems that don't feel like software.",
    siteName: "Aryan Tripathi",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Aryan Tripathi - AI Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aryan Tripathi | AI Engineer",
    description: "I build AI systems that don't feel like software.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-black text-white`}>
        <LoadingScreen />
        <ScrollProgress />
        <CursorGlow />
        <Navigation />
        <main className="w-full flex flex-col items-center">
          {children}
        </main>
        <AIAssistant />
      </body>
    </html>
  );
}
