import { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/constants';

interface SeoProps {
  title: string;
  description: string;
  path?: string;
  locale: string;
}

export function constructMetadata({
  title,
  description,
  path = '',
  locale,
}: SeoProps): Metadata {
  const cleanPath = path ? (path.startsWith('/') ? path : `/${path}`) : '';
  const canonicalUrl = `${SITE_CONFIG.siteUrl}/${locale}${cleanPath}`;
  const idUrl = `${SITE_CONFIG.siteUrl}/id${cleanPath}`;
  const enUrl = `${SITE_CONFIG.siteUrl}/en${cleanPath}`;

  return {
    title: `${title} | ${SITE_CONFIG.name}`,
    description,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        id: idUrl,
        en: enUrl,
        'x-default': idUrl,
      },
    },
    openGraph: {
      title: `${title} | ${SITE_CONFIG.name}`,
      description,
      url: canonicalUrl,
      siteName: SITE_CONFIG.name,
      locale: locale === 'en' ? 'en_US' : 'id_ID',
      type: 'website',
    },
  };
}
