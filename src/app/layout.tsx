import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar"; // 🚀 1. ここでNavbarをインポートします

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Watari Takuya Portfolio | Hospitality Web Architect",
  description: "説明のむずかしいことを、3Dで「手に取るように」わかりやすく。7年間の在宅介護で直面した「言葉が届かない」もどかしさを、3Dの力で誰もが直感的に納得できる「目に見える安心」へ",
  robots: {
    index: false,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar /> {/* 🚀 2. bodyの中、childrenの上に配置します */}
        {children}
      </body>
    </html>
  );
}