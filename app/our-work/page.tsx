const projects = [
  { gradient: 'from-brand-lavender/30 to-brand-mint/30', dot: 'bg-brand-lavender', cat: 'Web Development', name: 'Zknit', desc: 'AI-powered knitting design platform with custom pattern generation and e-commerce integration.', tags: ['jQuery', 'WordPress', 'WooCommerce', 'Elementor'], image: '/images/Zknit.png', link: 'https://zknit.ai/' },
  { gradient: 'from-brand-teal/20 to-brand-mint/30', dot: 'bg-brand-teal', cat: 'Web Development', name: 'Jala Restaurant', desc: 'Modern restaurant website with online menu, reservation system, and location services.', tags: ['Laravel', 'MySQL', 'Tailwind'], image: '/images/jalarestaurant.png', link: 'https://jalarestaurant.com/' },
  { gradient: 'from-brand-pink/20 to-brand-ochre/20', dot: 'bg-brand-pink', cat: 'Web Development', name: 'JRE Home Decor', desc: 'E-commerce home decor store with product catalog, cart, and checkout system.', tags: ['Laravel', 'MySQL', 'Tailwind'], image: '/images/jrehomedecor..png', link: 'https://www.jrehomedecor.com/' },
  { gradient: 'from-brand-teal/20 to-brand-mint/30', dot: 'bg-brand-mint', cat: 'Branding', name: 'GreenLeaf Organics', desc: 'Complete brand identity including logo, packaging, and web presence for an organic food startup.', tags: ['Brand Identity', 'Logo Design', 'Packaging'], image: null, link: null },
  { gradient: 'from-brand-peach/20 to-brand-ochre/20', dot: 'bg-brand-peach', cat: 'Web Design', name: 'FitTrack Pro', desc: 'Dashboard and mobile-first web app for fitness tracking with real-time analytics.', tags: ['UI/UX', 'Figma', 'React Native'], image: null, link: null },
  { gradient: 'from-brand-lavender/20 to-brand-pink/20', dot: 'bg-brand-lavender', cat: 'Branding', name: 'Luxe & Co.', desc: 'Luxury brand identity with custom typography, color palette, and brand guidelines.', tags: ['Brand Identity', 'Typography', 'Style Guide'], image: null, link: null },
];

const clientLogos = [
  { name: 'Zknit', image: '/logos/Zknit-Logo-with-tag-line-1-1024x627.png' },
  { name: 'Best Top', image: '/logos/besttop.webp' },
  { name: 'EDMN', image: '/logos/edmn.webp' },
  { name: 'AVNDL', image: '/logos/avndl.webp' },
  { name: 'EBT', image: '/logos/ebt.webp' },
  { name: 'Key Logo', image: '/logos/key-logo.webp' },
  { name: 'Best Design Code', image: '/logos/bestdesigncode.webp' },
  { name: 'TRF', image: '/logos/trf.png' },
];

export default function OurWorkPage() {
  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="bg-canvas py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-surface-soft border border-hairline-soft px-4 py-1.5 text-xs font-semibold tracking-wide text-muted mb-6">
              Our Portfolio
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-medium tracking-tight text-ink leading-[1.1]">
              Our Work
            </h1>
            <p className="mt-6 text-lg text-body max-w-2xl leading-relaxed">
              A showcase of the projects we&apos;ve delivered from websites and apps to brand
              identities and digital campaigns.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="bg-surface-soft py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold tracking-[1.5px] text-muted uppercase">
              Our Projects
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-display font-medium tracking-tight text-ink">
              Featured Projects
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((p) => (
              <div key={p.name} className="rounded-xl bg-white border border-hairline-soft group transition-all duration-300 hover:shadow-sm hover:border-hairline flex flex-col p-3">
                <div className={`relative aspect-[16/11] rounded-2xl overflow-hidden ${p.image ? '' : `bg-gradient-to-br ${p.gradient}`}`}>
                  {p.image ? (
                    <img src={p.image} alt={p.name} className="absolute inset-0 w-full h-full object-cover" />
                  ) : (
                    <div className="absolute inset-0 p-6 flex items-center justify-center">
                      <span className="text-5xl font-display font-bold text-white/30">{p.name.charAt(0)}</span>
                    </div>
                  )}
                  {p.link && (
                    <a href={p.link} className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/5">
                      <span className="text-xs font-medium text-ink/60 bg-canvas/80 px-3 py-1.5 rounded-full backdrop-blur-sm">
                        View project &rarr;
                      </span>
                    </a>
                  )}
                </div>
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
                    {p.link ? (
                      <a href={p.link} className="text-sm font-medium text-muted-soft hover:text-ink transition-colors">Live Demo &rarr;</a>
                    ) : (
                      <span className="text-sm font-medium text-muted-soft/50">Coming Soon</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Logos We Design */}
      <section className="bg-canvas py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold tracking-[1.5px] text-muted uppercase">
              Brand Identity
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-display font-medium tracking-tight text-ink">
              Logos We Design
            </h2>
            <p className="mt-4 text-base text-body  mx-auto">
              Every logo tells a story. Here are some of the brand identities we&apos;ve created for our clients.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {clientLogos.map((logo) => (
              <div key={logo.name} className="rounded-xl bg-white border border-hairline-soft p-6 md:p-8 flex flex-col items-center justify-center text-center transition-all hover:shadow-sm hover:border-hairline group">
                <div className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center p-2 transition-transform duration-300 group-hover:scale-110">
                  <img src={logo.image} alt={logo.name} className="w-full h-full object-contain" />
                </div>
                <p className="mt-4 text-sm font-semibold text-ink">{logo.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
