import { AnimateIn } from "./AnimateIn";

const credentials = [
  "MTO Certified Driving Instructor",
  "G2 and G road test training",
  "Lessons in English, Urdu, and Hindi",
  "Pickup and drop-off in selected Mississauga areas",
  "Women-only instruction — a safe, comfortable environment",
];

export function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-bg">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Photo */}
          <AnimateIn y={28}>
            <div className="relative">
              {/* Replace with:
                  <Image
                    src="/nayyer-about.jpg"
                    alt="Nayyer Sultana with her training car in Mississauga"
                    width={560}
                    height={640}
                    className="w-full rounded-2xl object-cover"
                  />
              */}
              <div
                className="w-full aspect-[7/8] rounded-2xl flex flex-col items-center justify-center gap-3"
                style={{ background: "var(--surface)" }}
              >
                <div
                  className="w-24 h-24 rounded-full flex items-center justify-center text-white font-display font-black text-3xl"
                  style={{ background: "var(--primary)" }}
                  aria-hidden="true"
                >
                  N
                </div>
                <p className="text-muted text-sm font-body text-center px-8 leading-relaxed">
                  Add a photo of Nayyer<br />with the training car here
                </p>
              </div>

              {/* Floating credential badge */}
              <div className="absolute -bottom-5 -right-5 md:-right-8 bg-accent rounded-2xl px-5 py-4 shadow-lg">
                <p className="font-display font-black text-ink text-2xl leading-none">10+</p>
                <p className="font-body text-ink/70 text-xs font-semibold mt-0.5">Years instructing</p>
              </div>
            </div>
          </AnimateIn>

          {/* Text */}
          <AnimateIn delay={0.1} y={24}>
            <p className="text-primary font-body font-semibold text-sm mb-3">
              Meet your instructor
            </p>
            <h2
              className="font-display font-bold text-ink leading-tight tracking-[-0.015em] text-wrap-balance"
              style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}
            >
              Nayyer Sultana —<br />MTO Certified Instructor
            </h2>
            <p className="mt-5 font-body text-ink/80 leading-relaxed" style={{ fontSize: "1.0625rem" }}>
              Nayyer Sultana has been helping women gain the confidence and
              skills to drive safely on Ontario roads. Her lessons are calm,
              structured, and patient — designed for first-time drivers and
              experienced drivers preparing for the G test alike.
            </p>
            <p className="mt-4 font-body text-ink/80 leading-relaxed" style={{ fontSize: "1.0625rem" }}>
              Nayyer's women-only approach creates a space where students feel
              truly comfortable asking questions, making mistakes, and building
              real confidence — not just passing a test.
            </p>

            <ul className="mt-8 space-y-3" aria-label="Credentials">
              {credentials.map((c) => (
                <li key={c} className="flex items-start gap-3 font-body text-ink/80 text-sm">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-primary-pale text-primary shrink-0 flex items-center justify-center">
                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true">
                      <path d="M2 5.5l2.5 2.5 4.5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {c}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="https://wa.me/16477162153"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-primary text-white font-display font-semibold text-sm hover:bg-primary-light transition-colors duration-200"
              >
                <WhatsAppIcon />
                Message on WhatsApp
              </a>
              <a
                href="tel:+16477162153"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-primary/25 text-primary font-display font-semibold text-sm hover:bg-primary-pale transition-colors duration-200"
              >
                647-716-2153
              </a>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M8 1.5A6.5 6.5 0 0 0 2.08 10.9L1.5 14.5l3.72-.57A6.5 6.5 0 1 0 8 1.5Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path
        d="M5.5 6.25c.1.5.45 1.5 1.5 2.5s2 1.4 2.5 1.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}
