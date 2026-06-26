const fallbackSiteUrl = "http://localhost:3000";

export const siteConfig = {
  title: "Abhyudai Chauhan",
  description:
    "Product manager, NYU MBA (STEM), and ex-attorney building B2B and fintech products through user-centric, data-informed execution.",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? fallbackSiteUrl,
  assets: {
    headshot: "/images/headshot/abhyudai-portrait.jpg",
    skyline: "/images/backgrounds/nyc-skyline.jpg",
    resume: "/resume/abhyudai-chauhan-resume.pdf",
  },
  author: {
    name: "Abhyudai Chauhan",
    role: "Product Manager | NYU MBA (STEM) | AI, SQL, Blockchain",
    summary:
      "Ex-attorney building B2B and fintech products with user-centric, data-informed execution.",
    bio: "I work at the intersection of product strategy, regulated systems, and data-led execution. My focus is turning ambiguity into clear bets, measurable learning, and operating systems teams can actually use.",
  },
  focusAreas: ["AI strategy", "Product execution", "Fintech systems", "Analytics / SQL"],
  featuredInsight: {
    quote:
      "Clear product thinking is usually less about generating more ideas and more about reducing ambiguity until the next good decision becomes obvious.",
    attribution: "Operating principle",
  },
  nav: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/blog", label: "Writing" },
    { href: "/consulting", label: "Consulting" },
  ],
  footerLinks: {
    email: "",
    linkedin: "",
    github: "",
  },
  consulting: {
    primaryCtaLabel: "Book a Free Consult",
    calendlyUrl: process.env.NEXT_PUBLIC_CALENDLY_URL ?? "",
    activeOffer: {
      name: "Free Consult",
      duration: "20 minutes",
      description:
        "A focused introductory conversation for teams evaluating product strategy, AI opportunities, SQL-backed decision making, or regulated product questions.",
    },
    futureStubs: [
      "Product Strategy Session",
      "AI / Data / SQL Advisory Session",
      "Fractional Product Advisory",
      "Fintech / Regulated Product Consultation",
    ],
  },
} as const;

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.siteUrl).toString();
}
