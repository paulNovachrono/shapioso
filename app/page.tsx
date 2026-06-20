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
  Image,
  Rocket,
  Package,
  BarChart3,
} from 'lucide-react';
import TerminalBlock from './components/TerminalBlock';
import AnimatedCounter from './components/AnimatedCounter';
import {
  SiHtml5, SiCss, SiSass, SiJavascript, SiTypescript, SiReact,
  SiNextdotjs, SiAstro, SiTailwindcss, SiFramer, SiNodedotjs,
  SiLaravel, SiMongodb, SiMysql, SiPostgresql, SiGraphql, SiWordpress,
  SiWebflow, SiSanity, SiStrapi, SiFigma,
} from 'react-icons/si';


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
                    <div className="w-9 h-9 rounded-lg bg-surface-soft flex items-center justify-center text-muted shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-0.5">
                      <Icon className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
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
              <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/80 to-surface-dark" />
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
                {[
                  'from-brand-pink/40 to-rose-300/40',
                  'from-brand-lavender/40 to-purple-300/40',
                  'from-brand-peach/40 to-orange-300/40',
                  'from-brand-mint/40 to-teal-300/40',
                ].map((gradient, i) => (
                  <div
                    key={i}
                    className={`aspect-square rounded-lg bg-gradient-to-br ${gradient} border border-white/50`}
                  />
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

      {/* Technologies & Expertise */}
      <section className="bg-surface-soft py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold tracking-[1.5px] text-muted uppercase">
              Tech Stack
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-display font-medium tracking-tight text-ink">
              Technologies &amp; Expertise
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Frontend */}
            <div className="rounded-xl bg-canvas border border-hairline-soft p-6 md:p-7">
              <div className="inline-flex items-center gap-2 rounded-full bg-surface-soft px-3 py-1 text-xs font-semibold text-muted mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-lavender" />
                Frontend
              </div>
              <div className="space-y-4">
                {[
                  { name: 'HTML / CSS / SCSS', use: 'Semantic structure & responsive styling for every project.', icon: SiHtml5 },
                  { name: 'JavaScript / TypeScript', use: 'Dynamic interactions and type-safe code at scale.', icon: SiJavascript },
                  { name: 'React', use: 'Complex SPAs, dashboards, and interactive UIs.', icon: SiReact },
                  { name: 'Next.js', use: 'SEO-driven marketing sites and full-stack apps.', icon: SiNextdotjs },
                  { name: 'Astro', use: 'Lightning-fast content sites with minimal JS.', icon: SiAstro },
                  { name: 'Tailwind CSS', use: 'Rapid, utility-first styling with design-system consistency.', icon: SiTailwindcss },
                  { name: 'Framer', use: 'High-fidelity interactive prototypes and animations.', icon: SiFramer },
                ].map((tech) => {
                  const Icon = tech.icon;
                  return (
                    <div key={tech.name} className="flex items-start gap-3">
                      <Icon className="w-4 h-4 mt-0.5 shrink-0 text-muted" />
                      <div>
                        <div className="text-sm font-semibold text-ink">{tech.name}</div>
                        <div className="text-xs text-muted mt-0.5 leading-snug">{tech.use}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Backend */}
            <div className="rounded-xl bg-canvas border border-hairline-soft p-6 md:p-7">
              <div className="inline-flex items-center gap-2 rounded-full bg-surface-soft px-3 py-1 text-xs font-semibold text-muted mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-teal" />
                Backend &amp; APIs
              </div>
              <div className="space-y-4">
                {[
                  { name: 'Node.js', use: 'Scalable server-side apps and REST/GraphQL APIs.', icon: SiNodedotjs },
                  { name: 'Laravel', use: 'Robust PHP backends with rich admin panels.', icon: SiLaravel },
                  { name: 'MongoDB', use: 'Flexible NoSQL storage for rapid iteration and scaling.', icon: SiMongodb },
                  { name: 'MySQL / PostgreSQL', use: 'Relational data modeling for structured applications.', icon: SiMysql },
                  { name: 'REST / GraphQL', use: 'Flexible API design for client-server communication.', icon: SiGraphql },
                ].map((tech) => {
                  const Icon = tech.icon;
                  return (
                    <div key={tech.name} className="flex items-start gap-3">
                      <Icon className="w-4 h-4 mt-0.5 shrink-0 text-muted" />
                      <div>
                        <div className="text-sm font-semibold text-ink">{tech.name}</div>
                        <div className="text-xs text-muted mt-0.5 leading-snug">{tech.use}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* CMS & Platforms */}
            <div className="rounded-xl bg-canvas border border-hairline-soft p-6 md:p-7">
              <div className="inline-flex items-center gap-2 rounded-full bg-surface-soft px-3 py-1 text-xs font-semibold text-muted mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-peach" />
                CMS &amp; Platforms
              </div>
              <div className="space-y-4">
                {[
                  { name: 'WordPress', use: 'Client-managed blogs, brochure sites, and e-commerce stores.', icon: SiWordpress },
                  { name: 'Webflow', use: 'Visually rich marketing sites with designer-friendly workflows.', icon: SiWebflow },
                  { name: 'Sanity / Strapi', use: 'Headless CMS for custom editorial experiences.', icon: SiSanity },
                ].map((tech) => {
                  const Icon = tech.icon;
                  return (
                    <div key={tech.name} className="flex items-start gap-3">
                      <Icon className="w-4 h-4 mt-0.5 shrink-0 text-muted" />
                      <div>
                        <div className="text-sm font-semibold text-ink">{tech.name}</div>
                        <div className="text-xs text-muted mt-0.5 leading-snug">{tech.use}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="mt-6 pt-4 border-t border-hairline-soft">
                <div className="inline-flex items-center gap-2 rounded-full bg-surface-soft px-3 py-1 text-xs font-semibold text-muted mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-pink" />
                  Design &amp; Prototyping
                </div>
                <div className="space-y-4">
                  {[
                    { name: 'Figma', use: 'Collaborative UI/UX design with component libraries.', icon: SiFigma },
                    { name: 'Adobe Suite', use: 'Custom graphics, video editing, and brand assets.', icon: Image },
                  ].map((tech) => {
                    const Icon = tech.icon;
                    return (
                      <div key={tech.name} className="flex items-start gap-3">
                        <Icon className="w-4 h-4 mt-0.5 shrink-0 text-muted" />
                        <div>
                          <div className="text-sm font-semibold text-ink">{tech.name}</div>
                          <div className="text-xs text-muted mt-0.5 leading-snug">{tech.use}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
              { gradient: 'from-brand-lavender/30 to-brand-peach/30', dot: 'bg-brand-lavender', cat: 'Web Development', name: 'Project Alpha', desc: 'A full-stack platform built with Next.js and Node.js. Features real-time collaboration and AI-powered analytics.', tags: ['React', 'Next.js', 'Tailwind'] },
              { gradient: 'from-brand-teal/20 to-brand-mint/30', dot: 'bg-brand-teal', cat: 'Web Design', name: 'Project Beta', desc: 'Responsive brand redesign with micro-animations and a overhauled design system.', tags: ['Figma', 'Framer', 'SCSS'] },
              { gradient: 'from-brand-pink/20 to-brand-ochre/20', dot: 'bg-brand-pink', cat: 'Full-Stack', name: 'Project Gamma', desc: 'E-commerce platform with custom CMS, payment processing, and inventory management.', tags: ['Next.js', 'Node.js', 'MongoDB'] },
            ].map((p) => (
              <div key={p.name} className="rounded-xl bg-canvas border border-hairline-soft group transition-all duration-300 hover:shadow-sm hover:border-hairline flex flex-col p-3">
                {/* Mockup area */}
                <div className={`relative aspect-[16/11] bg-gradient-to-br ${p.gradient} rounded-2xl overflow-hidden`}>
                  <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-white/10" />
                  <div className="absolute -bottom-4 -left-4 w-20 h-20 rounded-full bg-white/10" />
                  <div className="absolute inset-0 p-5 space-y-2.5">
                    {[3, 2, 4, 1, 3, 2].map((w, i) => (
                      <div key={i} className="h-2 rounded-full bg-white/15" style={{ width: `${w * 18 + 20}%` }} />
                    ))}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/5">
                    <span className="text-xs font-medium text-ink/60 bg-canvas/80 px-3 py-1.5 rounded-full backdrop-blur-sm">
                      View project &rarr;
                    </span>
                  </div>
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
                    <a href="#" className="text-sm font-medium text-muted-soft hover:text-ink transition-colors">Live Demo &rarr;</a>
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

      {/* Process */}
      <section className="bg-surface-soft py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold tracking-[1.5px] text-muted uppercase">
              How We Work
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-display font-medium tracking-tight text-ink">
              Process We Follow
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              { step: '01', title: 'Discovery & Research', desc: 'We dive deep into your brand, audience, and goals to define the project scope and strategy.', accent: 'bg-brand-lavender' },
              { step: '02', title: 'Design & Prototype', desc: 'Wireframes, mockups, and interactive prototypes that bring the vision to life for feedback.', accent: 'bg-brand-teal' },
              { step: '03', title: 'Development & Build', desc: 'Clean, performant code written with modern stacks — React, Next.js, Node.js, and more.', accent: 'bg-brand-pink' },
              { step: '04', title: 'Testing & QA', desc: 'Rigorous cross-browser, performance, and usability testing before anything goes live.', accent: 'bg-brand-peach' },
              { step: '05', title: 'Launch & Deploy', desc: 'Smooth deployment with CI/CD, DNS setup, and monitoring to ensure a flawless go-live.', accent: 'bg-brand-mint' },
              { step: '06', title: 'Support & Grow', desc: 'Ongoing maintenance, updates, and optimization to keep your product running at its best.', accent: 'bg-brand-ochre' },
            ].map((s) => (
              <div key={s.step} className="rounded-xl bg-canvas border border-hairline-soft p-6 md:p-7 transition-all hover:shadow-sm hover:border-hairline group">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-9 h-9 rounded-lg ${s.accent}/20 flex items-center justify-center`}>
                    <span className={`text-sm font-mono font-bold ${s.accent.replace('bg-', 'text-')}`}>{s.step}</span>
                  </div>
                  <div className="h-px flex-1 bg-hairline-soft" />
                </div>
                <h3 className="text-lg font-semibold text-ink">{s.title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
                gradient: 'from-brand-lavender/25 to-brand-peach/25',
                dot: 'bg-brand-lavender',
                tag: 'Web Design',
                title: 'Why Your Website Needs a Design System',
                desc: 'Consistency across your digital products starts with a solid design system. Here\'s how to build one that scales.',
                date: 'Jun 15, 2026 · 5 min read',
              },
              {
                gradient: 'from-brand-teal/20 to-brand-mint/25',
                dot: 'bg-brand-teal',
                tag: 'Development',
                title: 'Next.js vs. Astro: Choosing the Right Framework',
                desc: 'Both are powerful, but which one fits your next project? We break down the trade-offs with real-world examples.',
                date: 'May 28, 2026 · 8 min read',
              },
              {
                gradient: 'from-brand-pink/20 to-brand-ochre/20',
                dot: 'bg-brand-pink',
                tag: 'Marketing',
                title: 'SEO Strategies That Actually Work in 2026',
                desc: 'Search keeps evolving. Here are the tactics driving real organic growth for our clients right now.',
                date: 'May 10, 2026 · 6 min read',
              },
            ].map((post) => (
              <div key={post.title} className="rounded-xl bg-canvas border border-hairline-soft transition-all hover:shadow-sm hover:border-hairline group flex flex-col p-3">
                <div className={`relative aspect-[16/11] bg-gradient-to-br ${post.gradient} rounded-2xl overflow-hidden`}>
                  <div className="absolute inset-0 p-5 space-y-2">
                    {[4, 3, 5, 2].map((w, i) => (
                      <div key={i} className="h-1.5 rounded-full bg-white/15" style={{ width: `${w * 15 + 30}%` }} />
                    ))}
                    <div className="pt-2 space-y-2">
                      <div className="h-2 rounded-full bg-white/10 w-3/4" />
                      <div className="h-2 rounded-full bg-white/10 w-1/2" />
                    </div>
                  </div>
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
                    <a href="/blog" className="text-sm font-medium text-ink hover:text-muted transition-colors">
                      Read &rarr;
                    </a>
                  </div>
                </div>
              </div>
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
