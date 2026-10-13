import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Briefcase, ChevronDown, ChevronUp, MapPin, Calendar } from 'lucide-react';
import { experience } from '../data/portfolioData';

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [openProject, setOpenProject] = useState<number | null>(0);

  return (
    <section id="experiencia" ref={ref} className="py-24 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full bg-cyan-600/4 blur-[100px]" />
      </div>

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-label justify-center"><Briefcase size={14} /> Experiencia</p>
          <h2 className="section-title">Trayectoria profesional</h2>
          <div className="section-divider max-w-24 mx-auto" />
        </motion.div>

        {experience.map((job, jobIdx) => (
          <motion.div
            key={job.id}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: jobIdx * 0.2, duration: 0.6 }}
          >
            {/* Company header */}
            <div className="glass-card rounded-2xl p-6 mb-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white font-black text-xl shadow-lg shadow-blue-500/20">
                    P
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{job.company}</h3>
                    <p className="text-blue-400 font-semibold text-sm">{job.role}</p>
                  </div>
                </div>
                <div className="flex flex-col sm:items-end gap-1 text-sm text-slate-500">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={13} className="text-blue-500" />
                    <span>{job.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin size={13} className="text-cyan-500" />
                    <span>{job.location}</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 p-3 rounded-lg bg-blue-500/5 border border-blue-500/15">
                <p className="text-xs text-slate-500">
                  <span className="text-blue-400 font-semibold">ℹ</span> Los siguientes fueron tres asignaciones de proyecto
                  dentro de una misma experiencia laboral en PRAGMA.
                </p>
              </div>
            </div>

            {/* Projects timeline */}
            <div className="relative pl-12 space-y-4">
              {/* Timeline vertical line */}
              <div className="timeline-line" />

              {job.projects.map((project, pIdx) => {
                const isOpen = openProject === pIdx;
                return (
                  <motion.div
                    key={project.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + pIdx * 0.15, duration: 0.5 }}
                    className="relative"
                  >
                    {/* Timeline dot */}
                    <div className="timeline-dot" />

                    {/* Card */}
                    <div className="glass-card rounded-xl overflow-hidden">
                      <button
                        onClick={() => setOpenProject(isOpen ? null : pIdx)}
                        className="w-full text-left p-5 flex items-center justify-between gap-4 group"
                        id={`exp-project-${pIdx}`}
                        aria-expanded={isOpen}
                      >
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-mono text-xs text-blue-400">
                              #{String(pIdx + 1).padStart(2, '0')}
                            </span>
                            <span className="w-px h-3 bg-slate-700" />
                            <h4 className="font-bold text-white">{project.name}</h4>
                          </div>
                          <p className="text-slate-400 text-sm">{project.description}</p>
                        </div>
                        <div className="flex items-center gap-3 flex-shrink-0">
                          <div className="flex flex-wrap gap-1 hidden sm:flex">
                            {project.tags.slice(0, 2).map((tag) => (
                              <span key={tag} className="tech-badge text-xs">{tag}</span>
                            ))}
                          </div>
                          {isOpen
                            ? <ChevronUp size={16} className="text-blue-400 flex-shrink-0" />
                            : <ChevronDown size={16} className="text-slate-500 flex-shrink-0" />
                          }
                        </div>
                      </button>

                      <motion.div
                        initial={false}
                        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 pt-0 border-t border-blue-900/30">
                          <div className="pt-4 grid sm:grid-cols-2 gap-6">
                            <div>
                              <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-3">Responsabilidades</p>
                              <ul className="space-y-2">
                                {project.tasks.map((task) => (
                                  <li key={task} className="flex items-start gap-2 text-sm text-slate-400">
                                    <span className="text-blue-500 mt-0.5 flex-shrink-0">▸</span>
                                    {task}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-3">Tecnologías</p>
                              <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag) => (
                                  <span key={tag} className="tech-badge">{tag}</span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
