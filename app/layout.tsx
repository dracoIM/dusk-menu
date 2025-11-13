import type React from "react";
import type { Metadata } from "next";
import { Playfair_Display, Lora } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { LanguageProvider } from "@/lib/language-context";
import "./globals.css";
import RootClientLayout from "./root-client-layout";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});
const lora = Lora({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: "Dusk - Fine Dining",
  description: "Experience culinary excellence at Dusk",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${lora.variable} font-body antialiased`}
      >
        <LanguageProvider>
          <RootClientLayout>{children}</RootClientLayout>
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  );
}
