import { AnimateIn } from "./AnimateIn";

// Asymmetric layout: one large featured benefit + three supporting ones
// Avoids the identical-card-grid trap

const primary = {
  icon: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="1.5" />
      <path d="M10 16a6 6 0 1 0 12 0 6 6 0 0 0-12 0Z" fill="currentColor" opacity=".15" />
      <path d="M16 10v6l4 2" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  heading: "A space built for women",
  body: "Nayyer's women-only instruction creates a genuinely different learning environment — calm, focused, and free from the pressure some students feel in mixed settings. Many of her students say it's the first time driving felt comfortable.",
};

const supporting = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <path d="M3 11a8 8 0 1 0 16 0A8 8 0 0 0 3 11Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M11 7v4l2.5 2.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    heading: "Clear service area",
    body: "Nayyer teaches in Ontario, Canada, with lessons available in Mississauga, Oakville, Burlington, and Milton. Message to confirm other nearby areas.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <path d="M4 6h14M4 11h10M4 16h7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
    heading: "English, Urdu & Hindi",
    body: "Learn in the language you're most comfortable in. Nayyer teaches in all three — clearly and patiently.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <rect x="3" y="5" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7 9l4 3 4-3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    heading: "MTO Certified & experienced",
    body: "Nayyer is an MTO Certified driving instructor in Ontario, Canada with years of experience helping students at every level.",
  },
];

export function Benefits() {
  return (
    <section className="py-20 md:py-28 bg-bg">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <AnimateIn>
          <p className="text-primary-deep font-body font-semibold text-sm mb-3">Why learn with Nayyer</p>
          <h2
            className="font-display font-bold text-ink tracking-[-0.015em] text-wrap-balance max-w-xl"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}
          >
            Instruction built around you, not a classroom.
          </h2>
        </AnimateIn>

        <div className="mt-12 grid md:grid-cols-2 gap-5">
          {/* Large primary benefit */}
          <AnimateIn delay={0.08} y={24}>
            <div className="bg-primary rounded-2xl p-8 md:p-10 flex flex-col justify-between min-h-[280px] md:row-span-2 h-full">
              <div className="text-on-primary/60 mb-6">{primary.icon}</div>
              <div>
                <h3 className="font-display font-bold text-on-primary text-xl leading-snug">
                  {primary.heading}
                </h3>
                <p className="mt-3 font-body text-on-primary/75 leading-relaxed text-sm">
                  {primary.body}
                </p>
              </div>
            </div>
          </AnimateIn>

          {/* Three supporting benefits */}
          {supporting.map((b, i) => (
            <AnimateIn key={b.heading} delay={0.14 + i * 0.07} y={20}>
              <div className="bg-surface rounded-2xl p-6 flex gap-4 items-start">
                <div className="text-primary-deep flex-shrink-0 mt-0.5">{b.icon}</div>
                <div>
                  <h3 className="font-display font-semibold text-ink text-base leading-snug">
                    {b.heading}
                  </h3>
                  <p className="mt-1.5 font-body text-muted text-sm leading-relaxed">
                    {b.body}
                  </p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
