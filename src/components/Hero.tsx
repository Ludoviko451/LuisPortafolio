import { motion } from 'framer-motion';
import { Github, Download, Mail, ChevronDown, MapPin, Briefcase } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const floatingVariants = {
  animate: {
    y: [-8, 8, -8],
    transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Hero() {
  const scrollToProjects = () => {
    document.querySelector('#proyectos')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid"
    >
      {/* Ambient background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-blue-600/8 blur-[120px]" />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-cyan-500/6 blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-blue-800/4 blur-[150px]" />
      </div>

      {/* Floating tech dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ y: [-10, 10, -10], opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 3 + i, repeat: Infinity, delay: i * 0.8 }}
            className="absolute w-1 h-1 rounded-full bg-blue-400/40"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
          />
        ))}
      </div>

      <div className="section-container relative z-10 pt-24 pb-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20"
        >
          {/* Left: Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Status badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-6">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full glass border border-green-500/20 text-sm text-green-400">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Disponible para nuevas oportunidades
              </div>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl lg:text-7xl font-black leading-none mb-4"
            >
              <span className="text-white">Luis Ángel</span>
              <br />
              <span className="gradient-text text-glow">Quirós Flórez</span>
            </motion.h1>

            {/* Role */}
            <motion.div variants={itemVariants} className="flex items-center justify-center lg:justify-start gap-3 mb-6">
              <div className="h-px w-8 bg-blue-500" />
              <p className="font-mono text-blue-400 text-lg font-semibold tracking-wide">
                {personalInfo.role} <span className="text-slate-500">|</span> {personalInfo.roleAlt}
              </p>
              <div className="h-px w-8 bg-blue-500" />
            </motion.div>

            {/* Bio */}
            <motion.p
              variants={itemVariants}
              className="text-slate-400 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-6"
            >
              {personalInfo.bio}
            </motion.p>

            {/* Location */}
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center lg:justify-start gap-2 text-slate-500 text-sm mb-10"
            >
              <MapPin size={14} className="text-blue-500" />
              <span>{personalInfo.location}</span>
              <span className="mx-2 text-slate-700">•</span>
              <Briefcase size={14} className="text-cyan-500" />
              <span>Backend Developer en PRAGMA (Jul 2024 – Ene 2025)</span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3"
            >
              <button
                onClick={scrollToProjects}
                className="btn-primary"
                id="hero-ver-proyectos"
              >
                Ver proyectos
              </button>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                id="hero-github"
              >
                <Github size={16} />
                GitHub
              </a>
              <a
                href="#contacto"
                onClick={(e) => { e.preventDefault(); document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="btn-secondary"
                id="hero-contactar"
              >
                <Mail size={16} />
                Contactar
              </a>
              <a
                href="/cv-luis-quiros.pdf"
                download
                className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-300 transition-colors py-3 px-4"
                id="hero-download-cv"
              >
                <Download size={14} />
                Descargar CV
              </a>
            </motion.div>
          </div>

          {/* Right: Avatar / Visual */}
          <motion.div
            variants={itemVariants}
            className="flex-shrink-0 flex flex-col items-center gap-6"
          >
            <motion.div
              variants={floatingVariants}
              animate="animate"
              className="relative"
            >
              {/* Avatar ring */}
              <div className="relative w-56 h-56 lg:w-72 lg:h-72">
                {/* Outer glow ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-600 via-cyan-500 to-blue-800 p-0.5 glow-blue">
                  <div className="w-full h-full rounded-full bg-bg-primary overflow-hidden">
                    {/* Avatar placeholder with initials */}
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-900 to-slate-900 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-5xl lg:text-6xl font-black gradient-text">LA</div>
                        <div className="text-xs text-slate-500 font-mono mt-1 tracking-widest">QUIRÓS</div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Rotating dashed ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className="absolute -inset-4 rounded-full border border-dashed border-blue-600/20"
                />
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 2.5, repeat: Infinity }}
                className="absolute -right-4 top-8 glass border border-blue-500/30 rounded-xl px-3 py-2 text-xs font-mono"
              >
                <span className="text-green-400">{'</>'}</span>
                <span className="text-slate-400 ml-1">Java + Spring</span>
              </motion.div>
              <motion.div
                animate={{ y: [4, -4, 4] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -left-4 bottom-12 glass border border-cyan-500/30 rounded-xl px-3 py-2 text-xs font-mono"
              >
                <span className="text-cyan-400">☁</span>
                <span className="text-slate-400 ml-1">AWS Lambda</span>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 w-full max-w-xs">
              {[
                { value: '6+', label: 'meses en PRAGMA' },
                { value: '3', label: 'proyectos pro.' },
                { value: '10+', label: 'tecnologías' },
              ].map((stat) => (
                <div key={stat.label} className="glass-card rounded-xl p-3 text-center">
                  <div className="text-xl font-black gradient-text-blue">{stat.value}</div>
                  <div className="text-[10px] text-slate-500 leading-tight mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-1 text-slate-600 cursor-pointer hover:text-slate-400 transition-colors"
          onClick={scrollToProjects}
        >
          <span className="text-xs font-mono tracking-widest">scroll</span>
          <ChevronDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
