import React from 'react';
import { SiteConfig } from '../types';

interface HeaderProps {
  config: SiteConfig;
}

export default function Header({ config }: HeaderProps) {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold" style={{ color: config.theme.primaryColor }}>
              {config.siteName}
            </h1>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a 
              href="#accueil" 
              className="hover:opacity-80 transition-opacity"
              style={{ color: config.theme.primaryColor }}
            >
              Accueil
            </a>
            <a 
              href="#galerie" 
              className="hover:opacity-80 transition-opacity"
              style={{ color: config.theme.primaryColor }}
            >
              Galerie
            </a>
            <a 
              href="#contact" 
              className="hover:opacity-80 transition-opacity"
              style={{ color: config.theme.primaryColor }}
            >
              Contact
            </a>
          </nav>

          {/* Mobile menu button */}
          <button className="md:hidden p-2" aria-label="Menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
