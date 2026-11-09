'use client';

import React from 'react';
import { Antonio } from 'next/font/google';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { SITE_CONFIG } from '@/lib/constants';

const footerDisplayFont = Antonio({
  subsets: ['latin'],
  weight: ['700'],
  display: 'swap',
});

export default function Footer() {
  const tNav = useTranslations('nav');

  return (
    <footer id="contact" className="relative w-full bg-[#051f1c] text-slate-300 font-sans border-t border-teal-800/40 overflow-hidden">
      {/* Ambient glow with pure Teal & White tones (no yellow) */}
      <div className="absolute -bottom-28 left-1/2 -translate-x-1/2 w-[800px] sm:w-[1100px] h-[380px] sm:h-[460px] bg-gradient-to-t from-teal-400/20 via-[#0B5C50]/45 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 pt-14 sm:pt-16 pb-0 flex flex-col justify-between">
        {/* Top Row: Left Navigation & Right Contact/Socials */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
          {/* Left Column: Vertical Navigation */}
          <nav className="flex flex-col space-y-3 sm:space-y-4 text-base sm:text-lg font-medium text-white/90">
            <Link href="/" className="hover:text-teal-300 transition-colors w-fit">
              {tNav('home')}
            </Link>
            <Link href="/services" className="hover:text-teal-300 transition-colors w-fit">
              {tNav('services')}
            </Link>
            <Link href="/about-us" className="hover:text-teal-300 transition-colors w-fit">
              {tNav('about')}
            </Link>
            <Link href="/gallery" className="hover:text-teal-300 transition-colors w-fit">
              {tNav('gallery')}
            </Link>
            <Link href="/#why-us" className="hover:text-teal-300 transition-colors w-fit">
              {tNav('whyUs')}
            </Link>
          </nav>

          {/* Right Column: Social Icons + Contact & Location (Right Aligned on desktop) */}
          <div className="flex flex-col md:items-end text-left md:text-right space-y-5">
            {/* Social Icons row: WhatsApp, Instagram, Facebook */}
            <div className="flex items-center gap-3 text-white">
              {/* WhatsApp */}
              <a
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white hover:bg-white/15 hover:text-teal-300 hover:border-teal-300/40 transition-all duration-200"
                aria-label="WhatsApp"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm0 18.15c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.69 8.23-8.23 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.07s.89 2.4 1.01 2.57c.12.17 1.75 2.67 4.24 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.17-.48-.29z" />
                </svg>
              </a>
              {/* Instagram */}
              <a
                href={SITE_CONFIG.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white hover:bg-white/15 hover:text-teal-300 hover:border-teal-300/40 transition-all duration-200"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              {/* Facebook */}
              <a
                href={SITE_CONFIG.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white hover:bg-white/15 hover:text-teal-300 hover:border-teal-300/40 transition-all duration-200"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                </svg>
              </a>
            </div>

            {/* Contact Texts */}
            <div className="space-y-1.5 text-sm sm:text-base text-white/90">
              <p>
                <span className="text-white/60">E-mail: </span>
                <a href={SITE_CONFIG.emailMailto} className="hover:text-teal-300 transition-colors">
                  {SITE_CONFIG.email}
                </a>
              </p>
              <p>
                <span className="text-white/60">Phone / WA: </span>
                <a
                  href={SITE_CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-teal-300 transition-colors"
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

        {/* Bottom Big Watermark Wordmark: "BALI ELECTRICAL" (Menempel di bawah footer tanpa terpotong) */}
        <div className="pt-12 sm:pt-16 pb-6 sm:pb-8 select-none pointer-events-none w-full">
          <div
            className={`${footerDisplayFont.className} w-full flex justify-between items-baseline font-bold uppercase leading-[0.95] text-[12.5vw] sm:text-[13vw] lg:text-[13.5vw] xl:text-[192px] scale-y-[1.25] sm:scale-y-[1.35] origin-bottom`}
          >
            {"BALI ELECTRICAL".split("").map((char, idx) => (
              <span
                key={idx}
                className="inline-block py-2 text-transparent bg-clip-text bg-gradient-to-b from-white/50 via-white/25 to-teal-400/5 blur-[0.5px] sm:blur-[1px] opacity-65"
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
