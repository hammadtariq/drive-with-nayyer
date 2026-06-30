import { AnimateIn } from "./AnimateIn";

// Placeholder testimonials — replace with real student quotes before launch
const testimonials = [
  {
    quote:
      "Learning with Nayyer was the best decision I made. She's patient, thorough, and really understands what it feels like to be a new driver. I passed my G2 on the first try!",
    name: "Fatima A.",
    result: "Passed G2 — first attempt",
  },
  {
    quote:
      "As someone who was very nervous about driving, I needed an instructor who was calm and encouraging. Nayyer made me feel safe from day one. I actually looked forward to my lessons.",
    name: "Priya M.",
    result: "Passed G2",
  },
  {
    quote:
      "I'd had my G2 for years and kept putting off the G test. Nayyer built my confidence in just a few lessons. I booked my road test and passed. Should have called her sooner.",
    name: "Sarah K.",
    result: "Passed G — full licence",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-surface-accent">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <AnimateIn>
          <h2
            className="font-display font-bold text-ink tracking-[-0.015em] text-wrap-balance text-center mb-14"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}
          >
            What students say
          </h2>
        </AnimateIn>

        <div className="flex flex-col gap-8">
          {testimonials.map((t, i) => (
            <AnimateIn key={t.name} delay={i * 0.1} y={18}>
              <figure
                className={`${
                  i % 2 === 1 ? "md:ml-16" : "md:mr-16"
                } bg-bg rounded-2xl px-8 py-8 md:px-10`}
              >
                <blockquote>
                  <p
                    className="font-display font-semibold text-ink leading-snug text-wrap-pretty"
                    style={{ fontSize: "clamp(1.05rem, 1.8vw, 1.25rem)" }}
                  >
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <span
                    className="w-9 h-9 rounded-full bg-primary-deep flex items-center justify-center text-white font-display font-bold text-sm flex-shrink-0"
                    aria-hidden="true"
                  >
                    {t.name[0]}
                  </span>
                  <div>
                    <p className="font-body font-semibold text-ink text-sm">{t.name}</p>
                    <p className="font-body text-primary-deep text-xs font-semibold mt-0.5">
                      {t.result}
                    </p>
                  </div>
                </figcaption>
              </figure>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
