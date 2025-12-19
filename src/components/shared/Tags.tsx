import React from "react"

import type { Tag as TagType } from "../../types/Tag"
import Expander from "./Expander"

type TagsProps = {
  tags: TagType[]
  className?: string
  itemClassName?: string
  numToShow?: number
}

type TagProps = {
  tag: TagType
}

const Tag = (props: TagProps): React.ReactElement => {
  const { tag } = props

  return (
    <span
      key={tag.name}
      className="inline-block bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-sm px-2 py-1 text-xs font-normal last:mr-0"
    >
      {tag.name}
    </span>
  )
}

const Tags = (props: TagsProps): React.ReactElement | null => {
  const {
    tags,
    className = "",
    itemClassName = "mr-2 mb-2",
    numToShow = Infinity,
  } = props

  if (!tags) {
    return null
  }

  const defaultClasses = ""
  const classes = `${defaultClasses} ${className}`

  const onRender = (tag: TagType): React.ReactElement => {
    return <Tag key={tag.name} tag={tag} />
  }

  const toHide = (tag: TagType, index: number): boolean => {
    return index >= numToShow
  }

  return (
    <div className={classes}>
      <Expander
        items={tags}
        toHide={toHide}
        onRender={onRender}
        itemClassName={itemClassName}
      />
    </div>
  )
}

export default Tags
