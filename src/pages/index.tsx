import { graphql, type HeadFC, Link, type PageProps, withPrefix } from "gatsby"
import { GatsbyImage, getImage, type IGatsbyImageData } from "gatsby-plugin-image"
import React from "react"
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi"

import PageLayout from "../components/layouts/PageLayout"
import SEO from "../components/shared/SEO"
import { routes } from "../constants/routes"
import { socialLinks } from "../data/socials"

type HomePageData = {
  allMdx: {
    nodes: Array<{
      id: string
      fields: { slug: string }
      frontmatter: {
        title: string
        summary: string
        date: string
        readTime: number
        cover?: {
          childImageSharp?: { gatsbyImageData: IGatsbyImageData }
        }
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
          readTime
          cover {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, width: 180, quality: 85)
            }
          }
        }
      }
    }
  }
`

const IndexPage = ({ data }: PageProps<HomePageData>): React.ReactElement => {
  return (
    <PageLayout className="home-page">
      <section className="home-introduction">
        <div className="home-profile">
          <img
            alt="Ejeh Daniel wearing a burgundy suit outdoors"
            src={withPrefix("/media/profile.webp")}
          />
          <h1>Ejeh Daniel</h1>
          <nav aria-label="Social links" className="home-socials">
            {socialLinks.map(({ external, icon: Icon, label, url }) => (
              <a
                aria-label={label}
                href={url}
                key={label}
                rel={external ? "noreferrer" : undefined}
                target={external ? "_blank" : undefined}
                title={label}
              >
                <Icon aria-hidden="true" />
              </a>
            ))}
          </nav>
        </div>

        <div className="home-bio">
          <p>
            I&apos;m a software engineer at <a href="https://doow.co">Doow</a>, working
            across frontend, backend, desktop applications, and AI agents, with a deeper
            specialization in React and TypeScript.
          </p>
          <p>
            I like going deep and really understanding how things work, and I like going
            broad and thinking about the big picture. I&apos;m good at learning and
            adapting, and I love mentoring and being a team enabler just as much as I
            love technical challenges.
          </p>
        </div>

        <nav aria-label="Portfolio sections" className="home-destinations">
          <Link to={routes.about.path}>
            About <FiArrowUpRight aria-hidden="true" />
          </Link>
          <Link to={routes.work.path}>
            Work <FiArrowUpRight aria-hidden="true" />
          </Link>
          <Link to={routes.projects.path}>
            Projects <FiArrowUpRight aria-hidden="true" />
          </Link>
          <Link to={routes.resume.path}>
            Resume <FiArrowUpRight aria-hidden="true" />
          </Link>
        </nav>
      </section>

      <section className="home-writing">
        <header className="editorial-section-header">
          <h2>Latest writing</h2>
          <Link to={routes.writing.path}>
            View all <FiArrowRight aria-hidden="true" />
          </Link>
        </header>
        <div className="home-post-list">
          {data.allMdx.nodes.map((post) => {
            const cover = getImage(
              post.frontmatter.cover?.childImageSharp?.gatsbyImageData ?? null
            )
            return (
              <article className="home-post" key={post.id}>
                <Link className="home-post-copy" to={post.fields.slug}>
                  <time>
                    {post.frontmatter.date} · {post.frontmatter.readTime} min read
                  </time>
                  <h3>{post.frontmatter.title}</h3>
                  <p>{post.frontmatter.summary}</p>
                </Link>
                {cover ? (
                  <Link
                    aria-label={`Read ${post.frontmatter.title}`}
                    className="home-post-cover"
                    to={post.fields.slug}
                  >
                    <GatsbyImage alt="" image={cover} />
                  </Link>
                ) : null}
              </article>
            )
          })}
        </div>
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
