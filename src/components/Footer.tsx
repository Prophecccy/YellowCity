import React from 'react';

interface FooterProps {
  onNavigate?: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleLinkClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(id);
    }
  };

  return (
    <footer 
      style={{
        backgroundColor: 'var(--text-primary)', // Deep Dark Blue
        borderTop: '3px solid #FFD54F',
        position: 'relative',
        zIndex: 5,
        paddingTop: '5rem',
        paddingBottom: '3rem',
        color: '#FFFFFF'
      }}
    >
      <div className="main-wrapper">
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '3rem',
            paddingBottom: '4rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.15)'
          }}
        >
          {/* Brand Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <img 
              src="/Yellow_City_logo.png" 
              alt="Yellow City Logo" 
              style={{ height: '50px', width: '50px', objectFit: 'contain', alignSelf: 'flex-start' }} 
            />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <span style={{ 
                fontFamily: 'var(--font-title)', 
                fontSize: '1.5rem', 
                color: '#FFD54F',
                letterSpacing: '-0.02em',
                fontWeight: 900
              }}>
                YELLOW CITY
              </span>
              <span style={{ fontSize: '0.85rem', color: '#FFFFFF', fontWeight: 800 }}>
                Yellow City Private Limited
              </span>
              <span className="font-technical" style={{ fontSize: '0.75rem', color: '#FFD54F', fontWeight: 800 }}>
                Facility Management Service
              </span>
            </div>
            <p style={{ fontSize: '0.95rem', maxWidth: '340px', color: 'rgba(255, 255, 255, 0.9)', fontWeight: 700 }}>
              South India's premier integrated facility management corporation. Trusted by over 12,000+ satisfied commercial and residential clients across Tamil Nadu.
            </p>
            <div className="font-technical" style={{ color: '#FFD54F', fontWeight: 800 }}>
              ★ 12,000+ SATISFIED CUSTOMERS SERVED ★
            </div>
          </div>

          {/* Quick Links (5 Pages) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <span className="font-technical" style={{ color: '#FFD54F', fontWeight: 800, fontSize: '0.9rem' }}>PAGES & DIRECTORY</span>
            <div style={{ width: '40px', height: '3px', backgroundColor: '#FFD54F', marginTop: '-0.75rem', marginBottom: '0.25rem' }} />
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem', fontFamily: 'var(--font-mono)', fontSize: '0.95rem' }}>
              <li>
                <a href="#home" onClick={(e) => handleLinkClick(e, 'home')} style={{ color: '#FFFFFF', fontWeight: 800, transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = '#FFD54F'} onMouseLeave={e => e.currentTarget.style.color = '#FFFFFF'}>
                  → Home Page
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleLinkClick(e, 'services')} style={{ color: '#FFFFFF', fontWeight: 800, transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = '#FFD54F'} onMouseLeave={e => e.currentTarget.style.color = '#FFFFFF'}>
                  → Services Page
                </a>
              </li>
              <li>
                <a href="#gallery" onClick={(e) => handleLinkClick(e, 'gallery')} style={{ color: '#FFFFFF', fontWeight: 800, transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = '#FFD54F'} onMouseLeave={e => e.currentTarget.style.color = '#FFFFFF'}>
                  → Gallery Page
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => handleLinkClick(e, 'about')} style={{ color: '#FFFFFF', fontWeight: 800, transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = '#FFD54F'} onMouseLeave={e => e.currentTarget.style.color = '#FFFFFF'}>
                  → About Page
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => handleLinkClick(e, 'contact')} style={{ color: '#FFFFFF', fontWeight: 800, transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = '#FFD54F'} onMouseLeave={e => e.currentTarget.style.color = '#FFFFFF'}>
                  → Contact Us Page
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <span className="font-technical" style={{ color: '#FFD54F', fontWeight: 800, fontSize: '0.9rem' }}>CORPORATE HQ & CONTACT</span>
            <div style={{ width: '40px', height: '3px', backgroundColor: '#FFD54F', marginTop: '-0.75rem', marginBottom: '0.25rem' }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontFamily: 'var(--font-mono)', fontSize: '0.95rem', color: '#FFFFFF', fontWeight: 800 }}>
              <div>
                <span style={{ color: '#FFD54F' }}>TEL:</span> +91 94435 52222
              </div>
              <div>
                <span style={{ color: '#FFD54F' }}>MAIL:</span> info@yellowcity.in
              </div>
              <div>
                <span style={{ color: '#FFD54F' }}>HQ:</span> Yellow City Private Limited, Erode, Tamil Nadu, IN.
              </div>
              <div>
                <span style={{ color: '#FFD54F' }}>OPERATIONS:</span> 24/7 Dispatch Center
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
            fontSize: '0.8rem',
            color: 'rgba(255, 255, 255, 0.7)',
            fontWeight: 800
          }}
        >
          <div>
            &copy; {new Date().getFullYear()} YELLOW CITY PRIVATE LIMITED • FACILITY MANAGEMENT SERVICE. ALL RIGHTS RESERVED.
          </div>
          <div style={{ color: '#FFD54F' }}>
            12,000+ SATISFIED CUSTOMERS
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
