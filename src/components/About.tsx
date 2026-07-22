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
            <div style={{ display: 'inline-flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
              <div className="font-technical" style={{ fontWeight: 800 }}>About Yellow City Private Limited</div>
              <div style={{ width: '100%', height: '4px', backgroundColor: 'var(--text-primary)' }} />
            </div>
            <h2 style={{ fontSize: 'var(--font-size-section)', color: 'var(--text-primary)', marginBottom: '2rem', fontWeight: 900 }}>
              FACILITY MANAGEMENT <br/>
              BUILT FOR <br/>
              <span className="font-serif-italic" style={{ color: 'var(--brand-blue)', fontWeight: 900 }}>12,000+ satisfied clients.</span>
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <p style={{ color: 'var(--text-primary)', fontWeight: 700 }}>
                Yellow City Private Limited operates as South India's premier Facility Management Service corporation. Serving over 12,000+ satisfied commercial complexes, corporate offices, industrial hubs, and gated communities.
              </p>
              <p style={{ color: 'var(--text-primary)', fontWeight: 700 }}>
                Every security officer, housekeeping steward, deep cleaning technician, and private investigator undergoes exhaustive background verifications, police verification, and intensive situational training before site deployment.
              </p>
            </div>
          </div>

          {/* Right Side: Specifications Drafting Panel */}
          <div 
            style={{
              backgroundColor: 'var(--bg-card)',
              border: '2px solid var(--text-primary)',
              position: 'relative',
              boxShadow: '6px 6px 0px var(--text-primary)'
            }}
            className="premium-specs-card"
          >
            <h3 style={{ fontFamily: 'var(--font-title)', fontSize: '1.3rem', color: 'var(--text-primary)', marginBottom: '2rem', textTransform: 'uppercase', fontWeight: 900 }}>
              YELLOW CITY CORPORATE CORE
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>
              {/* Pillar 1 */}
              <div style={{ borderLeft: '4px solid var(--text-primary)', paddingLeft: '1rem' }}>
                <div style={{ color: 'var(--text-primary)', fontWeight: 900, fontSize: '1rem' }}>01. 12,000+ Satisfied Clients</div>
                <div style={{ color: 'var(--text-primary)', fontSize: '0.8rem', marginTop: '0.25rem', fontWeight: 700 }}>
                  Proven track record of facility management across Tamil Nadu.
                </div>
              </div>

              {/* Pillar 2 */}
              <div style={{ borderLeft: '4px solid var(--brand-blue)', paddingLeft: '1rem' }}>
                <div style={{ color: 'var(--text-primary)', fontWeight: 900, fontSize: '1rem' }}>02. 100% Police & Background Verified</div>
                <div style={{ color: 'var(--text-primary)', fontSize: '0.8rem', marginTop: '0.25rem', fontWeight: 700 }}>
                  Complete identity verifications and statutory compliance.
                </div>
              </div>

              {/* Pillar 3 */}
              <div style={{ borderLeft: '4px solid var(--text-primary)', paddingLeft: '1rem' }}>
                <div style={{ color: 'var(--text-primary)', fontWeight: 900, fontSize: '1rem' }}>03. 24/7 Command & Emergency Dispatch</div>
                <div style={{ color: 'var(--text-primary)', fontSize: '0.8rem', marginTop: '0.25rem', fontWeight: 700 }}>
                  Continuous dispatch support, SLA tracking, and location management.
                </div>
              </div>
            </div>

            {/* Decorative stamp region */}
            <div 
              style={{
                marginTop: '2rem',
                border: '2px dashed var(--text-primary)',
                height: '80px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
                backgroundColor: 'var(--bg-deep)'
              }}
            >
              <img 
                src="/Yellow_City_logo.png" 
                alt="Regional Verification Seal" 
                style={{ 
                  height: '55px', 
                  objectFit: 'contain', 
                  opacity: 0.3
                }} 
              />
              <div 
                style={{ 
                  position: 'absolute', 
                  fontFamily: 'var(--font-mono)', 
                  fontSize: '0.75rem', 
                  color: 'var(--text-primary)',
                  letterSpacing: '0.1em',
                  fontWeight: 900,
                  textTransform: 'uppercase',
                  pointerEvents: 'none'
                }}
              >
                Yellow City Private Limited Verified
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
