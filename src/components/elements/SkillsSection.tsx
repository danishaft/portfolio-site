import React from "react"

import type { SkillCategory as SkillCategoryType } from "../../types/Skill"
import H, { hLevel } from "../shared/H"
import Tags from "../shared/Tags"

type SkillCategoryItemProps = {
  category: SkillCategoryType
}

type SkillsSectionProps = {
  skillCategories?: SkillCategoryType[]
}

const SkillCategoryItem = (
  props: SkillCategoryItemProps
): React.ReactElement | null => {
  const { category } = props

  if (!category || !category.skills || category.skills.length === 0) {
    return null
  }

  const categoryTitle = category.name ? (
    <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">
      {category.name}
    </h3>
  ) : null

  return (
    <div className="mb-6 last:mb-0">
      {categoryTitle}
      <Tags tags={category.skills} />
    </div>
  )
}

const SkillsSection = (
  props: SkillsSectionProps
): React.ReactElement | null => {
  const { skillCategories } = props

  if (!skillCategories || skillCategories.length === 0) {
    return null
  }

  const categoryItems = skillCategories.map((category, index) => (
    <SkillCategoryItem key={index} category={category} />
  ))

  return (
    <div className="mt-16">
      <H
        level={hLevel.h2}
        className="font-display font-bold mb-2 text-gray-900 dark:text-gray-100"
      >
        Skills
      </H>
      <div className="text-sm text-gray-500 dark:text-gray-400 mb-6">
        Technologies I work with
      </div>
      <div>{categoryItems}</div>
    </div>
  )
}

export default SkillsSection
