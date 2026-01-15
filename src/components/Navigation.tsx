import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Portfolio', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 2.5, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-background/80 backdrop-blur-md border-b border-border/50' 
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="group flex items-center gap-2">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative"
          >
            <span className="font-serif text-2xl md:text-3xl font-medium text-foreground tracking-tight">
              GA
            </span>
            <motion.div
              className="absolute -bottom-1 left-0 right-0 h-[2px] bg-accent origin-left"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </Link>

        {/* Navigation Items */}
        <div className="flex items-center gap-1 md:gap-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="relative px-3 py-2 md:px-4"
            >
              <span
                className={`text-sm md:text-base font-medium transition-colors duration-300 ${
                  isActive(item.path)
                    ? 'text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item.name}
              </span>
              {isActive(item.path) && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute bottom-0 left-3 right-3 md:left-4 md:right-4 h-[2px] bg-accent"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}

          {/* Contact CTA */}
          <motion.a
            href="https://www.linkedin.com/in/gisellearbo/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="ml-2 md:ml-4 px-4 py-2 md:px-5 md:py-2.5 bg-accent/10 border border-accent/30 rounded-full text-sm md:text-base font-medium text-accent hover:bg-accent/20 hover:border-accent/50 transition-all duration-300"
          >
            Contact
          </motion.a>
        </div>
      </nav>
    </motion.header>
  );
};

export default Navigation;
