import React from 'react';
import { Cake } from '../types';

interface CakeCardProps {
  cake: Cake;
  onClick: () => void;
  accentColor: string;
}

export default function CakeCard({ cake, onClick, accentColor }: CakeCardProps) {
  return (
    <div className="group cursor-pointer" onClick={onClick}>
      <div className="relative overflow-hidden rounded-xl aspect-square bg-gray-100 shadow-md hover:shadow-lg transition-shadow duration-300">
        <img
          src={cake.image}
          alt={cake.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      
      <div className="mt-2.5">
        <h3 className="font-semibold text-sm text-gray-900 line-clamp-1">
          {cake.name}
        </h3>
        <p className="text-gray-600 text-xs mt-1 line-clamp-2">
          {cake.description}
        </p>
        
        <a
          href={cake.shopifyUrl}
          onClick={(e) => e.stopPropagation()}
          className="inline-block mt-2.5 px-3.5 py-1.5 rounded-lg text-white text-xs font-semibold hover:opacity-90 transition-all duration-200 shadow-sm hover:shadow-md"
          style={{ backgroundColor: accentColor }}
        >
          Commander
        </a>
      </div>
    </div>
  );
}
