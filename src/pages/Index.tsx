import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FloatingParticles from '@/components/FloatingParticles';
import CursorGlow from '@/components/CursorGlow';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import FitnessAppSection from '@/components/FitnessAppSection';
import FeaturedInsightsSection from '@/components/FeaturedInsightsSection';
import EarlierWorkSection from '@/components/EarlierWorkSection';
import Footer from '@/components/Footer';

const Index = () => {
  const [showContent, setShowContent] = useState(false);
  const { scrollYProgress } = useScroll();
  
  // Parallax effect for background elements
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  useEffect(() => {
    // Small delay for smooth initial render
    const timer = setTimeout(() => setShowContent(true), 100);
    return () => clearTimeout(timer);
  }, []);

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

      {/* Parallax background glow */}
      <motion.div
        className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] pointer-events-none"
        style={{
          y: backgroundY,
          background: 'radial-gradient(ellipse 50% 30% at 50% 20%, hsl(42 60% 20% / 0.2), transparent)',
        }}
      />

      {/* Main content */}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-20"
      >
        <Hero isVisible={showContent} />
        <FitnessAppSection />
        <EarlierWorkSection />
        <FeaturedInsightsSection />
        <Footer />
      </motion.main>
    </div>
  );
};

export default Index;
