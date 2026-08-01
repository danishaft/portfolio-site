import React from "react"

type PageHeaderProps = {
  description?: string
  title: string
}

const PageHeader = ({ description, title }: PageHeaderProps): React.ReactElement => {
  return (
    <header className="page-header">
      <h1>{title}</h1>
      {description ? <p>{description}</p> : null}
    </header>
  )
}

export default PageHeader
