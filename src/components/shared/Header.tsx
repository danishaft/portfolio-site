import React from 'react';
import { routes } from '../../constants/routes';
import { brandName } from '../../constants/siteMeta';
import type { Link as LinkType } from '../../types/Link';
import HyperLink from './HyperLink';
import { Route, TOP_NAV } from '../../constants/routes';
import { Link } from '../../types/Link';
import { useTheme } from './ThemeProvider';

type ThemeToggleProps = {
  className?: string;
};


type HeaderProps = {
  className?: string,
};

const Logo = (): React.ReactElement => {
  const link: LinkType = {
    url: routes.home.path,
  };
  return (
    <div>
      <HyperLink link={link} className="font-extrabold text-sm tracking-widest uppercase">
        {brandName}
      </HyperLink>
    </div>
  );
};

const NavMenu = (): React.ReactElement => {
  const links = Object.values(TOP_NAV)
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

const ThemeToggle = ({ className = '' }: ThemeToggleProps): React.ReactElement => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ${className}`}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        // Moon icon for light mode (click to go dark)
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5 text-gray-600 dark:text-gray-300"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
          />
        </svg>
      ) : (
        // Sun icon for dark mode (click to go light)
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5 text-gray-300"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
          />
        </svg>
      )}
    </button>
  );
};

const Header = (props: HeaderProps): React.ReactElement => {
  const { className = '' } = props;

  return (
    <header className={`flex flex-row items-center ${className}`}>
      <div className="mr-6">
        <Logo />
      </div>
      <nav className="flex-grow">
        <NavMenu />
      </nav>
      <ThemeToggle />
    </header>
  );
};

export default Header;
