'use client';

import { useState } from 'react';
import { Header, Footer, Gallery, Lightbox, HeroCarousel } from '@shared/components';
import { Cake } from '@shared/types';
import { siteConfig } from '../config/site';
import cakesData from '../data/cakes.json';

export default function Home() {
  const [selectedCake, setSelectedCake] = useState<Cake | null>(null);
  const cakes = cakesData as Cake[];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f1f8e9' }}>
      <Header config={siteConfig} />
      
      <HeroCarousel
        images={siteConfig.heroImages}
        title={siteConfig.siteName}
        subtitle={siteConfig.siteDescription}
        ctaText="Découvrir nos créations"
        ctaLink="#galerie"
        accentColor={siteConfig.theme.accentColor}
      />

      {/* Gallery Section */}
      <section id="galerie" className="py-12" style={{ backgroundColor: '#e8f5e9' }}>
        <div className="text-center mb-12">
          <h2 
            className="text-4xl font-bold mb-4"
            style={{ color: siteConfig.theme.primaryColor }}
          >
            Notre Galerie
          </h2>
          <p className="text-gray-700">Cliquez sur un gâteau pour en savoir plus</p>
        </div>
        
        <Gallery 
          cakes={cakes} 
          onCakeClick={setSelectedCake}
          accentColor={siteConfig.theme.accentColor}
        />
      </section>

      <section 
        id="contact" 
        className="py-20 px-4"
        style={{ backgroundColor: siteConfig.theme.backgroundColor }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 
            className="text-3xl font-bold mb-6"
            style={{ color: siteConfig.theme.primaryColor }}
          >
            Contactez-nous
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Une question ? Un projet de gâteau personnalisé ?<br />
            N'hésitez pas à nous contacter !
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {siteConfig.social?.email && (
              <a
                href={`mailto:${siteConfig.social.email}`}
                className="px-6 py-3 rounded-md text-white font-medium hover:opacity-90 transition-opacity"
                style={{ backgroundColor: siteConfig.theme.accentColor }}
              >
                Envoyer un email
              </a>
            )}
            {siteConfig.social?.phone && (
              <a
                href={`tel:${siteConfig.social.phone}`}
                className="px-6 py-3 rounded-md font-medium hover:opacity-90 transition-opacity border-2"
                style={{ 
                  borderColor: siteConfig.theme.accentColor,
                  color: siteConfig.theme.accentColor 
                }}
              >
                Appeler
              </a>
            )}
          </div>
        </div>
      </section>

      <Footer config={siteConfig} />
      
      <Lightbox 
        cake={selectedCake} 
        onClose={() => setSelectedCake(null)}
        accentColor={siteConfig.theme.accentColor}
      />
    </div>
  );
}
