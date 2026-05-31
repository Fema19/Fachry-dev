'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { experiences } from '@/data/experiences';
import { formatDate, getDuration } from '@/lib/utils';
import { staggerContainer, staggerItem, fadeUp } from '@/lib/animations';

const typeColors = {
  education: { dot: 'bg-sky-400', text: 'text-sky-300' },
  internship: { dot: 'bg-blue-400', text: 'text-blue-300' },
  freelance: { dot: 'bg-purple-400', text: 'text-purple-300' },
  personal: { dot: 'bg-cyan-400', text: 'text-cyan-300' },
};

export function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-50 mb-4">
            Experience & Education
          </h2>
          <p className="text-slate-400">
            My journey through education, internships, and professional projects.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {experiences.map((exp, index) => (
            <motion.div key={exp.id} variants={staggerItem} className="relative">
              {/* Timeline line (hidden on last item) */}
              {index < experiences.length - 1 && (
                <div className="absolute left-8 top-20 h-12 w-0.5 bg-gradient-to-b from-slate-600 to-transparent" />
              )}

              <div className="flex gap-6">
                {/* Timeline dot */}
                <div className="flex flex-col items-center pt-1">
                  <div
                    className={`w-16 h-16 rounded-full border-2 border-slate-800 ${typeColors[exp.type].dot} flex items-center justify-center`}
                  >
                    <span className="text-xs font-bold text-slate-950 capitalize">
                      {exp.type[0]}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <Card interactive className="flex-1">
                  <div className="space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <div>
                        <h3 className="text-xl font-bold text-slate-50">
                          {exp.title}
                        </h3>
                        {exp.company && (
                          <p className="text-sm text-slate-400 mt-1">
                            {exp.company}
                          </p>
                        )}
                      </div>
                      <Badge
                        variant="secondary"
                        size="sm"
                        className="capitalize w-fit"
                      >
                        {exp.type}
                      </Badge>
                    </div>

                    <p className="text-slate-300">{exp.description}</p>

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pt-2">
                      <p className="text-sm text-slate-400">
                        {formatDate(exp.startDate)} —{' '}
                        {exp.endDate ? formatDate(exp.endDate) : 'Present'}
                      </p>
                      <p className="text-xs font-medium text-sky-400">
                        {getDuration(exp.startDate, exp.endDate)}
                      </p>
                    </div>

                    {exp.technologies && (
                      <div className="flex flex-wrap gap-2 pt-2">
                        {exp.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="primary"
                            size="sm"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                </Card>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
