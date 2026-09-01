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
    <>
      <svg
        aria-hidden="true"
        height="100%"
        id="site-texture"
        width="100%"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="site-noise">
          <feTurbulence
            baseFrequency="0.8"
            numOctaves="4"
            stitchTiles="stitch"
            type="fractalNoise"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect filter="url(#site-noise)" height="100%" width="100%" />
      </svg>
      <div className="site-frame">
        <Header />
        <main className={`page-shell page-shell--${size} ${className}`.trim()}>
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}

export default PageLayout
