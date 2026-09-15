import { achievements } from '../data/achievements';
import { Trophy, Award, Sparkles, Medal, Star, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Achievements() {
  const iconMap = {
    Trophy,
    Award,
    Sparkles,
    Medal,
    Star,
  };

  return (
    <section id="achievements" className="py-20 bg-cream-50 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="text-xs font-bold uppercase tracking-widest text-lavender-600">05 / MILESTONES</span>
            <span className="w-8 h-[1px] bg-lavender-300" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal-950 tracking-tight mb-3">
            Beyond the code
          </h2>
          <p className="text-charcoal-600 text-sm sm:text-base">
            Recognitions from competitive hackathons, scientific research conventions, and academics.
          </p>
        </div>

        {/* Milestone Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, idx) => {
            const IconComponent = iconMap[item.icon] || Award;
            return (
              <motion.div
                key={item.id}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="group relative p-6 rounded-3xl bg-white border border-cream-300 shadow-soft hover:shadow-soft-lg hover:border-lavender-300 transition-all flex flex-col justify-between"
                data-cursor="HONOR"
              >
                <div>
                  {/* Top Bar: Badge & Year */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="px-2.5 py-1 rounded-full bg-lavender-50 border border-lavender-200 text-lavender-700 text-[11px] font-bold">
                      {item.badge}
                    </span>
                    <span className="text-xs font-mono text-charcoal-500 font-medium">
                      {item.year}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-2xl bg-cream-100 border border-cream-300 text-charcoal-800 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 group-hover:bg-lavender-100 group-hover:text-lavender-700 group-hover:border-lavender-200 transition-all duration-300 shrink-0 shadow-xs">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-extrabold text-charcoal-950 leading-snug group-hover:text-lavender-900 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs font-semibold text-charcoal-600 mt-0.5">
                        {item.event}
                      </p>
                    </div>
                  </div>

                  {/* Organization */}
                  <p className="text-[11px] font-mono text-charcoal-500 mb-4 pl-1 border-l-2 border-cream-300">
                    {item.organization}
                  </p>

                  {/* Highlight text */}
                  <p className="text-xs text-charcoal-600 leading-relaxed">
                    {item.highlight}
                  </p>
                </div>

                {/* Subtle bottom indicator */}
                <div className="mt-5 pt-3 border-t border-cream-200/70 flex items-center justify-between text-[10px] text-charcoal-400">
                  <span className="font-mono">{item.category}</span>
                  <span className="text-lavender-500 opacity-0 group-hover:opacity-100 transition-opacity">
                    verified milestone ✧
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
