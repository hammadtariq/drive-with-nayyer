import { AnimateIn } from "./AnimateIn";

const steps = [
  {
    n: "1",
    heading: "Choose your package",
    body: "Browse the three packages and pick the one that matches your licence goal — G2 starter, G2 with road test support, or full G course.",
  },
  {
    n: "2",
    heading: "Book your first slot & pay",
    body: "Select an available first lesson time through Cal.com and complete payment through Stripe. Your slot is confirmed only after payment — no unpaid holds.",
  },
  {
    n: "3",
    heading: "Complete your lessons",
    body: "After your first paid lesson, Nayyer coordinates the remaining lessons with you directly — usually via WhatsApp — around your schedule.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-primary">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <AnimateIn>
          <h2
            className="font-display font-bold text-white tracking-[-0.015em] text-wrap-balance text-center mb-16"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}
          >
            How it works
          </h2>
        </AnimateIn>

        <div className="grid md:grid-cols-3 gap-0 relative">
          {/* Connector line — desktop only */}
          <div
            className="hidden md:block absolute top-9 left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] h-px"
            style={{ background: "oklch(1 0 0 / 0.12)" }}
            aria-hidden="true"
          />

          {steps.map((step, i) => (
            <AnimateIn key={step.n} delay={i * 0.12} y={20}>
              <div className="relative flex flex-col items-center text-center px-6 pb-10 md:pb-0">
                {/* Number circle */}
                <div
                  className="relative z-10 w-[4.5rem] h-[4.5rem] rounded-full flex items-center justify-center mb-6 flex-shrink-0"
                  style={{ background: "oklch(0.32 0.12 200)" }}
                >
                  <span className="font-display font-black text-white text-2xl leading-none">
                    {step.n}
                  </span>
                </div>

                <h3 className="font-display font-bold text-white text-lg leading-snug mb-3">
                  {step.heading}
                </h3>
                <p className="font-body text-white/65 text-sm leading-relaxed max-w-[220px] mx-auto">
                  {step.body}
                </p>

                {/* Mobile step connector */}
                {i < steps.length - 1 && (
                  <div
                    className="md:hidden mt-8 w-px h-10 mx-auto"
                    style={{ background: "oklch(1 0 0 / 0.12)" }}
                    aria-hidden="true"
                  />
                )}
              </div>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn delay={0.38}>
          <div className="mt-14 text-center">
            <a
              href="#packages"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-accent text-ink font-display font-semibold text-sm hover:bg-accent-deep transition-colors duration-200"
            >
              See packages & book
            </a>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
