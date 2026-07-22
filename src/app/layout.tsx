import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const dmSans = localFont({
  src: "./fonts/dm-sans/DMSans-VariableFont_opsz,wght.ttf",
  variable: "--font-dm-sans",
  display: "swap",
});

const dmMono = localFont({
  src: "./fonts/dm-mono/DMMono-Regular.ttf",
  variable: "--font-dm-mono",
  display: "swap",
});

const fraunces = localFont({
  src: "./fonts/fraunces/Fraunces-VariableFont_SOFT,WONK,opsz,wght.ttf",
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hotel Booking Confirmation",
  description: "A modern Next.js starter with TypeScript, Tailwind, and a structured src folder.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${dmMono.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
