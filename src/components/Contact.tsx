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
  slate: { bg: 'bg-slate-500/10', text: 'text-slate-300', border: 'border-slate-500/20' },
  blue:  { bg: 'bg-blue-500/10',  text: 'text-blue-400',  border: 'border-blue-500/20'  },
  cyan:  { bg: 'bg-cyan-500/10',  text: 'text-cyan-400',  border: 'border-cyan-500/20'  },
};

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="contacto" ref={ref} className="py-36 relative">
      {/* Ambient glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-blue-600/5 blur-[140px]" />
      </div>

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
          <p className="text-slate-400 max-w-xl mx-auto leading-relaxed text-base sm:text-lg">
            Estoy abierto a oportunidades laborales, colaboraciones y proyectos
            interesantes. No dudes en contactarme.
          </p>
          <div className="section-divider max-w-28 mx-auto mt-7" />
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-10">
          {/* Location badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15 }}
            className="flex items-center justify-center flex-wrap gap-3 text-slate-400 text-sm"
          >
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={15} className="text-blue-400" />
              <span>Cúcuta, Colombia</span>
            </span>
            <span className="text-slate-700 hidden sm:inline">•</span>
            <span className="inline-flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
              <span>Disponible remotamente</span>
            </span>
          </motion.div>

          {/* Contact cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
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
                  className="glass-card flex flex-col items-center text-center justify-between group cursor-pointer p-8 hover:-translate-y-1.5 transition-all duration-300 min-h-[220px]"
                >
                  <div className="flex flex-col items-center">
                    {/* Icon */}
                    <div className={`w-14 h-14 rounded-2xl ${colors.bg} border ${colors.border} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-200`}>
                      <Icon size={24} className={colors.text} />
                    </div>

                    {/* Label */}
                    <h3 className="font-bold text-white text-lg mb-1.5">{link.label}</h3>

                    {/* Description */}
                    <p className="text-slate-400 text-xs mb-4 leading-relaxed">{link.description}</p>
                  </div>

                  {/* Value */}
                  <span className={`text-xs font-mono font-medium ${colors.text} px-2 py-1 rounded-md bg-white/5 border border-white/5 max-w-full truncate block text-center`} title={link.value}>
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
            className="glass-card p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left"
          >
            <div className="flex items-center gap-6 flex-col md:flex-row">
              <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 flex-shrink-0 shadow-lg shadow-blue-500/10">
                <Download size={24} />
              </div>
              <div>
                <h3 className="font-bold text-white text-lg sm:text-xl mb-1.5">Hoja de Vida</h3>
                <p className="text-slate-400 text-sm leading-relaxed max-w-lg">
                  Descarga mi currículum en PDF con información completa sobre mi formación, trayectoria en PRAGMA y stack tecnológico.
                </p>
              </div>
            </div>
            <a
              href="/cv-luis-quiros.pdf"
              download
              id="contact-download-cv"
              className="btn-primary flex-shrink-0 px-8 py-3.5 text-base shadow-lg shadow-blue-600/30"
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
