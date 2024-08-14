import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";

//const inter = Inter({ subsets: ["latin"] });
const raleway = Raleway( {subsets: ["latin"]} );

export const metadata: Metadata = {
  title: "Camden Scholl Portfolio",
  description: "About Camden Scholl",
  keywords: "portfolio, Camden Scholl, web developer, projects",
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "Camden Scholl Portfolio",
    description: "About Camden Scholl",
    url: "https://www.camdenscholl.vercel.app",
    type: "website",
    images: [
      {
        url: "/assets/bell-drawing.png",
        width: 800,
        height: 600,
        alt: "Camden Scholl Portfolio Image",
      },
    ],
  },
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
