import Link from "next/link";

const posts = [
  {
    slug: "why-your-business-needs-a-professional-website-in-2026",
    gradient: "from-brand-lavender/25 to-brand-peach/25",
    dot: "bg-brand-lavender",
    tag: "Web Design",
    title: "Why Your Business Needs a Professional Website in 2026",
    desc: "In today's digital-first world, a business without a professional website is like a shop without a signboard. Your website is often the first interaction potential customers have with your brand, and first impressions matter more than ever.",
    date: "November 22, 2025",
    image: "/images/blog-1.png",
  },
  {
    slug: "how-digital-marketing-helps-your-business-grow-faster",
    gradient: "from-brand-teal/20 to-brand-mint/25",
    dot: "bg-brand-teal",
    tag: "Digital Marketing",
    title: "How Digital Marketing Helps Your Business Grow Faster",
    desc: "Digital marketing has transformed the way businesses communicate with their audience. Whether you run a startup, local shop, or enterprise-level corporation, a strong digital presence is no longer optional.",
    date: "November 22, 2025",
    image: "/images/blog-2.png",
  },
  {
    slug: "the-power-of-creative-design-why-good-branding-matters",
    gradient: "from-brand-pink/20 to-brand-ochre/20",
    dot: "bg-brand-pink",
    tag: "Branding",
    title: "The Power of Creative Design: Why Good Branding Matters",
    desc: "Branding is more than just a logo—it's the emotional connection your audience builds with your company. Great design tells your story, communicates your values, and sets you apart from the competition.",
    date: "November 22, 2025",
    image: "/images/blog-3.png",
  },
  {
    slug: "why-responsive-design-is-critical-for-your-website",
    gradient: "from-brand-mint/20 to-brand-teal/25",
    dot: "bg-brand-mint",
    tag: "Web Design",
    title: "Why Responsive Design Is Critical for Your Website",
    desc: "With mobile devices accounting for over half of all web traffic, responsive design is no longer a luxury—it's a necessity. A responsive website adapts seamlessly to any screen size.",
    date: "December 5, 2025",
    image: null,
  },
  {
    slug: "seo-basics-every-business-owner-should-know",
    gradient: "from-brand-peach/20 to-brand-ochre/20",
    dot: "bg-brand-peach",
    tag: "Digital Marketing",
    title: "SEO Basics Every Business Owner Should Know",
    desc: "Search engine optimization (SEO) is the foundation of organic online visibility. Understanding the basics can help your business rank higher, attract more traffic, and generate more leads.",
    date: "December 12, 2025",
    image: null,
  },
  {
    slug: "the-role-of-animation-in-modern-branding",
    gradient: "from-brand-lavender/20 to-brand-pink/20",
    dot: "bg-brand-lavender",
    tag: "Branding",
    title: "The Role of Animation in Modern Branding",
    desc: "Animation brings brands to life. From micro-interactions on your website to full motion graphics for social media, animation captures attention and communicates your message in ways static design cannot.",
    date: "December 20, 2025",
    image: null,
  },
];

export default function BlogPage() {
  return (
    <main className="flex-1">
      <section className="bg-canvas py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-surface-soft border border-hairline-soft px-4 py-1.5 text-xs font-semibold tracking-wide text-muted mb-6">
              Our Insights
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-medium tracking-tight text-ink leading-[1.1]">
              Blog
            </h1>
            <p className="mt-6 text-lg text-body max-w-2xl leading-relaxed">
              Insights, tips, and stories from the Shapioso team on web design, digital marketing, branding, and more.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-surface-soft py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid md:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="rounded-xl bg-canvas border border-hairline-soft transition-all hover:shadow-sm hover:border-hairline group flex flex-col p-3"
              >
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
        </div>
      </section>
    </main>
  );
}
