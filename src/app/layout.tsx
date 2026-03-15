import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const inter = Inter({
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
        className={`${inter.className} relative min-h-screen overflow-x-hidden bg-slate-950`}
      >
        <div className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute inset-x-0 top-[-10%] h-[320px] bg-[radial-gradient(circle_at_top,_rgba(94,123,255,0.35),_transparent_60%)]" />
          <div className="absolute inset-y-0 left-[-20%] w-[320px] bg-[radial-gradient(circle_at_left,_rgba(56,189,248,0.16),_transparent_60%)]" />
          <div className="absolute inset-y-0 right-[-20%] w-[320px] bg-[radial-gradient(circle_at_right,_rgba(251,113,133,0.14),_transparent_60%)]" />
        </div>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

