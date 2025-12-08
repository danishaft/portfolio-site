import React from 'react';
import type { HeadFC, PageProps } from 'gatsby';

import AboutScreen from '../components/screens/AboutScreen';
import SEO from '../components/shared/SEO';
import { profile } from '../data/profile';

const IndexPage = (): React.ReactElement => {
  return (
    <AboutScreen profile={profile} />
  );
};

export default IndexPage;

export const Head: HeadFC<PageProps> = ({ location }) => {
  const summary: string = profile.summary && profile.summary.length ? profile.summary[0] : '';

  return (
    <SEO
      title={`${profile.position}. ${summary}`}
      description={`${profile.firstName} ${profile.lastName}. ${profile.position}. ${summary}`}
      pathname={location.pathname}
    />
  );
};
