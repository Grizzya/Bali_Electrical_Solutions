import { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/lib/constants';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/services', '/about-us'];
  const locales = ['id', 'en'] as const;
  const now = new Date();

  return routes.flatMap((route) =>
    locales.map((locale) => ({
      url: `${SITE_CONFIG.siteUrl}/${locale}${route}`,
      lastModified: now,
      changeFrequency: route === '' ? ('weekly' as const) : ('monthly' as const),
      priority: route === '' ? 1.0 : 0.85,
      alternates: {
        languages: {
          id: `${SITE_CONFIG.siteUrl}/id${route}`,
          en: `${SITE_CONFIG.siteUrl}/en${route}`,
        },
      },
    }))
  );
}
