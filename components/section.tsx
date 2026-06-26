import type { ReactNode } from "react";

type SectionProps = {
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
};

export function Section({ eyebrow, title, description, children }: SectionProps) {
  return (
    <section className="py-10 sm:py-14">
      <div className="mb-8 max-w-3xl">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="section-title mt-3 font-semibold text-foreground">{title}</h2>
        {description ? (
          <p className="mt-4 max-w-2xl text-lg leading-8 text-muted">{description}</p>
        ) : null}
      </div>
      {children}
    </section>
  );
}
