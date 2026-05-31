'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ArrowDown, Code, Link2, Mail } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { fadeUp, staggerContainer, slideLeft, slideRight } from '@/lib/animations';
import { scrollToSection } from '@/lib/utils';

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Gradient Blur */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-sky-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <motion.div variants={slideLeft} className="space-y-8">
            <div className="space-y-4">
              <motion.div
                variants={fadeUp}
                className="inline-block px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/30"
              >
                <p className="text-sm font-medium text-sky-300">
                  👋 Welcome to my portfolio
                </p>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-50 leading-tight"
              >
                Hi, I'm <br />
                <span className="bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent">
                  Fema
                </span>
              </motion.h1>

              <motion.div variants={fadeUp} className="text-xl sm:text-2xl text-slate-400">
                <TypeAnimation
                  sequence={[
                    'Full Stack Developer',
                    2000,
                    'Laravel Developer',
                    2000,
                    'React Developer',
                    2000,
                    'Next.js Developer',
                    2000,
                  ]}
                  wrapper="span"
                  cursor={true}
                  repeat={Infinity}
                  className="text-sky-300"
                />
              </motion.div>

              <motion.p
                variants={fadeUp}
                className="text-lg text-slate-400 leading-relaxed max-w-xl"
              >
                Passionate about building modern digital experiences with clean code and
                attention to detail. Specializing in full-stack web development with a
                focus on performance and user experience.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                onClick={() => scrollToSection('projects')}
              >
                View My Projects
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={fadeUp}
              className="flex gap-4 pt-4"
            >
              {[
                { icon: Code, href: 'https://github.com', label: 'GitHub' },
                { icon: Link2, href: 'https://linkedin.com', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:your-email@example.com', label: 'Email' },
              ].map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-slate-800/50 hover:bg-sky-500/20 border border-slate-700/50 hover:border-sky-500/50 flex items-center justify-center text-slate-400 hover:text-sky-400 transition-all duration-300"
                    aria-label={link.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right Side - Visual */}
          <motion.div
            variants={slideRight}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative w-full max-w-md aspect-square">
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-sky-500/20 to-blue-500/20 rounded-3xl blur-3xl animate-pulse" />

              {/* Card */}
              <div className="relative h-full rounded-3xl border border-sky-500/30 bg-gradient-to-br from-slate-900/80 to-slate-950/80 backdrop-blur-xl p-8 flex flex-col items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-sky-400 to-blue-400 opacity-20 blur-2xl" />
                  <h3 className="text-2xl font-bold text-slate-50">Full Stack</h3>
                  <p className="text-slate-400">
                    Web Developer crafting exceptional digital experiences
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <button
            onClick={() => scrollToSection('about')}
            className="flex flex-col items-center gap-2 text-slate-400 hover:text-sky-400 transition-colors"
          >
            <span className="text-sm font-medium">Scroll to explore</span>
            <ArrowDown className="w-5 h-5" />
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
