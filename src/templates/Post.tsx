import { graphql, type HeadFC, type PageProps, withPrefix } from "gatsby"
import { GatsbyImage, getImage, type IGatsbyImageData } from "gatsby-plugin-image"
import React from "react"

import PageLayout from "../components/layouts/PageLayout"
import SEO from "../components/shared/SEO"

type PostData = {
  mdx: {
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
        readTime
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
      <header className="post-header">
        <h1>{post.frontmatter.title}</h1>
        <p>{post.frontmatter.summary}</p>
        <div className="post-author">
          <img alt="" src={withPrefix("/media/profile.webp")} />
          <div>
            <strong>Ejeh Daniel</strong>
            <p>
              <time>{post.frontmatter.date}</time>
              <span aria-hidden="true"> · </span>
              {post.frontmatter.readTime} min read
            </p>
          </div>
        </div>
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
