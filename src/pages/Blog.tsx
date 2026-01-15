import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FloatingParticles from '@/components/FloatingParticles';
import CursorGlow from '@/components/CursorGlow';

const Blog = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      {/* Noise texture overlay */}
      <div className="noise-overlay" />
      
      {/* Vignette effect */}
      <div className="vignette" />

      {/* Floating particles */}
      <FloatingParticles />
      
      {/* Cursor glow effect */}
      <CursorGlow />

      {/* Navigation */}
      <Navigation />

      {/* Main content */}
      <main className="relative z-20 pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-foreground mb-8">
              Blog
            </h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-muted-foreground text-lg mb-12"
            >
              Thoughts on design, product, and creativity.
            </motion.p>

            {/* Coming Soon State */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="cinematic-card p-12 text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent/10 flex items-center justify-center">
                <span className="text-2xl">✍️</span>
              </div>
              <h2 className="font-serif text-2xl text-foreground mb-4">
                Coming Soon
              </h2>
              <p className="text-muted-foreground max-w-md mx-auto">
                I'm working on some exciting articles about design process, 
                case studies, and industry insights. Stay tuned!
              </p>
            </motion.div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
