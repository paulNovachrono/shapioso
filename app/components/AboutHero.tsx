import { Globe } from '@/components/ui/globe';

export default function AboutHero() {
  return (
    <section className="bg-canvas py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-surface-soft border border-hairline-soft px-4 py-1.5 text-xs font-semibold tracking-wide text-muted mb-6">
              <span className="font-mono text-muted-soft">$</span> About Shapioso
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-medium tracking-tight text-ink leading-[1.1]">
              We turn ideas into{' '}
              <span className="text-muted">digital products</span> that look
              sharp, work flawlessly, and{' '}
              <span className="text-muted">grow with you</span>.
            </h1>
            <p className="mt-6 text-lg text-body leading-relaxed">
              From your first sketch to final launch, we build websites, apps, and digital
              experiences that combine clean design with solid engineering — no templates,
              no shortcuts.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center h-12 px-7 rounded-md bg-primary text-on-primary text-sm font-semibold transition-colors hover:bg-primary-active"
              >
                Start a Project
              </a>
              <a
                href="/our-work"
                className="inline-flex items-center justify-center h-12 px-7 rounded-md border border-hairline text-ink text-sm font-semibold transition-colors hover:bg-surface-soft"
              >
                View Our Work
              </a>
            </div>
          </div>
          <div className="relative flex justify-center md:justify-end">
            <div className="w-full max-w-[500px] md:max-w-[600px] ">
              <Globe />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
