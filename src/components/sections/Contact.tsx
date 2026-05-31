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
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        setStatus('error');
        setErrorMessage(data.error || 'Failed to send message. Please try again.');
        return;
      }

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });

      // Reset success message after 3 seconds
      setTimeout(() => {
        setStatus('idle');
        setErrorMessage('');
      }, 3000);
    } catch (error) {
      setStatus('error');
      setErrorMessage('Failed to send message. Please try again.');
      console.error('Contact form error:', error);
    } finally {
      setIsLoading(false);
    }
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
            
          </motion.div>
        </div>
      </div>
    </section>
  );
}
