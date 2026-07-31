/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
 */

import React from "react"

import { ThemeProvider } from "./src/components/shared/ThemeProvider"

const themeInitializationScript = `
  try {
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.classList.toggle(
      "dark",
      storedTheme === "dark" || (!storedTheme && prefersDark),
    );
  } catch {}
`

export const wrapRootElement = ({ element }) => {
  return <ThemeProvider>{element}</ThemeProvider>
}

/**
 * @type {import('gatsby').GatsbySSR['onRenderBody']}
 */
export const onRenderBody = ({ setHtmlAttributes, setPreBodyComponents }) => {
  setHtmlAttributes({ lang: `en` })
  setPreBodyComponents([
    React.createElement("script", {
      key: "theme-initialization",
      // biome-ignore lint/security/noDangerouslySetInnerHtml: The fixed script runs before hydration to prevent a theme flash.
      dangerouslySetInnerHTML: { __html: themeInitializationScript },
    }),
  ])
}
