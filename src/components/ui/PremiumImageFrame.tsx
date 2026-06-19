'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';

interface PremiumImageFrameProps {
  src: string;
  alt: string;
  placeholder?: string;
  isCircular?: boolean;
  className?: string;
}

export function PremiumImageFrame({
  src,
  alt,
  placeholder,
  isCircular = true,
  className = '',
}: PremiumImageFrameProps) {
  const [imageError, setImageError] = useState(false);
  const reduceMotion = useReducedMotion();

  const showPlaceholder = imageError && placeholder;

  const frameClasses = isCircular
    ? 'rounded-full w-64 h-64 sm:w-72 sm:h-72'
    : 'rounded-[10px] w-80 h-96';

  return (
    <motion.div
      animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      className={`relative ${frameClasses} mx-auto ${className}`}
    >
      <div
        className={`absolute -inset-3 bg-[#21242e] ${
          isCircular ? 'rounded-full' : 'clip-chamfer rounded-[10px]'
        } opacity-95 shadow-[0_3px_0_#3d4f97]`}
      />

      <div
        className={`absolute inset-0 ${
          isCircular ? 'rounded-full' : 'rounded-[10px]'
        } border-[6px] border-[#8ba1d4] bg-[#dedede] shadow-[inset_0_2px_0_rgba(255,255,255,0.75),inset_0_-4px_0_rgba(61,79,151,0.65),0_3px_0_#3d4f97] overflow-hidden`}
      >
        <div
          className={`relative w-full h-full ${isCircular ? 'rounded-full' : 'rounded-[4px]'} overflow-hidden bg-[#c0d5e6]`}
        >
          {!showPlaceholder ? (
            <Image
              src={src}
              alt={alt}
              fill
              className="object-cover"
              priority
              onError={() => setImageError(true)}
            />
          ) : (
            <Image
              src={placeholder}
              alt={alt}
              fill
              className="object-cover opacity-50"
              priority
            />
          )}

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/18 via-transparent to-[#3d4f97]/20" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_50%,rgba(33,36,46,0.24)_100%)]" />
        </div>
      </div>

      <div
        className="absolute -bottom-5 left-1/2 h-2 w-24 -translate-x-1/2 rounded-[2px] bg-[#f68d1f] shadow-[0_2px_0_#3d4f97]"
      />
    </motion.div>
  );
}
