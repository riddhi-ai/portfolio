import { Github, Linkedin, Heart, Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-14 bg-cream-100 border-t border-cream-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-cream-200">
          {/* Brand & Tagline */}
          <div className="text-center md:text-left">
            <a
              href="#"
              className="inline-flex items-center gap-2 font-extrabold text-lg text-charcoal-950 tracking-tight mb-1"
            >
              <span>Riddhi Naskari</span>
              <span className="text-lavender-600">✦</span>
            </a>
            <p className="text-xs text-charcoal-600">
              Building, learning &amp; turning ideas into interfaces.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/riddhi-ai"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-xl bg-white border border-cream-300 text-charcoal-700 hover:text-lavender-600 hover:border-lavender-300 transition-all shadow-xs"
              data-cursor="GITHUB"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href="https://www.linkedin.com/in/riddhi-naskari-986955295"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2.5 rounded-xl bg-white border border-cream-300 text-charcoal-700 hover:text-lavender-600 hover:border-lavender-300 transition-all shadow-xs"
              data-cursor="LINKEDIN"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom Sub-row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-charcoal-500 font-mono text-center sm:text-left">
          <p>© 2026 Riddhi Naskari. All rights reserved.</p>
          <p className="flex items-center justify-center gap-1">
            <span>Made with curiosity, code &amp; probably too many browser tabs.</span>
            <span className="text-peach-400">☕</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
