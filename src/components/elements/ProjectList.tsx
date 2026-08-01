import { withPrefix } from "gatsby"
import React from "react"
import { FiArrowUpRight } from "react-icons/fi"

import type { Project } from "../../types/Project"

type ProjectListProps = {
  projects: Project[]
}

const ProjectLinks = ({ links }: Pick<Project, "links">): React.ReactElement => (
  <div className="project-row-links">
    {links.map((link) => (
      <a href={link.url} key={link.url} rel="noreferrer" target="_blank">
        {link.label} <FiArrowUpRight aria-hidden="true" />
      </a>
    ))}
  </div>
)

const ProjectList = ({ projects }: ProjectListProps): React.ReactElement => {
  return (
    <div className="project-list">
      {projects.map((project, index) => (
        <article
          className={`project-row ${project.image ? "" : "project-row--text"}`.trim()}
          key={project.id}
        >
          {project.image ? (
            <div className="project-media">
              <img
                alt={project.imageAlt || ""}
                loading={index === 0 ? "eager" : "lazy"}
                src={withPrefix(project.image)}
              />
            </div>
          ) : null}

          <div className="project-copy">
            <div className="project-meta">
              <span>{project.category}</span>
              <span>{project.year}</span>
            </div>
            <h2>{project.name}</h2>
            <p className="project-tagline">{project.tagline}</p>
            <p className="project-summary">{project.summary}</p>
            <p className="project-stack">{project.stack.join(" · ")}</p>
            <ProjectLinks links={project.links} />
          </div>
        </article>
      ))}
    </div>
  )
}

export default ProjectList
