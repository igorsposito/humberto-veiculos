import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.humbertoveiculos.com.br';

export const metadata: Metadata = {
  title: 'Humberto Veículos | Sorocaba - SP',
  description: 'Veículos 100% selecionados com procedência, transparência e 20 anos de experiência em Sorocaba - SP.',
  openGraph: {
    title: 'Humberto Veículos | Sorocaba - SP',
    description: 'Veículos 100% selecionados com procedência, transparência e 20 anos de experiência em Sorocaba - SP.',
    url: siteUrl,
    siteName: 'Humberto Veículos',
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Humberto Veículos - Showroom de Carros em Sorocaba/SP',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Humberto Veículos | Sorocaba - SP',
    description: 'Veículos 100% selecionados com procedência, transparência e 20 anos de experiência.',
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
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}