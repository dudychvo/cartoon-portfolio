'use client';

import { useState, useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';

interface FlipCardProps {
  frontImage: StaticImageData;
  backImage: StaticImageData;
  frontAlt: string;
  backAlt: string;
  width?: number;
  height?: number;
  autoFlip?: boolean;
  containerClassName?: string;
  frontClassName?: string;
  backClassName?: string;
}

export const FlipCard = ({
  frontImage,
  backImage,
  frontAlt,
  backAlt,
  width = 480,
  height = 610,
  autoFlip = false,
  containerClassName = '',
  frontClassName = '',
  backClassName = '',
}: FlipCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    if (!autoFlip) return;

    const flipTimer = setTimeout(() => {
      setIsFlipped(true);

      const unflipTimer = setTimeout(() => {
        setIsFlipped(false);
      }, 2000);

      return () => clearTimeout(unflipTimer);
    }, 5000);

    return () => clearTimeout(flipTimer);
  }, [autoFlip]);

  return (
    <div
      // Added `w-full h-full` so it rigidly fills the parent constraints
      className={`group relative perspective-[1000px] cursor-pointer w-full h-full ${containerClassName}`}
      onClick={() => setIsFlipped(!isFlipped)}
      role="button"
    >
      <div
        // Added `absolute inset-0` to lock the 3D transforming box to the exact pixel boundaries of the parent
        className={`absolute inset-0 w-full h-full transition-all duration-700 transform-3d group-hover:-translate-y-3 ${
          isFlipped ? 'transform-[rotateY(180deg)]' : ''
        }`}
      >
        <div className={`absolute inset-0 backface-hidden overflow-hidden ${frontClassName}`}>
          <Image
            src={frontImage}
            alt={frontAlt}
            width={width}
            height={height}
            loading="eager"
            className="w-full h-full object-cover"
          />
        </div>
        <div
          className={`absolute inset-0 backface-hidden transform-[rotateY(180deg)] overflow-hidden ${backClassName}`}
        >
          <Image
            src={backImage}
            alt={backAlt}
            width={width}
            height={height}
            loading="eager"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};
