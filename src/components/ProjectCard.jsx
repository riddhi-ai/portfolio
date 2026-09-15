import { useState } from 'react';
import { ArrowUpRight, Github, ExternalLink, Sparkles, BookOpen, Layers } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ProjectCard({ project, onSelectProject }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Derive initials for graceful fallback
  const initials = project.title
    ? project.title
        .split(/[\s-]+/)
        .map((n) => n[0])
        .join('')
        .slice(0, 2)
        .toUpperCase()
    : 'PJ';

  return (
    <div
      className={`group relative rounded-3xl bg-white border border-cream-300/90 shadow-soft hover:shadow-soft-lg transition-all duration-300 flex flex-col overflow-hidden hover:border-lavender-300 ${
        project.featured ? 'lg:col-span-2' : ''
      }`}
      data-cursor="VIEW"
    >
      {/* Featured Ribbon / Badge */}
      {project.featured && (
        <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full bg-charcoal-900/90 backdrop-blur-md text-cream-100 text-[11px] font-bold shadow-md border border-white/20">
          <Sparkles className="w-3 h-3 text-peach-400" />
          <span>Featured Project</span>
        </div>
      )}

      {/* Achievement Tag if available */}
      {project.achievement && (
        <div className="absolute top-4 right-4 z-20 max-w-[240px] truncate px-2.5 py-1 rounded-full bg-amber-50/95 border border-amber-200/90 text-amber-800 text-[10px] font-bold shadow-sm backdrop-blur-sm">
          {project.achievement}
        </div>
      )}

      {/* Thumbnail Container */}
      <div
        onClick={() => onSelectProject(project)}
        className="relative w-full aspect-[16/10] bg-cream-200 overflow-hidden cursor-pointer"
      >
        {!imageError && project.thumbnail ? (
          <img
            src={project.thumbnail}
            alt={`${project.title} preview screenshot`}
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
            className={`w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03] ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ) : (
          /* Graceful Visual Fallback */
          <div className="w-full h-full bg-gradient-to-br from-lavender-100 via-cream-200 to-peach-100 flex flex-col items-center justify-center p-6 text-center">
            <div className="w-16 h-16 rounded-2xl bg-white/90 border border-lavender-200 shadow-sm flex items-center justify-center text-2xl font-black text-lavender-700 mb-2">
              {initials}
            </div>
            <p className="text-xs font-bold text-charcoal-800">{project.title}</p>
            <p className="text-[10px] text-charcoal-500 mt-0.5">{project.category}</p>
            <span className="mt-2 text-[9px] font-mono px-2 py-0.5 rounded-full bg-white/70 border border-cream-300 text-charcoal-600">
              Interactive Preview Available
            </span>
          </div>
        )}

        {/* Hover overlay hint */}
        <div className="absolute inset-0 bg-charcoal-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
          <span className="px-4 py-2 rounded-full bg-white/95 text-charcoal-900 text-xs font-bold shadow-lg flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            <span>View Case Study</span>
            <BookOpen className="w-3.5 h-3.5 text-lavender-600" />
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex flex-col flex-grow justify-between">
        <div>
          {/* Category & Year */}
          <div className="flex items-center justify-between text-xs text-charcoal-500 mb-2 font-medium">
            <span className="text-lavender-700 font-semibold">{project.category}</span>
            <div className="flex items-center gap-2">
              {project.metrics && (
                <span className="px-2 py-0.5 rounded-md bg-cream-200 text-charcoal-700 text-[10px] font-mono font-bold">
                  {project.metrics}
                </span>
              )}
              <span className="font-mono text-[11px]">{project.year}</span>
            </div>
          </div>

          {/* Title */}
          <h3
            onClick={() => onSelectProject(project)}
            className="text-xl sm:text-2xl font-extrabold text-charcoal-950 tracking-tight cursor-pointer hover:text-lavender-700 transition-colors"
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
                className="px-2.5 py-1 rounded-lg bg-cream-100 border border-cream-300 text-[11px] font-semibold text-charcoal-700 group-hover:border-lavender-200 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-cream-200/80 flex flex-wrap items-center justify-between gap-3">
          {/* Case Study Details Trigger */}
          <button
            onClick={() => onSelectProject(project)}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-lavender-700 hover:text-lavender-900 transition-colors"
            data-cursor="DETAILS"
          >
            <span>View Details</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>

          {/* External Links: Only rendered when valid URL exists */}
          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} source code on GitHub`}
                data-cursor="CODE"
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-cream-100 hover:bg-lavender-50 border border-cream-300 hover:border-lavender-300 text-charcoal-700 hover:text-lavender-700 text-xs font-bold transition-all"
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
                aria-label={`Open ${project.title} live demo`}
                data-cursor="LIVE"
                className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-xl bg-charcoal-900 hover:bg-lavender-600 text-cream-50 text-xs font-bold transition-all shadow-sm"
              >
                <span>Live Demo</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
