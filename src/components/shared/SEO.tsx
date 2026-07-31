import React from "react"

import { siteImage, siteURL, twitterUser } from "../../constants/siteMeta"

type SEOProps = {
  title?: string
  description: string
  image?: string
  pathname?: string
  type?: "article" | "profile" | "website"
}

const SEO = ({
  title,
  description,
  image = siteImage,
  pathname = "",
  type = "website",
}: SEOProps): React.ReactElement => {
  const pageTitle = title ? `${title} | Ejeh Daniel` : "Ejeh Daniel"
  const pageURL = `${siteURL}${pathname}`
  const imageURL = image.startsWith("http") ? image : `${siteURL}${image}`

  return (
    <>
      <title>{pageTitle}</title>
      <meta content={description} name="description" />
      <link href={pageURL} rel="canonical" />
      <meta content={pageTitle} property="og:title" />
      <meta content={description} property="og:description" />
      <meta content={pageURL} property="og:url" />
      <meta content={imageURL} property="og:image" />
      <meta content={type} property="og:type" />
      <meta content="summary_large_image" name="twitter:card" />
      <meta content={twitterUser} name="twitter:creator" />
      <meta content={pageTitle} name="twitter:title" />
      <meta content={description} name="twitter:description" />
      <meta content={imageURL} name="twitter:image" />
    </>
  )
}

export default SEO
