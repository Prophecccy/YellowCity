import React, { useState } from 'react';
import { motion } from 'framer-motion';

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Security' | 'Housekeeping' | 'Cleaning & Staffing' | 'Detective Agency';
  image: string;
  location: string;
  description: string;
}

const GALLERY_DATA: GalleryItem[] = [
  // 01. SECURITY SERVICES
  {
    id: 'sec-1',
    title: 'Armed & Unarmed Guarding',
    category: 'Security',
    image: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80',
    location: 'IT Park, Chennai',
    description: 'Vetted uniformed security officers carrying out physical guarding and gate duty.'
  },
  {
    id: 'sec-2',
    title: '24/7 Access Control',
    category: 'Security',
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80',
    location: 'Tech Tower, Coimbatore',
    description: 'Round-the-clock entry gate management, biometric badge checks, and perimeter logging.'
  },
  {
    id: 'sec-3',
    title: 'CCTV Monitoring',
    category: 'Security',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80',
    location: 'Financial Hub, Madurai',
    description: 'High-definition video surveillance command desk actively scanning corporate premises.'
  },
  {
    id: 'sec-4',
    title: 'Visitor Log Management',
    category: 'Security',
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80',
    location: 'Commercial Complex, Salem',
    description: 'Digital check-in visitor validation, guest badge issuance, and parking space guidance.'
  },

  // 02. HOUSEKEEPING SERVICES
  {
    id: 'hk-1',
    title: 'Daily Janitorial Care',
    category: 'Housekeeping',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80',
    location: 'Corporate HQ, Chennai',
    description: 'Continuous daily janitorial cleaning, waste bin clearing, and workstation surface care.'
  },
  {
    id: 'hk-2',
    title: 'Floor Scrubbing & Polishing',
    category: 'Housekeeping',
    image: 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&w=800&q=80',
    location: 'Industrial Park, Tiruchirappalli',
    description: 'Heavy-duty mechanized scrubbing, granite crystallization, and diamond pad floor polishing.'
  },
  {
    id: 'hk-3',
    title: 'Restroom Sanitization',
    category: 'Housekeeping',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
    location: 'IT Expressway, Chennai',
    description: 'Hospitality-grade washroom hygiene maintenance and anti-microbial disinfection.'
  },
  {
    id: 'hk-4',
    title: 'Eco-friendly Chemicals',
    category: 'Housekeeping',
    image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=800&q=80',
    location: 'Green Tech Hub, Coimbatore',
    description: 'Non-toxic, bio-degradable cleaning agents protecting indoor air quality and employee health.'
  },

  // 03. CLEANING & STAFFING SERVICES
  {
    id: 'cs-1',
    title: 'Pantry & Hospitality Attendants',
    category: 'Cleaning & Staffing',
    image: 'https://images.unsplash.com/photo-1577412647305-991150c7d163?auto=format&fit=crop&w=800&q=80',
    location: 'Executive Suite, Madurai',
    description: 'Professional pantry stewards handling executive refreshment service and kitchen upkeep.'
  },
  {
    id: 'cs-2',
    title: 'Front Desk Receptionists',
    category: 'Cleaning & Staffing',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    location: 'Business Bay, Chennai',
    description: 'Courteous front-office reception staff managing visitor welcome, call routing, and mail handling.'
  },
  {
    id: 'cs-3',
    title: 'Office Helpers',
    category: 'Cleaning & Staffing',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
    location: 'Corporate Center, Salem',
    description: 'Deputed office boys facilitating meeting room setups, file movements, and errand assistance.'
  },
  {
    id: 'cs-4',
    title: 'Document Management',
    category: 'Cleaning & Staffing',
    image: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&w=800&q=80',
    location: 'Legal Hub, Coimbatore',
    description: 'Systematic physical file indexing, record dispatching, and confidential paper shredding.'
  },

  // 04. DETECTIVE AGENCY & RISK MANAGEMENT
  {
    id: 'det-1',
    title: 'Employee Background Check',
    category: 'Detective Agency',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
    location: 'Financial Tower, Chennai',
    description: 'Comprehensive employment history, education, and criminal record verification.'
  },
  {
    id: 'det-2',
    title: 'Corporate Asset Audit',
    category: 'Detective Agency',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    location: 'Manufacturing Hub, Hosur',
    description: 'Investigative asset tracking, inventory leakage audit, and intellectual property protection.'
  },
  {
    id: 'det-3',
    title: 'Discreet Surveillance',
    category: 'Detective Agency',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80',
    location: 'Trade Center, Madurai',
    description: 'Low-profile field observation, undercover intelligence gathering, and video logging.'
  },
  {
    id: 'det-4',
    title: 'Risk Mitigations',
    category: 'Detective Agency',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
    location: 'Corporate HQ, Coimbatore',
    description: 'Executive threat assessment, security vulnerability audit, and fraud prevention strategies.'
  }
];

const SERVICE_SECTIONS = [
  {
    category: 'Security',
    title: '01. PROFESSIONAL SECURITY SERVICES',
    description: '4 Key Security & Surveillance Operational Deployments'
  },
  {
    category: 'Housekeeping',
    title: '02. HOSPITALITY HOUSEKEEPING',
    description: '4 Core Janitorial & Hygiene Maintenance Operations'
  },
  {
    category: 'Cleaning & Staffing',
    title: '03. CORPORATE OFFICE STAFFING',
    description: '4 Dedicated Manpower & Administrative Support Solutions'
  },
  {
    category: 'Detective Agency',
    title: '04. DETECTIVE & RISK MANAGEMENT AGENCY',
    description: '4 Corporate Intelligence & Background Verification Operations'
  }
];

const Gallery: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('All');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const categories = ['All', 'Security', 'Housekeeping', 'Cleaning & Staffing', 'Detective Agency'];

  const visibleSections = activeTab === 'All'
    ? SERVICE_SECTIONS
    : SERVICE_SECTIONS.filter(sec => sec.category === activeTab);

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
            <span className="font-technical" style={{ color: '#FFD54F', fontWeight: 800 }}>OPERATIONS GALLERY</span>
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
            4 MAIN SERVICES <span style={{ color: 'var(--brand-blue)' }}>OPERATIONAL SHOWCASE</span>
          </h1>

          <p style={{ maxWidth: '850px', fontSize: '1.15rem', color: 'var(--text-primary)', fontWeight: 700 }}>
            Visual proof of our 4 main service pillars in action across 12,000+ satisfied clients. Explore operations under Professional Security, Hospitality Housekeeping, Corporate Staffing, and Detective Agency.
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

        {/* Render 4 Main Service Sections */}
        {visibleSections.map(sec => {
          const sectionItems = GALLERY_DATA.filter(item => item.category === sec.category);

          return (
            <div key={sec.category} style={{ marginBottom: '4rem' }}>
              {/* Section Header Banner */}
              <div 
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'baseline',
                  borderBottom: '2px solid var(--text-primary)',
                  paddingBottom: '0.75rem',
                  marginBottom: '2rem',
                  flexWrap: 'wrap',
                  gap: '1rem'
                }}
              >
                <div>
                  <h2 
                    style={{ 
                      fontSize: '1.4rem', 
                      fontFamily: 'var(--font-title)', 
                      fontWeight: 900, 
                      color: 'var(--text-primary)',
                      margin: 0
                    }}
                  >
                    {sec.title}
                  </h2>
                  <div className="font-technical" style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 800, marginTop: '0.2rem' }}>
                    {sec.description}
                  </div>
                </div>
                <div 
                  style={{
                    backgroundColor: 'var(--text-primary)',
                    color: '#FFD54F',
                    padding: '4px 12px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    fontWeight: 800
                  }}
                >
                  4 SERVICES
                </div>
              </div>

              {/* 4 Cards Grid */}
              <div 
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
                  gap: '2rem'
                }}
              >
                {sectionItems.map((item, idx) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08 }}
                    onClick={() => setSelectedImage(item)}
                    className="gallery-card-compact"
                    style={{
                      backgroundColor: 'var(--bg-card)',
                      border: '2px solid var(--text-primary)',
                      boxShadow: '5px 5px 0px var(--text-primary)',
                      overflow: 'hidden',
                      cursor: 'pointer',
                      transition: 'transform 0.3s ease'
                    }}
                  >
                    <div 
                      className="gallery-img-area"
                      style={{ 
                        height: '210px', 
                        overflow: 'hidden', 
                        position: 'relative',
                        borderBottom: '2px solid var(--text-primary)',
                        backgroundColor: 'var(--text-primary)'
                      }}
                    >
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'transform 0.5s ease'
                        }}
                      />
                      <div 
                        className="gallery-category-badge"
                        style={{
                          position: 'absolute',
                          top: '10px',
                          right: '10px',
                          backgroundColor: '#FFD54F',
                          color: 'var(--text-primary)',
                          padding: '3px 8px',
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.7rem',
                          fontWeight: 800,
                          zIndex: 2,
                          border: '1px solid var(--text-primary)'
                        }}
                      >
                        {item.category}
                      </div>
                    </div>

                    <div className="gallery-info-area" style={{ padding: '1.25rem' }}>
                      <div className="font-technical gallery-location-tag" style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.4rem', fontWeight: 800 }}>
                        📍 {item.location}
                      </div>
                      <h3 className="gallery-title" style={{ fontSize: '1.1rem', color: 'var(--text-primary)', fontWeight: 800, marginBottom: '0.5rem', lineHeight: '1.3' }}>
                        {item.title}
                      </h3>
                      <p className="gallery-desc" style={{ fontSize: '0.85rem', color: 'var(--text-primary)', fontWeight: 700, lineHeight: '1.4', margin: 0 }}>
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          );
        })}

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
                  cursor: 'pointer',
                  zIndex: 10
                }}
              >
                ✕
              </button>
              <div 
                style={{ 
                  width: '100%', 
                  height: '350px', 
                  overflow: 'hidden',
                  border: '2px solid var(--text-primary)', 
                  marginBottom: '1.5rem',
                  backgroundColor: 'var(--text-primary)'
                }}
              >
                <img 
                  src={selectedImage.image} 
                  alt={selectedImage.title} 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
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
