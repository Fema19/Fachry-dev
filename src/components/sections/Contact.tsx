'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code, Link2, Mail } from 'lucide-react';
import { staggerContainer, staggerItem } from '@/lib/animations';

const socialLinks = [
  {
    icon: Mail,
    href: 'mailto:fachrinurulakbar19@gmail.com',
    label: 'Email',
    handle: 'fachrinurulakbar19@gmail.com',
  },
  {
    icon: Code,
    href: 'https://github.com/Fema19',
    label: 'GitHub',
    handle: '@Fema19',
  },
  {
    icon: Link2,
    href: 'https://www.linkedin.com/in/fachry-much-n-a-2b68a0375?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    label: 'LinkedIn',
    handle: 'LinkedIn Profile',
  },
];

export function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container-max max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <p className="console-label mb-3">Signal channel</p>
          <h2 className="console-title text-4xl sm:text-5xl">Let&apos;s Connect</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-[#21242e]">
            Reach me through email, GitHub, or LinkedIn for project notes,
            internship opportunities, and collaboration ideas.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="chrome-panel overflow-hidden"
        >
          <div className="chrome-header px-4 py-3">
            <span>Contact ports</span>
            <span className="text-[#3d4f97]">Online</span>
          </div>

          <div className="grid gap-4 p-4 sm:p-5 md:grid-cols-3">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.label}
                  variants={staggerItem}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="chrome-inset group flex min-h-32 flex-col justify-between gap-5 p-4 transition-colors hover:bg-white"
                  aria-label={link.label}
                >
                  <span className="carbon-slab flex h-12 w-12 items-center justify-center rounded-[3px] text-[#ecab37]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-lg font-black text-[#21242e] group-hover:text-[#3d4f97]">
                      {link.label}
                    </span>
                    <span className="mt-1 block break-all text-sm text-[#3d4f97]">
                      {link.handle}
                    </span>
                  </span>
                </motion.a>
              );
            })}
          </div>

          <div className="dotted-divider mx-5 mb-5 pt-4">
            <p className="text-center text-sm font-bold text-[#21242e]">
              Best for Laravel, Next.js, MySQL, Java, and practical web workflow
              conversations.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
