import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Calendar, CheckCircle, Clock } from 'lucide-react';
import { education } from '../data/portfolioData';

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="formacion" ref={ref} className="py-20 sm:py-24 relative bg-white border-y border-slate-200/80 min-h-[calc(100vh-140px)] flex flex-col justify-center">
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="text-center mb-20"
        >
          <p className="section-label justify-center"><GraduationCap size={14} /> Formación</p>
          <h2 className="section-title">Educación académica</h2>
          <div className="section-divider mx-auto" style={{ maxWidth: 80 }} />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {education.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.18, duration: 0.55 }}
              className="glass-card flex flex-col justify-between p-8 sm:p-9 h-full"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 bg-blue-50 border border-blue-100 text-blue-600 shadow-xs"
                  >
                    {item.icon}
                  </div>
                  <span
                    className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full ${
                      item.status === 'En curso'
                        ? 'bg-amber-50 text-amber-700 border border-amber-200'
                        : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                    }`}
                  >
                    {item.status === 'En curso' ? <Clock size={12} /> : <CheckCircle size={12} />}
                    {item.status}
                  </span>
                </div>
                <h3 className="font-bold text-slate-900 text-xl leading-snug mb-2">{item.degree}</h3>
                <p className="text-blue-600 font-semibold text-base mb-6">{item.institution}</p>
              </div>
              <div className="pt-4 border-t border-slate-200 flex items-center gap-2 text-slate-500 text-sm">
                <Calendar size={15} className="text-slate-400" />
                <span>{item.period}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
