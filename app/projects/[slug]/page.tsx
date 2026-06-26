import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllProjects, getProject, formatDate } from "@/lib/content";
import { absoluteUrl } from "@/lib/site-config";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getAllProjects().find((entry) => entry.slug === slug);

  if (!project) {
    return {};
  }

  return {
    title: project.title,
    description: project.summary,
    alternates: {
      canonical: absoluteUrl(`/projects/${project.slug}`),
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const exists = getAllProjects().some((project) => project.slug === slug);

  if (!exists) {
    notFound();
  }

  const project = await getProject(slug);

  return (
    <article className="mx-auto max-w-5xl">
      <div className="shell-card rounded-[2.5rem] px-6 py-10 sm:px-8 sm:py-12 lg:px-12">
        <div className="flex flex-wrap items-center gap-3 text-sm text-muted">
          <span>{project.category}</span>
          <span className="h-1 w-1 rounded-full bg-border" />
          <span>{project.status}</span>
          <span className="h-1 w-1 rounded-full bg-border" />
          <span>{formatDate(project.date)}</span>
        </div>
        <h1 className="mt-5 text-5xl font-semibold tracking-[-0.06em] text-foreground sm:text-6xl">
          {project.title}
        </h1>
        <p className="mt-6 max-w-3xl text-xl leading-9 text-muted">{project.summary}</p>
        <div className="mt-6 flex flex-wrap gap-2">
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
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <aside className="space-y-4">
          {[
            { label: "Role", value: project.role },
            { label: "Problem", value: project.problem },
            { label: "Approach", value: project.approach },
            { label: "Outcome", value: project.outcome },
          ].map((item) => (
            <div key={item.label} className="shell-card rounded-[1.5rem] p-5">
              <p className="eyebrow">{item.label}</p>
              <p className="mt-3 text-base leading-7 text-foreground">{item.value}</p>
            </div>
          ))}
          <div className="flex flex-wrap gap-3">
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                className="rounded-full bg-foreground px-5 py-3 text-sm font-semibold text-background"
              >
                Live link
              </a>
            ) : null}
            {project.repoUrl ? (
              <a
                href={project.repoUrl}
                className="rounded-full border px-5 py-3 text-sm font-semibold text-black"
                style={{
                  borderColor: "#9a8454",
                  backgroundColor: "#d6efef",
                }}
              >
                Repository
              </a>
            ) : null}
            <Link
              href="/consulting"
              className="rounded-full border px-5 py-3 text-sm font-semibold text-black"
              style={{
                borderColor: "#9a8454",
                backgroundColor: "#d6efef",
              }}
            >
              Discuss the work
            </Link>
          </div>
        </aside>
        <div className="article shell-card rounded-[2rem] p-6 sm:p-8">{project.content}</div>
      </div>
    </article>
  );
}
