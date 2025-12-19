import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FiRss } from 'react-icons/fi';

import HyperLink from './HyperLink';
import { rssPath } from '../../constants/links';
import Row from './Row';
import SocialLinks from './SocialLinks';
import { profile } from '../../data/profile';
import { FOOTER_NAV, Route } from '../../constants/routes';
import { Link } from '../../types/Link';

type FooterProps = {
  className?: string;
};

const FooterMenu = (): React.ReactElement => {
  const links = Object.values(FOOTER_NAV)
    .map((route: Route): React.ReactElement => {
      // Adding a / to the end of the links so that activeClassName parameter
      // would work correctly.
      const url = route.path === '/' ? route.path : `${route.path}/`;
      const link: Link = { url };
      return (
        <li key={route.path} className="ml-5">
          <HyperLink
            link={link}
            className="uppercase text-xs"
            activeClassName="font-bold"
          >
            {route.name}
          </HyperLink>
        </li>
      );
    });

  return (
    <ul className="flex flex-row">
      {links}
    </ul>
  );
};


const Footer = (props: FooterProps): React.ReactElement => {
  const { className = '' } = props;

  return (
    <footer className={`flex flex-col justify-center items-center ${className}`}>
      {!!FOOTER_NAV.length && (
      <Row className="mb-6">
        <FooterMenu />
      </Row>
      )}

      <Row className="mb-6">

        <HyperLink
          link={{ url: rssPath }}
          className="text-xs"
          startEnhancer={<FiRss size={20} />}
        >
          RSS
        </HyperLink>
      </Row>

      <div
        style={{ flex: 1 }}
        className="flex flex-row items-center justify-center"
      >
        <SocialLinks
          links={profile?.socialLinks}
          expandable={false}
          iconClassName="w-5 h-5"
          itemClassName="mr-2 ml-2"
        />
      </div>
    </footer>
  );
};

export default Footer;
