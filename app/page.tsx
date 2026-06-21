import Link from "next/link";
import { Globe } from '@/components/ui/globe';
import {
  Palette,
  Code,
  Server,
  TrendingUp,
  PenTool,
  Clapperboard,
  Compass,
  ArrowUpRight,
  Rocket,
  Package,
  BarChart3,
} from 'lucide-react';
import TerminalBlock from './components/TerminalBlock';
import AnimatedCounter from './components/AnimatedCounter';
import ProcessSteps from './components/ProcessSteps';
import TechStack from './components/TechStack';
import Testimonials from './components/Testimonials';



const others = [
  'Hidden charges & surprise fees',
  'Low-skilled or inexperienced teams',
  'Poor communication & delayed responses',
  'Missed deadlines & late delivery',
  'Template-based generic designs',
  'No post-launch support',
  "Rigid solutions that don't scale",
  'No clear process or milestones',
  'One-size-fits-all approach',
  'No ROI tracking or analytics',
  'Slow response to changes',
];

const shapiosoPoints = [
  'Transparent pricing with no hidden costs',
  'Expert professionals, years of experience',
  'Dedicated support with regular updates',
  'On-time delivery, every single time',
  'Custom-crafted, unique solutions',
  'Ongoing maintenance & support',
  'Scalable, future-ready architecture',
  'Streamlined workflow, clear milestones',
  'Tailored solutions for your needs',
  'Data-driven ROI tracking & analytics',
  'Agile process, quick to adapt',
];

const services = [
  {
    title: 'Website Design',
    desc: 'Beautiful, responsive designs tailored to your brand identity.',
    span: 'md:col-span-2',
    icon: Palette,
  },
  {
    title: 'Web Development',
    desc: 'Robust, scalable websites built with modern technologies.',
    span: 'md:col-span-1',
    icon: Code,
  },
  {
    title: 'Domain & Hosting',
    desc: 'Reliable domain registration and hosting solutions.',
    span: 'md:col-span-1',
    icon: Server,
  },
  {
    title: 'Digital Marketing',
    desc: 'Data-driven strategies to grow your online presence.',
    span: 'md:col-span-1',
    icon: TrendingUp,
  },
  {
    title: 'Graphic Design & Animation',
    desc: 'Stunning visuals and motion graphics that captivate.',
    span: 'md:col-span-1',
    icon: PenTool,
  },
  {
    title: 'Video Editing & Creation',
    desc: 'Professional video production from concept to final cut.',
    span: 'md:col-span-3',
    icon: Clapperboard,
  },
];

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="relative overflow-hidden bg-canvas pb-6 md:pb-8">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="flex flex-col items-center text-center pt-16 md:pt-20 lg:pt-24">
            <h1 className="max-w-4xl text-3xl font-display font-medium tracking-tight text-ink md:text-5xl lg:text-6xl leading-[1.05]">
              Transforming Ideas Into Digital Reality
            </h1>
            <p className="mt-4 max-w-2xl text-sm md:text-base text-body leading-relaxed">
              Crafting unique websites, animations, and designs that captivate
              and convert.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center h-11 px-7 rounded-md bg-primary text-on-primary text-sm font-semibold tracking-[-0.3px] transition-colors hover:bg-primary-active"
              >
                Get a Quote
              </a>
              <a
                href="/our-work"
                className="inline-flex items-center justify-center h-11 px-7 rounded-md border border-hairline text-ink text-sm font-semibold tracking-[-0.3px] transition-colors hover:bg-surface-soft"
              >
                View Our Work
              </a>
            </div>
          </div>
          <div className="relative mx-auto mt-10 w-full max-w-[500px] md:max-w-[600px]">
            <Globe />
          </div>
        </div>
      </section>

      <br />
      <br />

      {/* Services */}
      <section className="bg-surface-soft py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold tracking-[1.5px] text-muted uppercase">
              What We Do
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-display font-medium tracking-tight text-ink">
              Our Services
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.title}
                  className={`${s.span} group min-h-[180px] md:min-h-[200px] rounded-xl bg-canvas border border-hairline-soft p-5 md:p-6 flex flex-col justify-between transition-all hover:border-hairline hover:shadow-sm overflow-hidden`}
                >
                  <div>
                    <div className="w-[50px] h-[50px] rounded-xl bg-surface-soft flex items-center justify-center text-muted shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-0.5">
                      <Icon className="w-[25px] h-[25px] transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <h3 className="mt-3 text-base font-semibold text-ink">
                      {s.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted leading-snug line-clamp-2">
                      {s.desc}
                    </p>
                  </div>
                  <a
                    href="/services"
                    className="text-sm font-medium text-muted-soft hover:text-ink transition-colors mt-3"
                  >
                    Learn more &rarr;
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Who Are We */}
      <section className="bg-canvas py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-1.5 rounded-full bg-surface-soft border border-hairline-soft px-4 py-1.5 text-xs font-semibold tracking-wide text-muted mb-6">
            <span className="font-mono text-muted-soft">$</span> About Shapioso
          </div>

          {/* Headline */}
          <h2 className="max-w-3xl text-3xl md:text-4xl lg:text-5xl font-display font-medium tracking-tight text-ink leading-[1.1]">
            We turn ideas into{' '}
            <span className="text-muted">digital products</span> that look
            sharp, work flawlessly, and{' '}
            <span className="text-muted">grow with you</span>.
          </h2>

          {/* Three-column grid */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {/* Left card — intro */}
            <div className="rounded-xl bg-surface-soft border border-hairline-soft p-6 md:p-8 flex flex-col">
              <div className="w-10 h-10 rounded-lg bg-canvas border border-hairline-soft flex items-center justify-center text-muted">
                <Compass className="w-5 h-5" />
              </div>
              <p className="mt-4 text-sm md:text-base text-body leading-relaxed flex-1">
                From your first sketch to final launch, we build websites, apps,
                and digital experiences that combine clean design with solid
                engineering, no templates, no shortcuts.
              </p>
              {/* Feature pills */}
              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  { label: 'Fast Delivery', icon: Rocket },
                  { label: 'Full-Stack Builds', icon: Package },
                  { label: 'Growth-Ready', icon: BarChart3 },
                ].map((pill) => {
                  const PillIcon = pill.icon;
                  return (
                    <span
                      key={pill.label}
                      className="inline-flex items-center gap-1.5 rounded-full bg-canvas border border-hairline-soft px-3 py-1.5 text-xs font-medium text-muted"
                    >
                      <PillIcon className="w-3 h-3" />
                      {pill.label}
                    </span>
                  );
                })}
              </div>
              {/* CTAs */}
              <div className="mt-6 flex items-center gap-3">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center h-10 px-5 rounded-md bg-primary text-on-primary text-sm font-semibold transition-colors hover:bg-primary-active"
                >
                  Get a Quote
                </a>
                <a
                  href="/our-work"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-md border border-hairline text-muted hover:text-ink hover:border-hairline transition-colors"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Middle card — featured project */}
            <div className="rounded-xl bg-surface-dark border border-hairline-soft overflow-hidden relative flex items-end min-h-[320px] md:min-h-[400px]">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src="/videos/Our%20Craft.mp4" type="video/mp4" />
              </video>
              <div className="relative z-10 p-6 md:p-8 w-full">
                <span className="text-xs font-mono text-white/50 tracking-wide">
                  featured — 2026
                </span>
                <h3 className="mt-1 text-lg font-semibold text-white">
                  Our Craft
                </h3>
                <div className="mt-3 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span className="text-xs text-white/60 font-mono">
                    shapioso.com/portfolio
                  </span>
                </div>
              </div>
            </div>

            {/* Right card — project collage */}
            <div className="rounded-xl bg-surface-soft border border-hairline-soft p-6 md:p-8 flex flex-col">
              <div className="grid grid-cols-2 gap-3">
                <div className="aspect-square rounded-lg overflow-hidden">
                  <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                    <source src="/videos/box-1.mp4" type="video/mp4" />
                  </video>
                </div>
                {['box-2.jpg', 'box-3.jpg', 'box-4.webp'].map((img) => (
                  <div key={img} className="aspect-square rounded-lg overflow-hidden">
                    <img src={`/images/${img}`} alt="" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm text-muted leading-relaxed">
                Real projects, real results, see how we&apos;ve helped brands
                launch and scale online.
              </p>
              <a
                href="/our-work"
                className="mt-3 text-sm font-medium text-ink hover:text-muted transition-colors"
              >
                View our work &rarr;
              </a>
            </div>
          </div>

          {/* Stats row */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: 5, suffix: '+', label: 'Years of experience' },
              { number: 50, suffix: '+', label: 'Projects delivered' },
              { number: 6, suffix: '', label: 'Core services offered' },
              { number: 100, suffix: '%', label: 'On-time delivery' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-display font-medium tracking-tight text-ink">
                  <AnimatedCounter value={stat.number} suffix={stat.suffix} />
                </div>
                <div className="mt-1 text-xs md:text-sm text-muted">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TechStack />

      {/* Featured Projects */}
      <section className="bg-canvas py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold tracking-[1.5px] text-muted uppercase">
              Our Work
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-display font-medium tracking-tight text-ink">
              Featured Projects
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { gradient: 'from-brand-lavender/30 to-brand-mint/30', dot: 'bg-brand-lavender', cat: 'Web Development', name: 'Zknit', desc: 'AI-powered knitting design platform with custom pattern generation and e-commerce integration.', tags: ['jQuery', 'WordPress', 'WooCommerce', 'Elementor'], image: '/images/Zknit.png', link: 'https://zknit.ai/' },
              { gradient: 'from-brand-teal/20 to-brand-mint/30', dot: 'bg-brand-teal', cat: 'Web Development', name: 'Jala Restaurant', desc: 'Modern restaurant website with online menu, reservation system, and location services.', tags: ['Laravel', 'MySQL', 'Tailwind'], image: '/images/jalarestaurant.png', link: 'https://jalarestaurant.com/' },
              { gradient: 'from-brand-pink/20 to-brand-ochre/20', dot: 'bg-brand-pink', cat: 'Web Development', name: 'JRE Home Decor', desc: 'E-commerce home decor store with product catalog, cart, and checkout system.', tags: ['Laravel', 'MySQL', 'Tailwind'], image: '/images/jrehomedecor..png', link: 'https://www.jrehomedecor.com/' },
            ].map((p) => (
              <div key={p.name} className="rounded-xl bg-white border border-hairline-soft group transition-all duration-300 hover:shadow-sm hover:border-hairline flex flex-col p-3">
                {/* Mockup area */}
                <div className={`relative aspect-[16/11] rounded-2xl overflow-hidden ${p.image ? '' : `bg-gradient-to-br ${p.gradient}`}`}>
                  {p.image ? (
                    <img src={p.image} alt={p.name} className="absolute inset-0 w-full h-full object-cover" />
                  ) : (
                    <>
                      <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-white/10" />
                      <div className="absolute -bottom-4 -left-4 w-20 h-20 rounded-full bg-white/10" />
                      <div className="absolute inset-0 p-5 space-y-2.5">
                        {[3, 2, 4, 1, 3, 2].map((w, i) => (
                          <div key={i} className="h-2 rounded-full bg-white/15" style={{ width: `${w * 18 + 20}%` }} />
                        ))}
                      </div>
                    </>
                  )}
                  <a href={p.link || '#'} className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/5">
                    <span className="text-xs font-medium text-ink/60 bg-canvas/80 px-3 py-1.5 rounded-full backdrop-blur-sm">
                      View project &rarr;
                    </span>
                  </a>
                </div>
                {/* Info */}
                <div className="p-3 md:p-4 flex flex-col flex-1">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-muted-soft mb-1.5">
                    <span className={`w-1.5 h-1.5 rounded-full ${p.dot}`} />
                    {p.cat}
                  </div>
                  <h3 className="text-lg font-semibold text-ink">{p.name}</h3>
                  <p className="text-sm text-muted mt-1 leading-relaxed flex-1">{p.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-surface-soft text-muted font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-hairline-soft flex items-center gap-4">
                    <a href="#" className="text-sm font-medium text-ink hover:text-muted transition-colors">Case Study &rarr;</a>
                    <a href={p.link || '#'} className="text-sm font-medium text-muted-soft hover:text-ink transition-colors">Live Demo &rarr;</a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href="/our-work"
              className="inline-flex items-center justify-center h-11 px-7 rounded-md border border-hairline text-ink text-sm font-semibold tracking-[-0.3px] transition-colors hover:bg-surface-soft"
            >
              View All Projects
            </a>
          </div>
        </div>
      </section>

      <ProcessSteps />

      {/* Why Choose Us */}
      <section className="bg-surface-soft py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold tracking-[1.5px] text-muted uppercase">
              Why Choose Us
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-display font-medium tracking-tight text-ink">
              Others vs. Shapioso
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <TerminalBlock label="OTHERS" points={others} type="error" />
            <TerminalBlock
              label="SHAPIOSO"
              points={shapiosoPoints}
              type="success"
            />
          </div>
        </div>
      </section>

      <Testimonials />

      {/* Featured Blogs */}
      <section className="bg-canvas py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold tracking-[1.5px] text-muted uppercase">
              Insights
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-display font-medium tracking-tight text-ink">
              Featured Blogs
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                slug: 'why-your-business-needs-a-professional-website-in-2026',
                gradient: 'from-brand-lavender/25 to-brand-peach/25',
                dot: 'bg-brand-lavender',
                tag: 'Web Design',
                title: 'Why Your Business Needs a Professional Website in 2026',
                desc: 'In today\'s digital-first world, a business without a professional website is like a shop without a signboard. Your website is',
                date: 'November 22, 2025',
                image: '/images/blog-1.png',
              },
              {
                slug: 'how-digital-marketing-helps-your-business-grow-faster',
                gradient: 'from-brand-teal/20 to-brand-mint/25',
                dot: 'bg-brand-teal',
                tag: 'Digital Marketing',
                title: 'How Digital Marketing Helps Your Business Grow Faster',
                desc: 'Digital marketing has transformed the way businesses communicate with their audience. Whether you run a startup, local shop, or enterprise-level',
                date: 'November 22, 2025',
                image: '/images/blog-2.png',
              },
              {
                slug: 'the-power-of-creative-design-why-good-branding-matters',
                gradient: 'from-brand-pink/20 to-brand-ochre/20',
                dot: 'bg-brand-pink',
                tag: 'Branding',
                title: 'The Power of Creative Design: Why Good Branding Matters',
                desc: 'Branding is more than just a logo—it\'s the emotional connection your audience builds with your company. Great design tells your',
                date: 'November 22, 2025',
                image: '/images/blog-3.png',
              },
            ].map((post) => (
              <Link key={post.title} href={`/blog/${post.slug}`} className="rounded-xl bg-canvas border border-hairline-soft transition-all hover:shadow-sm hover:border-hairline group flex flex-col p-3">
                <div className={`relative aspect-[16/11] rounded-2xl overflow-hidden ${post.image ? '' : `bg-gradient-to-br ${post.gradient}`}`}>
                  {post.image ? (
                    <img src={post.image} alt={post.title} className="absolute inset-0 w-full h-full object-cover" />
                  ) : (
                    <div className={`absolute inset-0 bg-gradient-to-br ${post.gradient}`}>
                      <div className="absolute inset-0 p-5 space-y-2">
                        {[4, 3, 5, 2].map((w, i) => (
                          <div key={i} className="h-1.5 rounded-full bg-white/15" style={{ width: `${w * 15 + 30}%` }} />
                        ))}
                        <div className="pt-2 space-y-2">
                          <div className="h-2 rounded-full bg-white/10 w-3/4" />
                          <div className="h-2 rounded-full bg-white/10 w-1/2" />
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="absolute top-3 left-3">
                    <span className="text-[11px] font-medium text-white/80 bg-white/15 px-2.5 py-1 rounded-full backdrop-blur-sm">
                      {post.tag}
                    </span>
                  </div>
                </div>
                <div className="p-3 md:p-4 flex flex-col flex-1">
                  <h3 className="text-base font-semibold text-ink leading-snug">{post.title}</h3>
                  <p className="text-sm text-muted mt-1.5 leading-relaxed flex-1">{post.desc}</p>
                  <div className="mt-4 pt-4 border-t border-hairline-soft flex items-center justify-between">
                    <span className="text-xs text-muted-soft">{post.date}</span>
                    <span className="text-sm font-medium text-ink hover:text-muted transition-colors">
                      Read &rarr;
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href="/blog"
              className="inline-flex items-center justify-center h-11 px-7 rounded-md border border-hairline text-ink text-sm font-semibold tracking-[-0.3px] transition-colors hover:bg-surface-soft"
            >
              View All Posts
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
