import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "../blog/data";
import { AnimateIn } from "./AnimateIn";

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path
        d="M3 7h8M7.5 3.5 11 7l-3.5 3.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function BlogHighlights() {
  const [featured, ...guides] = blogPosts;

  return (
    <section className="bg-bg py-20 md:py-28" aria-labelledby="blog-highlights-title">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <AnimateIn>
          <div className="flex flex-col gap-5 border-b border-primary/15 pb-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <h2
                id="blog-highlights-title"
                className="font-display font-bold leading-tight tracking-[-0.015em] text-ink text-wrap-balance"
                style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}
              >
                Read before you book.
              </h2>
              <p className="mt-3 max-w-xl font-body text-[1.0625rem] leading-relaxed text-ink/75">
                Short Ontario driving guides for choosing the right package, preparing for G2, and feeling ready for road test day.
              </p>
            </div>
            <Link
              href="/blog"
              className="inline-flex min-h-11 w-fit items-center gap-2 rounded-full border border-primary/25 px-6 py-3 font-display text-sm font-semibold text-primary-deep transition-colors hover:bg-primary-pale"
            >
              View all guides
              <ArrowIcon />
            </Link>
          </div>
        </AnimateIn>

        <div className="mt-8 grid gap-5 lg:grid-cols-[1.12fr_0.88fr]">
          <AnimateIn y={24}>
            <Link
              href={`/blog/${featured.slug}`}
              className="group grid min-h-full overflow-hidden border border-primary/15 bg-surface transition-colors hover:border-primary/35 md:grid-cols-[0.9fr_1fr]"
            >
              <div className="relative min-h-72 overflow-hidden">
                <Image
                  src={featured.heroImage}
                  alt={featured.imageAlt}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.035]"
                  sizes="(max-width: 1024px) 100vw, 520px"
                />
              </div>
              <article className="flex flex-col p-6 md:p-8">
                <p className="font-body text-sm font-semibold text-primary-deep">{featured.category}</p>
                <h3 className="mt-4 font-display text-2xl font-bold leading-tight tracking-[-0.015em] text-ink text-wrap-balance md:text-3xl">
                  {featured.title}
                </h3>
                <p className="mt-4 font-body text-base leading-relaxed text-ink/75">{featured.description}</p>
                <span className="mt-auto inline-flex items-center gap-2 pt-8 font-display text-sm font-bold text-primary-deep">
                  Read guide
                  <ArrowIcon />
                </span>
              </article>
            </Link>
          </AnimateIn>

          <div className="grid gap-4">
            {guides.map((post, index) => (
              <AnimateIn key={post.slug} delay={0.08 + index * 0.04} y={18}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group grid grid-cols-[6.5rem_minmax(0,1fr)] overflow-hidden border border-primary/15 bg-bg transition-colors hover:border-primary/35 hover:bg-surface sm:grid-cols-[8rem_minmax(0,1fr)]"
                >
                  <div className="relative min-h-32 overflow-hidden">
                    <Image
                      src={post.heroImage}
                      alt={post.imageAlt}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                      sizes="128px"
                    />
                  </div>
                  <article className="flex min-h-32 flex-col justify-center p-4 sm:p-5">
                    <p className="font-body text-xs font-semibold text-primary-deep">{post.category}</p>
                    <h3 className="mt-2 font-display text-base font-bold leading-snug text-ink text-wrap-balance sm:text-lg">
                      {post.title}
                    </h3>
                    <span className="mt-3 inline-flex items-center gap-2 font-display text-xs font-bold text-primary-deep">
                      Open guide
                      <ArrowIcon />
                    </span>
                  </article>
                </Link>
              </AnimateIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
