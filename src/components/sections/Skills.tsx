'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SkillCarousel } from '@/components/ui/SkillCarousel';
import { fadeUp } from '@/lib/animations';

export function Skills() {
  return (
    <section id="skills" className="section overflow-hidden">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 text-center"
        >
          <p className="console-label mb-3">System tiles</p>
          <h2 className="console-title text-4xl sm:text-5xl">Tech Stack</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-[#21242e]">
            Tools I use to build web applications, backend workflows, and
            Minecraft server features with clear structure.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="chrome-panel overflow-hidden p-4"
        >
          <div className="chrome-header mb-4 px-3 py-2">
            <span>Framework / language carousel</span>
            <span className="hidden text-[#3d4f97] sm:inline">Frontend + backend + tools</span>
          </div>
          <SkillCarousel />
        </motion.div>
      </div>
    </section>
  );
}
