import Link from "next/link";
import type { ProjectListItem } from "@/lib/content";
import { formatDate } from "@/lib/content";

type ProjectCardProps = {
  project: ProjectListItem;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="shell-card rounded-[1.75rem] p-6 transition-transform duration-200 hover:-translate-y-1">
      <div className="flex flex-wrap items-center gap-3 text-sm text-muted">
        <span>{project.category}</span>
        <span className="h-1 w-1 rounded-full bg-border" />
        <span>{project.status}</span>
        <span className="h-1 w-1 rounded-full bg-border" />
        <span>{formatDate(project.date)}</span>
      </div>
      <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-foreground">
        <Link href={`/projects/${project.slug}`}>{project.title}</Link>
      </h3>
      <p className="mt-3 text-base leading-7 text-muted">{project.summary}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <span
            key={item}
            className="rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-black"
            style={{
              borderColor: "#9a8454",
              backgroundColor: "#d6efef",
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </article>
  );
}
