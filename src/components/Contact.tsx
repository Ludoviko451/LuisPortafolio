import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, GitBranch, Link2, Download, MessageSquare, MapPin } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const contactLinks = [
  {
    id: 'contact-github',
    icon: GitBranch,
    label: 'GitHub',
    value: '@Ludoviko451',
    href: personalInfo.github,
    color: 'slate',
    description: 'Revisa mis repositorios y contribuciones',
  },
  {
    id: 'contact-linkedin',
    icon: Link2,
    label: 'LinkedIn',
    value: 'luisquirosflorez',
    href: 'https://www.linkedin.com/in/luisquirosflorez/',
    color: 'blue',
    description: 'Conectemos profesionalmente',
  },
  {
    id: 'contact-email',
    icon: Mail,
    label: 'Email',
    value: 'luisangelquirosflorez@gmail.com',
    href: 'mailto:luisangelquirosflorez@gmail.com',
    color: 'cyan',
    description: 'Envíame un mensaje directo',
  },
];

const colorStyles: Record<string, { bg: string; text: string; border: string }> = {
  slate: { bg: 'bg-slate-100', text: 'text-slate-800', border: 'border-slate-200' },
  blue:  { bg: 'bg-blue-50',  text: 'text-blue-700',  border: 'border-blue-200'  },
  cyan:  { bg: 'bg-sky-50',   text: 'text-sky-700',   border: 'border-sky-200'   },
};

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="contacto" ref={ref} className="py-20 sm:py-24 relative min-h-[calc(100vh-140px)] flex flex-col justify-center">
      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-label justify-center">
            <MessageSquare size={14} /> Contacto
          </p>
          <h2 className="section-title">¿Hablamos?</h2>
          <p className="text-slate-600 max-w-xl mx-auto leading-relaxed text-base sm:text-lg">
            Estoy abierto a oportunidades laborales, colaboraciones y proyectos
            interesantes. No dudes en contactarme.
          </p>
          <div className="section-divider max-w-28 mx-auto mt-7" />
        </motion.div>

        <div className="w-full space-y-10">
          {/* Location badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15 }}
            className="flex items-center justify-center flex-wrap gap-3 text-slate-500 text-sm"
          >
            <span className="inline-flex items-center gap-1.5 font-medium">
              <MapPin size={16} className="text-blue-600" />
              <span>Cúcuta, Colombia</span>
            </span>
            <span className="text-slate-300 hidden sm:inline">•</span>
            <span className="inline-flex items-center gap-2 font-medium">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Disponible remotamente</span>
            </span>
          </motion.div>

          {/* Contact cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactLinks.map((link, idx) => {
              const Icon = link.icon;
              const colors = colorStyles[link.color];

              return (
                <motion.a
                  key={link.id}
                  id={link.id}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.25 + idx * 0.1 }}
                  className="glass-card flex flex-col items-center text-center justify-between group cursor-pointer p-9 hover:-translate-y-1.5 transition-all duration-300 min-h-[240px]"
                >
                  <div className="flex flex-col items-center w-full">
                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-2xl ${colors.bg} border ${colors.border} flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-200`}>
                      <Icon size={26} className={colors.text} />
                    </div>

                    {/* Label */}
                    <h3 className="font-bold text-slate-900 text-xl mb-2">{link.label}</h3>

                    {/* Description */}
                    <p className="text-slate-500 text-sm mb-5 leading-relaxed">{link.description}</p>
                  </div>

                  {/* Value */}
                  <span className="text-xs sm:text-sm font-mono font-medium text-slate-800 px-3.5 py-1.5 rounded-lg bg-slate-50 border border-slate-200 max-w-full truncate block text-center" title={link.value}>
                    {link.value}
                  </span>
                </motion.a>
              );
            })}
          </div>

          {/* CV Download card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.55 }}
            className="glass-card p-9 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left w-full"
          >
            <div className="flex items-center gap-6 flex-col md:flex-row">
              <div className="w-16 h-16 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0 shadow-xs">
                <Download size={28} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-xl sm:text-2xl mb-2">Hoja de Vida</h3>
                <p className="text-slate-600 text-base leading-relaxed max-w-xl">
                  Descarga mi currículum en PDF con información completa sobre mi formación académica, trayectoria en PRAGMA y stack tecnológico.
                </p>
              </div>
            </div>
            <a
              href="/cv-luis-quiros.pdf"
              download
              id="contact-download-cv"
              className="btn-primary flex-shrink-0 px-9 py-4 text-base"
            >
              <Download size={18} />
              Descargar CV
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
