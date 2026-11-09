'use client';

import React from 'react';
import { useLocale } from 'next-intl';
import { C, CircuitBackdrop, CONTENT } from './servicesData';

export default function ServicesHero() {
  const locale = useLocale();
  const t = CONTENT[locale] ?? CONTENT.en;

  return (
    <section
      className="relative overflow-hidden flex items-center min-h-[26vh] md:min-h-[32vh] py-10 md:py-14"
      style={{ background: C.teal, color: '#fff' }}
    >
      <CircuitBackdrop />

      <div className="relative mx-auto w-full max-w-6xl px-5 md:px-8 text-left animate-hero-fade">
        <div className="w-14 h-1.5 bg-[#F2C21B] rounded-full mb-4" />
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight">
          {t.hero.title}
        </h1>
      </div>
    </section>
  );
}
