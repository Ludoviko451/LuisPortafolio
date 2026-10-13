import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FolderGit2, GitBranch, ExternalLink, Star } from 'lucide-react';
import { projects } from '../data/portfolioData';

const techColors: Record<string, string> = {
  Java:          'bg-orange-500/10 text-orange-400 border-orange-500/20',
  'Spring Boot': 'bg-green-500/10  text-green-400  border-green-500/20',
  Python:        'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
  JavaScript:    'bg-yellow-400/10 text-yellow-300 border-yellow-400/20',
  TypeScript:    'bg-blue-400/10   text-blue-300   border-blue-400/20',
  React:         'bg-cyan-500/10   text-cyan-400   border-cyan-500/20',
  Kotlin:        'bg-purple-500/10 text-purple-400  border-purple-500/20',
  Android:       'bg-green-600/10  text-green-400  border-green-600/20',
  HTML:          'bg-orange-600/10 text-orange-300 border-orange-600/20',
  CSS:           'bg-blue-600/10   text-blue-300   border-blue-600/20',
  Figma:         'bg-pink-500/10   text-pink-400   border-pink-500/20',
  default:       'bg-slate-600/15  text-slate-400  border-slate-600/20',
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
      <div className="flex items-start gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ background: 'rgba(59,130,246,0.1)' }}>
          <FolderGit2 size={18} className="text-blue-400" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="font-bold text-white leading-tight">{project.name}</h3>
            {featured && (
              <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-yellow-400 bg-yellow-400/10 border border-yellow-400/20 rounded-full px-2 py-0.5">
                <Star size={9} fill="currentColor" /> Destacado
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-5">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.technologies.map((t) => (
          <span key={t} className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getTechColor(t)}`}>
            {t}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex items-center gap-4 pt-4 border-t border-blue-900/25">
        <a href={project.github} target="_blank" rel="noopener noreferrer"
          id={`project-repo-${project.id}`}
          className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors">
          <GitBranch size={14} /> Repositorio
        </a>
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noopener noreferrer"
            id={`project-demo-${project.id}`}
            className="flex items-center gap-1.5 text-sm text-cyan-400 hover:text-cyan-300 transition-colors">
            <ExternalLink size={14} /> Demo
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
    <section id="proyectos" ref={ref} className="py-36 relative">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/3 w-96 h-96 rounded-full bg-blue-600/5 blur-[100px]" />
      </div>

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
          <p className="text-slate-400 text-base mt-2">
            Repositorios públicos en{' '}
            <a href="https://github.com/Ludoviko451" target="_blank" rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 underline underline-offset-4">
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
