export interface Cake {
  id: string;
  name: string;
  description: string;
  image: string;
  shopifyUrl: string;
  category?: string;
  tags?: string[];
}

export interface SiteConfig {
  siteName: string;
  siteDescription: string;
  domain: string;
  logo: string;
  heroImages: string[];
  theme: {
    primaryColor: string;
    secondaryColor: string;
    accentColor: string;
    backgroundColor: string;
  };
  social?: {
    instagram?: string;
    email?: string;
    phone?: string;
  };
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}
