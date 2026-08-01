import { graphql, type HeadFC, Link, type PageProps } from "gatsby"
import { GatsbyImage, getImage, type IGatsbyImageData } from "gatsby-plugin-image"
import React from "react"

import PageLayout from "../components/layouts/PageLayout"
import PageHeader from "../components/shared/PageHeader"
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
        readTime: number
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
          readTime
          cover {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, width: 240, quality: 88)
            }
          }
        }
      }
    }
  }
`

const WritingPage = ({ data }: PageProps<WritingPageData>): React.ReactElement => {
  return (
    <PageLayout className="writing-page" size="list">
      <PageHeader title="Writing" />

      <div className="article-list">
        {data.allMdx.nodes.map((post) => {
          const image = getImage(
            post.frontmatter.cover?.childImageSharp?.gatsbyImageData ?? null
          )
          return (
            <article className="article-row" key={post.id}>
              <Link className="article-row-copy" to={post.fields.slug}>
                <time>
                  {post.frontmatter.date} · {post.frontmatter.readTime} min read
                </time>
                <h2>{post.frontmatter.title}</h2>
                <p>{post.frontmatter.summary}</p>
              </Link>
              {image ? (
                <Link
                  aria-label={`Read ${post.frontmatter.title}`}
                  className="article-row-cover"
                  to={post.fields.slug}
                >
                  <GatsbyImage alt="" image={image} />
                </Link>
              ) : null}
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
