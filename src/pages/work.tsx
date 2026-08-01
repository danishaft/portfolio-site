import { type HeadFC, withPrefix } from "gatsby"
import React from "react"

import PageLayout from "../components/layouts/PageLayout"
import PageHeader from "../components/shared/PageHeader"
import SEO from "../components/shared/SEO"
import { workExperience } from "../data/work"

const WorkPage = (): React.ReactElement => {
  return (
    <PageLayout className="work-page" size="list">
      <PageHeader title="Work" />

      <div className="work-list">
        {workExperience.map((experience) => (
          <article
            className="work-entry"
            key={`${experience.company}-${experience.role}`}
          >
            <div className={`work-logo ${experience.logo ? "" : "work-logo--text"}`}>
              {experience.logo ? (
                <img alt="" src={withPrefix(experience.logo)} />
              ) : (
                <span aria-hidden="true">ED</span>
              )}
            </div>

            <div className="work-entry-content">
              <header className="work-entry-header">
                <div>
                  <h2>{experience.role}</h2>
                  {experience.companyUrl ? (
                    <a href={experience.companyUrl}>{experience.company}</a>
                  ) : (
                    <p>{experience.company}</p>
                  )}
                </div>
                <p className="work-dates">
                  {experience.startDate} – {experience.endDate}
                </p>
              </header>

              {experience.introduction ? (
                <p className="work-introduction">{experience.introduction}</p>
              ) : null}

              {experience.highlights.length ? (
                <ul className="work-highlights">
                  {experience.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              ) : null}
            </div>
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
