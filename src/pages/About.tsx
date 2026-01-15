import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FloatingParticles from '@/components/FloatingParticles';
import CursorGlow from '@/components/CursorGlow';

const About = () => {
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
              About Me
            </h1>
            
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                I'm Giselle Arbo, a Product Designer based in the San Francisco Bay Area. 
                I specialize in creating digital experiences that are both beautiful and functional.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                With a background in UX/UI design, I bring a unique perspective to every project. 
                I believe great design starts with understanding people—their needs, motivations, and behaviors.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                When I'm not designing, you can find me exploring new coffee shops, 
                practicing photography, or planning my next travel adventure.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-12 pt-12 border-t border-border/30"
            >
              <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6">
                Experience
              </h2>
              <div className="space-y-8">
                <div className="group">
                  <h3 className="text-foreground font-medium text-lg">Product Designer</h3>
                  <p className="text-muted-foreground">Current Role • San Francisco Bay Area</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
