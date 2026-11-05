'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { ServiceItem } from '@/lib/services';
import { SITE_CONFIG } from '@/lib/constants';

interface ServiceDetailData {
  item: ServiceItem;
  image: string;
  features: string[];
  fullDescription: string;
}

interface ServicesListProps {
  services: ServiceItem[];
  servicesMap: Record<string, { image: string; features: string[]; fullDescription: string }>;
}

export default function ServicesList({ services, servicesMap }: ServicesListProps) {
  const t = useTranslations('servicesPage');
  const tServices = useTranslations('services');
  const [selectedService, setSelectedService] = useState<ServiceDetailData | null>(null);

  // Lock background scroll when modal is open
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

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedService(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((item, index) => {
          const detail = servicesMap[item.key] || {
            image: `/images/services/${item.slug}.webp`,
            features: item.highlights || [],
            fullDescription: item.summary,
          };

          return (
            <ScrollReveal key={item.slug} delay={index * 60}>
              <div className="group flex flex-col h-full bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-1">
                {/* Image Preview Container */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100 cursor-pointer" onClick={() => setSelectedService({ item, ...detail })}>
                  <Image
                    src={detail.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Subtle Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />

                  {/* Number Badge Top Left */}
                  <div className="absolute top-4 left-4">
                    <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#0B5C50] text-[#F2C21B] font-mono text-sm font-extrabold shadow-md border border-white/20">
                      {item.number}
                    </span>
                  </div>

                  {/* Quick Click Hint Overlay on Hover */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-[#0B5C50] text-xs font-bold shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <svg className="w-4 h-4 text-[#F2C21B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      {t('viewDetail')}
                    </span>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between space-y-5">
                  <div className="space-y-3">
                    <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#0B5C50]/80">
                      {tServices('itemPrefix')} {item.number}
                    </span>
                    <h3 className="text-xl font-extrabold text-[#0B5C50] font-heading tracking-tight leading-snug group-hover:text-[#08493f] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
                      {item.summary}
                    </p>
                  </div>

                  {/* Highlights tags */}
                  {item.highlights && item.highlights.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {item.highlights.slice(0, 3).map((hl) => (
                        <span
                          key={hl}
                          className="inline-block px-2.5 py-1 text-[11px] font-semibold rounded-md bg-teal-50 text-[#0B5C50] border border-teal-100/80"
                        >
                          {hl}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="pt-3 border-t border-slate-100 flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setSelectedService({ item, ...detail })}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl border border-[#0B5C50]/20 hover:border-[#0B5C50] text-[#0B5C50] text-xs font-bold hover:bg-teal-50/50 transition-colors cursor-pointer"
                    >
                      <svg className="w-3.5 h-3.5 text-[#0B5C50]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{t('viewDetail')}</span>
                    </button>

                    <a
                      href={SITE_CONFIG.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center p-2.5 rounded-xl bg-[#F2C21B] hover:bg-[#e0b316] text-[#0B5C50] transition-transform duration-200 hover:scale-105 active:scale-95 shadow-xs"
                      aria-label={t('ctaDetail')}
                      title={t('ctaDetail')}
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>

      {/* ===== POPUP / MODAL DETAIL PENJELASAN & FOTO ===== */}
      {selectedService && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/60 backdrop-blur-xs transition-opacity duration-300 animate-fadeIn"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 max-h-[90vh] flex flex-col animate-scaleUp"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Bar with Close Button */}
            <div className="absolute top-4 right-4 z-20">
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="w-10 h-10 rounded-full bg-black/50 hover:bg-black/75 text-white flex items-center justify-center backdrop-blur-md transition-transform duration-200 hover:scale-105 cursor-pointer"
                aria-label={t('modalClose')}
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Scrollable Content Container */}
            <div className="overflow-y-auto">
              {/* Modal Banner Photo */}
              <div className="relative aspect-[16/9] w-full bg-slate-900">
                <Image
                  src={selectedService.image}
                  alt={selectedService.item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 800px"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B5C50]/90 text-[#F2C21B] text-xs font-mono font-bold tracking-wider mb-1">
                    <span>/{selectedService.item.number}</span>
                    <span className="text-white/60">•</span>
                    <span>{tServices('itemPrefix')} {selectedService.item.number}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black font-heading text-white tracking-tight">
                    {selectedService.item.title}
                  </h3>
                </div>
              </div>

              {/* Modal Body Content */}
              <div className="p-6 sm:p-8 space-y-6 text-slate-800">
                {/* Penjelasan Lengkap */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-[#0B5C50] flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#F2C21B]" />
                    Deskripsi & Penjelasan Teknis
                  </h4>
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                    {selectedService.fullDescription}
                  </p>
                </div>

                {/* Cakupan Fitur & Spesifikasi */}
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

                {/* Modal Footer CTA */}
                <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs text-slate-500 text-center sm:text-left">
                    Standar pengerjaan presisi untuk villa, resort, dan gedung komersial di Bali.
                  </div>

                  <a
                    href={SITE_CONFIG.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full sm:w-auto items-center justify-center gap-2 bg-[#F2C21B] hover:bg-[#e0b316] text-[#0B5C50] font-bold text-sm px-6 py-3 rounded-xl transition-all duration-200 hover:scale-105 active:scale-95 shadow-md"
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
