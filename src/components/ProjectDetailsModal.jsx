import { useEffect } from 'react';
import { X, ExternalLink, Github, Sparkles, CheckCircle, Lightbulb, AlertTriangle, Trophy, Layers } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProjectDetailsModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return;

    // Lock body scroll
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const caseStudy = project.caseStudy || {};

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-charcoal-950/60 backdrop-blur-sm"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl border border-cream-300 p-6 sm:p-10 my-8"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-cream-100 hover:bg-cream-200 text-charcoal-700 hover:text-charcoal-950 transition-colors z-20"
            aria-label="Close Case Study"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="mb-8">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="px-3 py-1 rounded-full bg-lavender-100 text-lavender-700 text-xs font-bold uppercase tracking-wider">
                {project.category}
              </span>
              <span className="text-xs font-mono text-charcoal-500">
                Year: {project.year}
              </span>
              {project.achievement && (
                <span className="px-2.5 py-0.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold flex items-center gap-1">
                  <Trophy className="w-3 h-3 text-amber-600" />
                  {project.achievement}
                </span>
              )}
            </div>

            <h2 id="modal-title" className="text-2xl sm:text-4xl font-black text-charcoal-950 tracking-tight mb-2">
              {project.title}
            </h2>
            <p className="text-base sm:text-lg font-semibold text-charcoal-600">
              {project.tagline}
            </p>
          </div>

          {/* Large Project Image preview if available */}
          {project.thumbnail && (
            <div className="w-full aspect-[16/9] rounded-2xl overflow-hidden bg-cream-100 mb-8 border border-cream-300 shadow-sm">
              <img
                src={project.thumbnail}
                alt={`${project.title} detailed screenshot`}
                className="w-full h-full object-cover object-top"
              />
            </div>
          )}

          {/* Main Case Study Sections */}
          <div className="space-y-8 text-charcoal-800">
            {/* Overview */}
            {caseStudy.overview && (
              <div>
                <h3 className="text-sm font-extrabold uppercase tracking-wider text-lavender-700 mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  <span>Overview</span>
                </h3>
                <p className="text-charcoal-700 leading-relaxed text-sm sm:text-base">
                  {caseStudy.overview}
                </p>
              </div>
            )}

            {/* Problem & Idea */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-5 rounded-2xl bg-cream-50 border border-cream-300/80">
              {caseStudy.problem && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-rose-600 mb-2 flex items-center gap-1.5">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    <span>The Problem</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed">
                    {caseStudy.problem}
                  </p>
                </div>
              )}

              {caseStudy.idea && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-lavender-700 mb-2 flex items-center gap-1.5">
                    <Lightbulb className="w-3.5 h-3.5" />
                    <span>The Idea</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed">
                    {caseStudy.idea}
                  </p>
                </div>
              )}
            </div>

            {/* Solution */}
            {caseStudy.solution && (
              <div>
                <h3 className="text-sm font-extrabold uppercase tracking-wider text-lavender-700 mb-2">
                  Solution & Architecture
                </h3>
                <p className="text-charcoal-700 leading-relaxed text-sm sm:text-base">
                  {caseStudy.solution}
                </p>
              </div>
            )}

            {/* Key Features */}
            {caseStudy.keyFeatures && caseStudy.keyFeatures.length > 0 && (
              <div>
                <h3 className="text-sm font-extrabold uppercase tracking-wider text-lavender-700 mb-3">
                  Key Features
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {caseStudy.keyFeatures.map((feat, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-white border border-cream-200 shadow-sm flex items-start gap-2.5 text-xs sm:text-sm text-charcoal-800"
                    >
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Technology Stack Breakdown */}
            {caseStudy.technologies && caseStudy.technologies.length > 0 && (
              <div>
                <h3 className="text-sm font-extrabold uppercase tracking-wider text-lavender-700 mb-3 flex items-center gap-2">
                  <Layers className="w-4 h-4" />
                  <span>Technology Stack</span>
                </h3>
                <div className="space-y-2">
                  {caseStudy.technologies.map((t, idx) => (
                    <div
                      key={idx}
                      className="px-3.5 py-2 rounded-xl bg-cream-50 border border-cream-200 text-xs sm:text-sm text-charcoal-700 font-mono"
                    >
                      ✦ {t}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Challenges & Learnings */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {caseStudy.challenges && (
                <div className="p-5 rounded-2xl bg-white border border-cream-300 shadow-sm">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal-900 mb-2">
                    Key Challenges
                  </h4>
                  <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                    {caseStudy.challenges}
                  </p>
                </div>
              )}

              {caseStudy.learnings && (
                <div className="p-5 rounded-2xl bg-white border border-cream-300 shadow-sm">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal-900 mb-2">
                    What I Learned
                  </h4>
                  <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                    {caseStudy.learnings}
                  </p>
                </div>
              )}
            </div>

            {/* Outcome */}
            {caseStudy.outcome && (
              <div className="p-5 rounded-2xl bg-lavender-50/70 border border-lavender-200/80">
                <h4 className="text-xs font-bold uppercase tracking-wider text-lavender-900 mb-2 flex items-center gap-1.5">
                  <Trophy className="w-4 h-4 text-lavender-600" />
                  <span>Outcome & Impact</span>
                </h4>
                <p className="text-xs sm:text-sm text-charcoal-800 font-medium leading-relaxed">
                  {caseStudy.outcome}
                </p>
              </div>
            )}
          </div>

          {/* Footer Actions */}
          <div className="mt-8 pt-6 border-t border-cream-200 flex flex-wrap items-center justify-between gap-4">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl border border-cream-300 text-charcoal-700 hover:bg-cream-100 text-xs font-bold transition-colors"
            >
              Close Case Study
            </button>

            <div className="flex items-center gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-cream-100 hover:bg-lavender-50 border border-cream-300 text-charcoal-800 hover:text-lavender-700 text-xs font-bold transition-all"
                >
                  <Github className="w-4 h-4" />
                  <span>View on GitHub</span>
                </a>
              )}

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-charcoal-900 hover:bg-lavender-600 text-cream-50 text-xs font-bold transition-all shadow-sm"
                >
                  <span>Open Live Demo</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
