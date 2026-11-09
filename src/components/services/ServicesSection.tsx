'use client';

// src/components/services/ServicesSection.tsx
// Services showcase list for Services page (mobile stacked, desktop alternating zigzag)

import React from 'react';
import { useLocale } from 'next-intl';
import { SITE_CONFIG } from '@/lib/constants';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { C, Bolt, Arrow, CONTENT, DETAIL, ServiceVisual } from './servicesData';

export default function ServicesSection() {
  const locale = useLocale();
  const t = CONTENT[locale] ?? CONTENT.en;
  const d = DETAIL[locale] ?? DETAIL.en;
  const whatsappUrl = SITE_CONFIG.whatsappUrl;

  return (
    <section id="services" className="scroll-mt-20 overflow-hidden">
      {/* ---------- Mobile: stacked, dipisahkan garis (divide-y) ---------- */}
      <div className="px-5 py-10 md:hidden">
        <div className="divide-y divide-[#0B5C50]/15">
          {t.services.map((s, i) => (
            <article
              key={s.key}
              id={`${s.key}-m`}
              className="scroll-mt-20 py-10 first:pt-0 last:pb-0"
            >
              <ScrollReveal>
                <ServiceVisual k={s.key} index={i} alt={s.name} />
              </ScrollReveal>
              <ScrollReveal delay={100} className="pt-6">
                <h3 className="text-2xl font-semibold tracking-tight text-[#0B5C50]">
                  {s.name}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-black/65">
                  {d.items[s.key].desc}
                </p>

                <ul className="mt-5 space-y-2.5">
                  {s.points.map((p) => (
                    <li key={p} className="flex gap-2.5 text-sm leading-snug">
                      <Bolt className="mt-0.5 h-3.5 w-3.5 shrink-0" style={{ color: C.gold }} />
                      {p}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {d.items[s.key].best.map((b) => (
                    <span
                      key={b}
                      className="rounded-full px-3 py-1 text-xs font-medium transition-transform duration-200 hover:scale-105"
                      style={{ background: C.mist, color: C.teal }}
                    >
                      {b}
                    </span>
                  ))}
                </div>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold focus:outline-none focus-visible:underline"
                  style={{ color: C.teal }}
                >
                  {t.learn}
                  <Arrow className="transition-transform duration-200 group-hover:translate-x-1" />
                </a>
              </ScrollReveal>
            </article>
          ))}
        </div>
      </div>

      {/* ---------- Desktop: zigzag rows, dipisahkan garis (divide-y) ---------- */}
      <div className="mx-auto hidden max-w-6xl px-8 py-20 md:block">
        <div className="divide-y divide-[#0B5C50]/15">
          {t.services.map((s, i) => {
            const flip = i % 2 === 1;
            return (
              <article
                key={s.key}
                id={s.key}
                className="grid scroll-mt-24 grid-cols-2 items-center gap-16 py-20 first:pt-0 last:pb-0"
              >
                <ScrollReveal delay={flip ? 150 : 50} className={flip ? "order-2" : "order-1"}>
                  <ServiceVisual k={s.key} index={i} alt={s.name} />
                </ScrollReveal>

                <ScrollReveal delay={flip ? 50 : 150} className={flip ? "order-1" : "order-2"}>
                  <h3 className="text-4xl font-semibold tracking-tight text-[#0B5C50]">
                    {s.name}
                  </h3>
                  <p className="mt-4 max-w-md text-lg leading-relaxed text-black/65">
                    {d.items[s.key].desc}
                  </p>

                  <ul className="mt-7 space-y-3">
                    {s.points.map((p) => (
                      <li key={p} className="group/item flex gap-3 text-base leading-snug">
                        <Bolt className="mt-1 h-4 w-4 shrink-0 transition-transform duration-300 group-hover/item:scale-125" style={{ color: C.gold }} />
                        {p}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {d.items[s.key].best.map((b) => (
                      <span
                        key={b}
                        className="rounded-full px-3.5 py-1.5 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xs"
                        style={{ background: C.mist, color: C.teal }}
                      >
                        {b}
                      </span>
                    ))}
                  </div>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mt-9 inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-semibold transition-all duration-300 hover:brightness-110 hover:-translate-y-0.5 hover:shadow-lg active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 shadow-md"
                    style={{ background: C.teal, color: "#fff" }}
                  >
                    {t.learn}
                    <Arrow className="transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </ScrollReveal>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
