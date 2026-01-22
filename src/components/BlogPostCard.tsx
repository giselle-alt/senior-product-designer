import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';

interface BlogPostCardProps {
  title: string;
  category: string;
  image: string;
  href: string;
  delay?: number;
  featured?: boolean;
}

const BlogPostCard = ({ title, category, image, href, delay = 0, featured = false }: BlogPostCardProps) => {
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
          className="relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-700 ease-out hover:border-primary/30 hover:bg-card/80 h-full flex flex-col"
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

          {/* Thumbnail Image */}
          <div className="relative aspect-[4/3] overflow-hidden">
            <img 
              src={image} 
              alt={title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Image overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-card/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          {/* Content */}
          <div className="relative p-6 flex flex-col flex-grow z-10">
            {/* Category badge */}
            <span className="inline-block self-start px-3 py-1 mb-4 text-xs uppercase tracking-widest text-primary bg-primary/10 rounded-full">
              {category}
            </span>

            {/* Title */}
            <h3 className="font-display text-xl md:text-2xl text-foreground group-hover:text-primary transition-colors duration-500 line-clamp-3">
              {title}
            </h3>
          </div>

          {/* Bottom border animation */}
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center z-10" />
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default BlogPostCard;
