import { motion } from 'framer-motion';

const ProfileImage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="relative w-48 h-48 md:w-56 md:h-56 mx-auto md:mx-0"
    >
      {/* Floating accent shapes */}
      <motion.div
        animate={{ 
          y: [0, -6, 0],
          rotate: [0, 3, 0]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute -top-3 -right-3 w-8 h-8 border border-primary/40 rounded-full"
      />
      <motion.div
        animate={{ 
          y: [0, 5, 0],
          rotate: [0, -2, 0]
        }}
        transition={{ 
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
        className="absolute -bottom-2 -left-2 w-5 h-5 bg-primary/20 rounded-full"
      />
      <motion.div
        animate={{ 
          x: [0, 4, 0],
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute top-1/2 -left-4 w-2 h-12 border-l border-primary/30"
      />
      
      {/* Outer ring with subtle glow */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
        className="relative w-full h-full"
      >
        {/* Decorative ring */}
        <div className="absolute inset-0 rounded-full border border-border/50" />
        <div className="absolute inset-1 rounded-full border border-primary/20" />
        
        {/* Soft card background */}
        <div className="absolute inset-3 rounded-full bg-muted/30 backdrop-blur-sm" />
        
        {/* Image container */}
        <motion.div
          whileHover={{ y: -2 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-4 rounded-full overflow-hidden ring-1 ring-border/40 shadow-lg shadow-background/50"
        >
          <img
            src="/images/profile-img.png"
            alt="Giselle Arbo - Product Designer"
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        {/* Subtle highlight accent */}
        <div className="absolute inset-4 rounded-full pointer-events-none bg-gradient-to-tr from-transparent via-transparent to-primary/5" />
      </motion.div>
      
      {/* Status badge */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="absolute -bottom-1 right-4 flex items-center gap-1.5 px-3 py-1 bg-background/80 backdrop-blur-sm border border-border/40 rounded-full text-xs text-muted-foreground"
      >
        <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
        <span>Open to work</span>
      </motion.div>
    </motion.div>
  );
};

export default ProfileImage;
