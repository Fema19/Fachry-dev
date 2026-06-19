'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { SkillItem } from '@/data/skills';

interface SkillCardProps {
  skill: SkillItem;
}

export function SkillCard({ skill }: SkillCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.04, y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="flex-shrink-0 w-36 h-40"
    >
      <div className="chrome-card group relative flex h-full flex-col items-center justify-center overflow-hidden p-4 transition-all duration-300 hover:border-[#f68d1f]">
        <div className="absolute inset-x-3 top-3 h-2 rounded-[2px] bg-[#21242e]/80" />
        <div className="relative z-10 flex flex-col items-center gap-4 h-full justify-center">
          <div className="chrome-inset relative flex h-16 w-16 items-center justify-center bg-white p-3">
            <Image
              src={skill.icon}
              alt={skill.name}
              width={64}
              height={64}
              className="h-full w-full object-contain grayscale transition-all duration-300 group-hover:grayscale-0"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
          </div>

          <p className="console-label text-center text-[#21242e]">
            {skill.name}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
