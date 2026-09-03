export type Route = {
  enabled?: boolean
  path: string
  name: string
}

export const routes = {
  home: { path: "/", name: "Home" },
  about: { path: "/about", name: "About" },
  work: { path: "/work", name: "Work" },
  projects: { path: "/projects", name: "Projects" },
  sound: { enabled: false, path: "/sound", name: "Sound" },
  writing: { path: "/articles", name: "Writing" },
  drafts: { path: "/drafts", name: "Drafts" },
  resume: { path: "/resume", name: "Resume" },
} satisfies Record<string, Route>

export const TOP_NAV: Route[] = [
  routes.work,
  routes.projects,
  routes.writing,
  routes.about,
  routes.resume,
]
