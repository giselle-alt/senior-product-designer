import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FloatingParticles from '@/components/FloatingParticles';
import CursorGlow from '@/components/CursorGlow';
import TableOfContents from '@/components/TableOfContents';

const BlogPost2 = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Background effects */}
      <div className="noise-overlay" />
      <div className="vignette" />
      <FloatingParticles />
      <CursorGlow />
      
      <Navigation />
      <TableOfContents />
      
      <main className="pt-32 pb-24">
        <article className="container mx-auto px-6 max-w-4xl">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <Link 
              to="/blog" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
          </motion.div>

          {/* Header */}
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-16"
          >
            <p className="text-primary text-sm uppercase tracking-wider mb-4">
              Data-informed design
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
              30 days of a design job search
            </h1>
            <p className="text-muted-foreground">
              Jan 29, 2026
            </p>
          </motion.header>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            {/* Intro */}
            <p className="text-xl text-foreground/90 leading-relaxed mb-8">
              Every time I log in to LinkedIn I read about how hard the job market is right now. I'm hearing things like "responses are inconsistent, timelines are unclear," and "people are getting ghosted."
            </p>
            
            <p className="text-foreground/80 leading-relaxed mb-6">
              It's hard to tell if all the negative outcomes are driven by fit, timing, or just pure noise. So I've been applying and tracking outcomes over the last 30 days, while looking to learn and try to understand how these systems behave in 2026.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-12">
              I'm not trying to optimize or "hack" the process, but to separate <strong className="text-foreground">"what's actually happening"</strong> vs. <strong className="text-foreground">"what it feels like is happening"</strong> and document it over time. I'm thinking if I don't get involved (emotionally) I could get to some conclusions.
            </p>

            {/* Section 1 */}
            <section className="mb-16">
              <h2 className="font-display text-2xl md:text-3xl text-foreground mb-6">
                What I'm tracking
              </h2>
              
              <p className="text-foreground/80 leading-relaxed mb-6">
                I kept the dataset simple for my peace of mind. For each application, I'm logging:
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-foreground/80">Application ID, current status</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-foreground/80">Role title, role level</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-foreground/80">Company name, size, and industry</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-foreground/80">Application source</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-foreground/80">Date applied</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-foreground/80">Date of first response (if any)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-foreground/80">Date of first interview (if any)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-foreground/80">Final outcome</span>
                </li>
              </ul>

              <p className="text-foreground/80 leading-relaxed mb-6">
                From there, I calculate:
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-foreground/80">Days to first response</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-foreground/80">Days to first interview</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-foreground/80">Days since application</span>
                </li>
              </ul>

              <p className="text-foreground/80 leading-relaxed mb-6">
                Because the dataset is still small, I'm doing the calculations with simple conditional formulas in the same sheet I have the raw data. For example, I'm calculating "days to first response" just by subtracting the application date from the first response date, and just leaving the field empty when no response exists yet:
              </p>

              <div className="bg-muted/30 border border-border/30 rounded-lg p-4 mb-6 font-mono text-sm text-foreground/80">
                =IF(FirstResponseDate = ""; ""; FirstResponseDate - ApplicationDate)
              </div>

              <p className="text-foreground/80 leading-relaxed">
                I'm also using pivot tables to look at outcomes by source, industry, and company size. Keeping it simple for now, no SQL or complex querying… just enough structure to see patterns if and when they appear.
              </p>
            </section>

            {/* Section 2 */}
            <section className="mb-16">
              <h2 className="font-display text-2xl md:text-3xl text-foreground mb-6">
                Scope and selection criteria
              </h2>
              
              <p className="text-foreground/80 leading-relaxed mb-6">
                I'm keeping this dataset constrained on purpose. The way I'm doing this is by having very strict criteria for which roles I apply to:
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-foreground/80">I meet the majority of the listed requirements (roughly 80% or more)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-foreground/80">The role is fully remote</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-foreground/80">The scope and compensation align with senior or contract-level work</span>
                </li>
              </ul>

              <p className="text-foreground/80 leading-relaxed mb-6">
                While I prioritize global remote roles, I'll <em>sooooometimes</em> apply to region-labeled positions if I think I'm a very strong fit.
              </p>

              <p className="text-foreground/80 leading-relaxed">
                This means the volume is low, but the data should be cleaner. What I'm trying to do is reflect that slice of the market, not some kind of high-volume application strategy.
              </p>
            </section>

            {/* Section 3 */}
            <section className="mb-16">
              <h2 className="font-display text-2xl md:text-3xl text-foreground mb-6">
                Current snapshot of outcomes
              </h2>
              
              <p className="text-foreground/80 leading-relaxed mb-6">
                At this point, final outcomes fall into 2 buckets:
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-foreground/80"><strong className="text-foreground">Rejections (21.31%)</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-foreground/80"><strong className="text-foreground">No response yet (78.69%)</strong></span>
                </li>
              </ul>

              <p className="text-foreground/80 leading-relaxed">
                There have been no live interviews so far at ~30 days in, but some applications advanced to asynchronous screening (written responses or video submissions). Most applications remain unresolved, so this snapshot is descriptive rather than diagnostic or final.
              </p>
            </section>

            {/* Section 4 */}
            <section className="mb-16">
              <h2 className="font-display text-2xl md:text-3xl text-foreground mb-6">
                Timing patterns so far
              </h2>
              
              <p className="text-foreground/80 leading-relaxed mb-6">
                One early pattern that I've started seeing is "response timing". When rejections happen, they seem to happen quickly, most within the first few days after applying, with a bigger cluster around day 2.
              </p>

              <img 
                src="/images/days-until-first-response-inline.png" 
                alt="Chart showing timing patterns of job application responses with most responses occurring within 2 days" 
                className="w-full rounded-lg my-8"
              />

              <p className="text-foreground/80 leading-relaxed mb-6">
                So far, there are no responses beyond five days, and to me, this silence might be a non-response rather than a delayed decision. For now, I'm treating applications with no response after 30 days as "ghosted", which will help me keep the categories consistent.
              </p>

              <p className="text-foreground/80 leading-relaxed">
                I'm watching response timing closely, but not drawing conclusions yet.
              </p>
            </section>

            {/* Section 5 */}
            <section className="mb-16">
              <h2 className="font-display text-2xl md:text-3xl text-foreground mb-6">
                Resume versions (experiment in progress)
              </h2>
              
              <p className="text-foreground/80 leading-relaxed mb-6">
                I have one controlled variable currently under test. The current test has:
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-foreground/80">The first ~40 applications used Resume A</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-foreground/80">The next ~40 applications use Resume B</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-foreground/80">The portfolio site has remained unchanged (so far)</span>
                </li>
              </ul>

              <p className="text-foreground/80 leading-relaxed mb-6">
                At this point, there's no meaningful difference in outcomes between the two. The sample size is still too small to say anything, and this comparison is ongoing.
              </p>

              <p className="text-foreground/80 leading-relaxed">
                No conclusions yet, again… just observation.
              </p>
            </section>

            {/* Section 6 */}
            <section className="mb-16">
              <h2 className="font-display text-2xl md:text-3xl text-foreground mb-6">
                What I'm not concluding yet
              </h2>
              
              <p className="text-foreground/80 leading-relaxed mb-6">
                It's very tempting to jump to conclusions early, but I'm trying to avoid that. This is a long-term thing, so right now I'm <strong className="text-foreground">NOT</strong> concluding that:
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-foreground/80">Either resume version is better or worse</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-foreground/80">The portfolio is helping or hurting</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-foreground/80">Any single source or industry is "bad at hiring… me"</span>
                </li>
              </ul>

              <p className="text-foreground/80 leading-relaxed">
                At this stage, early observations are just trends. I'm sorry if you're unhappy to see I have no results yet (come back next month maybe?).
              </p>
            </section>

            {/* Section 7 */}
            <section className="mb-16">
              <h2 className="font-display text-2xl md:text-3xl text-foreground mb-6">
                What's next?
              </h2>
              
              <p className="text-foreground/80 leading-relaxed">
                The next planned change I have is the portfolio itself. Once the dataset is larger, I plan to publish a more visual site variant with more interactions, more motion, more fun… while keeping the other variables the same. I'll do the same as with the resume test, this is about changing one thing at a time and just observing what happens.
              </p>
            </section>

            {/* Final Section */}
            <section className="mb-16">
              <h2 className="font-display text-2xl md:text-3xl text-foreground mb-6">
                Why I'm sharing this
              </h2>
              
              <p className="text-foreground/80 leading-relaxed mb-6">
                It's a fun side project. I'm just sharing this to document decisions, not outcomes (yet?!). Hiring pipelines are not easy systems to navigate, and it seems like early data is noisy. Writing this down helps me stay honest about what I know, what I don't, and what still needs time.
              </p>

              <p className="text-foreground/80 leading-relaxed">
                I'll update this once the dataset is large enough to see clearer patterns.
              </p>
            </section>
          </motion.div>

          {/* Back to blog */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 pt-8 border-t border-border/20"
          >
            <Link 
              to="/blog" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
          </motion.div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost2;
