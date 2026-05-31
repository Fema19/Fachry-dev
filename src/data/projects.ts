import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'extracurricular-management',
    title: 'Extracurricular Management System',
    description: 'A comprehensive platform for managing student extracurricular activities and events.',
    longDescription:
      'Built a full-stack web application using Laravel and React for managing extracurricular activities. Features include event scheduling, student registration, attendance tracking, and reporting.',
    technologies: ['Laravel', 'React', 'MySQL', 'Tailwind CSS', 'REST API'],
    featured: true,
  },
  {
    id: 'guest-book',
    title: 'Guest Book Application',
    description: 'Modern digital guest book with real-time updates and message management.',
    longDescription:
      'Developed a real-time guest book application using Next.js and TypeScript. Includes features like message submission, moderation, and beautiful animations.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    featured: true,
  },
  {
    id: 'portfolio-website',
    title: 'Developer Portfolio Website',
    description: 'Premium personal portfolio showcasing projects and professional experience.',
    longDescription:
      'This portfolio website built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion. Emphasizes clean design, smooth animations, and professional presentation.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    featured: true,
  },
  {
    id: 'mobile-app',
    title: 'Mobile Application Project',
    description: 'Cross-platform mobile app built with React Native.',
    longDescription:
      'Developed a cross-platform mobile application using React Native that demonstrates responsive design and native platform integration.',
    technologies: ['React Native', 'JavaScript', 'Mobile Development'],
    featured: false,
  },
  {
    id: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    description: 'Full-featured e-commerce solution with product catalog and shopping cart.',
    longDescription:
      'Built a complete e-commerce platform with Laravel backend and React frontend. Includes product management, shopping cart, payment integration, and order tracking.',
    technologies: ['Laravel', 'React', 'MySQL', 'Stripe', 'REST API'],
    featured: false,
  },
  {
    id: 'api-documentation',
    title: 'REST API Documentation Portal',
    description: 'Interactive API documentation and testing platform.',
    longDescription:
      'Created an interactive documentation portal for REST APIs with live testing capabilities and code examples in multiple languages.',
    technologies: ['Next.js', 'TypeScript', 'Markdown', 'Syntax Highlighting'],
    featured: false,
  },
];
