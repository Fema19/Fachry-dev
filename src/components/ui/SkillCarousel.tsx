'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimationControls } from 'framer-motion';
import { SkillCard } from '@/components/ui/SkillCard';
import { skillsForCarousel } from '@/data/skills';

export function SkillCarousel() {
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimationControls();
  const hasStarted = useRef(false);

  useEffect(() => {
    if (!hasStarted.current) {
      controls.start({
        x: -2000,
        transition: {
          duration: 40,
          ease: 'linear',
          repeat: Infinity,
        },
      });
      hasStarted.current = true;
    }
  }, [controls]);

  useEffect(() => {
    if (isHovered) {
      controls.stop();
    } else {
      controls.start({
        x: -2000,
        transition: {
          duration: 40,
          ease: 'linear',
          repeat: Infinity,
        },
      });
    }
  }, [isHovered, controls]);

  return (
    <div className="w-full overflow-hidden">
      {/* Gradient fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />

      <div
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          className="flex gap-6 px-4"
          animate={controls}
          initial={{ x: 0 }}
        >
          {skillsForCarousel.map((skill, index) => (
            <SkillCard key={`${skill.name}-${index}`} skill={skill} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
