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
  title: "Minh Tong — Software Engineer",
  description:
    "Software Engineer based in Ho Chi Minh City, Vietnam. Building scalable backend systems and modern web applications.",
  keywords: ["Software Engineer", "Go", "TypeScript", "React", "Next.js", "Backend Developer"],
  authors: [{ name: "Minh Tong" }],
  openGraph: {
    title: "Minh Tong — Software Engineer",
    description: "Building scalable systems and exceptional digital experiences.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Minh Tong — Software Engineer",
    description: "Building scalable systems and exceptional digital experiences.",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen bg-[#030303] text-white antialiased">
        {children}
      </body>
    </html>
  );
}
