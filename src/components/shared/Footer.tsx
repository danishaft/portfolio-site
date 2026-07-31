import React from "react"

const links = [
  { label: "GitHub", url: "https://github.com/danishaft" },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/ejeh-daniel-482409190/",
  },
  { label: "X", url: "https://x.com/EjehAy_Daniel" },
]

const Footer = (): React.ReactElement => {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>
          <strong>Ejeh Daniel</strong>
          <p>Software engineer at Doow. Based in London.</p>
        </div>
        <nav className="footer-links" aria-label="Social links">
          {links.map((link) => (
            <a href={link.url} key={link.url} rel="noreferrer" target="_blank">
              {link.label}
            </a>
          ))}
          <a href="mailto:connectejehdanielayo@outlook.com">Email</a>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
