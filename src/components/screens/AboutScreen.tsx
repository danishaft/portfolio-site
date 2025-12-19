import React from "react"

import PageLayout from "../layouts/PageLayout"
import type { Profile as ProfileType } from "../../types/Profile"
import Profile from "../elements/Profile"

type AboutScreenProps = {
  profile: ProfileType
}

const AboutScreen = (props: AboutScreenProps): React.ReactElement => {
  const { profile } = props

  return (
    <PageLayout>
      <Profile profile={profile} />
    </PageLayout>
  )
}

export default AboutScreen
