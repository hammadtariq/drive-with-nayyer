import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPost, type BlogSection } from "../data";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {
      title: "Blog guide not found | Drive With Nayyer",
    };
  }

  return {
    title: `${post.title} | Drive With Nayyer`,
    description: post.description,
    keywords: [post.primaryKeyword, ...post.secondaryKeywords],
    openGraph: {
      title: `${post.title} | Drive With Nayyer`,
      description: post.description,
      type: "article",
      images: [
        {
          url: post.heroImage,
          alt: post.imageAlt,
        },
      ],
    },
  };
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8.2 6.4 11.5 13 4.8" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function renderBlock(block: BlogSection, sectionHeading: string, index: number) {
  if (block.type === "paragraph") {
    return (
      <p key={`${sectionHeading}-${index}`} className="font-body text-[1.0625rem] leading-[1.78] text-ink/82 md:text-lg">
        {block.text}
      </p>
    );
  }

  return (
    <ul key={`${sectionHeading}-${index}`} className="grid gap-3 py-2">
      {block.items.map((item) => (
        <li key={item} className="flex gap-3 font-body text-base leading-relaxed text-ink/80 md:text-[1.0625rem]">
          <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-pale text-primary-deep">
            <CheckIcon />
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: post.title,
        description: post.description,
        image: post.heroImage,
        author: {
          "@type": "Organization",
          name: "Drive With Nayyer",
        },
        publisher: {
          "@type": "Organization",
          name: "Drive With Nayyer",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: post.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  const relatedPosts = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 3);

  return (
    <article className="bg-bg pt-28 md:pt-32">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <header className="px-5 sm:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 border-b border-primary/15 pb-12 md:grid-cols-[1fr_0.82fr] md:items-end md:pb-16">
          <div>
            <Link href="/blog" className="font-body text-sm font-semibold text-primary-deep hover:underline">
              Blog guides
            </Link>
            <h1
              className="mt-5 font-display font-black leading-[1.03] tracking-[-0.025em] text-ink text-wrap-balance"
              style={{ fontSize: "clamp(2.25rem, 6vw, 4.6rem)" }}
            >
              {post.title}
            </h1>
            <p className="mt-6 max-w-2xl font-body text-lg leading-relaxed text-ink/78 md:text-xl">
              {post.description}
            </p>
          </div>

          <aside className="bg-primary p-6 text-on-primary md:p-7">
            <p className="font-body text-sm font-semibold text-on-primary/65">Best for</p>
            <p className="mt-3 font-display text-2xl font-bold leading-tight tracking-[-0.015em]">
              {post.category}
            </p>
            <p className="mt-5 font-body text-sm leading-relaxed text-on-primary/72">{post.searchIntent}</p>
          </aside>
        </div>
      </header>

      <div className="px-5 py-8 sm:px-8 md:py-12">
        <div className="relative mx-auto h-[330px] max-w-6xl overflow-hidden bg-surface md:h-[520px]">
          <Image src={post.heroImage} alt={post.imageAlt} fill className="object-cover object-top" sizes="100vw" priority loading="eager" />
        </div>
      </div>

      <div className="px-5 pb-16 sm:px-8 md:pb-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,1fr)_18rem]">
          <div className="max-w-[72ch]">
            <div className="space-y-5 border-b border-primary/15 pb-10">
              {post.intro.map((paragraph) => (
                <p key={paragraph} className="font-body text-[1.0625rem] leading-[1.78] text-ink/82 md:text-lg">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="space-y-12 py-12">
              {post.sections.map((section) => (
                <section key={section.heading} className="scroll-mt-28">
                  <h2 className="font-display text-3xl font-bold leading-tight tracking-[-0.015em] text-ink text-wrap-balance">
                    {section.heading}
                  </h2>
                  <div className="mt-5 space-y-5">{section.body.map((block, index) => renderBlock(block, section.heading, index))}</div>
                </section>
              ))}
            </div>

            <section className="border-y border-primary/15 py-12">
              <h2 className="font-display text-3xl font-bold tracking-[-0.015em] text-ink">FAQ</h2>
              <div className="mt-7 divide-y divide-primary/12">
                {post.faqs.map((faq) => (
                  <div key={faq.question} className="py-6 first:pt-0 last:pb-0">
                    <h3 className="font-display text-xl font-semibold leading-snug text-ink">{faq.question}</h3>
                    <p className="mt-2 font-body text-base leading-relaxed text-ink/75">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-12 bg-primary p-7 text-on-primary md:p-9">
              <h2 className="font-display text-3xl font-black leading-tight tracking-[-0.02em] text-wrap-balance">
                {post.cta}
              </h2>
              <p className="mt-4 max-w-xl font-body text-base leading-relaxed text-on-primary/75">
                Message Nayyer with your city, licence level, and road test date if you have one.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="https://wa.me/16477162153"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center rounded-full bg-accent px-6 py-3 font-display text-sm font-bold text-ink transition-colors hover:bg-accent-deep"
                >
                  WhatsApp Nayyer
                </a>
                <Link
                  href="/#packages"
                  className="inline-flex min-h-11 items-center rounded-full border border-on-primary/25 px-6 py-3 font-display text-sm font-semibold text-on-primary transition-colors hover:bg-white/60"
                >
                  See packages
                </Link>
              </div>
            </section>
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="border border-primary/15 bg-surface p-6">
              <h2 className="font-display text-lg font-bold text-ink">Guide topics</h2>
              <ul className="mt-5 flex flex-col gap-3">
                {post.sections.map((section) => (
                  <li key={section.heading} className="font-body text-sm leading-snug text-ink/70">
                    {section.heading}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-5 border border-primary/15 bg-bg p-6">
              <h2 className="font-display text-lg font-bold text-ink">Related guides</h2>
              <div className="mt-4 grid gap-4">
                {relatedPosts.map((related) => (
                  <Link key={related.slug} href={`/blog/${related.slug}`} className="group block">
                    <p className="font-body text-xs font-semibold text-primary-deep">{related.category}</p>
                    <h3 className="mt-1 font-display text-base font-semibold leading-snug text-ink group-hover:underline">
                      {related.title}
                    </h3>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}
