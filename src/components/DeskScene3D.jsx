import { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Terminal, Sparkles, Coffee, Code, Bug } from 'lucide-react';

export default function DeskScene3D() {
  const cardRef = useRef(null);
  const [terminalLineIndex, setTerminalLineIndex] = useState(0);

  const terminalLines = [
    '> idea.exe building...',
    '✔ components mounted [ok]',
    '✔ responsive grid: 100%',
    '> shipping to browser ✨'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTerminalLineIndex((prev) => (prev + 1) % terminalLines.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [terminalLines.length]);

  // Mouse Parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 200 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothY, [-0.5, 0.5], [12, -12]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-14, 14]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[480px] mx-auto aspect-[4/3] flex items-center justify-center perspective-1000 select-none"
      style={{ perspective: '1000px' }}
      aria-hidden="true"
    >
      {/* Ambient background glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-lavender-200/40 via-peach-200/30 to-mint-100/30 rounded-3xl blur-2xl transform scale-90 -z-10" />

      {/* Main 3D Tilted Desk Base */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="relative w-full h-full p-6 flex flex-col items-center justify-center"
      >
        {/* Desk Surface Shadow & Mat */}
        <div
          className="absolute inset-x-6 bottom-8 h-44 rounded-3xl bg-white/80 border border-cream-300 shadow-soft-lg backdrop-blur-md"
          style={{ transform: 'translateZ(-10px)' }}
        >
          <div className="absolute top-2 left-4 flex gap-1.5 opacity-40">
            <span className="w-2 h-2 rounded-full bg-cream-400" />
            <span className="w-2 h-2 rounded-full bg-cream-400" />
            <span className="w-2 h-2 rounded-full bg-cream-400" />
          </div>
          <div className="absolute bottom-3 right-4 text-[10px] font-mono text-charcoal-500 tracking-wider">
            riddhi's desk v1.0
          </div>
        </div>

        {/* 3D LAPTOP */}
        <motion.div
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="relative z-10 w-[260px] sm:w-[280px] bg-charcoal-900 rounded-2xl p-3 border-2 border-charcoal-800 shadow-2xl"
          style={{ transform: 'translateZ(30px)' }}
        >
          {/* Laptop Screen Header */}
          <div className="flex items-center justify-between pb-2 border-b border-charcoal-700">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-400 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block" />
            </div>
            <span className="text-[10px] font-mono text-lavender-300 flex items-center gap-1">
              <Terminal className="w-2.5 h-2.5" /> idea.exe
            </span>
          </div>

          {/* Screen Content */}
          <div className="py-3 px-2 bg-charcoal-950/80 rounded-xl my-1.5 min-h-[82px] flex flex-col justify-between font-mono text-xs">
            <div>
              <p className="text-emerald-400 font-semibold tracking-wide flex items-center gap-1.5">
                <span className="animate-pulse">●</span>
                <span>{terminalLines[terminalLineIndex]}</span>
              </p>
              <p className="text-charcoal-500 text-[10px] mt-1">
                // turning coffee into components
              </p>
            </div>
            <div className="flex items-center justify-between text-[9px] text-charcoal-500 pt-1 border-t border-charcoal-800/60">
              <span>status: active</span>
              <span className="text-lavender-400">node v24 • react</span>
            </div>
          </div>

          {/* Laptop Bottom Lip / Keyboard Stand */}
          <div className="h-1.5 bg-charcoal-700 rounded-full mx-auto w-16 opacity-70" />
        </motion.div>

        {/* STICKY NOTE 1: "idea → build → repeat" */}
        <motion.div
          animate={{ y: [0, -3, 0], rotate: [-6, -4, -6] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
          className="absolute -top-1 -left-2 sm:left-4 z-20 w-32 p-2.5 rounded-xl bg-[#FEF08A] text-charcoal-900 shadow-md border border-[#FDE047]/60"
          style={{ transform: 'translateZ(45px)' }}
        >
          <div className="w-2 h-2 rounded-full bg-rose-400/80 mx-auto mb-1 shadow-sm" />
          <p className="font-sans font-bold text-[11px] leading-tight text-center">
            idea → build → repeat ✨
          </p>
        </motion.div>

        {/* STICKY NOTE 2: "probably debugging…" */}
        <motion.div
          animate={{ y: [0, 4, 0], rotate: [5, 7, 5] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
          className="absolute bottom-4 -right-1 sm:right-3 z-20 w-36 p-2.5 rounded-xl bg-peach-100 text-charcoal-900 shadow-md border border-peach-300"
          style={{ transform: 'translateZ(40px)' }}
        >
          <div className="w-2 h-2 rounded-full bg-amber-500/80 mx-auto mb-1 shadow-sm" />
          <p className="font-sans font-bold text-[11px] leading-tight text-center flex items-center justify-center gap-1">
            <Bug className="w-3 h-3 text-peach-400" />
            <span>probably debugging…</span>
          </p>
        </motion.div>

        {/* COFFEE CUP WITH STEAM */}
        <motion.div
          animate={{ y: [0, -2, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute top-8 right-2 sm:right-8 z-15 flex flex-col items-center"
          style={{ transform: 'translateZ(35px)' }}
        >
          {/* Steam wisps */}
          <div className="flex gap-1 mb-1">
            <span className="w-1 h-3 bg-lavender-400/60 rounded-full animate-steam" />
            <span className="w-1 h-4 bg-peach-400/60 rounded-full animate-steam" style={{ animationDelay: '0.6s' }} />
          </div>
          {/* Mug */}
          <div className="w-9 h-10 rounded-b-xl rounded-t-sm bg-lavender-500 border-2 border-lavender-400 shadow-md flex items-center justify-center text-white relative">
            <Coffee className="w-4 h-4" />
            {/* Mug Handle */}
            <span className="absolute -right-2 top-2 w-3 h-5 rounded-r-md border-2 border-lavender-400 border-l-0" />
          </div>
        </motion.div>

        {/* MINI SUCCULENT PLANT */}
        <motion.div
          animate={{ y: [0, -2, 0] }}
          transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
          className="absolute bottom-10 left-3 sm:left-8 z-15 flex flex-col items-center"
          style={{ transform: 'translateZ(25px)' }}
        >
          <div className="flex -space-x-1 mb-[-2px]">
            <span className="w-2.5 h-3 bg-emerald-500 rounded-full rotate-[-15deg] shadow-sm" />
            <span className="w-3 h-4 bg-emerald-600 rounded-full shadow-sm" />
            <span className="w-2.5 h-3 bg-emerald-500 rounded-full rotate-[15deg] shadow-sm" />
          </div>
          <div className="w-7 h-6 rounded-b-lg rounded-t-sm bg-peach-300 border border-peach-400 shadow-sm" />
        </motion.div>

        {/* FLOATING CURSOR ICON */}
        <motion.div
          animate={{
            x: [0, 8, -4, 0],
            y: [0, -10, 4, 0],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-12 left-16 z-30 p-1.5 rounded-lg bg-white/90 border border-lavender-300 shadow-md text-lavender-600"
          style={{ transform: 'translateZ(50px)' }}
        >
          <Sparkles className="w-4 h-4 text-lavender-500 animate-spin" style={{ animationDuration: '6s' }} />
        </motion.div>
      </motion.div>
    </div>
  );
}
