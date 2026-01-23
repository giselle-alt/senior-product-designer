import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

interface WorkCardProps {
  title: string;
  year: string;
  category: string;
  type: string;
  image: string;
  hoverImage?: string;
  href: string;
  delay?: number;
}

const WorkCard = ({ title, year, category, type, image, hoverImage, href, delay = 0 }: WorkCardProps) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className="group relative block h-full"
    >
      <div className="relative overflow-hidden rounded-2xl border border-border/30 bg-card/30 transition-all duration-700 ease-out hover:border-primary/30 h-full flex flex-col">
        {/* Image container */}
        <div className="relative aspect-[4/3] overflow-hidden flex-shrink-0">
          {/* Mobile/touch: show full-color image */}
          <img
            src={hoverImage || image}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover md:hidden"
          />
          
          {/* Desktop: show base image (line-art if hoverImage exists) */}
          <img
            src={image}
            alt={title}
            className="hidden md:block absolute inset-0 w-full h-full object-cover"
          />
          
          {/* Desktop hover: fade in full-color */}
          {hoverImage && (
            <img
              src={hoverImage}
              alt={title}
              className="hidden md:block absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
          )}
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
          
          {/* External link icon */}
          <div className="absolute top-4 right-4 p-2 rounded-full bg-background/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
            <ExternalLink className="w-4 h-4 text-foreground" />
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
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

          {/* Spacer to push type to bottom */}
          <div className="flex-grow" />

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
