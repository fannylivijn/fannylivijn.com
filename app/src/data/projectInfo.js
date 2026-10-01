import { projects } from "./content.js";

function slugify(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

// Derives everything a project page needs. Title and services come from the caption
// ("Title — service, service") unless the project sets `title` / `services` itself.
export function projectInfo(project, index) {
  const [head, ...rest] = project.caption.split(" — ");
  const title = project.title || head.trim();
  const servicesText = rest.join(" — ").trim();
  const services = project.services || (servicesText ? [servicesText] : []);
  const cover = project.video ? { video: project.video, image: project.image } : { image: project.image };

  return {
    ...project,
    number: index + 1,
    slug: project.slug || slugify(title) || `project-${index + 1}`,
    title,
    services,
    gallery: project.gallery && project.gallery.length ? project.gallery : [{ ...cover, size: "large" }],
  };
}

export const projectList = projects.map(projectInfo);

export function findProject(slug) {
  const index = projectList.findIndex((p) => p.slug === slug);
  if (index === -1) return null;
  const count = projectList.length;
  return {
    project: projectList[index],
    prev: projectList[(index - 1 + count) % count],
    next: projectList[(index + 1) % count],
  };
}
