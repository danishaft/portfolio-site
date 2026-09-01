import { Link } from "gatsby"
import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react"
import { FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi"

import { routes, TOP_NAV } from "../../constants/routes"
import { useTheme } from "./ThemeProvider"

const Header = (): React.ReactElement => {
  const [menuOpen, setMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const navRef = useRef<HTMLElement>(null)
  const [indicator, setIndicator] = useState({ left: 0, width: 0, opacity: 0 })
  const [hoverPos, setHoverPos] = useState<{ left: number; width: number } | null>(null)
  const pathnameRef = useRef(typeof window !== "undefined" ? window.location.pathname : "/")
  const [ready, setReady] = useState(false)

  useLayoutEffect(() => {
    pathnameRef.current = window.location.pathname
  })

  const measureActive = useCallback((isInit = false) => {
    const nav = navRef.current
    if (!nav) return
    const currentPathname = pathnameRef.current
    const links = nav.querySelectorAll("a")
    const activeTab = Array.from(links).find(
      (link) => {
        const href = (link as HTMLAnchorElement).getAttribute("href")
        return href && currentPathname.replace(/\/$/, "") === href.replace(/\/$/, "")
      }
    ) as HTMLElement | null
    if (!activeTab) {
      setIndicator(prev => prev.opacity === 0 ? prev : { left: 0, width: 0, opacity: 0 })
      return
    }
    const rect = activeTab.getBoundingClientRect()
    const navRect = nav.getBoundingClientRect()
    const newLeft = rect.left - navRect.left
    const newWidth = rect.width
    if (isInit) {
      setIndicator({ left: newLeft, width: newWidth, opacity: 1 })
      return
    }
    setIndicator(prev => {
      if (prev.left === newLeft && prev.width === newWidth && prev.opacity === 1) return prev
      return { left: newLeft, width: newWidth, opacity: 1 }
    })
  }, [])

  const initRef = useRef(false)
  useLayoutEffect(() => {
    if (!initRef.current) {
      initRef.current = true
      measureActive(true)
    }
    const raf = requestAnimationFrame(() => measureActive())
    return () => cancelAnimationFrame(raf)
  })

  useLayoutEffect(() => {
    // enable transition after first paint (like vanilla drawLine init=true)
    const raf = requestAnimationFrame(() => requestAnimationFrame(() => setReady(true)))
    return () => cancelAnimationFrame(raf)
  }, [])

  const activeLeft = hoverPos?.left ?? indicator.left
  const activeWidth = hoverPos?.width ?? indicator.width

  const handleLinkEnter = useCallback(
    (route: { path: string }) => () => {
      const nav = navRef.current
      if (!nav) return
      const links = nav.querySelectorAll("a")
      const tab = Array.from(links).find(
        (l) => {
          const h = (l as HTMLAnchorElement).getAttribute("href")
          return h && h.replace(/\/$/, "") === route.path.replace(/\/$/, "")
        }
      ) as HTMLElement | null
      if (!tab) return
      const rect = tab.getBoundingClientRect()
      const navRect = nav.getBoundingClientRect()
      setHoverPos({ left: rect.left - navRect.left, width: rect.width })
    },
    []
  )

  const handleNavLeave = useCallback(() => {
    setHoverPos(null)
  }, [])

  useEffect(() => {
    const handleResize = () => measureActive()
    window.addEventListener("resize", handleResize)
    const origPush = window.history.pushState
    window.history.pushState = function (...args) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const ret = (origPush as any).apply(this, args)
      pathnameRef.current = window.location.pathname
      requestAnimationFrame(() => measureActive())
      return ret
    }
    const handlePop = () => {
      pathnameRef.current = window.location.pathname
      requestAnimationFrame(() => measureActive())
    }
    window.addEventListener("popstate", handlePop)
    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("popstate", handlePop)
      window.history.pushState = origPush
    }
  }, [measureActive])

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
            onMouseLeave={handleNavLeave}
            ref={navRef as React.RefObject<HTMLDivElement>}
          >
            <span
              aria-hidden="true"
              className="nav-indicator"
              style={{
                left: activeLeft,
                opacity: indicator.opacity,
                transition: ready ? undefined : "none",
                width: activeWidth,
              }}
            />
            {TOP_NAV.map((route, index) =>
              route.enabled === false ? (
                <span
                  aria-disabled="true"
                  className="primary-nav-disabled"
                  key={route.path}
                  title="Sound is coming soon"
                >
                  {route.name}
                  <span className="visually-hidden"> (coming soon)</span>
                </span>
              ) : (
                <Link
                  activeClassName="active"
                  key={route.path}
                  onMouseEnter={handleLinkEnter(route)}
                  onFocus={handleLinkEnter(route)}
                  partiallyActive={route.path !== "/"}
                  to={route.path}
                >
                  {route.name}
                </Link>
              )
            )}
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