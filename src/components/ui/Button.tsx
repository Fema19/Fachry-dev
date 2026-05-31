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
    'font-medium transition-all duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500';

  const variantStyles = {
    primary:
      'bg-sky-500 text-white hover:bg-sky-600 shadow-lg hover:shadow-sky-500/50',
    secondary:
      'bg-slate-700 text-slate-50 hover:bg-slate-600 shadow-md hover:shadow-slate-700/50',
    outline:
      'border border-slate-600 text-slate-200 hover:bg-slate-800/50 hover:border-sky-500',
  };

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2.5 text-base',
    lg: 'px-6 py-3 text-lg',
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
