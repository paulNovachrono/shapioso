import { notFound } from "next/navigation";
import Link from "next/link";
import { Palette, Code, Server, TrendingUp, PenTool, Clapperboard } from "lucide-react";
import CTASection from "@/app/components/CTASection";
import ProcessSteps from "@/app/components/ProcessSteps";
import TerminalBlock from "@/app/components/TerminalBlock";

const servicesData: Record<string, {
  title: string;
  tagline: string;
  description: string[];
  features: string[];
  gradient: string;
  image: string;
}> = {
  "website-design": {
    title: "Website Design",
    tagline: "Beautiful, responsive designs tailored to your brand identity.",
    description: [
      "Your website is often the first impression potential customers have of your business. We craft pixel-perfect, user-centered designs that not only look stunning but drive conversions.",
      "Our design process starts with understanding your brand, audience, and goals. From wireframes to high-fidelity mockups, every element is purposeful and aligned with your vision.",
    ],
    features: [
      "Custom UI/UX design tailored to your brand",
      "Responsive design for all devices",
      "Wireframing & interactive prototyping",
      "Design system & component libraries",
      "Accessibility-first approach",
      "SEO-optimized layouts",
    ],
    gradient: "from-brand-pink to-rose-400",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  "website-development": {
    title: "Website Development",
    tagline: "Robust, scalable websites built with modern technologies.",
    description: [
      "We build high-performance websites using cutting-edge technologies like Next.js, React, and Laravel. Every site is optimized for speed, scalability, and maintainability.",
      "From simple brochure sites to complex web applications, our development team delivers clean, well-architected code that stands the test of time.",
    ],
    features: [
      "Modern tech stack (Next.js, React, Laravel)",
      "Fast load times & Core Web Vitals",
      "Scalable architecture",
      "CMS integration (WordPress, Sanity, Strapi)",
      "API development & third-party integrations",
      "Ongoing maintenance & support",
    ],
    gradient: "from-brand-teal to-emerald-600",
    image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  "domain-hosting": {
    title: "Domain & Hosting",
    tagline: "Reliable domain registration and hosting solutions.",
    description: [
      "Get your business online with fast, secure, and reliable hosting. We handle everything from domain registration to server configuration so you can focus on growing your business.",
      "Our hosting solutions are optimized for performance with CDN integration, SSL certificates, automated backups, and 24/7 monitoring.",
    ],
    features: [
      "Domain registration & transfer",
      "SSD-based cloud hosting",
      "Free SSL certificates",
      "Automated daily backups",
      "CDN integration for global speed",
      "99.9% uptime guarantee",
    ],
    gradient: "from-brand-lavender to-purple-400",
    image: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  "digital-marketing": {
    title: "Digital Marketing",
    tagline: "Data-driven strategies to grow your online presence.",
    description: [
      "We create comprehensive digital marketing strategies that drive real results. From SEO to social media, we help you reach the right audience at the right time.",
      "Our data-driven approach ensures every marketing dollar is spent effectively, with regular reporting and optimization to maximize your ROI.",
    ],
    features: [
      "Search engine optimization (SEO)",
      "Social media management",
      "Google Ads & PPC campaigns",
      "Email marketing automation",
      "Content marketing strategy",
      "Analytics & performance reporting",
    ],
    gradient: "from-brand-peach to-orange-400",
    image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  "graphic-design-animation": {
    title: "Graphic Design & Animation",
    tagline: "Stunning visuals and motion graphics that captivate.",
    description: [
      "Make your brand stand out with eye-catching graphics and engaging animations. Our design team creates visuals that communicate your message and leave a lasting impression.",
      "From logo design to complex motion graphics, we bring your brand to life with creative, professional design work that resonates with your audience.",
    ],
    features: [
      "Logo & brand identity design",
      "Social media graphics",
      "Marketing collateral design",
      "2D & 3D animation",
      "Motion graphics & explainer videos",
      "Brand style guides",
    ],
    gradient: "from-brand-ochre to-yellow-500",
    image: "https://images.pexels.com/photos/5838420/pexels-photo-5838420.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  "video-editing-creation": {
    title: "Video Editing & Creation",
    tagline: "Professional video production from concept to final cut.",
    description: [
      "Video is the most engaging form of content. We offer end-to-end video production services, from concept development to final editing and post-production.",
      "Whether you need a promotional video, social media content, or a full-length production, our team delivers cinema-quality results that tell your story.",
    ],
    features: [
      "Concept development & scripting",
      "Professional filming & direction",
      "Video editing & post-production",
      "Color grading & visual effects",
      "Sound design & mixing",
      "Social media optimized formats",
    ],
    gradient: "from-brand-mint to-teal-400",
    image: "https://images.pexels.com/photos/257904/pexels-photo-257904.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
};

const others = [
  "Hidden charges & surprise fees",
  "Low-skilled or inexperienced teams",
  "Poor communication & delayed responses",
  "Missed deadlines & late delivery",
  "Template-based generic designs",
  "No post-launch support",
  "Rigid solutions that don't scale",
  "No clear process or milestones",
  "One-size-fits-all approach",
  "No ROI tracking or analytics",
  "Slow response to changes",
];

const shapiosoPoints = [
  "Transparent pricing with no hidden costs",
  "Expert professionals, years of experience",
  "Dedicated support with regular updates",
  "On-time delivery, every single time",
  "Custom-crafted, unique solutions",
  "Ongoing maintenance & support",
  "Scalable, future-ready architecture",
  "Streamlined workflow, clear milestones",
  "Tailored solutions for your needs",
  "Data-driven ROI tracking & analytics",
  "Agile process, quick to adapt",
];

const allServices = [
  { title: "Website Design", desc: "Beautiful, responsive designs tailored to your brand identity.", icon: Palette, gradient: "from-brand-pink to-rose-400", slug: "website-design" },
  { title: "Website Development", desc: "Robust, scalable websites built with modern technologies.", icon: Code, gradient: "from-brand-teal to-emerald-600", slug: "website-development" },
  { title: "Domain & Hosting", desc: "Reliable domain registration and hosting solutions.", icon: Server, gradient: "from-brand-lavender to-purple-400", slug: "domain-hosting" },
  { title: "Digital Marketing", desc: "Data-driven strategies to grow your online presence.", icon: TrendingUp, gradient: "from-brand-peach to-orange-400", slug: "digital-marketing" },
  { title: "Graphic Design & Animation", desc: "Stunning visuals and motion graphics that captivate.", icon: PenTool, gradient: "from-brand-ochre to-yellow-500", slug: "graphic-design-animation" },
  { title: "Video Editing & Creation", desc: "Professional video production from concept to final cut.", icon: Clapperboard, gradient: "from-brand-mint to-teal-400", slug: "video-editing-creation" },
];

export function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({ slug }));
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = servicesData[slug];
  if (!service) notFound();

  const otherServices = allServices.filter((s) => s.slug !== slug);

  return (
    <main className="flex-1">
      {/* Overview Hero */}
      <section className="bg-canvas py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Link
                href="/services"
                className="inline-flex items-center gap-1 text-sm text-muted hover:text-ink transition-colors mb-8"
              >
                &larr; All Services
              </Link>
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white text-xl font-bold mb-6`}>
                {service.title.charAt(0)}
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-medium tracking-tight text-ink">
                {service.title}
              </h1>
              <p className="mt-4 text-lg text-body leading-relaxed">
                {service.tagline}
              </p>
            </div>
            <div className="relative">
              <div className="rounded-xl overflow-hidden border border-hairline-soft">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Description + Features */}
      <section className="bg-surface-soft py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              {service.description.map((p, i) => (
                <p key={i} className="text-base text-body leading-relaxed">{p}</p>
              ))}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-ink mb-4">What We Deliver</h3>
              <ul className="space-y-3">
                {service.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-body">
                    <span className={`w-5 h-5 rounded-full bg-gradient-to-br ${service.gradient} flex items-center justify-center shrink-0 mt-0.5`}>
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="bg-canvas py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold tracking-[1.5px] text-muted uppercase">
              More Services
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-display font-medium tracking-tight text-ink">
              Explore Our Other Services
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {otherServices.map((s) => {
              const Icon = s.icon;
              return (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="rounded-xl bg-surface-soft border border-hairline-soft p-6 md:p-7 transition-all hover:shadow-sm hover:border-hairline group"
                >
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${s.gradient} flex items-center justify-center text-white`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-ink group-hover:text-primary transition-colors">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">
                    {s.desc}
                  </p>
                  <div className="mt-4 flex items-center gap-1 text-sm font-medium text-muted-soft group-hover:text-ink transition-colors">
                    Learn more
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </Link>
              );
            })}
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
            <TerminalBlock label="SHAPIOSO" points={shapiosoPoints} type="success" />
          </div>
        </div>
      </section>

      <ProcessSteps />

      <CTASection />
    </main>
  );
}
