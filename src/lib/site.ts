// Single source of truth for company-wide info. Edit here once.

export const SITE = {
  name: 'Arihant Packaging',
  legalName: 'Arihant Packaging',
  domain: 'arihantpackagingindia.com',
  url: 'https://www.arihantpackagingindia.com',
  description:
    'Manufacturer of custom flexible packaging pouches, laminated rolls, and stand-up zipper pouches in Kolkata, West Bengal.',
  foundedYear: 2016,

  contact: {
    phone: '+917980620389',
    phoneDisplay: '+91 79806 20389',
    whatsapp: '917980620389',
    email: 'info@arihantpackagingindia.com',
  },

  address: {
    street: '217-B, Tetultala More, Badu Road',
    locality: 'Madhyamgram',
    city: 'Kolkata',
    region: 'West Bengal',
    postalCode: '700129',
    country: 'IN',
    countryName: 'India',
    full: '217-B, Tetultala More, Badu Road, Madhyamgram, Kolkata, West Bengal, India',
  },

  geo: {
    latitude: 22.6932,
    longitude: 88.4549,
  },

  hours: {
    monFri: '10:00 - 19:00',
    sat: '10:00 - 17:00',
    sun: 'Closed',
  },

  social: {
    google: 'https://g.page/r/CeAsvn8ol1aYEAE',
    facebook: 'https://www.facebook.com/arihantpackagingindia',
    instagram: 'https://www.instagram.com/arihantpackagingindia/',
    twitter: 'https://twitter.com/ARIHANTPACKAGI4',
    youtube: 'https://www.youtube.com/channel/UCHi7cPvVWbuvcpjwJ139D8w/featured',
    indiamart: 'https://www.indiamart.com/arihantpackaging-kolkata/',
    tradeindia: 'https://www.tradeindia.com/Seller-10541720-Arihant-Packaging/',
    justdial:
      'https://www.justdial.com/Kolkata/Arihant-Packaging-Madhyamgram-Badu/033PXX33-XX33-170716001014-V6H4_BZDET',
  },

  // Quick stats shown on home/about — only verifiable, non-claim items
  stats: {
    yearsInBusiness: new Date().getFullYear() - 2016,
    printColors: 'up to 8',
    minOrderKg: 300,
  },
};

export function whatsappLink(message?: string): string {
  const text = message ? `?text=${encodeURIComponent(message)}` : '';
  return `https://wa.me/${SITE.contact.whatsapp}${text}`;
}
