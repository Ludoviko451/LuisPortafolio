import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

const slides = [
  { id: 'inicio', title: 'Inicio', component: Hero },
  { id: 'sobre-mi', title: 'Sobre mí', component: About },
  { id: 'experiencia', title: 'Experiencia', component: Experience },
  { id: 'habilidades', title: 'Habilidades', component: Skills },
  { id: 'proyectos', title: 'Proyectos', component: Projects },
  { id: 'formacion', title: 'Formación', component: Education },
  { id: 'contacto', title: 'Contacto', component: Contact },
];

const slideVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 80 : -80,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
  exit: (dir: number) => ({
    x: dir < 0 ? 80 : -80,
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  }),
};

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const goToSlide = useCallback((newIndex: number) => {
    if (newIndex === currentSlide) return;
    setDirection(newIndex > currentSlide ? 1 : -1);
    setCurrentSlide(newIndex);
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [currentSlide]);

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) {
      goToSlide(currentSlide - 1);
    }
  }, [currentSlide, goToSlide]);

  const nextSlide = useCallback(() => {
    if (currentSlide < slides.length - 1) {
      goToSlide(currentSlide + 1);
    }
  }, [currentSlide, goToSlide]);

  // Keyboard navigation with Arrow keys
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }
      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [prevSlide, nextSlide]);

  const ActiveComponent = slides[currentSlide].component;

  return (
    <div className="min-h-screen flex flex-col w-full bg-[#f8fafc] text-slate-900 pb-24 md:pb-28">
      {/* Navbar linked to carousel */}
      <Navbar activeSlide={currentSlide} onSelectSlide={goToSlide} />

      {/* Main Slide Presentation */}
      <main className="flex-1 w-full pt-[72px] relative overflow-x-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="w-full"
          >
            <ActiveComponent onNavigate={goToSlide} />
            {currentSlide === slides.length - 1 && <Footer />}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Floating Side Arrow: Previous */}
      {currentSlide > 0 && (
        <button
          onClick={prevSlide}
          className="fixed left-3 md:left-6 top-1/2 -translate-y-1/2 z-40 hidden sm:flex items-center justify-center w-12 h-12 rounded-full bg-white/95 border border-slate-200 shadow-md text-slate-700 hover:text-blue-600 hover:scale-110 hover:shadow-lg transition-all cursor-pointer"
          aria-label={`Ir a ${slides[currentSlide - 1].title}`}
          title={`Anterior: ${slides[currentSlide - 1].title}`}
        >
          <ChevronLeft size={24} />
        </button>
      )}

      {/* Floating Side Arrow: Next */}
      {currentSlide < slides.length - 1 && (
        <button
          onClick={nextSlide}
          className="fixed right-3 md:right-6 top-1/2 -translate-y-1/2 z-40 hidden sm:flex items-center justify-center w-12 h-12 rounded-full bg-white/95 border border-slate-200 shadow-md text-slate-700 hover:text-blue-600 hover:scale-110 hover:shadow-lg transition-all cursor-pointer"
          aria-label={`Ir a ${slides[currentSlide + 1].title}`}
          title={`Siguiente: ${slides[currentSlide + 1].title}`}
        >
          <ChevronRight size={24} />
        </button>
      )}

      {/* Bottom Carousel Controller Dock */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40">
        <div className="bg-white/95 backdrop-blur-md border border-slate-200 shadow-xl shadow-slate-900/5 rounded-2xl px-3 sm:px-5 py-2.5 flex items-center gap-3 sm:gap-4 max-w-[95vw]">
          {/* Prev button */}
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className={`flex items-center gap-1 text-xs font-semibold px-2.5 py-1.5 rounded-lg transition-colors cursor-pointer ${
              currentSlide === 0
                ? 'text-slate-300 cursor-not-allowed'
                : 'text-slate-600 hover:text-blue-600 hover:bg-slate-100'
            }`}
            aria-label="Diapositiva anterior"
          >
            <ChevronLeft size={16} />
            <span className="hidden md:inline">Anterior</span>
          </button>

          {/* Dots / numbered pills */}
          <div className="flex items-center gap-1 sm:gap-1.5 px-1 sm:px-2 border-x border-slate-200">
            {slides.map((slide, idx) => {
              const isActive = currentSlide === idx;
              return (
                <button
                  key={slide.id}
                  onClick={() => goToSlide(idx)}
                  className={`transition-all rounded-lg cursor-pointer flex items-center justify-center text-xs font-semibold ${
                    isActive
                      ? 'w-7 sm:w-8 h-7 bg-blue-600 text-white shadow-xs'
                      : 'w-6 sm:w-7 h-7 text-slate-500 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                  title={`${idx + 1}. ${slide.title}`}
                  aria-label={`Ir a sección ${slide.title}`}
                >
                  {idx + 1}
                </button>
              );
            })}
          </div>

          {/* Active section title badge */}
          <span className="text-xs font-bold text-slate-900 hidden sm:inline whitespace-nowrap min-w-[70px]">
            {slides[currentSlide].title}
          </span>

          {/* Next button */}
          <button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className={`flex items-center gap-1 text-xs font-semibold px-2.5 py-1.5 rounded-lg transition-colors cursor-pointer ${
              currentSlide === slides.length - 1
                ? 'text-slate-300 cursor-not-allowed'
                : 'text-slate-600 hover:text-blue-600 hover:bg-slate-100'
            }`}
            aria-label="Siguiente diapositiva"
          >
            <span className="hidden md:inline">Siguiente</span>
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
