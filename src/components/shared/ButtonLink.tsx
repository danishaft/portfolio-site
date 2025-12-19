import React from "react"
import HyperLink, { HyperLinkProps } from "./HyperLink"

type ButtonLinkProps = HyperLinkProps

const ButtonLink = (props: ButtonLinkProps): React.ReactElement => {
  const { className, hoverClassName = "", children, ...rest } = props

  const hoverButtonClasses = `hover:bg-black dark:hover:bg-gray-700 hover:text-white ${hoverClassName}`
  const buttonClasses =
    "bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 py-2 px-3 rounded shadow-sm border border-solid border-gray-300 dark:border-gray-600"
  const classes = `${className} ${buttonClasses}`

  return (
    <HyperLink
      {...rest}
      className={classes}
      hoverClassName={hoverButtonClasses}
    >
      {children}
    </HyperLink>
  )
}

export default ButtonLink
