import SmoothScroll from "@/components/providers/SmoothScroll";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  metadataBase: new URL("https://samuelroshan.vercel.app"),

  title: {
    default: "personal Resume",
    template: "%s | Samuel Roshan",
  },

  description:
    "Samuel Roshan's AI Portfolio showcasing Machine Learning, Deep Learning, Generative AI, RAG, LangChain, LLM applications, and AI engineering projects.",

  keywords: [
    "Samuel Roshan",
    "AI Engineer",
    "Artificial Intelligence",
    "Machine Learning",
    "Deep Learning",
    "Data Science",
    "Python",
    "TensorFlow",
    "PyTorch",
    "LangChain",
    "LLM",
    "RAG",
    "Portfolio",
  ],

  authors: [
    {
      name: "Samuel Roshan",
    },
  ],

  creator: "Samuel Roshan",

  openGraph: {
    title: "Samuel Roshan | AI Enthusiast",
    description:
      "Professional AI Portfolio showcasing projects, internship experience, skills and certifications.",

    url: "https://samuelroshan.vercel.app",

    siteName: "Samuel Roshan Portfolio",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Samuel Roshan |AI Enthusiast",
    description:
      "AI Portfolio | Machine Learning | Deep Learning | Generative AI",

    images: ["/images/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="bg-[#F7F5F2] text-[#181818] antialiased">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}