import { graphql, type HeadFC, Link, type PageProps, withPrefix } from "gatsby"
import React from "react"
import { FiArrowRight, FiDownload } from "react-icons/fi"

import ProjectList from "../components/elements/ProjectList"
import PageLayout from "../components/layouts/PageLayout"
import SEO from "../components/shared/SEO"
import SectionHeading from "../components/shared/SectionHeading"
import { routes } from "../constants/routes"
import { featuredProjects } from "../data/projects"

type HomePageData = {
  allMdx: {
    nodes: Array<{
      id: string
      fields: { slug: string }
      frontmatter: {
        title: string
        summary: string
        date: string
      }
    }>
  }
}

export const query = graphql`
  query HomePageQuery {
    allMdx(sort: { frontmatter: { date: DESC } }, limit: 3) {
      nodes {
        id
        fields {
          slug
        }
        frontmatter {
          title
          summary
          date(formatString: "MMM D, YYYY")
        }
      }
    }
  }
`

const IndexPage = ({ data }: PageProps<HomePageData>): React.ReactElement => {
  return (
    <PageLayout className="home-page">
      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">Software engineer · London</p>
          <h1>Ejeh Daniel</h1>
          <p className="hero-role">
            I&apos;m a software engineer at <a href="https://doow.co">Doow</a>.
          </p>
          <p className="hero-statement">I build software I wish I had.</p>
          <div className="hero-links">
            <Link className="primary-link" to={routes.projects.path}>
              See my work <FiArrowRight aria-hidden="true" />
            </Link>
            <a className="secondary-link" href={withPrefix("/ejeh-daniel-resume.pdf")}>
              Resume <FiDownload aria-hidden="true" />
            </a>
          </div>
        </div>
        <figure className="hero-portrait">
          <img
            alt="Ejeh Daniel wearing a burgundy suit outdoors"
            src={withPrefix("/media/profile.webp")}
          />
        </figure>
      </section>

      <section className="home-section" id="selected-work">
        <SectionHeading
          description="Tools for producers, engineers, and people doing real work in software."
          eyebrow="Selected work"
          title="Products, not exercises"
        />
        <ProjectList projects={featuredProjects} />
        <Link className="text-link section-link" to={routes.projects.path}>
          View every project <FiArrowRight aria-hidden="true" />
        </Link>
      </section>

      <section className="home-section work-preview">
        <SectionHeading
          description="I work across product, design, frontend, backend, and the systems used to ship and observe the product."
          eyebrow="At Doow"
          title="From product problem to production"
        />
        <div className="work-preview-grid">
          <div>
            <h3>Browser and desktop</h3>
            <p>React interfaces, a Tauri and Rust host, and a shared monorepo.</p>
          </div>
          <div>
            <h3>Derek and Mina</h3>
            <p>AI agents with interactive spreadsheet and presentation applications.</p>
          </div>
          <div>
            <h3>Hawky</h3>
            <p>Internal AI review, security, test, and visual CI workflows.</p>
          </div>
          <div>
            <h3>Product performance</h3>
            <p>Core Web Vitals visibility through Grafana and Datadog.</p>
          </div>
        </div>
        <Link className="text-link section-link" to={routes.work.path}>
          Read about my work <FiArrowRight aria-hidden="true" />
        </Link>
      </section>

      <section className="home-section writing-preview">
        <SectionHeading eyebrow="Writing" title="Notes from the work" />
        <div className="writing-list">
          {data.allMdx.nodes.map((post) => (
            <article className="writing-row" key={post.id}>
              <time>{post.frontmatter.date}</time>
              <div>
                <h3>
                  <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
                </h3>
                <p>{post.frontmatter.summary}</p>
              </div>
              <Link aria-label={`Read ${post.frontmatter.title}`} to={post.fields.slug}>
                <FiArrowRight aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-band">
        <p className="eyebrow">Contact</p>
        <h2>Let&apos;s talk about the work.</h2>
        <a href="mailto:connectejehdanielayo@outlook.com">
          connectejehdanielayo@outlook.com
        </a>
      </section>
    </PageLayout>
  )
}

export default IndexPage

export const Head: HeadFC = () => (
  <SEO
    description="Ejeh Daniel is a software engineer at Doow who builds product systems, AI agents, developer tools, and software for music producers."
    pathname="/"
  />
)
