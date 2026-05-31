'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

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

  const showPlaceholder = imageError && placeholder;

  const frameClasses = isCircular
    ? 'rounded-full w-64 h-64 sm:w-72 sm:h-72'
    : 'rounded-3xl w-80 h-96';

  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 4, repeat: Infinity }}
      className={`relative ${frameClasses} mx-auto ${className}`}
    >
      {/* Outer gradient border ring */}
      <div
        className={`absolute inset-0 bg-gradient-to-br from-sky-500/60 via-blue-500/30 to-transparent ${
          isCircular ? 'rounded-full' : 'rounded-3xl'
        } p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
      />

      {/* Main frame */}
      <div
        className={`absolute inset-0 ${
          isCircular ? 'rounded-full' : 'rounded-3xl'
        } border-2 border-slate-700/80 bg-gradient-to-br from-slate-800/40 to-slate-900/60 backdrop-blur-xl overflow-hidden shadow-2xl shadow-sky-500/10`}
      >
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-sky-400/5 to-transparent" />

        {/* Image */}
        <div
          className={`relative w-full h-full ${isCircular ? 'rounded-full' : 'rounded-3xl'} overflow-hidden`}
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

          {/* Color Grading Layer - Darker with cool tones */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/20 via-blue-900/15 to-slate-900/25 mix-blend-overlay" />

          {/* Blue Tint Overlay - Reduce green saturation */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-600/5 via-transparent to-blue-900/10 mix-blend-multiply" />

          {/* Radial Vignette - Fade edges, suppress background */}
          <div
            className="absolute inset-0 mix-blend-multiply"
            style={{
              background: 'radial-gradient(circle at 50% 50%, transparent 40%, rgba(15, 23, 42, 0.4) 85%, rgba(15, 23, 42, 0.6) 100%)',
            }}
          />

          {/* Cool-tone Color Grade - Desaturate greens */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/15 via-blue-500/8 to-transparent mix-blend-screen opacity-75" />

          {/* Enhanced Contrast & Clarity */}
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-slate-950/5 to-transparent mix-blend-overlay opacity-60" />
        </div>
      </div>

      {/* Accent line bottom */}
      <div
        className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 w-16 bg-gradient-to-r from-sky-400 to-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
      />
    </motion.div>
  );
}
