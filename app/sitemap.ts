import type { MetadataRoute } from "next";
import { getAllBlogPosts, getAllProjects } from "@/lib/content";
import { absoluteUrl } from "@/lib/site-config";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/blog", "/consulting", "/projects", "/resume"].map(
    (route) => ({
      url: absoluteUrl(route || "/"),
      lastModified: new Date(),
    }),
  );

  const posts = getAllBlogPosts().map((post) => ({
    url: absoluteUrl(`/blog/${post.slug}`),
    lastModified: new Date(post.date),
  }));

  const projects = getAllProjects().map((project) => ({
    url: absoluteUrl(`/projects/${project.slug}`),
    lastModified: new Date(project.date),
  }));

  return [...staticRoutes, ...posts, ...projects];
}
