import { SiteConfig } from '@shared/types';

export const siteConfig: SiteConfig = {
  siteName: 'Homemade Marvels',
  siteDescription: 'Gâteaux faits maison pour toutes vos occasions spéciales',
  domain: 'homemade-marvels.com',
  logo: '/logo.png',
  heroImages: [
    'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=1920&q=80',
    'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=1920&q=80',
    'https://images.unsplash.com/photo-1562440499-64c9a74f0937?w=1920&q=80',
  ],
  theme: {
    primaryColor: '#5B4B5A', // Deep purple (main brand color)
    secondaryColor: '#8B7B8A', // Medium mauve
    accentColor: '#D4A5A5', // Dusty rose
    backgroundColor: '#E8D8E0', // Light lavender background
  },
  social: {
    facebook: 'https://facebook.com/homemademarvels',
    instagram: 'https://instagram.com/homemademarvels',
    email: 'contact@homemade-marvels.com',
    phone: '+33 6 12 34 56 78',
  },
  seo: {
    title: 'Homemade Marvels - Gâteaux Faits Maison',
    description: 'Découvrez nos gâteaux faits maison avec amour pour toutes vos occasions spéciales. Anniversaires, mariages, baptêmes et plus encore.',
    keywords: ['gâteaux faits maison', 'pâtisserie artisanale', 'gâteaux personnalisés', 'wedding cake', 'anniversary cake'],
  },
};
