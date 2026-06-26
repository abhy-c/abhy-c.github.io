import type { Metadata } from "next";
import { ArticleCard } from "@/components/article-card";
import { Section } from "@/components/section";
import { getAllBlogPosts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Essays and notes on product strategy, AI, data-informed execution, regulated systems, and fintech decision making.",
};

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <div className="space-y-8">
      <section className="shell-card rounded-[2.5rem] px-6 py-10 sm:px-8 sm:py-12 lg:px-12">
        <p className="eyebrow">Writing</p>
        <h1 className="mt-4 max-w-4xl text-5xl font-semibold tracking-[-0.06em] text-foreground sm:text-6xl">
          Essays on product, AI, analytics, and the discipline behind better decisions.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">
          The writing side of the portfolio is designed to scale. Posts are stored locally, rendered
          through MDX, and organized for a long-term publishing cadence rather than a launch-only splash.
        </p>
      </section>

      <Section
        eyebrow="Archive"
        title="Recent posts"
        description="A long-form index optimized for credibility and readability rather than growth hacks."
      >
        <div className="grid gap-5 lg:grid-cols-2">
          {posts.map((post) => (
            <ArticleCard key={post.slug} post={post} />
          ))}
        </div>
      </Section>
    </div>
  );
}
