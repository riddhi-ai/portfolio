import { useState } from 'react';
import { ArrowUpRight, Github, ExternalLink, Sparkles, BookOpen, QrCode, Smartphone, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProjectCard({ project, onSelectProject }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [showQrPreview, setShowQrPreview] = useState(false);

  const isQured = project.id === 'qure-d';

  return (
    <div
      className={`group relative rounded-3xl bg-white border border-cream-300 shadow-soft hover:shadow-soft-lg transition-all duration-300 flex flex-col overflow-hidden hover:border-terracotta-300 ${
        project.featured ? 'lg:col-span-2' : ''
      }`}
      data-cursor="VIEW"
    >
      {/* Featured Ribbon / Badge */}
      {project.featured && (
        <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full bg-charcoal-900/95 backdrop-blur-md text-cream-100 text-[11px] font-bold shadow-md border border-white/15">
          <Sparkles className="w-3 h-3 text-terracotta-400" />
          <span>Featured Project</span>
        </div>
      )}

      {/* Achievement Tag if available */}
      {project.achievement && (
        <div className="absolute top-4 right-4 z-20 max-w-[260px] truncate px-3 py-1 rounded-full bg-amber-50/95 border border-amber-200 text-amber-900 text-[11px] font-bold shadow-sm backdrop-blur-sm">
          🏆 {project.achievement}
        </div>
      )}

      {/* Thumbnail Container */}
      <div className="relative w-full aspect-[16/10] bg-cream-200/70 overflow-hidden border-b border-cream-200 flex items-center justify-center p-3 sm:p-5">
        {/* Subtle warm background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-cream-100 via-cream-200/50 to-terracotta-50/40 pointer-events-none" />

        {isQured ? (
          /* Qure-d Real Mobile App Interface Presentation */
          <div className="relative z-10 w-full h-full flex items-center justify-center gap-4">
            {/* Phone Screen Frame */}
            <div
              onClick={() => onSelectProject(project)}
              className="relative h-full max-h-[220px] aspect-[9/18] rounded-2xl overflow-hidden shadow-soft-lg border-2 border-charcoal-800 bg-charcoal-950 cursor-pointer transform group-hover:scale-[1.03] transition-transform duration-300"
            >
              {/* Speaker / camera notch */}
              <div className="absolute top-1 left-1/2 -translate-x-1/2 w-10 h-1.5 bg-charcoal-800 rounded-full z-10" />
              <img
                src={project.thumbnail}
                alt="Qure-d Mobile App Screenshot"
                loading="lazy"
                onLoad={() => setImageLoaded(true)}
                className={`w-full h-full object-cover object-top transition-opacity duration-300 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
              />
            </div>

            {/* Quick QR Code Companion Pill on card */}
            <div className="hidden sm:flex flex-col items-center justify-center p-3 rounded-2xl bg-white/90 border border-cream-300 shadow-sm max-w-[130px] text-center">
              <img
                src={project.qrCode || "/images/qure-d-qr.png"}
                alt="Scan to open qure-d.base44.app"
                className="w-18 h-18 rounded-lg mb-1.5 border border-cream-200 shadow-xs"
              />
              <span className="text-[10px] font-bold text-charcoal-800 flex items-center gap-1">
                <Smartphone className="w-3 h-3 text-terracotta-500" />
                <span>Scan for App</span>
              </span>
              <span className="text-[9px] font-mono text-charcoal-500 truncate max-w-full">
                qure-d.base44.app
              </span>
            </div>
          </div>
        ) : (
          /* BrightSmile Real Desktop Platform Presentation */
          <div
            onClick={() => onSelectProject(project)}
            className="relative z-10 w-full h-full rounded-2xl overflow-hidden shadow-soft-lg border border-cream-300 bg-white cursor-pointer transform group-hover:scale-[1.02] transition-transform duration-300 flex flex-col"
          >
            {/* Browser-like window header */}
            <div className="h-6 bg-cream-100 border-b border-cream-200 px-3 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-rose-400" />
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                <span className="w-2 h-2 rounded-full bg-sage-400" />
              </div>
              <div className="flex items-center gap-1 text-[10px] font-mono text-charcoal-500">
                <Globe className="w-2.5 h-2.5 text-terracotta-500" />
                <span>brightsmilewb.netlify.app</span>
              </div>
              <span className="w-6" />
            </div>

            {/* Live Screenshot */}
            <div className="relative flex-1 overflow-hidden bg-cream-50">
              <img
                src={project.thumbnail}
                alt="BrightSmile Dental Clinic Live Website Screenshot"
                loading="lazy"
                onLoad={() => setImageLoaded(true)}
                className={`w-full h-full object-cover object-top transition-opacity duration-300 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
              />
            </div>
          </div>
        )}

        {/* Hover overlay hint */}
        <div
          onClick={() => onSelectProject(project)}
          className="absolute inset-0 bg-charcoal-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer z-10"
        >
          <span className="px-4 py-2 rounded-full bg-white/95 text-charcoal-950 text-xs font-bold shadow-lg flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 border border-cream-300">
            <span>View Case Study</span>
            <BookOpen className="w-3.5 h-3.5 text-terracotta-600" />
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between">
        <div>
          {/* Category & Year */}
          <div className="flex items-center justify-between text-xs text-charcoal-500 mb-2 font-medium">
            <span className="text-terracotta-700 font-bold tracking-wide">{project.category}</span>
            <div className="flex items-center gap-2">
              {project.metrics && (
                <span className="px-2.5 py-0.5 rounded-md bg-sage-50 border border-sage-200 text-sage-800 text-[10px] font-mono font-bold">
                  {project.metrics}
                </span>
              )}
              <span className="font-mono text-[11px] text-charcoal-600">{project.year}</span>
            </div>
          </div>

          {/* Title */}
          <h3
            onClick={() => onSelectProject(project)}
            className="text-2xl sm:text-3xl font-serif font-bold text-charcoal-950 tracking-tight cursor-pointer hover:text-terracotta-600 transition-colors"
          >
            {project.title}
          </h3>

          {/* Tagline / Subtitle */}
          {project.tagline && (
            <p className="text-xs font-semibold text-charcoal-600 mb-3 mt-0.5">
              {project.tagline}
            </p>
          )}

          {/* Description */}
          <p className="text-charcoal-700 text-sm leading-relaxed mb-5 line-clamp-3">
            {project.description}
          </p>

          {/* Technology Badges */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-lg bg-cream-100 border border-cream-300 text-[11px] font-semibold text-charcoal-700 group-hover:border-terracotta-200 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-cream-200 flex flex-wrap items-center justify-between gap-3">
          {/* Case Study Details Trigger */}
          <button
            onClick={() => onSelectProject(project)}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-terracotta-700 hover:text-terracotta-900 transition-colors"
            data-cursor="DETAILS"
          >
            <span>View Details</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>

          {/* External Links */}
          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} source code on GitHub`}
                data-cursor="CODE"
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-cream-100 hover:bg-terracotta-50 border border-cream-300 hover:border-terracotta-300 text-charcoal-700 hover:text-terracotta-700 text-xs font-bold transition-all"
              >
                <Github className="w-3.5 h-3.5" />
                <span>Source</span>
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${project.title} live demo at ${project.liveUrl}`}
                data-cursor="LIVE"
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-charcoal-950 hover:bg-terracotta-600 text-cream-50 text-xs font-bold transition-all shadow-sm hover:shadow-glow-terracotta hover:-translate-y-0.5"
              >
                <span>Live Demo</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-terracotta-300" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
