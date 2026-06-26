import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ReadingProgress } from "@/components/reading-progress";
import { getAdjacentPosts, getAllBlogPosts, getBlogPost, formatDate } from "@/lib/content";
import { absoluteUrl } from "@/lib/site-config";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllBlogPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getAllBlogPosts().find((entry) => entry.slug === slug);

  if (!post) {
    return {};
  }

  return {
    title: post.seoTitle ?? post.title,
    description: post.seoDescription ?? post.excerpt,
    alternates: {
      canonical: post.canonicalUrl ?? absoluteUrl(`/blog/${post.slug}`),
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const exists = getAllBlogPosts().some((post) => post.slug === slug);

  if (!exists) {
    notFound();
  }

  const post = await getBlogPost(slug);
  const { previous, next } = getAdjacentPosts(slug);

  return (
    <article className="mx-auto max-w-4xl">
      <ReadingProgress />
      <div className="shell-card rounded-[2.5rem] px-6 py-10 sm:px-8 sm:py-12 lg:px-12">
        <div className="flex flex-wrap items-center gap-3 text-sm text-muted">
          <span>{formatDate(post.date)}</span>
          <span className="h-1 w-1 rounded-full bg-border" />
          <span>{post.readingTime}</span>
        </div>
        <h1 className="mt-5 text-5xl font-semibold tracking-[-0.06em] text-foreground sm:text-6xl">
          {post.title}
        </h1>
        <p className="mt-6 max-w-3xl text-xl leading-9 text-muted">{post.excerpt}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-black"
              style={{
                borderColor: "#9a8454",
                backgroundColor: "#d6efef",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="article mx-auto mt-10 max-w-3xl">{post.content}</div>

      <div className="mt-14 grid gap-4 border-t border-border pt-8 sm:grid-cols-2">
        {next ? (
          <Link href={`/blog/${next.slug}`} className="shell-card rounded-[1.5rem] p-5">
            <p className="eyebrow">Newer post</p>
            <p className="mt-3 text-xl font-semibold tracking-[-0.04em] text-foreground">
              {next.title}
            </p>
          </Link>
        ) : (
          <div />
        )}
        {previous ? (
          <Link
            href={`/blog/${previous.slug}`}
            className="shell-card rounded-[1.5rem] p-5 sm:text-right"
          >
            <p className="eyebrow">Older post</p>
            <p className="mt-3 text-xl font-semibold tracking-[-0.04em] text-foreground">
              {previous.title}
            </p>
          </Link>
        ) : null}
      </div>
    </article>
  );
}
