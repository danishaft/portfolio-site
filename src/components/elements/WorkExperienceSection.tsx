import React from 'react';

import type { WorkExperience as WorkExperienceType } from '../../types/WorkExperience';
import WorkExperienceItem from './WorkExperienceItem';
import H, { hLevel } from '../shared/H';

type WorkExperienceSectionProps = {
  experiences?: WorkExperienceType[],
};

const WorkExperienceSection = (props: WorkExperienceSectionProps): React.ReactElement | null => {
  const { experiences } = props;

  if (!experiences || experiences.length === 0) {
    return null;
  }

  const experienceItems = experiences.map((experience, index) => (
    <WorkExperienceItem key={index} experience={experience} />
  ));

  return (
    <div className="mt-16">
      <H level={hLevel.h2} className="font-display font-bold mb-2 text-gray-900 dark:text-gray-100">
        Work Experience
      </H>
      <div className="text-sm text-gray-500 dark:text-gray-400 mb-6">
        Companies I&apos;ve worked with
      </div>
      <div>
        {experienceItems}
      </div>
    </div>
  );
};

export default WorkExperienceSection;
