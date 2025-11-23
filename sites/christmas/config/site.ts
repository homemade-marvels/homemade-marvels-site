import { SiteConfig } from '@shared/types';

export const siteConfig: SiteConfig = {
  siteName: 'Homemade Marvels - Gâteau de Noël',
  siteDescription: 'Gâteaux et pâtisseries de Noël faits maison',
  domain: 'noel-gourmand.com',
  logo: '/logo.png',
  heroImages: [
    '/images/hero1.jpg',
    '/images/hero2.jpg',
    '/images/hero3.jpg',
    '/images/hero4.jpg',
  ],
  theme: {
    primaryColor: '#C41E3A', // Christmas Red
    secondaryColor: '#165B33', // Forest Green
    accentColor: '#165B33', // Forest Green for buttons
    backgroundColor: '#E8F5E9', // Light green background
  },
  social: {
    instagram: 'https://instagram.com/homemademarvels',
    email: 'contact@homemademarvels.com',
    phone: '06 58 91 13 82',
  },
  seo: {
    title: 'Homemade Marvels - Gâteau de Noël Faits Maison',
    description: 'Découvrez nos créations de Noël faites maison : bûches, gâteaux festifs, et pâtisseries de fête pour un Noël mémorable.',
    keywords: ['gâteaux de noël', 'bûche de noël', 'pâtisserie de noël', 'desserts de fête', 'gâteaux festifs'],
  },
};
