import { useState, useEffect } from 'react';
import profilePhoto from './assets/foto.png';
import {
  personalInfo,
  experience,
  projects,
  skills,
  education,
} from './data/portfolioData';

// Icons
function GithubIcon({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function LinkedinIcon({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

function MailIcon({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function DownloadIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

function ArrowUpRightIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className={`inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px ${className}`}
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
        clipRule="evenodd"
      />
    </svg>
  );
}

const navSections = [
  { id: 'about', label: 'Sobre mí' },
  { id: 'experience', label: 'Experiencia' },
  { id: 'projects', label: 'Proyectos' },
  { id: 'skills', label: 'Habilidades' },
  { id: 'education', label: 'Educación' },
  { id: 'contact', label: 'Contacto' },
];

export default function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  // Mouse spotlight glow
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Intersection Observer for active nav section
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    navSections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative bg-slate-900 leading-relaxed text-slate-400 selection:bg-teal-300 selection:text-teal-900 min-h-screen">
      {/* Brittany Chiang signature radial flashlight glow */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition duration-300"
        style={{
          background: `radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
        }}
      />

      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          {/* =========================================================
              LEFT COLUMN (Sticky Desktop Header & Navigation)
             ========================================================= */}
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
              {/* Profile Avatar & Name */}
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={profilePhoto}
                  alt={personalInfo.name}
                  className="w-16 h-16 rounded-full object-cover ring-2 ring-teal-400/40 shadow-lg"
                />
                <div>
                  <span className="inline-block text-xs font-mono font-medium text-teal-300 bg-teal-400/10 px-2.5 py-0.5 rounded-full border border-teal-400/20">
                    Abierto a roles en TI & Software
                  </span>
                </div>
              </div>

              <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                <a href="#about">{personalInfo.name}</a>
              </h1>
              <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
                {personalInfo.role} · {personalInfo.roleAlt}
              </h2>
              <p className="mt-4 max-w-xs leading-normal text-slate-400 text-sm">
                Desarrollo soluciones backend y participo en diversas áreas de tecnología: desarrollo de software, soporte técnico TI, análisis de sistemas y servicios cloud.
              </p>

              {/* Navigation Menu (Hidden on mobile, visible on desktop) */}
              <nav className="nav hidden lg:block" aria-label="Navegación de secciones">
                <ul className="mt-16 w-max">
                  {navSections.map(({ id, label }) => {
                    const isActive = activeSection === id;
                    return (
                      <li key={id}>
                        <a
                          href={`#${id}`}
                          onClick={(e) => {
                            e.preventDefault();
                            scrollTo(id);
                          }}
                          className={`group flex items-center py-3 ${
                            isActive ? 'active' : ''
                          }`}
                        >
                          <span
                            className={`nav-indicator mr-4 h-px transition-all motion-reduce:transition-none ${
                              isActive
                                ? 'w-16 bg-slate-200'
                                : 'w-8 bg-slate-600 group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200'
                            }`}
                          />
                          <span
                            className={`nav-text text-xs font-bold uppercase tracking-widest ${
                              isActive
                                ? 'text-slate-200'
                                : 'text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200'
                            }`}
                          >
                            {label}
                          </span>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>

            {/* Download CV & Social Icons at Bottom Left */}
            <div className="mt-8 space-y-4">
              <div>
                <a
                  href={`${import.meta.env.BASE_URL}cv-luis-quiros.pdf`}
                  download="CV_Luis_Angel_Quiros.pdf"
                  className="inline-flex items-center gap-2 rounded-md border border-teal-400/30 bg-teal-400/10 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-teal-300 hover:bg-teal-400/20 hover:border-teal-400/60 transition-all shadow-sm group"
                  id="header-download-cv"
                >
                  <DownloadIcon className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
                  <span>Descargar CV</span>
                </a>
              </div>

              <ul className="ml-1 flex items-center gap-5 text-slate-400" aria-label="Redes sociales">
                <li>
                  <a
                    className="block hover:text-slate-200 transition-colors"
                    href={personalInfo.github}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="GitHub de Luis Ángel Quirós"
                    title="GitHub"
                  >
                    <GithubIcon className="h-6 w-6" />
                  </a>
                </li>
                <li>
                  <a
                    className="block hover:text-slate-200 transition-colors"
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="LinkedIn de Luis Ángel Quirós"
                    title="LinkedIn"
                  >
                    <LinkedinIcon className="h-6 w-6" />
                  </a>
                </li>
                <li>
                  <a
                    className="block hover:text-slate-200 transition-colors"
                    href={`mailto:${personalInfo.email}`}
                    aria-label="Enviar correo a Luis Ángel Quirós"
                    title="Enviar correo"
                  >
                    <MailIcon className="h-6 w-6" />
                  </a>
                </li>
              </ul>
            </div>
          </header>

          {/* =========================================================
              RIGHT COLUMN (Scrollable Content Feed)
             ========================================================= */}
          <main className="pt-24 lg:w-1/2 lg:py-24">
            {/* ----------------- ABOUT SECTION ----------------- */}
            <section
              id="about"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
              aria-label="Sobre mí"
            >
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">
                  Sobre mí
                </h2>
              </div>
              <div className="space-y-4 text-slate-400 text-sm sm:text-base leading-relaxed">
                <p>
                  Soy desarrollador de software y apasionado por la <span className="font-medium text-slate-200">tecnología en general</span>, con experiencia profesional en desarrollo backend, soporte técnico de aplicaciones, microservicios, bases de datos y servicios en la nube.
                </p>
                <p>
                  Durante mi paso por <span className="font-medium text-slate-200">PRAGMA</span> trabajé en proyectos corporativos desempeñando diversas funciones clave: no solo construyendo soluciones backend y funciones serverless en <span className="font-medium text-slate-200">AWS Lambda</span> con observabilidad en <span className="font-medium text-slate-200">CloudWatch</span>, sino también brindando <span className="font-medium text-slate-200">soporte técnico a usuarios internos</span>, resolución de incidencias en producción con SQL y aseguramiento de calidad con <span className="font-medium text-slate-200">SonarCloud</span>.
                </p>
                <p>
                  Actualmente continúo mi formación en <span className="font-medium text-slate-200">Ingeniería de Sistemas</span> en la UNAD. Me motiva integrarme en diferentes ramas del ecosistema tecnológico: además del desarrollo de software (backend o fullstack), estoy abierto e interesado en roles de <span className="font-medium text-slate-200">soporte TI / Help Desk</span>, análisis de sistemas, administración de bases de datos, operaciones en la nube y mantenimiento de infraestructura.
                </p>
                <p>
                  Mi objetivo es aportar soluciones prácticas, colaborar en equipo, resolver problemas técnicos con agilidad y continuar aprendiendo nuevas herramientas tecnológicas cada día.
                </p>
              </div>
            </section>

            {/* ----------------- EXPERIENCE SECTION ----------------- */}
            <section
              id="experience"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
              aria-label="Experiencia laboral"
            >
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">
                  Experiencia
                </h2>
              </div>

              <div>
                <ol className="group/list">
                  {experience.map((exp) => (
                    <li key={exp.id} className="mb-12">
                      <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                        {/* Hover card background */}
                        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />

                        {/* Dates column */}
                        <header
                          className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
                          aria-label={exp.period}
                        >
                          {exp.period}
                        </header>

                        {/* Details column */}
                        <div className="z-10 sm:col-span-6">
                          <h3 className="font-medium leading-snug text-slate-200">
                            <div>
                              <span className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base">
                                <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                                <span>
                                  {exp.role} ·{' '}
                                  <span className="inline-block">
                                    {exp.company}
                                    <ArrowUpRightIcon />
                                  </span>
                                </span>
                              </span>
                            </div>
                          </h3>

                          {/* Projects overview inside PRAGMA */}
                          <div className="mt-3 space-y-3 text-sm leading-normal text-slate-400">
                            {exp.projects.map((proj, pIdx) => (
                              <div key={pIdx} className="space-y-1">
                                <p className="font-semibold text-slate-300 text-xs uppercase tracking-wider">
                                  {proj.name}
                                </p>
                                <p className="text-slate-400">{proj.description}</p>
                              </div>
                            ))}
                          </div>

                          {/* Tech badges */}
                          <ul className="mt-4 flex flex-wrap gap-2" aria-label="Tecnologías usadas">
                            {[
                              'Java',
                              'Spring Boot',
                              'AWS Lambda',
                              'Amazon CloudWatch',
                              'SQL',
                              'Microservicios',
                              'SonarCloud',
                              'Azure Repos',
                              'Scrum',
                            ].map((tech) => (
                              <li key={tech}>
                                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                                  {tech}
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </li>
                  ))}
                </ol>

                <div className="mt-8 flex flex-wrap items-center gap-6">
                  <a
                    className="inline-flex items-center gap-1.5 font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-sm"
                    href={`${import.meta.env.BASE_URL}cv-luis-quiros.pdf`}
                    download="CV_Luis_Angel_Quiros.pdf"
                    id="experience-download-cv"
                  >
                    <DownloadIcon className="h-4 w-4 text-teal-300" />
                    <span>Descargar CV (PDF)</span>
                    <ArrowUpRightIcon />
                  </a>

                  <a
                    className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-sm"
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Ver trayectoria completa en LinkedIn"
                  >
                    <span>
                      Ver perfil completo en{' '}
                      <span className="inline-block font-semibold">
                        LinkedIn
                        <ArrowUpRightIcon />
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </section>

            {/* ----------------- PROJECTS SECTION ----------------- */}
            <section
              id="projects"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
              aria-label="Proyectos seleccionados"
            >
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">
                  Proyectos
                </h2>
              </div>

              <div>
                <ul className="group/list">
                  {projects.map((project) => (
                    <li key={project.id} className="mb-12">
                      <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                        {/* Hover card background */}
                        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />

                        {/* Thumbnail / Year info */}
                        <div className="z-10 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                          <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded bg-slate-800/80 text-slate-400 font-mono text-[11px] border border-slate-700/50">
                            {project.technologies[0]}
                          </span>
                        </div>

                        {/* Content */}
                        <div className="z-10 sm:col-span-6">
                          <h3 className="font-medium leading-snug text-slate-200">
                            <div>
                              <a
                                className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                                href={project.demo || project.github}
                                target="_blank"
                                rel="noreferrer noopener"
                                aria-label={`${project.name} (se abre en una nueva pestaña)`}
                              >
                                <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                                <span>
                                  {project.name}
                                  <ArrowUpRightIcon />
                                </span>
                              </a>
                            </div>
                          </h3>

                          <p className="mt-2 text-sm leading-normal text-slate-400">
                            {project.description}
                          </p>

                          {/* Tech pills */}
                          <ul className="mt-4 flex flex-wrap gap-2" aria-label="Tecnologías del proyecto">
                            {project.technologies.map((tech) => (
                              <li key={tech}>
                                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                                  {tech}
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <a
                    className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-sm"
                    href={personalInfo.github}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Ver todos los repositorios en GitHub"
                  >
                    <span>
                      Ver archivo completo de repositorios en{' '}
                      <span className="inline-block font-semibold">
                        GitHub
                        <ArrowUpRightIcon />
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </section>

            {/* ----------------- SKILLS SECTION ----------------- */}
            <section
              id="skills"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
              aria-label="Habilidades técnicas"
            >
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">
                  Habilidades
                </h2>
              </div>

              <div className="space-y-8">
                {skills.map((category) => (
                  <div key={category.category} className="group relative">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-slate-300 mb-3">
                      {category.category}
                    </h3>
                    <ul className="flex flex-wrap gap-2">
                      {category.items.map((skill) => (
                        <li key={skill}>
                          <span className="inline-flex items-center rounded-full bg-slate-800/80 px-3.5 py-1.5 text-xs font-medium text-slate-300 border border-slate-700/60 hover:border-teal-400/50 hover:text-teal-300 transition-colors">
                            {skill}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* ----------------- EDUCATION SECTION ----------------- */}
            <section
              id="education"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
              aria-label="Formación académica"
            >
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">
                  Educación
                </h2>
              </div>

              <div>
                <ol className="group/list">
                  {education.map((edu) => (
                    <li key={edu.id} className="mb-10">
                      <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />

                        <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                          {edu.period}
                        </header>

                        <div className="z-10 sm:col-span-6">
                          <h3 className="font-medium leading-snug text-slate-200">
                            <div>
                              <span className="text-base text-slate-200 font-medium">
                                {edu.degree}
                              </span>
                            </div>
                          </h3>
                          <p className="mt-1 text-sm text-slate-400">
                            {edu.institution}
                          </p>
                          <div className="mt-2">
                            <span className="inline-block text-xs font-mono text-teal-300 bg-teal-400/10 px-2 py-0.5 rounded border border-teal-400/20">
                              {edu.status}
                            </span>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </section>

            {/* ----------------- CONTACT SECTION ----------------- */}
            <section
              id="contact"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
              aria-label="Contacto"
            >
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">
                  Contacto
                </h2>
              </div>

              <div className="space-y-6 text-slate-400 text-sm sm:text-base leading-relaxed">
                <p>
                  Actualmente me encuentro abierto a nuevas oportunidades en el sector tecnológico:{' '}
                  <span className="text-slate-200 font-medium">desarrollo de software (backend o fullstack)</span>, roles de{' '}
                  <span className="text-slate-200 font-medium">soporte técnico TI</span>,{' '}
                  <span className="text-slate-200 font-medium">análisis de sistemas</span>, administración de datos o servicios cloud. Si buscas un perfil versátil, comprometido y con rápida curva de aprendizaje, hablemos.
                </p>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="inline-flex items-center gap-2 rounded-md border border-teal-400/30 bg-teal-400/10 px-5 py-3 text-sm font-medium text-teal-300 hover:bg-teal-400/20 hover:border-teal-400/60 transition-all shadow-sm"
                  >
                    <MailIcon className="h-4 w-4" />
                    <span>Saludar / Contactar por correo</span>
                  </a>

                  <a
                    href={`${import.meta.env.BASE_URL}cv-luis-quiros.pdf`}
                    download="CV_Luis_Angel_Quiros.pdf"
                    className="inline-flex items-center gap-2 rounded-md border border-slate-700 bg-slate-800/80 px-5 py-3 text-sm font-medium text-slate-200 hover:border-teal-400/40 hover:text-teal-300 hover:bg-slate-800 transition-all shadow-sm"
                    id="contact-download-cv"
                  >
                    <DownloadIcon className="h-4 w-4" />
                    <span>Descargar CV</span>
                  </a>
                </div>

                <div className="pt-2 text-xs font-mono text-slate-500">
                  <p>Email directo: <span className="text-slate-300 select-all">{personalInfo.email}</span></p>
                  <p className="mt-1">Ubicación: <span className="text-slate-300">{personalInfo.location}</span></p>
                </div>
              </div>
            </section>

            {/* ----------------- FOOTER / ATTRIBUTION ----------------- */}
            <footer className="max-w-md pb-16 text-xs text-slate-500 sm:pb-0">
              <p>
                Diseñado con la estética minimalista de{' '}
                <a
                  href="https://brittanychiang.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="font-medium text-slate-400 hover:text-teal-300 transition-colors"
                >
                  Brittany Chiang
                </a>
                . Construido con{' '}
                <span className="text-slate-400">React</span>,{' '}
                <span className="text-slate-400">TypeScript</span> y{' '}
                <span className="text-slate-400">Tailwind CSS</span>. Desplegado en GitHub Pages por{' '}
                <span className="text-slate-400">{personalInfo.name}</span>.
              </p>
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
}
