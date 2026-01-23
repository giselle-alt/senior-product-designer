import { motion } from 'framer-motion';
import WorkCard from './WorkCard';

const EarlierWorkSection = () => {
  const works = [
    {
      title: '3D Marketplace',
      year: '2022',
      category: 'UX and UI Design',
      type: 'Web app',
      image: 'https://www.gisellearbo.com/images/work1.png',
      href: 'https://www.behance.net/gallery/154930775/3D-Marketplace-for-Building-Products',
    },
    {
      title: 'E-commerce',
      year: '2020',
      category: 'UX Evaluation',
      type: 'Website',
      image: 'https://www.gisellearbo.com/images/work4.png',
      href: 'https://www.behance.net/gallery/136568201/UX-Evaluation-E-commercer-website/modules/876911591',
    },
    {
      title: 'Visual Routine',
      year: '2019',
      category: 'UX Research & Design',
      type: 'Smartwatch & Mobile app',
      image: 'https://www.gisellearbo.com/images/work3.png',
      href: 'https://www.behance.net/gallery/136506589/An-always-present-visual-routine',
    },
  ];

  return (
    <section className="relative py-32 md:py-40 overflow-hidden">
      {/* Background elements */}
      <div 
        className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none opacity-30"
        style={{
          background: 'radial-gradient(circle, hsl(42 85% 55% / 0.08), transparent 60%)',
        }}
      />

      <div className="container relative px-6 md:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl text-foreground mb-4">
            Earlier Work
          </h2>
          <div className="w-24 h-[2px] bg-gradient-to-r from-primary to-transparent" />
        </motion.div>

        {/* Work grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {works.map((work, index) => (
            <WorkCard
              key={work.title}
              {...work}
              delay={0.1 * index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EarlierWorkSection;
