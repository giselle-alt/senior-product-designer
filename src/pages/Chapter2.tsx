import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FloatingParticles from '@/components/FloatingParticles';
import CursorGlow from '@/components/CursorGlow';
import ChapterNavigation from '@/components/ChapterNavigation';

const Chapter2 = () => {
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

      {/* Main content */}
      <main className="relative z-20 pt-32 pb-24">
        <article className="max-w-3xl mx-auto px-6 md:px-12">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link 
              to="/#work" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-12 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm">Back to Portfolio</span>
            </Link>
          </motion.div>

          {/* Chapter header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-12"
          >
            <span className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4 block">
              Chapter 2
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              Fixing Navigation
            </h1>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="prose prose-lg prose-invert max-w-none"
          >
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              The biggest problem we found was that users couldn't find workouts easily. Before proposing changes, I needed to understand how the existing navigation was organized and where people were getting stuck.
            </p>

            <h2 className="font-serif text-2xl md:text-3xl text-foreground mt-16 mb-6">
              Auditing the Information Architecture
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              I started by mapping the entire navigation structure. The app had grown organically over years, and no one had a complete picture of how all the pieces fit together.
            </p>

            <motion.figure
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="my-12"
            >
              <div className="rounded-xl overflow-hidden border border-border/30">
                <img 
                  src="https://www.gisellearbo.com/images/chapter2-img1.png" 
                  alt="Information Architecture audit"
                  className="w-full"
                />
              </div>
              <figcaption className="text-muted-foreground text-sm text-center mt-4">
                The current navigation structure mapped out.
              </figcaption>
            </motion.figure>

            <h2 className="font-serif text-2xl md:text-3xl text-foreground mt-16 mb-6">
              The hypothesis
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Looking at the data, I formed a hypothesis: "On Demand" was too vague as a label. Users didn't immediately understand what they'd find there. The labels needed to be more explicit about what each section contained.
            </p>

            <h2 className="font-serif text-2xl md:text-3xl text-foreground mt-16 mb-6">
              Testing three variants
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              I designed three navigation variants to test with users:
            </p>

            <ul className="text-muted-foreground text-lg leading-relaxed mb-8 space-y-2">
              <li><strong className="text-foreground">V1 - Current:</strong> The existing "On Demand" label</li>
              <li><strong className="text-foreground">V2 - Explicit:</strong> Separate tabs for "Live," "Workouts," and "Programs"</li>
              <li><strong className="text-foreground">V3 - Conceptual:</strong> Category-based labels like "Train" and "Recover"</li>
            </ul>

            <motion.figure
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="my-12"
            >
              <div className="rounded-xl overflow-hidden border border-border/30">
                <img 
                  src="https://www.gisellearbo.com/images/chapter2-img2.png" 
                  alt="Navigation variants"
                  className="w-full"
                />
              </div>
              <figcaption className="text-muted-foreground text-sm text-center mt-4">
                Three navigation variants tested with users.
              </figcaption>
            </motion.figure>

            <h2 className="font-serif text-2xl md:text-3xl text-foreground mt-16 mb-6">
              Usability testing
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              I conducted usability testing with 93 participants, split across the three variants. Each participant was asked to complete common tasks like:
            </p>

            <ul className="text-muted-foreground text-lg leading-relaxed mb-8 space-y-2">
              <li>Find a 20-minute HIIT workout</li>
              <li>Join a live class</li>
              <li>Start a 4-week strength program</li>
            </ul>

            <motion.figure
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="my-12"
            >
              <div className="rounded-xl overflow-hidden border border-border/30">
                <img 
                  src="https://www.gisellearbo.com/images/chapter2-img3.png" 
                  alt="Usability testing results"
                  className="w-full"
                />
              </div>
              <figcaption className="text-muted-foreground text-sm text-center mt-4">
                Task completion rates across variants.
              </figcaption>
            </motion.figure>

            <h2 className="font-serif text-2xl md:text-3xl text-foreground mt-16 mb-6">
              Results
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              The explicit labels (V2) performed significantly better:
            </p>

            <div className="cinematic-card p-6 mb-12">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border/30">
                    <th className="text-left py-3 text-primary font-medium">Metric</th>
                    <th className="text-left py-3 text-primary font-medium">V1 (Current)</th>
                    <th className="text-left py-3 text-primary font-medium">V2 (Explicit)</th>
                    <th className="text-left py-3 text-primary font-medium">V3 (Conceptual)</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border/20">
                    <td className="py-3">Task success rate</td>
                    <td className="py-3">68%</td>
                    <td className="py-3 text-primary">94%</td>
                    <td className="py-3">71%</td>
                  </tr>
                  <tr className="border-b border-border/20">
                    <td className="py-3">Time to complete</td>
                    <td className="py-3">45s avg</td>
                    <td className="py-3 text-primary">22s avg</td>
                    <td className="py-3">38s avg</td>
                  </tr>
                  <tr>
                    <td className="py-3">Confidence rating</td>
                    <td className="py-3">3.2/5</td>
                    <td className="py-3 text-primary">4.6/5</td>
                    <td className="py-3">3.5/5</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <motion.figure
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="my-12"
            >
              <div className="rounded-xl overflow-hidden border border-border/30">
                <img 
                  src="https://www.gisellearbo.com/images/chapter2-img4.png" 
                  alt="Final navigation design"
                  className="w-full"
                />
              </div>
              <figcaption className="text-muted-foreground text-sm text-center mt-4">
                The winning navigation structure.
              </figcaption>
            </motion.figure>

            <h2 className="font-serif text-2xl md:text-3xl text-foreground mt-16 mb-6">
              Implementation
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Based on the test results, we implemented the explicit navigation labels: Live, Workouts, and Programs. The A/B test in production confirmed what we saw in usability testing—users found workouts faster and completed more sessions.
            </p>

            <motion.figure
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="my-12"
            >
              <div className="rounded-xl overflow-hidden border border-border/30">
                <img 
                  src="https://www.gisellearbo.com/images/chapter2-img5.png" 
                  alt="A/B test results"
                  className="w-full"
                />
              </div>
              <figcaption className="text-muted-foreground text-sm text-center mt-4">
                A/B test results showing improved task completion.
              </figcaption>
            </motion.figure>

            <h2 className="font-serif text-2xl md:text-3xl text-foreground mt-16 mb-6">
              Key learnings
            </h2>

            <ul className="text-muted-foreground text-lg leading-relaxed mb-8 space-y-4">
              <li><strong className="text-foreground">Explicit beats clever:</strong> Users don't want to interpret labels. They want to know exactly what they'll find.</li>
              <li><strong className="text-foreground">Test before you build:</strong> Usability testing with 93 people cost a fraction of what a wrong implementation would have cost.</li>
              <li><strong className="text-foreground">Small changes, big impact:</strong> Renaming tabs took days to implement but improved key metrics significantly.</li>
            </ul>
          </motion.div>

          {/* Navigation */}
          <ChapterNavigation 
            prevChapter={{ path: '/chapter1', title: 'The Problem' }}
            nextChapter={{ path: '/chapter3', title: 'Personalization & Habits' }}
          />
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default Chapter2;
