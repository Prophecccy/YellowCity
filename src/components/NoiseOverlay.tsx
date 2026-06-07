import React from 'react';

const NoiseOverlay: React.FC = () => {
  return (
    <svg 
      className="noise-overlay" 
      width="100%" 
      height="100%" 
      xmlns="http://www.w3.org/2000/svg"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        pointerEvents: 'none',
        opacity: 0.045,
        mixBlendMode: 'overlay'
      }}
    >
      <filter id="noiseFilter">
        <feTurbulence 
          type="fractalNoise" 
          baseFrequency="0.75" 
          numOctaves="3" 
          stitchTiles="stitch" 
        />
      </filter>
      <rect width="100%" height="100%" filter="url(#noiseFilter)" />
    </svg>
  );
};

export default NoiseOverlay;
