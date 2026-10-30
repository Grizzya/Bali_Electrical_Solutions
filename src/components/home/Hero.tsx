import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { SITE_CONFIG } from '@/lib/constants';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section id="hero" className="relative bg-[#0c5953] text-white pt-12 pb-16 lg:pt-16 lg:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Kolom Kiri: Teks & Aksi */}
          <div className="lg:col-span-6 space-y-6 text-left">
            {/* Aksen Garis Emas */}
            <div className="w-12 h-1 bg-[#F2C21B] rounded-full"></div>

            {/* Judul Utama 3 Baris */}
            <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-black font-heading tracking-tight leading-[1.15]">
              <span className="block text-white">{t('titleLine1')}</span>
              <span className="block text-white">{t('titleLine2')}</span>
              <span className="block text-[#F2C21B]">{t('titleLine3')}</span>
            </h1>

            {/* Subtitle / Deskripsi */}
            <p className="text-sm sm:text-base text-white/90 leading-relaxed max-w-xl font-normal pt-1">
              {t('subtitle')}
            </p>

            {/* Tombol Aksi */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <a
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#F2C21B] hover:bg-[#e0b316] text-[#073D35] font-bold text-sm sm:text-base px-6 py-3 rounded-xl transition-all duration-200 active:scale-95 shadow-sm"
              >
                {t('ctaPrimary')}
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center border border-[#F2C21B] text-[#F2C21B] hover:bg-[#F2C21B]/10 font-medium text-sm sm:text-base px-6 py-3 rounded-xl transition-all duration-200"
              >
                {t('ctaSecondary')}
              </a>
            </div>
          </div>

          {/* Kolom Kanan: Foto Utama dengan Outer Yellow Line Frame */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg lg:max-w-none p-3 sm:p-4">
              {/* Outer Yellow Frame Accent */}
              <div className="absolute inset-0 rounded-[2.5rem] sm:rounded-[3rem] border-2 border-[#F2C21B] pointer-events-none"></div>

              {/* Main Photo Container */}
              <div className="relative aspect-[4/3] w-full rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden bg-[#7e9995] shadow-xl flex items-center justify-center">
                <Image
                  src="/images/hero.webp"
                  alt="Bali Electrical Solutions Hero Engineering"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />

                {/* Subtle text placeholder overlay sesuai sketsa desain */}
                <div className="absolute inset-0 bg-black/10 flex items-center justify-center pointer-events-none">
                  <span className="text-white/80 font-mono text-xs sm:text-sm font-semibold tracking-wider px-4 py-2 bg-black/25 rounded-md backdrop-blur-xs text-center">
                    {t('imagePlaceholder')}
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
