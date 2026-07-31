export type ProjectLink = {
  label: string
  url: string
}

export type Project = {
  id: string
  name: string
  year: string
  category: string
  tagline: string
  summary: string
  image?: string
  imageAlt?: string
  featured: boolean
  stack: string[]
  highlights: string[]
  links: ProjectLink[]
}
