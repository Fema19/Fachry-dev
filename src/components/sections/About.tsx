'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { PremiumImageFrame } from '@/components/ui/PremiumImageFrame';
import { Badge } from '@/components/ui/Badge';
import { fadeUp, slideLeft, slideRight, staggerContainer } from '@/lib/animations';
import { ABOUT_IMAGE } from '@/lib/images';

const profileFacts = [
  { label: 'Location', value: 'Indonesia' },
  { label: 'Journey', value: '3+ Years Learning & Building' },
  { label: 'Core Stack', value: 'Laravel, Next.js, MySQL' },
  { label: 'Open To', value: 'Internship, Remote, Project Work' },
];

export function About() {
  return (
    <section id="about" className="section">
      <div className="container-max">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="chrome-panel overflow-hidden"
        >
          <div className="chrome-header px-4 py-3">
            <span>About module</span>
            <span className="hidden text-[#3d4f97] sm:inline">Personal developer profile</span>
          </div>

          <div className="grid gap-10 p-5 sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <motion.div variants={slideLeft} className="group flex justify-center">
              <PremiumImageFrame
                src={ABOUT_IMAGE}
                alt="Fachry - About Profile"
                isCircular={false}
                placeholder="/profile/placeholder-about.svg"
              />
            </motion.div>

            <motion.div variants={slideRight} className="space-y-6">
              <div className="space-y-3">
                <motion.p variants={fadeUp} className="console-label">
                  Practical full-stack builder
                </motion.p>
                <motion.h2
                  variants={fadeUp}
                  className="console-title text-4xl sm:text-5xl"
                >
                  Building software for real workflows.
                </motion.h2>
              </div>

              <motion.div
                variants={fadeUp}
                className="space-y-4 text-[0.98rem] leading-7 text-[#21242e]"
              >
                <p>
                  I am Fachry, a software engineering student from Indonesia who
                  likes turning everyday operational problems into clear web
                  applications. My strongest work is around Laravel, PHP, MySQL,
                  and practical admin-style interfaces.
                </p>
                <p>
                  During my internship at PTUN Bandung, I worked on a digital
                  guest book and an office supplies inventory system. Those
                  projects taught me to think about data entry, staff workflows,
                  validation, and maintainable backend structure.
                </p>
                <p>
                  I also build with Next.js and TypeScript for portfolio and UI
                  work, and I use Java for Minecraft plugin development. The
                  common thread is simple: clean interfaces, reliable logic, and
                  code that can keep growing after the first demo.
                </p>
              </motion.div>

              <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
                <Badge variant="primary">Laravel</Badge>
                <Badge variant="primary">Next.js</Badge>
                <Badge variant="secondary">MySQL</Badge>
                <Badge variant="accent">Java</Badge>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="grid grid-cols-1 gap-3 sm:grid-cols-2"
              >
                {profileFacts.map((item) => (
                  <div key={item.label} className="chrome-inset p-4">
                    <p className="console-label mb-1">{item.label}</p>
                    <p className="text-sm font-black text-[#21242e]">{item.value}</p>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
