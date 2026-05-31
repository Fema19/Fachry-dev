export interface SkillItem {
  name: string;
  icon: string;
}

export const skills: SkillItem[] = [
  // Frontend
  { name: 'HTML', icon: '/skills/html.svg' },
  { name: 'CSS', icon: '/skills/css.svg' },
  { name: 'JavaScript', icon: '/skills/javascript.svg' },
  { name: 'TypeScript', icon: '/skills/typescript.svg' },
  { name: 'React', icon: '/skills/react.svg' },
  { name: 'Next.js', icon: '/skills/nextjs.svg' },
  { name: 'Tailwind CSS', icon: '/skills/tailwind.svg' },

  // Backend
  { name: 'PHP', icon: '/skills/php.svg' },
  { name: 'Laravel', icon: '/skills/laravel.svg' },
  { name: 'MySQL', icon: '/skills/mysql.svg' },

  // Other
  { name: 'Java', icon: '/skills/java.svg' },
  { name: 'Git', icon: '/skills/git.svg' },
  { name: 'GitHub', icon: '/skills/github.svg' },
];

// For carousel infinite loop - duplicate for seamless scrolling
export const skillsForCarousel = [...skills, ...skills];

