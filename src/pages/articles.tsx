import { graphql, type HeadFC, Link, type PageProps } from "gatsby"
import { GatsbyImage, getImage, type IGatsbyImageData } from "gatsby-plugin-image"
import React from "react"
import { FiArrowRight } from "react-icons/fi"

import PageLayout from "../components/layouts/PageLayout"
import SEO from "../components/shared/SEO"

type WritingPageData = {
  allMdx: {
    nodes: Array<{
      id: string
      fields: { slug: string }
      frontmatter: {
        title: string
        summary: string
        date: string
        cover?: {
          childImageSharp?: { gatsbyImageData: IGatsbyImageData }
        }
      }
    }>
  }
}

export const query = graphql`
  query WritingPageQuery {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        id
        fields {
          slug
        }
        frontmatter {
          title
          summary
          date(formatString: "MMM D, YYYY")
          cover {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, width: 720, quality: 88)
            }
          }
        }
      }
    }
  }
`

const WritingPage = ({ data }: PageProps<WritingPageData>): React.ReactElement => {
  return (
    <PageLayout className="content-page">
      <header className="page-intro">
        <p className="eyebrow">Writing</p>
        <h1>Notes from what I&apos;m learning and building.</h1>
      </header>

      <div className="article-grid">
        {data.allMdx.nodes.map((post) => {
          const image = getImage(
            post.frontmatter.cover?.childImageSharp?.gatsbyImageData ?? null
          )
          return (
            <article className="article-card" key={post.id}>
              {image ? (
                <Link
                  aria-label={`Read ${post.frontmatter.title}`}
                  className="article-cover"
                  to={post.fields.slug}
                >
                  <GatsbyImage alt="" image={image} imgStyle={{ objectFit: "cover" }} />
                </Link>
              ) : null}
              <div>
                <time>{post.frontmatter.date}</time>
                <h2>
                  <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
                </h2>
                <p>{post.frontmatter.summary}</p>
                <Link className="text-link" to={post.fields.slug}>
                  Read article <FiArrowRight aria-hidden="true" />
                </Link>
              </div>
            </article>
          )
        })}
      </div>
    </PageLayout>
  )
}

export default WritingPage

export const Head: HeadFC = () => (
  <SEO
    description="Technical writing by Ejeh Daniel about software, React, automation, and computer systems."
    pathname="/articles"
    title="Writing"
  />
)
