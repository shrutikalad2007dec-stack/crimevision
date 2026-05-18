import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Forensic Evidence Storage System",
  description: "Secure AI-Powered Forensic Evidence Management System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-cyber-dark text-cyber-text antialiased`}>
        {children}
      </body>
    </html>
  );
}
