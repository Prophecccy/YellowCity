import React from 'react';

const About: React.FC = () => {
  return (
    <section 
      id="about"
      style={{
        position: 'relative',
        zIndex: 5,
        borderBottom: '1px solid var(--grid-line)',
        backgroundColor: 'var(--bg-panel)'
      }}
      className="section-padding"
    >
      <div className="main-wrapper">
        <div 
          style={{
            display: 'grid',
            alignItems: 'center'
          }}
          className="about-layout-grid"
        >
          {/* Left Side: Editorial Narrative */}
          <div className="about-narrative-col" style={{ position: 'relative', zIndex: 2 }}>
            <div className="font-technical" style={{ marginBottom: '0.5rem' }}>[OPERATIONAL_CORE]</div>
            <h2 style={{ fontSize: 'var(--font-size-section)', color: 'var(--text-primary)', marginBottom: '2rem' }}>
              BUILT WITH <br/>
              UNCOMPROMISING <br/>
              <span className="font-serif-italic" style={{ color: 'var(--brand-yellow)', textShadow: '0 2px 10px rgba(255,210,0,0.1)' }}>compliance.</span>
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <p>
                Yellow City Private Ltd operates on a core thesis: facility management and private intelligence cannot be delegated to generic templates. It requires rigorous, human-in-the-loop coordination.
              </p>
              <p>
                Every security officer, housekeeping steward, deep cleaning technician, and private investigator undergoes exhaustive background verifications, police verification, and intensive situational training before dispatch.
              </p>
            </div>
          </div>

          {/* Right Side: Specifications Drafting Panel */}
          <div 
            style={{
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--grid-line)',
              position: 'relative',
              boxShadow: '0 10px 40px rgba(0,0,0,0.03)'
            }}
            className="premium-specs-card"
          >
            <h3 style={{ fontFamily: 'var(--font-title)', fontSize: '1.3rem', color: 'var(--text-primary)', marginBottom: '2rem', textTransform: 'uppercase' }}>
              Operational Foundations
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>
              {/* Pillar 1 */}
              <div style={{ borderLeft: '3px solid var(--brand-yellow)', paddingLeft: '1rem' }}>
                <div style={{ color: 'var(--text-primary)', fontWeight: 'bold' }}>01 // 100% POLICE VERIFIED</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem', marginTop: '0.25rem' }}>
                  Rigorous background and criminal record checks.
                </div>
              </div>

              {/* Pillar 2 */}
              <div style={{ borderLeft: '3px solid var(--brand-yellow)', paddingLeft: '1rem' }}>
                <div style={{ color: 'var(--text-primary)', fontWeight: 'bold' }}>02 // STATUTORY COMPLIANCE</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem', marginTop: '0.25rem' }}>
                  Strict adherence to PF, ESI, and government labor standards.
                </div>
              </div>

              {/* Pillar 3 */}
              <div style={{ borderLeft: '3px solid var(--brand-yellow)', paddingLeft: '1rem' }}>
                <div style={{ color: 'var(--text-primary)', fontWeight: 'bold' }}>03 // 24/7 COMMAND DESK</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem', marginTop: '0.25rem' }}>
                  Continuous dispatch support and active location tracking.
                </div>
              </div>
            </div>

            {/* Decorative stamp region */}
            <div 
              style={{
                marginTop: '2rem',
                border: '1px dashed var(--grid-line)',
                height: '80px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <img 
                src="/Yellow_City_logo.png" 
                alt="Regional Verification Seal" 
                style={{ 
                  height: '55px', 
                  objectFit: 'contain', 
                  opacity: 0.18, 
                  filter: 'grayscale(100%) contrast(1.2)' 
                }} 
              />
              <div 
                style={{ 
                  position: 'absolute', 
                  fontFamily: 'var(--font-mono)', 
                  fontSize: '0.65rem', 
                  color: 'var(--text-muted)',
                  letterSpacing: '0.1em',
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                  pointerEvents: 'none'
                }}
              >
                // SECURE_VERIFIED
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        .about-layout-grid {
          grid-template-columns: 1fr;
          gap: 3rem;
        }
        .about-narrative-col {
          padding-right: 1.5rem;
        }
        @media (min-width: 1024px) {
          .about-layout-grid {
            grid-template-columns: 1.2fr 0.8fr;
            gap: 5rem;
          }
          .about-narrative-col {
            padding-right: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
