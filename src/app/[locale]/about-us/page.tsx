import { Metadata } from 'next';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AboutHero from '@/components/about/AboutHero';
import AboutVisionMission from '@/components/about/AboutVisionMission';
import AboutPillars from '@/components/about/AboutPillars';
import AboutSectors from '@/components/about/AboutSectors';
import AboutCta from '@/components/about/AboutCta';
import { constructMetadata } from '@/lib/seo';

interface AboutPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: AboutPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'aboutPage.meta' });

  return constructMetadata({
    title: t('title'),
    description: t('description'),
    path: '/about-us',
    locale,
  });
}

export default async function AboutUsPage({ params }: AboutPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Header />
      <main className="bg-white text-ink">
        <AboutHero />
        <AboutVisionMission />
        <AboutPillars />
        <AboutSectors />
        <AboutCta />
      </main>
      <Footer />
    </>
  );
}
