import React from "react"

type SectionHeadingProps = {
  eyebrow?: string
  title: string
  description?: string
}

const SectionHeading = ({
  eyebrow,
  title,
  description,
}: SectionHeadingProps): React.ReactElement => {
  return (
    <header className="section-heading">
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </header>
  )
}

export default SectionHeading
