import { Experience } from '@/types';

export const experiences: Experience[] = [
  {
    id: 'education-smkn1-garut',
    title: 'Software Engineering Student',
    company: 'SMKN 1 Garut',
    description:
      'Currently studying Software Engineering (Rekayasa Perangkat Lunak) at SMKN 1 Garut, a vocational high school specializing in technology and software development. Focused on comprehensive software development training including web development, database systems, and object-oriented programming. Throughout the study period, actively developed personal projects and expanded technical skills through self-learning and practical development experiences.',
    startDate: '2023-01',
    endDate: '2026-12',
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
];
