import React from 'react';

// -------------------------------------------------------------
// SECURITY VISUAL: Animated Radar Scanning Sweep
// -------------------------------------------------------------
export const SecurityVisual: React.FC = () => {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <svg width="240" height="240" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Concentric radar rings */}
        <circle cx="50" cy="50" r="45" stroke="var(--grid-line)" strokeWidth="1" />
        <circle cx="50" cy="50" r="30" stroke="var(--brand-blue)" strokeWidth="0.75" opacity="0.35" />
        <circle cx="50" cy="50" r="15" stroke="var(--grid-line)" strokeWidth="0.5" />
        
        {/* Radar crosshairs */}
        <line x1="50" y1="5" x2="50" y2="95" stroke="var(--grid-line)" strokeWidth="0.5" />
        <line x1="5" y1="50" x2="95" y2="50" stroke="var(--grid-line)" strokeWidth="0.5" />
        
        {/* Sweeping scan sector */}
        <g style={{ transformOrigin: '50px 50px', animation: 'radar-sweep 4s linear infinite' }}>
          <path d="M50 50 L50 5 A45 45 0 0 1 82 18 Z" fill="url(#radarGrad)" opacity="0.3" />
          <line x1="50" y1="50" x2="50" y2="5" stroke="var(--brand-yellow)" strokeWidth="1.5" />
        </g>
        
        {/* Radar blips */}
        <circle cx="28" cy="35" r="2" fill="var(--brand-yellow)" style={{ animation: 'radar-blip 1.5s infinite 0.5s' }} />
        <circle cx="68" cy="62" r="2.5" fill="var(--text-primary)" style={{ animation: 'radar-blip 2s infinite 1s' }} />
        
        {/* Definitions */}
        <defs>
          <radialGradient id="radarGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--brand-yellow)" stopOpacity="1" />
            <stop offset="100%" stopColor="var(--brand-yellow)" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
      <style>{`
        @keyframes radar-sweep {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes radar-blip {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.5); }
        }
      `}</style>
    </div>
  );
};

// -------------------------------------------------------------
// HOUSEKEEPING VISUAL: Rotating and Pulsing Sparkles
// -------------------------------------------------------------
export const HousekeepingVisual: React.FC = () => {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <svg width="240" height="240" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Background geometric mandala */}
        <rect x="25" y="25" width="50" height="50" rx="4" stroke="var(--grid-line)" strokeWidth="1" transform="rotate(45 50 50)" />
        <circle cx="50" cy="50" r="35" stroke="var(--grid-line)" strokeWidth="1" strokeDasharray="4 4" />
        
        {/* Central main sparkle star */}
        <path 
          d="M50 20 C50 35, 35 50, 20 50 C35 50, 50 50, 50 80 C50 50, 65 50, 80 50 C65 50, 50 35, 50 20 Z" 
          fill="var(--brand-yellow)" 
          style={{ transformOrigin: '50px 50px', animation: 'sparkle-main 5s ease-in-out infinite alternate' }} 
        />

        {/* Small floating stars */}
        <path 
          d="M28 28 C28 33, 23 38, 18 38 C23 38, 28 38, 28 48 C28 38, 33 38, 38 38 C33 38, 28 33, 28 28 Z" 
          fill="var(--brand-blue)" 
          style={{ transformOrigin: '28px 38px', animation: 'sparkle-float 3s ease-in-out infinite 0.2s' }} 
        />
        <path 
          d="M72 65 C72 68, 69 71, 66 71 C69 71, 72 71, 72 77 C72 71, 75 71, 78 71 C75 71, 72 68, 72 65 Z" 
          fill="var(--brand-yellow)" 
          style={{ transformOrigin: '72px 71px', animation: 'sparkle-float 4s ease-in-out infinite 0.8s' }} 
        />
      </svg>
      <style>{`
        @keyframes sparkle-main {
          0% { transform: scale(0.8) rotate(0deg); }
          50% { transform: scale(1.05) rotate(15deg); }
          100% { transform: scale(0.9) rotate(-15deg); }
        }
        @keyframes sparkle-float {
          0%, 100% { transform: scale(0.7) translateY(0); opacity: 0.5; }
          50% { transform: scale(1) translateY(-6px); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

// -------------------------------------------------------------
// CLEANING VISUAL: Shining Sweep Wiping Clean
// -------------------------------------------------------------
export const CleaningVisual: React.FC = () => {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <svg width="240" height="240" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Circle clip container for wiping effect */}
        <mask id="wipeMask">
          <circle cx="50" cy="50" r="40" fill="white" />
        </mask>
        
        {/* Background shield/shape */}
        <circle cx="50" cy="50" r="40" stroke="var(--grid-line)" strokeWidth="1" />
        <path d="M50 10 L82 22 V55 C82 72, 68 83, 50 88 C32 83, 18 72, 18 55 V22 Z" fill="var(--bg-panel)" stroke="var(--brand-blue)" strokeWidth="2" />
        
        {/* Cleaning shine line sweeping horizontally */}
        <g mask="url(#wipeMask)">
          <rect 
            x="-40" 
            y="0" 
            width="30" 
            height="120" 
            fill="url(#shineGrad)" 
            transform="rotate(25)"
            style={{ animation: 'shine-sweep 3s ease-in-out infinite' }} 
          />
        </g>
        
        {/* Centered clean star logo */}
        <path d="M50 35 L53 44 L62 44 L55 50 L57 59 L50 53 L43 59 L45 50 L38 44 L47 44 Z" fill="var(--brand-yellow)" />
        
        {/* Definitions */}
        <defs>
          <linearGradient id="shineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="50%" stopColor="white" stopOpacity="0.45" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      <style>{`
        @keyframes shine-sweep {
          0% { transform: translateX(-60px) rotate(25deg); }
          50%, 100% { transform: translateX(140px) rotate(25deg); }
        }
      `}</style>
    </div>
  );
};

// -------------------------------------------------------------
// DETECTIVE VISUAL: Pulse Coordinate Tracking Scan
// -------------------------------------------------------------
export const DetectiveVisual: React.FC = () => {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <svg width="240" height="240" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Framing grids */}
        <rect x="15" y="15" width="70" height="70" stroke="var(--grid-line)" strokeWidth="1" />
        
        {/* Moving scan line */}
        <line 
          x1="15" 
          y1="50" 
          x2="85" 
          y2="50" 
          stroke="var(--brand-yellow)" 
          strokeWidth="1.5" 
          style={{ animation: 'scan-line 3s ease-in-out infinite alternate' }} 
        />
        
        {/* Pulsing Target Reticle */}
        <g style={{ animation: 'target-pulse 2s infinite' }}>
          <circle cx="50" cy="50" r="18" stroke="var(--brand-blue)" strokeWidth="1.5" strokeDasharray="6 4" />
          <path d="M50 26 V32 M50 68 V74 M26 50 H32 M68 50 H74" stroke="var(--brand-blue)" strokeWidth="1.5" />
        </g>
        
        {/* Inner core lock coordinates */}
        <circle cx="50" cy="50" r="3" fill="var(--brand-yellow)" />
      </svg>
      <style>{`
        @keyframes scan-line {
          0% { transform: translateY(-30px); }
          100% { transform: translateY(30px); }
        }
        @keyframes target-pulse {
          0%, 100% { transform: scale(0.95); opacity: 0.75; transform-origin: 50px 50px; }
          50% { transform: scale(1.05); opacity: 1; transform-origin: 50px 50px; }
        }
      `}</style>
    </div>
  );
};
