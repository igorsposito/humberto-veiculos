import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.vmveiculos.com.br';

export const metadata: Metadata = {
  title: 'VM Veículos | Vitória da Conquista - BA',
  description: 'Veículos selecionados com procedência, transparência e alta qualidade em Vitória da Conquista - BA.',
  openGraph: {
    title: 'VM Veículos | Vitória da Conquista - BA',
    description: 'Veículos selecionados com procedência, transparência e alta qualidade em Vitória da Conquista - BA.',
    url: siteUrl,
    siteName: 'VM Veículos',
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'VM Veículos - Estoque de Carros em Vitória da Conquista',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VM Veículos | Vitória da Conquista - BA',
    description: 'Veículos selecionados com procedência, transparência e alta qualidade.',
    images: [`${siteUrl}/og-image.jpg`],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}