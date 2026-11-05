import { setRequestLocale, getTranslations } from 'next-intl/server';
import './globals.css';
import Header from '@/components/layout/Header';
import Hero from '@/components/home/Hero';
import About from '@/components/home/About';
import Services from '@/components/home/Services';
import WhyUs from '@/components/home/WhyUs';
import Testimoni from '@/components/home/Testimoni';
import CtaBanner from '@/components/home/CtaBanner';
import Footer from '@/components/layout/Footer';

export default async function HomePage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const tTestimonials = await getTranslations('Home.testimonials');
  const testimonialItems = tTestimonials.raw('items') as {
    name: string;
    role: string;
    content: string;
    rating: number;
  }[];

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <Testimoni
          eyebrow={tTestimonials('eyebrow')}
          title={tTestimonials('title')}
          subtitle={tTestimonials('subtitle')}
          items={testimonialItems}
        />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
