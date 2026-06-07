import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer 
      style={{
        backgroundColor: 'var(--text-primary)', // Deep Midnight Navy
        borderTop: '1px solid var(--grid-line)',
        position: 'relative',
        zIndex: 5,
        paddingTop: '5rem',
        paddingBottom: '3rem',
        overflow: 'hidden',
        color: 'hsl(45, 15%, 93%)' // Off-white text inside dark footer
      }}
    >
      <div className="main-wrapper">
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '3rem',
            paddingBottom: '4rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
          }}
        >
          {/* Brand Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <img 
              src="/Yellow_City_logo.png" 
              alt="Yellow City Logo" 
              style={{ height: '45px', width: '45px', objectFit: 'contain', alignSelf: 'flex-start' }} 
            />
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ 
                fontFamily: 'var(--font-title)', 
                fontSize: '1.4rem', 
                color: '#ffffff',
                letterSpacing: '-0.02em'
              }}>
                YELLOW CITY
              </span>
              <span className="font-technical" style={{ fontSize: '0.65rem', color: 'var(--brand-yellow)', border: '1px solid var(--brand-yellow)', padding: '2px 6px' }}>
                [EST_2026]
              </span>
            </div>
            <p style={{ fontSize: '0.95rem', maxWidth: '340px', color: 'rgba(255, 255, 255, 0.7)' }}>
              South India's premier facility management and private intelligence corporation. Delivering high-standard security, hospitality management, commercial cleaning, and corporate investigations.
            </p>
            <div className="font-technical" style={{ color: 'rgba(255, 255, 255, 0.4)' }}>
              REG_NO: 33AAFCD5040J1ZP
            </div>
          </div>

          {/* Quick Links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <span className="font-technical" style={{ color: 'var(--brand-yellow)' }}>[QUICK_INDEX]</span>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontFamily: 'var(--font-mono)', fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.8)' }}>
              <li>
                <a href="#services" style={{ transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--brand-yellow)'} onMouseLeave={e => e.currentTarget.style.color = 'inherit'}>
                  // SERVICES_SLIDES
                </a>
              </li>
              <li>
                <a href="#locations" style={{ transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--brand-yellow)'} onMouseLeave={e => e.currentTarget.style.color = 'inherit'}>
                  // GEOGRAPHIC_REACH
                </a>
              </li>
              <li>
                <a href="#about" style={{ transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--brand-yellow)'} onMouseLeave={e => e.currentTarget.style.color = 'inherit'}>
                  // BRAND_BLUEPRINT
                </a>
              </li>
              <li>
                <a href="#contact" style={{ transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--brand-yellow)'} onMouseLeave={e => e.currentTarget.style.color = 'inherit'}>
                  // INITIATE_CONTACT
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <span className="font-technical" style={{ color: 'var(--brand-yellow)' }}>[CONTACT_COORDINATES]</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontFamily: 'var(--font-mono)', fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.7)' }}>
              <div>
                <span style={{ color: '#ffffff', fontWeight: 'bold' }}>TEL:</span> +91 94435 52222
              </div>
              <div>
                <span style={{ color: '#ffffff', fontWeight: 'bold' }}>MAIL:</span> info@yellowcity.in
              </div>
              <div>
                <span style={{ color: '#ffffff', fontWeight: 'bold' }}>LOC:</span> Corporate HQ, Erode, Tamil Nadu, IN.
              </div>
              <div>
                <span style={{ color: '#ffffff', fontWeight: 'bold' }}>HOURS:</span> 08:00 - 20:00 [UTC+5:30]
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Metadata */}
        <div 
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: '2.5rem',
            gap: '1.5rem',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            color: 'rgba(255, 255, 255, 0.4)'
          }}
        >
          <div>
            &copy; {new Date().getFullYear()} YELLOW CITY PVT LTD. ALL RIGHTS RESERVED.
          </div>
          <div style={{ display: 'flex', gap: '2rem' }} className="footer-status-row">
            <span>[STATUS: SECURE_ENVIRONMENT]</span>
            <span style={{ color: 'var(--brand-yellow)' }}>[SYS_INTEGRATED: OK]</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
