import { type HeadFC, Link } from "gatsby"
import React from "react"
import { FiArrowLeft } from "react-icons/fi"

import PageLayout from "../components/layouts/PageLayout"
import SEO from "../components/shared/SEO"

const NotFoundPage = (): React.ReactElement => (
  <PageLayout className="not-found-page">
    <p className="eyebrow">404</p>
    <h1>This page does not exist.</h1>
    <Link className="text-link" to="/">
      <FiArrowLeft aria-hidden="true" /> Back home
    </Link>
  </PageLayout>
)

export default NotFoundPage

export const Head: HeadFC = () => (
  <SEO description="Page not found." pathname="/404" title="Not found" />
)
