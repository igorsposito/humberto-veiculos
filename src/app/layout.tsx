import type { Metadata } from 'next';
import './globals.css';

// Altere para o domínio final quando o site estiver online (ex: https://vmveiculos.com.br)
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.vmveiculos.com.br';

export const metadata: Metadata = {
  title: 'VM Veículos | Vitória da Conquista - BA',
  description: 'Veículos selecionados, revisados e com procedência garantida em Vitória da Conquista. Encontre seu próximo carro aqui!',
  openGraph: {
    title: 'VM Veículos | Vitória da Conquista - BA',
    description: 'Veículos selecionados, revisados e com procedência garantida. Confira nosso estoque!',
    url: siteUrl,
    siteName: 'VM Veículos',
    images: [
      {
        url: `${siteUrl}/og-image.jpg`, // Ou /logo.png se preferir usar a logo
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
    description: 'Veículos selecionados, revisados e com procedência garantida.',
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
      <body>{children}</body>
    </html>
  );
}