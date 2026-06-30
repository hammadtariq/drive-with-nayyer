"use client";

import { useRef, useEffect } from "react";
import { useReducedMotion } from "motion/react";
import { AnimatedHeading } from "./AnimatedHeading";
import { FadeIn } from "./FadeIn";

export function Hero() {
  const shouldReduce = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (shouldReduce && videoRef.current) {
      videoRef.current.pause();
    }
  }, [shouldReduce]);

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background video — no overlay */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden="true"
      >
        <source src="/woman-driving2.mp4" type="video/mp4" />
      </video>

      {/* Content pinned to bottom */}
      <div className="relative z-10 flex-1 flex flex-col justify-end px-4 sm:px-6 md:px-12 lg:px-16 pb-12 lg:pb-16">
        <div className="lg:grid lg:grid-cols-2 lg:items-end gap-10">

          {/* Left — heading, subtext, CTAs */}
          <div>
            <FadeIn delay={0} duration={800}>
              <p className="font-body text-white/65 text-sm font-semibold tracking-wide mb-5"
                style={{ textShadow: "0 1px 8px rgba(0,0,0,0.5)" }}>
                Mississauga, Ontario · Women-only instruction
              </p>
            </FadeIn>

            <AnimatedHeading
              text={"Women-only driving\nlessons in Mississauga."}
              className="text-white font-display font-light mb-5"
              style={{
                fontSize: "clamp(2.5rem, 5.5vw, 4.25rem)",
                letterSpacing: "-0.04em",
                lineHeight: 1.06,
                textShadow: "0 2px 20px rgba(0,0,0,0.55)",
              }}
              delay={200}
              charDelay={30}
            />

            {/* Credential badges */}
            <FadeIn delay={750} duration={900} className="flex flex-wrap gap-2.5 mb-6">
              {["MTO Certified Instructor", "G2 & G Training", "English · Urdu · Hindi"].map((b) => (
                <span
                  key={b}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-accent/40 bg-accent/15 text-white text-sm font-body font-semibold"
                  style={{ textShadow: "0 1px 6px rgba(0,0,0,0.4)" }}
                >
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                    <path d="M2.5 6.5l3 3 5-6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {b}
                </span>
              ))}
            </FadeIn>

            <FadeIn delay={1000} duration={1000}>
              <p
                className="text-base md:text-lg text-white/85 mb-6 max-w-lg"
                style={{ textShadow: "0 1px 10px rgba(0,0,0,0.5)" }}
              >
                Learn with Nayyer Sultana, MTO Certified Instructor — G2 and G
                training in English, Urdu, and Hindi. Pickup and drop-off available
                in selected Mississauga areas.
              </p>
            </FadeIn>

            <FadeIn delay={1300} duration={1000} className="flex flex-wrap gap-3">
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
                className="liquid-glass inline-flex items-center border border-white/25 text-white px-7 py-3.5 rounded-full font-display font-semibold text-sm hover:bg-white/15 transition-colors duration-200"
              >
                WhatsApp Nayyer
              </a>
            </FadeIn>
          </div>

          {/* Right — glass tag, lg+ only */}
          <FadeIn delay={1500} duration={1000} className="hidden lg:flex items-end justify-end">
            <div className="liquid-glass border border-accent/30 px-6 py-3 rounded-xl">
              <p
                className="text-lg md:text-xl lg:text-2xl text-white font-display font-light"
                style={{ textShadow: "0 1px 8px rgba(0,0,0,0.4)" }}
              >
                G2. G Licence. Mississauga.
              </p>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
