'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { skillsByCategory } from '@/data/skills';
import { staggerContainer, staggerItem, fadeUp } from '@/lib/animations';

const categoryColors = {
  frontend: { bg: 'bg-sky-500/10', border: 'border-sky-500/30', accent: 'text-sky-300' },
  backend: { bg: 'bg-blue-500/10', border: 'border-blue-500/30', accent: 'text-blue-300' },
  mobile: { bg: 'bg-purple-500/10', border: 'border-purple-500/30', accent: 'text-purple-300' },
  tools: { bg: 'bg-cyan-500/10', border: 'border-cyan-500/30', accent: 'text-cyan-300' },
};

export function Skills() {
  const categories = [
    { key: 'frontend' as const, title: 'Frontend' },
    { key: 'backend' as const, title: 'Backend' },
    { key: 'mobile' as const, title: 'Mobile' },
    { key: 'tools' as const, title: 'Tools & DevOps' },
  ];

  return (
    <section id="skills" className="py-20 sm:py-32 bg-gradient-to-b from-transparent via-slate-900/20 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-50 mb-4">
            Technical Skills
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A comprehensive set of technologies and tools I use to build scalable,
            high-performance applications.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {categories.map((category) => (
            <div key={category.key}>
              <motion.h3
                variants={staggerItem}
                className={`text-2xl font-bold mb-6 ${categoryColors[category.key].accent}`}
              >
                {category.title}
              </motion.h3>
              <motion.div
                variants={staggerContainer}
                className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
              >
                {skillsByCategory[category.key].map((skill) => (
                  <motion.div key={skill.name} variants={staggerItem}>
                    <Card
                      interactive
                      className={`group h-full ${categoryColors[category.key].bg} border-opacity-50 hover:border-opacity-100 ${categoryColors[category.key].border}`}
                    >
                      <div className="flex flex-col items-center justify-center h-32 text-center">
                        <p className="font-semibold text-slate-100 group-hover:text-slate-50 transition-colors">
                          {skill.name}
                        </p>
                        <Badge
                          variant="secondary"
                          size="sm"
                          className="mt-2 capitalize text-xs"
                        >
                          {skill.level}
                        </Badge>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
