import { motion } from 'framer-motion';
import { GraduationCap, Code, Brain, Rocket, Sparkles, Coffee, Bug, CheckCircle2, Heart } from 'lucide-react';

export default function About() {
  const highlights = [
    { icon: GraduationCap, label: "BCA Graduate", desc: "Solid CS foundation & Student of the Year honor" },
    { icon: GraduationCap, label: "Currently pursuing MCA", desc: "At IMCC Pune, deepening software engineering" },
    { icon: Code, label: "Interested in Web & Frontend", desc: "Crafting responsive, clean, and delightful UI" },
    { icon: Brain, label: "Always learning", desc: "Exploring modern frameworks, APIs & system design" },
    { icon: Rocket, label: "Building real projects", desc: "Hackathon-tested products solving real needs" },
  ];

  const statusItems = [
    { emoji: "🎓", label: "MCA student" },
    { emoji: "💻", label: "Building things" },
    { emoji: "🧠", label: "Learning things" },
    { emoji: "🐛", label: "Fixing things" },
    { emoji: "☕", label: "Probably debugging something" },
    { emoji: "✨", label: "Repeat" },
  ];

  return (
    <section id="about" className="py-20 bg-cream-50 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Tag */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-bold uppercase tracking-widest text-lavender-600">01 / BACKGROUND</span>
          <span className="w-8 h-[1px] bg-lavender-300" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Story Narrative */}
          <div className="lg:col-span-7">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal-950 tracking-tight mb-6">
              A little about me
            </h2>

            <div className="space-y-4 text-charcoal-700 text-base sm:text-lg leading-relaxed mb-8">
              <p>
                I'm a BCA graduate currently pursuing MCA, with a strong interest in
                <strong className="text-charcoal-950 font-semibold"> web development and front-end development</strong>.
              </p>
              <p>
                I enjoy taking an idea, figuring out how it could work, and turning it into a
                responsive, user-friendly web experience that feels polished and natural to use.
              </p>
              <p>
                I'm constantly learning, experimenting, and improving my skills through
                real-world projects, hackathons, and collaborative engineering challenges.
              </p>
            </div>

            {/* Structured Value Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {highlights.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl bg-white border border-cream-300 shadow-sm hover:border-lavender-300 hover:shadow-soft transition-all duration-200 flex items-start gap-3"
                  >
                    <div className="w-8 h-8 rounded-xl bg-lavender-100/70 text-lavender-600 flex items-center justify-center shrink-0 mt-0.5">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-charcoal-900">{item.label}</h4>
                      <p className="text-[11px] text-charcoal-500 mt-0.5 leading-snug">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Personality Mini-Card */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-sm rounded-3xl bg-white p-6 border-2 border-lavender-200/80 shadow-soft-lg relative overflow-hidden"
            >
              {/* Cute top gradient bar */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-lavender-400 via-peach-300 to-mint-400" />

              <div className="flex items-center justify-between pb-4 mb-4 border-b border-cream-200">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-lavender-100 flex items-center justify-center text-lavender-600">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-extrabold text-charcoal-950">Current status</h3>
                    <p className="text-[10px] text-charcoal-500 font-mono">live telemetry</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-[10px] font-semibold text-emerald-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  active
                </span>
              </div>

              {/* Status List with checkmarks */}
              <div className="space-y-2.5">
                {statusItems.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -6 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08 }}
                    className="flex items-center justify-between px-3 py-2 rounded-xl bg-cream-50 hover:bg-lavender-50/60 border border-cream-200 text-xs font-medium text-charcoal-800 transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="text-sm">{item.emoji}</span>
                      <span>{item.label}</span>
                    </div>
                    <CheckCircle2 className="w-3.5 h-3.5 text-lavender-500 opacity-60" />
                  </motion.div>
                ))}
              </div>

              {/* Personality Microcopy Footer */}
              <div className="mt-5 pt-3.5 border-t border-cream-200/80 flex items-center justify-between text-[11px] text-charcoal-500 font-mono">
                <span>// fuel: caffeine & curiosities</span>
                <span className="text-peach-400">♥</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
