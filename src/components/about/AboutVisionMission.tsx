'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function AboutVisionMission() {
  const t = useTranslations('aboutPage');

  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs md:text-sm font-extrabold uppercase tracking-widest text-brand">
            {t('visionMission.eyebrow')}
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-ink">
            {t('visionMission.title')}
          </h2>
          <p className="mt-3 text-base md:text-lg text-ink/70">
            {t('visionMission.subtitle')}
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Vision Card */}
          <ScrollReveal delay={100}>
            <div className="group h-full rounded-2xl bg-teal text-white p-8 md:p-10 relative overflow-hidden shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
              <div
                aria-hidden="true"
                className="absolute top-0 right-0 -mt-6 -mr-6 h-36 w-36 rounded-full bg-white/5 pointer-events-none transition-transform duration-500 group-hover:scale-125"
              />
              <span className="inline-block rounded-md bg-gold px-3 py-1 text-xs font-bold uppercase tracking-wider text-teal">
                {t('visionMission.vision.tag')}
              </span>
              <h3 className="mt-4 text-2xl font-bold text-white">
                {t('visionMission.vision.title')}
              </h3>
              <p className="mt-4 text-base text-white/85 leading-relaxed">
                {t('visionMission.vision.description')}
              </p>
            </div>
          </ScrollReveal>

          {/* Mission Card */}
          <ScrollReveal delay={200}>
            <div className="group h-full rounded-2xl bg-[#F4F8F8] border border-mist p-8 md:p-10 relative overflow-hidden shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:border-brand/30">
              <span className="inline-block rounded-md bg-teal px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                {t('visionMission.mission.tag')}
              </span>
              <h3 className="mt-4 text-2xl font-bold text-ink">
                {t('visionMission.mission.title')}
              </h3>
              <p className="mt-4 text-base text-ink/80 leading-relaxed">
                {t('visionMission.mission.description')}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

