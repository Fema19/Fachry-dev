'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SkillCarousel } from '@/components/ui/SkillCarousel';
import { fadeUp } from '@/lib/animations';

export function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-32 bg-gradient-to-b from-transparent via-slate-900/20 to-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-50 mb-4">
            Tech Stack
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A complete set of technologies and tools I use to build high-performance applications.
          </p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative py-12"
        >
          <SkillCarousel />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center text-sm text-slate-500 mt-12"
        >
          Hover to pause the carousel
        </motion.p>
      </div>
    </section>
  );
}

