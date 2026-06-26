import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/section";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Consulting",
  description:
    "Free introductory consulting conversations around product strategy, AI opportunities, SQL-backed decision making, and fintech execution.",
};

const fitPoints = [
  "You need a sharper framing of a product decision, not just more brainstorming.",
  "You are evaluating where AI meaningfully belongs in a workflow or roadmap.",
  "You want to tie qualitative judgment to metrics, SQL analysis, or clearer operating rhythms.",
  "You are working in B2B, fintech, or another high-context environment where risk and execution need equal weight.",
];

export default function ConsultingPage() {
  const calendlyUrl = siteConfig.consulting.calendlyUrl;

  return (
    <div className="space-y-8">
      <section className="shell-card rounded-[2.5rem] px-6 py-10 sm:px-8 sm:py-12 lg:px-12">
        <p className="eyebrow">Consulting</p>
        <h1 className="mt-4 max-w-4xl text-5xl font-semibold tracking-[-0.06em] text-foreground sm:text-6xl">
          One clear launch offer: a free consult designed to test fit quickly.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">
          The site is set up so booking can stay dormant in local development and turn on cleanly
          once the Calendly account is created before deployment.
        </p>
      </section>

      <Section
        eyebrow="What this is for"
        title="A short working session to clarify where to focus next."
        description="This is a practical conversation, not a generic networking call. The best fit is a team or founder with a real product question that needs better structure."
      >
        <div className="grid gap-5 lg:grid-cols-[1fr_0.95fr]">
          <div className="shell-card rounded-[2rem] p-6">
            <p className="eyebrow">Launch event type</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-foreground">
              {siteConfig.consulting.activeOffer.name}
            </h2>
            <p className="mt-2 text-sm text-muted">{siteConfig.consulting.activeOffer.duration}</p>
            <p className="mt-4 text-base leading-7 text-muted">
              {siteConfig.consulting.activeOffer.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {calendlyUrl ? (
                <a
                  href={calendlyUrl}
                  className="rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background"
                >
                  Open Calendly
                </a>
              ) : (
                <span className="rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background">
                  Calendly will be connected before deployment
                </span>
              )}
              <Link
                href="/blog"
                className="rounded-full border px-6 py-3 text-sm font-semibold text-black"
                style={{
                  borderColor: "#9a8454",
                  backgroundColor: "#d6efef",
                }}
              >
                Read the writing first
              </Link>
            </div>
          </div>
          <div className="grid gap-4">
            {fitPoints.map((point) => (
              <div key={point} className="shell-card rounded-[1.5rem] p-5">
                <p className="text-base leading-7 text-foreground">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Future stubs"
        title="Structured to expand later without a rewrite."
        description="The launch site keeps only one active free event, but future paid or longer-format offers already have a reserved place in the information architecture."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {siteConfig.consulting.futureStubs.map((item) => (
            <div key={item} className="shell-card rounded-[1.5rem] p-5">
              <p className="text-lg font-semibold tracking-[-0.03em] text-foreground">{item}</p>
              <p className="mt-2 text-sm leading-7 text-muted">
                Stub retained in the plan only. Leave inactive until the live site, offer design,
                and Calendly plan change are approved.
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Booking state"
        title="Localhost-ready today, live connection later."
        description="No external accounts are required to run the site locally. If a Calendly URL is present in environment variables, the CTA activates automatically without changing page structure."
      >
        <div className="shell-card rounded-[2rem] p-6">
          {calendlyUrl ? (
            <iframe
              title="Calendly booking"
              src={calendlyUrl}
              className="h-[720px] w-full rounded-[1.5rem] border border-border"
            />
          ) : (
            <div className="rounded-[1.5rem] border border-dashed border-border bg-white/70 p-8">
              <p className="text-lg font-semibold tracking-[-0.03em] text-foreground">
                Calendly embed placeholder
              </p>
              <p className="mt-3 max-w-2xl text-base leading-7 text-muted">
                Add `NEXT_PUBLIC_CALENDLY_URL` before deployment to turn this module on. The page is
                already structured so that analytics and booking remain modular, optional layers.
              </p>
            </div>
          )}
        </div>
      </Section>
    </div>
  );
}
