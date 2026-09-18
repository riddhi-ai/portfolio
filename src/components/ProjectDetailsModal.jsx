import { useEffect, useState } from 'react';
import { X, ExternalLink, Github, Sparkles, CheckCircle, Lightbulb, AlertTriangle, Trophy, Layers, QrCode, Smartphone, Globe, Image as ImageIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProjectDetailsModal({ project, onClose }) {
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);

  useEffect(() => {
    if (!project) return;
    setActiveGalleryIndex(0);

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
  const gallery = project.gallery || (project.thumbnail ? [{ title: "Preview", url: project.thumbnail, caption: project.title }] : []);
  const currentItem = gallery[activeGalleryIndex] || gallery[0];

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-charcoal-950/70 backdrop-blur-md"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 16 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-white rounded-3xl shadow-2xl border border-cream-300 p-6 sm:p-10 my-6"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2.5 rounded-full bg-cream-100 hover:bg-cream-200 text-charcoal-700 hover:text-charcoal-950 transition-colors z-30"
            aria-label="Close Case Study"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="mb-7 pr-8">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="px-3 py-1 rounded-full bg-terracotta-100 text-terracotta-700 text-xs font-bold uppercase tracking-wider">
                {project.category}
              </span>
              <span className="text-xs font-mono text-charcoal-500">
                Year: {project.year}
              </span>
              {project.achievement && (
                <span className="px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold flex items-center gap-1.5">
                  <Trophy className="w-3.5 h-3.5 text-amber-600" />
                  {project.achievement}
                </span>
              )}
            </div>

            <h2 id="modal-title" className="text-2xl sm:text-4xl font-serif font-bold text-charcoal-950 tracking-tight mb-2">
              {project.title}
            </h2>
            <p className="text-base sm:text-lg font-medium text-charcoal-600">
              {project.tagline}
            </p>

            {/* Direct Project Hyperlink Pill */}
            {project.liveUrl && (
              <div className="mt-3 flex items-center gap-2">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-terracotta-50 hover:bg-terracotta-100 border border-terracotta-200 text-terracotta-700 font-mono text-xs font-bold transition-colors"
                >
                  <Globe className="w-3 h-3 text-terracotta-500" />
                  <span>{project.liveUrl}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            )}
          </div>

          {/* Interactive Project Media Showcase */}
          {gallery.length > 0 && (
            <div className="mb-8 p-4 sm:p-5 rounded-2xl bg-cream-100/80 border border-cream-300">
              {/* Gallery Tab Switcher */}
              <div className="flex flex-wrap gap-2 mb-4">
                {gallery.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveGalleryIndex(idx)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                      activeGalleryIndex === idx
                        ? 'bg-charcoal-900 text-cream-50 shadow-sm'
                        : 'bg-white text-charcoal-700 hover:bg-cream-200 border border-cream-300'
                    }`}
                  >
                    <ImageIcon className="w-3.5 h-3.5 text-terracotta-400" />
                    <span>{item.title}</span>
                  </button>
                ))}
              </div>

              {/* Active Image Display */}
              <div className="relative w-full rounded-xl overflow-hidden bg-white border border-cream-200 shadow-sm flex items-center justify-center p-2 sm:p-4 min-h-[260px] max-h-[500px]">
                {currentItem.url.endsWith('.png') && currentItem.url.includes('qr') ? (
                  /* QR Code Specific Centered Layout */
                  <div className="py-6 flex flex-col items-center justify-center text-center">
                    <img
                      src={currentItem.url}
                      alt={currentItem.title}
                      className="w-56 h-56 max-w-full rounded-2xl shadow-md border-2 border-charcoal-800 p-2 bg-white mb-3"
                    />
                    <p className="text-xs font-bold text-charcoal-900">
                      Scan with your smartphone camera
                    </p>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono text-terracotta-600 underline mt-1 hover:text-terracotta-800"
                    >
                      or click here to open {project.liveUrl}
                    </a>
                  </div>
                ) : (
                  /* Standard Image Display */
                  <img
                    src={currentItem.url}
                    alt={currentItem.title}
                    className="max-h-[460px] w-auto max-w-full object-contain rounded-lg shadow-sm"
                  />
                )}
              </div>

              {/* Caption */}
              {currentItem.caption && (
                <p className="mt-2.5 text-xs text-charcoal-600 italic text-center font-medium">
                  {currentItem.caption}
                </p>
              )}
            </div>
          )}

          {/* Main Case Study Sections */}
          <div className="space-y-8 text-charcoal-800">
            {/* Overview */}
            {caseStudy.overview && (
              <div>
                <h3 className="text-sm font-extrabold uppercase tracking-wider text-terracotta-700 mb-2 flex items-center gap-2">
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
                  <h4 className="text-xs font-bold uppercase tracking-wider text-rose-700 mb-2 flex items-center gap-1.5">
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
                  <h4 className="text-xs font-bold uppercase tracking-wider text-terracotta-700 mb-2 flex items-center gap-1.5">
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
                <h3 className="text-sm font-extrabold uppercase tracking-wider text-terracotta-700 mb-2">
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
                <h3 className="text-sm font-extrabold uppercase tracking-wider text-terracotta-700 mb-3">
                  Key Features
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {caseStudy.keyFeatures.map((feat, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-white border border-cream-200 shadow-sm flex items-start gap-2.5 text-xs sm:text-sm text-charcoal-800"
                    >
                      <CheckCircle className="w-4 h-4 text-sage-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Technology Stack Breakdown */}
            {caseStudy.technologies && caseStudy.technologies.length > 0 && (
              <div>
                <h3 className="text-sm font-extrabold uppercase tracking-wider text-terracotta-700 mb-3 flex items-center gap-2">
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
              <div className="p-5 rounded-2xl bg-sage-50/70 border border-sage-200">
                <h4 className="text-xs font-bold uppercase tracking-wider text-sage-900 mb-2 flex items-center gap-1.5">
                  <Trophy className="w-4 h-4 text-amber-600" />
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
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-cream-100 hover:bg-terracotta-50 border border-cream-300 text-charcoal-800 hover:text-terracotta-700 text-xs font-bold transition-all"
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
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-charcoal-950 hover:bg-terracotta-600 text-cream-50 text-xs font-bold transition-all shadow-md hover:shadow-glow-terracotta"
                >
                  <span>Open Live Project</span>
                  <ExternalLink className="w-4 h-4 text-terracotta-300" />
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
