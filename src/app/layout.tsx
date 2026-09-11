import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat/WhatsAppFloat";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  variable: "--font-title",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "VM Veículos | Vitória da Conquista",
  description: "Compra e venda de veículos selecionados em Vitória da Conquista - BA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${montserrat.variable} ${inter.variable}`}>
      <body style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <div style={{ flex: 1 }}>{children}</div>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}