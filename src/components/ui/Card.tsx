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
        'chrome-card p-5 group',
        interactive &&
          'transition-all duration-300 hover:-translate-y-1 hover:border-[#f68d1f] hover:shadow-[inset_0_2px_0_rgba(255,255,255,0.72),inset_0_-3px_0_rgba(61,79,151,0.62),0_4px_0_#3d4f97,0_16px_26px_rgba(33,36,46,0.22)]',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
