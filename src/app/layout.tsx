import "./globals.css";

import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap"
});

export const metadata: Metadata = {
  title: "QA Engineer Portfolio | Mark Cordero",
  description:
    "Mark Cordero | QA Engineer Portfolio"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${sans.className} relative min-h-screen overflow-x-hidden bg-[#e8e4dc] text-stone-900 antialiased`}
      >
        <div className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute inset-x-0 top-[-8%] h-[420px] bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(255,255,255,0.55),transparent_55%)]" />
          <div className="absolute inset-y-0 left-[-15%] w-[380px] bg-[radial-gradient(circle_at_left,rgba(168,162,158,0.2),transparent_55%)]" />
          <div className="absolute inset-y-0 right-[-12%] w-[360px] bg-[radial-gradient(circle_at_right,rgba(214,211,209,0.35),transparent_55%)]" />
          <div className="absolute bottom-0 left-1/2 h-[280px] w-[min(100%,720px)] -translate-x-1/2 bg-[radial-gradient(ellipse_at_bottom,rgba(157,91,58,0.1),transparent_70%)]" />
        </div>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
