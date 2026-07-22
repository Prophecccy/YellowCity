import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface GalleryItem {
  id: string;
  title: string;
  category: 'Security' | 'Housekeeping' | 'Facilities' | 'Corporate';
  image: string;
  location: string;
  description: string;
}

const GALLERY_DATA: GalleryItem[] = [
  {
    id: '1',
    title: '24/7 Corporate Guarding Force',
    category: 'Security',
    image: '/assets/service_security.png',
    location: 'IT Park, Chennai',
    description: 'Vetted uniformed security personnel carrying out round-the-clock perimeter surveillance and access control.'
  },
  {
    id: '2',
    title: 'Hospitality Housekeeping Operations',
    category: 'Housekeeping',
    image: '/assets/service_housekeeping.png',
    location: 'Commercial Tower, Coimbatore',
    description: 'Hospitality-grade daily janitorial and sanitization operations for executive office spaces.'
  },
  {
    id: '3',
    title: 'Corporate Investigation & Risk Management',
    category: 'Corporate',
    image: '/assets/service_detective.png',
    location: 'Financial Hub, Madurai',
    description: 'Discreet background verification and corporate risk surveillance carried out by senior operatives.'
  },
  {
    id: '4',
    title: 'Deep Sanitation & Upholstery Cleaning',
    category: 'Housekeeping',
    image: '/assets/service_cleaning.png',
    location: 'Tech Campus, Salem',
    description: 'Heavy-duty machine scrubbing and chemical disinfection of high-traffic commercial flooring.'
  },
  {
    id: '5',
    title: 'Industrial MEP & HVAC System Audits',
    category: 'Facilities',
    image: '/assets/hero_bg.png',
    location: 'Manufacturing Hub, Tiruchirappalli',
    description: 'Electro-mechanical technicians maintaining central air conditioning, power backup, and plumbing networks.'
  },
  {
    id: '6',
    title: 'Event Security & VIP Escort Bouncers',
    category: 'Security',
    image: '/assets/service_security.png',
    location: 'Convention Center, Chennai',
    description: 'Tactical security bouncers managing crowd entry, VIP movement, and event parking flow.'
  }
];

const Gallery: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('All');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const categories = ['All', 'Security', 'Housekeeping', 'Facilities', 'Corporate'];

  const filteredItems = activeTab === 'All'
    ? GALLERY_DATA
    : GALLERY_DATA.filter(item => item.category === activeTab);

  return (
    <section 
      id="gallery"
      style={{ 
        paddingTop: '130px', 
        paddingBottom: '80px',
        backgroundColor: 'var(--bg-deep)',
        minHeight: '100vh'
      }}
    >
      <div className="main-wrapper">
        {/* Page Header */}
        <div 
          style={{ 
            marginBottom: '3rem',
            borderBottom: '2px solid var(--text-primary)',
            paddingBottom: '2rem'
          }}
        >
          <div 
            style={{ 
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: 'var(--text-primary)',
              color: 'var(--bg-deep)',
              padding: '6px 14px',
              marginBottom: '1rem'
            }}
          >
            <span className="font-technical" style={{ color: '#FFD54F', fontWeight: 800 }}>VISUAL SHOWCASE</span>
          </div>

          <h1 
            style={{ 
              fontSize: 'var(--font-size-section)', 
              color: 'var(--text-primary)',
              fontWeight: 900,
              letterSpacing: '-0.02em',
              marginBottom: '1rem'
            }}
          >
            YELLOW CITY <span style={{ color: 'var(--brand-blue)' }}>OPERATIONS GALLERY</span>
          </h1>

          <p style={{ maxWidth: '800px', fontSize: '1.15rem', color: 'var(--text-primary)', fontWeight: 700 }}>
            Visual proof of our facility management teams in action across 12,000+ satisfied clients. Explore security deployments, housekeeping excellence, deep cleaning, and corporate facility management.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div 
          className="gallery-tabs-scroller"
          style={{ 
            display: 'flex', 
            gap: '1rem', 
            flexWrap: 'wrap',
            marginBottom: '3rem'
          }}
        >
          {categories.map(cat => {
            const isActive = activeTab === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                style={{
                  padding: '0.65rem 1.5rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.85rem',
                  textTransform: 'uppercase',
                  fontWeight: 800,
                  color: isActive ? 'var(--bg-deep)' : 'var(--text-primary)',
                  backgroundColor: isActive ? 'var(--text-primary)' : 'transparent',
                  border: '2px solid var(--text-primary)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))',
            gap: '2.5rem'
          }}
        >
          {filteredItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.08 }}
              onClick={() => setSelectedImage(item)}
              className="gallery-card-compact"
              style={{
                backgroundColor: 'var(--bg-card)',
                border: '2px solid var(--text-primary)',
                boxShadow: '6px 6px 0px var(--text-primary)',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'transform 0.3s ease'
              }}
            >
              <div 
                className="gallery-img-area"
                style={{ 
                  height: '240px', 
                  overflow: 'hidden', 
                  position: 'relative',
                  borderBottom: '2px solid var(--text-primary)',
                  backgroundColor: '#FFB300',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <span 
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.9rem',
                    color: 'var(--text-primary)',
                    letterSpacing: '0.1em',
                    fontWeight: 800
                  }}
                >
                  image
                </span>
                <div 
                  className="gallery-category-badge"
                  style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    backgroundColor: 'var(--text-primary)',
                    color: '#FFD54F',
                    padding: '4px 10px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    fontWeight: 800
                  }}
                >
                  {item.category}
                </div>
              </div>

              <div className="gallery-info-area" style={{ padding: '1.5rem' }}>
                <div className="font-technical gallery-location-tag" style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.5rem', fontWeight: 800 }}>
                  📍 {item.location}
                </div>
                <h3 className="gallery-title" style={{ fontSize: '1.25rem', color: 'var(--text-primary)', fontWeight: 800, marginBottom: '0.5rem', lineHeight: '1.3' }}>
                  {item.title}
                </h3>
                <p className="gallery-desc" style={{ fontSize: '0.9rem', color: 'var(--text-primary)', fontWeight: 700, lineHeight: '1.5', margin: 0 }}>
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            onClick={() => setSelectedImage(null)}
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(0, 29, 74, 0.85)',
              zIndex: 1000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '2rem'
            }}
          >
            <div
              onClick={e => e.stopPropagation()}
              style={{
                backgroundColor: 'var(--bg-deep)',
                border: '3px solid var(--text-primary)',
                maxWidth: '700px',
                width: '100%',
                padding: '2rem',
                boxShadow: '10px 10px 0px var(--text-primary)',
                position: 'relative'
              }}
            >
              <button
                onClick={() => setSelectedImage(null)}
                style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  background: 'var(--text-primary)',
                  color: 'var(--bg-deep)',
                  border: 'none',
                  fontSize: '1.25rem',
                  fontWeight: 800,
                  width: '36px',
                  height: '36px',
                  cursor: 'pointer'
                }}
              >
                ✕
              </button>
              <div 
                style={{ 
                  width: '100%', 
                  height: '350px', 
                  backgroundColor: '#FFB300', 
                  border: '2px solid var(--text-primary)', 
                  marginBottom: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <span 
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '1rem',
                    color: 'var(--text-primary)',
                    letterSpacing: '0.1em',
                    fontWeight: 900
                  }}
                >
                  image
                </span>
              </div>
              <span className="font-technical" style={{ fontWeight: 800, color: 'var(--brand-blue)' }}>{selectedImage.category} • {selectedImage.location}</span>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 900, marginTop: '0.5rem', color: 'var(--text-primary)' }}>{selectedImage.title}</h2>
              <p style={{ fontSize: '1rem', fontWeight: 700, marginTop: '0.5rem', color: 'var(--text-primary)' }}>{selectedImage.description}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
