import Link from "next/link";
import { Palette, Code, Server, TrendingUp, PenTool, Clapperboard } from "lucide-react";
import CTASection from "../components/CTASection";

const services = [
  { title: "Website Design", desc: "Beautiful, responsive designs tailored to your brand identity.", icon: Palette, gradient: "from-brand-pink to-rose-400", slug: "website-design" },
  { title: "Website Development", desc: "Robust, scalable websites built with modern technologies.", icon: Code, gradient: "from-brand-teal to-emerald-600", slug: "website-development" },
  { title: "Domain & Hosting", desc: "Reliable domain registration and hosting solutions.", icon: Server, gradient: "from-brand-lavender to-purple-400", slug: "domain-hosting" },
  { title: "Digital Marketing", desc: "Data-driven strategies to grow your online presence.", icon: TrendingUp, gradient: "from-brand-peach to-orange-400", slug: "digital-marketing" },
  { title: "Graphic Design & Animation", desc: "Stunning visuals and motion graphics that captivate.", icon: PenTool, gradient: "from-brand-ochre to-yellow-500", slug: "graphic-design-animation" },
  { title: "Video Editing & Creation", desc: "Professional video production from concept to final cut.", icon: Clapperboard, gradient: "from-brand-mint to-teal-400", slug: "video-editing-creation" },
];

export default function ServicesPage() {
  return (
    <main className="flex-1">
      <section className="bg-canvas py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-surface-soft border border-hairline-soft px-4 py-1.5 text-xs font-semibold tracking-wide text-muted mb-6">
              What We Do
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-medium tracking-tight text-ink leading-[1.1]">
              Our Services
            </h1>
            <p className="mt-6 text-lg text-body max-w-2xl leading-relaxed">
              From design to development, marketing to hosting — we offer end-to-end digital
              solutions to help your business thrive online.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-surface-soft py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="rounded-xl bg-canvas border border-hairline-soft p-6 md:p-7 transition-all hover:shadow-sm hover:border-hairline group"
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

      <CTASection />
    </main>
  );
}
