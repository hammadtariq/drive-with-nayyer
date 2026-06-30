"use client";

import { motion, useReducedMotion } from "motion/react";

const ease = [0.16, 1, 0.3, 1] as const;

const badges = [
  "MTO Certified Instructor",
  "G2 & G Training",
  "English · Urdu · Hindi",
];

function item(i: number, reduced: boolean | null) {
  if (reduced) return {};
  return {
    initial: { opacity: 0, y: 22 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease, delay: i * 0.1 },
  };
}

export function Hero() {
  const shouldReduce = useReducedMotion();

  return (
    <section className="relative min-h-screen bg-primary flex flex-col justify-center overflow-hidden pt-16">
      {/* Subtle texture ring */}
      <div
        className="pointer-events-none absolute -top-32 -right-32 w-150 h-150 rounded-full opacity-[0.06]"
        style={{ background: "radial-gradient(circle, white 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-5 sm:px-8 w-full py-20 md:py-28 grid md:grid-cols-[1fr_auto] gap-12 md:gap-16 items-center">
        {/* Text column */}
        <div className="max-w-2xl">
          <motion.p
            className="font-body text-on-primary/70 text-sm font-semibold tracking-wide mb-5"
            {...item(0, shouldReduce)}
          >
            Mississauga, Ontario · Women-only instruction
          </motion.p>

          <motion.h1
            className="font-display font-black text-on-primary leading-[1.04] text-wrap-balance"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.25rem)", letterSpacing: "-0.025em" }}
            {...item(1, shouldReduce)}
          >
            Women-only driving lessons in Mississauga.
          </motion.h1>

          <motion.p
            className="mt-6 font-body text-on-primary/80 leading-relaxed max-w-xl"
            style={{ fontSize: "clamp(1rem, 1.5vw, 1.125rem)" }}
            {...item(2, shouldReduce)}
          >
            Learn with Nayyer Sultana, MTO Certified Instructor — G2 and G
            training in English, Urdu, and Hindi. Pickup and drop-off available
            in selected Mississauga areas.
          </motion.p>

          {/* Badge row */}
          <motion.div
            className="mt-8 flex flex-wrap gap-2.5"
            {...item(3, shouldReduce)}
          >
            {badges.map((b) => (
              <span
                key={b}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-on-primary/15 bg-white/55 text-on-primary text-sm font-body font-semibold"
              >
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                  <path d="M2.5 6.5l3 3 5-6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {b}
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            className="mt-10 flex flex-wrap gap-3"
            {...item(4, shouldReduce)}
          >
            <a
              href="#packages"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-accent text-ink font-display font-semibold text-sm hover:bg-accent-deep transition-colors duration-200"
            >
              See Packages
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M7 2.5L7 11.5M3 7.5l4 4 4-4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="https://wa.me/16477162153"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-on-primary/25 text-on-primary font-display font-semibold text-sm hover:bg-white/60 transition-colors duration-200"
            >
              WhatsApp Nayyer
            </a>
          </motion.div>
        </div>

        {/* Photo placeholder — replace with next/image once assets are available */}
        <motion.div
          className="hidden md:flex flex-col items-center gap-4"
          {...item(5, shouldReduce)}
        >
          <div
            className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden flex items-center justify-center"
            style={{ background: "var(--primary-deep)" }}
          >
            {/* Replace with:
                <Image
                  src="/nayyer-sultana.jpg"
                  alt="Nayyer Sultana, MTO Certified driving instructor"
                  fill
                  className="object-cover"
                  priority
                />
            */}
            <div className="text-center text-white/55 text-sm px-8 leading-relaxed select-none">
              Instructor photo<br />
              <span className="font-display font-semibold">Nayyer Sultana</span>
            </div>
          </div>
          <p className="text-on-primary/55 text-xs font-body text-center">
            MTO Certified Instructor
          </p>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-on-primary/40"
        {...item(6, shouldReduce)}
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
          <path d="M9 3v12M4 10l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.div>
    </section>
  );
}
