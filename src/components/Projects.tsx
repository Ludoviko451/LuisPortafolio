import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FolderGit2, Github, ExternalLink, Star } from 'lucide-react';
import { projects } from '../data/portfolioData';

const techColors: Record<string, string> = {
  Java: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
  'Spring Boot': 'bg-green-500/10 text-green-400 border-green-500/20',
  Python: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
  JavaScript: 'bg-yellow-400/10 text-yellow-300 border-yellow-400/20',
  TypeScript: 'bg-blue-400/10 text-blue-300 border-blue-400/20',
  React: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
  Kotlin: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  Android: 'bg-green-600/10 text-green-400 border-green-600/20',
  HTML: 'bg-orange-600/10 text-orange-300 border-orange-600/20',
  CSS: 'bg-blue-600/10 text-blue-300 border-blue-600/20',
  Flutter: 'bg-blue-400/10 text-blue-300 border-blue-400/20',
  Firebase: 'bg-yellow-600/10 text-yellow-300 border-yellow-600/20',
  Backend: 'bg-slate-600/20 text-slate-400 border-slate-600/20',
  Frontend: 'bg-pink-500/10 text-pink-400 border-pink-500/20',
  default: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
};

function getTechColor(tech: string): string {
  return techColors[tech] ?? techColors.default;
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const highlighted = projects.filter((p) => p.highlight);
  const rest = projects.filter((p) => !p.highlight);

  return (
    <section id="proyectos" ref={ref} className="py-24 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/3 w-96 h-96 rounded-full bg-blue-600/5 blur-[100px]" />
      </div>

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-label justify-center"><FolderGit2 size={14} /> Proyectos</p>
          <h2 className="section-title">Trabajo en GitHub</h2>
          <p className="text-slate-500 max-w-lg mx-auto text-sm mt-2">
            Proyectos públicos disponibles en{' '}
            <a
              href="https://github.com/Ludoviko451"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
            >
              github.com/Ludoviko451
            </a>
          </p>
          <div className="section-divider max-w-24 mx-auto mt-4" />
        </motion.div>

        {/* Highlighted projects */}
        {highlighted.length > 0 && (
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {highlighted.map((project, idx) => (
              <ProjectCard key={project.id} project={project} idx={idx} inView={inView} featured />
            ))}
          </div>
        )}

        {/* Rest of projects */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {rest.map((project, idx) => (
            <ProjectCard key={project.id} project={project} idx={highlighted.length + idx} inView={inView} />
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/Ludoviko451"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex"
            id="projects-github-cta"
          >
            <Github size={16} />
            Ver todos los repositorios
          </a>
        </motion.div>
      </div>
    </section>
  );
}

interface Project {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string | null;
  highlight: boolean;
}

function ProjectCard({
  project,
  idx,
  inView,
  featured = false,
}: {
  project: Project;
  idx: number;
  inView: boolean;
  featured?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.2 + idx * 0.1, duration: 0.5 }}
      className="glass-card rounded-2xl p-6 flex flex-col h-full group"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
            <FolderGit2 size={18} className="text-blue-400" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-white">{project.name}</h3>
              {featured && (
                <span className="flex items-center gap-1 text-xs text-yellow-400 bg-yellow-400/10 border border-yellow-400/20 rounded-full px-2 py-0.5">
                  <Star size={10} fill="currentColor" />
                  Destacado
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-4">
        {project.description}
      </p>

      {/* Technologies */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getTechColor(tech)}`}
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex items-center gap-3 pt-4 border-t border-blue-900/30">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors"
          id={`project-github-${project.id}`}
        >
          <Github size={14} />
          Repositorio
        </a>
        {project.demo && (
          <>
            <span className="text-slate-700">•</span>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
              id={`project-demo-${project.id}`}
            >
              <ExternalLink size={14} />
              Demo / Figma
            </a>
          </>
        )}
      </div>
    </motion.div>
  );
}
