import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";

//const inter = Inter({ subsets: ["latin"] });
const raleway = Raleway( {subsets: ["latin"]} );

export const metadata: Metadata = {
  title: "Camden Scholl Portfolio",
  description: "About Camden Scholl",
  keywords: "portfolio, Camden Scholl, web developer, projects",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/bell-drawing.png" />
      </head>
      <body className={raleway.className}>{children}</body>
    </html>
  );
}
