import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lightbulb, Search, PenTool, Code, RefreshCw, Rocket, Sparkles, ArrowRight } from 'lucide-react';

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: "01",
      title: "IDEA",
      emoji: "💡",
      icon: Lightbulb,
      quote: "What if...?",
      short: "Every project starts with a simple question and a messy notebook.",
      detail: "I spot an everyday friction or curiosity. Whether it's organizing personal health logs or simplifying clinical appointments, I jot down initial sketches before touching code.",
      microcopy: "Ideas are usually messy at first."
    },
    {
      num: "02",
      title: "EXPLORE",
      emoji: "🔎",
      icon: Search,
      quote: "Understand the problem.",
      short: "Deep dive into user context, requirements, and constraints.",
      detail: "I examine how people currently solve the issue, what frustrates them, what data structures make sense, and what a delightful, intuitive solution would feel like.",
      microcopy: "Curiosity before architecture."
    },
    {
      num: "03",
      title: "DESIGN",
      emoji: "✏️",
      icon: PenTool,
      quote: "Think about the experience.",
      short: "Layouts, visual hierarchy, ergonomics, and accessibility.",
      detail: "Wireframing the user journey, establishing accessible color contrasts, planning component trees, and deciding how mobile users will navigate seamlessly.",
      microcopy: "Design is how it works, not just how it looks."
    },
    {
      num: "04",
      title: "BUILD",
      emoji: "💻",
      icon: Code,
      quote: "Turn the idea into code.",
      short: "Translating thoughts into modular, clean React & Tailwind code.",
      detail: "Writing semantic JSX, configuring responsive Tailwind breakpoints, structuring clean state management, and ensuring zero console warnings.",
      microcopy: "Then comes the fun part."
    },
    {
      num: "05",
      title: "ITERATE",
      emoji: "🔄",
      icon: RefreshCw,
      quote: "Break it. Fix it. Improve it.",
      short: "Testing edge cases, responsive ergonomics, and polish.",
      detail: "Testing on 320px mobile up to 4K displays, profiling performance, refining keyboard focus states, and polishing subtle microinteractions.",
      microcopy: "Still learning. Still refining."
    },
    {
      num: "06",
      title: "SHIP",
      emoji: "🚀",
      icon: Rocket,
      quote: "Make it real.",
      short: "Deploying to production, gathering feedback, and learning.",
      detail: "Deploying production builds, sharing with users or hackathon judges, observing real usage, and taking notes on what to improve next.",
      microcopy: "Shipped is better than perfect."
    },
  ];

  return (
    <section id="process" className="py-20 bg-cream-100 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-lavender-100 text-lavender-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>02 / HOW I WORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal-950 tracking-tight mb-3">
            From idea to interface
          </h2>
          <p className="text-charcoal-600 text-sm sm:text-base">
            The continuous story behind every project: from a fleeting thought to a responsive reality.
          </p>
        </div>

        {/* Step Navigation Pill Stepper */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-8">
          {steps.map((step, idx) => {
            const isActive = activeStep === idx;
            const StepIcon = step.icon;
            return (
              <button
                key={step.num}
                onClick={() => setActiveStep(idx)}
                className={`p-3.5 rounded-2xl border text-left transition-all duration-200 relative ${
                  isActive
                    ? 'bg-white border-lavender-400 shadow-soft-lg ring-2 ring-lavender-300/40 -translate-y-1'
                    : 'bg-white/60 border-cream-300 hover:bg-white hover:border-lavender-200'
                }`}
                data-cursor="STEP"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-[11px] font-mono font-bold ${isActive ? 'text-lavender-600' : 'text-charcoal-500'}`}>
                    {step.num}
                  </span>
                  <span className="text-sm">{step.emoji}</span>
                </div>
                <h3 className={`text-xs font-extrabold tracking-wide ${isActive ? 'text-charcoal-950' : 'text-charcoal-700'}`}>
                  {step.title}
                </h3>
                <p className="text-[10px] text-charcoal-500 truncate mt-0.5">
                  {step.quote}
                </p>
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-4 h-1 bg-lavender-600 rounded-full"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Active Step Detailed Card */}
        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="p-6 sm:p-8 rounded-3xl bg-white border border-cream-300 shadow-soft-lg relative"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 mb-5 border-b border-cream-200">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-lavender-100 border border-lavender-200 flex items-center justify-center text-lavender-600 text-xl font-bold shadow-sm">
                    {steps[activeStep].emoji}
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold text-lavender-600 tracking-wider">
                      PHASE {steps[activeStep].num}
                    </span>
                    <h3 className="text-xl font-extrabold text-charcoal-950">
                      {steps[activeStep].title} — <span className="font-semibold text-charcoal-700 italic">“{steps[activeStep].quote}”</span>
                    </h3>
                  </div>
                </div>

                {/* Microcopy pill */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-peach-50 border border-peach-200 text-peach-700 text-xs font-mono">
                  <span>✦</span>
                  <span>{steps[activeStep].microcopy}</span>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-charcoal-800 font-medium text-base">
                  {steps[activeStep].short}
                </p>
                <p className="text-charcoal-600 text-sm leading-relaxed">
                  {steps[activeStep].detail}
                </p>
              </div>

              {/* Navigation Arrows */}
              <div className="flex items-center justify-between mt-6 pt-4 border-t border-cream-200 text-xs font-bold text-charcoal-600">
                <button
                  onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : steps.length - 1))}
                  className="px-3 py-1.5 rounded-xl hover:bg-cream-100 hover:text-charcoal-950 transition-colors"
                >
                  ← Previous step
                </button>
                <span className="font-mono text-[11px] text-charcoal-500">
                  {activeStep + 1} of {steps.length}
                </span>
                <button
                  onClick={() => setActiveStep((prev) => (prev < steps.length - 1 ? prev + 1 : 0))}
                  className="px-3 py-1.5 rounded-xl bg-charcoal-900 text-cream-100 hover:bg-lavender-600 transition-colors flex items-center gap-1"
                >
                  <span>Next step</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
