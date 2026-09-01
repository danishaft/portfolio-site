import { type HeadFC, withPrefix } from "gatsby"
import React from "react"

import PageLayout from "../components/layouts/PageLayout"
import SEO from "../components/shared/SEO"
import { socialLinks } from "../data/socials"

const AboutPage = (): React.ReactElement => {
  return (
    <PageLayout className="about-page">
      <div className="about-layout">
        <aside className="about-profile">
          <div className="about-portrait">
            <img
              alt="Ejeh Daniel wearing a burgundy suit outdoors"
              src={withPrefix("/media/profile.webp")}
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
            I&apos;m a <span className="accent-word">software engineer at Doow</span>,
            where I build software that helps finance teams understand what their
            companies spend on software, who is using it, and how to save money before
            it is wasted.
          </p>
          <p>
            I hope to develop better <span className="accent-word">interactive software</span> that adds more value to
            people&apos;s lives and creates more immersive experiences that bring them
            joy. Towards that goal, I am a generalist and care deeply about{" "}
            <span className="accent-word">systems</span>, which form the fundamental
            building blocks of our applications, and{" "}
            <span className="accent-word">interaction design</span>, which shapes how we
            use and live with the computers around us.
          </p>
          <p>
            Most of my work is in the <span className="accent-word">JavaScript ecosystem</span>, across{" "}
            <span className="accent-word">frontend, backend</span>, desktop applications,
            and <span className="accent-word">AI agents</span>, with a deeper
            specialization in <span className="accent-word">React and TypeScript</span>.
            I like going deep and really understanding how things work, and I like going
            broad and thinking about the big picture. Whether you need long-term help
            forming and executing a technical vision at a strategic level or have
            something quick that needed to be done yesterday at an operational level, I
            can help. I&apos;m good at learning and adapting, and I love{" "}
            <span className="accent-word">mentoring</span> and being a{" "}
            <span className="accent-word">team enabler</span> just as much as I love
            technical challenges.
          </p>
          <p>
            Bridging the <span className="accent-word">server-client divide</span>,{" "}
            <span className="accent-word">performance</span>,{" "}
            <span className="accent-word">architecture</span>, Node, Next.js, build
            tooling, testing, frontend DevOps, and building{" "}
            <span className="accent-word">AI agents</span> and AI solutions into
            software products to create more business value are some of my strengths. I
            believe that, for both humans and agents in the era of AI, great{" "}
            <span className="accent-word">DX is an enabler for great UX</span>. I&apos;m
            pragmatic, and I thrive on finding simple abstractions for complex problems,
            whether in web products or AI agents.
          </p>
          <p>
            In my spare time, I work on open-source software and experiments around
            music production and developer workflows. Most of them begin as tools I want
            to use myself.
          </p>
          <p>
            I enjoy pretty much anything outdoors, as well as attending meetups and
            hanging out with family and friends.
          </p>
        </article>
      </div>
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
