export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'mobile' | 'tools';
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  icon?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image?: string;
  technologies: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
}

export interface Experience {
  id: string;
  title: string;
  company?: string;
  description: string;
  startDate: string;
  endDate?: string;
  type: 'education' | 'internship' | 'freelance' | 'personal';
  technologies?: string[];
}

export interface NavLink {
  label: string;
  href: string;
  id: string;
}
