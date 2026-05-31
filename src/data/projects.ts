import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'minecraft-size-gacha-plugin',
    title: 'Minecraft Size Gacha Plugin',
    description: 'A custom Minecraft plugin with size-based gacha mechanics and custom gameplay functionality.',
    longDescription:
      'A custom Minecraft plugin developed using Java and the Spigot/Paper ecosystem. The plugin introduces a size-based gacha mechanic and custom gameplay functionality for Minecraft servers.',
    technologies: ['Java', 'Spigot API', 'Paper API', 'OOP'],
    featured: true,
    github: 'https://github.com/Fema19/size-gacha',
  },
  {
    id: 'digital-guest-book-system',
    title: 'Digital Guest Book System',
    description: 'A web-based guest book application for managing visitor registration and attendance records.',
    longDescription:
      'A web-based guest book application developed during internship at PTUN Bandung for managing visitor registration and attendance records digitally.',
    technologies: ['Laravel', 'PHP', 'MySQL', 'JavaScript', 'HTML', 'CSS'],
    featured: true,
    github: 'https://github.com/RyuuKanaeru/ujikomtamu',
  },
  {
    id: 'office-supplies-inventory-system',
    title: 'Office Supplies Inventory Management System (ATK)',
    description: 'A web-based inventory management system for managing and monitoring office supplies.',
    longDescription:
      'A web-based inventory management system designed to manage and monitor office supplies and stock inventory processes.',
    technologies: ['Laravel', 'PHP', 'MySQL', 'JavaScript', 'HTML', 'CSS'],
    featured: true,
    github: 'https://github.com/Fema19/gudang',
  },
];
