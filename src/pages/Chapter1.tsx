import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FloatingParticles from '@/components/FloatingParticles';
import CursorGlow from '@/components/CursorGlow';
import ChapterNavigation from '@/components/ChapterNavigation';
import TableOfContents from '@/components/TableOfContents';
import ChapterHeader from '@/components/ChapterHeader';

const Chapter1 = () => {
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

      {/* Table of Contents */}
      <TableOfContents />

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
              <span className="text-sm">Back to Home</span>
            </Link>
          </motion.div>

          {/* Project context header */}
          <ChapterHeader
            client="TRX App"
            role="Senior Product Designer"
            date="Nov 2024 – Dec 2024"
            tools={['Jotform', 'Google Sheets', 'Figma', 'ChatGPT']}
          />

          {/* Chapter header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-12"
          >
            <span className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4 block">
              Chapter 1
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              The Problem
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
              At the end of 2024, the product had two clear issues. Very few free users were becoming paid users, and people who did pay were not coming back often. In simple terms, people were downloading the app, opening it a few times, and leaving.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed mb-12">
              Before jumping into redesigns, I needed to understand why.
            </p>

            <div className="cinematic-card p-6 mb-12">
              <p className="text-foreground/80 text-sm">
                <strong className="text-primary">My role:</strong> As the Senior UX/UI Designer on this project, I led the design work from start to finish. I conducted user research, analyzed feedback, framed the problem, created sketches and wireframes, and proposed solutions for faster workout discovery and improved navigation. I collaborated with PMs and engineers to ensure changes were feasible and aligned with business goals.
              </p>
            </div>

            <h2 className="font-serif text-2xl md:text-3xl text-foreground mt-16 mb-6">
              What I did first
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              I started by "listening" to users. I looked at user feedback we already had from App Store reviews, post-workout surveys, "end workout early" surveys, and subscription cancellation surveys.
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
                  src="https://www.gisellearbo.com/images/chapter1-img1.png" 
                  alt="User reviews and retention chart"
                  className="w-full"
                />
              </div>
              <figcaption className="text-muted-foreground text-sm text-center mt-4">
                Feedback from different sources showed the same pattern.
              </figcaption>
            </motion.figure>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              I grouped everything into themes and asked one simple question: What is making people stop using the app?
            </p>

            <h2 className="font-serif text-2xl md:text-3xl text-foreground mt-16 mb-6">
              What users were telling us
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              When everything was grouped together, a clear pattern showed up. People were not saying the workouts were bad or the trainers were bad. They were saying things like:
            </p>

            <ul className="space-y-4 text-muted-foreground text-lg leading-relaxed mb-8">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1.5">•</span>
                <span>They couldn't find what they were looking for.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1.5">•</span>
                <span>The app felt overwhelming.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1.5">•</span>
                <span>They just wanted to start a simple workout.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1.5">•</span>
                <span>They gave up and looked somewhere else.</span>
              </li>
            </ul>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              This feedback came from different devices, experience levels, and use cases... but it pointed to the same problems:
            </p>

            <div className="cinematic-card p-6 mb-12">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border/30">
                    <th className="text-left py-3 text-primary font-medium">Theme</th>
                    <th className="text-left py-3 text-primary font-medium">What users said</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border/20">
                    <td className="py-3">Finding workouts</td>
                    <td className="py-3">"I couldn't find my saved workouts" or "Too many options"</td>
                  </tr>
                  <tr className="border-b border-border/20">
                    <td className="py-3">Getting Started</td>
                    <td className="py-3">"I just wanted a simple workout"</td>
                  </tr>
                  <tr className="border-b border-border/20">
                    <td className="py-3">Navigation</td>
                    <td className="py-3">"I had trouble finding on-demand classes on my computer"</td>
                  </tr>
                  <tr className="border-b border-border/20">
                    <td className="py-3">Progress and motivation</td>
                    <td className="py-3">"I can't find the next workout on the program I started last week"</td>
                  </tr>
                  <tr>
                    <td className="py-3">Beginners</td>
                    <td className="py-3">"The app felt overwhelming at first"</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="font-serif text-2xl md:text-3xl text-foreground mt-16 mb-6">
              The main insight
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              The app worked like a big video library. That sounds fine, but in practice it meant too many options, too much browsing, and too much thinking before starting. For a fitness app, that's a problem. If users have to think too much before a workout, they often don't work out at all.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              That made our 2025 goal very clear. We needed to help users start their first workout faster, make it easier for them to come back regularly, and reduce the pressure of choosing from thousands of options every time.
            </p>

            <h2 className="font-serif text-2xl md:text-3xl text-foreground mt-16 mb-6">
              The reality we were working with
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              At the same time, there were clear constraints. The app had grown a lot over the years and couldn't be rebuilt from scratch. There wasn't budget or time for a full redesign, and any changes had to work with existing screens and systems. Because of this, the goal wasn't to make a perfect new app. It was to make improvements without breaking what already existed.
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
                  src="https://www.gisellearbo.com/images/chapter1-img2.png" 
                  alt="User needs vs. stakeholder needs"
                  className="w-full"
                />
              </div>
              <figcaption className="text-muted-foreground text-sm text-center mt-4">
                User needs vs. stakeholder needs.
              </figcaption>
            </motion.figure>

            <h2 className="font-serif text-2xl md:text-3xl text-foreground mt-16 mb-6">
              From problems to possible solutions
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              I brainstormed solutions for each major problem area. Focusing on ideas that could ship faster, required smaller changes, and had the biggest impact on helping users start a workout.
            </p>

            <div className="cinematic-card p-6 mb-12">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border/30">
                    <th className="text-left py-3 text-primary font-medium">Theme</th>
                    <th className="text-left py-3 text-primary font-medium">Ideas</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border/20">
                    <td className="py-3">Finding workouts</td>
                    <td className="py-3">Reorganize and rename existing pages to be more intuitive.</td>
                  </tr>
                  <tr className="border-b border-border/20">
                    <td className="py-3">Starting workouts or programs</td>
                    <td className="py-3">Suggest workouts or programs based on user preferences.</td>
                  </tr>
                  <tr className="border-b border-border/20">
                    <td className="py-3">Access progress</td>
                    <td className="py-3">Add "In progress.." programs to home page.</td>
                  </tr>
                  <tr>
                    <td className="py-3">Motivation to come back</td>
                    <td className="py-3">A basic "streaks" feature.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Highlighting all my ideas made it easier for non-product stakeholders to understand why some changes mattered more than others.
            </p>

            <h2 className="font-serif text-2xl md:text-3xl text-foreground mt-16 mb-6">
              What comes next
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              The sketches, ideas, and final report helped my team get approval to:
            </p>

            <ul className="space-y-4 text-muted-foreground text-lg leading-relaxed mb-12">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1.5">•</span>
                <span>Update the app's tab navigation.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1.5">•</span>
                <span>Add a more personalized home experience.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1.5">•</span>
                <span>Introduce basic habit-building features, like streaks.</span>
              </li>
            </ul>

            <p className="text-muted-foreground text-lg leading-relaxed">
              Each approved change has its own research, testing, and results, which I cover separately in the following chapters.
            </p>
          </motion.div>

          {/* Navigation */}
          <ChapterNavigation 
            nextChapter={{ path: '/chapter2', title: 'Fixing Navigation' }}
          />
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default Chapter1;
