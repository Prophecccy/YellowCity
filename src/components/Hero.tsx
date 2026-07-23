import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

const Hero = () => {
  // Animation presets for split-text masking
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: '100%' },
    visible: {
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any },
    },
  };

  const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any },
    },
  };

  return (
    <section
      style={{
        position: 'relative',
        minHeight: '85vh',
        width: '100%',
        display: 'flex',
        alignItems: 'flex-start',
        paddingTop: '105px',
        paddingBottom: '3.5rem',
        overflow: 'hidden',
        borderBottom: '1px solid var(--grid-line)',
      }}
    >
      {/* Immersive Background Blended Graphic */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '55%',
          height: '100%',
          backgroundImage: 'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center right',
          opacity: 0.12,
          pointerEvents: 'none',
          zIndex: 1,
          maskImage: 'radial-gradient(circle at center, black 20%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(circle at center, black 20%, transparent 80%)',
        }}
      />

      <div className="main-wrapper" style={{ position: 'relative', zIndex: 10, width: '100%' }}>
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2.5rem',
          }}
          className="hero-grid-layout"
        >
          {/* Main Title & Copy Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="hero-narrative-col"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: '1.15rem',
            }}
          >
            {/* Prominent Client Stat Badge */}
            <div 
              style={{ 
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: 'var(--text-primary)',
                color: '#FFD54F',
                padding: '6px 14px',
                borderRadius: '9999px',
                border: '2px solid var(--text-primary)',
                boxShadow: '0 4px 14px rgba(0, 29, 74, 0.15)',
                fontWeight: 800
              }}
            >
              <div 
                style={{ 
                  width: '7px', 
                  height: '7px', 
                  backgroundColor: '#FFD54F', 
                  borderRadius: '50%',
                  boxShadow: '0 0 8px #FFD54F',
                  flexShrink: 0
                }} 
              />
              <span className="font-technical" style={{ fontWeight: 800, color: '#FFD54F', letterSpacing: '0.05em', fontSize: '0.78rem' }}>
                ★ 12,000+ SATISFIED CLIENTS SERVED ★
              </span>
            </div>

            {/* Split Text Mask Title */}
            <div style={{ display: 'flex', flexDirection: 'column', width: '100%', marginTop: '0.2rem' }}>
              <div style={{ overflow: 'hidden', paddingBottom: '4px' }}>
                <motion.h1 
                  variants={itemVariants} 
                  style={{ 
                    fontSize: 'clamp(2.2rem, 5.5vw + 1rem, 4.2rem)',
                    color: 'var(--text-primary)',
                    letterSpacing: '-0.03em',
                    lineHeight: '1.02',
                    fontWeight: 900
                  }}
                >
                  VIGILANT. <span className="font-serif-italic" style={{ color: 'var(--brand-blue)', fontWeight: 900 }}>pristine.</span> TRUSTED.
                </motion.h1>
              </div>
            </div>

            {/* Narrative description */}
            <motion.p
              variants={fadeUpVariants}
              style={{
                fontSize: 'clamp(0.95rem, 1vw + 0.7rem, 1.25rem)',
                maxWidth: '650px',
                marginTop: '0.25rem',
                color: 'var(--text-primary)',
                fontWeight: 700,
                lineHeight: '1.5'
              }}
            >
              South India's premier Facility Management corporation. Delivering hospitality-grade security, professional housekeeping, deep sanitation, and corporate staffing for over 12,000+ satisfied commercial and residential clients.
            </motion.p>

            {/* Interactive CTAs - Rounded Pills */}
            <motion.div
              variants={fadeUpVariants}
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                marginTop: '1rem',
                width: '100%'
              }}
            >
              <a href="#services" className="btn-draft btn-draft-accent" style={{ fontWeight: 800, borderRadius: '9999px' }}>
                <span>Explore All Services</span>
              </a>
              <a href="#contact" className="btn-draft" style={{ fontWeight: 800, borderRadius: '9999px' }}>
                <span>Get Instant Quote</span>
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Metrics Panel with Prominent 12,000+ Stat */}
        <div 
          style={{ 
            marginTop: '3.5rem',
            borderTop: '2px solid var(--text-primary)',
            paddingTop: '2rem',
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.5rem'
          }}
        >
          <div className="hero-metrics-grid" style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', width: '100%' }}>
            <div style={{ backgroundColor: 'var(--text-primary)', color: 'var(--bg-deep)', padding: '1.1rem 1.25rem', borderRadius: '8px', border: '2px solid var(--text-primary)', maxWidth: '100%', boxSizing: 'border-box' }}>
              <div className="font-technical" style={{ color: '#FFD54F', fontWeight: 800 }}>01. PROMINENT STAT</div>
              <div style={{ fontSize: '2rem', fontFamily: 'var(--font-title)', color: '#FFFFFF', marginTop: '0.2rem', fontWeight: 900 }}>
                12,000<span style={{ color: '#FFD54F' }}>+</span>
              </div>
              <div className="font-technical" style={{ fontSize: '0.75rem', color: '#FFD54F', fontWeight: 800 }}>SATISFIED_CUSTOMERS</div>
            </div>
            <div>
              <div className="font-technical" style={{ fontWeight: 800 }}>02. PERFORMANCE</div>
              <div style={{ fontSize: '1.75rem', fontFamily: 'var(--font-title)', color: 'var(--text-primary)', marginTop: '0.2rem', fontWeight: 900 }}>
                98.4<span style={{ color: 'var(--brand-blue)' }}>%</span>
              </div>
              <div className="font-technical" style={{ fontSize: '0.65rem', fontWeight: 700 }}>CLIENT_RETENTION</div>
            </div>
            <div>
              <div className="font-technical" style={{ fontWeight: 800 }}>03. WORKFORCE</div>
              <div style={{ fontSize: '1.75rem', fontFamily: 'var(--font-title)', color: 'var(--text-primary)', marginTop: '0.2rem', fontWeight: 900 }}>
                500<span style={{ color: 'var(--brand-blue)' }}>+</span>
              </div>
              <div className="font-technical" style={{ fontSize: '0.65rem', fontWeight: 700 }}>VERIFIED_STAFF_UNITS</div>
            </div>
            <div>
              <div className="font-technical" style={{ fontWeight: 800 }}>04. SUPPORT</div>
              <div style={{ fontSize: '1.75rem', fontFamily: 'var(--font-title)', color: 'var(--text-primary)', marginTop: '0.2rem', fontWeight: 900 }}>
                24<span style={{ color: 'var(--brand-blue)' }}>/</span>7
              </div>
              <div className="font-technical" style={{ fontSize: '0.65rem', fontWeight: 700 }}>EMERGENCY_DISPATCH</div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-primary)', fontWeight: 800 }}>
            <div>24/7 Operations Active</div>
            <div style={{ width: '30px', height: '2px', backgroundColor: 'var(--text-primary)' }} />
            <div>Chennai & Coimbatore, TN</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
