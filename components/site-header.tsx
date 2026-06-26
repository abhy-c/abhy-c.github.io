"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/site-config";

export function SiteHeader() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="py-6 sm:py-8">
      <div className="shell-card rounded-[2rem] px-5 py-4 sm:px-7">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <Link href="/" className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Portfolio
            </p>
            <p className="mt-1 text-lg font-semibold tracking-[-0.03em] text-foreground">
              {siteConfig.author.name}
            </p>
            <p className="mt-1 text-sm text-muted">{siteConfig.author.role}</p>
          </Link>
          <nav aria-label="Primary" className="flex flex-wrap gap-2">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className="rounded-full border px-4 py-2 text-sm font-medium text-black transition-transform duration-200 hover:-translate-y-0.5"
                style={
                  isActive(item.href)
                    ? {
                        borderColor: "#7f6b45",
                        backgroundColor: "#c6e7e7",
                        boxShadow: "inset 0 0 0 1px rgba(127, 107, 69, 0.2)",
                      }
                    : {
                        borderColor: "#9a8454",
                        backgroundColor: "#d6efef",
                      }
                }
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/consulting"
              className="rounded-full bg-foreground px-4 py-2 text-sm font-semibold text-background transition-transform duration-200 hover:-translate-y-0.5"
            >
              Book a Call
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
