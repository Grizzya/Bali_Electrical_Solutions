'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { createPortal } from 'react-dom';
import { useLocale } from 'next-intl';
import { C, CircuitBackdrop } from '@/components/services/servicesData';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { SITE_CONFIG } from '@/lib/constants';

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  location: string;
  image: string;
  spanClass: string;
}

const GALLERY_TEXT = {
  id: {
    title: 'GALLERY',
    badge: 'BALI ELECTRICAL',
    subtitle: 'Dokumentasi instalasi sistem HVAC, fabrikasi ducting, fresh air, ventilasi exhaust, akustik, dan MEP di berbagai proyek vila, resort, dan komersial di Bali.',
    ctaTitle: 'Ingin Hasil Instalasi Rapi & Terukur Seperti Ini?',
    ctaSub: 'Konsultasikan kebutuhan teknis bangunan Anda bersama tim engineer kami di Bali.',
    ctaBtn: 'Hubungi via WhatsApp',
    items: [
      {
        id: 1,
        title: 'Instalasi Exhaust Fan Komersial',
        category: 'Ventilation',
        location: 'Berawa, Canggu',
        image: '/images/exhaust-fan.jpg',
        spanClass: 'md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-2',
      },
      {
        id: 2,
        title: 'Fabrikasi & Instalasi Jalur Ducting PIR',
        category: 'Ducting System',
        location: 'Seminyak, Bali',
        image: '/images/hero/ducting-3d.webp',
        spanClass: 'md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-3',
      },
      {
        id: 3,
        title: 'Sistem AC Mainroom & VRV Komersial',
        category: 'HVAC Cooling',
        location: 'Uluwatu, Bali',
        image: '/images/hero/hvac-ac-3d.webp',
        spanClass: 'md:col-start-3 md:col-end-5 md:row-start-1 md:row-end-2',
      },
      {
        id: 4,
        title: 'Peredam Suara Akustik & Soundproofing',
        category: 'Acoustic',
        location: 'Canggu, Bali',
        image: '/images/hero/speaker-3d.webp',
        spanClass: 'md:col-start-1 md:col-end-2 md:row-start-2 md:row-end-3',
      },
      {
        id: 5,
        title: 'Unit Ventilasi & Sirkulasi Udara',
        category: 'Fresh Air & Vent',
        location: 'Sanur, Bali',
        image: '/images/hero/exhaust-fan-3d.webp',
        spanClass: 'md:col-start-3 md:col-end-4 md:row-start-2 md:row-end-3',
      },
      {
        id: 6,
        title: 'Panel Distribusi LVMDP & Instalasi MEP',
        category: 'MEP Solutions',
        location: 'Nusa Dua, Bali',
        image: '/images/hero/lightning-bolt-3d.webp',
        spanClass: 'md:col-start-4 md:col-end-5 md:row-start-2 md:row-end-4',
      },
      {
        id: 7,
        title: 'Integrasi Sistem Mekanikal & Elektrikal',
        category: 'MEP Engineering',
        location: 'Ubud, Bali',
        image: '/images/hero.webp',
        spanClass: 'md:col-start-1 md:col-end-2 md:row-start-3 md:row-end-4',
      },
      {
        id: 8,
        title: 'Exhaust Hood & Sirkulasi Udara Restoran',
        category: 'Ventilation',
        location: 'Pererenan, Bali',
        image: '/images/exhaust-fan.jpg',
        spanClass: 'md:col-start-2 md:col-end-3 md:row-start-3 md:row-end-4',
      },
      {
        id: 9,
        title: 'Instalasi Ducting Concealed Luxury Villa',
        category: 'HVAC & Ducting',
        location: 'Jimbaran, Bali',
        image: '/images/hero/ducting-3d.webp',
        spanClass: 'md:col-start-3 md:col-end-4 md:row-start-3 md:row-end-4',
      },
    ] as GalleryItem[],
  },
  en: {
    title: 'GALLERY',
    badge: 'BALI ELECTRICAL',
    subtitle: 'Project showcase of our HVAC systems, custom ducting fabrication, fresh air intake, exhaust ventilation, acoustic soundproofing, and MEP installations across Bali.',
    ctaTitle: 'Want Clean & Precision-Engineered Installations Like These?',
    ctaSub: 'Consult your building requirements directly with our Bali engineering team.',
    ctaBtn: 'Contact via WhatsApp',
    items: [
      {
        id: 1,
        title: 'Commercial Exhaust Fan Installation',
        category: 'Ventilation',
        location: 'Berawa, Canggu',
        image: '/images/exhaust-fan.jpg',
        spanClass: 'md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-2',
      },
      {
        id: 2,
        title: 'Custom PIR & Galvanized Ductwork',
        category: 'Ducting System',
        location: 'Seminyak, Bali',
        image: '/images/hero/ducting-3d.webp',
        spanClass: 'md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-3',
      },
      {
        id: 3,
        title: 'Mainroom Commercial AC & VRV System',
        category: 'HVAC Cooling',
        location: 'Uluwatu, Bali',
        image: '/images/hero/hvac-ac-3d.webp',
        spanClass: 'md:col-start-3 md:col-end-5 md:row-start-1 md:row-end-2',
      },
      {
        id: 4,
        title: 'High-STC Acoustic Soundproofing',
        category: 'Acoustic',
        location: 'Canggu, Bali',
        image: '/images/hero/speaker-3d.webp',
        spanClass: 'md:col-start-1 md:col-end-2 md:row-start-2 md:row-end-3',
      },
      {
        id: 5,
        title: 'Heavy-Duty Ventilation & Air Circulation',
        category: 'Fresh Air & Vent',
        location: 'Sanur, Bali',
        image: '/images/hero/exhaust-fan-3d.webp',
        spanClass: 'md:col-start-3 md:col-end-4 md:row-start-2 md:row-end-3',
      },
      {
        id: 6,
        title: 'LVMDP Electrical Panels & MEP Works',
        category: 'MEP Solutions',
        location: 'Nusa Dua, Bali',
        image: '/images/hero/lightning-bolt-3d.webp',
        spanClass: 'md:col-start-4 md:col-end-5 md:row-start-2 md:row-end-4',
      },
      {
        id: 7,
        title: 'Integrated Mechanical & Electrical Hub',
        category: 'MEP Engineering',
        location: 'Ubud, Bali',
        image: '/images/hero.webp',
        spanClass: 'md:col-start-1 md:col-end-2 md:row-start-3 md:row-end-4',
      },
      {
        id: 8,
        title: 'Commercial Kitchen & Restroom Extraction',
        category: 'Ventilation',
        location: 'Pererenan, Bali',
        image: '/images/exhaust-fan.jpg',
        spanClass: 'md:col-start-2 md:col-end-3 md:row-start-3 md:row-end-4',
      },
      {
        id: 9,
        title: 'Concealed Ducted AC for Luxury Villa',
        category: 'HVAC & Ducting',
        location: 'Jimbaran, Bali',
        image: '/images/hero/ducting-3d.webp',
        spanClass: 'md:col-start-3 md:col-end-4 md:row-start-3 md:row-end-4',
      },
    ] as GalleryItem[],
  },
};

export default function GalleryContent() {
  const locale = useLocale();
  const content = locale === 'id' ? GALLERY_TEXT.id : GALLERY_TEXT.en;
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedItem(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      {/* ===== HERO BANNER DENGAN FLOATING BADGE DI TENGAH BAWAH (GAYA POLESIN BALI) ===== */}
      <section
        className="relative flex flex-col items-center justify-center min-h-[300px] sm:min-h-[360px] md:min-h-[400px] text-center text-white select-none"
        style={{ background: C.teal }}
      >
        {/* Background Visual Layer */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <Image
            src="/images/exhaust-fan.jpg"
            alt="Bali Electrical Solutions Gallery Banner"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-25 mix-blend-luminosity scale-105"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(180deg, rgba(7,61,53,0.75) 0%, rgba(11,92,80,0.88) 100%)',
            }}
          />
          <CircuitBackdrop />
        </div>

        {/* Center Title */}
        <div className="relative z-10 px-5 animate-hero-fade">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-wider drop-shadow-[0_4px_12px_rgba(0,0,0,0.35)]">
            {content.title}
          </h1>
        </div>
      </section>

      {/* ===== COLLAGE BENTO GRID 9 ITEM (4 KOLOM x 3 BARIS DI DESKTOP, 2 KOLOM DI MOBILE) ===== */}
      <section className="py-16 sm:py-20 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          {/* Grid Kolase Sesuai CSS Polesin:
              Desktop: 4 kolom, auto-rows 250px, gap 15px (gap-4)
              item-2: col 2/3, row 1/3 (Tall)
              item-3: col 3/5, row 1/2 (Wide)
              item-6: col 4/5, row 2/4 (Tall)
              Mobile: 2 kolom, auto-rows 200px, posisi mengalir otomatis */}
          <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] md:auto-rows-[250px] gap-3.5 sm:gap-4">
            {content.items.map((item, idx) => {
              const isContainAsset = item.image.includes('/hero/');

              return (
                <ScrollReveal
                  key={item.id}
                  delay={idx * 60}
                  className={`h-full w-full ${item.spanClass}`}
                >
                  <div
                    onClick={() => setSelectedItem(item)}
                    className="group relative h-full w-full overflow-hidden rounded-[10px] bg-[#EEF4F4] border border-slate-200/70 shadow-xs hover:shadow-xl transition-all duration-400 cursor-pointer"
                  >
                    {/* Subtle technical pattern background for 3D renders */}
                    {isContainAsset && (
                      <div
                        className="absolute inset-0 opacity-60 pointer-events-none"
                        style={{
                          background:
                            idx % 2 === 0
                              ? 'radial-gradient(circle at 50% 50%, rgba(11,92,80,0.12) 0%, rgba(244,248,248,0.9) 100%)'
                              : 'radial-gradient(circle at 50% 50%, rgba(242,194,27,0.15) 0%, rgba(244,248,248,0.95) 100%)',
                        }}
                      />
                    )}

                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 33vw"
                      className={`${
                        isContainAsset ? 'object-contain p-6 sm:p-8' : 'object-cover'
                      } transition-transform duration-500 ease-out group-hover:scale-105`}
                    />

                    {/* Hover Overlay Caption */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#073D35]/90 via-[#073D35]/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 sm:p-5">
                      <span className="inline-block w-fit rounded bg-[#F2C21B] px-2 py-0.5 text-[10px] sm:text-xs font-extrabold uppercase tracking-wider text-[#0B5C50] mb-1.5">
                        {item.category}
                      </span>
                      <h3 className="text-white font-bold text-sm sm:text-base leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-white/75 text-xs mt-0.5">{item.location}</p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="bg-[#073D35] text-white py-16 md:py-20 overflow-hidden">
        <ScrollReveal className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
            {content.ctaTitle}
          </h2>
          <p className="mt-3 text-sm sm:text-base md:text-lg text-white/80 max-w-xl mx-auto">
            {content.ctaSub}
          </p>
          <div className="mt-8">
            <a
              href={SITE_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[#F2C21B] px-8 py-3.5 text-sm sm:text-base font-bold text-[#073D35] shadow-lg transition-all duration-300 hover:brightness-105 hover:scale-105 active:scale-95"
            >
              {content.ctaBtn}
            </a>
          </div>
        </ScrollReveal>
      </section>

      {/* ===== LIGHTBOX MODAL PREVIEW SAAT FOTO DIKLIK ===== */}
      {selectedItem &&
        typeof document !== 'undefined' &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-xs animate-fadeIn"
            onClick={() => setSelectedItem(null)}
          >
            <div
              className="relative w-full max-w-2xl bg-white rounded-2xl overflow-hidden shadow-2xl animate-scaleUp"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                className="absolute top-3.5 right-3.5 z-20 w-9 h-9 rounded-full bg-black/50 hover:bg-black/75 text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close preview"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="relative aspect-[4/3] w-full bg-[#EEF4F4]">
                <Image
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 700px"
                  className={
                    selectedItem.image.includes('/hero/')
                      ? 'object-contain p-10'
                      : 'object-cover'
                  }
                />
              </div>

              <div className="p-5 sm:p-6 bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="inline-block rounded bg-[#F2C21B] px-2.5 py-0.5 text-xs font-extrabold uppercase tracking-wider text-[#0B5C50] mb-1">
                    {selectedItem.category}
                  </span>
                  <h3 className="text-lg sm:text-xl font-extrabold text-[#0B5C50]">
                    {selectedItem.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                    {selectedItem.location}
                  </p>
                </div>

                <a
                  href={SITE_CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-xl bg-[#0B5C50] hover:bg-[#08493f] text-white text-xs sm:text-sm font-bold px-5 py-2.5 transition-colors shrink-0"
                >
                  {content.ctaBtn}
                </a>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
