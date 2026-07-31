import type { HeadFC } from "gatsby"
import React from "react"

import PageLayout from "../components/layouts/PageLayout"
import SEO from "../components/shared/SEO"

const AboutPage = (): React.ReactElement => {
  return (
    <PageLayout className="content-page about-page">
      <header className="page-intro">
        <p className="eyebrow">About</p>
        <h1>I like seeing the whole product.</h1>
      </header>

      <div className="about-grid">
        <div className="about-copy">
          <p>
            I&apos;m a software engineer at Doow, based in London. I work end to end on
            product features, from framing the problem with product and design to
            building across frontend and backend systems.
          </p>
          <p>
            I like going deep enough to understand how something works and broad enough
            to understand why it should exist. That has taken me from React product
            systems into desktop applications, Rust hosts, AI agents, internal
            engineering tools, observability, and data workflows.
          </p>
          <p>
            I&apos;m especially interested in how AI changes the way software is
            designed and built. Outside Doow, I make developer tools and software for
            music producers, usually because I want to use the product myself.
          </p>
        </div>
        <aside className="about-details" aria-label="Details">
          <div>
            <span>Based in</span>
            <strong>London, UK</strong>
          </div>
          <div>
            <span>Currently</span>
            <strong>Software Engineer at Doow</strong>
          </div>
          <div>
            <span>Interested in</span>
            <strong>Fintech, AI agents, developer tools, and music</strong>
          </div>
          <div>
            <span>Email</span>
            <a href="mailto:connectejehdanielayo@outlook.com">
              connectejehdanielayo@outlook.com
            </a>
          </div>
        </aside>
      </div>
    </PageLayout>
  )
}

export default AboutPage

export const Head: HeadFC = () => (
  <SEO
    description="About Ejeh Daniel, a software engineer at Doow based in London."
    pathname="/about"
    title="About"
  />
)
