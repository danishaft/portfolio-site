import React from "react"

import Footer from "../shared/Footer"
import Header from "../shared/Header"

type PageLayoutProps = {
  children: React.ReactNode
  className?: string
}

const PageLayout = ({
  children,
  className = "",
}: PageLayoutProps): React.ReactElement => {
  return (
    <div className="site-frame">
      <Header />
      <main className={`page-shell ${className}`}>{children}</main>
      <Footer />
    </div>
  )
}

export default PageLayout
