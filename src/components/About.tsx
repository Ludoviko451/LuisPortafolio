import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { User, Code2, Cloud, GraduationCap, Target } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const highlights = [
  { icon: Code2, label: 'Backend Development', desc: 'Java, Spring Boot, Node.js, APIs REST', color: 'blue' },
  { icon: Cloud, label: 'Cloud & AWS', desc: 'Lambda, CloudWatch, microservicios', color: 'cyan' },
  { icon: GraduationCap, label: 'Formación continua', desc: 'SENA + UNAD Ingeniería de Sistemas', color: 'indigo' },
  { icon: Target, label: 'Experiencia real', desc: 'PRAGMA — proyectos internos y de cliente', color: 'teal' },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="sobre-mi" ref={ref} className="py-24 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-blue-600/4 blur-[100px]" />
      </div>

      <div className="section-container relative z-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <p className="section-label justify-center"><User size={14} /> Sobre mí</p>
          <h2 className="section-title">Quién soy</h2>
          <div className="section-divider max-w-24 mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-5"
          >
            {personalInfo.about.map((paragraph, i) => (
              <p key={i} className="text-slate-400 leading-relaxed text-[1.05rem]">
                {i === 0 && (
                  <span className="text-blue-400 font-semibold">
                    {'> '}
                  </span>
                )}
                {paragraph}
              </p>
            ))}

            <div className="pt-4 flex flex-wrap gap-2">
              {['Backend', 'Microservicios', 'Cloud AWS', 'APIs REST', 'SQL', 'Git', 'Scrum'].map((tag) => (
                <span key={tag} className="tech-badge">{tag}</span>
              ))}
            </div>
          </motion.div>

          {/* Highlights grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                  className="glass-card rounded-2xl p-5 group"
                >
                  <div className={`w-10 h-10 rounded-xl mb-4 flex items-center justify-center ${
                    item.color === 'blue' ? 'bg-blue-500/15' :
                    item.color === 'cyan' ? 'bg-cyan-500/15' :
                    item.color === 'indigo' ? 'bg-indigo-500/15' :
                    'bg-teal-500/15'
                  }`}>
                    <Icon size={20} className={
                      item.color === 'blue' ? 'text-blue-400' :
                      item.color === 'cyan' ? 'text-cyan-400' :
                      item.color === 'indigo' ? 'text-indigo-400' :
                      'text-teal-400'
                    } />
                  </div>
                  <h3 className="font-semibold text-slate-200 text-sm leading-tight mb-1.5">{item.label}</h3>
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
