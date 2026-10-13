import { motion } from 'framer-motion';
import { GitBranch, Download, Mail, ChevronDown, MapPin } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import fotoLuis from '../assets/foto.png';

interface HeroProps {
  onNavigate?: (index: number) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const handleGoTo = (idx: number, id: string) => {
    if (onNavigate) {
      onNavigate(idx);
    } else {
      document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="inicio"
      className="relative flex items-center justify-center overflow-hidden bg-grid py-16 sm:py-20 min-h-[calc(100vh-150px)]"
    >
      <div className="section-container relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* ── Left column ── */}
          <div className="flex-1 text-center lg:text-left">
            {/* Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 text-sm font-medium text-emerald-700 mb-8 shadow-xs"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Disponible para nuevas oportunidades
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-black leading-[1.08] mb-5 tracking-tight"
              style={{ fontSize: 'clamp(2.6rem, 6vw, 4.2rem)' }}
            >
              <span className="text-slate-900 block">Luis Ángel</span>
              <span className="text-blue-600 block">Quirós Flórez</span>
            </motion.h1>

            {/* Role */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex items-center justify-center lg:justify-start gap-3 mb-6"
            >
              <span className="h-px w-8 bg-blue-500 block" />
              <p className="font-mono text-blue-700 text-base font-semibold tracking-wide">
                Backend Developer&nbsp;<span className="text-slate-400">|</span>&nbsp;Software Developer
              </p>
              <span className="h-px w-8 bg-blue-500 block" />
            </motion.div>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-slate-600 text-lg leading-relaxed max-w-lg mx-auto lg:mx-0 mb-6"
            >
              {personalInfo.bio}
            </motion.p>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              className="flex items-center justify-center lg:justify-start gap-2 text-slate-500 text-sm mb-10"
            >
              <MapPin size={15} className="text-blue-600 flex-shrink-0" />
              <span>Cúcuta, Colombia</span>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
            >
              <button onClick={() => handleGoTo(4, '#proyectos')} className="btn-primary cursor-pointer" id="hero-proyectos">
                Ver proyectos
              </button>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="btn-secondary" id="hero-github">
                <GitBranch size={16} /> GitHub
              </a>
              <button onClick={() => handleGoTo(6, '#contacto')} className="btn-secondary cursor-pointer" id="hero-contactar">
                <Mail size={16} /> Contactar
              </button>
              <a href="/cv-luis-quiros.pdf" download className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 transition-colors px-4 py-3 font-medium" id="hero-cv">
                <Download size={15} /> Descargar CV
              </a>
            </motion.div>
          </div>

          {/* ── Right column: photo ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex-shrink-0 flex flex-col items-center gap-8"
          >
            {/* Photo */}
            <div className="relative">
              <motion.div
                animate={{ y: [-6, 6, -6] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="relative w-52 h-52 lg:w-68 lg:h-68"
                style={{ width: 'clamp(200px, 20vw, 272px)', height: 'clamp(200px, 20vw, 272px)' }}
              >
                {/* Photo ring */}
                <div className="w-full h-full rounded-full p-2.5 bg-white shadow-xl border border-slate-200">
                  <div className="w-full h-full rounded-full overflow-hidden bg-slate-100">
                    <img
                      src={fotoLuis}
                      alt="Luis Ángel Quirós Flórez"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Floating chips */}
              <motion.div
                animate={{ y: [-3, 3, -3] }}
                transition={{ duration: 2.5, repeat: Infinity }}
                className="absolute -right-6 top-6 bg-white border border-slate-200 shadow-md rounded-xl px-3.5 py-2 text-xs font-mono whitespace-nowrap text-slate-700"
              >
                <span className="text-blue-600 font-bold">{'</>'}</span>
                <span className="ml-1.5 font-semibold">Java · Spring Boot</span>
              </motion.div>
              <motion.div
                animate={{ y: [3, -3, 3] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -left-6 bottom-10 bg-white border border-slate-200 shadow-md rounded-xl px-3.5 py-2 text-xs font-mono whitespace-nowrap text-slate-700"
              >
                <span className="text-amber-500 font-bold">☁</span>
                <span className="ml-1.5 font-semibold">AWS & Microservicios</span>
              </motion.div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 w-full" style={{ maxWidth: 290 }}>
              {[
                { value: '6+', label: 'meses en PRAGMA' },
                { value: '3', label: 'proyectos pro.' },
                { value: '10+', label: 'tecnologías' },
              ].map((s) => (
                <div key={s.label} className="bg-white border border-slate-200 shadow-xs rounded-xl text-center py-3 px-2">
                  <div className="text-2xl font-extrabold text-blue-600 leading-none mb-1">{s.value}</div>
                  <div className="text-[11px] text-slate-500 font-medium leading-tight">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        onClick={() => handleGoTo(1, '#sobre-mi')}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
        aria-label="Ir a la siguiente sección"
      >
        <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ChevronDown size={20} />
        </motion.div>
      </motion.button>
    </section>
  );
}
