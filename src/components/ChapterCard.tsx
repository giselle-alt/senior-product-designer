import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

interface ChapterCardProps {
  number: number;
  title: string;
  subtitle: string;
  href: string;
  delay?: number;
}

const ChapterCard = ({ number, title, subtitle, href, delay = 0 }: ChapterCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className="h-full relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Holographic projection effect - Desktop only */}
      <div 
        className={`
          hidden md:block pointer-events-none fixed inset-0 z-40 transition-opacity duration-500
          ${isHovered ? 'opacity-100' : 'opacity-0'}
        `}
        style={{
          background: `
            radial-gradient(ellipse 120% 80% at var(--holo-x, 50%) var(--holo-y, 50%), 
              hsl(42 85% 55% / 0.08) 0%, 
              hsl(35 80% 50% / 0.04) 30%,
              transparent 60%
            )
          `,
        }}
      />

      {/* Holographic rays emanating from card */}
      <motion.div
        className="hidden md:block pointer-events-none absolute -inset-20 z-30"
        initial={false}
        animate={{
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1 : 0.8,
        }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Outer shimmer ring */}
        <div 
          className="absolute inset-0 rounded-[3rem]"
          style={{
            background: `
              conic-gradient(
                from 0deg at 50% 50%,
                hsl(42 85% 55% / 0) 0deg,
                hsl(42 85% 55% / 0.15) 60deg,
                hsl(35 80% 50% / 0.1) 120deg,
                hsl(42 85% 55% / 0) 180deg,
                hsl(42 85% 55% / 0.12) 240deg,
                hsl(35 80% 50% / 0.08) 300deg,
                hsl(42 85% 55% / 0) 360deg
              )
            `,
            animation: isHovered ? 'holo-spin 8s linear infinite' : 'none',
          }}
        />
        
        {/* Inner glow pulse */}
        <div 
          className="absolute inset-8 rounded-3xl"
          style={{
            background: `radial-gradient(ellipse at center, hsl(42 85% 55% / 0.1), transparent 70%)`,
            animation: isHovered ? 'holo-pulse 2s ease-in-out infinite' : 'none',
          }}
        />

        {/* Scan line effect */}
        <div 
          className="absolute inset-0 overflow-hidden rounded-[3rem]"
          style={{
            maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)',
          }}
        >
          <div 
            className="absolute inset-0"
            style={{
              background: `repeating-linear-gradient(
                0deg,
                transparent 0px,
                transparent 3px,
                hsl(42 85% 55% / 0.03) 3px,
                hsl(42 85% 55% / 0.03) 4px
              )`,
              animation: isHovered ? 'holo-scanlines 4s linear infinite' : 'none',
            }}
          />
        </div>
      </motion.div>

      {/* Floating particles around card */}
      <motion.div
        className="hidden md:block pointer-events-none absolute -inset-16 z-30"
        initial={false}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
      >
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/60"
            style={{
              left: `${15 + (i * 15)}%`,
              top: `${10 + (i % 3) * 30}%`,
            }}
            animate={isHovered ? {
              y: [0, -20, 0],
              x: [0, (i % 2 ? 10 : -10), 0],
              opacity: [0.6, 1, 0.6],
              scale: [1, 1.5, 1],
            } : {}}
            transition={{
              duration: 2 + (i * 0.3),
              repeat: Infinity,
              delay: i * 0.2,
              ease: 'easeInOut',
            }}
          />
        ))}
      </motion.div>

      <Link
        to={href}
        className="group relative block h-full z-50"
      >
        <motion.div 
          className="relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-8 md:p-10 transition-all duration-700 ease-out hover:border-primary/30 hover:bg-card/80 h-full flex flex-col"
          animate={{
            boxShadow: isHovered 
              ? '0 0 40px hsl(42 85% 55% / 0.2), 0 0 80px hsl(42 85% 55% / 0.1), inset 0 0 20px hsl(42 85% 55% / 0.05)' 
              : '0 4px 40px hsl(240 10% 2% / 0.4)',
          }}
          transition={{ duration: 0.5 }}
        >
          {/* Hover glow effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            <div 
              className="absolute inset-0"
              style={{
                background: 'radial-gradient(circle at 50% 0%, hsl(42 85% 55% / 0.1), transparent 50%)',
              }}
            />
          </div>

          {/* Holographic edge highlight */}
          <motion.div
            className="hidden md:block absolute inset-0 rounded-2xl pointer-events-none"
            style={{
              background: `linear-gradient(135deg, hsl(42 85% 55% / 0.15) 0%, transparent 50%, hsl(35 80% 50% / 0.1) 100%)`,
            }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.4 }}
          />

          {/* Chapter number */}
          <div className="relative mb-6 z-10">
            <span className="font-body text-xs tracking-[0.3em] uppercase text-primary">
              Chapter {number}
            </span>
          </div>

          {/* Title */}
          <h3 className="relative font-display text-2xl md:text-3xl text-foreground mb-3 group-hover:text-primary transition-colors duration-500 z-10">
            {title}
          </h3>

          {/* Subtitle */}
          <p className="relative font-body text-muted-foreground leading-relaxed z-10">
            {subtitle}
          </p>

          {/* Spacer to push button to bottom */}
          <div className="flex-grow" />

          {/* Arrow indicator */}
          <div className="relative flex items-center gap-2 text-muted-foreground group-hover:text-primary transition-colors duration-500 mt-8 z-10">
            <span className="font-body text-sm">Read chapter</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-500" />
          </div>

          {/* Bottom border animation */}
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center z-10" />
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default ChapterCard;
