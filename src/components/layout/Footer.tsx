'use client';

import React from 'react';
import { Link2, Mail, Share2, Code } from 'lucide-react';

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
    <footer className="border-t border-white/10 glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold gradient-text mb-2">
              Fachry
            </h3>
            <p className="text-cyan-100/70 text-sm">
              Full Stack Developer passionate about building modern digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {['About', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-cyan-100/70 hover:text-cyan-300 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg glass-sm hover:glass-elevated flex items-center justify-center text-cyan-200 hover:text-cyan-100 transition-all duration-300"
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
        <div className="border-t border-white/10 pt-8">
          {/* Bottom Info */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
            <p className="text-cyan-100/70 text-sm">
              © {currentYear} Fachry. All rights reserved.
            </p>
            <p className="text-cyan-100/50 text-xs">
              Built with{' '}
              <span className="text-cyan-400">Next.js</span>
              {' • '}
              <span className="text-blue-400">Tailwind CSS</span>
              {' • '}
              <span className="text-cyan-300">Framer Motion</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
