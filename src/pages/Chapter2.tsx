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
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Chapter2 = () => {
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

      {/* Table of Contents */}
      <TableOfContents />

      {/* Main content */}
      <main className="relative z-20 pt-32 pb-24">
        <article className="max-w-3xl mx-auto px-6 md:px-12">
          {/* Back link */}
          <motion.div initial={{
          opacity: 0,
          x: -20
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.6
        }}>
            <Link to="/#work" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-12 group">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm">Back to Home</span>
            </Link>
          </motion.div>

          {/* Two-column header layout */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mb-12">
            {/* Left: Project metadata */}
            <aside className="lg:w-64 flex-shrink-0">
              <ChapterHeader
                client="TRX App"
                role="Senior Product Designer"
                date="Apr 2025 – May 2025"
                tools={[
                  { name: 'Figma', description: 'high-fi prototypes and final designs' },
                  { name: 'Maze', description: 'task-based usability testing' },
                  { name: 'Claude AI', description: 'copy/UX microcopy' }
                ]}
              />
            </aside>

            {/* Right: Chapter title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="flex-1"
            >
              <span className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4 block">
                Chapter 2
              </span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
                Fixing navigation
              </h1>
            </motion.div>
          </div>

          {/* Content */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} className="prose prose-lg prose-invert max-w-none">
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              After understanding why people were leaving in Chapter 1, one pattern kept surfacing: people couldn't find what they were looking for. Before designing anything new, I stepped back to examine how content was organized and labeled.
            </p>

            <div className="cinematic-card p-6 mb-12">
              <p className="text-foreground/80 text-sm">
                <strong className="text-primary">My role:</strong> I led the information architecture audit, defined the navigation hypotheses, designed the tab bar variants, and ran usability testing. I partnered with product and engineering to ship the final navigation and validate it through an iOS A/B test.
              </p>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              I conducted a lightweight audit of the app's information architecture (IA) to understand how content was grouped and how users were expected to navigate.
            </p>

            <motion.figure initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="my-12">
              <div className="rounded-xl overflow-hidden border border-border/30">
                <img src="https://www.gisellearbo.com/images/chapter2-img1.png" alt="Current Information Architecture" className="w-full" />
              </div>
              <figcaption className="text-muted-foreground text-sm text-center mt-4">
                Current information architecture
              </figcaption>
            </motion.figure>

            <h2 className="font-serif text-2xl md:text-3xl text-foreground mt-16 mb-6">
              What I noticed
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Most of the app's content lived behind a few very broad entry points. The largest of these was On Demand. From a system perspective, this made content easier to manage. From a user's perspective, it meant guessing. Users had to tap into sections, scan the screen, and then decide whether they were in the right place; or back out and try again. I then looked at the tab bar itself and the labels we were using.
            </p>

            <motion.figure initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="my-12">
              <div className="rounded-xl overflow-hidden border border-border/30">
                <img src="https://www.gisellearbo.com/images/chapter2-img2.png" alt="Annotated tap bar" className="w-full" />
              </div>
              <figcaption className="text-muted-foreground text-sm text-center mt-4">
                Current tap bar and labels.
              </figcaption>
            </motion.figure>

            <h2 className="font-serif text-2xl md:text-3xl text-foreground mt-16 mb-6">
              My initial hypotheses
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Based on this audit, I formed a few hypotheses to test. I believed "On Demand" was too vague and forced people to explore instead of decide. I also thought that live content needed to be clearly labeled as "Live", not hidden behind a generic term like "Classes". And finally, I suspected that help and support didn't need to live at the top level of the app to still be easy to find.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Rather than debating these ideas internally, I decided to test them with non-users.
            </p>

            <h2 className="font-serif text-2xl md:text-3xl text-foreground mt-16 mb-6">
              Usability testing with Maze
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              I ran a comparative usability test using Maze with 93 participants, testing three navigation variants head-to-head:
            </p>

            <motion.figure initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="my-12">
              <div className="rounded-xl overflow-hidden border border-border/30">
                <img src="https://www.gisellearbo.com/images/chapter2-img3.png" alt="Three tab bar variants tested" className="w-full" />
              </div>
              <figcaption className="text-muted-foreground text-sm text-center mt-4">
                Three tab bar variants tested
              </figcaption>
            </motion.figure>

            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Participants were given a prototype and asked to complete four tasks:
            </p>

            <ul className="space-y-4 text-muted-foreground text-lg leading-relaxed mb-8">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1.5">•</span>
                <span>Start a HIIT workout</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1.5">•</span>
                <span>Begin a 2-week beginner program</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1.5">•</span>
                <span>Update their profile photo</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1.5">•</span>
                <span>Contact support</span>
              </li>
            </ul>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              The goal was to measure not only task success, but also confidence in navigation paths, misclicks, and hesitation.
            </p>

            <h2 className="font-serif text-2xl md:text-3xl text-foreground mt-16 mb-6">
              High-level findings
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              <strong className="text-foreground">Clear, specific labels consistently outperformed broad or ambiguous ones.</strong>
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Across all tasks, variants using explicit content-based labels (Live, Workouts, Programs) reduced hesitation and improved first-choice accuracy compared to abstract or overloaded labels (On Demand, Explore, For You).
            </p>

            <h2 className="font-serif text-2xl md:text-3xl text-foreground mt-16 mb-6">
              Navigation variants
            </h2>

            <Tabs defaultValue="v1" className="w-full">
              <TabsList className="w-full grid grid-cols-3 mb-8">
                <TabsTrigger value="v1">V1: Current</TabsTrigger>
                <TabsTrigger value="v2">V2: Explicit</TabsTrigger>
                <TabsTrigger value="v3">V3: Conceptual</TabsTrigger>
              </TabsList>

              {/* V1 - Current */}
              <TabsContent value="v1">
                <motion.figure
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="my-8"
                >
                  <div className="rounded-xl overflow-hidden border border-border/30">
                    <img src="https://www.gisellearbo.com/images/chapter2-img4.png" alt="V1: Current navigation" className="w-full" />
                  </div>
                  <figcaption className="text-muted-foreground text-sm text-center mt-4">
                    V1: Current navigation (the baseline)
                  </figcaption>
                </motion.figure>

                <h3 className="font-serif text-xl md:text-2xl text-foreground mt-8 mb-4">
                  What worked
                </h3>

                <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                  Users correctly associated:
                </p>

                <ul className="space-y-4 text-muted-foreground text-lg leading-relaxed mb-8">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1.5">•</span>
                    <span>Classes with workouts (89%).</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1.5">•</span>
                    <span>Help with billing support (85%).</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1.5">•</span>
                    <span>Profile with account settings (86%).</span>
                  </li>
                </ul>

                <h3 className="font-serif text-xl md:text-2xl text-foreground mt-8 mb-4">
                  What didn't work
                </h3>

                <ul className="space-y-4 text-muted-foreground text-lg leading-relaxed mb-8">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1.5">•</span>
                    <span><strong className="text-foreground">Live vs on-demand confusion:</strong> Only 56% tapped Classes to join a live class; 29% went to On Demand, indicating unclear boundaries between live and recorded content.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1.5">•</span>
                    <span><strong className="text-foreground">Programs were not discoverable:</strong> Users split almost evenly between Classes (46%) and On Demand (40%) when looking for a multi-day program. Clear evidence of label overload.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1.5">•</span>
                    <span><strong className="text-foreground">Inefficient task completion:</strong> The HIIT task had the longest average completion time (173.6s) and the lowest in-flow success (31%), with very high misclick rates.</span>
                  </li>
                </ul>

                <h3 className="font-serif text-xl md:text-2xl text-foreground mt-8 mb-4">
                  Conclusion
                </h3>

                <p className="text-muted-foreground text-lg leading-relaxed">
                  The current structure technically works, but relies heavily on user guessing rather than clear decision-making.
                </p>
              </TabsContent>

              {/* V2 - Explicit */}
              <TabsContent value="v2">
                <motion.figure
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="my-8"
                >
                  <div className="rounded-xl overflow-hidden border border-border/30">
                    <img src="https://www.gisellearbo.com/images/chapter2-img5.png" alt="V2: Explicit content buckets" className="w-full" />
                  </div>
                  <figcaption className="text-muted-foreground text-sm text-center mt-4">
                    V2: Explicit content buckets
                  </figcaption>
                </motion.figure>

                <h3 className="font-serif text-xl md:text-2xl text-foreground mt-8 mb-4">
                  What worked
                </h3>

                <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                  Strong label-to-task alignment across the board:
                </p>

                <ul className="space-y-4 text-muted-foreground text-lg leading-relaxed mb-8">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1.5">•</span>
                    <span>Find a Yoga workout → Workouts (94%).</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1.5">•</span>
                    <span>Find a Program → Programs (81%).</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1.5">•</span>
                    <span>Live class → Live (94%).</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1.5">•</span>
                    <span>Account changes → Account (97%).</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1.5">•</span>
                    <span>Billing help → Support (90%)</span>
                  </li>
                </ul>

                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  Faster and more confident decisions than the current navigation in most tasks.
                </p>

                <h3 className="font-serif text-xl md:text-2xl text-foreground mt-8 mb-4">
                  What didn't work
                </h3>

                <ul className="space-y-4 text-muted-foreground text-lg leading-relaxed mb-8">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1.5">•</span>
                    <span>Despite clear labels, the HIIT task still showed a lower success rate (65.5%) and high misclicks, suggesting issues beyond top-level navigation (likely content layout or filtering) rather than label meaning</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1.5">•</span>
                    <span>Some users noted overlap between Live and Workouts, indicating a mild mental-model conflict ("Live workouts are also workouts").</span>
                  </li>
                </ul>

                <h3 className="font-serif text-xl md:text-2xl text-foreground mt-8 mb-4">
                  Conclusion
                </h3>

                <p className="text-muted-foreground text-lg leading-relaxed">
                  Provided the clearest mental model overall. Explicit labels significantly reduced ambiguity, even if deeper IA still needs refinement.
                </p>
              </TabsContent>

              {/* V3 - Conceptual */}
              <TabsContent value="v3">
                <motion.figure
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="my-8"
                >
                  <div className="rounded-xl overflow-hidden border border-border/30">
                    <img src="https://www.gisellearbo.com/images/chapter2-img6.png" alt="V3: Reduced tabs and conceptual labels" className="w-full" />
                  </div>
                  <figcaption className="text-muted-foreground text-sm text-center mt-4">
                    V3: Reduced tabs and conceptual labels
                  </figcaption>
                </motion.figure>

                <h3 className="font-serif text-xl md:text-2xl text-foreground mt-8 mb-4">
                  What worked
                </h3>

                <ul className="space-y-4 text-muted-foreground text-lg leading-relaxed mb-8">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1.5">•</span>
                    <span>Live content clarity was excellent: 96% correctly chose Live Classes for real-time sessions.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1.5">•</span>
                    <span>Profile tasks were unambiguous: 93% correctly selected Profile for account changes.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1.5">•</span>
                    <span>Overall success rates were high for most tasks.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1.5">•</span>
                    <span>Account changes → Account (97%).</span>
                  </li>
                </ul>

                <h3 className="font-serif text-xl md:text-2xl text-foreground mt-8 mb-4">
                  What didn't work
                </h3>

                <ul className="space-y-4 text-muted-foreground text-lg leading-relaxed mb-8">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1.5">•</span>
                    <span><strong className="text-foreground">"Explore" was consistently ambiguous:</strong> Used correctly for programs (81%), but split heavily for workouts (44% Explore vs 52% Live Classes)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1.5">•</span>
                    <span>Qualitative feedback repeatedly flagged uncertainty around what Explore and For You contained.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1.5">•</span>
                    <span>HIIT and program tasks still showed very high misclick rates (≈75–79%), despite acceptable success rates, users eventually succeeded, but not confidently.</span>
                  </li>
                </ul>

                <h3 className="font-serif text-xl md:text-2xl text-foreground mt-8 mb-4">
                  Conclusion
                </h3>

                <p className="text-muted-foreground text-lg leading-relaxed">
                  Reducing tabs improved simplicity, but abstract labels shifted the burden onto user interpretation, especially for first-time discovery.
                </p>
              </TabsContent>
            </Tabs>

            <h2 className="font-serif text-2xl md:text-3xl text-foreground mt-16 mb-6">
              Hypotheses validation
            </h2>

            <div className="cinematic-card p-6 mb-12 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border/30">
                    <th className="text-left py-3 text-primary font-medium">Hypothesis</th>
                    <th className="text-left py-3 text-primary font-medium">Outcome</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border/20">
                    <td className="py-3">"On Demand" is too vague / overloaded</td>
                    <td className="py-3">Confirmed. Caused split decisions, long task times, and misclicks</td>
                  </tr>
                  <tr className="border-b border-border/20">
                    <td className="py-3">"Classes" needs clarification as live</td>
                    <td className="py-3">Confirmed. "Live" or "Live Classes" dramatically improved accuracy</td>
                  </tr>
                  <tr>
                    <td className="py-3">Help may not belong in main navigation</td>
                    <td className="py-3">Partially confirmed. When labeled clearly (Support), users found it instantly; when hidden (V3), they defaulted to Profile</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="font-serif text-2xl md:text-3xl text-foreground mt-16 mb-6">
              The decision
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Based on both testing and real user behavior, I chose the navigation that used clear, content-based labels as the foundation going forward.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              We kept the structure familiar, moved Programs to its own page, moved Help inside account, and changed labels to make the meaning of each tab obvious:
            </p>

            <motion.figure initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="my-12">
              <div className="rounded-xl overflow-hidden border border-border/30">
                <img src="https://www.gisellearbo.com/images/chapter2-img7.png" alt="Final navigation implementation" className="w-full" />
              </div>
            </motion.figure>

            <h2 className="font-serif text-2xl md:text-3xl text-foreground mt-16 mb-6">
              Validating the changes in the real app
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              To make sure this wasn't just a usability test result, we shipped the new navigation as an A/B test on iOS.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              With real users, the new navigation helped people start faster, make fewer wrong taps, and begin more workouts and programs.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              This confirmed that clearer navigation wasn't just easier to understand—it directly helped people start working out.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Even after shipping this change, there is still room to improve. I think there are smaller opportunities within the same tab navigator; like testing icon choices, label text size, and visual emphasis.
            </p>

            <h2 className="font-serif text-2xl md:text-3xl text-foreground mt-16 mb-6">
              Why this mattered
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              This wasn't about making the app "look better". It was about removing small points of friction that stopped people before they ever began. By making navigation clearer, we reduced the mental effort required to start a workout, which was exactly the problem I described in Chapter 1.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Once starting felt easier, the next problem became obvious: helping people come back again. That's what the next chapter focuses on.
            </p>
          </motion.div>

          {/* Navigation */}
          <ChapterNavigation prevChapter={{
          path: '/chapter1',
          title: 'Finding the real problem'
        }} nextChapter={{
          path: '/chapter3',
          title: 'Personalization & habits'
        }} />
        </article>
      </main>

      <Footer />
    </div>;
};
export default Chapter2;