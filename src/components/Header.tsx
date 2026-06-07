import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Locations', href: '#locations' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 100,
        backgroundColor: scrolled ? 'rgba(252, 252, 249, 0.88)' : 'transparent',
        backdropFilter: scrolled ? 'blur(15px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--grid-line)' : '1px solid transparent',
        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      <div 
        className="main-wrapper"
        style={{
          display: 'flex',
          alignItems: 'stretch',
          justifyContent: 'space-between',
          height: scrolled ? '70px' : '90px',
          transition: 'height 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        {/* Brand Logo & Name */}
        <a 
          href="#" 
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '12px',
            borderRight: '1px solid var(--grid-line)',
            paddingRight: '2rem'
          }}
        >
          <img 
            src="/Yellow_City_logo.png" 
            alt="Yellow City Logo" 
            style={{ width: '40px', height: '40px', objectFit: 'contain' }} 
          />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ 
              fontFamily: 'var(--font-title)', 
              fontSize: '1.25rem', 
              color: 'var(--text-primary)',
              letterSpacing: '-0.02em',
              lineHeight: '1.1'
            }}>
              YELLOW CITY
            </span>
            <span className="font-technical" style={{ fontSize: '0.6rem', color: 'var(--text-muted)' }}>
              FACILITY SERVICES
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav 
          style={{ 
            display: 'none', 
            alignItems: 'stretch' 
          }}
          className="desktop-nav-container"
        >
          <ul style={{ display: 'flex', listStyle: 'none', height: '100%' }}>
            {navLinks.map((link) => (
              <li 
                key={link.name}
                style={{ 
                  display: 'flex', 
                  alignItems: 'stretch', 
                  borderRight: '1px solid var(--grid-line)' 
                }}
              >
                <a 
                  href={link.href}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '0 2.5rem',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.85rem',
                    textTransform: 'uppercase',
                    color: 'var(--text-primary)',
                    fontWeight: 500,
                    transition: 'all 0.3s ease',
                    position: 'relative'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--brand-blue)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--text-primary)';
                  }}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact CTA Button (Desktop) */}
        <div 
          style={{ 
            display: 'none', 
            alignItems: 'center', 
            borderLeft: '1px solid var(--grid-line)',
            paddingLeft: '2rem'
          }}
          className="desktop-cta-container"
        >
          <a href="#contact" className="btn-draft btn-draft-accent">
            <span>Get Quote</span>
          </a>
        </div>

        {/* Hamburger Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '6px',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            padding: '10px',
            alignSelf: 'center',
            zIndex: 110,
          }}
          className="mobile-menu-toggle"
          aria-label="Toggle Menu"
        >
          <span 
            style={{
              width: '24px',
              height: '2px',
              backgroundColor: 'var(--text-primary)',
              transform: mobileMenuOpen ? 'rotate(45deg) translate(5px, 6px)' : 'none',
              transition: 'transform 0.3s ease'
            }}
          />
          <span 
            style={{
              width: '18px',
              height: '2px',
              backgroundColor: 'var(--text-primary)',
              opacity: mobileMenuOpen ? '0' : '1',
              alignSelf: 'flex-end',
              transition: 'opacity 0.2s ease'
            }}
          />
          <span 
            style={{
              width: '24px',
              height: '2px',
              backgroundColor: 'var(--text-primary)',
              transform: mobileMenuOpen ? 'rotate(-45deg) translate(5px, -6px)' : 'none',
              transition: 'transform 0.3s ease'
            }}
          />
        </button>
      </div>

      {/* CSS overrides for desktop responsive layouts */}
      <style>{`
        @media (min-width: 992px) {
          .desktop-nav-container { display: flex !important; }
          .desktop-cta-container { display: flex !important; }
          .mobile-menu-toggle { display: none !important; }
        }
      `}</style>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100vh',
              backgroundColor: 'var(--bg-deep)',
              zIndex: 99,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              padding: '2rem',
              backgroundImage: 'linear-gradient(to bottom, var(--bg-deep), var(--bg-panel))',
              borderBottom: '1px solid var(--grid-line)'
            }}
          >
            <div style={{ position: 'absolute', left: '15%', top: 0, bottom: 0, width: '1px', backgroundColor: 'var(--grid-line)', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', left: '85%', top: 0, bottom: 0, width: '1px', backgroundColor: 'var(--grid-line)', pointerEvents: 'none' }} />

            <div 
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '2rem',
                maxWidth: '600px',
                margin: '0 auto',
                width: '100%',
                zIndex: 2
              }}
            >
              <div className="font-technical" style={{ marginBottom: '-1rem' }}>Menu</div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {navLinks.map((link, idx) => (
                  <motion.li 
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.08 }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      style={{
                        fontFamily: 'var(--font-title)',
                        fontSize: '2rem',
                        textTransform: 'uppercase',
                        color: 'var(--text-primary)',
                        display: 'flex',
                        alignItems: 'baseline',
                        gap: '12px'
                      }}
                    >
                      <span className="font-technical" style={{ fontSize: '0.8rem', color: 'var(--brand-blue)' }}>
                        0{idx + 1}
                      </span>
                      <span>{link.name}</span>
                    </a>
                  </motion.li>
                ))}
              </ul>
              
              <div style={{ width: '100%', height: '1px', backgroundColor: 'var(--grid-line)', margin: '1rem 0' }} />
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
              >
                <a 
                  href="#contact" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="btn-draft btn-draft-accent"
                  style={{ justifyContent: 'center' }}
                >
                  Request Proposal
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
