import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Briefcase, ChevronDown, ChevronUp, MapPin, Calendar } from 'lucide-react';
import { experience } from '../data/portfolioData';

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [openProject, setOpenProject] = useState<number | null>(0);

  return (
    <section id="experiencia" ref={ref} className="py-36 relative">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full bg-cyan-600/5 blur-[100px]" />
      </div>

      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="text-center mb-20"
        >
          <p className="section-label justify-center"><Briefcase size={14} /> Experiencia</p>
          <h2 className="section-title">Trayectoria profesional</h2>
          <div className="section-divider mx-auto" style={{ maxWidth: 80 }} />
        </motion.div>

        {experience.map((job, jobIdx) => (
          <motion.div
            key={job.id}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: jobIdx * 0.15, duration: 0.55 }}
          >
            {/* Company card */}
            <div className="glass-card mb-10 p-8 sm:p-10">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-white font-black text-2xl flex-shrink-0 shadow-lg shadow-blue-500/20"
                    style={{ background: 'linear-gradient(135deg,#2563eb,#06b6d4)' }}
                  >P</div>
                  <div>
                    <h3 className="text-xl font-bold text-white leading-tight">{job.company}</h3>
                    <p className="text-blue-400 font-semibold text-sm mt-0.5">{job.role}</p>
                  </div>
                </div>
                <div className="flex flex-col sm:items-end gap-1.5 text-sm text-slate-500 flex-shrink-0">
                  <span className="flex items-center gap-1.5"><Calendar size={13} className="text-blue-500" />{job.period}</span>
                  <span className="flex items-center gap-1.5"><MapPin size={13} className="text-cyan-500" />{job.location}</span>
                </div>
              </div>
              <div className="mt-5 p-3 rounded-xl" style={{ background: 'rgba(37,99,235,0.06)', border: '1px solid rgba(37,99,235,0.12)' }}>
                <p className="text-xs text-slate-500 leading-relaxed">
                  <span className="text-blue-400 font-semibold">ℹ</span>&nbsp;
                  Los siguientes fueron tres asignaciones de proyecto dentro de una misma experiencia laboral en PRAGMA.
                </p>
              </div>
            </div>

            {/* Timeline */}
            <div className="relative" style={{ paddingLeft: 52 }}>
              {/* Vertical line */}
              <div className="absolute top-0 bottom-0"
                style={{
                  left: 24,
                  width: 2,
                  background: 'linear-gradient(to bottom, rgba(37,99,235,0.8), rgba(6,182,212,0.3), transparent)'
                }}
              />

              <div className="space-y-6">
                {job.projects.map((project, pIdx) => {
                  const isOpen = openProject === pIdx;
                  return (
                    <motion.div
                      key={project.name}
                      initial={{ opacity: 0, x: -16 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.3 + pIdx * 0.12 }}
                      className="relative"
                    >
                      {/* Dot */}
                      <div className="absolute rounded-full border-3 border-[#080c14]"
                        style={{
                          left: -37,
                          top: 14,
                          width: 18,
                          height: 18,
                          background: 'linear-gradient(135deg,#2563eb,#06b6d4)',
                          boxShadow: '0 0 10px rgba(37,99,235,0.5)',
                          borderWidth: 3,
                          borderColor: '#080c14',
                        }}
                      />

                      <div className="glass-card overflow-hidden">
                        <button
                          onClick={() => setOpenProject(isOpen ? null : pIdx)}
                          id={`exp-${pIdx}`}
                          aria-expanded={isOpen}
                          className="w-full text-left flex items-start justify-between gap-4 group"
                        >
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="font-mono text-xs text-blue-400 font-semibold">
                                #{String(pIdx + 1).padStart(2, '0')}
                              </span>
                              <span className="w-px h-3 bg-slate-700" />
                              <h4 className="font-bold text-white">{project.name}</h4>
                            </div>
                            <p className="text-slate-400 text-sm leading-relaxed">{project.description}</p>
                          </div>
                          <div className="flex items-center gap-3 flex-shrink-0 mt-1">
                            <div className="hidden sm:flex flex-wrap gap-1">
                              {project.tags.slice(0, 2).map((t) => (
                                <span key={t} className="tech-badge">{t}</span>
                              ))}
                            </div>
                            {isOpen
                              ? <ChevronUp size={16} className="text-blue-400" />
                              : <ChevronDown size={16} className="text-slate-500" />}
                          </div>
                        </button>

                        {/* Accordion content */}
                        <motion.div
                          initial={false}
                          animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                          transition={{ duration: 0.28 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-5 mt-4 border-t border-blue-900/25 grid sm:grid-cols-2 gap-6">
                            <div>
                              <p className="text-[10px] font-mono text-slate-600 uppercase tracking-widest mb-3">Responsabilidades</p>
                              <ul className="space-y-2.5">
                                {project.tasks.map((t) => (
                                  <li key={t} className="flex items-start gap-2 text-sm text-slate-400">
                                    <span className="text-blue-500 mt-0.5 flex-shrink-0">▸</span>
                                    {t}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <p className="text-[10px] font-mono text-slate-600 uppercase tracking-widest mb-3">Tecnologías</p>
                              <div className="flex flex-wrap gap-2">
                                {project.tags.map((t) => (
                                  <span key={t} className="tech-badge">{t}</span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
