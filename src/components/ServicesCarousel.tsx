import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// Services Carousel Component

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
      title: 'Cleaning Services',
      description: 'Professional cleaning solutions for homes, corporate offices, commercial places, water storage tanks, glass facades, tiles, marbles, mosaic floors, and name boards.',
      specs: 'Specialized Cleaning Division',
      bullets: [
        'Home, Office & Commercial Cleaning',
        'Water Tank & High-Rise Glass Washing',
        'Tiles, Marbles & Mosaic Scrubbing & Polishing'
      ],
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80'
    },
    {
      num: '02',
      title: 'Housekeeping Services',
      description: 'Dedicated operational housekeeping staff and continuous facility upkeep customized for commercial complexes, healthcare hospitals, and educational institutions.',
      specs: 'Housekeeping & Facility Division',
      bullets: [
        'Commercial Place Cleaning & Maintenance',
        'Hospital Hygiene & Sanitization Maintenance',
        'School Campus Facility Maintenance'
      ],
      image: 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&w=800&q=80'
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
        end: '+=1200', // Scroll depth tuned for 2 service slides
        pin: true,
        scrub: true,
        onUpdate: (self) => {
          setScrollProgress(self.progress);
          
          // Map progress (0 to 1) to active index (0 to 1)
          const numServices = services.length;
          const index = Math.min(Math.floor(self.progress * numServices), numServices - 1);
          setActiveIndex(index);
        }
      });

      return () => {
        pinTrigger.kill();
      };
    }, triggerRef);

    return () => ctx.revert();
  }, [isMobile, services.length]);

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
      const numServices = services.length;
      const stepFraction = numServices > 1 ? 1 / (numServices - 1) : 0;
      const targetScroll = start + idx * stepFraction * totalScroll + 1;
      
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

  // Calculate slide progress relative to its segment
  const getSlideProgress = (idx: number) => {
    if (isMobile) {
      return activeIndex === idx ? 100 : 0;
    }

    const numServices = services.length;
    const stepFraction = 1 / numServices;
    const start = idx * stepFraction;
    const end = (idx + 1) * stepFraction;

    if (scrollProgress <= start) return 0;
    if (scrollProgress >= end) return 100;
    
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
            Our Services
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
                        backgroundColor: 'var(--brand-blue)'
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
                    <span>0{service.num}</span>
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
                        backgroundColor: 'var(--brand-blue)',
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
                {/* Main Text Segment */}
                <div style={{ width: '100%', maxWidth: '850px', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div className="font-technical" style={{ fontWeight: 600 }}>
                    {service.specs}
                  </div>
                  
                  <h3 style={{ fontSize: 'var(--font-size-slide)', color: 'var(--text-primary)', lineHeight: '1' }}>
                    {service.title}
                  </h3>
                  
                  <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', maxWidth: '750px', lineHeight: '1.6' }}>
                    {service.description}
                  </p>

                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', marginTop: '1rem' }}>
                    {service.bullets.map((bullet, bIdx) => (
                      <li 
                        key={bIdx}
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.9rem',
                          color: 'var(--text-primary)',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px',
                          fontWeight: 700
                        }}
                      >
                        <span style={{ color: 'var(--brand-blue)', fontWeight: 'bold' }}>↳</span> {bullet}
                      </li>
                    ))}
                  </ul>

                  <a 
                    href="#contact" 
                    className="btn-draft btn-draft-accent" 
                    style={{ alignSelf: 'flex-start', marginTop: '1.5rem', width: isMobile ? '100%' : 'auto', justifyContent: 'center' }}
                  >
                    <span>{isMobile ? 'Get Proposal' : 'Get Operational Proposal'}</span>
                  </a>
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
