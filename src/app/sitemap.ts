import { MetadataRoute } from 'next';
import { carrosData } from './data/carros';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.vmveiculos.com.br';

  // Páginas estáticas
  const routes = [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
  ];

  // Páginas dinâmicas dos carros
  const carRoutes = carrosData.map((carro) => ({
    url: `${siteUrl}/carro/${carro.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [...routes, ...carRoutes];
}