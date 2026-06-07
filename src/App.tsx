import { useLenis } from './hooks/useLenis';
import NoiseOverlay from './components/NoiseOverlay';
import VibrantBackground from './components/VibrantBackground';
import Header from './components/Header';
import Hero from './components/Hero';
import ServicesCarousel from './components/ServicesCarousel';
import About from './components/About';
import LocationGrid from './components/LocationGrid';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  // Activate smooth scrolling with Lenis engine
  useLenis();

  return (
    <>
      {/* Background Graphic Layers */}
      <NoiseOverlay />
      <VibrantBackground />

      {/* Navigation Header */}
      <Header />

      {/* Main Narrative Sections */}
      <main style={{ position: 'relative', zIndex: 5 }}>
        <Hero />
        <ServicesCarousel />
        <About />
        <LocationGrid />
        <ContactForm />
      </main>

      {/* Asymmetric Footer */}
      <Footer />
    </>
  );
}

export default App;
