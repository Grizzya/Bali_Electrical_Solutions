'use client';

import React from 'react';
import { useTranslations } from 'next-intl';

export default function AboutPillars() {
  const t = useTranslations('aboutPage');
  const pillars = t.raw('pillars.items') as { num: string; title: string; desc: string }[];

  return (
    <section className="py-20 md:py-28 bg-[#F4F8F8]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs md:text-sm font-extrabold uppercase tracking-widest text-brand">
            {t('pillars.eyebrow')}
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-ink">
            {t('pillars.title')}
          </h2>
          <p className="mt-3 text-base md:text-lg text-ink/70">
            {t('pillars.subtitle')}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((item, idx) => (
            <div
              key={idx}
              className="group rounded-2xl bg-white border border-mist/40 p-6 md:p-7 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:border-brand/40"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-extrabold text-brand/80 font-mono">
                  {item.num}
                </span>
                <span className="h-2 w-2 rounded-full bg-gold" />
              </div>
              <h3 className="text-lg font-bold text-ink group-hover:text-teal transition-colors">
                {item.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-ink/75">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

