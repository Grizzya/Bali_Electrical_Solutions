import { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import GalleryContent from '@/components/gallery/GalleryContent';
import { constructMetadata } from '@/lib/seo';

interface GalleryPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: GalleryPageProps): Promise<Metadata> {
  const { locale } = await params;

  const isId = locale === 'id';
  return constructMetadata({
    title: isId
      ? 'Galeri Proyek - Kontraktor HVAC, Ducting, Ventilasi & MEP Bali'
      : 'Project Gallery - HVAC, Ducting, Ventilation & MEP Contractor in Bali',
    description: isId
      ? 'Galeri dokumentasi instalasi HVAC, fabrikasi ducting PIR/BJLS, sirkulasi fresh air, exhaust fan ventilasi, peredam suara akustik, dan MEP oleh Bali Electrical Solutions.'
      : 'Project gallery showcasing HVAC installations, PIR/BJLS ductwork, fresh air intake, commercial exhaust fans, acoustic soundproofing, and MEP works across Bali.',
    path: '/gallery',
    locale,
  });
}

export default async function GalleryPage({ params }: GalleryPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <GalleryContent />
      </main>
      <Footer />
    </>
  );
}
