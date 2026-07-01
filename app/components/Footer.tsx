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

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M5.2 2.4 6.5 5c.18.36.09.79-.22 1.05l-.9.76a7.8 7.8 0 0 0 3.8 3.8l.76-.9c.26-.31.69-.4 1.05-.22l2.61 1.3c.39.19.59.63.48 1.05l-.35 1.32c-.12.47-.55.79-1.03.76C6.92 13.52 2.48 9.08 2.08 3.3c-.03-.48.29-.91.76-1.03l1.32-.35c.42-.11.86.09 1.04.48Z"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <rect x="2" y="3.5" width="12" height="9" rx="1.8" stroke="currentColor" strokeWidth="1.35" />
      <path
        d="m3.25 5.25 4.08 3.22c.39.31.95.31 1.34 0l4.08-3.22"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M12.5 6.8c0 3.25-4.5 6.7-4.5 6.7S3.5 10.05 3.5 6.8a4.5 4.5 0 1 1 9 0Z"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinejoin="round"
      />
      <circle cx="8" cy="6.8" r="1.45" stroke="currentColor" strokeWidth="1.35" />
    </svg>
  );
}

function LogoMark() {
  return (
    <svg width="20" height="29" viewBox="0 0 40 58" fill="none" aria-hidden="true">
      <path d="M4 56 L24 2" stroke="oklch(0.630 0.145 10)" strokeWidth="8" strokeLinecap="round" />
      <path d="M16 56 L36 2" stroke="oklch(0.630 0.145 10)" strokeWidth="8" strokeLinecap="round" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <rect x="2" y="2" width="14" height="14" rx="4.2" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="9" cy="9" r="3.35" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="13" cy="5" r="0.95" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M10.75 6.2h-1.1c-.52 0-.75.25-.75.8v1.1H10.6l-.2 1.62H8.9V13H7.2V9.72H6V8.1h1.2V6.85c0-1.24.68-1.98 2.05-1.98h1.5V6.2Z"
        fill="currentColor"
      />
    </svg>
  );
}

function GoogleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 18 18" aria-hidden="true" className="shrink-0">
      <path
        fill="#4285F4"
        d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615Z"
      />
      <path
        fill="#34A853"
        d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18Z"
      />
      <path
        fill="#FBBC05"
        d="M3.964 10.706A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.706V4.962H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.038l3.007-2.332Z"
      />
      <path
        fill="#EA4335"
        d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.962L3.964 7.294C4.672 5.167 6.656 3.58 9 3.58Z"
      />
    </svg>
  );
}

const socialLinks = [
  { href: "https://www.instagram.com/drivewnayyyyer/", label: "Instagram", Icon: InstagramIcon },
  {
    href: "https://www.facebook.com/profile.php?id=61579570078643&mibextid=wwXIfr&rdid=Y8f01fowpoiiEpDY&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1EJsFxSewg%2F%3Fmibextid%3DwwXIfr#",
    label: "Facebook",
    Icon: FacebookIcon,
  },
];

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
        </div>
      </section>

      {/* Footer band */}
      <div className="bg-ink">
        <AnimateIn className="max-w-6xl mx-auto px-5 sm:px-8 py-16 md:py-20">
          <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-[1.2fr_1fr_1fr]">
            {/* Brand */}
            <div>
              <a href="#" className="inline-flex items-center gap-2.5" aria-label="Drive With Nayyer home">
                <LogoMark />
                <span className="flex flex-col justify-center leading-none">
                  <span className="font-body text-[0.55rem] uppercase tracking-[0.35em] text-white/55">
                    Drive With
                  </span>
                  <span className="mt-1 font-display text-base font-black uppercase tracking-[0.16em] text-white">
                    Nayyer
                  </span>
                </span>
              </a>
              <p className="mt-5 font-body text-white/75 text-sm leading-relaxed max-w-[26ch]">
                Women-only driving instruction in Ontario, Canada — MTO Certified.
              </p>
              <div className="mt-6 flex items-center gap-3">
                {socialLinks.map(({ href, label, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-11 h-11 inline-flex items-center justify-center rounded-full border border-white/15 text-white/70 hover:text-white hover:border-white/30 hover:bg-white/10 transition-colors duration-200"
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-body text-white/45 text-xs font-semibold uppercase tracking-widest mb-4">
                Contact
              </h3>
              <ul className="flex flex-col gap-3">
                <li>
                  <a
                    href="tel:+16477162153"
                    className="inline-flex items-center gap-2.5 font-body text-white/75 hover:text-white text-sm transition-colors"
                  >
                    <PhoneIcon />
                    647-716-2153
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:Koolnayyer12@gmail.com"
                    className="inline-flex items-center gap-2.5 font-body text-white/75 hover:text-white text-sm transition-colors"
                  >
                    <MailIcon />
                    Koolnayyer12@gmail.com
                  </a>
                </li>
                <li className="inline-flex items-start gap-2.5 font-body text-white/75 text-sm">
                  <span className="mt-0.5">
                    <MapPinIcon />
                  </span>
                  Mississauga · Oakville · Burlington · Milton
                </li>
              </ul>
            </div>

            {/* Trust / reviews */}
            <div>
              <h3 className="font-body text-white/45 text-xs font-semibold uppercase tracking-widest mb-4">
                Reviews
              </h3>
              <a
                href="https://share.google/ZtFJN7vv0q9oZPRgT"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-start gap-3 rounded-xl border border-white/15 bg-white/5 px-4 py-3.5 hover:bg-white/10 hover:border-white/25 transition-colors duration-200 max-w-full"
              >
                <GoogleIcon />
                <span>
                  <span className="block font-body font-semibold text-white text-sm">
                    Read reviews on Google
                  </span>
                  <span className="block font-body text-white/65 text-xs mt-0.5 leading-snug">
                    Genuine feedback, straight from real students
                  </span>
                </span>
              </a>
            </div>
          </div>
        </AnimateIn>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-5 px-5 sm:px-8">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="font-body text-white/55 text-xs text-center sm:text-left">
              © {new Date().getFullYear()} Drive With Nayyer · Women-only driving instruction in Ontario, Canada
            </p>
            <p className="font-body text-white/55 text-xs">
              MTO Certified Instructor
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
