'use client';

import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useScroll } from '@/hooks/useScroll';
import { scrollToSection } from '@/lib/utils';

const navLinks = [
  { label: 'Home', href: '#hero', id: 'hero' },
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Skills', href: '#skills', id: 'skills' },
  { label: 'Experience', href: '#experience', id: 'experience' },
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'Contact', href: '#contact', id: 'contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const { scrollY } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) => link.id);
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom >= 120;
      });

      if (current) setActiveSection(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-[70] border-b-2 border-[#3d4f97] transition-all duration-300 ${
        scrollY > 24 ? 'bg-[#21242e]/95 shadow-[0_3px_0_#3d4f97]' : 'bg-[#21242e]'
      }`}
      aria-label="Primary navigation"
    >
      <div className="halftone relative z-10">
        <div className="container-max">
          <div className="flex h-16 items-center justify-between gap-3">
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                handleNav('hero');
              }}
              className="flex-shrink-0 rounded-full border-2 border-white bg-white px-4 py-1 font-black text-[#e60012] shadow-[inset_0_1px_0_rgba(255,255,255,0.85),0_2px_0_#3d4f97] transition-transform hover:-translate-y-0.5"
            >
              Fachry
            </a>

            <div className="hidden items-center gap-1 md:flex">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    type="button"
                    onClick={() => handleNav(link.id)}
                    className={`relative min-h-10 px-3 py-2 text-[0.78rem] font-black uppercase tracking-[0.04em] transition-colors ${
                      isActive
                        ? 'text-[#ecab37]'
                        : 'text-[#e48600] hover:text-[#f68d1f]'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {link.label}
                    <span
                      className={`absolute inset-x-2 bottom-1 h-1 rounded-[2px] bg-[#f68d1f] transition-opacity ${
                        isActive ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              onClick={() => setIsOpen((current) => !current)}
              className="console-chip min-h-11 px-3 md:hidden"
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      <div className="hidden border-t border-white/10 bg-[#9fbee7] md:block">
        <div className="container-max flex items-center justify-between py-1 text-[0.68rem] font-black uppercase tracking-[0.04em] text-[#21242e]">
          <span>Portfolio dashboard</span>
          <span className="text-[#3d4f97]">Laravel / Next.js / MySQL / Java</span>
        </div>
      </div>

      {isOpen && (
        <div
          id="mobile-navigation"
          className="absolute left-0 right-0 top-full z-[80] border-t-2 border-[#3d4f97] bg-[#21242e] px-4 py-4 shadow-[0_8px_0_rgba(61,79,151,0.45),0_18px_30px_rgba(33,36,46,0.35)] md:hidden"
        >
          <div className="mx-auto grid max-w-xl gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => handleNav(link.id)}
                  className={`min-h-12 rounded-[3px] border px-4 py-3 text-left text-xs font-black uppercase tracking-[0.04em] shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] ${
                    isActive
                      ? 'border-[#f68d1f] bg-[#ecab37] text-[#21242e]'
                      : 'border-white/10 bg-white/5 text-[#e48600]'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
