type Slug = "home" | "projects" | "articles"

export type Route = {
  path: string
  name: string
}

type Routes = Record<Slug, Route>

export const routes: Routes = {
  home: {
    path: "/",
    name: "About",
  },
  projects: {
    path: "/projects",
    name: "Projects",
  },
  articles: {
    path: "/articles",
    name: "Articles",
  },
}

export const TOP_NAV: Route[] = [routes.projects, routes.articles]

export const FOOTER_NAV: Route[] = []
