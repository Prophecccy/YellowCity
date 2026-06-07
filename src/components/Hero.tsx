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
        delayChildren: 0.2,
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
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '120px',
        paddingBottom: '80px',
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
          backgroundImage: 'url(/assets/hero_bg.png)',
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
            gap: '3rem',
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
              gap: '1.5rem',
            }}
          >
            {/* Status Specs Header */}
            <div 
              style={{ 
                display: 'flex', 
                gap: '1rem',
                border: '1px solid var(--grid-line)',
                padding: '6px 12px',
                backgroundColor: 'var(--bg-card)',
                boxShadow: '0 4px 15px rgba(0,0,0,0.02)',
                alignItems: 'center'
              }}
            >
              <div 
                style={{ 
                  width: '6px', 
                  height: '6px', 
                  backgroundColor: 'var(--brand-blue)', 
                  borderRadius: '50%',
                  boxShadow: '0 0 8px var(--brand-blue-glow)'
                }} 
              />
              <span className="font-technical" style={{ fontWeight: 600 }}>Premium Facility & Security Services</span>
            </div>

            {/* Split Text Mask Title */}
            <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
              <div style={{ overflow: 'hidden', height: 'auto', paddingBottom: '4px' }}>
                <motion.h1 
                  variants={itemVariants} 
                  style={{ 
                    fontSize: 'var(--font-size-hero)',
                    color: 'var(--text-primary)',
                    letterSpacing: '-0.03em',
                    lineHeight: '0.95'
                  }}
                >
                  VIGILANT.
                </motion.h1>
              </div>
              
              <div style={{ overflow: 'hidden', height: 'auto', paddingBottom: '4px' }}>
                <motion.h1 
                  variants={itemVariants}
                  style={{ 
                    fontSize: 'var(--font-size-hero)',
                    color: 'var(--text-primary)',
                    letterSpacing: '-0.03em',
                    lineHeight: '0.95'
                  }}
                >
                  <span className="font-serif-italic" style={{ color: 'var(--brand-yellow)', textShadow: '0 2px 10px rgba(255,210,0,0.15)' }}>pristine.</span>
                </motion.h1>
              </div>

              <div style={{ overflow: 'hidden', height: 'auto', paddingBottom: '4px' }}>
                <motion.h1 
                  variants={itemVariants}
                  style={{ 
                    fontSize: 'var(--font-size-hero)',
                    color: 'var(--text-primary)',
                    letterSpacing: '-0.03em',
                    lineHeight: '0.95'
                  }}
                >
                  TRUSTED.
                </motion.h1>
              </div>
            </div>

            {/* Narrative description */}
            <motion.p
              variants={fadeUpVariants}
              style={{
                fontSize: 'clamp(1.1rem, 1.2vw + 0.8rem, 1.4rem)',
                maxWidth: '650px',
                marginTop: '1rem',
                color: 'var(--text-muted)',
                fontWeight: 400
              }}
            >
              We integrate professional security forces, hospitality-grade housekeeping, deep sanitation cleaning, and private corporate investigations. Syncing your business facilities with absolute reliability.
            </motion.p>

            {/* Interactive CTAs */}
            <motion.div
              variants={fadeUpVariants}
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1.5rem',
                marginTop: '2rem',
                width: '100%'
              }}
            >
              <a href="#services" className="btn-draft btn-draft-accent">
                <span>Explore Services</span>
              </a>
              <a href="#contact" className="btn-draft">
                <span>Request Callback</span>
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Metrics Panel */}
        <div 
          style={{ 
            marginTop: '5rem',
            borderTop: '1px solid var(--grid-line)',
            paddingTop: '2.5rem',
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '2rem'
          }}
        >
          <div className="hero-metrics-grid">
            <div>
              <div className="font-technical">01.</div>
              <div style={{ fontSize: '1.8rem', fontFamily: 'var(--font-title)', color: 'var(--text-primary)', marginTop: '0.25rem' }}>
                98.4<span style={{ color: 'var(--brand-yellow)' }}>%</span>
              </div>
              <div className="font-technical" style={{ fontSize: '0.65rem' }}>CLIENT_RETENTION</div>
            </div>
            <div>
              <div className="font-technical">02.</div>
              <div style={{ fontSize: '1.8rem', fontFamily: 'var(--font-title)', color: 'var(--text-primary)', marginTop: '0.25rem' }}>
                500<span style={{ color: 'var(--brand-yellow)' }}>+</span>
              </div>
              <div className="font-technical" style={{ fontSize: '0.65rem' }}>VERIFIED_STAFF_UNITS</div>
            </div>
            <div>
              <div className="font-technical">03.</div>
              <div style={{ fontSize: '1.8rem', fontFamily: 'var(--font-title)', color: 'var(--text-primary)', marginTop: '0.25rem' }}>
                24<span style={{ color: 'var(--brand-blue)' }}>/</span>7
              </div>
              <div className="font-technical" style={{ fontSize: '0.65rem' }}>EMERGENCY_DISPATCH</div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
            <div>24/7 Support Active</div>
            <div style={{ width: '40px', height: '1px', backgroundColor: 'var(--text-primary)' }} />
            <div>Tamil Nadu, India</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
