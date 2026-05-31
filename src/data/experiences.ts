import { Experience } from '@/types';

export const experiences: Experience[] = [
  {
    id: 'education-smkn1-garut',
    title: 'Software Engineering Student',
    company: 'SMKN 1 Garut',
    description:
      'Currently studying Software Engineering (Rekayasa Perangkat Lunak) at SMKN 1 Garut, a vocational high school specializing in technology and software development. Focused on comprehensive software development training including web development, database systems, and object-oriented programming. Throughout the study period, actively developed personal projects and expanded technical skills through self-learning and practical development experiences.',
    startDate: '2023-06',
    endDate: '2026-05',
    type: 'education',
    technologies: ['PHP', 'Laravel', 'JavaScript', 'TypeScript', 'MySQL', 'Git', 'GitHub', 'Next.js'],
  },
  {
    id: 'internship-ptun-bandung',
    title: 'Software Engineering Intern',
    company: 'Pengadilan Tata Usaha Negara (PTUN) Bandung',
    description:
      'Completed a 4-month internship at PTUN Bandung working on the development and maintenance of internal systems. Developed a Digital Guest Book System (Buku Tamu) to manage visitor registration and attendance records, and contributed to an Office Supplies Inventory System (ATK) for tracking office inventory. Gained hands-on experience with software development in a professional government institution environment, improved problem-solving skills, and strengthened understanding of database management and backend development.',
    startDate: '2025-07',
    endDate: '2025-11',
    type: 'internship',
    technologies: ['Laravel', 'PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'Git', 'GitHub'],
  },
  {
    id: 'minecraft-admin-developer',
    title: 'Minecraft Server Administrator & Plugin Developer',
    company: 'Personal Project',
    description:
      'Managed and maintained a Minecraft server while developing custom plugins to improve gameplay and server functionality. Responsibilities included server administration, plugin development using Java, implementing custom gameplay features, working with Spigot/Paper APIs, debugging server-side systems, and managing configurations for optimal performance.',
    startDate: '2026-03',
    endDate: '2026-04',
    type: 'personal',
    technologies: ['Java', 'Spigot API', 'Paper API', 'Minecraft Plugin Development', 'Object-Oriented Programming'],
  },
];
