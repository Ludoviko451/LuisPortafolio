import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Calendar, CheckCircle, Clock } from 'lucide-react';
import { education } from '../data/portfolioData';

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="formacion" ref={ref} className="py-24 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-indigo-600/5 blur-[100px]" />
      </div>

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-label justify-center"><GraduationCap size={14} /> Formación</p>
          <h2 className="section-title">Educación académica</h2>
          <div className="section-divider max-w-24 mx-auto" />
        </motion.div>

        <div className="max-w-2xl mx-auto space-y-5">
          {education.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              className="glass-card rounded-2xl p-6 flex items-start gap-5 group"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-2xl flex-shrink-0 shadow-lg shadow-blue-500/15 group-hover:shadow-blue-500/30 transition-shadow">
                {item.icon}
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <h3 className="font-bold text-white text-lg leading-tight">{item.degree}</h3>
                  <span className={`flex-shrink-0 inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full ${
                    item.status === 'En curso'
                      ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                      : 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                  }`}>
                    {item.status === 'En curso'
                      ? <Clock size={10} />
                      : <CheckCircle size={10} />
                    }
                    {item.status}
                  </span>
                </div>
                <p className="text-blue-400 font-semibold text-sm mt-1">{item.institution}</p>
                <div className="flex items-center gap-1.5 text-slate-500 text-sm mt-2">
                  <Calendar size={13} className="text-slate-600" />
                  {item.period}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
