import { Link } from "gatsby"
import React, { useState } from "react"
import { FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi"

import { routes, TOP_NAV } from "../../constants/routes"
import { useTheme } from "./ThemeProvider"

const Header = (): React.ReactElement => {
  const [menuOpen, setMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="site-name" to={routes.home.path}>
          Ejeh Daniel
        </Link>

        <div className="header-actions">
          <nav
            aria-label="Primary navigation"
            className={`primary-nav ${menuOpen ? "primary-nav--open" : ""}`}
            id="primary-navigation"
          >
            {TOP_NAV.map((route) => (
              <Link
                activeClassName="active"
                key={route.path}
                onClick={() => setMenuOpen(false)}
                partiallyActive
                to={route.path}
              >
                {route.name}
              </Link>
            ))}
          </nav>

          <button
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            className="icon-button"
            onClick={toggleTheme}
            title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            type="button"
          >
            {theme === "light" ? <FiMoon /> : <FiSun />}
          </button>

          <button
            aria-controls="primary-navigation"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            className="icon-button menu-button"
            onClick={() => setMenuOpen((open) => !open)}
            type="button"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
