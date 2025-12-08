import { Profile } from '../types/Profile';
import { socialLinks } from './socialLinks';



export const profile: Profile = {
  firstName: 'Ejeh',
  lastName: 'Daniel',
  position: 'Software Engineer @ Doow, Inc.',
  summary: [
  ],
  avatar: {
    srcPath: 'profile/my_avatar.jpeg',
    caption: 'Ejeh Daniel',
  },
  location: {
    name: 'London, UK • (from Nigeria)',
  },
  tags: [],
  socialLinks,
  workExperience: [
    {
      company: 'Doow',
      role: 'Frontend Engineer',
      startDate: '2023-11-01',
      description: 'Leading frontend development for enterprise spend management platform. Built SaaS Intelligence engine, design system with Shadcn UI, and Chrome extension for real-time SaaS tracking.',
    },
    {
      company: 'Doow',
      role: 'Frontend Engineer (Intern)',
      startDate: '2023-05-01',
      endDate: '2023-11-01',
      description: 'Established initial product architecture with React and Next.js. Built 30+ reusable UI components and prototyped Chrome extension for SaaS monitoring.',
    },
  ],
  skillCategories: [
    {
      name: 'Programming Languages',
      skills: [
        { name: 'TypeScript' },
        { name: 'JavaScript' },
        { name: 'HTML' },
        { name: 'CSS' },
      ],
    },
    {
      name: 'Frontend',
      skills: [
        { name: 'React' },
        { name: 'Next.js' },
        { name: 'Tailwind CSS' },
        { name: 'Shadcn UI' },
        { name: 'Styled Components' },
        { name: 'Redux' },
        { name: 'Storybook' },
      ],
    },
    {
      name: 'Backend',
      skills: [
        { name: 'Node.js' },
        { name: 'Express' },
        { name: 'GraphQL' },
        { name: 'REST APIs' },
        { name: 'Prisma' },
        { name: 'PostgreSQL' },
        { name: 'MongoDB' },
        { name: 'MySQL' },
      ],
    },
    {
      name: 'Tools & Others',
      skills: [
        { name: 'Docker' },
        { name: 'Vercel' },
        { name: 'Playwright' },
        { name: 'Vitest' },
        { name: 'Puppeteer' },
        { name: 'Chrome Extensions' },
        { name: 'Figma' },
      ],
    },
  ],
};
