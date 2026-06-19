'use client';

import React from 'react';
import { Code, Link2, Mail } from 'lucide-react';

const socialLinks = [
  {
    icon: Mail,
    href: 'mailto:fachrinurulakbar19@gmail.com',
    label: 'Email',
  },
  {
    icon: Code,
    href: 'https://github.com/Fema19',
    label: 'GitHub',
  },
  {
    icon: Link2,
    href: 'https://www.linkedin.com/in/fachry-much-n-a-2b68a0375?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    label: 'LinkedIn',
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="console-shell border-t-2 border-[#3d4f97] bg-[#21242e] text-white">
      <div className="halftone">
        <div className="container-max py-6">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-lg font-black text-[#ecab37]">Fachry</p>
              <p className="mt-1 max-w-xl text-sm text-[#c0d5e6]">
                Full-stack web developer focused on Laravel, Next.js, MySQL,
                Java, clean interfaces, and practical workflows.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-[3px] border border-white/15 bg-white/5 text-[#ecab37] transition-colors hover:bg-[#ecab37] hover:text-[#21242e]"
                    aria-label={link.label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="dotted-divider mt-5 flex flex-col gap-2 pt-4 text-[0.72rem] font-bold uppercase tracking-[0.04em] text-[#9fbee7] sm:flex-row sm:items-center sm:justify-between">
            <p>Copyright {currentYear} Fachry. All rights reserved.</p>
            <p>Built with Next.js, TypeScript, and Tailwind CSS.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
