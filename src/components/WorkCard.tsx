import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

interface WorkCardProps {
  title: string;
  year: string;
  category: string;
  type: string;
  image: string;
  href: string;
  delay?: number;
}

const WorkCard = ({ title, year, category, type, image, href, delay = 0 }: WorkCardProps) => {
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
      <div className="relative overflow-hidden rounded-2xl border border-border/30 bg-card/30 transition-all duration-700 ease-out hover:border-primary/30">
        {/* Image container */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
          
          {/* External link icon */}
          <div className="absolute top-4 right-4 p-2 rounded-full bg-background/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
            <ExternalLink className="w-4 h-4 text-foreground" />
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Meta info */}
          <div className="flex items-center gap-3 mb-3">
            <span className="font-body text-xs tracking-widest uppercase text-primary">
              {category}
            </span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground" />
            <span className="font-body text-xs text-muted-foreground">
              {year}
            </span>
          </div>

          {/* Title */}
          <h4 className="font-display text-xl text-foreground mb-2 group-hover:text-primary transition-colors duration-500">
            {title}
          </h4>

          {/* Type */}
          <p className="font-body text-sm text-muted-foreground">
            {type}
          </p>
        </div>
      </div>
    </motion.a>
  );
};

export default WorkCard;
