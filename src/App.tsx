import { useState, useEffect } from 'react';
import { useLenis } from './hooks/useLenis';
import NoiseOverlay from './components/NoiseOverlay';
import VibrantBackground from './components/VibrantBackground';
import Header from './components/Header';
import Hero from './components/Hero';
import ServicesListGrid from './components/ServicesListGrid';
import ServicesCarousel from './components/ServicesCarousel';
import Gallery from './components/Gallery';
import About from './components/About';
import LocationGrid from './components/LocationGrid';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

import { ScrollTrigger } from 'gsap/ScrollTrigger';

function App() {
  // Activate smooth scrolling with Lenis engine
  useLenis();

  // Active section state for the navbar highlighting
  const [currentPage, setCurrentPage] = useState<string>('home');

  // Parse initial hash on load
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (['home', 'services', 'gallery', 'about', 'contact'].includes(hash)) {
      setCurrentPage(hash);
      setTimeout(() => {
        const elementId = hash === 'services' ? 'services-list' : hash;
        const element = document.getElementById(elementId);
        if (element) {
          const lenisInstance = (window as any).lenis;
          if (lenisInstance) {
            lenisInstance.scrollTo(element, { immediate: true, offset: -90 });
          }
        }
      }, 300);
    }
  }, []);

  // IntersectionObserver to auto-update active navbar tab based on scroll position
  useEffect(() => {
    const sections = [
      { id: 'home', elementId: 'hero-section' },
      { id: 'services', elementId: 'services-list' },
      { id: 'gallery', elementId: 'gallery' },
      { id: 'about', elementId: 'about' },
      { id: 'contact', elementId: 'contact' },
    ];

    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -50% 0px', // Trigger when section occupies center viewport
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const section = sections.find((s) => s.elementId === entry.target.id);
          if (section) {
            setCurrentPage(section.id);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((sec) => {
      const el = document.getElementById(sec.elementId);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.location.hash = page;

    setTimeout(() => {
      const lenisInstance = (window as any).lenis;
      if (lenisInstance) {
        lenisInstance.resize();
      }
      ScrollTrigger.refresh();

      if (page === 'home') {
        if (lenisInstance) {
          lenisInstance.scrollTo(0, { duration: 1.2 });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      } else {
        // Map page id to element id
        let elementId = page;
        if (page === 'services') {
          elementId = 'services-list';
        }

        const element = document.getElementById(elementId);
        if (element) {
          if (lenisInstance) {
            lenisInstance.scrollTo(element, { duration: 1.2, offset: -90 });
          } else {
            const yOffset = -90;
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
          }
        }
      }
    }, 50);
  };

  return (
    <>
      {/* Background Graphic Layers */}
      <NoiseOverlay />
      <VibrantBackground />

      {/* Navigation Header */}
      <Header currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Single Page Scroll Sections */}
      <main style={{ position: 'relative', zIndex: 5 }}>
        {/* Home / Hero Section */}
        <div id="hero-section">
          <Hero />
        </div>

        {/* Services Section */}
        <ServicesListGrid onSelectService={() => handleNavigate('contact')} />
        <ServicesCarousel />

        {/* Gallery Section */}
        <Gallery />

        {/* About Section */}
        <About />

        {/* Contact Us Section */}
        <LocationGrid />
        <ContactForm />
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />
    </>
  );
}

export default App;
