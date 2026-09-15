import { useState } from 'react';
import { Mail, Github, Linkedin, Send, Copy, Check, ArrowUpRight, Sparkles, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const emailAddress = "riddhinaskari@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);

    // Fire subtle celebratory confetti
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#8664F3', '#FF9E7D', '#DDD5FD', '#FEF08A'],
    });

    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 bg-cream-50 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-lavender-200/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="p-8 sm:p-14 rounded-3xl bg-white border-2 border-lavender-200/80 shadow-soft-lg text-center relative overflow-hidden">
          {/* Decorative Top Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-lavender-100/80 text-lavender-700 text-xs font-bold uppercase tracking-wider mb-6 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-lavender-600" />
            <span>07 / GET IN TOUCH</span>
          </div>

          {/* Main Headline */}
          <h2 className="text-3xl sm:text-5xl font-black text-charcoal-950 tracking-tight leading-[1.15] mb-4">
            Have an idea?{' '}
            <span className="block sm:inline text-transparent bg-clip-text bg-gradient-to-r from-lavender-600 via-lavender-500 to-peach-400">
              Let's turn it into something people can actually use. ✨
            </span>
          </h2>

          <p className="text-charcoal-600 text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Whether you're looking for a passionate developer for your team, have a hackathon project idea, or just want to talk frontend engineering — my inbox is always open!
          </p>

          {/* Interactive 3D Paper Plane & Inbox Illustration */}
          <div className="relative w-48 h-24 mx-auto mb-10 select-none" aria-hidden="true">
            {/* Inbox */}
            <div className="absolute right-4 bottom-2 w-16 h-12 rounded-xl bg-lavender-100 border-2 border-lavender-300 shadow-sm flex items-center justify-center text-lavender-600">
              <Mail className="w-6 h-6" />
              <span className="absolute -top-1.5 -right-1.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-white animate-ping" />
            </div>

            {/* Flying Paper Plane with Trail */}
            <motion.div
              animate={{
                x: [0, 80, 0],
                y: [0, -18, 0],
                rotate: [0, 15, 0],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute left-4 top-2 text-lavender-600"
            >
              <div className="p-2.5 rounded-xl bg-white border border-lavender-200 shadow-md transform -rotate-12">
                <Send className="w-5 h-5 text-lavender-600" />
              </div>
            </motion.div>

            {/* Dotted Flight Path */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 192 96">
              <path
                d="M 35 30 Q 90 10, 140 60"
                fill="none"
                stroke="#DDD5FD"
                strokeWidth="2"
                strokeDasharray="4 4"
              />
            </svg>
          </div>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            {/* Let's connect mailto */}
            <a
              href={`mailto:${emailAddress}?subject=Hello%20Riddhi!%20Let's%20connect`}
              className="px-8 py-4 rounded-2xl bg-charcoal-950 hover:bg-lavender-600 text-cream-50 font-bold text-sm sm:text-base transition-all duration-200 shadow-md hover:shadow-glow-lavender hover:-translate-y-0.5 flex items-center gap-2"
              data-cursor="LET'S CONNECT"
            >
              <span>Let's connect</span>
              <ArrowUpRight className="w-4 h-4 text-peach-300" />
            </a>

            {/* Copy Email Button */}
            <button
              onClick={handleCopyEmail}
              className="px-6 py-4 rounded-2xl bg-white hover:bg-cream-100 border border-cream-300 text-charcoal-800 font-bold text-sm sm:text-base transition-all duration-200 shadow-sm hover:-translate-y-0.5 flex items-center gap-2"
              data-cursor="COPY EMAIL"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-500" />
                  <span className="text-emerald-700">Email Copied! ✨</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-lavender-500" />
                  <span>Copy email</span>
                </>
              )}
            </button>
          </div>

          {/* Direct Social Links */}
          <div className="flex items-center justify-center gap-6 pt-6 border-t border-cream-200">
            <a
              href="https://github.com/riddhi-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-bold text-charcoal-700 hover:text-lavender-600 transition-colors"
              data-cursor="GITHUB"
            >
              <Github className="w-4 h-4" />
              <span>github.com/riddhi-ai ↗</span>
            </a>

            <a
              href="https://www.linkedin.com/in/riddhi-naskari-986955295"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-bold text-charcoal-700 hover:text-lavender-600 transition-colors"
              data-cursor="LINKEDIN"
            >
              <Linkedin className="w-4 h-4 text-blue-600" />
              <span>LinkedIn profile ↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
