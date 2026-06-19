'use client';

import React from 'react';
import { classNames } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center gap-2 rounded-[3px] border font-black uppercase tracking-[0.04em] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#f68d1f] focus:ring-offset-2 focus:ring-offset-[#21242e] disabled:cursor-not-allowed disabled:opacity-60';

  const variantStyles = {
    primary:
      'border-[#8a5200]/50 bg-[#ecab37] text-[#21242e] shadow-[inset_0_1px_0_rgba(255,255,255,0.75),inset_0_-2px_0_rgba(132,78,0,0.38),0_2px_0_rgba(33,36,46,0.35)] hover:bg-[#f68d1f] hover:text-white',
    secondary:
      'border-white/15 bg-[#21242e] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.14),inset_0_-2px_0_rgba(0,0,0,0.5),0_2px_0_#3d4f97] hover:border-[#ecab37]/80 hover:text-[#ecab37]',
    outline:
      'border-[#3d4f97] bg-white/70 text-[#21242e] shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_2px_0_#3d4f97] hover:bg-[#9fbee7]',
  };

  const sizeStyles = {
    sm: 'min-h-9 px-3 py-1.5 text-[0.7rem]',
    md: 'min-h-11 px-4 py-2.5 text-xs',
    lg: 'min-h-12 px-5 py-3 text-sm',
  };

  return (
    <button
      className={classNames(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
