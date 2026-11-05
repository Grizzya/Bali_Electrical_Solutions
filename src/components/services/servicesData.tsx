// src/components/services/servicesData.tsx
// Tokens, icons, content dictionaries, and visuals for Services page

import React from 'react';
import Image from 'next/image';

/* ------------------------------------------------------------------ */
/* Tokens                                                             */
/* ------------------------------------------------------------------ */
export const C = {
  teal: '#0B5C50',
  tealDark: '#073D35',
  tealMid: '#0F766E',
  gold: '#F2C21B',
  mist: '#DCE7E8',
  paper: '#F4F8F8',
  ink: '#073D35',
};

/* ------------------------------------------------------------------ */
/* Icons (inline SVG)                                                 */
/* ------------------------------------------------------------------ */
export const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

export const Icons = {
  hvac: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 32 32" {...p}>
      <rect x="3" y="7" width="26" height="10" rx="2" {...stroke} />
      <path d="M7 12h12M23 12h2" {...stroke} />
      <path d="M8 21c0 3 2 3 2 6M16 21c0 3 2 3 2 6M24 21c0 3 2 3 2 6" {...stroke} />
    </svg>
  ),
  ducting: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 32 32" {...p}>
      <path d="M3 10h14a4 4 0 0 1 4 4v8" {...stroke} />
      <path d="M3 18h10a0 0 0 0 1 0 0v4a4 4 0 0 0 4 4h10" {...stroke} />
      <path d="M25 22l3 4-3 0" {...stroke} />
    </svg>
  ),
  fresh: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 32 32" {...p}>
      <path d="M6 24c0-9 6-15 20-16 0 11-6 17-16 17" {...stroke} />
      <path d="M6 26c4-7 8-10 13-12" {...stroke} />
    </svg>
  ),
  vent: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 32 32" {...p}>
      <circle cx="16" cy="16" r="3" {...stroke} />
      <path d="M16 13c0-5 2-8 5-8 2 0 3 2 2 4-1 2-4 3-7 4z" {...stroke} />
      <path d="M19 16c5 0 8 2 8 5 0 2-2 3-4 2-2-1-3-4-4-7z" {...stroke} />
      <path d="M16 19c0 5-2 8-5 8-2 0-3-2-2-4 1-2 4-3 7-4z" {...stroke} />
      <path d="M13 16c-5 0-8-2-8-5 0-2 2-3 4-2 2 1 3 4 4 7z" {...stroke} />
    </svg>
  ),
  acoustic: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 32 32" {...p}>
      <path d="M4 13v6h5l7 5V8l-7 5H4z" {...stroke} />
      <path d="M21 12c1.5 1.2 1.5 6.8 0 8M25 9c3 3 3 11 0 14" {...stroke} />
    </svg>
  ),
  mep: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 32 32" {...p}>
      <path d="M18 3L7 18h8l-2 11 12-16h-8l1-10z" {...stroke} />
    </svg>
  ),
};

export const Arrow = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 20 20" width="18" height="18" {...p}>
    <path d="M4 10h11M11 5l5 5-5 5" {...stroke} />
  </svg>
);

export function Bolt({ className = "", style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 24 24" className={className} style={style} aria-hidden="true">
      <path d="M13.5 2L5 13.5h6L10 22l9-12h-6l.5-8z" fill="currentColor" />
    </svg>
  );
}

export function CircuitBackdrop() {
  return (
    <svg
      viewBox="0 0 600 520"
      className="absolute inset-0 h-full w-full"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <g fill="none" stroke={C.gold} strokeWidth="1.2" opacity=".35">
        <path d="M0 90h180l40 40h160l40-40h180" />
        <path d="M0 210h120l30 30h140l30-30h280" />
        <path d="M0 330h240l40 40h120l40-40h160" />
        <path d="M0 450h90l30-30h200l30 30h250" />
        <path d="M220 130v80M380 130v80M290 240v90M360 370v50" />
      </g>
      <g fill={C.gold}>
        <circle cx="220" cy="130" r="4" />
        <circle cx="380" cy="130" r="4" />
        <circle cx="290" cy="240" r="4" />
        <circle cx="360" cy="370" r="4" />
        <circle cx="120" cy="420" r="4" />
      </g>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Content types                                                      */
/* ------------------------------------------------------------------ */
export interface ServiceItemContent {
  key: keyof typeof Icons;
  name: string;
  short: string;
  points: string[];
}

export interface LocaleContent {
  hero: {
    title: string;
    body: string;
  };
  learn: string;
  services: ServiceItemContent[];
  cta: {
    title: string;
    body: string;
    button: string;
  };
}

export const CONTENT: Record<string, LocaleContent> = {
  en: {
    hero: {
      title: "Our Services",
      body: "Comprehensive HVAC, ducting, ventilation, soundproofing, and MEP solutions engineered for villas, hotels, and commercial buildings across Bali.",
    },
    learn: "Ask about this service",
    services: [
      {
        key: "hvac",
        name: "HVAC",
        short: "Air conditioning for villas, hotels and offices.",
        points: [
          "Load calculation and equipment sizing",
          "Split, VRF and chilled-water systems",
          "Commissioning and service contracts",
        ],
      },
      {
        key: "ducting",
        name: "Ducting",
        short: "Custom duct runs, sealed and insulated.",
        points: [
          "Fabrication and on-site installation",
          "Insulation against sweating in humid air",
          "Air balancing after install",
        ],
      },
      {
        key: "fresh",
        name: "Fresh Air",
        short: "Filtered outside air for closed rooms.",
        points: [
          "Fresh air units and heat recovery",
          "Filtration for dust and humidity",
          "Right-sized to occupancy",
        ],
      },
      {
        key: "vent",
        name: "Ventilation",
        short: "Extraction for kitchens, baths and plant rooms.",
        points: [
          "Exhaust fans and inline systems",
          "Kitchen hood extraction",
          "Smoke and odor control",
        ],
      },
      {
        key: "acoustic",
        name: "Acoustic & Soundproofing",
        short: "Quieter rooms, studios and equipment areas.",
        points: [
          "Wall, ceiling and floor treatment",
          "Noise control for plant and generators",
          "Studio and entertainment rooms",
        ],
      },
      {
        key: "mep",
        name: "MEP Solutions",
        short: "Mechanical, electrical and plumbing under one plan.",
        points: [
          "Design coordination and drawings",
          "Power distribution and panels",
          "Single point of contact on site",
        ],
      },
    ],
    cta: {
      title: "Tell us about your building",
      body: "Share the location and what you need. We reply with next steps within one working day.",
      button: "Contact us via WhatsApp",
    },
  },
  id: {
    hero: {
      title: "Layanan Kami",
      body: "Layanan terpadu sistem HVAC, ducting, ventilasi, peredam suara, dan MEP yang dirancang khusus untuk vila, hotel, serta bangunan komersial di Bali.",
    },
    learn: "Tanya layanan ini",
    services: [
      {
        key: "hvac",
        name: "HVAC",
        short: "Pendingin udara untuk vila, hotel dan kantor.",
        points: [
          "Perhitungan beban dan pemilihan kapasitas",
          "Sistem split, VRF dan chilled water",
          "Commissioning dan kontrak servis",
        ],
      },
      {
        key: "ducting",
        name: "Ducting",
        short: "Saluran udara custom, rapat dan berinsulasi.",
        points: [
          "Fabrikasi dan pemasangan di lokasi",
          "Insulasi agar tidak berembun di udara lembap",
          "Balancing udara setelah pemasangan",
        ],
      },
      {
        key: "fresh",
        name: "Fresh Air",
        short: "Udara luar tersaring untuk ruangan tertutup.",
        points: [
          "Unit fresh air dan heat recovery",
          "Filtrasi debu dan kelembapan",
          "Ukuran sesuai jumlah penghuni",
        ],
      },
      {
        key: "vent",
        name: "Ventilasi",
        short: "Pembuangan udara dapur, kamar mandi dan ruang mesin.",
        points: [
          "Exhaust fan dan sistem inline",
          "Pembuangan hood dapur",
          "Pengendalian asap dan bau",
        ],
      },
      {
        key: "acoustic",
        name: "Akustik & Peredam Suara",
        short: "Ruangan, studio dan area mesin lebih tenang.",
        points: [
          "Perlakuan dinding, plafon dan lantai",
          "Kontrol bising mesin dan genset",
          "Studio dan ruang hiburan",
        ],
      },
      {
        key: "mep",
        name: "Solusi MEP",
        short: "Mekanikal, elektrikal dan plumbing dalam satu rencana.",
        points: [
          "Koordinasi desain dan gambar kerja",
          "Distribusi listrik dan panel",
          "Satu kontak utama di lokasi",
        ],
      },
    ],
    cta: {
      title: "Ceritakan tentang bangunan Anda",
      body: "Kirim lokasi dan kebutuhan Anda. Kami balas dengan langkah berikutnya dalam satu hari kerja.",
      button: "Hubungi kami via WhatsApp",
    },
  },
};

/* ------------------------------------------------------------------ */
/* Service details shown in the selected-service panel                 */
/* ------------------------------------------------------------------ */
export interface ServiceDetail {
  desc: string;
  best: string[];
}

export const DETAIL: Record<string, { bestFor: string; items: Record<keyof typeof Icons, ServiceDetail> }> = {
  en: {
    bestFor: "Best for",
    items: {
      hvac: {
        desc: "Cooling sized to the building instead of guessed. We calculate the heat load, choose equipment that copes with Bali's humidity, and install it so it stays quiet and efficient.",
        best: ["Villas", "Hotels", "Offices", "Restaurants"],
      },
      ducting: {
        desc: "Ducts built to the layout of your ceiling void, sealed against leaks and insulated so they do not sweat in humid air.",
        best: ["New builds", "Renovations", "Retrofits"],
      },
      fresh: {
        desc: "Brings filtered outside air in and takes stale air out, so closed rooms do not feel stuffy and humidity stays under control.",
        best: ["Bedrooms", "Spas", "Meeting rooms", "Clinics"],
      },
      vent: {
        desc: "Removes heat, smoke, moisture and odor at the source. We size the fans and routes so extraction works without the noise.",
        best: ["Kitchens", "Bathrooms", "Laundries", "Plant rooms"],
      },
      acoustic: {
        desc: "Cuts noise between rooms and from machines, using the right mix of mass, absorption and isolation for each space.",
        best: ["Studios", "Home cinemas", "Generator rooms", "Roadside villas"],
      },
      mep: {
        desc: "Mechanical, electrical and plumbing planned together, so trades do not clash on site and the building is handed over on schedule.",
        best: ["Hotels", "Villa developments", "Commercial fit-outs"],
      },
    },
  },
  id: {
    bestFor: "Cocok untuk",
    items: {
      hvac: {
        desc: "Pendinginan yang dihitung sesuai bangunan, bukan perkiraan. Kami menghitung beban panas, memilih peralatan yang tahan kelembapan Bali, dan memasangnya agar tetap senyap dan efisien.",
        best: ["Vila", "Hotel", "Kantor", "Restoran"],
      },
      ducting: {
        desc: "Saluran udara dibuat mengikuti tata letak plafon Anda, rapat dari kebocoran dan berinsulasi agar tidak berembun di udara lembap.",
        best: ["Bangunan baru", "Renovasi", "Retrofit"],
      },
      fresh: {
        desc: "Memasukkan udara luar yang tersaring dan membuang udara pengap, sehingga ruangan tertutup tidak terasa sumpek dan kelembapan terkendali.",
        best: ["Kamar tidur", "Spa", "Ruang rapat", "Klinik"],
      },
      vent: {
        desc: "Membuang panas, asap, uap dan bau langsung dari sumbernya. Kami menghitung kipas dan jalur udara agar pembuangan bekerja tanpa bising.",
        best: ["Dapur", "Kamar mandi", "Laundry", "Ruang mesin"],
      },
      acoustic: {
        desc: "Mengurangi bising antarruangan dan dari mesin, dengan kombinasi massa, penyerap dan isolasi yang tepat untuk tiap ruang.",
        best: ["Studio", "Home cinema", "Ruang genset", "Vila tepi jalan"],
      },
      mep: {
        desc: "Mekanikal, elektrikal dan plumbing direncanakan bersama, sehingga pekerjaan tidak bertabrakan di lokasi dan bangunan diserahkan tepat waktu.",
        best: ["Hotel", "Pengembangan vila", "Fit-out komersial"],
      },
    },
  },
};

/* ------------------------------------------------------------------ */
/* Service photos                                                     */
/* Put real photos in /public/images/services/ and set the paths here */
/* While a value is null, an illustrated vector panel is shown.       */
/* ------------------------------------------------------------------ */
export const SERVICE_IMAGES: Record<keyof typeof Icons, string | null> = {
  hvac: null,
  ducting: null,
  fresh: null,
  vent: null,
  acoustic: null,
  mep: null,
};

export function ServiceVisual({ k, index, alt }: { k: keyof typeof Icons; index: number; alt: string }) {
  const Icon = Icons[k];
  const image = SERVICE_IMAGES[k];
  const tones = [
    [C.teal, C.gold],
    [C.tealMid, C.gold],
    [C.mist, C.teal],
  ];
  const [bg, fg] = tones[index % tones.length];

  return (
    <div
      className="relative overflow-hidden rounded-3xl"
      style={{ aspectRatio: "4 / 3", background: bg }}
    >
      {image ? (
        <div className="relative h-full w-full">
          <Image
            src={image}
            alt={alt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      ) : (
        <>
          <svg
            viewBox="0 0 400 300"
            className="absolute inset-0 h-full w-full"
            preserveAspectRatio="xMidYMid slice"
            aria-hidden="true"
          >
            <g fill="none" stroke={fg} strokeWidth="1.4" opacity=".28">
              <path d="M0 220h120l30-30h130l30 30h90" />
              <path d="M0 150h80l30 30h110l30-30h150" />
              <path d="M0 80h200l30 30h170" />
              <path d="M0 40h60l20 20h120" />
            </g>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span
              className="flex h-32 w-32 items-center justify-center rounded-full"
              style={{ border: `2px solid ${fg}`, color: fg }}
            >
              <Icon className="h-14 w-14" />
            </span>
          </div>
        </>
      )}
    </div>
  );
}
