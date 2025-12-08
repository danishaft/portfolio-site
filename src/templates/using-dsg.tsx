import * as React from 'react';
import { Link } from 'gatsby';
import type { HeadFC } from 'gatsby';

import PageLayout from '../components/layouts/PageLayout';
import SEO from '../components/shared/SEO';

const UsingDSG = (): React.ReactElement => (
  <PageLayout>
    <h1>
      Hello from a <b>DSG Page</b>
    </h1>
    <p>This page is not created until requested by a user.</p>
    <p>
      To learn more, head over to our{' '}
      <a href="https://www.gatsbyjs.com/docs/reference/rendering-options/deferred-static-generation/">
        documentation about Deferred Static Generation
      </a>
      .
    </p>
    <Link to="/">Go back to the homepage</Link>
  </PageLayout>
);

export default UsingDSG;

export const Head: HeadFC = () => <SEO title="Using DSG" description="Deferred Static Generation example" />;

