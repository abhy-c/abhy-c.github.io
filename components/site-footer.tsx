import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

const socialEntries = [
  { label: "Email", href: siteConfig.footerLinks.email },
  { label: "LinkedIn", href: siteConfig.footerLinks.linkedin },
  { label: "GitHub", href: siteConfig.footerLinks.github },
];

export function SiteFooter() {
  return (
    <footer className="pb-8">
      <div className="shell-card rounded-[2rem] px-5 py-8 sm:px-7">
        <div className="relative flex flex-col gap-8 border-b border-border/70 pb-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow-secondary">Built for clarity</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-foreground sm:text-3xl">
              A simple publishing and consulting platform, designed to stay easy to maintain.
            </h2>
          </div>
          <Link
            href="/consulting"
            className="w-fit rounded-full bg-foreground px-5 py-3 text-sm font-semibold text-background transition-transform duration-200 hover:-translate-y-0.5"
          >
            Book the free consult
          </Link>
        </div>
        <div className="relative mt-8 flex flex-col gap-6 text-sm text-slate-900 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-semibold text-foreground">{siteConfig.author.name}</p>
            <p className="mt-1 max-w-xl">
              Product, AI, SQL, and fintech strategy with a calm, execution-first lens.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {socialEntries.map((entry) =>
              entry.href ? (
                <a
                  key={entry.label}
                  href={entry.href}
                  className="rounded-full border px-4 py-2 font-medium text-black"
                  style={{
                    borderColor: "#9a8454",
                    backgroundColor: "#d6efef",
                  }}
                >
                  {entry.label}
                </a>
              ) : (
                <span
                  key={entry.label}
                  className="rounded-full border border-dashed px-4 py-2 text-black"
                  style={{
                    borderColor: "#9a8454",
                    backgroundColor: "#d6efef",
                  }}
                >
                  {entry.label} link to add before launch
                </span>
              ),
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
