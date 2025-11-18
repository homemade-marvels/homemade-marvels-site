import React from 'react';
import { Cake } from '../types';
import CakeCard from './CakeCard';

interface GalleryProps {
  cakes: Cake[];
  onCakeClick: (cake: Cake) => void;
  accentColor: string;
}

export default function Gallery({ cakes, onCakeClick, accentColor }: GalleryProps) {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-5">
        {cakes.map((cake) => (
          <CakeCard
            key={cake.id}
            cake={cake}
            onClick={() => onCakeClick(cake)}
            accentColor={accentColor}
          />
        ))}
      </div>
    </div>
  );
}
