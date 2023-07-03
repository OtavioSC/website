import fs from "fs";
import matter from "gray-matter";
import { join } from "path";
import { Work } from "@/app/types/types";

export const worksDirectory = join(process.cwd(), "src/content");
export const aboutDirectory = join(process.cwd(), "src/app/about");

export function getWorkSlugs() {
  return fs.readdirSync(worksDirectory);
}

export function getWorkBySlug(
  slug: string,
  fields: string[] = [],
  directory: string
): Work {
  const works: Work = {};

  const replacedSlug = slug.replace(/\.md$/, "");
  const fullPath = join(directory, `${replacedSlug}.md`);
  const fileData = fs.readFileSync(fullPath, "utf-8");

  const { data, content } = matter(fileData);

  fields.forEach((field) => {
    if (field === "slug") {
      works[field] = replacedSlug;
    }
    if (field === "content") {
      works[field] = content;
    }

    if (typeof data[field] !== "undefined") {
      works[field] = data[field];
    }
  });

  return works;
}

export function getAllWorks(fields: string[] = []): Work[] {
  const slugs = getWorkSlugs();
  const works = slugs
    .map((slug) => getWorkBySlug(slug, fields, worksDirectory))
    .sort((first, second) => (first.date > second.date ? -1 : 1));
  return works;
}
