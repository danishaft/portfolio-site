import type { HeadFC } from "gatsby"
import React from "react"

import PageLayout from "../components/layouts/PageLayout"
import SEO from "../components/shared/SEO"
import { workExperience } from "../data/work"

const WorkPage = (): React.ReactElement => {
  return (
    <PageLayout className="content-page">
      <header className="page-intro">
        <p className="eyebrow">Experience</p>
        <h1>Work</h1>
        <p>
          I&apos;ve worked from the first version of Doow through its browser, desktop,
          agent, data, and engineering systems.
        </p>
      </header>

      <div className="experience-list">
        {workExperience.map((experience) => (
          <article
            className="experience-item"
            key={`${experience.company}-${experience.role}`}
          >
            <div className="experience-heading">
              <div>
                <p>{experience.company}</p>
                <h2>{experience.role}</h2>
              </div>
              <div className="experience-meta">
                <span>
                  {experience.startDate} – {experience.endDate}
                </span>
                <span>{experience.location}</span>
              </div>
            </div>
            {experience.introduction ? (
              <p className="experience-intro">{experience.introduction}</p>
            ) : null}
            {experience.highlights.length ? (
              <ul>
                {experience.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            ) : null}
          </article>
        ))}
      </div>
    </PageLayout>
  )
}

export default WorkPage

export const Head: HeadFC = () => (
  <SEO
    description="Ejeh Daniel's work across product engineering, browser and desktop applications, AI agents, developer workflows, and frontend performance at Doow."
    pathname="/work"
    title="Work"
  />
)
