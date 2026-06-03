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
        className={`absolute inset-0 bg-gradient-to-br from-cyan-400/40 via-blue-400/20 to-transparent ${
          isCircular ? 'rounded-full' : 'rounded-3xl'
        } p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
      />

      {/* Main frame */}
      <div
        className={`absolute inset-0 ${
          isCircular ? 'rounded-full' : 'rounded-3xl'
        } border-2 border-white/30 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-2xl overflow-hidden shadow-2xl shadow-cyan-400/20`}
      >
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-300/10 to-transparent" />

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

          {/* Color Grading Layer - Premium cool tones */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#07111F]/40 via-blue-900/10 to-[#0F1F38]/25 mix-blend-overlay" />

          {/* Cyan Tint Overlay - Cool premium tone */}
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/8 via-transparent to-blue-600/10 mix-blend-multiply" />

          {/* Radial Vignette - Fade edges */}
          <div
            className="absolute inset-0 mix-blend-multiply"
            style={{
              background: 'radial-gradient(circle at 50% 50%, transparent 40%, rgba(7, 17, 31, 0.3) 85%, rgba(7, 17, 31, 0.5) 100%)',
            }}
          />

          {/* Premium Color Grade */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F1F38]/15 via-cyan-500/5 to-transparent mix-blend-screen opacity-75" />

          {/* Enhanced Clarity */}
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/3 to-transparent mix-blend-overlay opacity-50" />
        </div>
      </div>

      {/* Accent line bottom */}
      <div
        className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 w-16 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
      />
    </motion.div>
  );
}
