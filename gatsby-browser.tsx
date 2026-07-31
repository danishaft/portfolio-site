// @see: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/

import type { WrapRootElementBrowserArgs } from "gatsby"
import React from "react"

import "./src/styles/global.css"

// Prism.js theme.
// @see: https://github.com/PrismJS/prism/tree/1d5047df37aacc900f8270b1c6215028f6988eb1/themes
import "prismjs/themes/prism-okaidia.css"

import { ThemeProvider } from "./src/components/shared/ThemeProvider"

// Wraps the root element with providers.
export function wrapRootElement(args: WrapRootElementBrowserArgs): React.ReactElement {
  const { element } = args
  return <ThemeProvider>{element}</ThemeProvider>
}
