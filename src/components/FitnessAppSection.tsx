import { motion } from 'framer-motion';
import ChapterCard from './ChapterCard';

const FitnessAppSection = () => {
  const chapters = [
    {
      number: 1,
      title: 'Finding the real problem',
      subtitle: 'Understanding why people weren\'t starting workouts',
      href: '/chapter1',
    },
    {
      number: 2,
      title: 'Fixing navigation',
      subtitle: 'Making it easier to find and start a workout',
      href: '/chapter2',
    },
    {
      number: 3,
      title: 'Helping users come back',
      subtitle: 'Personalization, reminders, and habit-building',
      href: '/chapter3',
    },
  ];

  return (
    <section id="work" className="relative py-32 md:py-40">
      {/* Section background glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, hsl(42 85% 55% / 0.05), transparent 50%)',
        }}
      />

      <div className="container relative px-6 md:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-8"
        >
          <span className="font-body text-sm tracking-[0.3em] uppercase text-primary">
            Selected Work 2025
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-4xl md:text-6xl lg:text-7xl text-center text-foreground mb-8"
        >
          Fitness App
        </motion.h2>

        {/* App image placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative max-w-4xl mx-auto mb-16"
        >
          <div className="relative aspect-video rounded-2xl overflow-hidden border border-border/30 bg-card/20">
            <img
              src="https://www.gisellearbo.com/images/fitness-app.png"
              alt="Fitness App Screenshot"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
          </div>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
            I've been working on this fitness app since 2022.
          </p>
          <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
            As the product grew, new problems started to show up, especially around helping people start workouts and come back regularly.
          </p>
          <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed">
            These 3 chapters focus on work I did starting in 2024 to understand those problems and improve the experience. They show how I think through problems, test ideas, and make things easier for people to use.
          </p>
        </motion.div>

        {/* Chapter cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {chapters.map((chapter, index) => (
            <ChapterCard
              key={chapter.number}
              {...chapter}
              delay={0.1 * index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FitnessAppSection;
