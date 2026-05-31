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
      whileHover={{ scale: 1.1, y: -8 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="flex-shrink-0 w-32 h-40"
    >
      <div className="relative h-full rounded-2xl border border-slate-700/50 bg-gradient-to-b from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-6 flex flex-col items-center justify-center group hover:border-sky-500/50 hover:bg-gradient-to-b hover:from-slate-800/80 hover:to-slate-900/80 transition-all duration-300 overflow-hidden">
        {/* Glow effect on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-sky-500/10 to-transparent pointer-events-none" />

        {/* Glow ring */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute inset-0 rounded-2xl shadow-lg shadow-sky-500/20" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center gap-4 h-full justify-center">
          {/* Logo */}
          <div className="w-16 h-16 relative flex items-center justify-center">
            <Image
              src={skill.icon}
              alt={skill.name}
              width={64}
              height={64}
              className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
              onError={(e) => {
                // Fallback if image doesn't exist
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
          </div>

          {/* Name */}
          <p className="text-sm font-semibold text-slate-200 group-hover:text-sky-300 transition-colors duration-300 text-center">
            {skill.name}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
