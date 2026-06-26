import Link from "next/link";
import type { BlogListItem } from "@/lib/content";
import { formatDate } from "@/lib/content";

type ArticleCardProps = {
  post: BlogListItem;
};

export function ArticleCard({ post }: ArticleCardProps) {
  return (
    <article className="shell-card rounded-[1.75rem] p-6 transition-transform duration-200 hover:-translate-y-1">
      <div className="flex flex-wrap items-center gap-3 text-sm text-muted">
        <span>{formatDate(post.date)}</span>
        <span className="h-1 w-1 rounded-full bg-border" />
        <span>{post.readingTime}</span>
      </div>
      <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-foreground">
        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
      </h3>
      <p className="mt-3 text-base leading-7 text-muted">{post.excerpt}</p>
      <div className="mt-5 flex flex-wrap gap-2">
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
    </article>
  );
}
