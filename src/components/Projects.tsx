import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FolderGit2, GitBranch, ExternalLink, Star } from 'lucide-react';
import { projects } from '../data/portfolioData';

const techColors: Record<string, string> = {
  Java:          'bg-orange-50 text-orange-700 border-orange-200',
  'Spring Boot': 'bg-emerald-50 text-emerald-700 border-emerald-200',
  Python:        'bg-amber-50 text-amber-700 border-amber-200',
  JavaScript:    'bg-yellow-50 text-yellow-800 border-yellow-200',
  TypeScript:    'bg-blue-50 text-blue-700 border-blue-200',
  React:         'bg-sky-50 text-sky-700 border-sky-200',
  Kotlin:        'bg-purple-50 text-purple-700 border-purple-200',
  Android:       'bg-green-50 text-green-700 border-green-200',
  HTML:          'bg-orange-50 text-orange-700 border-orange-200',
  CSS:           'bg-blue-50 text-blue-700 border-blue-200',
  Figma:         'bg-pink-50 text-pink-700 border-pink-200',
  default:       'bg-slate-100 text-slate-700 border-slate-200',
};

const getTechColor = (t: string) => techColors[t] ?? techColors.default;

interface Project {
  id: number; name: string; description: string;
  technologies: string[]; github: string; demo: string | null; highlight: boolean;
}

function ProjectCard({ project, idx, inView, featured = false }:
  { project: Project; idx: number; inView: boolean; featured?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.15 + idx * 0.09, duration: 0.5 }}
      className="glass-card flex flex-col h-full"
    >
      {/* Top */}
      <div className="flex items-start gap-3.5 mb-4">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-blue-50 border border-blue-100">
          <FolderGit2 size={18} className="text-blue-600" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="font-bold text-slate-900 text-lg leading-tight">{project.name}</h3>
            {featured && (
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-700 bg-amber-50 border border-amber-200 rounded-full px-2.5 py-0.5">
                <Star size={10} fill="currentColor" /> Destacado
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-slate-600 text-sm leading-relaxed flex-1 mb-5">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-6">
        {project.technologies.map((t) => (
          <span key={t} className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border ${getTechColor(t)}`}>
            {t}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex items-center gap-4 pt-4 border-t border-slate-200">
        <a href={project.github} target="_blank" rel="noopener noreferrer"
          id={`project-repo-${project.id}`}
          className="flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
          <GitBranch size={15} /> Repositorio
        </a>
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noopener noreferrer"
            id={`project-demo-${project.id}`}
            className="flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors">
            <ExternalLink size={15} /> Demo
          </a>
        )}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const highlighted = projects.filter((p) => p.highlight);
  const rest = projects.filter((p) => !p.highlight);

  return (
    <section id="proyectos" ref={ref} className="py-20 sm:py-24 relative min-h-[calc(100vh-140px)] flex flex-col justify-center">
      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="text-center mb-20"
        >
          <p className="section-label justify-center"><FolderGit2 size={14} /> Proyectos</p>
          <h2 className="section-title">Trabajo en GitHub</h2>
          <p className="text-slate-600 text-base mt-2">
            Repositorios públicos en{' '}
            <a href="https://github.com/Ludoviko451" target="_blank" rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 font-semibold underline underline-offset-4">
              github.com/Ludoviko451
            </a>
          </p>
          <div className="section-divider mx-auto mt-6" style={{ maxWidth: 80 }} />
        </motion.div>

        {/* Highlighted — 2 cols */}
        {highlighted.length > 0 && (
          <div className="grid md:grid-cols-2 gap-7 mb-8">
            {highlighted.map((p, i) => (
              <ProjectCard key={p.id} project={p} idx={i} inView={inView} featured />
            ))}
          </div>
        )}

        {/* Rest — 4 cols on xl */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-7 mb-14">
          {rest.map((p, i) => (
            <ProjectCard key={p.id} project={p} idx={highlighted.length + i} inView={inView} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a href="https://github.com/Ludoviko451" target="_blank" rel="noopener noreferrer"
            id="projects-cta" className="btn-secondary inline-flex px-8 py-3.5 text-base">
            <GitBranch size={18} /> Ver todos los repositorios
          </a>
        </div>
      </div>
    </section>
  );
}
