'use client';

// src/components/services/ServicesCta.tsx
// CTA section for Services page

import React from 'react';
import { useLocale } from 'next-intl';
import { SITE_CONFIG } from '@/lib/constants';
import { C, Bolt, Arrow, CONTENT } from './servicesData';

export default function ServicesCta() {
  const locale = useLocale();
  const t = CONTENT[locale] ?? CONTENT.en;
  const whatsappUrl = SITE_CONFIG.whatsappUrl;

  return (
    <section style={{ background: C.tealDark, color: '#fff' }}>
      {/* Mobile CTA */}
      <div className="px-5 py-14 text-center md:hidden">
        <Bolt className="mx-auto h-8 w-8" style={{ color: C.gold }} />
        <h2 className="mt-4 text-2xl font-semibold tracking-tight">
          {t.cta.title}
        </h2>
        <p className="mx-auto mt-3 max-w-sm text-[15px] leading-relaxed text-white/75">
          {t.cta.body}
        </p>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-7 inline-flex w-full items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold transition hover:brightness-105 active:scale-95 shadow-lg"
          style={{ background: C.gold, color: C.tealDark }}
        >
          {t.cta.button}
        </a>
      </div>

      {/* Desktop CTA */}
      <div className="mx-auto hidden max-w-6xl items-center justify-between gap-12 px-8 py-20 md:flex">
        <div className="max-w-xl">
          <h2 className="text-4xl font-semibold leading-tight tracking-tight">
            {t.cta.title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-white/75">
            {t.cta.body}
          </p>
        </div>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center gap-2 rounded-full px-8 py-4 text-sm font-semibold transition hover:brightness-110 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-white shadow-lg"
          style={{ background: C.gold, color: C.tealDark }}
        >
          {t.cta.button}
          <Arrow />
        </a>
      </div>
    </section>
  );
}
