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
    primary: 'bg-cyan-500/20 text-cyan-100 border border-cyan-400/40',
    secondary: 'bg-white/10 text-cyan-100 border border-white/20',
    accent: 'bg-blue-500/20 text-blue-100 border border-blue-400/40',
  };

  const sizeStyles = {
    sm: 'px-2.5 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm',
  };

  return (
    <span
      className={classNames(
        'inline-block rounded-full font-medium',
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
