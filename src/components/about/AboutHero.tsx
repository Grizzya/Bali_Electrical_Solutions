'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { C, CircuitBackdrop } from '@/components/services/servicesData';

export default function AboutHero() {
  const t = useTranslations('aboutPage.hero');

  return (
    <section
      className="relative overflow-hidden flex items-center min-h-[26vh] md:min-h-[32vh] py-10 md:py-14"
      style={{ background: C.teal, color: '#fff' }}
    >
      <CircuitBackdrop />

      <div className="relative mx-auto w-full max-w-6xl px-5 md:px-8 text-left">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight">
          {t('title')}
        </h1>
      </div>
    </section>
  );
}
