import { Skill } from '@/types';

export const skills: Skill[] = [
  // Frontend
  { name: 'HTML', category: 'frontend', level: 'expert' },
  { name: 'CSS', category: 'frontend', level: 'expert' },
  { name: 'JavaScript', category: 'frontend', level: 'advanced' },
  { name: 'TypeScript', category: 'frontend', level: 'advanced' },
  { name: 'React', category: 'frontend', level: 'advanced' },
  { name: 'Next.js', category: 'frontend', level: 'advanced' },
  { name: 'Tailwind CSS', category: 'frontend', level: 'advanced' },
  { name: 'Framer Motion', category: 'frontend', level: 'intermediate' },

  // Backend
  { name: 'PHP', category: 'backend', level: 'advanced' },
  { name: 'Laravel', category: 'backend', level: 'advanced' },
  { name: 'REST API', category: 'backend', level: 'advanced' },
  { name: 'MySQL', category: 'backend', level: 'intermediate' },

  // Mobile
  { name: 'React Native', category: 'mobile', level: 'intermediate' },

  // Tools
  { name: 'Git', category: 'tools', level: 'advanced' },
  { name: 'GitHub', category: 'tools', level: 'advanced' },
  { name: 'VS Code', category: 'tools', level: 'advanced' },
  { name: 'Figma', category: 'tools', level: 'intermediate' },
];

export const skillsByCategory = {
  frontend: skills.filter((s) => s.category === 'frontend'),
  backend: skills.filter((s) => s.category === 'backend'),
  mobile: skills.filter((s) => s.category === 'mobile'),
  tools: skills.filter((s) => s.category === 'tools'),
};
