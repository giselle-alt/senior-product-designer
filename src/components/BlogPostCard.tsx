import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface BlogPostCardProps {
  title: string;
  category: string;
  image: string;
  href: string;
  delay?: number;
  featured?: boolean;
}

const BlogPostCard = ({ title, category, image, href, delay = 0 }: BlogPostCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className="h-full"
    >
      <Link
        to={href}
        className="group relative block h-full"
      >
        <div className="relative overflow-hidden rounded-2xl border border-border/30 bg-card/30 transition-all duration-700 ease-out hover:border-primary/30 h-full flex flex-col">
          {/* Image container */}
          <div className="relative aspect-[4/3] overflow-hidden flex-shrink-0">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
          </div>

          {/* Content */}
          <div className="p-6 flex flex-col flex-grow">
            {/* Category badge */}
            <span className="font-body text-xs tracking-widest uppercase text-primary mb-3">
              {category}
            </span>

            {/* Title */}
            <h3 className="font-display text-xl md:text-2xl text-foreground group-hover:text-primary transition-colors duration-500">
              {title}
            </h3>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default BlogPostCard;
