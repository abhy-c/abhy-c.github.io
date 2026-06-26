import type { Metadata } from "next";
import { ProjectCard } from "@/components/project-card";
import { Section } from "@/components/section";
import { getAllProjects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A curated gallery of selected independent projects and concept builds focused on product strategy, analytics, and fintech workflows.",
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <div className="space-y-8">
      <section className="shell-card rounded-[2.5rem] px-6 py-10 sm:px-8 sm:py-12 lg:px-12">
        <p className="eyebrow">Projects</p>
        <h1 className="mt-4 max-w-4xl text-5xl font-semibold tracking-[-0.06em] text-foreground sm:text-6xl">
          Select independent builds that show how strategy becomes execution.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">
          This gallery stays intentionally focused. Each entry is designed as a high-signal case study
          rather than a large inventory of side projects.
        </p>
      </section>

      <Section
        eyebrow="Gallery"
        title="Curated work"
        description="Project entries emphasize framing, operating model, and outcomes so visitors can quickly understand the thinking behind each build."
      >
        <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Section>
    </div>
  );
}
