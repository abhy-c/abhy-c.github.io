import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl shell-card rounded-[2.5rem] px-6 py-12 text-center sm:px-8">
      <p className="eyebrow">404</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-foreground sm:text-5xl">
        That page is off the map.
      </h1>
      <p className="mt-6 text-lg leading-8 text-muted">
        Try the homepage, the project gallery, or the writing archive instead.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background"
        >
          Home
        </Link>
        <Link
          href="/projects"
          className="rounded-full border px-6 py-3 text-sm font-semibold text-black"
          style={{
            borderColor: "#9a8454",
            backgroundColor: "#d6efef",
          }}
        >
          Projects
        </Link>
        <Link
          href="/blog"
          className="rounded-full border px-6 py-3 text-sm font-semibold text-black"
          style={{
            borderColor: "#9a8454",
            backgroundColor: "#d6efef",
          }}
        >
          Writing
        </Link>
      </div>
    </div>
  );
}
