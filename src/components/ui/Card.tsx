'use client';

import React from 'react';
import { classNames } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  interactive?: boolean;
}

export function Card({
  children,
  interactive = false,
  className,
  ...props
}: CardProps) {
  return (
    <div
      className={classNames(
        'rounded-2xl glass p-6 group',
        interactive &&
          'transition-all duration-300 hover:glass-elevated hover:border-cyan-400/50 cursor-pointer',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
