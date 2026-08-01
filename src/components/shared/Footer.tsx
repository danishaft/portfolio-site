import React from "react"

const Footer = (): React.ReactElement => {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <p>&copy; {new Date().getFullYear()} Ejeh Daniel</p>
        <a className="footer-email" href="mailto:connectejehdanielayo@outlook.com">
          connectejehdanielayo@outlook.com
        </a>
      </div>
    </footer>
  )
}

export default Footer
