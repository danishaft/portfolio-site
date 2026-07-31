import { type HeadFC, Link, type PageProps, withPrefix } from "gatsby"
import React from "react"
import { FiArrowLeft, FiArrowUpRight } from "react-icons/fi"

import PageLayout from "../components/layouts/PageLayout"
import SEO from "../components/shared/SEO"
import { getProject } from "../data/projects"

type ProjectPageContext = {
  projectID: string
}

const ProjectTemplate = ({
  pageContext,
}: PageProps<unknown, ProjectPageContext>): React.ReactElement => {
  const project = getProject(pageContext.projectID)

  if (!project) {
    return (
      <PageLayout className="content-page">
        <header className="page-intro">
          <h1>Project not found</h1>
          <Link className="text-link" to="/projects">
            <FiArrowLeft aria-hidden="true" /> Back to projects
          </Link>
        </header>
      </PageLayout>
    )
  }

  return (
    <PageLayout className="project-page">
      <Link className="back-link" to="/projects">
        <FiArrowLeft aria-hidden="true" /> All projects
      </Link>

      <header className="project-hero">
        <div>
          <p className="eyebrow">
            {project.category} · {project.year}
          </p>
          <h1>{project.name}</h1>
          <p className="project-hero-tagline">{project.tagline}</p>
          <p>{project.summary}</p>
          <div className="project-links">
            {project.links.map((link) => (
              <a href={link.url} key={link.url} rel="noreferrer" target="_blank">
                {link.label} <FiArrowUpRight aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
        <dl className="project-facts">
          <div>
            <dt>Built with</dt>
            <dd>{project.stack.join(", ")}</dd>
          </div>
          <div>
            <dt>Role</dt>
            <dd>Product and engineering</dd>
          </div>
          <div>
            <dt>Status</dt>
            <dd>Open source</dd>
          </div>
        </dl>
      </header>

      {project.image ? (
        <figure className="project-visual">
          <img alt={project.imageAlt || ""} src={withPrefix(project.image)} />
        </figure>
      ) : null}

      <section className="project-body">
        <header>
          <p className="eyebrow">The work</p>
          <h2>What I built</h2>
        </header>
        <ol>
          {project.highlights.map((highlight, index) => (
            <li key={highlight}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{highlight}</p>
            </li>
          ))}
        </ol>
      </section>
    </PageLayout>
  )
}

export default ProjectTemplate

export const Head: HeadFC<unknown, ProjectPageContext> = ({ pageContext }) => {
  const project = getProject(pageContext.projectID)
  return (
    <SEO
      description={project?.summary || "Project by Ejeh Daniel."}
      image={project?.image}
      pathname={`/projects/${pageContext.projectID}`}
      title={project?.name || "Project"}
    />
  )
}
