import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FloatingParticles from '@/components/FloatingParticles';
import CursorGlow from '@/components/CursorGlow';
import TableOfContents from '@/components/TableOfContents';
import aiChallengingAssumptions from '@/assets/ai-challenging-assumptions.png';

const BlogPost1 = () => {
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
              AI in design
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
              How I actually use AI as a product designer (end to end)
            </h1>
            <p className="text-muted-foreground">
              Dec 30, 2025
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
              Before getting into specifics, my opinion on AI and design is:
            </p>
            
            <blockquote className="border-l-2 border-primary pl-6 my-8 text-foreground/80 italic">
              AI doesn't replace design judgment, but it amplifies whatever judgment you already have. If the problem is poorly framed, AI will generate (very polished) nonsense. If the constraints aren't clear, it will optimize for the wrong thing.
            </blockquote>

            <p className="text-foreground/80 leading-relaxed mb-12">
              With that in mind, read on to learn how AI fits into my workflow.
            </p>

            {/* Section 1 */}
            <section className="mb-16">
              <h2 className="font-display text-2xl md:text-3xl text-foreground mb-6">
                1. Discovery
              </h2>
              
              <p className="text-foreground/80 leading-relaxed mb-6">
                Discovery is usually fun but chaotic. If you've ever been part of a product discovery phase, you know the feedback you have is probably fragmented, stakeholders can have strong (and conflicting) opinions, and the data? Oh it's most likely incomplete or non-existent.
              </p>

              <p className="text-foreground/80 leading-relaxed mb-6">
                This is where AI has been helping me a ton… not by giving final solutions, but by helping me see patterns faster. For example, when I'm looking at qualitative inputs (like reviews, survey answers, or other feedback), I'll use AI and ask it to:
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-foreground/80">Group feedback by user intent, not sentiment</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-foreground/80">Show me repeated frustrations that were phrased in different ways (in different sources)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-foreground/80">Separate symptoms ("too many options") from needs ("I want to find ___ quickly")</span>
                </li>
              </ul>

              <p className="text-foreground/80 leading-relaxed">
                I know I can't treat the output as truth, I need to manually scan the groupings and cross-check against the original data (because AI can hallucinate and make stuff up!). The value here is not accuracy, it's <strong className="text-foreground">speed</strong>. It helps me move from hundreds or thousands of disconnected comments to a few probable problem areas I can later validate properly.
              </p>
            </section>

            {/* Section 2 */}
            <section className="mb-16">
              <h2 className="font-display text-2xl md:text-3xl text-foreground mb-6">
                2. Constructive "opposition"
              </h2>
              
              <p className="text-foreground/80 leading-relaxed mb-6">
                Once I've framed a problem, I often use AI as <em>MY WORST ENEMY</em> (kidding… more like a counterpart, or I'll ask it to pretend to be "that stakeholder who always contradicts my ideas").
              </p>

              <motion.figure
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="my-8"
              >
                <img 
                  src={aiChallengingAssumptions} 
                  alt="AI helping challenge design assumptions" 
                  className="w-full rounded-lg"
                />
              </motion.figure>

              <p className="text-foreground/80 leading-relaxed mb-6">
                For example I'll ask it to:
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-foreground/80">Challenge my assumptions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-foreground/80">Give alternative explanations for user behavior</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-foreground/80">Argue for a different prioritization</span>
                </li>
              </ul>

              <p className="text-foreground/80 leading-relaxed">
                This is less about getting the "right" answer and more about avoiding blind spots in the future. When you've been working on a product for a long time, it's easy to normalize problems or make up reasons why past decisions were fine, even if they weren't. And I think AI is very useful here because, unlike us humans, it has no emotional attachment to the product or to the brand.
              </p>
            </section>

            {/* Section 3 */}
            <section className="mb-16">
              <h2 className="font-display text-2xl md:text-3xl text-foreground mb-6">
                3. Ideation
              </h2>
              
              <p className="text-foreground/80 leading-relaxed mb-6">
                Ideation is where context matters most. I use AI in 2 different ways here, depending on how defined the problem already is. When I'm still exploring, I use AI to expand the solution space, and I ask questions just to think wider, for example:
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-foreground/80">How can we reduce "decision fatigue" without adding new features?</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-foreground/80">How might this break for a beginner user?</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-foreground/80">What's the simplest version that could work with existing screens?</span>
                </li>
              </ul>

              <p className="text-foreground/80 leading-relaxed mb-6">
                In this phase, AI helps me challenge my default thinking. Most ideas it gives me are usually rough, and many are discarded, but I think that's totally normal and expected. It's like my own little brainstorming sessions with… me, myself and AI?
              </p>

              <p className="text-foreground/80 leading-relaxed mb-6">
                When a direction has already been validated (for example, after research, testing, or stakeholder alignment), I sometimes use AI-driven UI generation to move faster. I'm only using vibe coding and Figma-based AI tools if I have:
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-foreground/80">A clear problem statement</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-foreground/80">A wireframe or layout defined</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-foreground/80">Or an existing UI library or design system</span>
                </li>
              </ul>

              <p className="text-foreground/80 leading-relaxed">
                In those cases, AI helps generate a draft screen that respects structure and components. Usually it's not a final design. I almost always need to manually tweak spacing, hierarchy, edge cases, and interaction details. AI gets me to something concrete way faster, but it doesn't resolve <em>aaaall</em> of it.
              </p>
            </section>

            {/* Section 4 */}
            <section className="mb-16">
              <h2 className="font-display text-2xl md:text-3xl text-foreground mb-6">
                4. Validation
              </h2>
              
              <p className="text-foreground/80 leading-relaxed mb-6">
                I haven't used AI to validate results directly, but I do use it to plan, organize, and write during the validation phase. When preparing usability tests or experiments, AI helps me focus and reduce noise. For example, I've used it to:
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-foreground/80">Rewrite test questions to remove bias (cause I have it, I'm human)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-foreground/80">Identify what I need to observe or measure to know if an idea is working</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-foreground/80">Test for edge cases before putting something in front of users</span>
                </li>
              </ul>

              <p className="text-foreground/80 leading-relaxed">
                This helps reduce noise in testing, keep sessions focused on learning, and… oh yes, speed! So. Much. Faster.
              </p>
            </section>

            {/* Section 5 */}
            <section className="mb-16">
              <h2 className="font-display text-2xl md:text-3xl text-foreground mb-6">
                5. Communication
              </h2>
              
              <p className="text-foreground/80 leading-relaxed mb-6">
                Everyone seems to use AI for communication these days, and in product design, there's a lot of writing: problem statements, rationales, tradeoff explanations, and docs for teams who weren't part of the process. (Maybe even a blog post for my portfolio site… who knows?)
              </p>

              <p className="text-foreground/80 leading-relaxed">
                I've used AI to help me simplify explanations, adapting a decision narrative for different teams (non-tech team members, for example) and removing ambiguity when I'm presenting options. This has been useful when working with people who need clarity, not inspiration or creativity.
              </p>
            </section>

            {/* Section 6 */}
            <section className="mb-16">
              <h2 className="font-display text-2xl md:text-3xl text-foreground mb-6">
                Where I don't use AI
              </h2>
              
              <p className="text-foreground/80 leading-relaxed mb-6">
                I've found some areas where AI can get in the way, for me it was in:
              </p>

              <ul className="space-y-4 mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-foreground/80">
                    <strong className="text-foreground">Final interaction design decisions.</strong> AI can provide interaction patterns and options, but deciding how something should behave needs human judgment. The decision depends on things like intent and responsibility for how users experience a product… which are all very human-ish.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-foreground/80">
                    <strong className="text-foreground">Visual hierarchy and details.</strong> AI can generate layouts, but refining hierarchy and details requires sensitivity to context, brand, and how people visually and interpret interfaces.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-foreground/80">
                    <strong className="text-foreground">Designing for edge cases, error states, and misuse.</strong> AI is good at designing the "happy path," but when people behave unpredictably or don't understand the system, those cases aren't captured in existing data. They usually only become clear after real users interact with a product.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-foreground/80">
                    <strong className="text-foreground">Tradeoffs under real constraints</strong> (scope, accessibility, or business goals). When goals conflict, someone has to choose what to prioritize and be responsible for the consequences of choosing one priority over the other. That responsibility shouldn't be delegated to AI.
                  </span>
                </li>
              </ul>
            </section>

            {/* Final Section */}
            <section className="mb-16">
              <h2 className="font-display text-2xl md:text-3xl text-foreground mb-6">
                Final Score
              </h2>
              
              <p className="text-foreground/80 leading-relaxed">
                This is just my opinion, but I feel like using AI hasn't made my work less thoughtful, if anything, it clears the path for smarter choices… and I can do a lot more things faster! I spend less time stuck in early unknowns and more time doing things like framing the right problems, testing ideas, or balancing users' needs with business constraints. AI is just another tool, but if used well, I can create space for better thinking instead of replacing it.
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

export default BlogPost1;
