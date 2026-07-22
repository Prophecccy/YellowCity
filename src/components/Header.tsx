import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  currentPage?: string;
  onNavigate?: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage = 'home', onNavigate }) => {
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
    { name: 'Home', id: 'home', href: '#home' },
    { name: 'Services', id: 'services', href: '#services' },
    { name: 'Gallery', id: 'gallery', href: '#gallery' },
    { name: 'About', id: 'about', href: '#about' },
    { name: 'Contact Us', id: 'contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(id);
    }
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 100,
        backgroundColor: scrolled ? 'rgba(255, 193, 7, 0.95)' : 'var(--bg-deep)',
        backdropFilter: 'blur(15px)',
        borderBottom: 'none',
        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      <div 
        className="main-wrapper"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: scrolled ? '75px' : '95px',
          transition: 'height 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        {/* Brand Logo & Name */}
        <a 
          href="#home" 
          onClick={(e) => handleLinkClick(e, 'home')}
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '12px',
            paddingRight: '1rem'
          }}
        >
          <img 
            src="/Yellow_City_logo.png" 
            alt="Yellow City Logo" 
            style={{ width: '45px', height: '45px', objectFit: 'contain' }} 
          />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ 
              fontFamily: 'var(--font-title)', 
              fontSize: '1.3rem', 
              color: 'var(--text-primary)',
              letterSpacing: '-0.02em',
              lineHeight: '1.1',
              fontWeight: 800
            }}>
              YELLOW CITY
            </span>
            <span style={{ fontSize: '0.65rem', color: 'var(--text-primary)', fontWeight: 800, letterSpacing: '0.02em' }}>
              Yellow City Private Limited
            </span>
            <span className="font-technical" style={{ fontSize: '0.6rem', color: 'var(--text-muted)', fontWeight: 700 }}>
              Facility Management Service
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links - Rounded Pills */}
        <nav 
          style={{ 
            display: 'none', 
            alignItems: 'center'
          }}
          className="desktop-nav-container"
        >
          <ul style={{ display: 'flex', listStyle: 'none', gap: '0.5rem', alignItems: 'center' }}>
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <li key={link.name} style={{ display: 'flex', alignItems: 'center' }}>
                  <a 
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.id)}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '0.55rem 1.35rem',
                      borderRadius: '9999px',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.85rem',
                      textTransform: 'uppercase',
                      color: isActive ? '#FFD54F' : 'var(--text-primary)',
                      backgroundColor: isActive ? 'var(--text-primary)' : 'transparent',
                      border: isActive ? '2px solid var(--text-primary)' : '2px solid transparent',
                      boxShadow: isActive ? '0 4px 14px rgba(0, 29, 74, 0.25)' : 'none',
                      fontWeight: 800,
                      transition: 'all 0.3s ease',
                      position: 'relative'
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.backgroundColor = 'rgba(0, 29, 74, 0.08)';
                        e.currentTarget.style.border = '2px solid var(--text-primary)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.backgroundColor = 'transparent';
                        e.currentTarget.style.border = '2px solid transparent';
                      }
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Contact CTA Button (Desktop) - Rounded Pill */}
        <div 
          style={{ 
            display: 'none', 
            alignItems: 'center',
            paddingLeft: '1rem'
          }}
          className="desktop-cta-container"
        >
          <a 
            href="#contact" 
            onClick={(e) => handleLinkClick(e, 'contact')}
            className="btn-draft btn-draft-accent"
            style={{ fontWeight: 800, borderRadius: '9999px' }}
          >
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
              height: '3px',
              backgroundColor: 'var(--text-primary)',
              transform: mobileMenuOpen ? 'rotate(45deg) translate(5px, 6px)' : 'none',
              transition: 'transform 0.3s ease'
            }}
          />
          <span 
            style={{
              width: '18px',
              height: '3px',
              backgroundColor: 'var(--text-primary)',
              opacity: mobileMenuOpen ? '0' : '1',
              alignSelf: 'flex-end',
              transition: 'opacity 0.2s ease'
            }}
          />
          <span 
            style={{
              width: '24px',
              height: '3px',
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
              borderBottom: '2px solid var(--text-primary)'
            }}
          >
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
              <div className="font-technical" style={{ fontWeight: 800 }}>Yellow City Navigation</div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {navLinks.map((link, idx) => (
                  <motion.li 
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.08 }}
                  >
                    <a
                      href={link.href}
                      onClick={(e) => {
                        handleLinkClick(e, link.id);
                        setMobileMenuOpen(false);
                      }}
                      style={{
                        fontFamily: 'var(--font-title)',
                        fontSize: '1.75rem',
                        textTransform: 'uppercase',
                        color: 'var(--text-primary)',
                        display: 'flex',
                        alignItems: 'baseline',
                        gap: '12px',
                        fontWeight: 800
                      }}
                    >
                      <span className="font-technical" style={{ fontSize: '0.8rem', color: 'var(--brand-blue)', fontWeight: 800 }}>
                        0{idx + 1}
                      </span>
                      <span>{link.name}</span>
                    </a>
                  </motion.li>
                ))}
              </ul>
              
              <div style={{ width: '100%', height: '2px', backgroundColor: 'var(--text-primary)', margin: '1rem 0' }} />
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
              >
                <a 
                  href="#contact" 
                  onClick={(e) => {
                    handleLinkClick(e, 'contact');
                    setMobileMenuOpen(false);
                  }}
                  className="btn-draft btn-draft-accent"
                  style={{ justifyContent: 'center', fontWeight: 800 }}
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
