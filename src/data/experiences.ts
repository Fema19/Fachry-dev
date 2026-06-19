import { Experience } from '@/types';

export const experiences: Experience[] = [
  {
    id: 'education-smkn1-garut',
    title: 'Software Engineering Student',
    company: 'SMKN 1 Garut',
    description:
      'Studying Software Engineering with a focus on practical web development, database systems, and object-oriented programming.',
    startDate: '2023-06',
    endDate: '2026-05',
    type: 'education',
    technologies: ['PHP', 'Laravel', 'JavaScript', 'TypeScript', 'MySQL', 'Git', 'GitHub', 'Next.js'],
    highlights: [
      'Built personal and school projects while learning production-style workflows.',
      'Practiced frontend, backend, database design, and version control.',
      'Developed a strong base in Laravel, Next.js, MySQL, and Java.',
    ],
  },
  {
    id: 'internship-ptun-bandung',
    title: 'Software Engineering Intern',
    company: 'Pengadilan Tata Usaha Negara (PTUN) Bandung',
    description:
      'Completed a 4-month internship building and maintaining internal web applications for real administrative workflows.',
    startDate: '2025-07',
    endDate: '2025-11',
    type: 'internship',
    technologies: ['Laravel', 'PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'Git', 'GitHub'],
    highlights: [
      'Developed a Digital Guest Book System for visitor registration and attendance records.',
      'Contributed to an ATK office supplies inventory system.',
      'Strengthened backend, database, debugging, and communication skills in a professional environment.',
    ],
  },
  {
    id: 'minecraft-admin-developer',
    title: 'Minecraft Server Administrator & Plugin Developer',
    company: 'Personal Project',
    description:
      'Managed a Minecraft server and developed custom plugins to improve gameplay and server-side functionality.',
    startDate: '2026-03',
    endDate: '2026-04',
    type: 'personal',
    technologies: ['Java', 'Spigot API', 'Paper API', 'Minecraft Plugin Development', 'Object-Oriented Programming'],
    highlights: [
      'Built custom Java plugin features with Spigot/Paper APIs.',
      'Handled server configuration, debugging, and gameplay tuning.',
      'Applied object-oriented programming to player-facing mechanics.',
    ],
  },
];
