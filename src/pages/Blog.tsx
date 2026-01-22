import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FloatingParticles from '@/components/FloatingParticles';
import CursorGlow from '@/components/CursorGlow';
import BlogPostCard from '@/components/BlogPostCard';
const blogPosts = [{
  id: 1,
  title: "How I actually use AI as a product designer (end to end)",
  category: "AI in design",
  image: "/placeholder.svg",
  href: "/blog/ai-product-designer",
  featured: true
}, {
  id: 2,
  title: "Making Better Decisions with Data: A Designer's Guide",
  category: "Data-informed design",
  image: "/placeholder.svg",
  href: "/blog/data-informed-design-guide"
}, {
  id: 3,
  title: "The Art of Saying No: Decision Frameworks for Product Teams",
  category: "Decision-making",
  image: "/placeholder.svg",
  href: "/blog/decision-frameworks"
}, {
  id: 4,
  title: "From Features to Outcomes: Rethinking Product Strategy",
  category: "Product thinking",
  image: "/placeholder.svg",
  href: "/blog/features-to-outcomes"
}, {
  id: 5,
  title: "Prompt Engineering for Design Systems",
  category: "AI in design",
  image: "/placeholder.svg",
  href: "/blog/prompt-engineering-design"
}, {
  id: 6,
  title: "Measuring What Matters: Analytics Beyond Vanity Metrics",
  category: "Data-informed design",
  image: "/placeholder.svg",
  href: "/blog/analytics-beyond-vanity"
}, {
  id: 7,
  title: "When to Trust Your Gut vs. the Data",
  category: "Decision-making",
  image: "/placeholder.svg",
  href: "/blog/gut-vs-data"
}, {
  id: 8,
  title: "Building Products That Solve Real Problems",
  category: "Product thinking",
  image: "/placeholder.svg",
  href: "/blog/solving-real-problems"
}, {
  id: 9,
  title: "The Future of Human-AI Collaboration in Design",
  category: "AI in design",
  image: "/placeholder.svg",
  href: "/blog/human-ai-collaboration"
}];
const Blog = () => {
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
        <div className="max-w-7xl mx-auto px-6 md:px-12">
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
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-foreground mb-8">
              Blog
            </h1>
            
            <motion.p initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.4
          }} className="text-muted-foreground text-lg mb-16 max-w-2xl">
              Thoughts on design, product, data and creativity.
            </motion.p>

            {/* Blog Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {blogPosts.map((post, index) => <BlogPostCard key={post.id} title={post.title} category={post.category} image={post.image} href={post.href} delay={0.1 * index} featured={post.featured} />)}
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>;
};
export default Blog;