import React from "react"
import HyperLink from "./HyperLink"
import type { Link } from "../../types/Link"
import { routes } from "../../constants/routes"

const Greeting = (): React.ReactElement => {
  const projectsLink: Link = {
    url: `${routes.projects.path}/`,
  }

  const articlesLink: Link = {
    url: `${routes.articles.path}/`,
  }

  const projectsLinkElement = (
    <span className="inline-block">
      <HyperLink link={projectsLink} className="underline underline-offset-2">
        projects
      </HyperLink>
    </span>
  )

  const blogLinkElement = (
    <span className="inline-block">
      <HyperLink link={articlesLink} className="underline underline-offset-2">
        articles
      </HyperLink>
    </span>
  )

  return (
    <p className="font-light">
      Hello there! I&apos;m Ejeh Daniel, a full-stack software engineer. I am
      skilled in both frontend and backend development with a focus on
      delivering high-quality solutions. Check out my {projectsLinkElement}. In
      the process I write {blogLinkElement} with the goal of helping people
      learn what I do. In my spare time I read books, play video games, go to
      the movies, or enjoy music.
    </p>
  )
}

export default Greeting
