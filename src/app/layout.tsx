import type { Metadata } from "next";
import "./globals.css";
import TopBanner from "@/components/TopBanner";
import { Space_Grotesk } from "next/font/google";

export const metadata: Metadata = {
  title: "OAK Store - Produtos",
  description: "Cadastro de produtos",
};

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-body",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.className} antialiased`}>
        <TopBanner />
        {children}
      </body>
    </html>
  );
}
