import React from 'react';

const VibrantBackground: React.FC = () => {
  return (
    <div className="vibrant-mesh-container">
      {/* Drifting animated gradient blobs */}
      <div className="blob blob-yellow" />
      <div className="blob blob-blue" />
      <div className="blob blob-gold" />

      {/* Warm structural grid guidelines */}
      <div style={{ position: 'absolute', left: '15%', top: 0, bottom: 0, width: '1px', backgroundColor: 'var(--grid-line)' }} />
      <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: '1px', backgroundColor: 'var(--grid-line)' }} />
      <div style={{ position: 'absolute', left: '85%', top: 0, bottom: 0, width: '1px', backgroundColor: 'var(--grid-line)' }} />
    </div>
  );
};

export default VibrantBackground;
