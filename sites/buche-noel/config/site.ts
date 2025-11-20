import { SiteConfig } from '@shared/types';

export const siteConfig: SiteConfig = {
  siteName: 'Bûches Artisanales',
  siteDescription: 'Bûches de Noël faites maison avec amour et tradition',
  domain: 'buches-artisanales.com',
  logo: '/logo.png',
  heroImages: [
    'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=1920&q=80',
    'https://images.unsplash.com/photo-1607478900766-efe13248b125?w=1920&q=80',
    'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=1920&q=80',
  ],
  theme: {
    primaryColor: '#8B4513', // Saddle Brown
    secondaryColor: '#A0522D', // Sienna
    accentColor: '#DC143C', // Crimson
    backgroundColor: '#F5E6D3', // Light tan/beige
  },
  social: {
    instagram: 'https://instagram.com/homemademarvels',
    email: 'contact@homemademarvels.com',
    phone: '06 58 91 13 82',
  },
  seo: {
    title: 'Bûches Artisanales - Bûches de Noël Faites Maison',
    description: 'Bûches de Noël artisanales et personnalisées. Chocolat, fruits, crème - des créations uniques pour vos fêtes de fin d\'année.',
    keywords: ['bûche de noël', 'bûche artisanale', 'bûche chocolat', 'bûche fruits', 'dessert de noël'],
  },
};
