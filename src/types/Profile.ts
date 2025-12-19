import { SocialLink } from "./SocialLink"
import { Tag } from "./Tag"
import { Location } from "./Location"
import { Image } from "./Image"
import { WorkExperience } from "./WorkExperience"
import { SkillCategory } from "./Skill"

export type Profile = {
  firstName?: string
  lastName?: string
  position?: string
  avatar?: Image
  summary?: string[]
  socialLinks?: SocialLink[]
  tags?: Tag[]
  location?: Location
  workExperience?: WorkExperience[]
  skillCategories?: SkillCategory[]
}
