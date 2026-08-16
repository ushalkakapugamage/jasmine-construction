export type Project = {
  id: string
  name: string
  slug: string
  category: string
  location: string
  year: string
  client?: string
  description: string
  scope: string[]
  services: string[]
  status: 'planning' | 'in-progress' | 'complete'
  coverImage: string
  gallery: string[]
  constructionStages: Array<{ title: string; description: string; image?: string }>
  seo: { title: string; description: string }
  published: boolean
}

// This is the single source of truth for project records. Add verified work here
// (or replace this module with a CMS adapter) before publishing it to the public archive.
export const projects: Project[] = []

export const publishedProjects = projects.filter((project) => project.published)
