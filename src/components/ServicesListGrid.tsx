import React from 'react';
import { motion } from 'framer-motion';

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  icon: string;
  image: string;
  features: string[];
}

export const ALL_SERVICES: ServiceItem[] = [
  {
    id: 'cleaning-services',
    number: '01',
    title: 'Professional Cleaning Services',
    category: 'Cleaning Division',
    description: 'Comprehensive specialized cleaning solutions covering residential homes, corporate offices, industrial floors, water storage tanks, high-rise glass, tiles & marble restoration, and exterior name boards.',
    icon: '✨',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80',
    features: [
      'Home cleaning',
      'Office cleaning',
      'Floor Cleaning',
      'Commercial place cleaning',
      'Water tank cleaning',
      'Glass cleaning',
      'Tiles & Marbles & mosaic cleaning',
      'Name board cleaning'
    ]
  },
  {
    id: 'housekeeping-services',
    number: '02',
    title: 'Housekeeping & Facility Maintenance',
    category: 'Housekeeping Division',
    description: 'Full-time operational housekeeping staff and continuous facility upkeep customized for commercial complexes, healthcare hospitals, and educational institutions.',
    icon: '🧹',
    image: 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&w=800&q=80',
    features: [
      'Commercial place Maintenance',
      'Hospitals cleaning maintenance',
      'Schools cleaning maintenance'
    ]
  }
];

interface ServicesListGridProps {
  onSelectService?: (serviceId: string) => void;
}

const ServicesListGrid: React.FC<ServicesListGridProps> = ({ onSelectService }) => {
  return (
    <section 
      id="services-list"
      style={{
        padding: '6rem 0',
        backgroundColor: 'var(--bg-deep)',
        borderBottom: '2px solid var(--text-primary)',
        position: 'relative'
      }}
    >
      <div className="main-wrapper">
        {/* Section Header */}
        <div 
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
            marginBottom: '4rem',
            alignItems: 'flex-start'
          }}
        >
          <div 
            style={{
              backgroundColor: 'var(--text-primary)',
              color: 'var(--bg-deep)',
              padding: '6px 14px',
              width: 'fit-content'
            }}
          >
            <span className="font-technical" style={{ color: '#FFD54F', fontWeight: 800 }}>SPECIALIZED CLEANING & HOUSEKEEPING DIRECTORY</span>
          </div>

          <h2 
            style={{ 
              fontSize: 'var(--font-size-section)',
              color: 'var(--text-primary)',
              fontWeight: 900,
              letterSpacing: '-0.02em',
              margin: 0
            }}
          >
            CLEANING & HOUSEKEEPING SOLUTIONS <br />
            <span style={{ color: 'var(--brand-blue)' }}>YELLOW CITY PRIVATE LIMITED</span>
          </h2>

          <p style={{ maxWidth: '850px', fontSize: '1.15rem', color: 'var(--text-primary)', fontWeight: 700 }}>
            Dedicated cleaning and housekeeping services tailored for commercial establishments, homes, offices, hospitals, and schools. Powered by trained personnel and anti-bacterial equipment.
          </p>
        </div>

        {/* Services List Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
            gap: '2.5rem'
          }}
        >
          {ALL_SERVICES.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="service-list-card"
            >
              <div>
                <div 
                  className="service-header-row"
                  style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    marginBottom: '1.25rem',
                    borderBottom: '1px solid var(--grid-line)',
                    paddingBottom: '0.75rem'
                  }}
                >
                  <span className="service-icon" style={{ fontSize: '2rem' }}>{service.icon}</span>
                  <span className="font-technical service-number" style={{ fontWeight: 800, color: 'var(--brand-blue)', fontSize: '0.9rem' }}>
                    SERVICE {service.number}
                  </span>
                </div>

                <div className="font-technical service-category" style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.5rem', fontWeight: 800 }}>
                  {service.category}
                </div>

                <h3 
                  className="service-title"
                  style={{ 
                    fontFamily: 'var(--font-mono)',
                    fontSize: '1.15rem', 
                    color: 'var(--text-primary)', 
                    fontWeight: 800,
                    marginBottom: '0.85rem',
                    lineHeight: '1.3',
                    letterSpacing: '-0.01em',
                    wordBreak: 'normal'
                  }}
                >
                  {service.title}
                </h3>

                <p 
                  className="service-desc"
                  style={{ 
                    fontSize: '0.95rem', 
                    color: 'var(--text-primary)', 
                    fontWeight: 700,
                    marginBottom: '1.5rem',
                    lineHeight: '1.5'
                  }}
                >
                  {service.description}
                </p>

                {/* Service Features Tag List */}
                <div className="service-tags" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                  {service.features.map((feat) => (
                    <span 
                      key={feat} 
                      className="service-tag"
                      style={{ 
                        fontSize: '0.75rem', 
                        backgroundColor: 'var(--bg-deep)', 
                        color: 'var(--text-primary)', 
                        padding: '4px 10px',
                        border: '1px solid var(--text-primary)',
                        fontWeight: 800
                      }}
                    >
                      ✓ {feat}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onSelectService && onSelectService(service.id)}
                className="btn-draft btn-draft-accent"
                style={{ 
                  width: '100%', 
                  justifyContent: 'center', 
                  fontWeight: 800,
                  fontSize: '0.8rem',
                  padding: '0.75rem'
                }}
              >
                <span>Request Service Quote</span>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesListGrid;
