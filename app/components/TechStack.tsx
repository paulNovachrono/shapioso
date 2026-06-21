import { Image } from 'lucide-react';
import {
  SiHtml5, SiJavascript, SiReact, SiNextdotjs, SiAstro, SiTailwindcss, SiFramer, SiJquery,
  SiNodedotjs, SiLaravel, SiMongodb, SiMysql, SiGraphql,
  SiWordpress, SiWebflow, SiSanity, SiWoocommerce, SiElementor, SiFigma,
} from 'react-icons/si';

export default function TechStack() {
  return (
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
                { name: 'jQuery', use: 'Fast DOM manipulation and legacy browser compatibility.', icon: SiJquery },
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
                { name: 'WooCommerce', use: 'Custom e-commerce stores built on WordPress.', icon: SiWoocommerce },
                { name: 'Elementor', use: 'Drag-and-drop page builder for WordPress sites.', icon: SiElementor },
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
  );
}
