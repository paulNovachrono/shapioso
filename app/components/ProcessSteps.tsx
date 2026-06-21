const steps = [
  { step: '01', title: 'Discovery & Research', desc: 'We dive deep into your brand, audience, and goals to define the project scope and strategy.', accent: 'bg-brand-lavender' },
  { step: '02', title: 'Design & Prototype', desc: 'Wireframes, mockups, and interactive prototypes that bring the vision to life for feedback.', accent: 'bg-brand-teal' },
  { step: '03', title: 'Development & Build', desc: 'Clean, performant code written with modern stacks — React, Next.js, Node.js, and more.', accent: 'bg-brand-pink' },
  { step: '04', title: 'Testing & QA', desc: 'Rigorous cross-browser, performance, and usability testing before anything goes live.', accent: 'bg-brand-peach' },
  { step: '05', title: 'Launch & Deploy', desc: 'Smooth deployment with CI/CD, DNS setup, and monitoring to ensure a flawless go-live.', accent: 'bg-brand-mint' },
  { step: '06', title: 'Support & Grow', desc: 'Ongoing maintenance, updates, and optimization to keep your product running at its best.', accent: 'bg-brand-ochre' },
];

export default function ProcessSteps() {
  return (
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
          {steps.map((s) => (
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
  );
}
