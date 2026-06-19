import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'minecraft-size-gacha-plugin',
    title: 'Minecraft Size Gacha Plugin',
    description: 'A Java plugin that adds size-based gacha mechanics and custom gameplay systems for Minecraft servers.',
    longDescription:
      'A custom Minecraft plugin developed using Java and the Spigot/Paper ecosystem. The plugin introduces a size-based gacha mechanic and custom gameplay functionality for Minecraft servers.',
    role: 'Plugin Developer',
    status: 'Personal project',
    highlights: [
      'Built custom server-side gameplay logic with Java OOP patterns.',
      'Worked with Spigot/Paper APIs and Minecraft server configuration.',
      'Focused on reliable mechanics that server players can understand quickly.',
    ],
    technologies: ['Java', 'Spigot API', 'Paper API', 'OOP'],
    featured: true,
    github: 'https://github.com/Fema19/size-gacha',
  },
  {
    id: 'digital-guest-book-system',
    title: 'Digital Guest Book System',
    description: 'A Laravel visitor registration app built for practical office guest tracking workflows at PTUN Bandung.',
    longDescription:
      'A web-based guest book application developed during internship at PTUN Bandung for managing visitor registration and attendance records digitally.',
    role: 'Full-Stack Developer Intern',
    status: 'Internship project',
    highlights: [
      'Digitized visitor registration and attendance records.',
      'Used Laravel, PHP, and MySQL for a maintainable internal workflow.',
      'Designed screens around staff data entry and daily usage.',
    ],
    technologies: ['Laravel', 'PHP', 'MySQL', 'JavaScript', 'HTML', 'CSS'],
    featured: true,
    github: 'https://github.com/RyuuKanaeru/ujikomtamu',
  },
  {
    id: 'office-supplies-inventory-system',
    title: 'Office Supplies Inventory Management System (ATK)',
    description: 'A Laravel inventory system for monitoring office supply stock and operational inventory movement.',
    longDescription:
      'A web-based inventory management system designed to manage and monitor office supplies and stock inventory processes.',
    role: 'Full-Stack Developer',
    status: 'Web application',
    highlights: [
      'Modeled stock data and inventory records with MySQL.',
      'Built practical Laravel screens for tracking office supplies.',
      'Prioritized clear CRUD flows and maintainable backend structure.',
    ],
    technologies: ['Laravel', 'PHP', 'MySQL', 'JavaScript', 'HTML', 'CSS'],
    featured: true,
    github: 'https://github.com/Fema19/gudang',
  },
];
