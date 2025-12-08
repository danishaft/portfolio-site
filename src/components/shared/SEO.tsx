import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import {
  siteURL,
  windowNamePrefix,
  windowNameSeparator,
  twitterUser,
  siteImage,
} from '../../constants/siteMeta';

type TitleMode = 'prefix' | 'suffix';

export const titleModePrefix: TitleMode = 'prefix';
export const titleModeSuffix: TitleMode = 'suffix';

// @see: https://ogp.me/
type ogType = 'article' | 'website' | 'profile';

export const ogTypeArticle: ogType = 'article';
export const ogTypeWebsite: ogType = 'website';
export const ogTypeProfile: ogType = 'profile';

type SEOProps = {
  title: string,
  description: string,
  image?: string,
  twitterUsername?: string,
  // No trailing slash allowed!
  // @see: https://www.gatsbyjs.com/docs/add-seo-component/
  baseURL?: string,
  titleMode?: TitleMode,
  type?: ogType,
  pathname?: string,
};

// @see: https://www.gatsbyjs.com/docs/add-seo-component/
const SEO = (props: SEOProps): React.ReactElement => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            siteUrl
          }
        }
      }
    `
  );

  const {
    title,
    description,
    baseURL = site.siteMetadata?.siteUrl || siteURL,
    twitterUsername = twitterUser,
    titleMode = titleModePrefix,
    image = siteImage,
    type = ogTypeWebsite,
    pathname = typeof window !== 'undefined' ? window.location.pathname : '',
  } = props;

  // Use siteMetadata title if available, otherwise fall back to constant
  const siteTitle = site.siteMetadata?.title || windowNamePrefix;

  const extendedTitle = titleMode === titleModePrefix
    ? `${siteTitle} ${windowNameSeparator} ${title}`
    : `${title} ${windowNameSeparator} ${siteTitle}`;

  const bannerURL = `${baseURL}${image}`;
  const pageURL = `${baseURL}${pathname}`;

  // @see: https://ogp.me/
  return (
    <>
      <title>{extendedTitle}</title>
      <meta name="description" content={description} />
      <meta name="image" content={bannerURL} />

      <meta property="og:title" content={extendedTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={pageURL} />
      <meta property="og:image" content={bannerURL} />
      <meta property="og:type" content={type} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:title" content={extendedTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={bannerURL} />
      <meta name="twitter:url" content={pageURL} />
    </>
  );
};

export default SEO;
