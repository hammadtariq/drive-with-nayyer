import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "./data";

export const metadata: Metadata = {
  title: "Driving Lesson Guides for Ontario Learners | Drive With Nayyer",
  description:
    "Practical guides for women learning to drive in Ontario with Nayyer Sultana, MTO Certified Instructor serving Mississauga, Oakville, Burlington, and Milton.",
};

export default function BlogIndexPage() {
  return (
    <div className="bg-bg pt-28 md:pt-32">
      <section className="px-5 sm:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 border-b border-primary/15 pb-14 md:grid-cols-[0.95fr_1.05fr] md:items-end md:pb-18">
          <div>
            <h1
              className="font-display font-black leading-[1.03] tracking-[-0.025em] text-ink text-wrap-balance"
              style={{ fontSize: "clamp(2.35rem, 6vw, 4.8rem)" }}
            >
              Driving lesson guides for Ontario learners.
            </h1>
          </div>
          <div className="max-w-xl md:justify-self-end">
            <p className="font-body text-lg leading-relaxed text-ink/80">
              Clear, practical guides for women preparing for G2, G, BDE, and road test day with Nayyer Sultana, MTO Certified Instructor.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/#packages"
                className="inline-flex min-h-11 items-center rounded-full bg-accent px-6 py-3 font-display text-sm font-bold text-ink transition-colors hover:bg-accent-deep"
              >
                See packages
              </Link>
              <a
                href="https://wa.me/16477162153"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center rounded-full border border-primary/25 px-6 py-3 font-display text-sm font-semibold text-primary-deep transition-colors hover:bg-primary-pale"
              >
                WhatsApp Nayyer
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-14 sm:px-8 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2">
          {blogPosts.map((post, index) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className={`group border border-primary/15 bg-surface transition-colors hover:border-primary/35 ${
                index === 0 ? "md:grid md:grid-cols-[0.9fr_1.1fr] md:col-span-2" : ""
              }`}
            >
              <div className={`relative overflow-hidden ${index === 0 ? "min-h-72 md:min-h-full" : "aspect-[16/10]"}`}>
                <Image
                  src={post.heroImage}
                  alt={post.imageAlt}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.035]"
                  sizes={index === 0 ? "(max-width: 768px) 100vw, 520px" : "(max-width: 768px) 100vw, 560px"}
                  priority={index === 0}
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </div>
              <article className="flex min-h-80 flex-col p-6 md:p-8">
                <p className="font-body text-sm font-semibold text-primary-deep">{post.category}</p>
                <h2 className="mt-4 font-display text-2xl font-bold leading-tight tracking-[-0.015em] text-ink text-wrap-balance md:text-3xl">
                  {post.title}
                </h2>
                <p className="mt-4 font-body text-base leading-relaxed text-ink/75">{post.description}</p>
                <div className="mt-auto pt-8">
                  <span className="inline-flex items-center gap-2 font-display text-sm font-bold text-primary-deep">
                    Read guide
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                      <path d="M3 7h8M7.5 3.5 11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
