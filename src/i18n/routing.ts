import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  // Daftar semua bahasa yang didukung
  locales: ['en', 'id'],

  // Default bahasa adalah English (en)
  defaultLocale: 'en',

  // 'as-needed' membuat defaultLocale (en) tidak memiliki prefix di URL
  // Contoh: English = "/" atau "/about"
  //         Indonesia = "/id" atau "/id/about"
  localePrefix: 'as-needed'
});

export type Locale = (typeof routing.locales)[number];
