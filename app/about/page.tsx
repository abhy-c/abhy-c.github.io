import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/section";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About",
  description:
    "Background, working style, and operating principles behind the portfolio and consulting practice.",
};

const timeline = [
  {
    title: "Product strategy in complex environments",
    body: "Bringing structure to B2B, fintech, and high-context product work where tradeoffs matter as much as features.",
  },
  {
    title: "Legal training translated into product judgment",
    body: "An ex-attorney perspective means sharper framing, stronger assumptions, and better handling of risk, ambiguity, and stakeholder pressure.",
  },
  {
    title: "Data-informed execution",
    body: "Using SQL, operational metrics, and evidence-led prioritization to make decisions more durable and less personality-driven.",
  },
];

export default function AboutPage() {
  return (
    <div className="space-y-8">
      <section className="shell-card rounded-[2.5rem] px-6 py-10 sm:px-8 sm:py-12 lg:px-12">
        <div className="relative grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div className="mx-auto w-full max-w-sm overflow-hidden rounded-[2rem] border border-border bg-white/70 shadow-[0_30px_60px_-40px_rgba(15,23,42,0.4)]">
            <Image
              src={siteConfig.assets.headshot}
              alt="Professional headshot of Abhyudai Chauhan"
              width={900}
              height={1350}
              priority
              className="h-auto w-full object-cover object-center"
              sizes="(min-width: 1024px) 24rem, 100vw"
            />
          </div>
          <div>
            <p className="eyebrow">About</p>
            <h1 className="mt-4 max-w-4xl text-5xl font-semibold tracking-[-0.06em] text-foreground sm:text-6xl">
              Product leadership with an operator’s bias toward clarity and follow-through.
            </h1>
            <p className="kicker-serif mt-6 max-w-3xl text-2xl leading-9 text-muted">
              {siteConfig.author.bio}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={siteConfig.assets.resume}
                className="rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background"
              >
                Download resume
              </a>
              <Link
                href="/consulting"
                className="rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background"
              >
                Book the free consult
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Section
        eyebrow="Background"
        title="A cross-disciplinary profile built for high-context teams."
        description="The through-line is translating ambiguity into practical decisions. Legal training sharpened reasoning. Product work sharpened prioritization. Data work keeps the operating model honest."
      >
        <div className="grid gap-5 lg:grid-cols-3">
          {timeline.map((entry) => (
            <div key={entry.title} className="shell-card rounded-[1.75rem] p-6">
              <h2 className="text-2xl font-semibold tracking-[-0.04em] text-foreground">
                {entry.title}
              </h2>
              <p className="mt-3 text-base leading-7 text-muted">{entry.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Operating style"
        title="How the work gets done."
        description="The goal is not just to recommend a strategy. It is to create a decision path, align stakeholders, and make the next move feel obvious enough to execute."
      >
        <div className="grid gap-5 md:grid-cols-2">
          {[
            "Work backwards from the decision that matters, not from the volume of ideas available.",
            "Use user context and business constraints together rather than treating them as competing narratives.",
            "Treat SQL and analytics as shared product tools, not specialist-only territory.",
            "Prefer clear scopes, explicit assumptions, and measurable next steps over performative complexity.",
          ].map((principle) => (
            <div key={principle} className="shell-card rounded-[1.75rem] p-6">
              <p className="text-lg leading-8 text-foreground">{principle}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Next step"
        title="If the fit looks promising, the first step is a free consult."
        description="The website is intentionally simple at launch. No accounts are required to review the work locally, and the booking connection can be activated once the site is ready to deploy."
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/consulting"
            className="rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background"
          >
            Book the free consult
          </Link>
          <a
            href={siteConfig.assets.resume}
            className="rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background"
          >
            Download resume
          </a>
        </div>
      </Section>
    </div>
  );
}
