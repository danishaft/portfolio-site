import { graphql, type HeadFC, Link, type PageProps } from "gatsby"
import { GatsbyImage, getImage, type IGatsbyImageData } from "gatsby-plugin-image"
import React from "react"
import { FiArrowLeft } from "react-icons/fi"

import PageLayout from "../components/layouts/PageLayout"
import SEO from "../components/shared/SEO"

type PostData = {
  mdx: {
    fields: { slug: string }
    frontmatter: {
      title: string
      summary: string
      date: string
      cover?: {
        childImageSharp?: { gatsbyImageData: IGatsbyImageData }
      }
    }
  }
}

export const query = graphql`
  query PostTemplateQuery($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        title
        summary
        date(formatString: "MMMM D, YYYY")
        cover {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, quality: 90)
          }
        }
      }
    }
  }
`

const PostTemplate = ({ data, children }: PageProps<PostData>): React.ReactElement => {
  const post = data.mdx
  const cover = getImage(
    post.frontmatter.cover?.childImageSharp?.gatsbyImageData ?? null
  )

  return (
    <PageLayout className="post-page">
      <Link className="back-link" to="/articles">
        <FiArrowLeft aria-hidden="true" /> All writing
      </Link>
      <header className="post-header">
        <time>{post.frontmatter.date}</time>
        <h1>{post.frontmatter.title}</h1>
        <p>{post.frontmatter.summary}</p>
      </header>
      {cover ? (
        <GatsbyImage
          alt=""
          className="post-cover"
          image={cover}
          imgStyle={{ objectFit: "cover" }}
        />
      ) : null}
      <article className="prose post-content">{children}</article>
    </PageLayout>
  )
}

export default PostTemplate

export const Head: HeadFC<PostData> = ({ data }) => (
  <SEO
    description={data.mdx.frontmatter.summary}
    pathname={data.mdx.fields.slug}
    title={data.mdx.frontmatter.title}
    type="article"
  />
)
