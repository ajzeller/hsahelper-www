import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HSA Helper — Smart HSA Expense Tracking",
  description:
    "HSA Helper makes it easy to track healthcare expenses, manage reimbursements, upload receipts, and maximize your HSA savings.",
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "HSA Helper — Smart HSA Expense Tracking",
    description: "HSA Helper makes it easy to track healthcare expenses, manage reimbursements, upload receipts, and maximize your HSA savings.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased ${inter.variable} font-sans`}>
      <body className="min-h-full flex flex-col bg-white text-zinc-900">
        {children}
      </body>
    </html>
  );
}
