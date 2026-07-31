import { Link, withPrefix } from "gatsby"
import React from "react"
import { FiArrowRight } from "react-icons/fi"

import type { Project } from "../../types/Project"

type ProjectListProps = {
  projects: Project[]
  compact?: boolean
}

const ProjectList = ({
  projects,
  compact = false,
}: ProjectListProps): React.ReactElement => {
  return (
    <div className={`project-list ${compact ? "project-list--compact" : ""}`}>
      {projects.map((project) => (
        <article className="project-card" key={project.id}>
          {project.image ? (
            <Link
              aria-label={`Read about ${project.name}`}
              className="project-media"
              to={`/projects/${project.id}`}
            >
              <img
                alt={project.imageAlt || ""}
                loading="lazy"
                src={withPrefix(project.image)}
              />
            </Link>
          ) : (
            <div className="project-media project-media--text" aria-hidden="true">
              <span>{project.name}</span>
            </div>
          )}
          <div className="project-copy">
            <div className="project-meta">
              <span>{project.category}</span>
              <span>{project.year}</span>
            </div>
            <h3>
              <Link to={`/projects/${project.id}`}>{project.name}</Link>
            </h3>
            <p className="project-tagline">{project.tagline}</p>
            <p>{project.summary}</p>
            <Link className="text-link" to={`/projects/${project.id}`}>
              View project <FiArrowRight aria-hidden="true" />
            </Link>
          </div>
        </article>
      ))}
    </div>
  )
}

export default ProjectList
