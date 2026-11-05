'use client';

import React, { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { ServiceItem } from '@/lib/services';
import { SITE_CONFIG } from '@/lib/constants';

interface ServiceDetailData {
  item: ServiceItem;
  image: string;
  features: string[];
  fullDescription: string;
}

interface ServicesShowcaseProps {
  services: ServiceItem[];
  servicesMap: Record<string, { image: string; features: string[]; fullDescription: string }>;
}

// Icon Dual-Tone (Garis Dark Teal / Slate dengan aksen Gold) sesuai model screenshot
function ServiceIcon({ serviceKey }: { serviceKey: string }) {
  switch (serviceKey) {
    case 'hvac':
      // AC / Cooling icon
      return (
        <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="6" y="10" width="36" height="20" rx="3" stroke="#0B5C50" strokeWidth="2.5" />
          <path d="M12 24H36" stroke="#0B5C50" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="36" cy="16" r="2" fill="#F2C21B" />
          {/* Airflow waves with yellow accent */}
          <path d="M14 34C14 37 17 38 19 40" stroke="#F2C21B" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M24 34C24 38 24 38 24 41" stroke="#0B5C50" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M34 34C34 37 31 38 29 40" stroke="#F2C21B" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );
    case 'ducting':
      // Ducting / Air Channel
      return (
        <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 14H28C34.6274 14 40 19.3726 40 26V42" stroke="#0B5C50" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M6 24H22C25.3137 24 28 26.6863 28 30V42" stroke="#0B5C50" strokeWidth="2.5" strokeLinecap="round" />
          {/* Airflow / Sparkles */}
          <circle cx="12" cy="19" r="2" fill="#F2C21B" />
          <circle cx="20" cy="19" r="2" fill="#F2C21B" />
          <path d="M34 35L36 33L38 35" stroke="#F2C21B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'freshAir':
      // Fresh Air / Eco Leaf & Wind
      return (
        <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 8C14 8 8 18 10 28C11.5 35 18 40 25 40C35 40 40 32 38 22" stroke="#0B5C50" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M10 28C16 28 24 22 24 10" stroke="#0B5C50" strokeWidth="2.5" strokeLinecap="round" />
          {/* Clean air sparkles */}
          <path d="M33 12L34.5 15.5L38 17L34.5 18.5L33 22L31.5 18.5L28 17L31.5 15.5L33 12Z" fill="#F2C21B" />
          <circle cx="24" cy="32" r="2" fill="#F2C21B" />
        </svg>
      );
    case 'ventilation':
      // Ventilation Fan / Exhaust
      return (
        <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="24" r="16" stroke="#0B5C50" strokeWidth="2.5" />
          <circle cx="24" cy="24" r="4" fill="#F2C21B" />
          {/* Fan blades */}
          <path d="M24 20C24 14 29 12 32 14C32 18 28 20 24 20Z" stroke="#0B5C50" strokeWidth="2" fill="#0B5C50" fillOpacity="0.1" />
          <path d="M28 24C34 24 36 29 34 32C30 32 28 28 28 24Z" stroke="#0B5C50" strokeWidth="2" fill="#0B5C50" fillOpacity="0.1" />
          <path d="M24 28C24 34 19 36 16 34C16 30 20 28 24 28Z" stroke="#0B5C50" strokeWidth="2" fill="#0B5C50" fillOpacity="0.1" />
          <path d="M20 24C14 24 12 19 14 16C18 16 20 20 20 24Z" stroke="#0B5C50" strokeWidth="2" fill="#0B5C50" fillOpacity="0.1" />
        </svg>
      );
    case 'acoustic':
      // Sound waves & Shield
      return (
        <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 20V28H14L22 35V13L14 20H8Z" stroke="#0B5C50" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          {/* Sound Dampening Waves with Yellow Spot */}
          <path d="M28 17C30.5 19 32 21.5 32 24C32 26.5 30.5 29 28 31" stroke="#0B5C50" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M34 12C38 15.5 40 19.5 40 24C40 28.5 38 32.5 34 36" stroke="#F2C21B" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="8" y1="38" x2="40" y2="10" stroke="#F2C21B" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );
    case 'mep':
    default:
      // Electrical Plug / Lightning / Gears
      return (
        <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="24" r="16" stroke="#0B5C50" strokeWidth="2.5" />
          <path d="M26 12L18 26H25L22 36L31 22H24L26 12Z" fill="#F2C21B" stroke="#0B5C50" strokeWidth="2" strokeLinejoin="round" />
        </svg>
      );
  }
}

export default function ServicesShowcase({ services, servicesMap }: ServicesShowcaseProps) {
  const t = useTranslations('servicesSection');
  const [selectedService, setSelectedService] = useState<ServiceDetailData | null>(null);

  // Lock scroll saat modal popup terbuka
  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedService]);

  // Support ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedService(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      {/* ===== PARENT CONTAINER SESUAI SCREENSHOT: Dark Teal (#0B5C50) + Rounded Besar ===== */}
      <div className="relative overflow-hidden rounded-[2.5rem] lg:rounded-[3rem] bg-[#0B5C50] text-white p-7 sm:p-10 lg:p-14 shadow-2xl">
        {/* Subtle Background Aesthetic Rings */}
        <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full border border-white/10 pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full border border-white/10 pointer-events-none" />

        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* ===== SISI KIRI (~30% LEBAR): Judul, Deskripsi, dan Tombol CTA Kuning ===== */}
          <div className="lg:col-span-4 space-y-6">
            <div className="space-y-3">
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black font-heading tracking-tight leading-[1.12] text-white">
                {t('title')}
              </h2>
              <p className="text-sm sm:text-base text-white/85 leading-relaxed font-normal pt-1">
                {t('subtitle')}
              </p>
            </div>

            {/* CTA Button Kuning (Golden Yellow #F2C21B) Sesuai Screenshot */}
            <div className="pt-2">
              <a
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#F2C21B] hover:bg-[#e2b314] text-[#0B5C50] font-bold text-sm sm:text-base px-7 py-3.5 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg"
              >
                {t('viewAllCta')}
              </a>
            </div>

            <p className="text-xs text-white/50 italic">
              * {t('clickHint')}
            </p>
          </div>

          {/* ===== SISI KANAN (~70% LEBAR): Grid 3 Kolom x 2 Baris Kartu Putih Bersih ===== */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {services.map((item) => {
                const detail = servicesMap[item.key] || {
                  image: `/images/services/${item.slug}.webp`,
                  features: item.highlights || [],
                  fullDescription: item.summary,
                };

                return (
                  <div
                    key={item.slug}
                    onClick={() => setSelectedService({ item, ...detail })}
                    className="group relative flex flex-col justify-between rounded-2xl bg-white p-6 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 cursor-pointer text-slate-800"
                  >
                    <div>
                      {/* Bagian Atas: Dual-Tone Icon */}
                      <div className="mb-4 inline-block">
                        <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 group-hover:bg-teal-50/60 transition-colors">
                          <ServiceIcon serviceKey={item.key} />
                        </div>
                      </div>

                      {/* Judul Kartu Layanan */}
                      <h3 className="text-base sm:text-lg font-extrabold text-[#0B5C50] font-heading tracking-tight group-hover:text-[#08493f] transition-colors line-clamp-2">
                        {item.title}
                      </h3>

                      {/* Deskripsi Singkat */}
                      <p className="mt-2 text-xs sm:text-[13px] text-slate-600 leading-relaxed line-clamp-3">
                        {item.summary}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>

      {/* ===== POPUP / MODAL DETAIL PENJELASAN & FOTO SESUAI PERMINTAAN ===== */}
      {selectedService && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/65 backdrop-blur-xs transition-opacity duration-300 animate-fadeIn"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 max-h-[90vh] flex flex-col animate-scaleUp"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Close Button */}
            <div className="absolute top-4 right-4 z-30">
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="w-10 h-10 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white flex items-center justify-center backdrop-blur-md transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer shadow-lg border border-white/20"
                aria-label={t('modalClose')}
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Scrollable Modal Content */}
            <div className="overflow-y-auto max-h-[90vh]">
              {/* Header Visual Box */}
              <div className="relative bg-gradient-to-br from-[#0B5C50] to-[#063730] p-6 sm:p-8 text-white overflow-hidden">
                {/* Decorative background shape */}
                <div className="absolute -top-12 -right-12 w-44 h-44 rounded-full border border-white/10 pointer-events-none" />
                
                <div className="relative z-10 space-y-3 pr-10">
                  <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-white/10 text-[#F2C21B] text-xs font-mono font-bold tracking-wider border border-white/15">
                    <span className="w-2 h-2 rounded-full bg-[#F2C21B]" />
                    <span>Layanan {selectedService.item.number}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black font-heading text-white tracking-tight leading-tight">
                    {selectedService.item.title}
                  </h3>
                </div>
              </div>

              {/* Modal Body Content */}
              <div className="p-6 sm:p-8 space-y-6 text-slate-800">
                {/* Visual Image / Placeholder Box */}
                <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 flex items-center justify-center shadow-inner">
                  <div className="flex flex-col items-center justify-center p-6 text-center space-y-2">
                    <div className="p-3 rounded-2xl bg-teal-50 border border-teal-100/80 text-[#0B5C50]">
                      <ServiceIcon serviceKey={selectedService.item.key} />
                    </div>
                    <span className="text-xs font-semibold text-slate-500 max-w-xs">
                      Foto dokumentasi & spesifikasi pengerjaan {selectedService.item.title}
                    </span>
                  </div>
                </div>

                {/* Penjelasan Lengkap */}
                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-[#0B5C50] flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#F2C21B]" />
                    Penjelasan & Spesifikasi Teknis
                  </h4>
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                    {selectedService.fullDescription}
                  </p>
                </div>

                {/* Cakupan Fitur */}
                {selectedService.features && selectedService.features.length > 0 && (
                  <div className="space-y-3 bg-slate-50 p-5 rounded-2xl border border-slate-200/80">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-[#0B5C50]">
                      {t('featuresTitle')}
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                      {selectedService.features.map((feat) => (
                        <div key={feat} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                          <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#0B5C50] text-[#F2C21B] text-xs font-bold shrink-0 mt-0.5">
                            ✓
                          </span>
                          <span className="font-medium">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Footer Modal CTA */}
                <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-xs text-slate-500 text-center sm:text-left">
                    Standar pengerjaan presisi oleh tim insinyur bersertifikasi di Bali.
                  </span>

                  <a
                    href={SITE_CONFIG.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full sm:w-auto items-center justify-center gap-2 bg-[#F2C21B] hover:bg-[#e0b316] text-[#0B5C50] font-bold text-sm px-6 py-3 rounded-full transition-all duration-200 hover:scale-105 active:scale-95 shadow-md"
                  >
                    <span>{t('ctaDetail')}</span>
                    <span className="font-bold">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
