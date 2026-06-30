import { AnimateIn } from "./AnimateIn";

// Cal.com booking URLs — replace with real event links once configured
const CAL_URLS = {
  pkg01: "#book-package-01",
  pkg02: "#book-package-02",
  pkg03: "#book-package-03",
};

const packages = [
  {
    id: "pkg01",
    number: "01",
    name: "G2 Starter",
    tagline: "Everything you need to earn your G2.",
    price: "TBD",
    note: "Pricing confirmed on booking",
    inclusions: [
      "BDE certificate (Beginner Driver Education)",
      "10 in-car lessons with Nayyer",
      "G2 road test preparation",
      "Flexible scheduling",
    ],
    href: CAL_URLS.pkg01,
    featured: false,
  },
  {
    id: "pkg02",
    number: "02",
    name: "G2 Complete",
    tagline: "Lessons plus full road test support.",
    price: "TBD",
    note: "Pricing confirmed on booking",
    inclusions: [
      "10 in-car lessons with Nayyer",
      "Training car for your road test",
      "Road test pickup and drop-off",
      "Warm-up practice before the test",
      "G2 road test preparation",
    ],
    href: CAL_URLS.pkg02,
    featured: true,
  },
  {
    id: "pkg03",
    number: "03",
    name: "G Full Course",
    tagline: "Maximum preparation for your G licence.",
    price: "TBD",
    note: "Pricing confirmed on booking",
    inclusions: [
      "15 in-car lessons with Nayyer",
      "Training car for your road test",
      "Road test pickup and drop-off",
      "Warm-up practice before the test",
      "G road test preparation",
    ],
    href: CAL_URLS.pkg03,
    featured: false,
  },
];

function CheckIcon({ featured }: { featured: boolean }) {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
      <path
        d="M2.5 6.5l3 3 5-6"
        stroke={featured ? "oklch(0.72 0.14 75)" : "currentColor"}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Packages() {
  return (
    <section id="packages" className="py-20 md:py-28 bg-surface">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <AnimateIn>
          <div className="text-center mb-14">
            <h2
              className="font-display font-bold text-ink tracking-[-0.015em] text-wrap-balance"
              style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}
            >
              Choose your package
            </h2>
            <p className="mt-3 font-body text-muted max-w-md mx-auto" style={{ fontSize: "1.0625rem" }}>
              Three packages for every stage of your licensing journey. All include one-on-one instruction with Nayyer.
            </p>
          </div>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.15fr_1fr] gap-5 md:gap-4 items-start md:items-stretch">
          {packages.map((pkg, i) => (
            <AnimateIn key={pkg.id} delay={i * 0.08} y={24}>
              <article
                className={`relative flex flex-col h-full rounded-2xl border transition-shadow duration-300 ${
                  pkg.featured
                    ? "bg-primary border-primary shadow-[0_16px_48px_oklch(0.38_0.15_200_/_0.22)] md:-mt-4 md:pb-4"
                    : "bg-bg border-primary/15 hover:shadow-[0_8px_32px_oklch(0.38_0.15_200_/_0.10)]"
                }`}
              >
                {pkg.featured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center px-4 py-1 rounded-full bg-accent text-ink text-xs font-display font-bold tracking-wide shadow">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="p-7 md:p-8 flex flex-col flex-1">
                  {/* Header */}
                  <div className="mb-6">
                    <span
                      className={`font-display font-black text-5xl leading-none tabular-nums ${
                        pkg.featured ? "text-white/20" : "text-primary/15"
                      }`}
                      aria-hidden="true"
                    >
                      {pkg.number}
                    </span>
                    <h3
                      className={`mt-2 font-display font-bold text-xl leading-snug ${
                        pkg.featured ? "text-white" : "text-ink"
                      }`}
                    >
                      {pkg.name}
                    </h3>
                    <p
                      className={`mt-1 font-body text-sm leading-snug ${
                        pkg.featured ? "text-white/70" : "text-muted"
                      }`}
                    >
                      {pkg.tagline}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="mb-6 pb-6 border-b border-current/10">
                    <p
                      className={`font-display font-black text-3xl ${
                        pkg.featured ? "text-accent" : "text-accent-deep"
                      }`}
                    >
                      {pkg.price}
                    </p>
                    <p
                      className={`mt-1 font-body text-xs ${
                        pkg.featured ? "text-white/50" : "text-muted"
                      }`}
                    >
                      {pkg.note}
                    </p>
                  </div>

                  {/* Inclusions */}
                  <ul className="flex-1 space-y-3 mb-8" aria-label={`${pkg.name} inclusions`}>
                    {pkg.inclusions.map((item) => (
                      <li
                        key={item}
                        className={`flex items-start gap-2.5 font-body text-sm leading-snug ${
                          pkg.featured ? "text-white/85" : "text-ink/80"
                        }`}
                      >
                        <span className="mt-0.5 flex-shrink-0">
                          <CheckIcon featured={pkg.featured} />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href={pkg.href}
                    className={`block w-full text-center py-3.5 rounded-xl font-display font-semibold text-sm transition-colors duration-200 ${
                      pkg.featured
                        ? "bg-accent text-ink hover:bg-accent-deep"
                        : "bg-primary-pale text-primary hover:bg-primary hover:text-white border border-primary/20"
                    }`}
                  >
                    Book {pkg.name}
                  </a>
                </div>
              </article>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn delay={0.25}>
          <p className="mt-8 text-center font-body text-muted text-sm">
            Not sure which package is right for you?{" "}
            <a
              href="https://wa.me/16477162153"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-semibold hover:underline"
            >
              Message Nayyer on WhatsApp
            </a>{" "}
            before booking.
          </p>
        </AnimateIn>
      </div>
    </section>
  );
}
