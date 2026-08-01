import type { HeadFC } from "gatsby"
import React from "react"

import ProjectList from "../components/elements/ProjectList"
import PageLayout from "../components/layouts/PageLayout"
import PageHeader from "../components/shared/PageHeader"
import SEO from "../components/shared/SEO"
import { projects } from "../data/projects"

const ProjectsPage = (): React.ReactElement => {
  return (
    <PageLayout className="projects-page" size="list">
      <PageHeader
        description="Open-source software and experiments around music production and developer workflows. Most began as tools I wanted to use myself."
        title="Projects"
      />

      <ProjectList projects={projects} />
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
