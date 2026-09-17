import { motion } from "framer-motion"
import { graphql, type HeadFC, Link, type PageProps, withPrefix } from "gatsby"
import { GatsbyImage, getImage, type IGatsbyImageData } from "gatsby-plugin-image"
import React, { memo, useCallback, useEffect, useState } from "react"
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi"

import HoverPreview from "../components/hover-preview"
import PageLayout from "../components/layouts/PageLayout"
import SEO from "../components/shared/SEO"
import { routes } from "../constants/routes"
import { socialLinks } from "../data/socials"
import { getPreviewUrl } from "../utils/get-preview-url"

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
          publicURL?: string | null
          childImageSharp?: { gatsbyImageData: IGatsbyImageData }
        } | null
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
            publicURL
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, width: 180, quality: 85)
            }
          }
        }
      }
    }
  }
`

type HoverState = {
  id: string
  rect: DOMRect
  previewUrl: string | null
}

const ITEM_HOVER_TRANSITION = {
  type: "spring" as const,
  stiffness: 400,
  damping: 30,
}

type ItemRowProps = {
  id: string
  slug: string
  title: string
  summary: string
  date: string
  readTime: number
  coverImage: IGatsbyImageData | null
  coverPublicUrl: string | null
  previewUrl: string | null
  index: number
  isHovered: boolean
  onHover: (id: string, rect: DOMRect, previewUrl: string | null) => void
}

const ItemRow = memo(function ItemRow({
  coverImage,
  id,
  slug,
  title,
  summary,
  date,
  readTime,
  previewUrl,
  index,
  isHovered,
  onHover,
}: ItemRowProps): React.ReactElement {
  const handleMouseEnter = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      onHover(id, e.currentTarget.getBoundingClientRect(), previewUrl)
    },
    [id, onHover, previewUrl]
  )

  return (
    <motion.article
      className="home-post"
      initial={{ opacity: 0, y: 5, filter: "blur(4px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ delay: 0.5 + index * 0.15, duration: 0.4, ease: "easeOut" }}
      onMouseEnter={handleMouseEnter}
      style={{ position: "relative" }}
    >
      {isHovered ? (
        <motion.div
          layoutId="home-writing-hover"
          className="home-post-hover"
          aria-hidden="true"
          transition={ITEM_HOVER_TRANSITION}
        />
      ) : null}
      <Link className="home-post-copy" to={slug}>
        <time>
          {date} · {readTime} min read
        </time>
        <h3>{title}</h3>
        <p>{summary}</p>
      </Link>
      {coverImage ? (
        <Link className="home-post-cover" to={slug} aria-hidden="true" tabIndex={-1}>
          <GatsbyImage alt={title} image={coverImage} />
        </Link>
      ) : null}
    </motion.article>
  )
})

const IndexPage = ({ data }: PageProps<HomePageData>): React.ReactElement => {
  const [hover, setHover] = useState<HoverState | null>(null)

  const handleHover = useCallback(
    (id: string, rect: DOMRect, previewUrl: string | null) => {
      setHover({ id, rect, previewUrl })
    },
    []
  )

  const handleLeave = useCallback(() => {
    setHover(null)
  }, [])

  useEffect(() => {
    if (typeof window === "undefined") return
    const onScroll = () => setHover(null)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

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
            I started <span className="accent-word">pulling apart machines</span> from a
            young age, almost around the same time I started playing with{" "}
            <span className="accent-word">Lego blocks</span>. Somehow I found the
            computer, and it&apos;s turned into an interesting career.
          </p>
          <p>
            It&apos;s been an interesting journey. In my previous life, I started out as
            an <span className="accent-word">engineer building hardware</span>. Now
            I&apos;m having a blast with computers and software. I&apos;m currently a{" "}
            <span className="accent-word">software engineer at Doow</span>, building
            software for finance and procurement teams alongside{" "}
            <span className="accent-word">AI-powered products</span>.
          </p>
          <p>
            If you&apos;re here on my little space on the internet, then something
            caught your attention, and you&apos;re most welcome. This is my hub for{" "}
            <span className="accent-word">writing and thoughtful technical pieces</span>
            , thinking, <span className="accent-word">solving problems with code</span>,
            and the <span className="accent-word">interesting and random projects</span>{" "}
            I get myself into.
          </p>
          <p>
            Take some time to <span className="accent-word">look around</span> before
            you leave.
          </p>
        </div>

        <nav aria-label="Portfolio sections" className="home-destinations">
          <Link to={routes.about.path}>
            About <FiArrowUpRight aria-hidden="true" />
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
        {/* biome-ignore lint/a11y/noStaticElementInteractions: hover preview container */}
        <div className="home-post-list" onMouseLeave={handleLeave}>
          {data.allMdx.nodes.map((post, i) => {
            const gatsbyData =
              post.frontmatter.cover?.childImageSharp?.gatsbyImageData ?? null
            // getImage normalizes gatsbyImageData for GatsbyImage; fallback to raw data
            const normalized = getImage(gatsbyData)
            const coverImage = (normalized ??
              (gatsbyData as unknown as IGatsbyImageData | null)) as IGatsbyImageData | null
            const coverPublicUrl = post.frontmatter.cover?.publicURL ?? null
            const rawPreviewUrl = getPreviewUrl(post.fields.slug, coverPublicUrl)
            // withPrefix needed for prod (/portfolio-site/static/...), dev serves at /portfolio-site with --prefix-paths
            const previewUrl = rawPreviewUrl ? withPrefix(rawPreviewUrl) : null
            const isHovered = hover?.id === post.id
            return (
              <ItemRow
                key={post.id}
                id={post.id}
                slug={post.fields.slug}
                title={post.frontmatter.title}
                summary={post.frontmatter.summary}
                date={post.frontmatter.date}
                readTime={post.frontmatter.readTime}
                coverImage={coverImage}
                coverPublicUrl={coverPublicUrl}
                previewUrl={previewUrl}
                index={i}
                isHovered={isHovered}
                onHover={handleHover}
              />
            )
          })}
        </div>
        {/* Hidden on mobile, visible md:block equivalent */}
        <div className="home-writing-preview" aria-hidden="true">
          <HoverPreview
            anchorRect={hover?.rect ?? null}
            previewUrl={hover?.previewUrl ?? null}
            title={
              hover
                ? data.allMdx.nodes.find((n) => n.id === hover.id)?.frontmatter.title
                : undefined
            }
          />
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
