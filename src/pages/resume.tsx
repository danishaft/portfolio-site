import type { HeadFC } from "gatsby"
import { withPrefix } from "gatsby"
import React from "react"
import { FiDownload, FiLink } from "react-icons/fi"

import PageLayout from "../components/layouts/PageLayout"
import SEO from "../components/shared/SEO"
import { featuredProjects } from "../data/projects"
import { workExperience } from "../data/work"

const ResumePage = (): React.ReactElement => {
  const resumeExperience = workExperience.filter(
    (experience) => experience.introduction || experience.highlights.length
  )

  return (
    <PageLayout className="resume-page">
      <div className="resume-toolbar">
        <p>Resume</p>
        <a href={withPrefix("/ejeh-daniel-resume.pdf")}>
          Download PDF <FiDownload aria-hidden="true" />
        </a>
      </div>

      <article className="resume-sheet">
        <header className="resume-header">
          <h1>Ejeh Daniel</h1>
          <address>
            <a href="mailto:connectejehdanielayo@outlook.com">
              connectejehdanielayo@outlook.com
            </a>
            <span className="resume-contact-separator" aria-hidden="true">
              •
            </span>
            <a href="https://danishaft.github.io/portfolio-site">Portfolio</a>
            <span className="resume-contact-separator" aria-hidden="true">
              •
            </span>
            <a href="https://github.com/danishaft">GitHub</a>
            <span className="resume-contact-separator" aria-hidden="true">
              •
            </span>
            <a href="https://www.linkedin.com/in/ejeh-daniel-482409190/">LinkedIn</a>
            <span className="resume-contact-separator" aria-hidden="true">
              •
            </span>
            <span>London, UK</span>
          </address>
        </header>

        <section className="resume-section">
          <h2>Experience</h2>
          {resumeExperience.map((experience) => (
            <div
              className="resume-entry"
              key={`${experience.company}-${experience.role}`}
            >
              <div className="resume-entry-heading">
                <div>
                  <h3>{experience.role}</h3>
                  <p>
                    {experience.companyUrl ? (
                      <a href={experience.companyUrl}>{experience.company}</a>
                    ) : (
                      experience.company
                    )}
                  </p>
                </div>
                <p>
                  {experience.startDate} – {experience.endDate}
                </p>
              </div>
              {experience.introduction ? <p>{experience.introduction}</p> : null}
              {experience.highlights.length ? (
                <ul>
                  {experience.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
        </section>

        <section className="resume-section">
          <h2>Selected projects</h2>
          {featuredProjects.map((project) => (
            <div className="resume-project" key={project.id}>
              <div>
                <h3>
                  <a href={project.links[0].url}>
                    {project.name}
                    <FiLink aria-hidden="true" />
                  </a>
                </h3>
                <p>{project.stack.join(" · ")}</p>
              </div>
              <p>{project.summary}</p>
            </div>
          ))}
        </section>

        <section className="resume-section resume-education">
          <h2>Education</h2>
          <div className="resume-entry">
            <div className="resume-entry-heading">
              <div>
                <h3>
                  Bachelor of Engineering, Agricultural and Bio-systems Engineering
                </h3>
                <p>Joseph Sarwuan Tarka University, Makurdi</p>
              </div>
            </div>
          </div>
        </section>

        <section className="resume-section resume-skills">
          <h2>Technical skills</h2>
          <p>
            <strong>Languages:</strong> TypeScript, JavaScript, Python, Rust, Lua, SQL,
            HTML, CSS
          </p>
          <p>
            <strong>Frontend:</strong> React, Next.js, Tailwind CSS, Radix UI, Shadcn
            UI, Framer Motion, Storybook
          </p>
          <p>
            <strong>Backend and data:</strong> Node.js, FastAPI, PostgreSQL, Redis,
            GraphQL, REST APIs
          </p>
          <p>
            <strong>Platforms and tools:</strong> Tauri, Playwright, Vitest, pytest,
            Azure, GitHub Actions, Turborepo, Grafana, Datadog
          </p>
        </section>
      </article>
    </PageLayout>
  )
}

export default ResumePage

export const Head: HeadFC = () => (
  <SEO
    description="Resume for Ejeh Daniel, software engineer at Doow."
    pathname="/resume"
    title="Resume"
  />
)
