'use client';

import React from 'react';
import { useTranslations } from 'next-intl';

export default function AboutSectors() {
  const t = useTranslations('aboutPage');
  const sectors = t.raw('sectors.items') as { title: string; desc: string }[];

  return (
    <section className="py-20 md:py-28 bg-[#F4F8F8]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs md:text-sm font-extrabold uppercase tracking-widest text-brand">
            {t('sectors.eyebrow')}
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-ink">
            {t('sectors.title')}
          </h2>
          <p className="mt-3 text-base md:text-lg text-ink/70">
            {t('sectors.subtitle')}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {sectors.map((sec, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-white border border-mist/50 p-7 shadow-sm hover:border-brand/40 transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-teal text-gold font-bold text-xs">
                  0{idx + 1}
                </span>
                <h3 className="text-lg font-bold text-ink">
                  {sec.title}
                </h3>
              </div>
              <p className="text-sm md:text-base text-ink/75 leading-relaxed pl-10">
                {sec.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

