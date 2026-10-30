export type ServiceKey =
  | 'hvac'
  | 'ducting'
  | 'freshAir'
  | 'ventilation'
  | 'acoustic'
  | 'mep';

export interface ServiceItem {
  number: string;
  key: ServiceKey;
  image: string;
}

export const servicesData: ServiceItem[] = [
  {
    number: '01',
    key: 'hvac',
    image: '/images/services/hvac.webp'
  },
  {
    number: '02',
    key: 'ducting',
    image: '/images/services/ducting.webp'
  },
  {
    number: '03',
    key: 'freshAir',
    image: '/images/services/fresh-air.webp'
  },
  {
    number: '04',
    key: 'ventilation',
    image: '/images/services/ventilation.webp'
  },
  {
    number: '05',
    key: 'acoustic',
    image: '/images/services/acoustic.webp'
  },
  {
    number: '06',
    key: 'mep',
    image: '/images/services/mep.webp'
  }
];

