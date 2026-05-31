'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, GitBranch } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { projects } from '@/data/projects';
import { staggerContainer, staggerItem, fadeUp } from '@/lib/animations';

export function Projects() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  const ProjectCard = ({ project }: { project: typeof projects[0] }) => {
    const handleCardClick = () => {
      if (project.github) {
        window.open(project.github, '_blank', 'noopener,noreferrer');
      }
    };

    return (
      <motion.div variants={staggerItem}>
        <Card
          interactive
          className="group h-full flex flex-col overflow-hidden cursor-pointer"
          onClick={handleCardClick}
        >
          {/* Project Image Placeholder */}
          <div
            className="w-full h-48 bg-gradient-to-br from-sky-500/10 to-blue-500/10 group-hover:from-sky-500/20 group-hover:to-blue-500/20 transition-colors flex items-center justify-center overflow-hidden cursor-pointer"
            onClick={handleCardClick}
          >
            <div className="w-full h-full relative">
              <div className="absolute inset-0 bg-gradient-to-b from-sky-500/10 via-transparent to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl font-bold text-slate-50/10 group-hover:text-slate-50/20 transition-all">
                    {project.title.slice(0, 1)}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 flex flex-col p-6 space-y-4">
            <div>
              <h3 className="text-xl font-bold text-slate-50 group-hover:text-sky-300 transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-slate-400 mt-2">
                {project.description}
              </p>
            </div>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, 3).map((tech) => (
                <Badge key={tech} variant="secondary" size="sm">
                  {tech}
                </Badge>
              ))}
              {project.technologies.length > 3 && (
                <Badge variant="secondary" size="sm">
                  +{project.technologies.length - 3}
                </Badge>
              )}
            </div>

            {/* Links */}
            <div className="flex gap-3 pt-4 mt-auto">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-800/50 hover:bg-sky-500/20 text-slate-300 hover:text-sky-300 border border-slate-700/50 hover:border-sky-500/50 transition-all duration-200 text-sm font-medium"
                >
                  <GitBranch className="w-4 h-4" />
                  Code
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-sky-500/20 hover:bg-sky-500/30 text-sky-300 border border-sky-500/50 hover:border-sky-400/50 transition-all duration-200 text-sm font-medium"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </Card>
      </motion.div>
    );
  };

  return (
    <section id="projects" className="py-20 sm:py-32 bg-gradient-to-b from-transparent via-slate-900/20 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-50 mb-4">
            Featured Projects
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Showcase of my recent work, demonstrating my skills in web development,
            design, and problem-solving.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <div>
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-slate-300 mb-6"
            >
              Other Projects
            </motion.h3>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {otherProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}
