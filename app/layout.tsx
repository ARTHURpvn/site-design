import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Clara Design",
  description: "site feito por ARTHURpvn, para uma designer",
  keywords: "Design, Clara, React, TypeScript, Next, ARTHURpvn,  Marketing",
  authors: [{ name: "ARTHURpvn" }],

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="shortcut icon" type="imagex/png" href="./logo.ico"/>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
