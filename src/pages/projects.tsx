import type { HeadFC } from "gatsby"
import React from "react"

import ProjectList from "../components/elements/ProjectList"
import PageLayout from "../components/layouts/PageLayout"
import SEO from "../components/shared/SEO"
import { featuredProjects, projects } from "../data/projects"

const ProjectsPage = (): React.ReactElement => {
  const otherProjects = projects.filter((project) => !project.featured)

  return (
    <PageLayout className="content-page">
      <header className="page-intro">
        <p className="eyebrow">Selected work</p>
        <h1>Projects</h1>
        <p>
          Software built around a concrete job: producing music, separating audio,
          controlling browsers, continuing agent sessions, and working with data.
        </p>
      </header>

      <ProjectList projects={featuredProjects} />

      <section className="other-projects">
        <header>
          <p className="eyebrow">More work</p>
          <h2>Smaller tools</h2>
        </header>
        <ProjectList compact projects={otherProjects} />
      </section>
    </PageLayout>
  )
}

export default ProjectsPage

export const Head: HeadFC = () => (
  <SEO
    description="Projects by Ejeh Daniel, including REAPER MCP, StemSplitter, Peruz, continues-cli, and Neon for n8n."
    pathname="/projects"
    title="Projects"
  />
)
