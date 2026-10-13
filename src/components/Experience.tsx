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
    <section id="experiencia" ref={ref} className="py-20 sm:py-24 relative min-h-[calc(100vh-140px)] flex flex-col justify-center">
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
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-white font-black text-2xl flex-shrink-0 shadow-md shadow-blue-600/20 bg-blue-600">
                    P
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 leading-tight">{job.company}</h3>
                    <p className="text-blue-600 font-semibold text-base mt-0.5">{job.role}</p>
                  </div>
                </div>
                <div className="flex flex-col sm:items-end gap-1.5 text-sm text-slate-500 flex-shrink-0">
                  <span className="flex items-center gap-1.5"><Calendar size={14} className="text-blue-600" />{job.period}</span>
                  <span className="flex items-center gap-1.5"><MapPin size={14} className="text-slate-500" />{job.location}</span>
                </div>
              </div>
              <div className="mt-6 p-4 rounded-xl bg-blue-50/70 border border-blue-100">
                <p className="text-xs text-slate-600 leading-relaxed">
                  <span className="text-blue-700 font-bold">ℹ</span>&nbsp;
                  Los siguientes fueron tres asignaciones de proyecto dentro de una misma experiencia laboral en PRAGMA.
                </p>
              </div>
            </div>

            {/* Timeline */}
            <div className="relative" style={{ paddingLeft: 52 }}>
              {/* Vertical line */}
              <div
                className="absolute top-0 bottom-0"
                style={{
                  left: 24,
                  width: 2,
                  background: '#cbd5e1'
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
                      <div
                        className="absolute rounded-full"
                        style={{
                          left: -37,
                          top: 14,
                          width: 18,
                          height: 18,
                          background: '#2563eb',
                          border: '3px solid #ffffff',
                          boxShadow: '0 0 0 2px #cbd5e1',
                        }}
                      />

                      <div className="glass-card overflow-hidden">
                        <button
                          onClick={() => setOpenProject(isOpen ? null : pIdx)}
                          id={`exp-${pIdx}`}
                          aria-expanded={isOpen}
                          className="w-full text-left flex items-start justify-between gap-4 group cursor-pointer"
                        >
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="font-mono text-xs text-blue-600 font-bold">
                                #{String(pIdx + 1).padStart(2, '0')}
                              </span>
                              <span className="w-px h-3 bg-slate-300" />
                              <h4 className="font-bold text-slate-900 text-lg group-hover:text-blue-600 transition-colors">{project.name}</h4>
                            </div>
                            <p className="text-slate-600 text-sm leading-relaxed">{project.description}</p>
                          </div>
                          <div className="flex items-center gap-3 flex-shrink-0 mt-1">
                            <div className="hidden sm:flex flex-wrap gap-1.5">
                              {project.tags.slice(0, 2).map((t) => (
                                <span key={t} className="tech-badge">{t}</span>
                              ))}
                            </div>
                            {isOpen
                              ? <ChevronUp size={18} className="text-blue-600" />
                              : <ChevronDown size={18} className="text-slate-400 group-hover:text-slate-600" />}
                          </div>
                        </button>

                        {/* Accordion content */}
                        <motion.div
                          initial={false}
                          animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                          transition={{ duration: 0.28 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-6 mt-5 border-t border-slate-200 grid sm:grid-cols-2 gap-6">
                            <div>
                              <p className="text-[11px] font-mono text-slate-500 font-semibold uppercase tracking-wider mb-3">Responsabilidades</p>
                              <ul className="space-y-2.5">
                                {project.tasks.map((t) => (
                                  <li key={t} className="flex items-start gap-2 text-sm text-slate-600 leading-relaxed">
                                    <span className="text-blue-600 mt-0.5 flex-shrink-0 font-bold">▸</span>
                                    {t}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <p className="text-[11px] font-mono text-slate-500 font-semibold uppercase tracking-wider mb-3">Tecnologías</p>
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
