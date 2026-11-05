'use client';

import React from 'react';
import { useLocale } from 'next-intl';
import { C, CircuitBackdrop, CONTENT } from './servicesData';

export default function ServicesHero() {
  const locale = useLocale();
  const t = CONTENT[locale] ?? CONTENT.en;

  return (
    <section
      className="relative overflow-hidden flex items-center min-h-[40vh] md:min-h-[45vh] py-12 md:py-16"
      style={{ background: C.teal, color: '#fff' }}
    >
      <CircuitBackdrop />

      <div className="relative mx-auto w-full max-w-6xl px-5 md:px-8 text-left">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight">
          {t.hero.title}
        </h1>
      </div>
    </section>
  );
}
