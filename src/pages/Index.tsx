import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import IntroLoader from '@/components/IntroLoader';
import FloatingParticles from '@/components/FloatingParticles';
import CursorGlow from '@/components/CursorGlow';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import FitnessAppSection from '@/components/FitnessAppSection';
import EarlierWorkSection from '@/components/EarlierWorkSection';
import Footer from '@/components/Footer';

const INTRO_PLAYED_KEY = 'intro_played';

const Index = () => {
  // Check if intro has already played this session
  const hasIntroPlayed = sessionStorage.getItem(INTRO_PLAYED_KEY) === 'true';
  const [isLoaded, setIsLoaded] = useState(hasIntroPlayed);
  const [showContent, setShowContent] = useState(hasIntroPlayed);
  const { scrollYProgress } = useScroll();
  
  // Parallax effect for background elements
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  const handleIntroComplete = () => {
    sessionStorage.setItem(INTRO_PLAYED_KEY, 'true');
    setIsLoaded(true);
  };

  useEffect(() => {
    if (isLoaded && !showContent) {
      // Small delay before showing content for smooth transition
      const timer = setTimeout(() => setShowContent(true), 100);
      return () => clearTimeout(timer);
    }
  }, [isLoaded, showContent]);

  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      {/* Intro loader - only show if not played yet */}
      {!hasIntroPlayed && <IntroLoader onComplete={handleIntroComplete} />}

      {/* Noise texture overlay */}
      <div className="noise-overlay" />
      
      {/* Vignette effect */}
      <div className="vignette" />

      {/* Floating particles */}
      {isLoaded && <FloatingParticles />}

      {/* Cursor glow effect */}
      {isLoaded && <CursorGlow />}

      {/* Navigation */}
      {isLoaded && <Navigation />}

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
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-20"
      >
        <Hero isVisible={showContent} />
        <FitnessAppSection />
        <EarlierWorkSection />
        <Footer />
      </motion.main>
    </div>
  );
};

export default Index;
