import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Cpu, Monitor, Database, Cloud, Server } from 'lucide-react';
import { skills } from '../data/portfolioData';

const iconMap: Record<string, React.ElementType> = { Server, Monitor, Database, Cloud };

const palette: Record<string, { icon: string; dot: string; bg: string }> = {
  blue:   { icon: '#60a5fa', dot: '#3b82f6', bg: 'rgba(59,130,246,0.08)'  },
  cyan:   { icon: '#22d3ee', dot: '#06b6d4', bg: 'rgba(6,182,212,0.08)'   },
  indigo: { icon: '#a5b4fc', dot: '#6366f1', bg: 'rgba(99,102,241,0.08)'  },
  teal:   { icon: '#5eead4', dot: '#14b8a6', bg: 'rgba(20,184,166,0.08)'  },
};

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="habilidades" ref={ref} className="py-36 relative">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 right-0 w-96 h-96 rounded-full bg-indigo-600/5 blur-[100px]" />
      </div>

      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="text-center mb-20"
        >
          <p className="section-label justify-center"><Cpu size={14} /> Habilidades</p>
          <h2 className="section-title">Stack tecnológico</h2>
          <p className="text-slate-400 text-base mt-2 max-w-lg mx-auto">
            Tecnologías con las que he trabajado en proyectos reales y personales.
          </p>
          <div className="section-divider mx-auto mt-6" style={{ maxWidth: 80 }} />
        </motion.div>

        {/* Cards — 2 cols on md, 4 on xl */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
          {skills.map((group, gIdx) => {
            const Icon = iconMap[group.icon] || Server;
            const c = palette[group.color] || palette.blue;
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: gIdx * 0.1, duration: 0.55 }}
                className="glass-card flex flex-col p-8"
              >
                {/* Category header */}
                <div className="flex items-center gap-3.5 mb-6">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: c.bg }}>
                    <Icon size={22} style={{ color: c.icon }} />
                  </div>
                  <h3 className="font-bold text-xs uppercase tracking-widest" style={{ color: c.icon }}>
                    {group.category}
                  </h3>
                </div>

                {/* Items */}
                <ul className="space-y-4 flex-1">
                  {group.items.map((item, iIdx) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -8 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.25 + gIdx * 0.08 + iIdx * 0.04 }}
                      className="flex items-center gap-2.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: c.dot }} />
                      <span className="text-slate-300 text-sm font-medium">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="text-center text-[11px] text-slate-700 mt-10 font-mono"
        >
          * Habilidades basadas en experiencia práctica, no porcentajes arbitrarios.
        </motion.p>
      </div>
    </section>
  );
}
