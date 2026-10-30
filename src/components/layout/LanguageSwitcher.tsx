'use client';

import React, { useTransition } from 'react';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';

interface LanguageSwitcherProps {
  className?: string;
  light?: boolean;
}

export default function LanguageSwitcher({
  className = '',
  light = false
}: LanguageSwitcherProps) {
  const currentLocale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const handleSwitch = (nextLocale: 'id' | 'en') => {
    if (nextLocale === currentLocale || isPending) return;
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  };

  return (
    <div
      className={`inline-flex items-center rounded-full p-1 border transition-colors ${
        light
          ? 'bg-ink-900/60 border-white/20 text-white'
          : 'bg-mist-card border-mist-border text-ink-800'
      } ${className}`}
      role="group"
      aria-label="Language selector"
    >
      <button
        type="button"
        onClick={() => handleSwitch('id')}
        disabled={isPending}
        className={`px-2.5 py-1 text-xs font-bold rounded-full transition-all duration-200 cursor-pointer ${
          currentLocale === 'id'
            ? 'bg-teal-600 text-white shadow-sm'
            : light
            ? 'text-slate-300 hover:text-white'
            : 'text-ink-600 hover:text-teal-700'
        }`}
        aria-pressed={currentLocale === 'id'}
      >
        ID
      </button>

      <span
        className={`text-xs px-0.5 select-none ${
          light ? 'text-white/30' : 'text-slate-300'
        }`}
      >
        |
      </span>

      <button
        type="button"
        onClick={() => handleSwitch('en')}
        disabled={isPending}
        className={`px-2.5 py-1 text-xs font-bold rounded-full transition-all duration-200 cursor-pointer ${
          currentLocale === 'en'
            ? 'bg-teal-600 text-white shadow-sm'
            : light
            ? 'text-slate-300 hover:text-white'
            : 'text-ink-600 hover:text-teal-700'
        }`}
        aria-pressed={currentLocale === 'en'}
      >
        EN
      </button>
    </div>
  );
}

