import type { HeadFC } from "gatsby"
import { withPrefix } from "gatsby"
import React from "react"
import { FiDownload, FiLink } from "react-icons/fi"

import PageLayout from "../components/layouts/PageLayout"
import SEO from "../components/shared/SEO"
import { projects } from "../data/projects"
import { workExperience } from "../data/work"

const ResumePage = (): React.ReactElement => {
  const resumeExperience = workExperience.filter(
    (experience) => experience.highlights.length
  )

  // Project descriptions below are verbatim from the PDF resume; links come
  // from the single source of truth in src/data/projects.ts.
  const resumeProjects = [
    {
      id: "reaper-mcp",
      stack: "Python · Lua · MCP · REST",
      description:
        "Built a Python-based Model Context Protocol (MCP) server that exposes a 170-operation REST API to REAPER via a Lua bridge, allowing an AI assistant to arrange, mix, and render audio tracks with a one-step undo system.",
    },
    {
      id: "stem-splitter",
      stack: "React · FastAPI · PostgreSQL · Redis · Modal",
      description:
        "Developed a React web app that splits songs into eight isolated tracks. Integrates a FastAPI backend that orchestrates GPU-accelerated separation models on Modal, using Redis/RQ for job queues and PostgreSQL for state.",
    },
    {
      id: "peruz",
      stack: "TypeScript · Node.js · Chrome Native Messaging · MCP",
      description:
        "Built a headless browser automation tool in Node.js connected to a Chrome Extension via Native Messaging. Exposes browser states, network requests, and viewport screenshots to terminal prompts and MCP clients.",
    },
  ]

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
          </address>
        </header>

        <section className="resume-section resume-summary">
          <h2>Professional summary</h2>
          <p>
            Hi, I&apos;m Daniel, a Senior Frontend Engineer. I spend most of my time
            building fast production web apps, custom browser tools, and AI features.
            I&apos;ve worked as part of founding teams and took products to launch from
            early MVPs. My stack is React, TypeScript, and Node.js, with a strong focus
            on testing, maintainable architecture, accessibility, and good UX.
          </p>
          <p>
            At Doow, I&apos;ve built core product features spanning web apps, browser
            extensions, and desktop agents including our AI CFO interfaces (built a 60
            FPS spreadsheet from scratch that runs 100k+ cells with a custom formula
            compiler), and our internal AI review agent that saves the engineering team
            ~1,000 hours a week.
          </p>
          <p>
            I&apos;m comfortable owning frontend infrastructure, mentoring engineers,
            and working across product and engineering. Outside of work, I build audio
            and browser automation tools in Python and Rust.
          </p>
        </section>

        <section className="resume-section">
          <h2>Professional experience</h2>
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
                    {experience.location ? ` — ${experience.location}` : null}
                  </p>
                </div>
                <p>
                  {experience.startDate} – {experience.endDate}
                </p>
              </div>
              <ul>
                {experience.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>
        <section className="resume-section">
          <h2>Selected projects</h2>
          {resumeProjects.map((resumeProject) => {
            const project = projects.find((p) => p.id === resumeProject.id)
            return (
              <div className="resume-project" key={resumeProject.id}>
                <div>
                  <h3>
                    {project ? (
                      <a href={project.links[0].url}>
                        {project.name}
                        <FiLink aria-hidden="true" />
                      </a>
                    ) : (
                      resumeProject.id
                    )}
                  </h3>
                  <p>{resumeProject.stack}</p>
                </div>
                <p>{resumeProject.description}</p>
              </div>
            )
          })}
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
            <strong>Languages:</strong> TypeScript, JavaScript, Python, Rust, SQL,
            HTML5, CSS3
          </p>
          <p>
            <strong>Frontend:</strong> React, Next.js, Vue.js, Vite, Tailwind CSS,
            Shadcn UI, Radix UI, D3.js, Web Accessibility (WCAG 2.1)
          </p>
          <p>
            <strong>Backend and data:</strong> Node.js, FastAPI, PostgreSQL, Redis, REST
            APIs, GraphQL
          </p>
          <p>
            <strong>AI and tooling:</strong> AI SDK, RAG Systems, OpenAI API, LangChain
          </p>
          <p>
            <strong>Tools and DevOps:</strong> Playwright, Vitest, Docker, GitHub
            Actions, Turborepo, Core Web Vitals
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
