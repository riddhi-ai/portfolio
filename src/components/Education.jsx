import { education } from '../data/education';
import { GraduationCap, MapPin, Calendar, BookOpen, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Education() {
  return (
    <section id="education" className="py-20 bg-cream-100 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="text-xs font-bold uppercase tracking-widest text-lavender-600">06 / ACADEMICS</span>
            <span className="w-8 h-[1px] bg-lavender-300" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal-950 tracking-tight mb-3">
            Education
          </h2>
          <p className="text-charcoal-600 text-sm sm:text-base">
            Academic pathway in computer applications, software engineering, and core computing foundations.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l-2 border-lavender-200/80 ml-4 sm:ml-8 space-y-10">
          {education.map((item, idx) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="relative pl-6 sm:pl-8"
            >
              {/* Timeline Pin Node */}
              <div
                className={`absolute -left-[17px] top-1.5 w-8 h-8 rounded-full border-4 border-cream-100 flex items-center justify-center text-xs shadow-sm ${
                  item.current
                    ? 'bg-lavender-600 text-white ring-4 ring-lavender-100'
                    : 'bg-white text-charcoal-700 border-lavender-200'
                }`}
              >
                <GraduationCap className="w-4 h-4" />
              </div>

              {/* Card */}
              <div className="p-6 rounded-3xl bg-white border border-cream-300 shadow-soft hover:shadow-soft-lg transition-all">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold ${
                      item.current
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                        : 'bg-lavender-50 text-lavender-700 border border-lavender-200'
                    }`}
                  >
                    {item.status}
                  </span>
                  <span className="text-xs font-mono text-charcoal-500 font-semibold flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {item.period}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-black text-charcoal-950 tracking-tight mb-1">
                  {item.degree}
                </h3>

                <p className="text-sm font-semibold text-lavender-700 mb-2">
                  {item.institution}
                </p>

                {item.college && (
                  <p className="text-xs text-charcoal-600 mb-2">
                    College: {item.college}
                  </p>
                )}

                <div className="flex items-center gap-1.5 text-xs text-charcoal-500 mb-4">
                  <MapPin className="w-3.5 h-3.5 text-peach-400" />
                  <span>{item.location}</span>
                </div>

                <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed pt-3 border-t border-cream-200">
                  {item.focus}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
