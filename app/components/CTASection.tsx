export default function CTASection() {
  return (
    <section className="bg-surface-soft py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10 text-center">
        <h2 className="text-3xl md:text-4xl font-display font-medium tracking-tight text-ink">
          Ready to Start Your Project?
        </h2>
        <p className="mt-4 text-lg text-body max-w-2xl mx-auto">
          Let&apos;s discuss your ideas and turn them into reality. Get in touch for a free consultation.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <a
            href="/contact"
            className="inline-flex items-center justify-center h-12 px-8 rounded-md bg-primary text-on-primary text-sm font-semibold transition-colors hover:bg-primary-active"
          >
            Get a Free Quote
          </a>
          <a
            href="/our-work"
            className="inline-flex items-center justify-center h-12 px-8 rounded-md border border-hairline text-ink text-sm font-semibold transition-colors hover:bg-surface-soft"
          >
            View Our Work
          </a>
        </div>
      </div>
    </section>
  );
}
