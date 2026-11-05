import { Metadata } from 'next';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { C } from '@/components/services/servicesData';
import ServicesHero from '@/components/services/ServicesHero';
import ServicesSection from '@/components/services/ServicesSection';
import ServicesCta from '@/components/services/ServicesCta';
import { constructMetadata } from '@/lib/seo';

interface ServicesPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: ServicesPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'servicesPage.meta' });

  return constructMetadata({
    title: t('title'),
    description: t('description'),
    path: '/services',
    locale,
  });
}

export default async function ServicesPage({ params }: ServicesPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Header />
      <main style={{ background: C.paper, color: C.ink }} className="min-h-screen">
        <ServicesHero />
        <ServicesSection />
        <ServicesCta />
      </main>
      <Footer />
    </>
  );
}
