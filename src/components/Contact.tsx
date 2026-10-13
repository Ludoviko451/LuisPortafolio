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
    value: 'Agregar perfil',
    href: personalInfo.linkedin,
    color: 'blue',
    description: 'Conectemos profesionalmente',
  },
  {
    id: 'contact-email',
    icon: Mail,
    label: 'Email',
    value: 'Contactar por email',
    href: personalInfo.email ? `mailto:${personalInfo.email}` : '#',
    color: 'cyan',
    description: 'Envíame un mensaje directo',
  },
];

const colorStyles: Record<string, { bg: string; text: string; border: string }> = {
  slate: { bg: 'bg-slate-500/10', text: 'text-slate-400', border: 'border-slate-500/20' },
  blue: { bg: 'bg-blue-500/10', text: 'text-blue-400', border: 'border-blue-500/20' },
  cyan: { bg: 'bg-cyan-500/10', text: 'text-cyan-400', border: 'border-cyan-500/20' },
};

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="contacto" ref={ref} className="py-24 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-blue-600/5 blur-[120px]" />
      </div>

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-label justify-center"><MessageSquare size={14} /> Contacto</p>
          <h2 className="section-title">¿Hablamos?</h2>
          <p className="text-slate-400 max-w-xl mx-auto leading-relaxed">
            Estoy abierto a oportunidades laborales, colaboraciones y proyectos interesantes.
            No dudes en contactarme.
          </p>
          <div className="section-divider max-w-24 mx-auto mt-6" />
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-2 text-slate-500 mb-10 text-sm"
          >
            <MapPin size={14} className="text-blue-500" />
            <span>Cúcuta, Colombia</span>
            <span className="text-slate-700 mx-1">•</span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Disponible remotamente
            </span>
          </motion.div>

          {/* Contact cards */}
          <div className="grid sm:grid-cols-3 gap-4 mb-10">
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
                  transition={{ delay: 0.3 + idx * 0.1 }}
                  className="glass-card rounded-2xl p-6 flex flex-col items-center text-center group"
                >
                  <div className={`w-12 h-12 rounded-xl ${colors.bg} border ${colors.border} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon size={22} className={colors.text} />
                  </div>
                  <h3 className="font-bold text-white mb-1">{link.label}</h3>
                  <p className="text-slate-500 text-xs mb-2">{link.description}</p>
                  <span className={`text-xs font-mono ${colors.text}`}>{link.value}</span>
                </motion.a>
              );
            })}
          </div>

          {/* CV Download */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="glass rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          >
            <div>
              <h3 className="font-bold text-white mb-1">Hoja de Vida</h3>
              <p className="text-slate-500 text-sm">
                Descarga mi CV completo con información de formación, experiencia y habilidades.
              </p>
            </div>
            <a
              href="/cv-luis-quiros.pdf"
              download
              id="contact-download-cv"
              className="btn-primary flex-shrink-0"
            >
              <Download size={16} />
              Descargar CV
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
