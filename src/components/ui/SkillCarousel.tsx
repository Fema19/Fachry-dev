'use client';

import React from 'react';
import { SkillCard } from '@/components/ui/SkillCard';
import { skillsForCarousel } from '@/data/skills';

export function SkillCarousel() {
  return (
    <div className="relative w-full overflow-hidden py-2">
      <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-16 bg-gradient-to-r from-[#7a8aba] to-transparent" />
      <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-16 bg-gradient-to-l from-[#7a8aba] to-transparent" />

      <div className="relative">
        <div className="marquee-track flex gap-5 px-4">
          {skillsForCarousel.map((skill, index) => (
            <SkillCard key={`${skill.name}-${index}`} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
}
