import { AnimateIn } from "./AnimateIn";

function WhatsAppIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M10 2a8 8 0 0 0-6.9 12.03L2 18l4.08-.9A8 8 0 1 0 10 2Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path
        d="M7 8c.1.6.5 1.8 1.8 3s2.4 1.7 3 1.8"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Footer() {
  return (
    <footer>
      {/* CTA section */}
      <section className="bg-primary py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <AnimateIn>
            <h2
              className="font-display font-black text-on-primary tracking-[-0.025em] text-wrap-balance"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
            >
              Ready to start driving?
            </h2>
            <p className="mt-4 font-body text-on-primary/75 max-w-md mx-auto" style={{ fontSize: "1.0625rem" }}>
              Book your first lesson online. Pay securely through Stripe — your slot is confirmed once payment goes through.
            </p>
          </AnimateIn>

          <AnimateIn delay={0.1}>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href="#packages"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-ink font-display font-bold text-base hover:bg-accent-deep transition-colors duration-200"
              >
                See packages & book
              </a>
              <a
                href="https://wa.me/16477162153"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full border border-on-primary/25 text-on-primary font-display font-semibold text-base hover:bg-white/60 transition-colors duration-200"
              >
                <WhatsAppIcon />
                Ask on WhatsApp
              </a>
            </div>
          </AnimateIn>

          <AnimateIn delay={0.18}>
            <div className="mt-14 flex flex-wrap justify-center gap-6 text-on-primary/60 font-body text-sm">
              <a href="tel:+16477162153" className="hover:text-on-primary transition-colors">
                647-716-2153
              </a>
              <a href="mailto:kooolnayyer12@gmail.com" className="hover:text-on-primary transition-colors">
                kooolnayyer12@gmail.com
              </a>
              <span>Mississauga, Ontario</span>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Bottom bar */}
      <div className="bg-ink py-5 px-5 sm:px-8">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-white/40 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} Driving With Nayyer · Women-only driving instruction · Mississauga, ON
          </p>
          <p className="font-body text-white/25 text-xs">
            MTO Certified Instructor
          </p>
        </div>
      </div>
    </footer>
  );
}
