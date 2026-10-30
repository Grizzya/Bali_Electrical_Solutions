# AGENTS.md — Bali Electrical Solutions

Panduan untuk AI coding agent (Claude Code, Cursor, Codex, dll.) yang bekerja di repo ini. Baca seluruh file sebelum mengubah kode.

## 1. Ringkasan Project

**Bali Electrical Solutions** adalah website company profile untuk jasa HVAC, Ducting, Fresh Air, Ventilation, Acoustic & Soundproofing, dan MEP Solutions di Bali.

- Tagline (sementara): *Air, Sound & MEP Engineering in Bali*
- Bahasa: **Indonesia (`id`, default)** dan **English (`en`)**
- Layout referensi: polesinbali.com (dengan penyesuaian)
- Tahap saat ini: **homepage** dulu, lalu halaman Services, About Us, Gallery, Contact

## 2. Tech Stack

- **Next.js** (App Router) + **React** + **TypeScript**
- **Tailwind CSS**
- **next-intl** untuk multibahasa
- Folder `src/`, alias import `@/*` → `src/*`
- Sumber data layanan: file TypeScript di `src/content/` (bisa dipindah ke database/CMS nanti, lihat bagian 6)

## 3. Perintah

```bash
npm install
npm run dev       # development
npm run build     # production build (wajib lolos sebelum selesai)
npm run lint
```

Jalankan `npm run build` dan `npm run lint` sebelum menyatakan tugas selesai.

## 4. Struktur Folder

```
messages/{id,en}.json        # HANYA teks UI (menu, tombol, judul section, footer)
public/logo.svg
public/images/{hero,services/<slug>}/
src/
├── i18n/{routing,request,navigation}.ts
├── middleware.ts
├── app/
│   ├── sitemap.ts, robots.ts
│   └── [locale]/
│       ├── layout.tsx, page.tsx, not-found.tsx, globals.css
│       ├── services/page.tsx
│       ├── services/[slug]/page.tsx
│       ├── about-us/page.tsx, gallery/page.tsx, contact/page.tsx
├── content/services/        # satu file per layanan, dua bahasa di dalamnya
│   ├── index.ts             # export semua + urutan tampil
│   └── hvac.ts, ducting.ts, fresh-air.ts, ventilation.ts,
│       acoustic-soundproofing.ts, mep-solutions.ts
├── lib/{services,seo,constants}.ts
├── components/{layout,home,services,ui}/
└── types/service.ts
```

Folder `components/ui/` boleh kosong sampai pola yang sama dipakai berulang.

## 5. Aturan i18n

- Semua teks yang tampil di layar **tidak boleh di-hardcode** di komponen.
  - Teks UI → `messages/id.json` dan `messages/en.json` via `useTranslations` / `getTranslations`.
  - Konten layanan → `src/content/services/<slug>.ts` (field `id` dan `en`).
- Setiap key baru **wajib ada di kedua bahasa** (`id` dan `en`).
- Gunakan `Link`, `useRouter`, `usePathname` dari `@/i18n/navigation`, **bukan** dari `next/link` atau `next/navigation`, supaya prefix locale benar.
- Semua halaman wajib punya `generateMetadata` dengan `alternates.languages` (hreflang) dan canonical yang benar per locale. Gunakan helper di `lib/seo.ts`.
- Halaman dinamis memakai `generateStaticParams` untuk semua kombinasi locale × slug.

## 6. Aturan Data Layanan

- Komponen **tidak boleh** mengimpor `src/content/*` langsung. Selalu lewat `src/lib/services.ts` (`getServices(locale)`, `getServiceBySlug(slug, locale)`).
- Dengan begitu sumber data bisa diganti (database/CMS) tanpa mengubah komponen.
- Menambah layanan: buat file baru di `content/services/`, daftarkan di `index.ts`, tambah gambar di `public/images/services/<slug>/`. Jangan membuat halaman baru; template `[slug]` sudah menangani.

## 7. Brand & Desain

**Palet warna** (definisikan sebagai token di Tailwind, jangan hardcode hex berulang di komponen):

| Token | Hex | Pakai untuk |
|---|---|---|
| `teal` | `#0B5C50` | header/section gelap, latar CTA |
| `brand` | `#0F766E` | warna logo, teks brand di latar putih |
| `gold` | `#F2C21B` | aksen, tombol, teks di atas teal |
| `mist` | `#9FBFBC` | latar section terang, border |
| `ink` | `#073D35` | teks utama |

- Logo: `public/logo.svg` (lingkaran teal + petir kuning `#FACC15`). Logo teal **tidak boleh** diletakkan langsung di latar teal; gunakan latar putih atau badge lingkaran putih.
- Pastikan kontras teks cukup. Teks kecil emas hanya di atas `teal` gelap (`#0B5C50`) atau lebih gelap.
- Font: Manrope.

**Struktur halaman homepage:** Header → Hero → strip layanan → About → Services (daftar bernomor 01–06 dengan header "NO | ITEM") → Why Us → CTA WhatsApp → Footer.

## 8. Konvensi Kode

- **Responsive:** pisahkan mobile dan desktop dengan `md:hidden` dan `hidden md:block` (atau `hidden md:flex`). Jangan memakai satu elemen dengan banyak override breakpoint kalau tampilannya berbeda jauh.
- **Jangan mengubah styling desktop secara tidak sengaja.** Saat menyesuaikan mobile, ubah hanya blok `md:hidden` atau class tanpa prefix yang terbatas pada mobile, lalu periksa tampilan desktop tidak berubah.
- **Berikan kode komponen lengkap**, bukan potongan parsial, saat membuat atau mengubah komponen.
- Komponen default server component. Tambahkan `"use client"` hanya jika butuh state/event (mis. menu mobile).
- Gambar memakai `next/image` dengan `alt` yang bermakna dan `sizes` yang tepat.
- TypeScript strict; hindari `any`.
- Nama file komponen `PascalCase.tsx`; file lib/content `kebab-case.ts`.
- Jangan menambah dependency baru tanpa alasan jelas.

## 9. Kontak & Konstanta

Nomor WhatsApp, email, alamat, dan URL situs disimpan di `src/lib/constants.ts`. Jangan hardcode di komponen. Nilai saat ini masih placeholder dan harus diganti sebelum rilis.

## 10. Definition of Done

- [ ] Teks tersedia di `id` dan `en`
- [ ] Tampilan benar di mobile (≤ 767px) dan desktop (≥ 768px), desktop tidak berubah tanpa disengaja
- [ ] `generateMetadata`, canonical, dan hreflang terisi
- [ ] `npm run lint` dan `npm run build` lolos
- [ ] Tidak ada teks/hex warna yang di-hardcode di komponen
