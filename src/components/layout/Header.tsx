'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function Header() {
  const t = useTranslations('nav');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#hero', label: t('home') },
    { href: '#services', label: t('services') },
    { href: '#about', label: t('about') },
    { href: '#gallery', label: t('gallery') },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">

          <div className="flex items-center gap-3 select-none">
            <Image
              src="/logo.svg"
              alt="Bali Electrical Solutions Logo"
              width={48}
              height={48}
              priority
              className="flex-shrink-0"
            />
            <div className="flex flex-col leading-tight select-none">
              <span className="text-[17px] font-bold tracking-tight text-[#0c5953]">
                Bali Electrical Solutions
              </span>
            </div>
          </div>

          {/* Desktop: Nav + Tombol */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            <nav className="flex items-center gap-8 lg:gap-10">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-base font-semibold text-[#0c5953] hover:text-[#063b36] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-[#F2B705] hover:bg-[#E5AC00] text-[#0c5953] font-bold text-base px-6 py-2.5 rounded-xl transition-all duration-200 active:scale-95"
            >
              {t('contact')}
            </a>
          </div>

          {/* Mobile: Hamburger */}
          <div className="flex md:hidden items-center gap-3">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#0c5953] hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-100 space-y-1 bg-white">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-base font-semibold text-[#0c5953] hover:bg-slate-50 rounded-md"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 px-3">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center bg-[#F2B705] hover:bg-[#E5AC00] text-[#0c5953] font-bold text-base py-3 rounded-xl"
              >
                {t('contact')}
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
