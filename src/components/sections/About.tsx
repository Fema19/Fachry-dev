'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { fadeUp, slideLeft, slideRight, staggerContainer } from '@/lib/animations';

export function About() {
  return (
    <section id="about" className="py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left - Image/Visual Card */}
          <motion.div variants={slideLeft} className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 to-blue-500/10 rounded-3xl blur-3xl" />
            <Card className="relative backdrop-blur-xl border-sky-500/20 hover:border-sky-500/40 transition-colors">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-sky-500/20 to-blue-500/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-sky-400 to-blue-400 opacity-20 blur-2xl mb-4" />
                  <h3 className="text-xl font-semibold text-slate-50">Fema</h3>
                  <p className="text-sm text-slate-400 mt-1">Full Stack Developer</p>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Right - Content */}
          <motion.div variants={slideRight} className="space-y-6">
            <div>
              <motion.h2
                variants={fadeUp}
                className="text-4xl sm:text-5xl font-bold text-slate-50 mb-4"
              >
                About Me
              </motion.h2>
              <motion.div
                variants={fadeUp}
                className="w-12 h-1 bg-gradient-to-r from-sky-400 to-blue-400 rounded-full"
              />
            </div>

            <motion.div variants={fadeUp} className="space-y-4 text-slate-300">
              <p>
                I'm a passionate full-stack developer from Germany with a strong focus on
                building modern web applications. With expertise in both frontend and
                backend technologies, I create seamless digital experiences that delight
                users and solve real problems.
              </p>
              <p>
                My journey in web development started with a curiosity about how things
                work on the internet. Since then, I've specialized in Laravel for backend
                development and React/Next.js for frontend applications, with additional
                experience in React Native for mobile development.
              </p>
              <p>
                I'm constantly learning and exploring new technologies, especially in the
                areas of AI and Machine Learning. I'm seeking opportunities to work with
                international companies and teams to contribute my skills and grow as a
                developer.
              </p>
            </motion.div>

            {/* Info Grid */}
            <motion.div
              variants={fadeUp}
              className="grid grid-cols-2 gap-4 pt-4"
            >
              {[
                { label: 'Location', value: 'Germany' },
                { label: 'Experience', value: '3+ Years' },
                { label: 'Specialization', value: 'Full Stack' },
                { label: 'Open to', value: 'Remote/International' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="p-4 rounded-lg bg-slate-800/30 border border-slate-700/30"
                >
                  <p className="text-xs font-semibold text-slate-400 mb-1">
                    {item.label}
                  </p>
                  <p className="text-sm font-bold text-sky-300">{item.value}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
