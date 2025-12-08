// @flow
import { socialLinkTypes } from '../types/SocialLink';
import type { SocialLink } from '../types/SocialLink';

export const socialLinks: SocialLink[] = [
  {
    type: socialLinkTypes.linkedIn,
    url: 'https://www.linkedin.com/in/ejeh-daniel-482409190/',
    secondary: false,
    caption: 'Ejeh Daniel on LinkedIn',
  },
  {
    type: socialLinkTypes.gitHub,
    url: 'https://github.com/danishaft',
    secondary: false,
    caption: 'Ejeh Daniel on GitHub',
  },
  {
    type: socialLinkTypes.twitter,
    url: 'https://x.com/EjehAy_Daniel',
    secondary: false,
    caption: 'Ejeh Ay Daniel on X',
  },
  {
    type: socialLinkTypes.devTo,
    url: 'https://dev.to/danishaft',
    secondary: true,
    caption: 'Ejeh Daniel on DevTo',
  },
];
