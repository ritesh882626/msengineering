import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MS Engineering | Electroplating Plant Engineering & Surface Treatment Solutions",
  description:
    "MS Engineering designs electroplating plant systems, surface treatment solutions, process layouts, and industrial support for manufacturing businesses.",
  metadataBase: new URL("https://msengineeringindia.com"),
  openGraph: {
    title: "MS Engineering | Electroplating Plant Technology",
    description:
      "Reliable electroplating plant and surface treatment solutions for modern manufacturing operations.",
    url: "https://msengineeringindia.com",
    siteName: "MS Engineering",
    type: "website"
  },
  robots: {
    index: true,
    follow: true
  },
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
