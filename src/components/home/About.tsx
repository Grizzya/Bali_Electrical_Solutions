import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { SITE_CONFIG } from '@/lib/constants';

export default function About() {
  const t = useTranslations('about');

  const bullets = [
    t('bullets.0'),
    t('bullets.1'),
    t('bullets.2'),
    t('bullets.3'),
  ];

  return (
    <section id="about" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Kolom Kiri: Foto Utama dengan Badge Hijau Tua "MEP" di pojok kanan bawah */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] w-full rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden bg-[#7e9995] shadow-md flex items-center justify-center">
              <Image
                src="/images/about.webp"
                alt="About Bali Electrical Solutions"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />

              {/* Text Placeholder Overlay */}
              <div className="absolute inset-0 bg-black/10 flex items-center justify-center pointer-events-none">
                <span className="text-white/85 font-mono text-xs sm:text-sm font-semibold tracking-wider px-4 py-2 bg-black/25 rounded-md backdrop-blur-xs text-center">
                  {t('imagePlaceholder')}
                </span>
              </div>
            </div>

            {/* Overlapping Badge MEP di pojok kanan bawah foto */}
            <div className="absolute -bottom-5 right-4 sm:right-6 bg-[#0c5953] text-white px-6 py-3.5 rounded-2xl shadow-xl flex flex-col items-center justify-center min-w-[120px] text-center">
              <span className="text-2xl font-black text-[#F2C21B] leading-none tracking-tight">
                {t('badgeMEP')}
              </span>
              <span className="text-[11px] font-medium text-white/90 mt-1">
                {t('badgeSub')}
              </span>
            </div>
          </div>

          {/* Kolom Kanan: Detail About Us */}
          <div className="lg:col-span-6 space-y-6 text-left">
            {/* Badge Kategori Atas */}
            <div className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#0c5953]">
              {t('badge')}
            </div>

            {/* Judul Utama */}
            <h2 className="text-2xl sm:text-4xl lg:text-[40px] font-black text-[#0c5953] font-heading tracking-tight leading-[1.2]">
              {t('title')}
            </h2>

            {/* Paragraf Deskripsi */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl">
              {t('description')}
            </p>

            {/* Bullet Points */}
            <ul className="space-y-3 pt-1 text-sm sm:text-base text-slate-800">
              {bullets.map((bullet, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#0c5953] flex-shrink-0"></span>
                  <span className="font-normal">{bullet}</span>
                </li>
              ))}
            </ul>

            {/* Tombol Book Now! */}
            <div className="pt-3">
              <a
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#0c5953] hover:bg-[#073D35] text-[#F2C21B] font-bold text-sm sm:text-base px-8 py-3.5 rounded-xl transition-all duration-200 active:scale-95 shadow-sm"
              >
                {t('cta')}
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
