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
        <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
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
              <div className="relative w-full max-w-md lg:max-w-2xl p-3 sm:p-4 group">
                {/* Outer Yellow Frame Accent dengan soft pulse halus */}
                <div className="absolute inset-0 rounded-[2.5rem] sm:rounded-[3rem] border-2 border-[#F2C21B] pointer-events-none transition-transform duration-500 group-hover:scale-105"></div>

                {/* Main Photo Container */}
                <div className="relative aspect-[4/3] min-h-[300px] sm:min-h-[380px] lg:min-h-[420px] w-full rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden bg-slate-100 shadow-2xl flex items-center justify-center transition-transform duration-500 group-hover:scale-[0.99]">
                  <Image
                    src="/images/hero.webp"
                    alt="Bali Electrical Solutions - Kontraktor HVAC, Ducting, Fresh Air, Ventilasi, Soundproofing & MEP di Bali"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

     
      <section className="bg-[#0B5C50] text-white py-5 lg:py-8 border-t border-b border-[#0B5C50]/20 shrink-0 overflow-hidden">
        {/* Mobile: Infinite Running Marquee seperti section Review / Testimoni */}
        <div className="md:hidden relative w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_32px,_black_calc(100%-32px),transparent_100%)]">
          <style dangerouslySetInnerHTML={{ __html: `
            @keyframes heroStatsMarquee {
              0% { transform: translate3d(0, 0, 0); }
              100% { transform: translate3d(-50%, 0, 0); }
            }
            .hero-stats-track {
              display: flex;
              width: max-content;
              animation: heroStatsMarquee 16s linear infinite;
              will-change: transform;
            }
            .hero-stats-track:hover,
            .hero-stats-track:active {
              animation-play-state: paused;
            }
          `}} />

          <div className="hero-stats-track flex items-center">
            {[...stats, ...stats, ...stats, ...stats].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3.5 px-7 border-r border-white/20 shrink-0 select-none"
              >
                <span className="text-3xl font-extrabold tracking-tight text-white font-heading shrink-0">
                  {item.value}
                </span>
                <span className="text-xs font-medium text-white/90 leading-tight max-w-[115px]">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Tablet & Desktop: 4 kolom statis */}
        <div className="hidden md:block max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-4 divide-x divide-white/20 items-center">
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
