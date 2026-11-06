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
      title: "Our Engineering Services",
      body: "Comprehensive HVAC, custom ducting, fresh air intake, exhaust ventilation, acoustic soundproofing, and MEP solutions engineered for villas, resorts, nightclubs, restaurants, and commercial buildings across Bali.",
    },
    learn: "Ask about this service",
    services: [
      {
        key: "hvac",
        name: "HVAC",
        short: "High-capacity air conditioning for mainrooms, villas, hotels, and commercial spaces.",
        points: [
          "Heat load calculation and BTU/CFM equipment sizing",
          "Mainroom commercial AC, VRV/VRF, split duct & chilled-water systems",
          "Full testing, commissioning, and preventive maintenance",
        ],
      },
      {
        key: "ducting",
        name: "Ducting",
        short: "Custom PIR & galvanized BJLS duct runs, airtight and insulated against condensation.",
        points: [
          "Precision fabrication and on-site ducting installation",
          "Closed-cell thermal insulation against sweating in Bali's humid air",
          "Static pressure & airflow balancing across every diffuser",
        ],
      },
      {
        key: "fresh",
        name: "Fresh Air",
        short: "Filtered outdoor air supply & circulation for enclosed venues, clubs, and suites.",
        points: [
          "Mainroom fresh air intake units & heat recovery (HRV/ERV)",
          "Multi-stage filtration for dust, smoke, odors, and humidity",
          "Positive pressure & oxygen circulation sized to peak crowd occupancy",
        ],
      },
      {
        key: "vent",
        name: "Ventilation",
        short: "Heavy-duty extraction for mainrooms, commercial kitchens, restrooms, and plant rooms.",
        points: [
          "Mainroom exhaust fans, toilet air circulation & inline blowers",
          "Commercial kitchen hood extraction & grease filtration",
          "Rapid heat, smoke, and odor removal with low-noise operation",
        ],
      },
      {
        key: "acoustic",
        name: "Acoustic & Soundproofing",
        short: "High-STC noise isolation for nightclubs, studios, villas, and generator rooms.",
        points: [
          "Acoustic wall, ceiling, and floor soundproofing treatments",
          "In-line duct silencers & vibration isolators for chillers/gensets",
          "Nightclub, beach club, recording studio, and home cinema acoustics",
        ],
      },
      {
        key: "mep",
        name: "MEP Solutions",
        short: "Integrated mechanical, electrical, and plumbing engineering under one contract.",
        points: [
          "LVMDP main electrical panels, 3-phase power distribution & grounding",
          "Clean water booster pumps, hot water & drainage plumbing (SNI/PUIL)",
          "Single point of engineering accountability from blueprint to handover",
        ],
      },
    ],
    cta: {
      title: "Tell us about your building or venue",
      body: "Share your project location in Bali and technical requirements. Our engineers reply with site survey scheduling and quotation details within one working day.",
      button: "Contact us via WhatsApp",
    },
  },
  id: {
    hero: {
      title: "Layanan Rekayasa Kami",
      body: "Solusi terpadu sistem HVAC, fabrikasi ducting, sirkulasi fresh air, ventilasi exhaust, peredam suara akustik, dan MEP yang dirancang khusus untuk vila, resort, night club, restoran, serta bangunan komersial di Bali.",
    },
    learn: "Tanya layanan ini",
    services: [
      {
        key: "hvac",
        name: "HVAC",
        short: "Sistem pendingin udara kapasitas besar untuk mainroom, vila, hotel, dan ruang komersial.",
        points: [
          "Kalkulasi beban panas (heat load) dan pemilihan kapasitas BTU/PK",
          "Instalasi AC mainroom komersial, VRV/VRF, split duct & chiller",
          "Testing, commissioning, dan perawatan berkala",
        ],
      },
      {
        key: "ducting",
        name: "Ducting",
        short: "Fabrikasi dan instalasi saluran udara PIR & BJLS custom, rapat, dan anti-kondensasi.",
        points: [
          "Fabrikasi presisi dan pemasangan sistem ducting di lokasi proyek",
          "Insulasi termal tertutup agar tidak berembun di kelembapan tinggi Bali",
          "Balancing aliran udara (CFM) merata di setiap titik grille & diffuser",
        ],
      },
      {
        key: "fresh",
        name: "Fresh Air",
        short: "Pasokan udara segar tersaring untuk mainroom tertutup, night club, dan kamar vila.",
        points: [
          "Instalasi Fresh Air Mainroom, HRV/ERV, dan sirkulasi oksigen",
          "Filtrasi debu, asap, dan pengendalian kelembapan (dehumidifikasi)",
          "Kapasitas dihitung sesuai kepadatan penghuni / pengunjung puncak",
        ],
      },
      {
        key: "vent",
        name: "Ventilation",
        short: "Pembuangan udara pengap, asap, dan panas untuk mainroom, dapur, toilet, dan ruang mesin.",
        points: [
          "Instalasi Exhaust Fan Mainroom, Air Circulation Toilet & sistem inline",
          "Instalasi Kitchen Hood Exhaust dapur restoran & hotel",
          "Pengendalian asap, bau, dan suhu panas secara cepat & senyap",
        ],
      },
      {
        key: "acoustic",
        name: "Acoustic & Soundproofing",
        short: "Peredam kebisingan desibel tinggi untuk night club, studio, vila, dan ruang genset.",
        points: [
          "Soundproofing dinding, plafon, dan partisi akustik ruang hiburan",
          "Duct silencer (peredam bising saluran udara) & peredam getaran mesin",
          "Pengendalian kebisingan night club, studio musik, dan ruang genset/chiller",
        ],
      },
      {
        key: "mep",
        name: "MEP Solutions",
        short: "Mekanikal, elektrikal, dan plumbing terintegrasi di bawah satu tim penanggung jawab.",
        points: [
          "Perakitan panel listrik LVMDP, distribusi daya 3-phase & grounding petir",
          "Instalasi pemipaan air bersih, air panas, pompa booster & drainase (SNI/PUIL)",
          "Koordinasi gambar kerja (shop drawing) hingga serah terima tepat waktu",
        ],
      },
    ],
    cta: {
      title: "Ceritakan kebutuhan bangunan atau proyek Anda",
      body: "Kirimkan lokasi proyek Anda di Bali beserta spesifikasi yang dibutuhkan. Tim kami siap menjadwalkan survei lokasi dan menyusun penawaran RAB terukur.",
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
        desc: "Cooling engineered to exact building thermal loads instead of guesswork. We size and install mainroom commercial AC, VRV/VRF, and concealed ducted systems that stay cold, quiet, and energy-efficient in Bali's coastal heat.",
        best: ["Villas", "Hotels & Resorts", "Nightclubs & Beach Clubs", "Restaurants & Offices"],
      },
      ducting: {
        desc: "Custom PIR and galvanized BJLS ductwork tailored to your ceiling void, sealed airtight against static pressure loss, and thermally insulated so ducts never sweat or drip in humid tropical air.",
        best: ["Commercial Venues", "Luxury Villas", "New Builds & Retrofits"],
      },
      fresh: {
        desc: "Supplies filtered outdoor fresh air and expels stale indoor air, keeping high-occupancy mainrooms, clubs, and enclosed villa bedrooms oxygen-rich, odor-free, and protected from mold.",
        best: ["Nightclubs & Lounges", "Master Suites", "Spas & Wellness", "Meeting Rooms"],
      },
      vent: {
        desc: "Extracts heat, smoke, moisture, and odors directly at the source. From mainroom exhaust fans and toilet air circulation to commercial kitchen hoods, we size fans and duct routes for powerful, quiet extraction.",
        best: ["Mainrooms & Clubs", "Commercial Kitchens", "Restrooms", "Generator & Plant Rooms"],
      },
      acoustic: {
        desc: "Contains high-decibel sound inside entertainment venues and isolates mechanical noise from chillers and generators using engineered acoustic mass, absorption, silencers, and vibration dampeners.",
        best: ["Nightclubs & Bars", "Recording Studios", "Generator Rooms", "Roadside Villas"],
      },
      mep: {
        desc: "Mechanical, electrical, and plumbing systems engineered under one coordinated plan, preventing on-site trade clashes and ensuring safe, SNI/PUIL-compliant handover on schedule.",
        best: ["Hotels & Resorts", "Villa Developments", "Commercial Fit-Outs"],
      },
    },
  },
  id: {
    bestFor: "Cocok untuk",
    items: {
      hvac: {
        desc: "Pendinginan yang dihitung presisi sesuai beban panas bangunan dan kapasitas ruangan. Kami memasang AC mainroom kapasitas besar, sistem VRV/VRF, dan split duct yang tetap dingin merata, senyap, serta hemat daya di iklim Bali.",
        best: ["Vila Mewah", "Hotel & Resort", "Night Club & Beach Club", "Restoran & Kantor"],
      },
      ducting: {
        desc: "Saluran udara PIR dan BJLS galvanis yang difabrikasi khusus mengikuti jalur plafon bangunan Anda, rapat terhadap kebocoran tekanan udara, serta berinsulasi anti-kondensasi agar tidak menetes di udara lembap.",
        best: ["Gedung Komersial", "Vila & Resort", "Bangunan Baru & Renovasi"],
      },
      fresh: {
        desc: "Memasukkan pasokan udara segar yang tersaring dari luar dan membuang udara pengap, sehingga mainroom berkapasitas padat, klub malam, maupun kamar vila tertutup tetap segar, kaya oksigen, dan bebas jamur.",
        best: ["Night Club & Lounge", "Kamar Vila", "Spa & Klinik", "Ruang Rapat"],
      },
      vent: {
        desc: "Membuang panas, asap, uap, dan bau langsung dari sumbernya. Mulai dari exhaust fan mainroom, sirkulasi udara toilet, hingga kitchen hood dapur restoran, kami merancang jalur kipas yang bertenaga dan minim bising.",
        best: ["Mainroom & Club", "Dapur Restoran", "Toilet Komersial", "Ruang Genset & Mesin"],
      },
      acoustic: {
        desc: "Meredam kebisingan desibel tinggi dari ruang hiburan maupun suara mesin genset/chiller menggunakan kombinasi insulasi akustik dinding-plafon, duct silencer, dan peredam getaran terukur.",
        best: ["Night Club & Bar", "Studio Musik", "Ruang Genset & Chiller", "Vila Tepi Jalan"],
      },
      mep: {
        desc: "Instalasi mekanikal, panel elektrikal, dan pemipaan plumbing yang direncanakan dalam satu koordinasi terpadu, mencegah benturan jalur instalasi di lapangan dan memastikan proyek selesai tepat waktu sesuai standar SNI.",
        best: ["Hotel & Resort", "Pengembangan Vila", "Fit-Out Komersial"],
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
