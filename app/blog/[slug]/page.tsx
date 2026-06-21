import { notFound } from "next/navigation";
import Link from "next/link";
import CTASection from "@/app/components/CTASection";

const blogPosts = [
  {
    slug: "why-your-business-needs-a-professional-website-in-2026",
    title: "Why Your Business Needs a Professional Website in 2026",
    tag: "Web Design",
    date: "November 22, 2025",
    desc: "In today's digital-first world, a business without a professional website is like a shop without a signboard.",
    image: "/images/blog-1.png",
    gradient: "from-brand-lavender/25 to-brand-peach/25",
    content: [
      {
        type: "paragraph",
        text: "In today's digital-first world, a business without a professional website is like a shop without a signboard. Your website is often the first interaction potential customers have with your brand, and first impressions matter more than ever.",
      },
      {
        type: "paragraph",
        text: "A well-designed website does more than just look good—it builds trust, showcases your expertise, and provides a seamless experience that converts visitors into customers. In 2026, having a basic online presence isn't enough; you need a site that reflects the quality of your brand.",
      },
      {
        type: "heading",
        text: "First Impressions Matter",
      },
      {
        type: "paragraph",
        text: "Studies show that users form an opinion about your website within 50 milliseconds. That's 0.05 seconds to make a lasting impression. A professional design with clean typography, intuitive navigation, and fast load times signals credibility and professionalism.",
      },
      {
        type: "paragraph",
        text: "Conversely, an outdated or poorly designed website can drive potential customers away. If your site looks like it hasn't been updated since 2010, visitors will assume your business hasn't evolved either.",
      },
      {
        type: "heading",
        text: "Mobile Responsiveness Is Non-Negotiable",
      },
      {
        type: "paragraph",
        text: "With over 60% of web traffic coming from mobile devices, your website must look and function flawlessly on every screen size. Google's mobile-first indexing means that Google primarily uses the mobile version of your site for ranking and indexing.",
      },
      {
        type: "paragraph",
        text: "A responsive website adapts seamlessly to desktops, tablets, and smartphones, ensuring a consistent experience for every visitor regardless of how they access your site.",
      },
      {
        type: "heading",
        text: "SEO and Visibility",
      },
      {
        type: "paragraph",
        text: "A professional website is built with search engine optimization (SEO) in mind from the ground up. Clean code, fast load speeds, proper heading structure, and optimized images all contribute to better search engine rankings.",
      },
      {
        type: "paragraph",
        text: "Without a properly optimized website, you're invisible to potential customers searching for your products or services online. Investing in a professional website is investing in your online visibility.",
      },
      {
        type: "heading",
        text: "The Bottom Line",
      },
      {
        type: "paragraph",
        text: "Your website is one of the most important investments you can make for your business. It works for you 24/7, 365 days a year, reaching customers around the clock. A professional website isn't an expense—it's a revenue-generating asset.",
      },
      {
        type: "paragraph",
        text: "At Shapioso, we specialize in creating beautiful, high-performing websites that help businesses like yours succeed online. From design to development, we handle every aspect of building a website that works for you.",
      },
    ],
  },
  {
    slug: "how-digital-marketing-helps-your-business-grow-faster",
    title: "How Digital Marketing Helps Your Business Grow Faster",
    tag: "Digital Marketing",
    date: "November 22, 2025",
    desc: "Digital marketing has transformed the way businesses communicate with their audience in remarkable ways.",
    image: "/images/blog-2.png",
    gradient: "from-brand-teal/20 to-brand-mint/25",
    content: [
      {
        type: "paragraph",
        text: "Digital marketing has transformed the way businesses communicate with their audience. Whether you run a startup, local shop, or enterprise-level corporation, a strong digital presence is no longer optional—it's essential for growth.",
      },
      {
        type: "paragraph",
        text: "Unlike traditional marketing methods, digital marketing offers precise targeting, measurable results, and the ability to adjust your strategy in real-time. Here's how it can help your business grow faster.",
      },
      {
        type: "heading",
        text: "Reach the Right Audience at the Right Time",
      },
      {
        type: "paragraph",
        text: "Digital marketing allows you to target your ideal customers with precision. Through tools like Google Ads, social media advertising, and SEO, you can reach people who are actively searching for your products or services.",
      },
      {
        type: "paragraph",
        text: "Advanced targeting options let you filter by demographics, interests, behaviors, location, and even the time of day. This means every dollar of your marketing budget is spent reaching people most likely to convert.",
      },
      {
        type: "heading",
        text: "Cost-Effective Compared to Traditional Marketing",
      },
      {
        type: "paragraph",
        text: "Digital marketing is significantly more cost-effective than traditional channels like TV, radio, or print advertising. With a modest budget, you can launch targeted campaigns and see immediate results.",
      },
      {
        type: "paragraph",
        text: "Platforms like social media and email marketing allow you to reach thousands of potential customers for a fraction of the cost of traditional advertising. Plus, you can start small and scale up as you see what works.",
      },
      {
        type: "heading",
        text: "Measurable Results and ROI",
      },
      {
        type: "paragraph",
        text: "One of the biggest advantages of digital marketing is the ability to track everything. From website visits and click-through rates to conversions and customer lifetime value, every metric is measurable.",
      },
      {
        type: "paragraph",
        text: "This data-driven approach allows you to continuously optimize your campaigns for better performance. You'll know exactly what's working, what isn't, and where to invest your marketing budget for the highest return.",
      },
      {
        type: "heading",
        text: "Build Brand Authority and Trust",
      },
      {
        type: "paragraph",
        text: "Consistent, valuable content across your digital channels positions your business as an authority in your industry. Blog posts, social media content, videos, and email newsletters all contribute to building trust with your audience.",
      },
      {
        type: "paragraph",
        text: "When customers trust your brand, they're more likely to choose you over competitors and recommend you to others. Digital marketing helps you build that trust at scale.",
      },
    ],
  },
  {
    slug: "the-power-of-creative-design-why-good-branding-matters",
    title: "The Power of Creative Design: Why Good Branding Matters",
    tag: "Branding",
    date: "November 22, 2025",
    desc: "Branding is more than just a logo—it's the emotional connection your audience builds with your company.",
    image: "/images/blog-3.png",
    gradient: "from-brand-pink/20 to-brand-ochre/20",
    content: [
      {
        type: "paragraph",
        text: "Branding is more than just a logo—it's the emotional connection your audience builds with your company. Great design tells your story, communicates your values, and sets you apart from the competition.",
      },
      {
        type: "paragraph",
        text: "In a crowded marketplace, strong branding is what makes customers choose you over the alternatives. It's the personality of your business, expressed through visual elements, messaging, and customer experience.",
      },
      {
        type: "heading",
        text: "The Science of First Impressions",
      },
      {
        type: "paragraph",
        text: "Research shows that people form an opinion about your brand within 7 seconds. Color, typography, and imagery all play crucial roles in shaping that perception. Consistent, professional branding signals that you're trustworthy and established.",
      },
      {
        type: "paragraph",
        text: "Colors evoke specific emotions—blue conveys trust, red creates urgency, green suggests growth. A well-thought-out color palette and design system ensures your brand communicates the right message at every touchpoint.",
      },
      {
        type: "heading",
        text: "Consistency Builds Recognition",
      },
      {
        type: "paragraph",
        text: "Think of the world's most recognizable brands—Apple, Nike, Coca-Cola. Their branding is instantly recognizable, whether you see it on a billboard, a website, or a product package. This consistency builds familiarity and trust over time.",
      },
      {
        type: "paragraph",
        text: "A comprehensive brand identity includes your logo, color palette, typography, imagery style, voice and tone, and application guidelines. When all these elements work together harmoniously, your brand becomes memorable.",
      },
      {
        type: "heading",
        text: "Design Drives Business Results",
      },
      {
        type: "paragraph",
        text: "Good design isn't just about aesthetics—it directly impacts your bottom line. Well-designed websites have higher conversion rates. Professional packaging commands premium pricing. Cohesive branding increases customer loyalty.",
      },
      {
        type: "paragraph",
        text: "According to a study by the Design Management Institute, design-led companies outperform the S&P 500 by 219% over 10 years. Investing in professional design is one of the smartest business decisions you can make.",
      },
      {
        type: "heading",
        text: "Your Brand, Your Story",
      },
      {
        type: "paragraph",
        text: "At its core, branding is about storytelling. Your brand story should resonate with your target audience, reflect your values, and differentiate you from competitors. Creative design brings that story to life in a visually compelling way.",
      },
      {
        type: "paragraph",
        text: "Whether you're building a brand from scratch or refreshing an existing one, partnering with a creative team ensures your brand identity is strategic, cohesive, and impactful.",
      },
    ],
  },
  {
    slug: "why-responsive-design-is-critical-for-your-website",
    title: "Why Responsive Design Is Critical for Your Website",
    tag: "Web Design",
    date: "December 5, 2025",
    desc: "With mobile devices accounting for over half of all web traffic, responsive design is no longer a luxury.",
    image: null,
    gradient: "from-brand-mint/20 to-brand-teal/25",
    content: [
      {
        type: "paragraph",
        text: "With mobile devices accounting for over half of all web traffic, responsive design is no longer a luxury—it's a necessity. A responsive website adapts seamlessly to any screen size, providing an optimal viewing experience across desktops, tablets, and smartphones.",
      },
      {
        type: "paragraph",
        text: "Google's mobile-first indexing means that search engines primarily use the mobile version of your site for ranking and indexing. If your website isn't mobile-friendly, you're not just losing visitors—you're losing search visibility.",
      },
      {
        type: "heading",
        text: "Better User Experience",
      },
      {
        type: "paragraph",
        text: "Responsive design ensures that users can navigate, read, and interact with your site regardless of their device. Buttons are tappable, text is readable without zooming, and images scale properly. This seamless experience keeps visitors engaged and reduces bounce rates.",
      },
      {
        type: "paragraph",
        text: "A positive user experience directly correlates with higher conversion rates. When visitors can easily find what they're looking for and complete desired actions, they're more likely to become customers.",
      },
      {
        type: "heading",
        text: "Cost and Time Efficiency",
      },
      {
        type: "paragraph",
        text: "Maintaining separate desktop and mobile versions of your website is costly and time-consuming. Responsive design eliminates the need for duplicate development, content management, and SEO efforts. You maintain one site that works everywhere.",
      },
      {
        type: "paragraph",
        text: "This unified approach also simplifies updates and ensures consistency across all devices. When you make a change, it's reflected everywhere instantly.",
      },
      {
        type: "heading",
        text: "Future-Proof Your Online Presence",
      },
      {
        type: "paragraph",
        text: "New devices with different screen sizes emerge every year. Responsive design future-proofs your website by ensuring it adapts to any screen, whether it's a foldable phone, a tablet, or a large desktop monitor.",
      },
      {
        type: "paragraph",
        text: "At Shapioso, we build all our websites with responsive design as a core principle, ensuring your site looks and performs beautifully on every device.",
      },
    ],
  },
  {
    slug: "seo-basics-every-business-owner-should-know",
    title: "SEO Basics Every Business Owner Should Know",
    tag: "Digital Marketing",
    date: "December 12, 2025",
    desc: "Search engine optimization (SEO) is the foundation of organic online visibility for your business.",
    image: null,
    gradient: "from-brand-peach/20 to-brand-ochre/20",
    content: [
      {
        type: "paragraph",
        text: "Search engine optimization (SEO) is the foundation of organic online visibility. Understanding the basics can help your business rank higher, attract more traffic, and generate more leads without paying for advertising.",
      },
      {
        type: "paragraph",
        text: "SEO might seem complex, but the fundamentals are straightforward. Here's what every business owner should know about optimizing their website for search engines.",
      },
      {
        type: "heading",
        text: "Keywords Are the Foundation",
      },
      {
        type: "paragraph",
        text: "Keywords are the words and phrases people type into search engines when looking for products or services. Identifying the right keywords for your business is the first step in any SEO strategy.",
      },
      {
        type: "paragraph",
        text: "Focus on long-tail keywords—specific, multi-word phrases that indicate strong purchase intent. For example, 'affordable web design for small businesses in Delhi' is more valuable than just 'web design'.",
      },
      {
        type: "heading",
        text: "Content Is King",
      },
      {
        type: "paragraph",
        text: "Search engines reward websites that publish high-quality, relevant content. Blog posts, service pages, case studies, and FAQs all contribute to your SEO performance. The key is to create content that genuinely helps your audience.",
      },
      {
        type: "paragraph",
        text: "Regularly updating your website with fresh content signals to search engines that your site is active and relevant. A blog is one of the most effective ways to consistently add new content.",
      },
      {
        type: "heading",
        text: "Technical SEO Matters",
      },
      {
        type: "paragraph",
        text: "Technical SEO refers to the behind-the-scenes elements that affect how search engines crawl and index your site. This includes site speed, mobile-friendliness, XML sitemaps, proper URL structure, and meta tags.",
      },
      {
        type: "paragraph",
        text: "A fast, well-structured website not only ranks better but also provides a better user experience. Google's Core Web Vitals are now ranking factors, making performance optimization essential.",
      },
    ],
  },
  {
    slug: "the-role-of-animation-in-modern-branding",
    title: "The Role of Animation in Modern Branding",
    tag: "Branding",
    date: "December 20, 2025",
    desc: "Animation brings brands to life in ways static design simply cannot match.",
    image: null,
    gradient: "from-brand-lavender/20 to-brand-pink/20",
    content: [
      {
        type: "paragraph",
        text: "Animation brings brands to life. From micro-interactions on your website to full motion graphics for social media, animation captures attention and communicates your message in ways static design cannot.",
      },
      {
        type: "paragraph",
        text: "In an age of shortening attention spans, animation helps brands stand out and create memorable experiences that resonate with audiences long after they've scrolled past.",
      },
      {
        type: "heading",
        text: "Micro-Interactions Make a Difference",
      },
      {
        type: "paragraph",
        text: "Micro-interactions are small animations that respond to user actions—a button that changes color on hover, a loading spinner, a notification that slides in smoothly. These subtle details enhance user experience and make your website feel polished and professional.",
      },
      {
        type: "paragraph",
        text: "When done well, micro-interactions guide users through your site, provide feedback, and create moments of delight. They're the difference between a functional website and an engaging one.",
      },
      {
        type: "heading",
        text: "Motion Graphics for Social Media",
      },
      {
        type: "paragraph",
        text: "Social media platforms prioritize video content, and animated posts consistently outperform static images. Short, eye-catching motion graphics can explain complex ideas quickly and are highly shareable.",
      },
      {
        type: "paragraph",
        text: "From animated logos to product demonstrations, motion graphics help your brand cut through the noise and capture attention in crowded social feeds.",
      },
      {
        type: "heading",
        text: "Storytelling Through Animation",
      },
      {
        type: "paragraph",
        text: "Animation is a powerful storytelling tool. It can simplify complex concepts, evoke emotions, and create narratives that resonate with your audience. Animated explainer videos, for instance, can increase conversion rates by up to 20%.",
      },
      {
        type: "paragraph",
        text: "At Shapioso, we combine creative design with strategic animation to help brands tell their stories in compelling, memorable ways.",
      },
    ],
  },
];

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const relatedPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <main className="flex-1">
      <article>
        {/* Hero */}
        <section className="bg-canvas py-24 md:py-32">
          <div className="mx-auto max-w-3xl px-6 md:px-10">
            <div className="mb-8">
              <Link
                href="/blog"
                className="inline-flex items-center gap-1 text-sm text-muted hover:text-ink transition-colors mb-6"
              >
                &larr; Back to Blog
              </Link>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-semibold tracking-wide text-muted uppercase">
                  {post.tag}
                </span>
                <span className="w-1 h-1 rounded-full bg-muted-soft" />
                <span className="text-xs text-muted-soft">{post.date}</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-display font-medium tracking-tight text-ink leading-[1.1]">
                {post.title}
              </h1>
            </div>
            {post.image && (
              <div className="rounded-xl overflow-hidden border border-hairline-soft">
                <img src={post.image} alt={post.title} className="w-full h-auto" />
              </div>
            )}
          </div>
        </section>

        {/* Content */}
        <section className="bg-surface-soft py-20 md:py-24">
          <div className="mx-auto max-w-3xl px-6 md:px-10">
            <div className="space-y-6">
              {post.content.map((block, i) => {
                if (block.type === "heading") {
                  return (
                    <h2 key={i} className="text-2xl md:text-3xl font-display font-medium tracking-tight text-ink pt-4">
                      {block.text}
                    </h2>
                  );
                }
                return (
                  <p key={i} className="text-base text-body leading-relaxed">
                    {block.text}
                  </p>
                );
              })}
            </div>

            {/* Share */}
            <div className="mt-12 pt-8 border-t border-hairline-soft">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-ink">Share this article</span>
                <div className="flex items-center gap-3">
                  {['Twitter', 'LinkedIn', 'Facebook'].map((platform) => (
                    <a
                      key={platform}
                      href="#"
                      className="text-xs font-medium text-muted-soft hover:text-ink transition-colors"
                    >
                      {platform}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="bg-canvas py-20 md:py-24">
            <div className="mx-auto max-w-7xl px-6 md:px-10">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-display font-medium tracking-tight text-ink">
                  Related Articles
                </h2>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedPosts.map((rp) => (
                  <Link
                    key={rp.slug}
                    href={`/blog/${rp.slug}`}
                    className="rounded-xl bg-surface-soft border border-hairline-soft transition-all hover:shadow-sm hover:border-hairline group flex flex-col p-3"
                  >
                    <div className={`relative aspect-[16/11] rounded-2xl overflow-hidden ${rp.image ? '' : `bg-gradient-to-br ${rp.gradient}`}`}>
                      {rp.image ? (
                        <img src={rp.image} alt={rp.title} className="absolute inset-0 w-full h-full object-cover" />
                      ) : (
                        <div className={`absolute inset-0 bg-gradient-to-br ${rp.gradient}`}>
                          <div className="absolute inset-0 p-5 space-y-2">
                            {[4, 3, 5, 2].map((w, i) => (
                              <div key={i} className="h-1.5 rounded-full bg-white/15" style={{ width: `${w * 15 + 30}%` }} />
                            ))}
                          </div>
                        </div>
                      )}
                      <div className="absolute top-3 left-3">
                        <span className="text-[11px] font-medium text-white/80 bg-white/15 px-2.5 py-1 rounded-full backdrop-blur-sm">
                          {rp.tag}
                        </span>
                      </div>
                    </div>
                    <div className="p-3 md:p-4 flex flex-col flex-1">
                      <h3 className="text-base font-semibold text-ink leading-snug">{rp.title}</h3>
                      <p className="text-sm text-muted mt-1.5 leading-relaxed flex-1 line-clamp-2">{rp.desc}</p>
                      <div className="mt-4 pt-4 border-t border-hairline-soft flex items-center justify-between">
                        <span className="text-xs text-muted-soft">{rp.date}</span>
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
        )}
      </article>

      <CTASection />
    </main>
  );
}
