import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TocItem {
  id: string;
  text: string;
}

const TableOfContents = () => {
  const [tocItems, setTocItems] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');
  const [isVisible, setIsVisible] = useState(false);

  // Find all h2 elements and build TOC
  useEffect(() => {
    const updateToc = () => {
      const headings = document.querySelectorAll('article h2');
      const items: TocItem[] = [];

      headings.forEach((heading, index) => {
        // Generate ID if not present
        if (!heading.id) {
          const id = heading.textContent
            ?.toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)/g, '') || `section-${index}`;
          heading.id = id;
        }

        items.push({
          id: heading.id,
          text: heading.textContent || '',
        });
      });

      setTocItems(items);
    };

    // Initial build
    updateToc();

    // Set up MutationObserver to watch for DOM changes
    const observer = new MutationObserver(updateToc);
    const article = document.querySelector('article');
    
    if (article) {
      observer.observe(article, {
        childList: true,
        subtree: true,
      });
    }

    return () => observer.disconnect();
  }, []);

  // Track scroll position to highlight active section and control visibility
  useEffect(() => {
    const handleScroll = () => {
      const headings = tocItems.map(item => document.getElementById(item.id));
      
      // Check if we've scrolled past the first h2
      const firstHeading = headings[0];
      if (firstHeading) {
        const rect = firstHeading.getBoundingClientRect();
        setIsVisible(rect.top <= 150);
      }
      
      let currentId = '';
      for (const heading of headings) {
        if (heading) {
          const rect = heading.getBoundingClientRect();
          if (rect.top <= 150) {
            currentId = heading.id;
          }
        }
      }
      
      setActiveId(currentId);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [tocItems]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  if (tocItems.length === 0) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.4 }}
          className="hidden lg:block fixed right-8 xl:right-16 top-32 z-30 max-w-[200px]"
        >
          <div className="p-4 rounded-lg bg-background/50 backdrop-blur-sm border border-border/20">
            <p className="text-xs font-medium text-primary uppercase tracking-wider mb-3">
              On this page
            </p>
            <ul className="space-y-2">
              {tocItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`text-left text-sm leading-tight transition-colors duration-200 block w-full ${
                      activeId === item.id
                        ? 'text-primary'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {item.text}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default TableOfContents;
