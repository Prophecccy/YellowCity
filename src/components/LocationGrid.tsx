import React from 'react';
import { motion } from 'framer-motion';

interface LocationInfo {
  name: string;
  code: string;
  latLong: string;
  office: string;
  spec: string;
}

const LocationGrid: React.FC = () => {
  const locations: LocationInfo[] = [
    { name: 'Coimbatore', code: 'CBE-W1', latLong: '11.0152° N, 76.9558° E', office: 'Regional HQ, Race Course', spec: 'Coimbatore Hub' },
    { name: 'Salem', code: 'SLM-N2', latLong: '11.6643° N, 78.1460° E', office: 'Branch Ops, Meyyanur', spec: 'Salem Dispatch' },
    { name: 'Erode', code: 'ERD-C0', latLong: '11.3410° N, 77.7172° E', office: 'Corporate HQ, Perundurai Rd', spec: 'Core Operations HQ' },
    { name: 'Tirupur', code: 'TPR-W3', latLong: '11.1085° N, 77.3411° E', office: 'Industrial Div, Avinashi Rd', spec: 'Tirupur Cleaning Depot' },
    { name: 'Karur', code: 'KRR-S4', latLong: '10.9601° N, 78.0766° E', office: 'Logistics Hub, Kovai Rd', spec: 'Karur Branch' },
    { name: 'Namakkal', code: 'NMK-E5', latLong: '11.2189° N, 78.1673° E', office: 'Transit Post, Salem Rd', spec: 'Namakkal Station' },
  ];

  return (
    <section 
      id="locations"
      style={{
        position: 'relative',
        zIndex: 5,
        borderBottom: '1px solid var(--grid-line)',
        backgroundColor: 'var(--bg-deep)'
      }}
      className="section-padding"
    >
      <div className="main-wrapper">
        {/* Section Title Grid Cell */}
        <div 
          style={{
            borderBottom: '1px solid var(--grid-line)',
            paddingBottom: '2.5rem',
            marginBottom: '4rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flexWrap: 'wrap',
            gap: '1.5rem'
          }}
        >
          <div>
            <div className="font-technical" style={{ marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Our Locations</div>
            <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--brand-blue)', marginBottom: '1.25rem' }} />
            <h2 style={{ fontSize: 'var(--font-size-section)', color: 'var(--text-primary)' }}>
              OPERATING <span className="font-serif-italic" style={{ color: 'var(--brand-yellow)', textShadow: '0 2px 10px rgba(255,210,0,0.1)' }}>sectors</span>
            </h2>
          </div>
          <p style={{ maxWidth: '450px', fontSize: '1rem' }}>
            Highly synchronized command centers deployed across major commercial zones, ensuring rapid security dispatch and housekeeping logistics.
          </p>
        </div>

        {/* Grid Layout */}
        <div 
          className="locations-layout-grid"
        >
          {locations.map((loc, idx) => (
            <motion.div
              key={loc.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              style={{
                position: 'relative',
                padding: '2.5rem',
                border: '1px solid var(--grid-line)',
                backgroundColor: 'var(--bg-card)',
                boxShadow: '0 4px 25px rgba(0,0,0,0.015)',
                overflow: 'hidden'
              }}
              className="location-card"
            >
              {/* Coordinate Stamp */}
              <div 
                style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  marginBottom: '1.5rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  color: 'var(--text-muted)'
                }}
              >
                <span>Zone 0{idx + 1}</span>
                <span style={{ color: 'var(--brand-blue)', fontWeight: 'bold' }}>Sector {loc.code}</span>
              </div>

              {/* Location Name */}
              <h3 
                style={{ 
                  fontFamily: 'var(--font-title)', 
                  fontSize: '1.75rem', 
                  color: 'var(--text-primary)',
                  marginBottom: '0.75rem' 
                }}
              >
                {loc.name}
              </h3>

              {/* Specifications */}
              <div 
                style={{ 
                  fontFamily: 'var(--font-mono)', 
                  fontSize: '0.8rem', 
                  color: 'var(--text-muted)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem',
                  marginTop: '1.5rem',
                  paddingTop: '1rem',
                  borderTop: '1px dashed var(--grid-line)'
                }}
              >
                <div>
                  <span style={{ color: 'var(--text-primary)' }}>Coordinates:</span> {loc.latLong}
                </div>
                <div>
                  <span style={{ color: 'var(--text-primary)' }}>Branch Office:</span> {loc.office}
                </div>
                <div>
                  <span style={{ color: 'var(--text-primary)' }}>Service Code:</span> {loc.spec}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Visual CSS details */}
      <style>{`
        .location-card {
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .location-card:hover {
          border-color: var(--text-primary) !important;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.04) !important;
          transform: translateY(-4px);
        }
      `}</style>
    </section>
  );
};

export default LocationGrid;
