import { MetadataRoute } from 'next';
import { carrosData } from './data/carros';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.humbertoveiculos.com.br';

  // Páginas estáticas principais
  const routes = ['', '/quem-somos', '/contato', '/vender'].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  // Páginas dinâmicas de cada carro
  const carRoutes = carrosData.map((carro) => ({
    url: `${siteUrl}/carro/${carro.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [...routes, ...carRoutes];
}