import React from "react"

import type { Profile as ProfileType } from "../../types/Profile"
import Avatar from "../shared/Avatar"
import H, { hLevel } from "../shared/H"
import Tags from "../shared/Tags"
import SocialLinks from "../shared/SocialLinks"
import Greeting from "../shared/Greeting"
import WorkExperienceSection from "./WorkExperienceSection"
import SkillsSection from "./SkillsSection"

type ProfileProps = {
  profile: ProfileType
}

const Profile = (props: ProfileProps): React.ReactElement => {
  const { profile } = props

  const avatarElement = profile.avatar ? (
    <div className="flex-shrink-0">
      <Avatar
        avatar={profile.avatar}
        className="w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl"
      />
    </div>
  ) : null

  const positionAndLocationElement =
    profile?.position || profile?.location ? (
      <div className="text-lg text-gray-800 dark:text-gray-200 mb-6 flex flex-row items-center gap-2 whitespace-nowrap">
        {profile?.position && <span>{profile.position}</span>}
        {profile?.position && profile?.location && <span>|</span>}
        {profile?.location && <span>{profile.location.name}</span>}
      </div>
    ) : null

  const tagsElement =
    profile?.tags && profile.tags.length > 0 ? (
      <div className="mb-6">
        <Tags tags={profile.tags} />
      </div>
    ) : null

  const socialLinksElement = (
    <div className="mt-2">
      <SocialLinks links={profile?.socialLinks} forceShowingSecondaryLinks />
    </div>
  )

  const workExperienceSection = profile?.workExperience ? (
    <WorkExperienceSection experiences={profile.workExperience} />
  ) : null

  const skillsSection = profile?.skillCategories ? (
    <SkillsSection skillCategories={profile.skillCategories} />
  ) : null

  return (
    <div>
      {/* Hero Section */}
      <div className="flex flex-col-reverse items-center lg:flex-row lg:justify-between lg:items-center gap-8 lg:gap-12">
        {/* Left column - Text content */}
        <div className="flex flex-col items-center lg:items-start max-w-xl">
          <p className="text-xl sm:text-2xl font-light text-gray-600 dark:text-gray-400 mb-2">
            Hi, I&apos;m
          </p>
          <H
            level={hLevel.h1}
            className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold uppercase tracking-tight mb-4 text-center lg:text-left"
          >
            {profile?.firstName}
            <br />
            {profile?.lastName}
          </H>
          {positionAndLocationElement}
          {tagsElement}
          <div className="mb-6 text-gray-600 dark:text-gray-400">
            <Greeting />
          </div>
          {socialLinksElement}
        </div>
        {/* Right column - Avatar */}
        {avatarElement}
      </div>

      {/* Work Experience & Skills - Side by Side on Desktop */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Work Experience Section */}
        {workExperienceSection}

        {/* Skills Section */}
        {skillsSection}
      </div>
    </div>
  )
}

export default Profile
