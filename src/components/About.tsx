import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { User, Code2, Cloud, GraduationCap, Target } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const highlights = [
  { icon: Code2,        label: 'Backend Development', desc: 'Java, Spring Boot, Node.js, APIs REST', color: '#3b82f6' },
  { icon: Cloud,        label: 'Cloud & AWS',          desc: 'Lambda, CloudWatch, microservicios',   color: '#06b6d4' },
  { icon: GraduationCap,label: 'Formación continua',   desc: 'SENA · UNAD Ing. de Sistemas',        color: '#818cf8' },
  { icon: Target,       label: 'Experiencia real',      desc: 'PRAGMA — proyectos con clientes',     color: '#34d399' },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="sobre-mi" ref={ref} className="py-20 sm:py-24 relative bg-white border-y border-slate-200/80 min-h-[calc(100vh-140px)] flex flex-col justify-center">
      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="text-center mb-20"
        >
          <p className="section-label justify-center"><User size={14} /> Sobre mí</p>
          <h2 className="section-title">Quién soy</h2>
          <div className="section-divider mx-auto" style={{ maxWidth: 80 }} />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Bio text */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="space-y-6 mb-8">
              {personalInfo.about.map((p, i) => (
                <p key={i} className="text-slate-600 leading-relaxed text-[1.05rem]">
                  {i === 0 && <span className="text-blue-600 font-bold mr-1.5">{'>'}</span>}
                  {p}
                </p>
              ))}
            </div>
            <div className="flex flex-wrap gap-2.5">
              {['Backend', 'Microservicios', 'AWS', 'APIs REST', 'SQL', 'Git', 'Scrum'].map((t) => (
                <span key={t} className="tech-badge">{t}</span>
              ))}
            </div>
          </motion.div>

          {/* Highlight cards */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {highlights.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.35 + i * 0.08 }}
                  className="glass-card"
                >
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 bg-blue-50 border border-blue-100">
                    <Icon size={22} className="text-blue-600" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-base mb-2 leading-snug">{item.label}</h3>
                  <p className="text-slate-600 text-xs leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
