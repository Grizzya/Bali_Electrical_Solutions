import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { SITE_CONFIG } from '@/lib/constants';

export default function Hero() {
  const t = useTranslations('hero');

  const stats = [
    {
      value: t('stats.experienceCount'),
      label: t('stats.experience'),
    },
    {
      value: t('stats.projectsCount'),
      label: t('stats.projects'),
    },
    {
      value: t('stats.satisfactionCount'),
      label: t('stats.satisfaction'),
    },
    {
      value: t('stats.engineersCount'),
      label: t('stats.engineers'),
    },
  ];

  return (
    <div className="min-h-[calc(100vh-6rem)] flex flex-col justify-between">
      {/* Hero Main Section: Full height flex-grow, proporsional besar 1 layar */}
      <section id="hero" className="relative flex-grow flex items-center bg-white text-slate-800 py-12 lg:py-16 overflow-hidden">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Kolom Kiri: Teks & Aksi dengan animasi fade entrance */}
            <div className="lg:col-span-6 space-y-6 lg:space-y-7 text-left animate-hero-fade">
              {/* Aksen Garis Emas */}
              <div className="w-16 h-1.5 bg-[#F2C21B] rounded-full"></div>

              {/* Judul Utama 3 Baris - Lebih Besar & Berjarak Proporsional */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[64px] font-black font-heading tracking-tight leading-[1.12]">
                <span className="block text-[#0B5C50]">{t('titleLine1')}</span>
                <span className="block text-[#0B5C50]">{t('titleLine2')}</span>
                <span className="block text-[#0B5C50]">{t('titleLine3')}</span>
              </h1>

              {/* Subtitle / Deskripsi */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl font-normal">
                {t('subtitle')}
              </p>

              {/* Tombol Aksi */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href={SITE_CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-[#F2C21B] hover:bg-[#e0b316] text-[#0B5C50] font-bold text-base sm:text-lg px-8 py-3.5 rounded-xl transition-all duration-300 hover:scale-[1.03] active:scale-95 shadow-md hover:shadow-xl"
                >
                  {t('ctaPrimary')}
                </a>
              </div>
            </div>

            {/* Kolom Kanan: Foto Utama dengan Outer Yellow Line Frame & Entrance Scale */}
            <div className="lg:col-span-6 flex justify-center lg:justify-end animate-hero-image">
              <div className="relative w-full max-w-md lg:max-w-xl p-3 sm:p-4 group">
                {/* Outer Yellow Frame Accent dengan soft pulse halus */}
                <div className="absolute inset-0 rounded-[2.5rem] sm:rounded-[3rem] border-2 border-[#F2C21B] pointer-events-none transition-transform duration-500 group-hover:scale-105"></div>

                {/* Main Photo Container */}
                <div className="relative aspect-[4/3] min-h-[300px] sm:min-h-[380px] lg:min-h-[420px] w-full rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden bg-slate-100 shadow-2xl flex items-center justify-center transition-transform duration-500 group-hover:scale-[0.99]">
                  <Image
                    src="/images/hero.webp"
                    alt="Bali Electrical Solutions Hero Engineering"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Subtle text placeholder overlay */}
                  <div className="absolute inset-0 bg-black/10 flex items-center justify-center pointer-events-none">
                    <span className="text-white/90 font-mono text-xs sm:text-sm font-semibold tracking-wider px-4 py-2 bg-black/30 rounded-md backdrop-blur-xs text-center">
                      {t('imagePlaceholder')}
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

     
      <section className="bg-[#0B5C50] text-white py-6 lg:py-8 border-t border-b border-[#0B5C50]/20 shrink-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-white/20 items-center">
            {stats.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center gap-4 px-4 lg:px-6 text-left"
              >
                {/* Nilai / Angka Besar */}
                <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-heading shrink-0">
                  {item.value}
                </span>

                {/* Label 2 Baris */}
                <span className="text-xs sm:text-sm font-medium text-white/90 leading-tight max-w-[130px]">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
