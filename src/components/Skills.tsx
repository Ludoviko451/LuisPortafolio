import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Cpu, Monitor, Database, Cloud, Server } from 'lucide-react';
import { skills } from '../data/portfolioData';

const iconMap: Record<string, React.ElementType> = {
  Server,
  Monitor,
  Database,
  Cloud,
};

const colorMap: Record<string, { bg: string; text: string; border: string; dot: string }> = {
  blue: {
    bg: 'bg-blue-500/10',
    text: 'text-blue-400',
    border: 'border-blue-500/20',
    dot: 'bg-blue-500',
  },
  cyan: {
    bg: 'bg-cyan-500/10',
    text: 'text-cyan-400',
    border: 'border-cyan-500/20',
    dot: 'bg-cyan-500',
  },
  indigo: {
    bg: 'bg-indigo-500/10',
    text: 'text-indigo-400',
    border: 'border-indigo-500/20',
    dot: 'bg-indigo-500',
  },
  teal: {
    bg: 'bg-teal-500/10',
    text: 'text-teal-400',
    border: 'border-teal-500/20',
    dot: 'bg-teal-500',
  },
};

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="habilidades" ref={ref} className="py-24 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 right-0 w-96 h-96 rounded-full bg-indigo-600/4 blur-[100px]" />
      </div>

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-label justify-center"><Cpu size={14} /> Habilidades</p>
          <h2 className="section-title">Stack tecnológico</h2>
          <p className="text-slate-500 max-w-lg mx-auto text-sm mt-2">
            Tecnologías con las que he trabajado en proyectos reales y personales.
          </p>
          <div className="section-divider max-w-24 mx-auto mt-4" />
        </motion.div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {skills.map((group, gIdx) => {
            const Icon = iconMap[group.icon] || Server;
            const colors = colorMap[group.color] || colorMap.blue;

            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: gIdx * 0.12, duration: 0.6 }}
                className="glass-card rounded-2xl p-6"
              >
                {/* Header */}
                <div className={`w-11 h-11 rounded-xl ${colors.bg} flex items-center justify-center mb-4`}>
                  <Icon size={22} className={colors.text} />
                </div>
                <h3 className={`font-bold text-sm ${colors.text} uppercase tracking-wider mb-4`}>
                  {group.category}
                </h3>

                {/* Items */}
                <ul className="space-y-3">
                  {group.items.map((item, iIdx) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -10 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.3 + gIdx * 0.1 + iIdx * 0.05, duration: 0.4 }}
                      className="flex items-center gap-2.5"
                    >
                      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${colors.dot}`} />
                      <span className="text-slate-300 text-sm font-medium">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center text-xs text-slate-600 mt-8 font-mono"
        >
          * Las habilidades reflejan experiencia práctica y aprendizaje continuo, no porcentajes arbitrarios.
        </motion.p>
      </div>
    </section>
  );
}
