import Image from "next/image";
import Link from "next/link";
import { ArticleCard } from "@/components/article-card";
import { ProjectCard } from "@/components/project-card";
import { Section } from "@/components/section";
import { getAllBlogPosts, getAllProjects } from "@/lib/content";
import { siteConfig } from "@/lib/site-config";

const credibility = ["NYU MBA (STEM)", "Ex-attorney", "B2B & fintech", "AI / SQL / Blockchain"];

export default function Home() {
  const featuredPosts = getAllBlogPosts().slice(0, 3);
  const featuredProjects = getAllProjects().slice(0, 3);

  return (
    <div className="space-y-8">
      <section className="shell-card overflow-hidden rounded-[2.5rem] px-6 py-10 sm:px-8 sm:py-12 lg:px-12">
        <div className="relative grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
          <div>
            <p className="eyebrow">Product strategy and execution</p>
            <h1 className="mt-4 max-w-4xl text-5xl font-semibold tracking-[-0.06em] text-black sm:text-6xl lg:text-7xl">
              Building clear product strategy for AI, fintech, and regulated systems.
            </h1>
            <p className="kicker-serif mt-6 max-w-3xl text-2xl leading-9 text-slate-900">
              {siteConfig.author.summary}
            </p>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-900">
              I help teams make sharper product decisions, turn messy inputs into executable roadmaps,
              and build operating rhythms that hold up in complex environments.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/consulting"
                className="rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-transform duration-200 hover:-translate-y-0.5"
              >
                {siteConfig.consulting.primaryCtaLabel}
              </Link>
              <Link
                href="/blog"
                className="rounded-full border px-6 py-3 text-sm font-semibold text-black transition-transform duration-200 hover:-translate-y-0.5"
                style={{
                  borderColor: "#9a8454",
                  backgroundColor: "#d6efef",
                }}
              >
                Read the writing
              </Link>
            </div>
          </div>
          <div className="grid gap-4 rounded-[2rem] border border-border/80 bg-[linear-gradient(180deg,rgba(15,139,141,0.08),rgba(15,23,42,0.02))] p-6">
            <div className="stat-label rounded-[1.5rem] p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
                Positioning
              </p>
              <p className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-black">
                {siteConfig.author.role}
              </p>
            </div>
            <div className="stat-label rounded-[1.5rem] p-5">
              <p className="text-sm text-slate-900">
                Strategy, analysis, and execution for product teams that need both structure and
                judgment.
              </p>
            </div>
            <div className="stat-label rounded-[1.5rem] p-5">
              <div className="flex items-center gap-4">
                <div className="relative h-20 w-20 overflow-hidden rounded-[1.25rem] border border-border">
                  <Image
                    src={siteConfig.assets.headshot}
                    alt="Professional headshot of Abhyudai Chauhan"
                    width={160}
                    height={160}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[color:var(--accent-secondary)]">
                    Credential panel
                  </p>
                  <p className="mt-2 text-lg font-semibold tracking-[-0.03em] text-black">
                    NYU MBA (STEM), ex-attorney, product operator
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative mt-10 flex flex-wrap gap-3">
          {credibility.map((item) => (
            <span
              key={item}
              className="rounded-full border px-4 py-2 text-sm font-medium text-black"
              style={{
                borderColor: "#9a8454",
                backgroundColor: "#d6efef",
              }}
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="shell-card rounded-[2rem] p-6">
          <p className="eyebrow">Focus areas</p>
          <div className="mt-5 flex flex-wrap gap-3">
            {siteConfig.focusAreas.map((item) => (
              <span
                key={item}
                className="rounded-full border px-4 py-2 text-sm font-semibold text-black"
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
        <div className="shell-card rounded-[2rem] p-6">
          <p className="eyebrow-secondary">Featured insight</p>
          <blockquote className="mt-4 kicker-serif text-2xl leading-9 text-foreground">
            “{siteConfig.featuredInsight.quote}”
          </blockquote>
          <p className="mt-4 text-sm font-semibold uppercase tracking-[0.16em] text-muted">
            {siteConfig.featuredInsight.attribution}
          </p>
        </div>
      </section>

      <Section
        eyebrow="Approach"
        title="A portfolio built around insight, operating discipline, and decision quality."
        description="The site is structured to do three things well: explain the work clearly, surface original writing, and make it easy to start a conversation."
      >
        <div className="grid gap-5 md:grid-cols-3">
          {[
            {
              title: "User-centric product thinking",
              body: "Every recommendation starts with the user problem, the business context, and the evidence needed to make the next decision confidently.",
            },
            {
              title: "Data-informed execution",
              body: "SQL, metrics, and experimentation are treated as working tools for prioritization rather than after-the-fact reporting.",
            },
            {
              title: "Comfort in complexity",
              body: "Regulated environments, cross-functional tradeoffs, and ambiguous initiatives all benefit from a calmer operating model.",
            },
          ].map((item) => (
            <div key={item.title} className="shell-card rounded-[1.75rem] p-6">
              <h2 className="text-xl font-semibold tracking-[-0.04em] text-foreground">
                {item.title}
              </h2>
              <p className="mt-3 text-base leading-7 text-muted">{item.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Selected writing"
        title="Writing that translates strategy into decisions teams can use."
        description="Long-form posts are the primary knowledge surface of the site, designed to carry a thoughtful editorial voice rather than short social fragments."
      >
        <div className="grid gap-5 lg:grid-cols-3">
          {featuredPosts.map((post) => (
            <ArticleCard key={post.slug} post={post} />
          ))}
        </div>
        <div className="mt-6">
          <Link
            href="/blog"
            className="text-sm font-semibold uppercase tracking-[0.16em] text-foreground underline"
          >
            Browse all writing
          </Link>
        </div>
      </Section>

      <Section
        eyebrow="Project gallery"
        title="A curated set of independent projects and concept builds."
        description="Projects stay selective and high-signal. The emphasis is on framing, reasoning, and outcomes rather than volume."
      >
        <div className="grid gap-5 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Consulting"
        title="A low-friction path to a first conversation."
        description="The launch offer keeps booking intentionally simple: one free consult, one clear CTA, and no heavyweight operational setup until the site is fully ready to deploy."
      >
        <div className="shell-card grid gap-6 rounded-[2rem] p-6 lg:grid-cols-[1fr_0.75fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
              Free consult
            </p>
            <h3 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-foreground">
              A focused intro call for product, AI, data, and fintech questions.
            </h3>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-muted">
              Use the call to talk through product direction, prioritization, stakeholder alignment,
              regulated product questions, or where analytics should shape the next decision.
            </p>
          </div>
          <div className="rounded-[1.75rem] border border-border bg-white/80 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
              Launch offer
            </p>
            <p className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-foreground">
              {siteConfig.consulting.activeOffer.name}
            </p>
            <p className="mt-2 text-sm text-muted">{siteConfig.consulting.activeOffer.duration}</p>
            <p className="mt-4 text-base leading-7 text-muted">
              {siteConfig.consulting.activeOffer.description}
            </p>
            <Link
              href="/consulting"
              className="mt-6 inline-flex rounded-full bg-foreground px-5 py-3 text-sm font-semibold text-background transition-transform duration-200 hover:-translate-y-0.5"
            >
              Open booking details
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}
