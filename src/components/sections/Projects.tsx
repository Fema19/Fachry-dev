'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ExternalLink, GitBranch } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { projects } from '@/data/projects';
import { Project } from '@/types';
import { fadeUp, staggerContainer, staggerItem } from '@/lib/animations';

function ProjectMedia({ project }: { project: Project }) {
  if (project.image) {
    return (
      <div className="relative h-48 overflow-hidden border-b-2 border-[#3d4f97] bg-[#c0d5e6]">
        <Image
          src={project.image}
          alt={`${project.title} preview`}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-[#3d4f97]/25" />
      </div>
    );
  }

  return (
    <div className="relative h-48 overflow-hidden border-b-2 border-[#3d4f97] bg-[#9fbee7]">
      <div className="absolute inset-0 circuit-field opacity-95" />
      <div className="absolute inset-4 chrome-inset flex items-center justify-center bg-white/60">
        <div className="text-center">
          <p className="console-label mb-2">Project cartridge</p>
          <p
            className="text-5xl font-black text-[#3d4f97]"
            style={{ fontFamily: '"Arial Black", Arial, sans-serif' }}
          >
            {project.title.slice(0, 1)}
          </p>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div variants={staggerItem} className="h-full">
      <Card interactive className="flex h-full flex-col overflow-hidden p-0">
        <ProjectMedia project={project} />

        <div className="flex flex-1 flex-col space-y-4 p-5">
          <div className="flex flex-wrap gap-2">
            {project.status && <Badge variant="primary">{project.status}</Badge>}
            {project.role && <Badge variant="secondary">{project.role}</Badge>}
          </div>

          <div>
            <h3 className="text-xl font-black leading-tight text-[#21242e]">
              {project.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-[#21242e]">
              {project.longDescription ?? project.description}
            </p>
          </div>

          {project.highlights && (
            <div className="grid gap-2">
              {project.highlights.slice(0, 3).map((highlight) => (
                <div
                  key={highlight}
                  className="flex gap-2 text-sm leading-6 text-[#21242e]"
                >
                  <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-[#f68d1f]" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          )}

          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((tech) => (
              <Badge key={tech} variant="secondary" size="sm">
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 4 && (
              <Badge variant="secondary" size="sm">
                +{project.technologies.length - 4}
              </Badge>
            )}
          </div>

          <div className="mt-auto flex flex-wrap gap-3 pt-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="console-chip min-h-11 px-3"
                aria-label={`View ${project.title} source code`}
              >
                <GitBranch className="h-4 w-4" />
                Code
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="carbon-slab inline-flex min-h-11 items-center gap-2 rounded-[3px] px-3 text-xs font-black uppercase tracking-[0.04em] text-white transition-colors hover:text-[#ecab37]"
                aria-label={`Open ${project.title} live demo`}
              >
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

export function Projects() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="section relative overflow-hidden">
      <div className="container-max">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-10 text-center"
        >
          <p className="console-label mb-3">Build archive</p>
          <h2 className="console-title text-4xl sm:text-5xl">Featured Projects</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-[#21242e]">
            Selected work across Laravel web systems, MySQL-backed operations,
            and Java plugin development.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>

        {otherProjects.length > 0 && (
          <div className="mt-12">
            <h3 className="console-title mb-6 text-3xl">Other Projects</h3>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 gap-6 md:grid-cols-2"
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
