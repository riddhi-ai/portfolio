import { skillCategories, currentlyExploring } from '../data/skills';
import { 
  Code2, Palette, FileCode, Atom, Sparkles, Zap, 
  Terminal, Cpu, Binary, Workflow, Database, 
  GitBranch, Github, Laptop, Compass, Globe
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function Skills() {
  // Icon mapper
  const iconMap = {
    Code2,
    Palette,
    FileCode,
    Atom,
    Sparkles,
    Zap,
    Terminal,
    Cpu,
    Binary,
    Workflow,
    Database,
    GitBranch,
    Github,
    Laptop,
  };

  return (
    <section id="skills" className="py-20 bg-cream-100 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="text-xs font-bold uppercase tracking-widest text-lavender-600">04 / STACK</span>
            <span className="w-8 h-[1px] bg-lavender-300" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal-950 tracking-tight mb-3">
            Tools I build with
          </h2>
          <p className="text-charcoal-600 text-sm sm:text-base">
            Technologies I use while building, learning, and experimenting.
          </p>
        </div>

        {/* Skill Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 rounded-3xl bg-white border border-cream-300 shadow-soft hover:shadow-soft-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-base font-extrabold text-charcoal-950">
                    {cat.title}
                  </h3>
                  <span className="text-xs text-lavender-500">✦</span>
                </div>
                <p className="text-xs text-charcoal-500 mb-6 leading-relaxed">
                  {cat.description}
                </p>

                <div className="grid grid-cols-1 gap-2.5">
                  {cat.skills.map((skill) => {
                    const IconComponent = iconMap[skill.icon] || Code2;
                    return (
                      <div
                        key={skill.name}
                        className="group flex items-center justify-between p-2.5 rounded-xl bg-cream-50 hover:bg-lavender-50/70 border border-cream-200/80 hover:border-lavender-200 transition-all duration-200"
                        data-cursor={skill.name.toUpperCase()}
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-white border border-cream-300 flex items-center justify-center text-charcoal-700 group-hover:text-lavender-600 group-hover:scale-110 transition-all shadow-xs">
                            <IconComponent className="w-4 h-4" />
                          </div>
                          <div>
                            <p className="text-xs font-bold text-charcoal-900 group-hover:text-lavender-900">
                              {skill.name}
                            </p>
                            <p className="text-[10px] text-charcoal-500">
                              {skill.tag}
                            </p>
                          </div>
                        </div>
                        <span className="text-[10px] text-charcoal-400 group-hover:text-lavender-600 font-mono">
                          active
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Currently Exploring Section with Decorative Mini-Browser */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-cream-300 shadow-soft-lg relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-peach-400 animate-ping" />
                <span className="text-xs font-bold uppercase tracking-wider text-peach-700">Continuous Growth</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-charcoal-950 tracking-tight mb-3">
                Currently exploring →
              </h3>
              <p className="text-sm text-charcoal-600 mb-6 leading-relaxed">
                Frontend is the entryway; I'm currently extending into backend architectures, RESTful API design, and cloud deployments to build robust end-to-end applications.
              </p>

              {/* Badges */}
              <div className="flex flex-wrap gap-2">
                {currentlyExploring.map((item, idx) => (
                  <div
                    key={idx}
                    className="px-3 py-1.5 rounded-xl bg-cream-100 hover:bg-peach-50 border border-cream-300 hover:border-peach-300 transition-colors"
                  >
                    <span className="text-xs font-bold text-charcoal-800">✦ {item.name}</span>
                    <span className="text-[10px] text-charcoal-500 block">{item.note}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Decorative Mini-Browser Window */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-sm rounded-2xl bg-charcoal-950 p-4 border border-charcoal-800 shadow-xl" aria-hidden="true">
                {/* Browser Top Bar */}
                <div className="flex items-center justify-between pb-3 border-b border-charcoal-800">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
                  </div>
                  <div className="px-3 py-0.5 rounded-md bg-charcoal-900 border border-charcoal-800 text-[10px] font-mono text-charcoal-400 flex items-center gap-1">
                    <Globe className="w-2.5 h-2.5" />
                    <span>riddhi.dev/learning</span>
                  </div>
                  <span className="text-[10px] font-mono text-lavender-400 animate-pulse">
                    learning...
                  </span>
                </div>

                {/* Browser Body */}
                <div className="py-4 px-3 font-mono text-xs text-charcoal-300 space-y-2">
                  <div className="flex items-center gap-2 text-emerald-400">
                    <span>$</span>
                    <span>curl -X GET /api/v1/curiosity</span>
                  </div>
                  <div className="text-[11px] text-charcoal-400 pl-4 border-l border-charcoal-800">
                    <p>{"{"}</p>
                    <p className="pl-3">"status": "absorbing_new_knowledge",</p>
                    <p className="pl-3">"topics": ["Advanced React", "DevOps"],</p>
                    <p className="pl-3">"coffee_level": "optimal"</p>
                    <p>{"}"}</p>
                  </div>
                  <div className="flex items-center gap-1.5 text-peach-300 text-[11px] pt-1">
                    <span className="animate-spin">✦</span>
                    <span>Ready for challenging problems</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
