// @see: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
import React from "react"
import { WrapPageElementBrowserArgs, WrapRootElementBrowserArgs } from "gatsby"

import "./src/styles/global.css"

// Prism.js theme.
// @see: https://github.com/PrismJS/prism/tree/1d5047df37aacc900f8270b1c6215028f6988eb1/themes
import "prismjs/themes/prism-okaidia.css"

import RootLayout from "./src/components/layouts/RootLayout"
import { ThemeProvider } from "./src/components/shared/ThemeProvider"

// Wraps the root element with providers.
export function wrapRootElement(
  args: WrapRootElementBrowserArgs
): React.ReactElement {
  const { element } = args
  return <ThemeProvider>{element}</ThemeProvider>
}

// Wraps every page in a component.
export function wrapPageElement(
  args: WrapPageElementBrowserArgs
): React.ReactElement {
  const { props, element } = args
  return <RootLayout {...props}>{element}</RootLayout>
}

// Client-side routing for GitHub Pages
// https://github.com/rafgraph/spa-github-pages
export function onClientEntry(): void {
  // Parse the query string
  // Keep 1 path segment to preserve /portfolio-site prefix
  const pathSegmentsToKeep = 1
  const l = window.location
  const pathIsIn404Format = l.pathname.includes("/?/")
  if (pathIsIn404Format) {
    const pathParts = l.pathname.split("/?/")
    const pathname = pathParts[1]
      ? "/" + pathParts[1].split("&")[0].replace(/~and~/g, "&")
      : l.pathname
    const search = l.search
      ? "?" + l.search.slice(1).replace(/~and~/g, "&")
      : ""
    const hash = l.hash
    const newPath = pathname + search + hash
    window.history.replaceState({}, "", newPath)
  }
}
