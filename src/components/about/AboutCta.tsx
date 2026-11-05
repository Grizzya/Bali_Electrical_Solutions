'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { WHATSAPP_URL } from '@/lib/constants';
import { Link } from '@/i18n/navigation';

export default function AboutCta() {
  const t = useTranslations('aboutPage');

  return (
    <section className="bg-teal text-white py-16 md:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block text-xs font-bold uppercase tracking-widest text-gold mb-3">
          {t('cta.eyebrow')}
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
          {t('cta.title')}
        </h2>
        <p className="mt-4 text-base md:text-lg text-white/80 max-w-2xl mx-auto">
          {t('cta.subtitle')}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl bg-gold px-8 py-3.5 text-base font-bold text-teal transition-all duration-200 hover:brightness-105 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
          >
            {t('cta.primaryBtn')}
          </a>
          <Link
            href="/services"
            className="inline-flex items-center justify-center rounded-xl bg-white/10 border border-white/25 px-8 py-3.5 text-base font-bold text-white transition-all duration-200 hover:bg-white/20 active:translate-y-0"
          >
            {t('cta.secondaryBtn')}
          </Link>
        </div>
      </div>
    </section>
  );
}

