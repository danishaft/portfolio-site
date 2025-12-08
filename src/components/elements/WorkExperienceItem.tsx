import React from 'react';
import { FiBriefcase } from 'react-icons/fi';

import type { WorkExperience as WorkExperienceType } from '../../types/WorkExperience';
import Row from '../shared/Row';

type WorkExperienceItemProps = {
  experience: WorkExperienceType,
};

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  return `${month} ${year}`;
};

const calculateDuration = (startDate: string, endDate?: string): string => {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date();
  
  const months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;
  
  const parts: string[] = [];
  if (years > 0) {
    parts.push(`${years} year${years > 1 ? 's' : ''}`);
  }
  if (remainingMonths > 0) {
    parts.push(`${remainingMonths} month${remainingMonths > 1 ? 's' : ''}`);
  }
  
  return parts.length > 0 ? `(${parts.join(' ')})` : '';
};

const WorkExperienceItem = (props: WorkExperienceItemProps): React.ReactElement | null => {
  const { experience } = props;

  if (!experience) {
    return null;
  }

  const roleElement = experience.role ? (
    <div className="font-semibold text-gray-900 dark:text-gray-100">
      {experience.role}
    </div>
  ) : null;

  const companyElement = experience.company ? (
    <span className="text-gray-600 dark:text-gray-400">
      {experience.company}
    </span>
  ) : null;

  const dateElement = experience.startDate ? (
    <div className="text-sm text-gray-500 dark:text-gray-500">
      {formatDate(experience.startDate)} - {experience.endDate ? formatDate(experience.endDate) : 'Present'}{' '}
      {calculateDuration(experience.startDate, experience.endDate)}
    </div>
  ) : null;

  const descriptionElement = experience.description ? (
    <p className="text-gray-600 dark:text-gray-400 mt-2">
      {experience.description}
    </p>
  ) : null;

  return (
    <div className="border-l-2 border-gray-200 dark:border-gray-700 pl-4 pb-6 last:pb-0">
      <Row className="mb-1">
        <FiBriefcase className="mr-2 text-gray-400 dark:text-gray-500" />
        {roleElement}
        {experience.role && experience.company && (
          <span className="mx-2 text-gray-400 dark:text-gray-500">|</span>
        )}
        {companyElement}
      </Row>
      {dateElement}
      {descriptionElement}
    </div>
  );
};

export default WorkExperienceItem;
