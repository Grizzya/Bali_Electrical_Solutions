export const SITE_CONFIG = {
  name: 'Bali Electrical Solutions',
  legalName: 'Bali Electrical',
  siteUrl: 'https://balielectricalsolutions.com',
  whatsappNumber: '+6282147237047',
  whatsappDisplay: '+62 821-4723-7047',
  whatsappUrl: 'https://wa.me/6282147237047',
  email: 'balielectrical@gmail.com',
  emailMailto: 'mailto:balielectrical@gmail.com',
  phone: '082 147 237 047',
  address: {
    street: 'Badung, Bali (Layanan Canggu, Berawa, Seminyak, Uluwatu & Seluruh Bali)',
    city: 'Badung, Bali',
    country: 'Indonesia'
  },
  serviceAreas: [
    'Canggu',
    'Berawa',
    'Seminyak',
    'Kuta',
    'Uluwatu',
    'Jimbaran',
    'Nusa Dua',
    'Sanur',
    'Denpasar',
    'Ubud',
    'Badung',
    'Gianyar'
  ],
  operatingHours: {
    id: 'Senin - Sabtu: 08:00 - 17:00 WITA (Layanan Darurat 24/7)',
    en: 'Mon - Sat: 08:00 AM - 05:00 PM WITA (24/7 Emergency Service)'
  },
  socials: {
    instagram: 'https://instagram.com/balielectricalsolutions',
    facebook: 'https://facebook.com/balielectricalsolutions',
    linkedin: 'https://linkedin.com/company/bali-electrical-solutions'
  }
} as const;

export const WHATSAPP_URL = SITE_CONFIG.whatsappUrl;


