import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SecurityVisual, HousekeepingVisual, CleaningVisual, DetectiveVisual } from './ServiceVisual';

gsap.registerPlugin(ScrollTrigger);

interface ServiceSlide {
  num: string;
  title: string;
  description: string;
  specs: string;
  bullets: string[];
  image: string;
}

const ServicesCarousel: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const services: ServiceSlide[] = [
    {
      num: '01',
      title: 'Security Services',
      description: 'High-fidelity armed guarding, static security deployments, event protection, access control protocols, and executive transit intelligence. Built on compliance and rapid response command centers.',
      specs: '[UNIT: SEC_OPS // SERVICES_ACTIVE]',
      bullets: [
        'Tactical physical defense & armed units',
        '24/7 command room route-tracking dispatch',
        'Corporate estate asset monitoring & response'
      ],
      image: '/assets/service_security.png'
    },
    {
      num: '02',
      title: 'Housekeeping Services',
      description: 'Handcrafted corporate facility hospitality, workspace housekeeping, pantry hostess staff management, guest house operational coordination, and corporate concierge units.',
      specs: '[UNIT: HK_OPS // STANDARDS: premium_5S]',
      bullets: [
        'Corporate workspace management & setups',
        'Professional pantry hostess & stewards styling',
        'Guesthouse operations & executive cleaning'
      ],
      image: '/assets/service_housekeeping.png'
    },
    {
      num: '03',
      title: 'Cleaning Services',
      description: 'Industrial-grade deep sanitization, high-rise facade window restoration, carpet/upholstery crystallization, marble diamond polishing, and technical clean room maintenance.',
      specs: '[UNIT: CLEAN_OPS // BIO_HAZARD: GREEN_REF]',
      bullets: [
        'Heavy industrial deep cleaning & restoration',
        'Marble crystallization & diamond pad buffing',
        'Structural facade glass & high-rise cleaning'
      ],
      image: '/assets/service_cleaning.png'
    },
    {
      num: '04',
      title: 'Detective Agency',
      description: 'Elite corporate espionage prevention, background intelligence audits, asset tracing, matrimonial verification, active field surveillance, and fraud investigations.',
      specs: '[UNIT: DET_INTEL // LICENSE: PRIVATE_SEC_ACT]',
      bullets: [
        'Vendor audits & pre-employment tracing',
        'High-fidelity surveillance & photography logs',
        'Asset searches, theft reviews & court evidence'
      ],
      image: '/assets/service_detective.png'
    }
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 992);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    // ScrollTrigger pinning timeline for desktop
    const ctx = gsap.context(() => {
      const pinTrigger = ScrollTrigger.create({
        trigger: triggerRef.current,
        start: 'top top',
        end: '+=2500', // Scroll depth for pinning
        pin: true,
        scrub: true,
        onUpdate: (self) => {
          setScrollProgress(self.progress);
          
          // Map progress (0 to 1) to active index (0 to 3)
          const index = Math.floor(self.progress * 3.99);
          setActiveIndex(index);
        }
      });

      return () => {
        pinTrigger.kill();
      };
    }, triggerRef);

    return () => ctx.revert();
  }, [isMobile]);

  // Click handler to scroll the viewport to the corresponding section coordinate
  const handleTabClick = (idx: number) => {
    if (isMobile) {
      setActiveIndex(idx);
      return;
    }

    const trigger = ScrollTrigger.getAll().find(
      (t) => t.trigger === triggerRef.current
    );
    
    if (trigger) {
      const start = trigger.start;
      const end = trigger.end;
      const totalScroll = end - start;
      const targetScroll = start + (idx / 3) * totalScroll + 1; // plus 1px offset to anchor firmly
      
      // Use global Lenis scroll if available, fallback to window.scrollTo
      if ((window as any).lenis) {
        (window as any).lenis.scrollTo(targetScroll, { duration: 1.2 });
      } else {
        window.scrollTo({
          top: targetScroll,
          behavior: 'smooth'
        });
      }
    }
  };

  // Calculate slide progress relative to its segment (0.25 duration per slide)
  const getSlideProgress = (idx: number) => {
    if (isMobile) {
      return activeIndex === idx ? 100 : 0;
    }

    const start = idx * 0.25;
    const end = (idx + 1) * 0.25;

    if (scrollProgress <= start) return 0;
    if (scrollProgress >= end) return 100;
    
    return ((scrollProgress - start) / 0.25) * 100;
  };

  const renderAnimatedVisual = (idx: number) => {
    switch (idx) {
      case 0: return <SecurityVisual />;
      case 1: return <HousekeepingVisual />;
      case 2: return <CleaningVisual />;
      case 3: return <DetectiveVisual />;
      default: return null;
    }
  };

  return (
    <div 
      ref={triggerRef} 
      id="services"
      style={{
        position: 'relative',
        width: '100%',
        backgroundColor: 'var(--bg-deep)',
        borderBottom: '1px solid var(--grid-line)'
      }}
    >
      <div 
        ref={sectionRef}
        style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          minHeight: '100vh',
          width: '100%',
          position: 'relative',
          paddingTop: isMobile ? '6rem' : '0'
        }}
      >
        {/* Left column: Sidebar Navigation */}
        <div 
          className="services-sidebar border-grid-r"
          style={{
            width: isMobile ? '100%' : '32%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: isMobile ? '1.5rem 1rem' : '4rem 3rem',
            gap: '1.25rem',
            backgroundColor: 'var(--bg-panel)',
            zIndex: 10
          }}
        >
          <div className="font-technical" style={{ marginBottom: '1.5rem', color: 'var(--text-primary)', fontWeight: 600 }}>
            [SERVICES_MATRIX]
          </div>

          <div 
            style={{ 
              display: 'flex', 
              flexDirection: 'column',
              gap: '0.5rem',
              width: '100%'
            }}
            className="sidebar-tab-scroller"
          >
            {services.map((service, idx) => {
              const active = activeIndex === idx;
              const progress = getSlideProgress(idx);

              return (
                <button
                  key={service.num}
                  onClick={() => handleTabClick(idx)}
                  className={`sidebar-tab ${active ? 'active' : ''}`}
                  style={{
                    backgroundColor: active ? 'var(--bg-card)' : 'transparent',
                    border: '1px solid var(--grid-line)',
                    padding: '1.25rem',
                    textAlign: 'left',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.35rem',
                    width: '100%',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                    position: 'relative',
                    overflow: 'hidden',
                    boxShadow: active ? '0 4px 15px rgba(0,0,0,0.03)' : 'none'
                  }}
                >
                  {active && (
                    <div 
                      style={{
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        width: '4px',
                        height: '100%',
                        backgroundColor: 'var(--brand-yellow)'
                      }} 
                    />
                  )}

                  <div 
                    style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between',
                      alignItems: 'baseline',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      color: active ? 'var(--text-primary)' : 'var(--text-muted)',
                      fontWeight: active ? 'bold' : 'normal',
                      transition: 'color 0.3s'
                    }}
                  >
                    <span>SYS_0{service.num}</span>
                    <span style={{ fontSize: '0.65rem' }}>[{(progress / 100).toFixed(2)}]</span>
                  </div>

                  <span 
                    style={{ 
                      fontFamily: 'var(--font-title)', 
                      fontSize: '1.1rem',
                      textTransform: 'uppercase',
                      color: 'var(--text-primary)',
                      transition: 'color 0.3s'
                    }}
                  >
                    {service.title.split(' ')[0]}
                  </span>

                  {/* Timeline progress line */}
                  <div 
                    style={{ 
                      width: '100%', 
                      height: '3px', 
                      backgroundColor: 'var(--grid-line)', 
                      marginTop: '0.5rem',
                      position: 'relative'
                    }}
                  >
                    <div 
                      style={{
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        height: '100%',
                        width: `${progress}%`,
                        backgroundColor: 'var(--brand-yellow)',
                        transition: isMobile ? 'width 0.4s ease' : 'none'
                      }}
                    />
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right column: Slide details display */}
        <div 
          className="services-slides-wrapper"
          style={{
            width: isMobile ? '100%' : '68%',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: isMobile ? '1.5rem 1rem 4rem' : '4rem 5rem',
            overflow: 'hidden'
          }}
        >
          {/* Faint border frames inside slides wrapper */}
          <div style={{ position: 'absolute', left: '10%', top: 0, bottom: 0, width: '1px', backgroundColor: 'var(--grid-line)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', right: '10%', top: 0, bottom: 0, width: '1px', backgroundColor: 'var(--grid-line)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', top: '20%', left: 0, right: 0, height: '1px', backgroundColor: 'var(--grid-line)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', bottom: '20%', left: 0, right: 0, height: '1px', backgroundColor: 'var(--grid-line)', pointerEvents: 'none' }} />

          {services.map((service, idx) => {
            const active = activeIndex === idx;

            return (
              <div
                key={service.num}
                className={`service-slide ${active ? 'active' : ''}`}
                style={{
                  position: isMobile ? 'relative' : 'absolute',
                  inset: isMobile ? 'auto' : '0',
                  display: active ? 'flex' : (isMobile ? 'none' : 'flex'),
                  flexDirection: isMobile ? 'column' : 'row',
                  alignItems: 'center',
                  padding: isMobile ? '0' : '5rem',
                  gap: isMobile ? '1.5rem' : '3rem',
                  width: '100%',
                  boxSizing: 'border-box',
                  // Diffuse Transitions
                  opacity: active ? 1 : 0,
                  filter: active ? 'blur(0px)' : 'blur(20px)',
                  transform: active ? 'scale(1)' : 'scale(0.98)',
                  transition: 'opacity 0.75s ease, filter 0.75s ease, transform 0.75s cubic-bezier(0.16, 1, 0.3, 1)',
                  pointerEvents: active ? 'all' : 'none',
                  zIndex: active ? 5 : 1
                }}
              >
                {/* Left Text Segment */}
                <div style={{ flex: 1.2, display: 'flex', flexDirection: 'column', gap: '1.25rem', width: '100%' }}>
                  <div className="font-technical" style={{ fontWeight: 600 }}>
                    {service.specs}
                  </div>
                  
                  <h3 style={{ fontSize: 'var(--font-size-slide)', color: 'var(--text-primary)', lineHeight: '1' }}>
                    {service.title}
                  </h3>
                  
                  <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)' }}>
                    {service.description}
                  </p>

                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '1rem' }}>
                    {service.bullets.map((bullet, bIdx) => (
                      <li 
                        key={bIdx}
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.85rem',
                          color: 'var(--text-primary)',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px'
                        }}
                      >
                        <span style={{ color: 'var(--brand-yellow)', fontWeight: 'bold' }}>↳</span> {bullet}
                      </li>
                    ))}
                  </ul>

                  <a 
                    href="#contact" 
                    className="btn-draft btn-draft-accent" 
                    style={{ alignSelf: 'flex-start', marginTop: '1.5rem', width: isMobile ? '100%' : 'auto', justifyContent: 'center' }}
                  >
                    <span>{isMobile ? 'Get Proposal' : 'Get Operational Proposal'}</span>
                    <span className="font-technical" style={{ fontSize: '0.65rem', color: 'var(--text-primary)' }}>[0.02_{service.num}]</span>
                  </a>
                </div>

                {/* Right Segment: Graphic Panel containing Custom SVG Visuals */}
                <div 
                  style={{ 
                    flex: 0.8,
                    width: '100%',
                    position: 'relative',
                    aspectRatio: '1',
                    border: '1px solid var(--grid-line)',
                    padding: '12px',
                    backgroundColor: 'var(--bg-card)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 10px 40px rgba(0,0,0,0.03)'
                  }}
                >
                  {/* Layer custom animated SVG in the background/foreground */}
                  <div 
                    style={{ 
                      position: 'absolute', 
                      inset: 0, 
                      zIndex: 2, 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center' 
                    }}
                  >
                    {renderAnimatedVisual(idx)}
                  </div>

                  {/* Soft background illustration */}
                  <img
                    src={service.image}
                    alt={service.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      filter: 'grayscale(100%) opacity(12%) contrast(110%)',
                      mixBlendMode: 'luminosity',
                      pointerEvents: 'none',
                      zIndex: 1
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .sidebar-tab:hover {
          border-color: var(--text-primary) !important;
          background-color: var(--bg-card) !important;
        }
        .sidebar-tab.active {
          border-color: var(--text-primary) !important;
          box-shadow: 0 4px 15px rgba(0,0,0,0.03);
        }
        
        @media (max-width: 991px) {
          .sidebar-tab-scroller::-webkit-scrollbar {
            display: none;
          }
          .sidebar-tab-scroller {
            scrollbar-width: none;
          }
        }
      `}</style>
    </div>
  );
};

export default ServicesCarousel;
