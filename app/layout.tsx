import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sans = Inter({ subsets: ["latin"], variable: "--font-sans" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  metadataBase: new URL("https://ayush-karan-portfolio-eta.vercel.app"),
  title: "Ayush Karan — Full-Stack & Agentic AI Engineer",
  description:
    "Portfolio of Ayush Karan, Full-Stack Software Developer & AI Engineer at VIT Bhopal. Intern at Datatrack & Quantumard. Specialist in Next.js 14, React, Three.js, and n8n Agent Orchestration.",
  keywords: [
    "Ayush Karan",
    "Full Stack Developer",
    "AI Engineer",
    "Next.js Developer",
    "n8n AI Agents",
    "VIT Bhopal",
    "Datatrack Intern",
    "Quantumard Intern",
    "EvolVIT Founder",
    "Three.js Portfolio",
  ],
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "Ayush Karan — Full-Stack & Agentic AI Engineer",
    description:
      "Full-stack engineer building production Next.js applications, 3D web experiences, and multi-agent AI workflows.",
    url: "https://ayush-karan-portfolio-eta.vercel.app",
    siteName: "Ayush Karan Portfolio",
    images: [
      {
        url: "/profile.jpg",
        width: 800,
        height: 800,
        alt: "Ayush Karan — Full-Stack & AI Engineer",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayush Karan — Full-Stack & Agentic AI Engineer",
    description: "Full-stack engineer building production Next.js apps, 3D web experiences, and multi-agent AI workflows.",
    images: ["/profile.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body className="bg-ink text-ivory font-sans antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
