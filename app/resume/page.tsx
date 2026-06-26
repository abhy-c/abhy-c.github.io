import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Resume",
  description: "Resume download and profile summary for Abhyudai Chauhan.",
};

export default function ResumePage() {
  return (
    <div className="mx-auto max-w-3xl shell-card rounded-[2.5rem] px-6 py-10 sm:px-8 sm:py-12">
      <p className="eyebrow">Resume</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-foreground sm:text-5xl">
        Resume and background snapshot
      </h1>
      <p className="mt-6 text-lg leading-8 text-muted">
        Download the current resume PDF or use the consulting page to start a conversation around
        product strategy, AI opportunities, analytics, or fintech execution.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href={siteConfig.assets.resume}
          className="rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background"
        >
          Download PDF
        </a>
        <a
          href={siteConfig.assets.resume}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border px-6 py-3 text-sm font-semibold text-black"
          style={{
            borderColor: "#9a8454",
            backgroundColor: "#d6efef",
          }}
        >
          Open in new tab
        </a>
      </div>
    </div>
  );
}
