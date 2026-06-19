'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { experiences } from '@/data/experiences';
import { formatDate, getDuration } from '@/lib/utils';
import { fadeUp, staggerContainer, staggerItem } from '@/lib/animations';

const typeLabels = {
  education: 'Education',
  internship: 'Internship',
  freelance: 'Freelance',
  personal: 'Personal',
};

export function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container-max max-w-5xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-10 text-center"
        >
          <p className="console-label mb-3">Progress log</p>
          <h2 className="console-title text-4xl sm:text-5xl">
            Experience & Education
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-[#21242e]">
            A focused path through software engineering study, an internship at
            PTUN Bandung, and Java-based Minecraft plugin work.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative space-y-6"
        >
          <div className="absolute bottom-10 left-5 top-10 hidden w-1 bg-[#3d4f97] md:block" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={staggerItem}
              className="relative grid gap-4 md:grid-cols-[3rem_1fr]"
            >
              <div className="hidden md:flex md:justify-center">
                <div className="carbon-slab z-10 flex h-10 w-10 items-center justify-center rounded-full text-sm font-black text-[#ecab37]">
                  {index + 1}
                </div>
              </div>

              <Card interactive className="p-0">
                <div className="chrome-header px-4 py-3">
                  <span>{typeLabels[exp.type]}</span>
                  <span className="text-[#3d4f97]">
                    {formatDate(exp.startDate)} -{' '}
                    {exp.endDate ? formatDate(exp.endDate) : 'Present'}
                  </span>
                </div>

                <div className="space-y-4 p-5">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-xl font-black text-[#21242e]">
                        {exp.title}
                      </h3>
                      {exp.company && (
                        <p className="mt-1 text-sm font-bold text-[#3d4f97]">
                          {exp.company}
                        </p>
                      )}
                    </div>
                    <Badge variant="primary" className="w-fit">
                      {getDuration(exp.startDate, exp.endDate)}
                    </Badge>
                  </div>

                  <p className="leading-7 text-[#21242e]">{exp.description}</p>

                  {exp.highlights && (
                    <div className="grid gap-2">
                      {exp.highlights.map((highlight) => (
                        <div
                          key={highlight}
                          className="chrome-inset flex gap-3 p-3 text-sm leading-6 text-[#21242e]"
                        >
                          <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-[#f68d1f]" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {exp.technologies && (
                    <div className="flex flex-wrap gap-2 pt-1">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" size="sm">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
