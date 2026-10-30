export const SITE_CONFIG = {
  name: 'Bali Electrical Solutions',
  siteUrl: 'https://balielectricalsolutions.com',
  whatsappNumber: '+6281234567890',
  whatsappDisplay: '+62 812-3456-7890',
  whatsappUrl: 'https://wa.me/6281234567890',
  email: 'info@balielectricalsolutions.com',
  emailMailto: 'mailto:info@balielectricalsolutions.com',
  phone: '+62 361 789 0123',
  address: {
    street: 'Jl. Bypass Ngurah Rai No. 88, Sanur',
    city: 'Denpasar Selatan, Bali 80228',
    country: 'Indonesia'
  },
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


