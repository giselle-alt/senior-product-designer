import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

interface IntroLoaderProps {
  onComplete: () => void;
}

const IntroLoader = ({ onComplete }: IntroLoaderProps) => {
  const [phase, setPhase] = useState<'loading' | 'reveal' | 'complete'>('loading');
  const hasRun = useRef(false);

  useEffect(() => {
    // Guard against double execution from React Strict Mode
    if (hasRun.current) return;
    hasRun.current = true;

    const timer1 = setTimeout(() => setPhase('reveal'), 1500);
    const timer2 = setTimeout(() => {
      setPhase('complete');
      onComplete();
    }, 3000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <AnimatePresence>
      {phase !== 'complete' && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.8, ease: [0.65, 0, 0.35, 1] }
          }}
        >
          {/* Ambient glow */}
          <motion.div
            className="absolute w-[600px] h-[600px] rounded-full blur-atmospheric"
            style={{
              background: 'radial-gradient(circle, hsl(42 85% 55% / 0.15), transparent 70%)',
            }}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ 
              scale: [0.5, 1.2, 1],
              opacity: [0, 0.8, 0.4],
            }}
            transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
          />

          {/* Loading line */}
          <div className="relative">
            <motion.div
              className="h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent"
              initial={{ width: 0, opacity: 0 }}
              animate={{ 
                width: phase === 'loading' ? 120 : 200,
                opacity: 1,
              }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            />
            
            {/* Name reveal */}
            <motion.div
              className="absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap"
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: phase === 'reveal' ? 1 : 0,
                y: phase === 'reveal' ? 0 : 20,
              }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="font-display text-2xl md:text-3xl text-foreground tracking-tight">
                Giselle Arbo
              </span>
            </motion.div>

            {/* Subtitle */}
            <motion.div
              className="absolute top-6 left-1/2 -translate-x-1/2 whitespace-nowrap"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: phase === 'reveal' ? 0.6 : 0,
              }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="font-body text-sm text-muted-foreground tracking-widest uppercase">
                Portfolio
              </span>
            </motion.div>
          </div>

          {/* Corner decorations */}
          <motion.div
            className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-primary/30"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          />
          <motion.div
            className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-primary/30"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroLoader;
