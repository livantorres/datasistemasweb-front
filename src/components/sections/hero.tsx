import { lazy, Suspense, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CarouselSkeleton from '../ui/CarouselSkeleton';

// Carga diferida del carrusel
const LazyCarousel = lazy(() => import('../ui/carousel'));

const WORDS = ["Digitales", "Tecnológicas", "Innovadoras", "Efectivas"];
const SLIDES = [
  {
    id: 1,
    title: "Plataforma Datasisweb",
    description: "Solución integral para tu negocio",
    image: "/images/service1.jpg",
    alt: "Captura de pantalla de la plataforma Datasisweb"
  },
  {
    id: 2,
    title: "Solución Contable",
    description: "Gestión financiera profesional",
    image: "/images/service2.jpg",
    alt: "Interfaz del módulo contable"
  }
];

export default function HeroSection() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  // Efecto para animación de palabras y precarga
  useEffect(() => {
    setIsMounted(true);
    const interval = setInterval(() => {
      setCurrentWordIndex(prev => (prev + 1) % WORDS.length);
    }, 3000);

    // Precargar imágenes del carrusel
    SLIDES.forEach(slide => {
      const img = new Image();
      img.src = slide.image;
    });

    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      aria-labelledby="hero-heading"
      className="relative my-12 py-12 rounded-3xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-white/20 dark:border-gray-700/30 shadow-xl overflow-hidden"
    >
      {/* Fondo optimizado con will-change */}
      <div 
        className="absolute inset-0 z-0 bg-gradient-to-r "
        style={{ willChange: 'opacity' }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Contenido de texto */}
          <motion.div
            initial={isMounted ? { opacity: 0, x: -20 } : false}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="space-y-6"
          >
            <h1 id="hero-heading" className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Soluciones{' '}
              <span className="relative inline-block h-14 md:h-16 align-middle overflow-y-hidden">
                <AnimatePresence mode="popLayout">
                  <motion.span
                    key={`word-${currentWordIndex}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: 1, 
                      y: 0,
                      transition: { type: 'spring', stiffness: 300, damping: 20 }
                    }}
                    exit={{ 
                      opacity: 0, 
                      y: -20,
                      transition: { duration: 0.2 }
                    }}
                    className="absolute left-0 text-primary dark:text-secondary underline decoration-wavy decoration-2 underline-offset-4"
                    aria-live="polite"
                  >
                    {WORDS[currentWordIndex]}
                  </motion.span>
                </AnimatePresence>
                <span className="invisible" aria-hidden="true">Digitales</span>
              </span>{' '}
              para tu Negocio
            </h1>

            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Ofrecemos herramientas profesionales para optimizar tus procesos empresariales con tecnología de vanguardia.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <button 
                className="px-6 py-3 bg-primary hover:bg-primary-dark dark:bg-secondary dark:hover:bg-secondary-dark text-white rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-secondary"
                aria-label="Conoce nuestros servicios"
              >
                Conoce nuestros servicios
              </button>
            </motion.div>
          </motion.div>

          {/* Carrusel con carga diferida */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative h-80 md:h-96 rounded-xl overflow-hidden shadow-lg"
            style={{ willChange: 'opacity, transform' }}
          >
            <Suspense fallback={<CarouselSkeleton />}>
              <LazyCarousel 
                slides={SLIDES} 
                autoPlay={true} 
                interval={5000} 
              />
            </Suspense>
          </motion.div>
        </div>
      </div>
    </section>
  );
}