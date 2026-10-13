import { motion } from 'framer-motion';
import { GitBranch, Download, Mail, ChevronDown, MapPin } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import fotoLuis from '../assets/foto.png';

export default function Hero() {
  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid"
    >
      {/* Ambient blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full bg-blue-600/8 blur-[140px]" />
        <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-cyan-500/6 blur-[120px]" />
      </div>

      <div className="section-container relative z-10 w-full pt-36 pb-28">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* ── Left column ── */}
          <div className="flex-1 text-center lg:text-left">
            {/* Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-green-500/20 text-sm text-green-400 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Disponible para nuevas oportunidades
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-black leading-[1.05] mb-5"
              style={{ fontSize: 'clamp(2.6rem, 6vw, 4.2rem)' }}
            >
              <span className="text-white block">Luis Ángel</span>
              <span className="gradient-text text-glow block">Quirós Flórez</span>
            </motion.h1>

            {/* Role */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex items-center justify-center lg:justify-start gap-3 mb-6"
            >
              <span className="h-px w-8 bg-blue-500 block" />
              <p className="font-mono text-blue-400 text-base font-semibold tracking-wide">
                Backend Developer&nbsp;<span className="text-slate-600">|</span>&nbsp;Software Developer
              </p>
              <span className="h-px w-8 bg-blue-500 block" />
            </motion.div>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-slate-400 text-lg leading-relaxed max-w-lg mx-auto lg:mx-0 mb-4"
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
              <MapPin size={13} className="text-blue-500 flex-shrink-0" />
              <span>Cúcuta, Colombia</span>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
            >
              <button onClick={() => scrollTo('#proyectos')} className="btn-primary" id="hero-proyectos">
                Ver proyectos
              </button>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="btn-secondary" id="hero-github">
                <GitBranch size={16} /> GitHub
              </a>
              <button onClick={() => scrollTo('#contacto')} className="btn-secondary" id="hero-contactar">
                <Mail size={16} /> Contactar
              </button>
              <a href="/cv-luis-quiros.pdf" download className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors px-4 py-3" id="hero-cv">
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
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="relative w-52 h-52 lg:w-68 lg:h-68"
                style={{ width: 'clamp(200px, 20vw, 272px)', height: 'clamp(200px, 20vw, 272px)' }}
              >
                {/* Gradient ring */}
                <div className="absolute inset-0 rounded-full p-[3px] glow-blue"
                  style={{ background: 'linear-gradient(135deg, #2563eb, #06b6d4, #1d4ed8)' }}
                >
                  <div className="w-full h-full rounded-full overflow-hidden bg-slate-900">
                    <img
                      src={fotoLuis}
                      alt="Luis Ángel Quirós Flórez"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
                {/* Rotating ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
                  className="absolute rounded-full border border-dashed border-blue-500/25"
                  style={{ inset: '-16px' }}
                />
              </motion.div>

              {/* Floating chips */}
              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 2.5, repeat: Infinity }}
                className="absolute -right-6 top-6 glass border border-blue-500/30 rounded-xl px-3 py-2 text-xs font-mono whitespace-nowrap"
              >
                <span className="text-green-400">{'</>'}</span>
                <span className="text-slate-400 ml-1.5">Java · Spring</span>
              </motion.div>
              <motion.div
                animate={{ y: [4, -4, 4] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -left-6 bottom-10 glass border border-cyan-500/30 rounded-xl px-3 py-2 text-xs font-mono whitespace-nowrap"
              >
                <span className="text-cyan-400">☁</span>
                <span className="text-slate-400 ml-1.5">AWS Lambda</span>
              </motion.div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 w-full" style={{ maxWidth: 280 }}>
              {[
                { value: '6+', label: 'meses en PRAGMA' },
                { value: '3', label: 'proyectos pro.' },
                { value: '10+', label: 'tecnologías' },
              ].map((s) => (
                <div key={s.label} className="glass-card text-center" style={{ padding: '12px 8px' }}>
                  <div className="text-xl font-black gradient-text-blue leading-none mb-1">{s.value}</div>
                  <div className="text-[10px] text-slate-500 leading-tight">{s.label}</div>
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
        onClick={() => scrollTo('#sobre-mi')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-600 hover:text-slate-400 transition-colors"
      >
        <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ChevronDown size={20} />
        </motion.div>
      </motion.button>
    </section>
  );
}
