import type { Metadata } from "next";
import { Playfair_Display, Inter, Dancing_Script } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter",
  display: "swap",
});

const dancing = Dancing_Script({ 
  subsets: ["latin"], 
  variable: "--font-dancing",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Thảo Nguyễn | Personal Branding Coach",
  description: "Elegant personal branding portfolio - Helping you discover and express your unique identity.",
  keywords: ["personal branding", "coaching", "courses", "lifestyle"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body 
        className={`${playfair.variable} ${inter.variable} ${dancing.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
