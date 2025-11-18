import { SiteConfig } from '@shared/types';

export const siteConfig: SiteConfig = {
  siteName: 'Noël Gourmand',
  siteDescription: 'Gâteaux et pâtisseries de Noël faits maison',
  domain: 'noel-gourmand.com',
  logo: '/logo.png',
  heroImages: [
    'https://images.unsplash.com/photo-1512568400610-62da28bc8a13?w=1920&q=80',
    'https://images.unsplash.com/photo-1576343338680-52fa1a6b8830?w=1920&q=80',
    'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=1920&q=80',
  ],
  theme: {
    primaryColor: '#C41E3A', // Christmas Red
    secondaryColor: '#165B33', // Forest Green
    accentColor: '#165B33', // Forest Green for buttons
    backgroundColor: '#E8F5E9', // Light green background
  },
  social: {
    facebook: 'https://facebook.com/noelgourmand',
    instagram: 'https://instagram.com/noelgourmand',
    email: 'contact@noel-gourmand.com',
    phone: '+33 6 12 34 56 78',
  },
  seo: {
    title: 'Noël Gourmand - Gâteaux de Noël Faits Maison',
    description: 'Découvrez nos créations de Noël faites maison : bûches, gâteaux festifs, et pâtisseries de fête pour un Noël mémorable.',
    keywords: ['gâteaux de noël', 'bûche de noël', 'pâtisserie de noël', 'desserts de fête', 'gâteaux festifs'],
  },
};
