import { motion } from 'framer-motion';
const Footer = () => {
  return <footer className="relative py-20 border-t border-border/30 px-[32px]">
      <div className="container px-6 md:px-8">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }} className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Name */}
          <div className="text-center md:text-left">
            <h3 className="font-display text-2xl text-foreground mb-2">
              Giselle Arbo
            </h3>
            <p className="font-body text-sm text-muted-foreground">
              Senior Product Designer
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-8">
            <a href="https://www.behance.net/gisellearbo" target="_blank" rel="noopener noreferrer" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
              Behance
            </a>
            <a href="https://www.linkedin.com/in/gisellearbo" target="_blank" rel="noopener noreferrer" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
              LinkedIn
            </a>
          </div>

          {/* Year */}
          <p className="font-body text-sm text-muted-foreground">
            © {new Date().getFullYear()}
          </p>
        </motion.div>
      </div>
    </footer>;
};
export default Footer;