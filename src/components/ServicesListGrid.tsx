import React from 'react';
import { motion } from 'framer-motion';

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  icon: string;
  features: string[];
}

export const ALL_SERVICES: ServiceItem[] = [
  {
    id: 'security-services',
    number: '01',
    title: 'Professional Security Services',
    category: 'Protection & Surveillance',
    description: 'Vetted, uniformed security officers, gate control experts, and automated surveillance teams protecting commercial complexes and residential communities.',
    icon: '🛡️',
    features: ['Armed & Unarmed Guarding', '24/7 Access Control', 'CCTV Monitoring', 'Visitor Log Management']
  },
  {
    id: 'housekeeping-services',
    number: '02',
    title: 'Hospitality Housekeeping',
    category: 'Sanitation & Hygiene',
    description: 'Hospitality-grade housekeeping staff delivering daily cleaning, floor care, hygiene maintenance, and continuous facility upkeep.',
    icon: '🧹',
    features: ['Daily Janitorial Care', 'Floor Scrubbing & Polishing', 'Restroom Sanitization', 'Eco-friendly Chemicals']
  },
  {
    id: 'corporate-staffing',
    number: '03',
    title: 'Corporate Office Staffing',
    category: 'Manpower Solutions',
    description: 'Deputing office boys, reception attendants, pantry managers, and administrative support personnel to streamline daily office operations.',
    icon: '👔',
    features: ['Pantry & Hospitality Attendants', 'Front Desk Receptionists', 'Office Helpers', 'Document Management']
  },
  {
    id: 'hvac-maintenance',
    number: '04',
    title: 'Electrical & HVAC Maintenance',
    category: 'Technical MEP Services',
    description: 'Certified electro-mechanical technicians managing HVAC systems, power backups, electrical distribution, and plumbing infrastructure.',
    icon: '⚡',
    features: ['HVAC & Chiller Operations', 'Generator Maintenance', 'Electrical Audits', 'Plumbing & Drainage']
  },
  {
    id: 'deep-cleaning',
    number: '05',
    title: 'Deep Cleaning & Sanitation',
    category: 'Specialized Cleaning',
    description: 'Comprehensive deep cleaning for corporate floors, industrial spaces, move-in/move-out premises, and high-rise glass facade washing.',
    icon: '✨',
    features: ['Upholstery & Carpet Shampooing', 'Glass Facade Cleaning', 'Post-Construction Cleanup', 'Disinfection Services']
  },
  {
    id: 'waste-management',
    number: '06',
    title: 'Waste Management & Recycling',
    category: 'Environmental Care',
    description: 'Systematic waste segregation, eco-friendly disposal, composting setup, and compliance-certified hazardous waste handling.',
    icon: '♻️',
    features: ['Solid Waste Segregation', 'Composting Solutions', 'Recycling Logistics', 'Statutory Compliance']
  },
  {
    id: 'private-investigations',
    number: '07',
    title: 'Private Corporate Investigations',
    category: 'Corporate Intelligence',
    description: 'Confidential background verification, corporate asset surveillance, fraud prevention, and discreet risk assessment services.',
    icon: '🔍',
    features: ['Employee Background Check', 'Corporate Asset Audit', 'Discreet Surveillance', 'Risk Mitigations']
  },
  {
    id: 'event-security',
    number: '08',
    title: 'Event Security & Bouncers',
    category: 'Crowd & VIP Protection',
    description: 'Specialized security bouncers and crowd management teams tailored for high-profile corporate summits, expos, and private events.',
    icon: '🔒',
    features: ['VIP Escort & Protection', 'Crowd Flow Control', 'Valet & Parking Patrol', 'Emergency Evacuation']
  },
  {
    id: 'pest-control',
    number: '09',
    title: 'Pest Control & Disinfection',
    category: 'Property Protection',
    description: 'Advanced pest management treatments removing termites, rodents, mosquitoes, and pests using non-toxic odor-free chemicals.',
    icon: '🦟',
    features: ['Termite Proofing', 'Rodent Control', 'Mosquito Fogging', 'Herbal Disinfection']
  },
  {
    id: 'facility-supervision',
    number: '10',
    title: 'Facility Operations Supervision',
    category: 'Complete Management',
    description: 'Dedicated site managers coordinating all facility workforce teams, compliance, shift scheduling, and client feedback tracking.',
    icon: '🏢',
    features: ['On-site Site Managers', 'Daily Shift Reports', 'Vendor Management', 'SLA Adherence Tracking']
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
            gap: '1rem',
            marginBottom: '4rem',
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
              width: 'fit-content'
            }}
          >
            <span className="font-technical" style={{ color: '#FFD54F', fontWeight: 800 }}>COMPLETE SERVICE DIRECTORY</span>
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
            ALL SERVICES OFFERED BY <br />
            <span style={{ color: 'var(--brand-blue)' }}>YELLOW CITY PRIVATE LIMITED</span>
          </h2>

          <p style={{ maxWidth: '750px', fontSize: '1.15rem', color: 'var(--text-primary)', fontWeight: 700 }}>
            Right on our home portal: Browse our full range of 10+ integrated facility management services. Every service is backed by trained personnel, rigorous quality control, and 12,000+ satisfied clients.
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
