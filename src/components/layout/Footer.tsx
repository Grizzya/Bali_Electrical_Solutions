'use client';

import React from 'react';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { SITE_CONFIG } from '@/lib/constants';
import { servicesData } from '@/data/services';

export default function Footer() {
  const t = useTranslations('footer');
  const tNav = useTranslations('nav');
  const tServices = useTranslations('services');
  const locale = useLocale();

  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-ink-950 text-slate-300 pt-16 pb-8 border-t-4 border-teal-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-ink-800">
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            {/* Logo inline - ganti /logo.svg dengan file foto logo kamu */}
            <div className="flex items-center gap-3">
              <Image
                src="/logo.svg"
                alt="Bali Electrical Solutions Logo"
                width={44}
                height={44}
                className="flex-shrink-0"
              />
              <div className="flex flex-col leading-tight select-none">
                <span className="text-[15px] font-bold tracking-tight text-white">
                  Bali Electrical Solutions
                </span>
                <span className="text-[9px] font-medium uppercase tracking-[0.22em] text-teal-300 mt-[3px]">
                  HVAC &middot; MEP &middot; ACOUSTIC
                </span>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed pt-2">
              {t('aboutText')}
            </p>
            <div className="pt-2">
              <span className="inline-block text-xs font-semibold px-3 py-1.5 rounded-full bg-teal-950 border border-teal-700/50 text-teal-300">
                ⚡ Bali Licensed MEP Engineering
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gold-400"></span>
              {t('quickLinks')}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#hero" className="hover:text-gold-400 transition-colors">
                  {tNav('home')}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-gold-400 transition-colors">
                  {tNav('services')}
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-gold-400 transition-colors">
                  {tNav('about')}
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-gold-400 transition-colors">
                  {tNav('gallery')}
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-gold-400 transition-colors">
                  {tNav('whyUs')}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gold-400 transition-colors">
                  {tNav('contact')}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Services (01 - 06) */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gold-400"></span>
              {t('servicesTitle')}
            </h4>
            <ul className="space-y-2.5 text-sm">
              {servicesData.map((s) => (
                <li key={s.number}>
                  <a
                    href={`#service-${s.number}`}
                    className="hover:text-gold-400 transition-colors flex items-center gap-2"
                  >
                    <span className="text-xs font-mono text-teal-400 font-bold">
                      {s.number}.
                    </span>
                    <span>{tServices(`items.${s.key}.title`)}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Information */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gold-400"></span>
              {t('contactTitle')}
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <svg
                  className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-slate-400">
                  {SITE_CONFIG.address.street}, {SITE_CONFIG.address.city}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <svg
                  className="w-4 h-4 text-teal-400 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a
                  href={SITE_CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold-400 transition-colors"
                >
                  {SITE_CONFIG.whatsappDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <svg
                  className="w-4 h-4 text-teal-400 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href={SITE_CONFIG.emailMailto}
                  className="hover:text-gold-400 transition-colors"
                >
                  {SITE_CONFIG.email}
                </a>
              </div>

              <div className="pt-2 text-xs text-slate-400 border-t border-ink-800">
                <p className="font-semibold text-slate-300">{t('operatingHours')}:</p>
                <p className="mt-0.5">
                  {locale === 'en'
                    ? SITE_CONFIG.operatingHours.en
                    : SITE_CONFIG.operatingHours.id}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>
            &copy; {currentYear} {SITE_CONFIG.name}. {t('rights')}
          </p>
          <p className="text-slate-400">
            Engineered with Precision in Bali, Indonesia.
          </p>
        </div>
      </div>
    </footer>
  );
}

