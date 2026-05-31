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
    primary: 'bg-sky-500/20 text-sky-200 border border-sky-500/30',
    secondary: 'bg-slate-700/50 text-slate-300 border border-slate-600/50',
    accent: 'bg-blue-500/20 text-blue-200 border border-blue-500/30',
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
