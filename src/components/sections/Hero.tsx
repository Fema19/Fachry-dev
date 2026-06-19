'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ArrowDown, Code, GitBranch, Link2, Mail } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { PremiumImageFrame } from '@/components/ui/PremiumImageFrame';
import { Badge } from '@/components/ui/Badge';
import { fadeUp, staggerContainer, slideLeft, slideRight } from '@/lib/animations';
import { scrollToSection } from '@/lib/utils';
import { HERO_IMAGE } from '@/lib/images';

const socialLinks = [
  { icon: GitBranch, href: 'https://github.com/Fema19', label: 'GitHub' },
  {
    icon: Link2,
    href: 'https://www.linkedin.com/in/fachry-much-n-a-2b68a0375?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    label: 'LinkedIn',
  },
  { icon: Mail, href: 'mailto:fachrinurulakbar19@gmail.com', label: 'Email' },
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[calc(100svh-4rem)] items-center overflow-hidden pt-28 pb-16"
    >
      <div className="pointer-events-none absolute inset-x-4 top-28 h-px bg-[#3d4f97]/45" />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="container-max relative z-10"
      >
        <div className="chrome-panel clip-chamfer p-3 sm:p-4">
          <div className="chrome-header px-3 py-2">
            <span className="flex items-center gap-2">
              <Code className="h-4 w-4 text-[#f68d1f]" />
              Developer identity module
            </span>
            <span className="hidden text-[#3d4f97] sm:inline">Status: open to projects</span>
          </div>

          <div className="circuit-field grid gap-8 p-5 sm:p-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <motion.div variants={slideLeft} className="space-y-6">
              <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
                <Badge variant="primary">Indonesia based</Badge>
                <Badge variant="secondary">Full-stack web</Badge>
                <Badge variant="accent">Minecraft plugins</Badge>
              </motion.div>

              <div className="space-y-4">
                <motion.p variants={fadeUp} className="console-label text-[#21242e]">
                  Welcome to Fachry.dev
                </motion.p>

                <motion.h1
                  variants={fadeUp}
                  className="box-art-title text-balance text-5xl sm:text-6xl lg:text-7xl"
                >
                  Fachry
                  <span className="block text-3xl sm:text-4xl lg:text-5xl">
                    Full-Stack Developer
                  </span>
                </motion.h1>

                <motion.div
                  variants={fadeUp}
                  className="chrome-inset inline-flex min-h-11 items-center px-3 text-sm font-black text-[#3d4f97] sm:text-base"
                >
                  <TypeAnimation
                    sequence={[
                      'Laravel and PHP applications',
                      1800,
                      'Next.js and TypeScript interfaces',
                      1800,
                      'MySQL-backed workflows',
                      1800,
                      'Java Minecraft plugin development',
                      1800,
                    ]}
                    wrapper="span"
                    cursor
                    repeat={Infinity}
                  />
                </motion.div>

                <motion.p
                  variants={fadeUp}
                  className="max-w-2xl text-base leading-7 text-[#21242e] sm:text-lg"
                >
                  I build practical web applications with maintainable Laravel
                  backends, clean Next.js interfaces, and database workflows that
                  are shaped around real users, not just polished screenshots.
                </motion.p>
              </div>

              <motion.div variants={fadeUp} className="flex flex-col gap-3 sm:flex-row">
                <Button size="lg" onClick={() => scrollToSection('projects')}>
                  View Projects
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={() => scrollToSection('contact')}
                >
                  Contact Me
                </Button>
              </motion.div>

              <motion.div variants={fadeUp} className="flex flex-wrap gap-3 pt-2">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="carbon-slab inline-flex min-h-11 min-w-11 items-center justify-center rounded-[3px] px-3 text-white transition-colors hover:text-[#ecab37]"
                      aria-label={link.label}
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  );
                })}
              </motion.div>
            </motion.div>

            <motion.div
              variants={slideRight}
              className="group relative hidden min-h-[25rem] items-center justify-center lg:flex"
            >
              <div className="absolute inset-8 rounded-[6px] border border-[#3d4f97]/45 bg-[#21242e]/12" />
              <PremiumImageFrame
                src={HERO_IMAGE}
                alt="Fachry - Full Stack Developer"
                isCircular
                placeholder="/profile/placeholder-hero.svg"
              />
            </motion.div>
          </div>
        </div>

        <motion.div
          className="mt-8 flex justify-center"
          variants={fadeUp}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <button
            type="button"
            onClick={() => scrollToSection('about')}
            className="console-chip min-h-11 px-4"
          >
            <span>Explore</span>
            <ArrowDown className="h-4 w-4" />
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
