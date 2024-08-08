import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Raleway } from "next/font/google";
import "./globals.css";

//const inter = Inter({ subsets: ["latin"] });
const raleway = Raleway( {subsets: ["latin"]} );

export const metadata: Metadata = {
  title: "Camden Scholl Portfolio",
  description: "About Camden Scholl",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={raleway.className}>{children}</body>
    </html>
  );
}
