import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FloatingParticles from '@/components/FloatingParticles';
import CursorGlow from '@/components/CursorGlow';
const About = () => {
  return <div className="relative min-h-screen bg-background overflow-hidden">
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
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }}>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-foreground mb-12">
              About
            </h1>
            
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <motion.p initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6,
              delay: 0.4
            }}>
                My work isn't flashy by accident. I design to solve real problems, align teams, and move products forward. I care less about trends and more about clarity, usability, and decisions that hold up under pressure.
              </motion.p>
              
              <motion.p initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6,
              delay: 0.5
            }}>
                I do my best work in complex environments, when requirements are messy, constraints are real, and the path forward isn't obvious. That's where thoughtful design creates the most value.
              </motion.p>
              
              <motion.p initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6,
              delay: 0.6
            }}>
                I approach product design as a problem-solving discipline: understanding the why, shaping the how, and making deliberate tradeoffs so teams can ship with confidence.
              </motion.p>
            </div>

            {/* What I'm good at */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.7
          }} className="mt-16 pt-12 border-t border-border/30">
              <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-8">
                What I'm good at
              </h2>
              <ul className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1.5">•</span>
                  <span>Breaking down ambiguous problems into clear, actionable design decisions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1.5">•</span>
                  <span>Thinking in systems, not screens, flows, logic, edge cases, and tradeoffs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1.5">•</span>
                  <span>Designing with intent, where every choice has a reason behind it</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1.5">•</span>
                  <span>Collaborating closely with product and engineering to ship realistic, scalable solutions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1.5">•</span>
                  <span>Advocating for users without losing sight of business and technical constraints</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1.5">•</span>
                  <span>Owning problems end-to-end, from discovery through execution</span>
                </li>
              </ul>
            </motion.div>

            {/* Selected experience */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.8
          }} className="mt-16 pt-12 border-t border-border/30">
              <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-8">
                Selected experience
              </h2>
              <div className="space-y-10">
                {/* TRX */}
                <div className="group">
                  <h3 className="text-foreground font-medium text-xl mb-2">
                    Senior Product Designer, Willdom @ TRX Training
                  </h3>
                  <p className="text-muted-foreground/70 text-sm mb-4">2022–Present</p>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    I lead product design across multiple TRX products, focusing on discovery, engagement, and scalability.
                  </p>
                  
                </div>

                {/* VIRTUALhaus */}
                <div className="group">
                  <h3 className="text-foreground font-medium text-xl mb-2">
                    Senior UX/UI Designer, VIRTUALhaus
                  </h3>
                  <p className="text-muted-foreground/70 text-sm mb-4">2022</p>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    First design hire at a growth-stage startup, responsible for designing and shipping the MVP.
                  </p>
                  
                </div>

                {/* Itaú */}
                <div className="group">
                  <h3 className="text-foreground font-medium text-xl mb-2">
                    UX Designer, Itaú Unibanco
                  </h3>
                  <p className="text-muted-foreground/70 text-sm mb-4">2021–2022</p>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Part of the Market Disruption team within a large financial institution, exploring new digital products.
                  </p>
                  
                </div>

                {/* Earlier experience */}
                <div className="group">
                  <h3 className="text-foreground font-medium text-xl mb-2">
                    Earlier experience
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Before moving into product design, I spent five years working in graphic and motion design, delivering brand identity, video content, social media, packaging, and advertising. That background continues to inform my visual judgment, communication skills, and attention to detail.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Background */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.9
          }} className="mt-16 pt-12 border-t border-border/30">
              <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6">
                Background
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Bachelor's degree in Graphic Design and Media Arts<br />
                <span className="text-muted-foreground/70">Southern New Hampshire University</span>
              </p>
            </motion.div>

            {/* What you get */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 1.0
          }} className="mt-16 pt-12 border-t border-border/30">
              <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-8">
                What you get working with me
              </h2>
              <ul className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1.5">•</span>
                  <span>A designer who asks the right questions early</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1.5">•</span>
                  <span>Someone who reduces risk instead of adding noise</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1.5">•</span>
                  <span>A partner who brings structure and clarity to complex problems</span>
                </li>
              </ul>
              <p className="text-muted-foreground text-lg leading-relaxed mt-8">
                If you're looking for a designer who can think critically, work independently, and help teams move forward with confidence, the best way to reach me is on{' '}
                <a href="https://www.linkedin.com/in/gisellearbo/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 underline underline-offset-4 transition-colors">
                  LinkedIn
                </a>.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>;
};
export default About;