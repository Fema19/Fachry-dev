'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Link2, Code, Share2 } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { fadeUp, staggerContainer, staggerItem } from '@/lib/animations';

const socialLinks = [
  {
    icon: Mail,
    href: 'mailto:your-email@example.com',
    label: 'Email',
    handle: 'your-email@example.com',
  },
  {
    icon: Code,
    href: 'https://github.com',
    label: 'GitHub',
    handle: '@yourgithub',
  },
  {
    icon: Link2,
    href: 'https://linkedin.com',
    label: 'LinkedIn',
    handle: 'LinkedIn Profile',
  },
  {
    icon: Share2,
    href: 'https://twitter.com',
    label: 'Twitter',
    handle: '@yourtwitter',
  },
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 sm:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-50 mb-4">
            Let's Connect
          </h2>
          <p className="text-slate-400 text-lg">
            I'm always open to new opportunities and collaborations. Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div
              variants={staggerItem}
              className="text-lg font-semibold text-slate-50 mb-6"
            >
              Contact Information
            </motion.div>

            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.label}
                  variants={staggerItem}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 rounded-lg border border-slate-700/50 hover:border-sky-500/50 bg-slate-800/20 hover:bg-sky-500/5 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-sky-500/20 group-hover:bg-sky-500/30 flex items-center justify-center transition-colors">
                    <Icon className="w-6 h-6 text-sky-400 group-hover:text-sky-300" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-50 group-hover:text-sky-300 transition-colors">
                      {link.label}
                    </p>
                    <p className="text-sm text-slate-400">{link.handle}</p>
                  </div>
                </motion.a>
              );
            })}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card className="border-sky-500/30 hover:border-sky-500/50 transition-colors">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="w-full px-4 py-2.5 rounded-lg bg-slate-800/50 border border-slate-700/50 text-slate-50 placeholder-slate-500 focus:outline-none focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/30 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className="w-full px-4 py-2.5 rounded-lg bg-slate-800/50 border border-slate-700/50 text-slate-50 placeholder-slate-500 focus:outline-none focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/30 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows={5}
                    required
                    className="w-full px-4 py-2.5 rounded-lg bg-slate-800/50 border border-slate-700/50 text-slate-50 placeholder-slate-500 focus:outline-none focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/30 transition-all resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                >
                  {submitted ? 'Message Sent!' : 'Send Message'}
                </Button>

                {submitted && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-sm text-green-400 text-center"
                  >
                    Thanks for reaching out! I'll get back to you soon.
                  </motion.p>
                )}
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
