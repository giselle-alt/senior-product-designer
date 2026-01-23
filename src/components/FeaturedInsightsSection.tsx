import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const FeaturedInsightsSection = () => {
  const featuredPosts = [
    {
      title: 'How I actually use AI as a product designer',
      excerpt: 'A breakdown of where AI fits into my workflow—and where it doesn\'t.',
      href: '/blog/ai-product-designer'
    },
    {
      title: '30 days of a design job search',
      excerpt: 'Tracking outcomes to separate what\'s happening from what it feels like.',
      href: '/blog/job-search-30-days'
    }
  ];

  return (
    <section className="relative py-16 md:py-20">
      <div className="container relative px-6 md:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10"
        >
          <span className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground">
            Featured Insights
          </span>
        </motion.div>

        {/* Posts grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {featuredPosts.map((post, index) => (
            <motion.div
              key={post.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.1 * index, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                to={post.href}
                className="group block py-4 border-t border-border/30 hover:border-primary/30 transition-colors duration-500"
              >
                <h3 className="font-display text-base md:text-lg text-foreground group-hover:text-primary transition-colors duration-300 mb-2">
                  {post.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground mb-3 line-clamp-1">
                  {post.excerpt}
                </p>
                <span className="inline-flex items-center gap-1.5 font-body text-xs text-primary/70 group-hover:text-primary transition-colors duration-300">
                  Read
                  <ArrowRight className="w-3 h-3 transform group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedInsightsSection;
