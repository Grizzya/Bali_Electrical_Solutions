export type ServiceKey =
  | 'hvac'
  | 'ducting'
  | 'fresh-air'
  | 'ventilation'
  | 'acoustic-soundproofing'
  | 'mep-solutions';

export interface ServiceItem {
  slug: string;
  key: ServiceKey;
  number: string;
  title: string;
  summary: string;
  image?: string;
}

export const servicesData: {
  slug: string;
  key: ServiceKey;
  number: string;
  title: { id: string; en: string };
  summary: { id: string; en: string };
}[] = [
  {
    slug: 'hvac',
    key: 'hvac',
    number: '01',
    title: {
      id: 'Sistem HVAC & Tata Udara',
      en: 'HVAC & Air Conditioning Systems'
    },
    summary: {
      id: 'Perancangan, instalasi VRV/VRF, chiller, dan perawatan pendingin udara hemat energi untuk villa, resort, dan gedung komersial.',
      en: 'Design, VRV/VRF installation, chillers, and energy-efficient climate control maintenance for villas, resorts, and commercial spaces.'
    }
  },
  {
    slug: 'ducting',
    key: 'ducting',
    number: '02',
    title: {
      id: 'Fabrikasi & Instalasi Ducting',
      en: 'Ducting Fabrication & Installation'
    },
    summary: {
      id: 'PIR pre-insulated ducting dan BJLS galvanis presisi tinggi dengan isolasi termal anti-kondensasi tahan iklim pesisir.',
      en: 'High-precision PIR pre-insulated and galvanized steel ductwork with tropical condensation-resistant thermal insulation.'
    }
  },
  {
    slug: 'fresh-air',
    key: 'fresh-air',
    number: '03',
    title: {
      id: 'Sirkulasi Fresh Air & Udara Bersih',
      en: 'Fresh Air & Clean Air Circulation'
    },
    summary: {
      id: 'Pasokan udara segar dengan filtrasi bertingkat dan dehumidifikasi untuk sirkulasi oksigen optimal serta pencegahan jamur.',
      en: 'Multi-stage filtered fresh air intake with dehumidification to sustain oxygen levels, equalize pressure, and eliminate mold.'
    }
  },
  {
    slug: 'ventilation',
    key: 'ventilation',
    number: '04',
    title: {
      id: 'Ventilasi Industri & Komersial',
      en: 'Industrial & Commercial Ventilation'
    },
    summary: {
      id: 'Sistem exhaust dapur komersial (kitchen hood), ruang genset, ruang mesin, dan basement parkir berkekuatan tinggi.',
      en: 'High-performance commercial kitchen hoods, generator room ventilation, and basement exhaust fan systems.'
    }
  },
  {
    slug: 'acoustic-soundproofing',
    key: 'acoustic-soundproofing',
    number: '05',
    title: {
      id: 'Peredam Suara & Akustik Ruang',
      en: 'Acoustic & Soundproofing Solutions'
    },
    summary: {
      id: 'Peredam kebisingan dan isolasi getaran untuk ruang genset, chiller, blower, dan sistem tata udara villa.',
      en: 'Engineered noise attenuation silencers, vibration isolators, and soundproofing for chiller plants and generators.'
    }
  },
  {
    slug: 'mep-solutions',
    key: 'mep-solutions',
    number: '06',
    title: {
      id: 'Solusi MEP (Mekanikal, Elektrikal & Plumbing)',
      en: 'MEP (Mechanical, Electrical & Plumbing) Solutions'
    },
    summary: {
      id: 'Panel listrik LVMDP, distribusi daya, grounding penangkal petir, serta pemipaan air bersih dan kotor berstandar SNI.',
      en: 'Electrical distribution panels, grounding, lightning protection, and comprehensive water plumbing infrastructure.'
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
    summary: isEn ? item.summary.en : item.summary.id
  }));
}

export async function getServiceBySlug(slug: string, locale: string = 'id'): Promise<ServiceItem | undefined> {
  const services = await getServices(locale);
  return services.find((s) => s.slug === slug);
}

