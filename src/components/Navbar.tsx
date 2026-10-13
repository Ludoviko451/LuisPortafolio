import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code2, ChevronUp, ChevronDown } from 'lucide-react';

const navItems = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Sobre mí', href: '#sobre-mi' },
  { label: 'Experiencia', href: '#experiencia' },
  { label: 'Habilidades', href: '#habilidades' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Formación', href: '#formacion' },
  { label: 'Contacto', href: '#contacto' },
];

interface NavbarProps {
  activeSlide: number;
  totalSlides: number;
  onSelectSlide: (index: number) => void;
  onPrevSlide: () => void;
  onNextSlide: () => void;
}

export default function Navbar({
  activeSlide = 0,
  totalSlides = 7,
  onSelectSlide,
  onPrevSlide,
  onNextSlide,
}: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = (idx: number) => {
    setMobileOpen(false);
    if (onSelectSlide) {
      onSelectSlide(idx);
    }
  };

  const progressPercent = ((activeSlide + 1) / totalSlides) * 100;

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-xs">
        <div className="section-container">
          <div className="flex items-center justify-between h-[74px] gap-4">
            {/* ── Brand Logo ── */}
            <button
              onClick={() => handleNavClick(0)}
              className="flex items-center gap-3 group cursor-pointer text-left"
              aria-label="Volver al inicio"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-600/20 group-hover:bg-blue-700 transition-colors flex-shrink-0">
                <Code2 size={20} />
              </div>
              <div className="hidden sm:block">
                <p className="font-bold text-base text-slate-900 tracking-tight leading-tight group-hover:text-blue-600 transition-colors">
                  Luis Quirós
                </p>
                <p className="text-[11px] font-mono text-slate-500 leading-tight">
                  Backend Developer
                </p>
              </div>
            </button>

            {/* ── Center Desktop Nav (Pill Tabs) ── */}
            <nav
              className="hidden xl:flex items-center gap-1 bg-slate-100/90 p-1.5 rounded-xl border border-slate-200/70"
              aria-label="Navegación principal"
            >
              {navItems.map((item, idx) => {
                const isActive = activeSlide === idx;
                return (
                  <button
                    key={item.href}
                    onClick={() => handleNavClick(idx)}
                    className={`relative px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'text-blue-600 bg-white shadow-xs font-bold'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </nav>

            {/* ── Right Controls: Step navigation + Counter + CTA ── */}
            <div className="flex items-center gap-3">
              {/* Slide Counter & Up/Down Arrows */}
              <div className="flex items-center gap-1.5 bg-slate-100/90 py-1 px-2 rounded-xl border border-slate-200/70">
                <span className="font-mono text-xs font-bold text-slate-700 px-1.5">
                  <span className="text-blue-600">{String(activeSlide + 1).padStart(2, '0')}</span>
                  <span className="text-slate-400"> / </span>
                  {String(totalSlides).padStart(2, '0')}
                </span>

                <div className="flex items-center gap-0.5 border-l border-slate-200 pl-1">
                  <button
                    onClick={onPrevSlide}
                    disabled={activeSlide === 0}
                    className={`p-1 rounded-md transition-colors cursor-pointer ${
                      activeSlide === 0
                        ? 'text-slate-300 cursor-not-allowed'
                        : 'text-slate-600 hover:text-blue-600 hover:bg-slate-200'
                    }`}
                    aria-label="Sección anterior"
                    title="Sección anterior"
                  >
                    <ChevronUp size={16} />
                  </button>
                  <button
                    onClick={onNextSlide}
                    disabled={activeSlide === totalSlides - 1}
                    className={`p-1 rounded-md transition-colors cursor-pointer ${
                      activeSlide === totalSlides - 1
                        ? 'text-slate-300 cursor-not-allowed'
                        : 'text-slate-600 hover:text-blue-600 hover:bg-slate-200'
                    }`}
                    aria-label="Siguiente sección"
                    title="Siguiente sección"
                  >
                    <ChevronDown size={16} />
                  </button>
                </div>
              </div>

              {/* Direct CTA */}
              <button
                className="hidden md:inline-flex btn-primary text-xs font-bold py-2 px-4 cursor-pointer"
                onClick={() => handleNavClick(6)}
              >
                Contactar
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="xl:hidden p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
                aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* ── Slide Progress Bar along bottom of header ── */}
        <div className="w-full h-[2px] bg-slate-100 overflow-hidden">
          <div
            className="h-full bg-blue-600 transition-all duration-300 ease-out"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </header>

      {/* ── Mobile Drawer ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed inset-y-0 right-0 w-72 z-50 bg-white border-l border-slate-200 shadow-2xl pt-20 px-6 flex flex-col gap-2 xl:hidden"
          >
            <div className="mb-4 pb-3 border-b border-slate-100">
              <p className="text-xs font-mono font-bold uppercase text-slate-400 tracking-wider">
                Secciones ({activeSlide + 1} de {totalSlides})
              </p>
            </div>

            {navItems.map((item, i) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(i)}
                className={`text-left px-4 py-3 rounded-xl transition-all font-medium text-sm flex items-center justify-between cursor-pointer ${
                  activeSlide === i
                    ? 'text-blue-600 bg-blue-50 font-bold'
                    : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
                }`}
              >
                <span>{item.label}</span>
                {activeSlide === i && (
                  <span className="w-2 h-2 rounded-full bg-blue-600" />
                )}
              </button>
            ))}

            <div className="mt-auto pt-4 pb-6 border-t border-slate-100">
              <button
                onClick={() => handleNavClick(6)}
                className="w-full btn-primary justify-center cursor-pointer text-sm"
              >
                Contactar
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop for mobile */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileOpen(false)}
            className="fixed inset-0 z-40 bg-black/30 backdrop-blur-xs xl:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
}
