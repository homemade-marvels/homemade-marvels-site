import React, { useEffect } from 'react';
import { Cake } from '../types';

interface LightboxProps {
  cake: Cake | null;
  onClose: () => void;
  accentColor: string;
}

export default function Lightbox({ cake, onClose, accentColor }: LightboxProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (cake) {
      document.addEventListener('keydown', handleEscape);
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      
      return () => {
        document.removeEventListener('keydown', handleEscape);
        document.body.style.overflow = originalOverflow || '';
      };
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [cake, onClose]);

  if (!cake) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:opacity-70 transition-opacity z-10"
        aria-label="Fermer"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div 
        className="max-w-4xl w-full bg-white rounded-lg overflow-hidden shadow-2xl my-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="grid md:grid-cols-2 gap-0">
          <div className="aspect-square relative bg-gray-100">
            <img
              src={cake.image}
              alt={cake.name}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="p-8">
            <h2 className="text-3xl font-bold mb-4">{cake.name}</h2>
            <p className="text-gray-600 mb-6">{cake.description}</p>
            
            {cake.tags && cake.tags.length > 0 && (
              <div className="mb-6">
                <h3 className="font-semibold mb-2">Caractéristiques:</h3>
                <div className="flex flex-wrap gap-2">
                  {cake.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 rounded-full text-sm text-white"
                      style={{ backgroundColor: accentColor }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            <a
              href={cake.shopifyUrl}
              className="inline-block px-6 py-3 rounded-md text-white font-medium hover:opacity-90 transition-opacity"
              style={{ backgroundColor: accentColor }}
            >
              Commander sur Shopify
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
