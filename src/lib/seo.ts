import { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/constants';

interface SeoProps {
  title: string;
  description: string;
  keywords?: string[];
  path?: string;
  locale: string;
}

const DEFAULT_KEYWORDS_ID = [
  'Bali Electrical Solutions',
  'Bali Electrical',
  'kontraktor HVAC Bali',
  'jasa ducting AC Bali',
  'instalasi fresh air Bali',
  'exhaust fan dapur restoran Bali',
  'peredam suara akustik Bali',
  'soundproofing night club Bali',
  'kontraktor MEP Bali',
  'mekanikal elektrikal plumbing Bali',
  'pasang AC VRV VRF villa Canggu Seminyak Uluwatu',
  'instalasi ducting Berawa Badung',
];

const DEFAULT_KEYWORDS_EN = [
  'Bali Electrical Solutions',
  'Bali Electrical',
  'HVAC contractor Bali',
  'ducting installation Bali',
  'fresh air system Bali',
  'commercial ventilation exhaust Bali',
  'acoustic soundproofing Bali',
  'nightclub soundproofing Canggu Bali',
  'MEP engineering contractor Bali',
  'mechanical electrical plumbing Bali',
  'VRV VRF air conditioning villa resort Bali',
  'HVAC Badung Canggu Seminyak Uluwatu',
];

export function constructMetadata({
  title,
  description,
  keywords,
  path = '',
  locale,
}: SeoProps): Metadata {
  const cleanPath = path ? (path.startsWith('/') ? path : `/${path}`) : '';
  const canonicalUrl = `${SITE_CONFIG.siteUrl}/${locale}${cleanPath}`;
  const idUrl = `${SITE_CONFIG.siteUrl}/id${cleanPath}`;
  const enUrl = `${SITE_CONFIG.siteUrl}/en${cleanPath}`;
  const defaultKeywords = locale === 'en' ? DEFAULT_KEYWORDS_EN : DEFAULT_KEYWORDS_ID;
  const fullTitle = title.includes(SITE_CONFIG.name)
    ? title
    : `${title} | ${SITE_CONFIG.name}`;

  return {
    metadataBase: new URL(SITE_CONFIG.siteUrl),
    title: fullTitle,
    description,
    keywords: keywords ? [...keywords, ...defaultKeywords] : defaultKeywords,
    authors: [{ name: SITE_CONFIG.name, url: SITE_CONFIG.siteUrl }],
    creator: SITE_CONFIG.name,
    publisher: SITE_CONFIG.name,
    category: 'Engineering & Construction Services',
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'id-ID': idUrl,
        'en-US': enUrl,
        id: idUrl,
        en: enUrl,
        'x-default': idUrl,
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl,
      siteName: SITE_CONFIG.name,
      locale: locale === 'en' ? 'en_US' : 'id_ID',
      alternateLocale: locale === 'en' ? ['id_ID'] : ['en_US'],
      type: 'website',
      images: [
        {
          url: `${SITE_CONFIG.siteUrl}/logo.webp`,
          width: 800,
          height: 600,
          alt: `${SITE_CONFIG.name} - HVAC, Ducting, Fresh Air, Ventilation, Acoustic & MEP Bali`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [`${SITE_CONFIG.siteUrl}/logo.webp`],
    },
  };
}
