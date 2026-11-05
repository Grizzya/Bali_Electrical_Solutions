'use client';

import React from 'react';

type TestimonialItem = {
  name: string;
  role: string;
  content: string;
  rating: number;
};

interface TestimoniProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  items: TestimonialItem[];
}

export default function Testimoni({ eyebrow, title, subtitle, items }: TestimoniProps) {
  // Duplikasi item 4x agar marquee sangat panjang dan transisi looping tidak pernah kosong
  const marqueeItems = [...items, ...items, ...items, ...items];

  return (
    <section id="testimonials" className="bg-white py-16 lg:py-24 overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <p className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#0B5C50]">
          {eyebrow}
        </p>
        <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#0B5C50] font-heading tracking-tight">
          {title}
        </h2>
        <p className="mt-3 text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
          {subtitle}
        </p>
      </div>

      {/* Infinite Horizontal Running Marquee Wrapper */}
      <div className="relative w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_64px,_black_calc(100%-64px),transparent_100%)]">
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes marqueeScroll {
            0% { transform: translate3d(0, 0, 0); }
            100% { transform: translate3d(-50%, 0, 0); }
          }
          .marquee-track {
            display: flex;
            width: max-content;
            animation: marqueeScroll 28s linear infinite;
            will-change: transform;
          }
          .marquee-track:hover {
            animation-play-state: paused;
          }
        `}} />

        <div className="marquee-track flex gap-6 py-4">
          {marqueeItems.map((item, index) => (
            <div
              key={`${item.name}-${index}`}
              className="w-[300px] sm:w-[360px] shrink-0 rounded-2xl bg-slate-50/90 p-6 sm:p-7 border border-slate-200/80 shadow-sm transition hover:shadow-md hover:border-[#0B5C50]/40 flex flex-col justify-between select-none"
            >
              <div>
                {/* 5 Star Rating */}
                <div className="flex items-center gap-1 text-[#F2C21B] mb-3.5">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Testimonial Quote */}
                <p className="text-slate-700 text-sm leading-relaxed italic">
                  &ldquo;{item.content}&rdquo;
                </p>
              </div>

              {/* Author Profile */}
              <div className="mt-5 pt-4 border-t border-slate-200/60 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#0B5C50] text-[#F2C21B] font-extrabold flex items-center justify-center text-sm shadow-xs shrink-0">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0B5C50]">
                    {item.name}
                  </h4>
                  <p className="text-xs text-slate-500">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
