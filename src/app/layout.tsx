import type { Metadata } from "next";
import { Inter, Bebas_Neue, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muhammad Khizer — Software & AI Engineer",
  description:
    "Portfolio of Muhammad Khizer — building AI-powered tools, full-stack SaaS platforms, and secure web systems. Specializing in RAG systems, ML pipelines, and security engineering.",
  keywords: [
    "Muhammad Khizer",
    "Software Engineer",
    "AI Developer",
    "Full-Stack Developer",
    "RAG Systems",
    "Machine Learning",
    "Security Engineering",
    "Portfolio",
  ],
  authors: [{ name: "Muhammad Khizer" }],
  openGraph: {
    title: "Muhammad Khizer — Software & AI Engineer",
    description:
      "Building AI-powered tools, full-stack SaaS platforms, and secure web systems.",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${bebasNeue.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
