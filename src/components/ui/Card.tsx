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
        'rounded-xl border border-slate-700/50 bg-slate-900/40 backdrop-blur-sm p-6',
        interactive &&
          'transition-all duration-300 hover:border-sky-500/50 hover:shadow-lg hover:shadow-sky-500/10',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
