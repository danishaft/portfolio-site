import { withPrefix } from "gatsby"
import React from "react"
import { FiCalendar } from "react-icons/fi"

import { workExperience } from "../../data/work"

const WorkList = (): React.ReactElement => {
  return (
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
              <span aria-hidden="true">
                {experience.company
                  .split(" ")
                  .slice(0, 2)
                  .map((word) => word[0])
                  .join("")}
              </span>
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
                {experience.location ? (
                  <p className="work-location">{experience.location}</p>
                ) : null}
              </div>
              <p className="work-dates">
                <FiCalendar aria-hidden="true" />
                <span>
                  {experience.startDate} – {experience.endDate}
                </span>
              </p>
            </header>

            {experience.introduction ? (
              <p className="work-introduction">{experience.introduction}</p>
            ) : null}

            {experience.stack?.length ? (
              <p className="project-stack">{experience.stack.join(" · ")}</p>
            ) : null}
          </div>
        </article>
      ))}
    </div>
  )
}

export default WorkList
