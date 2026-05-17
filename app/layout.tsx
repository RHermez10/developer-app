import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { AppLayout } from "@/components/layout/app-layout";

export const metadata: Metadata = {
  title: "DevBoard",
  description: "Personal Developer Dashboard",
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body>
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
