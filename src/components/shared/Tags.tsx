import React, { useState } from "react"

import type { Tag as TagType } from "../../types/Tag"
import Expander from "./Expander"

type TagsProps = {
  tags: TagType[]
  className?: string
  itemClassName?: string
  numToShow?: number
}

type TagProps = {
  tag: TagType
}

// Technology logo mapping - you can add more logos here
const getTechLogo = (name: string): string | null => {
  const logoMap: Record<string, string> = {
    TypeScript:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    JavaScript:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    HTML: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    CSS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    React:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    "Next.js":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    "Tailwind CSS":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
    "Shadcn UI": "https://ui.shadcn.com/favicon.ico",
    "Styled Components": "https://styled-components.com/logo.png",
    Redux:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
    Storybook:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/storybook/storybook-original.svg",
    "Node.js":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    Express:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    GraphQL:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
    "REST APIs":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg",
    Prisma:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
    PostgreSQL:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    MongoDB:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    MySQL:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    Docker:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    Vercel:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
    Playwright: "https://playwright.dev/img/playwright-logo.svg",
    Vitest: "https://vitest.dev/logo.svg",
    Puppeteer: "https://pptr.dev/img/pptr-logo.svg",
    "Chrome Extensions":
      "https://www.google.com/chrome/static/images/chrome-logo.svg",
    Figma:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  }

  return logoMap[name] || null
}

const Tag = (props: TagProps): React.ReactElement => {
  const { tag } = props
  const logoUrl = tag.image?.srcPath || getTechLogo(tag.name || "")
  const [imageError, setImageError] = useState(false)

  const showFallback = !logoUrl || imageError

  return (
    <span
      key={tag.name}
      className="inline-flex items-center gap-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-sm px-2 py-1 text-xs font-normal last:mr-0"
    >
      <span className="w-4 h-4 flex-shrink-0 flex items-center justify-center">
        {!showFallback ? (
          <img
            src={logoUrl}
            alt={tag.name || ""}
            className="w-4 h-4 object-contain"
            loading="lazy"
            onError={() => setImageError(true)}
          />
        ) : (
          <span className="w-4 h-4 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold text-[8px] leading-none">
            {tag.name?.charAt(0).toUpperCase() || "?"}
          </span>
        )}
      </span>
      <span>{tag.name}</span>
    </span>
  )
}

const Tags = (props: TagsProps): React.ReactElement | null => {
  const {
    tags,
    className = "",
    itemClassName = "mr-2 mb-2",
    numToShow = Infinity,
  } = props

  if (!tags) {
    return null
  }

  const defaultClasses = ""
  const classes = `${defaultClasses} ${className}`

  const onRender = (tag: TagType): React.ReactElement => {
    return <Tag key={tag.name} tag={tag} />
  }

  const toHide = (tag: TagType, index: number): boolean => {
    return index >= numToShow
  }

  return (
    <div className={classes}>
      <Expander
        items={tags}
        toHide={toHide}
        onRender={onRender}
        itemClassName={itemClassName}
      />
    </div>
  )
}

export default Tags
