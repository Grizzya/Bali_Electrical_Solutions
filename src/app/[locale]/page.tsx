import { setRequestLocale } from 'next-intl/server';
import './globals.css';
import Header from '@/components/layout/Header';
import Hero from '@/components/home/Hero';
import About from '@/components/home/About';
import Services from '@/components/home/Services';
import WhyUs from '@/components/home/WhyUs';
import CtaBanner from '@/components/home/CtaBanner';
import Footer from '@/components/layout/Footer';

export default async function HomePage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
