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
      <section id="hero" className="relative flex-grow flex items-center bg-white text-slate-800 py-8 sm:py-12 lg:py-16 overflow-hidden">
        <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-14 items-center">
            
            {/* Kolom Kiri: Teks & Aksi dengan animasi fade entrance */}
            <div className="lg:col-span-6 space-y-5 sm:space-y-6 lg:space-y-7 text-left animate-hero-fade">
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
              <div className="pt-1 sm:pt-2 flex flex-wrap items-center gap-4">
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

            {/* Kolom Kanan: 5 Aset 3D Individual Tanpa Border & Responsif Penuh di HP/Tablet/Desktop */}
            <div className="lg:col-span-6 flex justify-center lg:justify-end animate-hero-image">
              <div className="relative w-full max-w-[420px] sm:max-w-[560px] lg:max-w-none aspect-[4/3] mx-auto select-none">
                {/* Ambient Warm Gold Glow di Tengah */}
                <div
                  className="absolute left-1/2 top-[48%] -translate-x-1/2 -translate-y-1/2 w-[74%] aspect-square rounded-full pointer-events-none"
                  style={{
                    background:
                      'radial-gradient(circle, rgba(242,194,27,0.25) 0%, rgba(242,194,27,0.07) 55%, rgba(255,255,255,0) 100%)',
                  }}
                />

                {/* Floor Shadows (Bayangan Lantai di Bawah Masing-Masing Ikon) */}
                {/* Shadow 1: Kiri Atas (Ducting) */}
                <div
                  className="absolute left-[4.5%] sm:left-[6.5%] top-[37.5%] w-[23%] sm:w-[21.5%] h-[8.5%] rounded-full pointer-events-none"
                  style={{
                    background:
                      'radial-gradient(ellipse at center, rgba(15,23,42,0.17) 0%, rgba(11,92,80,0.05) 58%, transparent 100%)',
                  }}
                />
                {/* Shadow 2: Kanan Atas (HVAC AC) */}
                <div
                  className="absolute left-[70.5%] sm:left-[70.5%] top-[38.0%] w-[24.5%] sm:w-[23%] h-[8.8%] rounded-full pointer-events-none"
                  style={{
                    background:
                      'radial-gradient(ellipse at center, rgba(15,23,42,0.17) 0%, rgba(11,92,80,0.05) 58%, transparent 100%)',
                  }}
                />
                {/* Shadow 3: Kiri Bawah (Exhaust Fan) */}
                <div
                  className="absolute left-[5.0%] sm:left-[7.0%] top-[89.0%] w-[22.5%] sm:w-[21%] h-[8.5%] rounded-full pointer-events-none"
                  style={{
                    background:
                      'radial-gradient(ellipse at center, rgba(15,23,42,0.17) 0%, rgba(11,92,80,0.05) 58%, transparent 100%)',
                  }}
                />
                {/* Shadow 4: Kanan Bawah (Speaker) */}
                <div
                  className="absolute left-[70.5%] sm:left-[70.5%] top-[88.0%] w-[24%] sm:w-[22.5%] h-[8.6%] rounded-full pointer-events-none"
                  style={{
                    background:
                      'radial-gradient(ellipse at center, rgba(15,23,42,0.17) 0%, rgba(11,92,80,0.05) 58%, transparent 100%)',
                  }}
                />
                {/* Shadow 5: Tengah (Petir Utama) */}
                <div
                  className="absolute left-[35.0%] top-[82.5%] w-[30%] sm:w-[28.5%] h-[11%] rounded-full pointer-events-none"
                  style={{
                    background:
                      'radial-gradient(ellipse at center, rgba(180,83,9,0.26) 0%, rgba(242,194,27,0.10) 58%, transparent 100%)',
                  }}
                />

                {/* 1. Kiri Atas: Pipa Ducting Biru */}
                <div className="absolute left-[3.5%] sm:left-[5.5%] top-[5.5%] w-[25.5%] sm:w-[24%] aspect-[500/513] animate-float-1 transition-transform duration-500 hover:scale-105">
                  <Image
                    src="/images/hero/ducting-3d.webp"
                    alt="Instalasi Ducting Bali"
                    fill
                    sizes="(max-width: 768px) 32vw, 18vw"
                    className="object-contain drop-shadow-[0_14px_14px_rgba(15,23,42,0.16)] sm:drop-shadow-[0_18px_18px_rgba(15,23,42,0.16)]"
                  />
                </div>

                {/* 2. Kanan Atas: Unit AC HVAC */}
                <div className="absolute left-[68.0%] sm:left-[68.5%] top-[2.5%] w-[28%] sm:w-[26.5%] aspect-[540/555] animate-float-2 transition-transform duration-500 hover:scale-105">
                  <Image
                    src="/images/hero/hvac-ac-3d.webp"
                    alt="Kontraktor HVAC & AC Bali"
                    fill
                    sizes="(max-width: 768px) 34vw, 20vw"
                    className="object-contain drop-shadow-[0_14px_14px_rgba(15,23,42,0.16)] sm:drop-shadow-[0_18px_18px_rgba(15,23,42,0.16)]"
                  />
                </div>

                {/* 3. Kiri Bawah: Exhaust Fan Ventilasi */}
                <div className="absolute left-[4.5%] sm:left-[6.5%] top-[47.0%] w-[22.5%] sm:w-[21%] aspect-[460/686] animate-float-3 transition-transform duration-500 hover:scale-105">
                  <Image
                    src="/images/hero/exhaust-fan-3d.webp"
                    alt="Sistem Ventilasi & Exhaust Fan Bali"
                    fill
                    sizes="(max-width: 768px) 30vw, 16vw"
                    className="object-contain drop-shadow-[0_14px_14px_rgba(15,23,42,0.16)] sm:drop-shadow-[0_18px_18px_rgba(15,23,42,0.16)]"
                  />
                </div>

                {/* 4. Kanan Bawah: Speaker Acoustic & Soundproofing */}
                <div className="absolute left-[68.5%] sm:left-[69.0%] top-[53.5%] w-[26.5%] sm:w-[25%] aspect-[500/509] animate-float-4 transition-transform duration-500 hover:scale-105">
                  <Image
                    src="/images/hero/speaker-3d.webp"
                    alt="Peredam Suara & Soundproofing Bali"
                    fill
                    sizes="(max-width: 768px) 32vw, 18vw"
                    className="object-contain drop-shadow-[0_14px_14px_rgba(15,23,42,0.16)] sm:drop-shadow-[0_18px_18px_rgba(15,23,42,0.16)]"
                  />
                </div>

                {/* 5. Tengah: Petir MEP Utama */}
                <div className="absolute left-[34.5%] sm:left-[35.5%] top-[12.5%] w-[32%] sm:w-[30%] aspect-[529/900] z-10 animate-float-center transition-transform duration-500 hover:scale-105">
                  <Image
                    src="/images/hero/lightning-bolt-3d.webp"
                    alt="Kontraktor Listrik & MEP Bali Electrical Solutions"
                    fill
                    priority
                    sizes="(max-width: 768px) 38vw, 22vw"
                    className="object-contain drop-shadow-[0_18px_18px_rgba(180,83,9,0.28)] sm:drop-shadow-[0_24px_24px_rgba(180,83,9,0.28)]"
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
