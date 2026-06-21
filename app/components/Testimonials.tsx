const testimonials = [
  {
    quote: "Shapioso transformed our online presence. Our traffic has doubled and sales have increased significantly since the new website launched.",
    author: "Sarah Johnson",
    role: "CEO, Bloom Boutique",
    gradient: "from-brand-lavender/20 to-brand-peach/20",
  },
  {
    quote: "The team's attention to detail and technical expertise is outstanding. They delivered beyond our expectations and on time.",
    author: "Rajesh Mehta",
    role: "Founder, TechVentures India",
    gradient: "from-brand-teal/20 to-brand-mint/20",
  },
  {
    quote: "Working with Shapioso has been a game-changer for our brand. Their design sensibility and development speed are unmatched.",
    author: "Priya Sharma",
    role: "Marketing Director, Urban Nest",
    gradient: "from-brand-pink/20 to-brand-ochre/20",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-canvas py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold tracking-[1.5px] text-muted uppercase">
            Testimonials
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-display font-medium tracking-tight text-ink">
            What Our Clients Say
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className={`rounded-xl bg-gradient-to-br ${t.gradient} border border-hairline-soft p-6 md:p-8 flex flex-col`}
            >
              <svg className="w-8 h-8 text-muted/30 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-sm text-body leading-relaxed flex-1">{t.quote}</p>
              <div className="mt-6 pt-4 border-t border-hairline-soft">
                <p className="text-sm font-semibold text-ink">{t.author}</p>
                <p className="text-xs text-muted mt-0.5">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
