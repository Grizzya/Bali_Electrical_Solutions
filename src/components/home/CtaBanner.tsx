import React from 'react';
import { getTranslations } from 'next-intl/server';
import { WHATSAPP_URL } from '@/lib/constants';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default async function CtaBanner() {
  const t = await getTranslations('Home.cta');

  return (
    <section className="bg-white py-14 lg:py-20 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] bg-[#0B5C50] px-6 py-12 sm:px-12 sm:py-16 md:py-20 text-center shadow-2xl text-white group">
            {/* Subtle Background Glow/Accent Ring dengan efek rotasi/pulse lembut */}
            <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full border border-white/10 pointer-events-none transition-transform duration-700 group-hover:scale-110"></div>
            <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full border border-white/10 pointer-events-none transition-transform duration-700 group-hover:scale-110"></div>

            {/* Heading */}
            <h2 className="relative max-w-2xl mx-auto text-2xl sm:text-3xl lg:text-[40px] font-extrabold tracking-tight font-heading leading-tight text-white">
              {t('title')}
            </h2>

            {/* Subtitle */}
            <p className="relative mt-4 max-w-xl mx-auto text-sm sm:text-base text-white/90 leading-relaxed font-normal">
              {t('subtitle')}
            </p>

            {/* CTA Action Button */}
            <div className="relative mt-8 sm:mt-10">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-3.5 text-sm sm:text-base font-bold text-[#0B5C50] shadow-md transition-all duration-300 hover:bg-[#F2C21B] hover:text-[#0B5C50] hover:shadow-2xl hover:scale-105 active:scale-95"
              >
                {t('button')}
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
