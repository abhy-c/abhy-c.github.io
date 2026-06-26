import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";

const contentRoot = path.join(process.cwd(), "content");

export type BlogFrontmatter = {
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  featured?: boolean;
  seoTitle?: string;
  seoDescription?: string;
  canonicalUrl?: string;
};

export type ProjectFrontmatter = {
  title: string;
  date: string;
  summary: string;
  category: string;
  status: string;
  stack: string[];
  role: string;
  problem: string;
  approach: string;
  outcome: string;
  liveUrl?: string;
  repoUrl?: string;
};

export type BlogListItem = BlogFrontmatter & {
  slug: string;
  readingTime: string;
};

export type ProjectListItem = ProjectFrontmatter & {
  slug: string;
};

function getFiles(directory: string) {
  return fs.readdirSync(directory).filter((file) => file.endsWith(".mdx"));
}

function readFile(directory: string, slug: string) {
  return fs.readFileSync(path.join(directory, `${slug}.mdx`), "utf8");
}

function calculateReadingTime(source: string) {
  const words = source.trim().split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.round(words / 220))} min read`;
}

function sortByDate<T extends { date: string }>(items: T[]) {
  return [...items].sort(
    (left, right) =>
      new Date(right.date).getTime() - new Date(left.date).getTime(),
  );
}

export function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));
}

export function getAllBlogPosts(): BlogListItem[] {
  const directory = path.join(contentRoot, "blog");
  const posts = getFiles(directory).map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, "");
    const fileContents = readFile(directory, slug);
    const { data, content } = matter(fileContents);

    return {
      ...(data as BlogFrontmatter),
      slug,
      readingTime: calculateReadingTime(content),
    };
  });

  return sortByDate(posts);
}

export function getAllProjects(): ProjectListItem[] {
  const directory = path.join(contentRoot, "projects");
  const projects = getFiles(directory).map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, "");
    const fileContents = readFile(directory, slug);
    const { data } = matter(fileContents);

    return {
      ...(data as ProjectFrontmatter),
      slug,
    };
  });

  return sortByDate(projects);
}

async function compileEntry<T>(directoryName: "blog" | "projects", slug: string) {
  const source = readFile(path.join(contentRoot, directoryName), slug);
  const { frontmatter, content } = await compileMDX<T>({
    source,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
      },
    },
  });

  return { frontmatter, content };
}

export async function getBlogPost(slug: string) {
  const { frontmatter, content } = await compileEntry<BlogFrontmatter>("blog", slug);
  const source = readFile(path.join(contentRoot, "blog"), slug);
  const { content: rawContent } = matter(source);

  return {
    ...frontmatter,
    slug,
    content,
    readingTime: calculateReadingTime(rawContent),
  };
}

export async function getProject(slug: string) {
  const { frontmatter, content } = await compileEntry<ProjectFrontmatter>(
    "projects",
    slug,
  );

  return {
    ...frontmatter,
    slug,
    content,
  };
}

export function getAdjacentPosts(slug: string) {
  const posts = getAllBlogPosts();
  const index = posts.findIndex((post) => post.slug === slug);

  return {
    next: index > 0 ? posts[index - 1] : null,
    previous: index >= 0 && index < posts.length - 1 ? posts[index + 1] : null,
  };
}
