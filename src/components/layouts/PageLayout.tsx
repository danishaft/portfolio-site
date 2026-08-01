import React from "react"

import Footer from "../shared/Footer"
import Header from "../shared/Header"

type PageLayoutProps = {
  children: React.ReactNode
  className?: string
  size?: "wide" | "list" | "prose"
}

const PageLayout = ({
  children,
  className = "",
  size = "wide",
}: PageLayoutProps): React.ReactElement => {
  return (
    <div className="site-frame">
      <Header />
      <main className={`page-shell page-shell--${size} ${className}`.trim()}>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default PageLayout
