import { Experience } from '@/types';

export const experiences: Experience[] = [
  {
    id: 'education-bs',
    title: 'Bachelor of Science in Computer Science',
    company: 'University',
    description: 'Completed comprehensive studies in computer science with focus on web development and software engineering.',
    startDate: '2021-09',
    endDate: '2025-06',
    type: 'education',
  },
  {
    id: 'internship-tech',
    title: 'Full Stack Developer Intern',
    company: 'Tech Company',
    description:
      'Developed web applications using Laravel and React. Contributed to backend API development and frontend component creation.',
    startDate: '2024-06',
    endDate: '2024-09',
    type: 'internship',
    technologies: ['Laravel', 'React', 'MySQL', 'REST API'],
  },
  {
    id: 'freelance-projects',
    title: 'Freelance Web Developer',
    description: 'Completed multiple freelance projects building custom websites and web applications for clients. Focused on performance and user experience.',
    startDate: '2023-01',
    endDate: undefined,
    type: 'freelance',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Laravel'],
  },
  {
    id: 'personal-learning',
    title: 'Continuous Learning & Personal Projects',
    description:
      'Actively learning AI/ML technologies while building personal projects. Exploring modern development practices and contributing to open-source.',
    startDate: '2022-01',
    endDate: undefined,
    type: 'personal',
    technologies: ['Next.js', 'TypeScript', 'React Native', 'Machine Learning'],
  },
];
