import * as React from "react"
import type { HeadFC } from "gatsby"

import PageLayout from "../components/layouts/PageLayout"
import SEO from "../components/shared/SEO"

const NotFoundPage = (): React.ReactElement => (
  <PageLayout>
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </PageLayout>
)

export default NotFoundPage

export const Head: HeadFC = () => (
  <SEO title="404: Not Found" description="Page not found" />
)
