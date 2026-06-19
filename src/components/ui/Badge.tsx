'use client';

import React from 'react';
import { classNames } from '@/lib/utils';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'primary' | 'secondary' | 'accent';
  size?: 'sm' | 'md';
  children: React.ReactNode;
}

export function Badge({
  variant = 'secondary',
  size = 'sm',
  className,
  children,
  ...props
}: BadgeProps) {
  const variantStyles = {
    primary: 'bg-[#ecab37] text-[#21242e] border-[#8a5200]/40',
    secondary: 'bg-white/75 text-[#3d4f97] border-[#5a5f8c]/50',
    accent: 'bg-[#f68d1f] text-white border-[#8a5200]/50',
  };

  const sizeStyles = {
    sm: 'px-2.5 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm',
  };

  return (
    <span
      className={classNames(
        'inline-block rounded-[3px] border font-black uppercase tracking-[0.04em] shadow-[inset_0_1px_0_rgba(255,255,255,0.55)]',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
