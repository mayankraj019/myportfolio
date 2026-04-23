import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mayank Raj | Software Engineer & Full Stack Developer",
  description:
    "Portfolio of Mayank Raj — Software Engineer, Full Stack Developer, and AI Enthusiast building scalable AI-powered applications that solve real-world problems.",
  keywords: [
    "Mayank Raj",
    "Software Engineer",
    "Full Stack Developer",
    "AI Enthusiast",
    "React",
    "Next.js",
    "Python",
    "Portfolio",
  ],
  authors: [{ name: "Mayank Raj" }],
  openGraph: {
    title: "Mayank Raj | Software Engineer",
    description: "Building scalable AI-powered applications that solve real-world problems",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${spaceGrotesk.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
