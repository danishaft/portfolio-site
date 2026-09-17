import { type HeadFC, Link, withPrefix } from "gatsby"
import React from "react"

import WorkList from "../components/elements/WorkList"
import PageLayout from "../components/layouts/PageLayout"
import SEO from "../components/shared/SEO"
import { routes } from "../constants/routes"
import { socialLinks } from "../data/socials"

const AboutPage = (): React.ReactElement => {
  return (
    <PageLayout className="about-page">
      <div className="about-layout">
        <aside className="about-profile">
          <div className="about-portrait">
            <img
              alt="Ejeh Daniel wearing a burgundy suit outdoors"
              src={withPrefix("/media/about.webp")}
            />
          </div>
          <nav aria-label="Contact Ejeh Daniel" className="about-socials">
            {socialLinks.map(({ external, icon: Icon, label, url }) => (
              <a
                href={url}
                key={label}
                rel={external ? "noreferrer" : undefined}
                target={external ? "_blank" : undefined}
              >
                <Icon aria-hidden="true" />
                <span>{label === "Email" ? "Email me" : `Follow on ${label}`}</span>
              </a>
            ))}
          </nav>
        </aside>

        <article className="about-story">
          <h1>Who am I?</h1>
          <p>
            Daniel is a software engineer who started out in hardware engineering before
            finding his way into software. That curiosity about how things work has
            stayed with him, and today I hope to develop better{" "}
            <span className="accent-word">interactive software</span> that adds more
            value to people&apos;s lives and creates more immersive experiences that
            bring them joy.
          </p>
          <p>
            Towards that goal, I&apos;m a generalist and care deeply about{" "}
            <span className="accent-word">systems</span>, which form the fundamental
            building blocks of our applications, and{" "}
            <span className="accent-word">interaction design</span>, which shapes how we
            use and live with computers.
          </p>
          <p>
            Currently, I work at <span className="accent-word">Doow</span>, building
            software for finance and procurement teams alongside AI-powered products.
            I&apos;ve worked across frontend, backend, desktop applications, and AI,
            from building AI CFO interfaces and a native spreadsheet engine to browser
            and desktop usage tracking. Most of my work is in the JavaScript ecosystem,
            with a deeper specialization in{" "}
            <span className="accent-word">React and TypeScript</span>.
          </p>
          <p>
            I like going deep and really understanding how things work, while still
            thinking about the bigger picture. I&apos;m good at learning and adapting,
            and I love <span className="accent-word">mentoring</span> and being a{" "}
            <span className="accent-word">team enabler</span> just as much as I love
            technical challenges.
          </p>
          <p>
            Outside of work, I build open-source software and experiments around music
            production, browsers, and developer workflows. Most of them begin as tools I
            want to use myself.
          </p>
          <p>
            I enjoy producing beats, making music, pretty much anything outdoors, as
            well as attending meetups and hanging out with family and friends.
          </p>
        </article>
      </div>

      <section className="about-work" aria-label="Work experience">
        <header className="editorial-section-header">
          <h2>Work Experience</h2>
        </header>
        <p className="about-work-intro">
          Feel free to check out my <Link to={routes.resume.path}>resume</Link> for more
          details on my experience and skills. But for a highlight:
        </p>
        <WorkList />
      </section>
    </PageLayout>
  )
}

export default AboutPage

export const Head: HeadFC = () => (
  <SEO
    description="About Ejeh Daniel, a London-based software engineer working across product engineering, AI systems, developer tools, and music software."
    pathname="/about"
    title="About"
    type="profile"
  />
)
