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
    <section id="sobre-mi" ref={ref} className="py-36 relative">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-blue-600/5 blur-[100px]" />
      </div>

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
                <p key={i} className="text-slate-400 leading-relaxed text-[1.05rem]">
                  {i === 0 && <span className="text-blue-400 font-semibold mr-1">{'>'}</span>}
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
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.35 + i * 0.08 }}
                  className="glass-card"
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: `${item.color}18` }}>
                    <Icon size={20} style={{ color: item.color }} />
                  </div>
                  <h3 className="font-semibold text-slate-200 text-sm mb-2 leading-snug">{item.label}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
