import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FloatingParticles from '@/components/FloatingParticles';
import CursorGlow from '@/components/CursorGlow';
import ChapterNavigation from '@/components/ChapterNavigation';

const Chapter3 = () => {
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
              Chapter 3
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              Personalization & Habits
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
              Getting someone to start a workout is hard. But getting them to come back, especially after life gets busy, is a whole different challenge.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed mb-12">
              In this chapter, I focus on two features we designed to make returning to the app easier and help users build habits. One is already tested and proven to work, and the other is still being experimented with.
            </p>

            <h2 className="font-serif text-2xl md:text-3xl text-foreground mt-16 mb-6">
              The retention problem
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              From our research, we knew people liked our programs and coaches. But once someone started a program, there was no quick way to see what workout came next when they returned to the app.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Instead of picking up where they left off, users often found themselves asking:
            </p>

            <ul className="text-muted-foreground text-lg leading-relaxed mb-8 space-y-2">
              <li>What was I doing last time?</li>
              <li>Did I already finish this workout?</li>
              <li>Where should I continue from?</li>
            </ul>

            <p className="text-muted-foreground text-lg leading-relaxed mb-12">
              Because the app didn't answer these questions clearly, many users abandoned programs, not because of low motivation, but because it was cognitively confusing to know what to do next. These small moments of friction quietly killed motivation and often led to drop-off or unsubscribing.
            </p>

            <h2 className="font-serif text-2xl md:text-3xl text-foreground mt-16 mb-6">
              Feature 1: Continue Where You Left Off
            </h2>

            <h3 className="font-serif text-xl md:text-2xl text-foreground/90 mt-12 mb-4">
              What it does
            </h3>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              I designed this feature to help users resume exactly where they stopped. It surfaces:
            </p>

            <ul className="text-muted-foreground text-lg leading-relaxed mb-8 space-y-2">
              <li>Programs they've already started</li>
              <li>Clear progress indicators (for example, "8 of 13 workouts done")</li>
              <li>A direct way to jump back into the next workout</li>
            </ul>

            <p className="text-muted-foreground text-lg leading-relaxed mb-12">
              Instead of forcing users to search or remember, in-progress programs appear directly on the home screen. The goal was simple: reduce thinking, reduce friction, and make continuing feel effortless.
            </p>

            <h3 className="font-serif text-xl md:text-2xl text-foreground/90 mt-12 mb-4">
              What we tested
            </h3>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              During usability testing, I focused on four key questions:
            </p>

            <ul className="text-muted-foreground text-lg leading-relaxed mb-12 space-y-2">
              <li>Do users recognize this section as their ongoing programs?</li>
              <li>Can they resume quickly without getting lost?</li>
              <li>How much effort does it take to start the next workout?</li>
              <li>Do users feel confident and in control of their progress?</li>
            </ul>

            <h3 className="font-serif text-xl md:text-2xl text-foreground/90 mt-12 mb-4">
              What we learned
            </h3>

            <h4 className="text-foreground font-medium mt-8 mb-4">1. The title matters</h4>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              We tested "Continue Where You Left Off" against "My Programs" as the home carousel title. Both variants performed well, but "Continue Where You Left Off" removed ambiguity faster.
            </p>

            <div className="cinematic-card p-6 mb-8">
              <p className="text-foreground font-medium mb-2">Task success:</p>
              <ul className="text-muted-foreground text-sm space-y-1">
                <li>Variant A (Continue Where You Left Off): <span className="text-primary">100% success rate</span></li>
                <li>Variant B (My Programs): 94.4% success rate</li>
              </ul>
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
                  src="https://www.gisellearbo.com/images/chapter3-img1.png" 
                  alt="Home carousel title variants"
                  className="w-full"
                />
              </div>
              <figcaption className="text-muted-foreground text-sm text-center mt-4">
                Two title variants tested.
              </figcaption>
            </motion.figure>

            <p className="text-muted-foreground text-lg leading-relaxed mb-12">
              Participants consistently described the section as a way to "pick up where I left off" when the title explicitly said so. The clearer title reduced interpretation effort and helped users immediately recognize the carousel as in-progress content, not saved or new programs.
            </p>

            <h4 className="text-foreground font-medium mt-8 mb-4">2. Progress indicators need context</h4>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Numeric progress indicators like "8 / 13" were largely understood, but not universally.
            </p>

            <div className="cinematic-card p-6 mb-8">
              <p className="text-foreground font-medium mb-2">Correct interpretation:</p>
              <ul className="text-muted-foreground text-sm space-y-1">
                <li>Variant A: <span className="text-primary">90% understood it as workouts completed</span></li>
                <li>Variant B: 67% understood it as workouts completed</li>
              </ul>
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
                  src="https://www.gisellearbo.com/images/chapter3-img2.png" 
                  alt="Progress indicator variants"
                  className="w-full"
                />
              </div>
              <figcaption className="text-muted-foreground text-sm text-center mt-4">
                Two progress indicator variants tested.
              </figcaption>
            </motion.figure>

            <p className="text-muted-foreground text-lg leading-relaxed mb-12">
              A notable minority interpreted the number as their current position in the program rather than completed progress. Numbers alone mostly work, but pairing them with contextual cues (such as "Next workout" or completion states) helps remove lingering ambiguity and reinforces a sense of momentum.
            </p>

            <h4 className="text-foreground font-medium mt-8 mb-4">3. Don't auto-play workouts</h4>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Users had no trouble finding the "Start Next Workout" CTA in either layout, with very high completion rates.
            </p>

            <div className="cinematic-card p-6 mb-8">
              <p className="text-foreground font-medium mb-2">Task success:</p>
              <ul className="text-muted-foreground text-sm space-y-1">
                <li>Variant A: <span className="text-primary">100%</span></li>
                <li>Variant B: 94.1%</li>
              </ul>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Expectations after tapping the CTA were clear:
            </p>

            <ul className="text-muted-foreground text-lg leading-relaxed mb-8 space-y-2">
              <li>75–89% of participants wanted to see workout details first (duration, equipment, difficulty)</li>
              <li>Only 11–25% expected the workout to start playing immediately</li>
            </ul>

            <p className="text-muted-foreground text-lg leading-relaxed mb-12">
              This reinforced that "fast" doesn't always mean "automatic." Users value reassurance and context before committing, especially when returning after a break.
            </p>

            <h4 className="text-foreground font-medium mt-8 mb-4">4. Resetting progress is tricky, but needed</h4>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Resetting a program was the most sensitive interaction we tested.
            </p>

            <div className="cinematic-card p-6 mb-8">
              <p className="text-foreground font-medium mb-2">Placement impact:</p>
              <ul className="text-muted-foreground text-sm space-y-1">
                <li>Variant A (reset near primary actions): <span className="text-primary">100% success, 14.3s average time</span></li>
                <li>Variant B (reset in top navigation): 73.3% success, 47.1s average time, high misclick rates</li>
              </ul>
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
                  src="https://www.gisellearbo.com/images/chapter3-img3.png" 
                  alt="Reset button placement variants"
                  className="w-full"
                />
              </div>
              <figcaption className="text-muted-foreground text-sm text-center mt-4">
                Reset button placement variants tested.
              </figcaption>
            </motion.figure>

            <h2 className="font-serif text-2xl md:text-3xl text-foreground mt-16 mb-6">
              Feature 2: Streaks
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Streaks are a gamified nudge for consistency. The idea is simple: show users how many days in a row they've worked out, and give them a small reward for keeping the streak alive.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              This feature is still being experimented with, but early signs are promising. Users respond to the visual feedback, and it creates a low-pressure motivation to return—not because they have to, but because they don't want to break their streak.
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
                  src="https://www.gisellearbo.com/images/chapter3-img4.png" 
                  alt="Streaks feature design"
                  className="w-full"
                />
              </div>
              <figcaption className="text-muted-foreground text-sm text-center mt-4">
                Streaks feature currently in testing.
              </figcaption>
            </motion.figure>

            <h2 className="font-serif text-2xl md:text-3xl text-foreground mt-16 mb-6">
              Key learnings
            </h2>

            <ul className="text-muted-foreground text-lg leading-relaxed mb-8 space-y-4">
              <li><strong className="text-foreground">Reduce cognitive load:</strong> Users shouldn't have to remember where they were. Show them.</li>
              <li><strong className="text-foreground">Explicit beats implicit:</strong> "Continue Where You Left Off" works better than "My Programs" because it tells users exactly what to expect.</li>
              <li><strong className="text-foreground">Context before action:</strong> Users want to see what they're about to do before they commit, even when returning to something familiar.</li>
              <li><strong className="text-foreground">Small rewards work:</strong> Streaks create motivation without pressure. It's not about punishment—it's about celebrating consistency.</li>
            </ul>
          </motion.div>

          {/* Navigation */}
          <ChapterNavigation 
            prevChapter={{ path: '/chapter2', title: 'Fixing Navigation' }}
            showHomeLink
          />
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default Chapter3;
