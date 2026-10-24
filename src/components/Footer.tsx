/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { PageRoute } from '../types/index.ts';
import { COMPANY_INFO } from '../data/content.ts';
import { generateWhatsAppLink } from '../utils/contactValidation.ts';
import { MapPin, Phone, MessageSquare, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageRoute) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const whatsAppLink = generateWhatsAppLink(COMPANY_INFO.whatsappInternational);

  return (
    <footer className="bg-[#222222] text-[#F7F6F2] pt-16 pb-12 border-t border-[#333333]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={COMPANY_INFO.logoUrl}
                alt="KONA INTERIOR"
                className="h-10 w-auto object-contain bg-white/90 p-1 rounded-xs"
              />
              <span className="text-xl font-serif font-bold tracking-wider text-white">
                {COMPANY_INFO.name}
              </span>
            </div>
            <p className="text-sm text-[#F58220] font-medium tracking-wide">
              {COMPANY_INFO.tagline}
            </p>
            <p className="text-xs text-[#b8b8b8] leading-relaxed">
              Creative interior solutions designed around your vision. With 25 years of combined
              experience, delivering thoughtful planning, aesthetics, and quality-focused execution.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-[#F58220] mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-[#cccccc]">
              <li>
                <button
                  onClick={() => {
                    onNavigate('home');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('services');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('projects');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Office & Direct Contact */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-[#F58220] mb-4">
              Get In Touch
            </h4>
            <div className="space-y-3 text-sm text-[#cccccc]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#F58220] shrink-0 mt-0.5" />
                <span>Office: {COMPANY_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#F58220] shrink-0" />
                <div>
                  <span className="text-xs text-[#999999] block">Phone:</span>
                  <a
                    href={`tel:${COMPANY_INFO.phone}`}
                    className="hover:text-[#F58220] transition-colors"
                  >
                    {COMPANY_INFO.phoneDisplay}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-[#25D366] shrink-0" />
                <div>
                  <span className="text-xs text-[#999999] block">WhatsApp:</span>
                  <a
                    href={whatsAppLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#25D366] transition-colors font-medium flex items-center gap-1"
                  >
                    <span>{COMPANY_INFO.whatsappLocal}</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Social & Official Links */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-[#F58220] mb-4">
              Official Social Page
            </h4>
            <p className="text-xs text-[#b8b8b8] mb-3 leading-relaxed">
              Connect with our official Facebook community for ongoing works, design insights, and updates.
            </p>
            <a
              href={COMPANY_INFO.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#1877F2]/15 text-[#60a5fa] hover:bg-[#1877F2] hover:text-white rounded-xs text-xs font-medium transition-colors duration-150 border border-[#1877F2]/30"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              <span>Follow Kona Interior</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#333333] flex flex-col sm:flex-row items-center justify-between text-xs text-[#888888] gap-4">
          <p>© {new Date().getFullYear()} KONA INTERIOR. All Rights Reserved.</p>
          <p className="text-center sm:text-right">
            Sonadanga, Khulna, Bangladesh · Interior Planning & Execution
          </p>
        </div>
      </div>
    </footer>
  );
};
