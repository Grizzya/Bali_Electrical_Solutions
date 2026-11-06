'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { SITE_CONFIG } from '@/lib/constants';

export default function Footer() {
  const tNav = useTranslations('nav');

  return (
    <footer id="contact" className="relative w-full bg-[#051f1c] text-slate-300 font-sans border-t border-teal-800/40 overflow-hidden">
      {/* Ambient glow with brand colors: Teal (#0B5C50) and Warm Yellow (#F2C21B) */}
      <div className="absolute -bottom-28 left-1/2 -translate-x-1/2 w-[800px] sm:w-[1100px] h-[380px] sm:h-[460px] bg-gradient-to-t from-[#F2C21B]/25 via-[#0B5C50]/35 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 pt-16 sm:pt-20 pb-8 flex flex-col justify-between min-h-[460px] sm:min-h-[520px]">
        {/* Top Row: Left Navigation & Right Contact/Socials */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
          {/* Left Column: Vertical Navigation */}
          <nav className="flex flex-col space-y-3 sm:space-y-4 text-base sm:text-lg font-medium text-white/90">
            <Link href="/" className="hover:text-[#F2C21B] transition-colors w-fit">
              {tNav('home')}
            </Link>
            <Link href="/services" className="hover:text-[#F2C21B] transition-colors w-fit">
              {tNav('services')}
            </Link>
            <Link href="/about-us" className="hover:text-[#F2C21B] transition-colors w-fit">
              {tNav('about')}
            </Link>
            <Link href="/#gallery" className="hover:text-[#F2C21B] transition-colors w-fit">
              {tNav('gallery')}
            </Link>
            <Link href="/#why-us" className="hover:text-[#F2C21B] transition-colors w-fit">
              {tNav('whyUs')}
            </Link>
          </nav>

          {/* Right Column: Social Icons + Contact & Location (Right Aligned on desktop) */}
          <div className="flex flex-col md:items-end text-left md:text-right space-y-5">
            {/* Social Icons row */}
            <div className="flex items-center gap-4 text-white/90">
              {/* WhatsApp */}
              <a
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-white/10 hover:text-[#F2C21B] transition-colors"
                aria-label="WhatsApp"
              >
                <svg className="w-5 h-5 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.971.53 1.77.813 2.796.813 3.179 0 5.766-2.587 5.767-5.766.001-3.182-2.585-5.769-5.767-5.769zm3.387 8.187c-.14.394-.716.745-1.004.792-.289.047-.639.066-1.042-.066-.352-.116-.807-.27-1.393-.526-2.47-1.077-4.084-3.606-4.208-3.771-.124-.165-1.004-1.336-1.004-2.548 0-1.212.639-1.808.866-2.056.227-.247.495-.309.66-.309.165 0 .33.002.474.009.155.007.363-.058.567.433.217.526.742 1.815.804 1.944.062.13.103.28.02.443-.082.165-.124.268-.247.412-.124.145-.262.324-.374.435-.124.124-.253.258-.109.505.144.247.64 1.057 1.373 1.71 1.004.896 1.85 1.173 2.112 1.303.262.13.416.109.57-.068.155-.176.66-.768.835-1.031.176-.263.352-.22.588-.133.237.087 1.505.71 1.763.839.258.13.433.195.495.304.062.11.062.639-.078 1.033z" />
                </svg>
              </a>
              {/* Instagram */}
              <a
                href={SITE_CONFIG.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-white/10 hover:text-[#F2C21B] transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 fill-none stroke-currentColor stroke-2" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              {/* Globe/Website */}
              <Link
                href="/"
                className="p-2 rounded-full hover:bg-white/10 hover:text-[#F2C21B] transition-colors"
                aria-label="Website"
              >
                <svg className="w-5 h-5 fill-none stroke-currentColor stroke-2" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </Link>
              {/* LinkedIn */}
              <a
                href={SITE_CONFIG.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-white/10 hover:text-[#F2C21B] transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>

            {/* Contact Texts */}
            <div className="space-y-1.5 text-sm sm:text-base text-white/90">
              <p>
                <span className="text-white/60">E-mail: </span>
                <a href={SITE_CONFIG.emailMailto} className="hover:text-[#F2C21B] transition-colors">
                  {SITE_CONFIG.email}
                </a>
              </p>
              <p>
                <span className="text-white/60">Phone / WA: </span>
                <a
                  href={SITE_CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#F2C21B] transition-colors"
                >
                  {SITE_CONFIG.phone} ({SITE_CONFIG.whatsappDisplay})
                </a>
              </p>
              <p className="text-white/70">
                {SITE_CONFIG.address.street}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Big Watermark Wordmark: "BALI ELECTRICAL" (Single line, edge-to-edge) */}
        <div className="pt-16 sm:pt-24 select-none pointer-events-none text-center overflow-hidden w-full">
          <span className="block font-heading font-extrabold uppercase leading-none whitespace-nowrap tracking-tight sm:tracking-normal text-[9.5vw] lg:text-[10vw] xl:text-[138px] text-transparent bg-clip-text bg-gradient-to-b from-white/90 via-white/50 to-[#F2C21B]/20 blur-[1px] sm:blur-[2px] opacity-85 transition-all">
            BALI ELECTRICAL
          </span>
        </div>
      </div>
    </footer>
  );
}
