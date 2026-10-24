/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageRoute } from '../types/index.ts';
import { COMPANY_INFO } from '../data/content.ts';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  currentPage: PageRoute;
  onNavigate: (page: PageRoute) => void;
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenConsultation,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { label: string; page: PageRoute }[] = [
    { label: 'Home', page: 'home' },
    { label: 'About Us', page: 'about' },
    { label: 'Services', page: 'services' },
    { label: 'Projects', page: 'projects' },
    { label: 'Contact Us', page: 'contact' },
  ];

  const handleNavClick = (page: PageRoute) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-[#F7F6F2]/95 backdrop-blur-md shadow-xs border-b border-[#EAE5DC]'
          : 'bg-[#F7F6F2] border-b border-[#EAE5DC]/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left group focus-visible:outline-2 focus-visible:outline-[#F58220] rounded-sm py-1"
            aria-label="KONA INTERIOR Homepage"
          >
            <img
              src={COMPANY_INFO.logoUrl}
              alt="KONA INTERIOR Logo"
              className="h-11 w-auto object-contain transition-transform duration-200 group-hover:scale-102"
            />
            <div className="hidden sm:block">
              <span className="block text-lg font-serif font-bold tracking-wider text-[#222222]">
                KONA INTERIOR
              </span>
              <span className="block text-[10px] tracking-widest uppercase text-[#777777] font-medium">
                Khulna · Bangladesh
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
            {navItems.map((item) => {
              const isActive = currentPage === item.page;
              return (
                <button
                  key={item.page}
                  onClick={() => handleNavClick(item.page)}
                  className={`relative py-2 text-sm tracking-wide font-medium transition-colors focus-visible:outline-2 focus-visible:outline-[#F58220] rounded-xs ${
                    isActive
                      ? 'text-[#F58220] font-semibold'
                      : 'text-[#222222] hover:text-[#F58220]'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#F58220] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center">
            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#F58220] hover:bg-[#e07416] text-white text-sm font-medium rounded-sm shadow-xs transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-[#222222]"
            >
              <span>Book a Consultation</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenConsultation}
              className="px-3 py-1.5 bg-[#F58220] text-white text-xs font-medium rounded-sm hover:bg-[#e07416] transition-colors"
            >
              Consultation
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#222222] hover:text-[#F58220] focus-visible:outline-2 focus-visible:outline-[#F58220] rounded-sm"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F7F6F2] border-b border-[#EAE5DC] px-4 pt-2 pb-6 space-y-2 animate-fadeIn">
          {navItems.map((item) => {
            const isActive = currentPage === item.page;
            return (
              <button
                key={item.page}
                onClick={() => handleNavClick(item.page)}
                className={`w-full text-left px-3 py-3 text-base font-medium rounded-sm transition-colors ${
                  isActive
                    ? 'bg-[#EAE5DC] text-[#F58220] font-semibold'
                    : 'text-[#222222] hover:bg-[#EAE5DC]/60'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                {item.label}
              </button>
            );
          })}
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#F58220] text-white font-medium rounded-sm hover:bg-[#e07416] transition-colors"
            >
              <span>Book a Consultation</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
