export type ServiceKey =
  | 'hvac'
  | 'ducting'
  | 'freshAir'
  | 'ventilation'
  | 'acoustic'
  | 'mep';

export interface ServiceItem {
  slug: string;
  key: ServiceKey;
  number: string;
  title: string;
  summary: string;
  highlights: string[];
}

export const servicesData: {
  slug: string;
  key: ServiceKey;
  number: string;
  title: { id: string; en: string };
  summary: { id: string; en: string };
  highlights: { id: string[]; en: string[] };
}[] = [
  {
    slug: 'hvac',
    key: 'hvac',
    number: '01',
    title: {
      id: 'HVAC',
      en: 'HVAC'
    },
    summary: {
      id: 'Perancangan, instalasi AC mainroom, VRV/VRF, chiller, dan perawatan pendingin udara hemat energi untuk villa, resort, dan ruang komersial.',
      en: 'Design, mainroom AC, VRV/VRF installation, chillers, and energy-efficient climate control maintenance for villas, resorts, and commercial spaces.'
    },
    highlights: {
      id: ['VRV / VRF Multi-Zone', 'Chiller Plants', 'Smart Climate Control'],
      en: ['VRV / VRF Multi-Zone', 'Chiller Plants', 'Smart Climate Control']
    }
  },
  {
    slug: 'ducting',
    key: 'ducting',
    number: '02',
    title: {
      id: 'Ducting',
      en: 'Ducting'
    },
    summary: {
      id: 'Fabrikasi dan instalasi PIR pre-insulated ducting serta BJLS galvanis presisi tinggi dengan isolasi termal anti-kondensasi tahan iklim pesisir.',
      en: 'High-precision PIR pre-insulated and galvanized steel ductwork fabrication and installation with tropical condensation-resistant insulation.'
    },
    highlights: {
      id: ['PIR Ducting Ringan', 'BJLS Galvanis', 'Anti-Kondensasi Pesisir'],
      en: ['PIR Pre-Insulated', 'Galvanized Sheet', 'Anti-Condensation']
    }
  },
  {
    slug: 'fresh-air',
    key: 'freshAir',
    number: '03',
    title: {
      id: 'Fresh Air',
      en: 'Fresh Air'
    },
    summary: {
      id: 'Pasokan udara segar mainroom dan ruangan dengan filtrasi bertingkat serta dehumidifikasi untuk sirkulasi oksigen optimal dan pencegahan jamur.',
      en: 'Multi-stage filtered fresh air intake with dehumidification to sustain oxygen levels, equalize pressure, and eliminate mold.'
    },
    highlights: {
      id: ['HRV / ERV Air Exchange', 'HEPA Filtration', 'Dehumidifikasi Tropis'],
      en: ['HRV / ERV Air Exchange', 'HEPA Filtration', 'Tropical Dehumidification']
    }
  },
  {
    slug: 'ventilation',
    key: 'ventilation',
    number: '04',
    title: {
      id: 'Ventilation',
      en: 'Ventilation'
    },
    summary: {
      id: 'Sistem exhaust fan mainroom, sirkulasi udara toilet, dapur komersial (kitchen hood), ruang genset, dan basement parkir berkekuatan tinggi.',
      en: 'High-performance mainroom exhaust fans, toilet air circulation, commercial kitchen hoods, generator room, and basement ventilation.'
    },
    highlights: {
      id: ['Kitchen Hood Exhaust', 'Ventilasi Genset', 'Basement Extraction'],
      en: ['Commercial Kitchen Hood', 'Genset Ventilation', 'Basement Extraction']
    }
  },
  {
    slug: 'acoustic-soundproofing',
    key: 'acoustic',
    number: '05',
    title: {
      id: 'Acoustic & Soundproofing',
      en: 'Acoustic & Soundproofing'
    },
    summary: {
      id: 'Peredam suara akustik (soundproofing) dan isolasi getaran untuk night club, studio, ruang genset, chiller, dan sistem tata udara villa.',
      en: 'Engineered acoustic soundproofing, noise attenuation silencers, and vibration isolators for nightclubs, chiller plants, and generators.'
    },
    highlights: {
      id: ['Duct Sound Attenuators', 'Vibration Isolators', 'Ruang Mesin Senyap'],
      en: ['Duct Attenuators', 'Vibration Isolators', 'Machine Room Silencers']
    }
  },
  {
    slug: 'mep-solutions',
    key: 'mep',
    number: '06',
    title: {
      id: 'MEP Solutions',
      en: 'MEP Solutions'
    },
    summary: {
      id: 'Solusi Mekanikal, Elektrikal & Plumbing: panel listrik LVMDP, distribusi daya, grounding penangkal petir, serta pemipaan air berstandar SNI.',
      en: 'Mechanical, Electrical & Plumbing solutions: LVMDP distribution panels, grounding, lightning protection, and comprehensive water plumbing.'
    },
    highlights: {
      id: ['Panel Distribusi LVMDP', 'Grounding & Petir', 'Sistem Plumbing SNI'],
      en: ['LVMDP Power Boards', 'Lightning Protection', 'Water Plumbing SNI']
    }
  }
];

export async function getServices(locale: string = 'id'): Promise<ServiceItem[]> {
  const isEn = locale === 'en';
  return servicesData.map((item) => ({
    slug: item.slug,
    key: item.key,
    number: item.number,
    title: isEn ? item.title.en : item.title.id,
    summary: isEn ? item.summary.en : item.summary.id,
    highlights: isEn ? item.highlights.en : item.highlights.id
  }));
}

export async function getServiceBySlug(slug: string, locale: string = 'id'): Promise<ServiceItem | undefined> {
  const services = await getServices(locale);
  return services.find((s) => s.slug === slug);
}
