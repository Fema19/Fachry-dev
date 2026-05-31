'use client';

import React from 'react';
import { Link2, Mail, Share2, Code } from 'lucide-react';

const socialLinks = [
  {
    icon: Mail,
    href: 'mailto:your-email@example.com',
    label: 'Email',
  },
  {
    icon: Code,
    href: 'https://github.com',
    label: 'GitHub',
  },
  {
    icon: Link2,
    href: 'https://linkedin.com',
    label: 'LinkedIn',
  },
  {
    icon: Share2,
    href: 'https://twitter.com',
    label: 'Twitter',
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-700/20 bg-slate-950/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent mb-2">
              Fema
            </h3>
            <p className="text-slate-400 text-sm">
              Full Stack Developer passionate about building modern digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-slate-200 mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {['About', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-slate-400 hover:text-sky-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold text-slate-200 mb-4">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-slate-800/50 hover:bg-sky-500/20 border border-slate-700/50 hover:border-sky-500/50 flex items-center justify-center text-slate-400 hover:text-sky-400 transition-all duration-300"
                    aria-label={link.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700/20 pt-8">
          {/* Bottom Info */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
            <p className="text-slate-400 text-sm">
              © {currentYear} Fema. All rights reserved.
            </p>
            <p className="text-slate-500 text-xs">
              Built with{' '}
              <span className="text-sky-400">Next.js</span>
              {' • '}
              <span className="text-blue-400">Tailwind CSS</span>
              {' • '}
              <span className="text-cyan-400">Framer Motion</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
