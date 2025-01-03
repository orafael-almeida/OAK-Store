import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OAK Store - Produtos",
  description: "Cadastro de produtos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
