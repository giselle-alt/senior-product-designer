import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface ChapterNavProps {
  prevChapter?: {
    path: string;
    title: string;
  };
  nextChapter?: {
    path: string;
    title: string;
  };
  showHomeLink?: boolean;
}

const ChapterNavigation = ({ prevChapter, nextChapter, showHomeLink }: ChapterNavProps) => {
  const navigate = useNavigate();

  const handlePrevious = () => {
    if (prevChapter) {
      // Navigate then scroll to bottom
      navigate(prevChapter.path);
      // Use requestAnimationFrame to ensure page has rendered
      requestAnimationFrame(() => {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'instant' });
      });
    }
  };

  const handleNext = () => {
    if (nextChapter) {
      // Navigate and scroll to top
      navigate(nextChapter.path);
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  };

  const handleHome = () => {
    // Navigate home without triggering intro
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mt-20 pt-12 border-t border-border/30 flex justify-between items-center"
    >
      {prevChapter ? (
        <button 
          onClick={handlePrevious}
          className="group inline-flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-left"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <div>
            <span className="text-xs tracking-[0.2em] uppercase text-primary block mb-1">Previous Chapter</span>
            <span className="text-lg font-serif">{prevChapter.title}</span>
          </div>
        </button>
      ) : (
        <div />
      )}

      {showHomeLink && (
        <button 
          onClick={handleHome}
          className="text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          Back to Home
        </button>
      )}

      {nextChapter ? (
        <button 
          onClick={handleNext}
          className="group inline-flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-right"
        >
          <div className="text-right">
            <span className="text-xs tracking-[0.2em] uppercase text-primary block mb-1">Next Chapter</span>
            <span className="text-lg font-serif">{nextChapter.title}</span>
          </div>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      ) : (
        !showHomeLink && <div />
      )}
    </motion.div>
  );
};

export default ChapterNavigation;
