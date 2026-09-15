import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [cursorText, setCursorText] = useState('');
  const [cursorVariant, setCursorVariant] = useState('default');
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 350 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Check touch device or reduced motion
    const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (hasTouch || prefersReducedMotion) {
      setIsTouchDevice(true);
      return;
    }

    const moveMouse = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleMouseOver = (e) => {
      const target = e.target;
      const clickable = target.closest('a, button, [data-cursor]');
      
      if (clickable) {
        const customType = clickable.getAttribute('data-cursor');
        if (customType) {
          setCursorText(customType);
          setCursorVariant('text');
        } else if (clickable.tagName === 'A' && clickable.getAttribute('target') === '_blank') {
          setCursorText('↗');
          setCursorVariant('text');
        } else {
          setCursorVariant('hover');
          setCursorText('');
        }
      } else {
        setCursorVariant('default');
        setCursorText('');
      }
    };

    window.addEventListener('mousemove', moveMouse);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveMouse);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isVisible, mouseX, mouseY]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50 flex items-center justify-center -translate-x-1/2 -translate-y-1/2"
      style={{
        x: cursorX,
        y: cursorY,
      }}
    >
      {cursorVariant === 'text' ? (
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.5, opacity: 0 }}
          className="bg-charcoal-900 text-cream-100 text-[11px] font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1 border border-lavender-300"
        >
          <span>{cursorText}</span>
          <span className="text-peach-400 text-xs">✦</span>
        </motion.div>
      ) : (
        <motion.div
          animate={{
            width: cursorVariant === 'hover' ? 36 : 14,
            height: cursorVariant === 'hover' ? 36 : 14,
            backgroundColor: cursorVariant === 'hover' ? 'rgba(134, 100, 243, 0.18)' : '#8664F3',
            borderColor: cursorVariant === 'hover' ? '#7043EA' : 'transparent',
            borderWidth: cursorVariant === 'hover' ? 1.5 : 0,
          }}
          transition={{ type: 'spring', damping: 20, stiffness: 300 }}
          className="rounded-full pointer-events-none"
        />
      )}
    </motion.div>
  );
}
