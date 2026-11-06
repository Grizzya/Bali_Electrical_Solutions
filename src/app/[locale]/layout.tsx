import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { SITE_CONFIG } from '@/lib/constants';
import './globals.css';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Pastikan locale valid
  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }

  // Aktifkan static rendering
  setRequestLocale(locale);

  const messages = await getMessages();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': ['HVACBusiness', 'ElectricalContractor', 'ProfessionalService'],
    name: SITE_CONFIG.name,
    alternateName: SITE_CONFIG.legalName,
    url: `${SITE_CONFIG.siteUrl}/${locale}`,
    logo: `${SITE_CONFIG.siteUrl}/logo.svg`,
    image: `${SITE_CONFIG.siteUrl}/logo.webp`,
    telephone: SITE_CONFIG.whatsappNumber,
    email: SITE_CONFIG.email,
    priceRange: '$$-$$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Badung',
      addressRegion: 'Bali',
      addressCountry: 'ID',
    },
    areaServed: SITE_CONFIG.serviceAreas.map((area) => ({
      '@type': 'City',
      name: `${area}, Bali`,
    })),
    sameAs: [
      SITE_CONFIG.socials.instagram,
      SITE_CONFIG.socials.facebook,
      SITE_CONFIG.socials.linkedin,
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name:
        locale === 'en'
          ? 'HVAC, Ducting, Fresh Air, Ventilation, Acoustic & MEP Engineering Services'
          : 'Layanan Kontraktor HVAC, Ducting, Fresh Air, Ventilasi, Akustik & MEP Bali',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'HVAC & Air Conditioning Systems (VRV/VRF, Chiller, Split Duct)',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Ducting System Fabrication & Installation (PIR & BJLS)',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Fresh Air Intake & Air Circulation System',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Commercial & Industrial Ventilation (Exhaust Fan & Kitchen Hood)',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Acoustic & Soundproofing Solutions (Nightclub, Studio, Genset Room)',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'MEP Solutions (Mechanical, Electrical & Plumbing)',
          },
        },
      ],
    },
  };

  return (
    <html lang={locale}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <NextIntlClientProvider messages={messages} locale={locale}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
