import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface ChapterCardProps {
  number: number;
  title: string;
  subtitle: string;
  href: string;
  delay?: number;
}

const ChapterCard = ({ number, title, subtitle, href, delay = 0 }: ChapterCardProps) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className="group relative block"
    >
      <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-8 md:p-10 transition-all duration-700 ease-out hover:border-primary/30 hover:bg-card/80">
        {/* Hover glow effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <div 
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(circle at 50% 0%, hsl(42 85% 55% / 0.1), transparent 50%)',
            }}
          />
        </div>

        {/* Chapter number */}
        <div className="relative mb-6">
          <span className="font-body text-xs tracking-[0.3em] uppercase text-primary">
            Chapter {number}
          </span>
        </div>

        {/* Title */}
        <h3 className="relative font-display text-2xl md:text-3xl text-foreground mb-3 group-hover:text-primary transition-colors duration-500">
          {title}
        </h3>

        {/* Subtitle */}
        <p className="relative font-body text-muted-foreground mb-8 leading-relaxed">
          {subtitle}
        </p>

        {/* Arrow indicator */}
        <div className="relative flex items-center gap-2 text-muted-foreground group-hover:text-primary transition-colors duration-500">
          <span className="font-body text-sm">Read chapter</span>
          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-500" />
        </div>

        {/* Bottom border animation */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center" />
      </div>
    </motion.a>
  );
};

export default ChapterCard;
