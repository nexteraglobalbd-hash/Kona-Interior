/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { PageRoute } from '../types/index.ts';
import { SERVICES } from '../data/content.ts';
import { CheckCircle2, ArrowRight, MessageSquare, ArrowUpRight } from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: PageRoute) => void;
  onOpenConsultation: (serviceTitle?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onNavigate,
  onOpenConsultation,
}) => {
  return (
    <div className="space-y-20 md:space-y-28 pb-16">
      {/* 1. Header & Introduction */}
      <section className="bg-[#EAE5DC]/40 py-14 sm:py-20 border-b border-[#EAE5DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#F58220] block">
              Our Services
            </span>
            <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#222222]">
              Complete Interior Solutions — From Design to Execution
            </h1>
            <p className="text-base sm:text-lg text-[#555555] font-light leading-relaxed pt-2">
              Every space has a purpose, and every client has a vision. At KONA INTERIOR, we provide
              interior solutions designed around your requirements, preferences, and the functional
              needs of your space. Explore our services to discover how we can help you plan and
              transform your interior.
            </p>
          </div>
        </div>
      </section>

      {/* 2. All 8 Services in Architectural Flow */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16 lg:space-y-24">
          {SERVICES.map((service, index) => {
            const isReversed = index % 2 === 1;

            return (
              <div
                key={service.id}
                id={service.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                  isReversed ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image Column */}
                <div
                  className={`lg:col-span-6 ${
                    isReversed ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div className="relative aspect-4/3 w-full rounded-xs overflow-hidden bg-[#EAE5DC] shadow-sm border border-[#EAE5DC] group">
                    <img
                      src={service.image}
                      alt={service.alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-104"
                    />
                    <div className="absolute top-4 left-4 bg-[#222222]/85 backdrop-blur-xs px-3 py-1 text-xs font-mono text-white rounded-xs">
                      SERVICE {service.number}
                    </div>
                  </div>
                </div>

                {/* Content Column */}
                <div
                  className={`lg:col-span-6 space-y-5 ${
                    isReversed ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div className="space-y-2">
                    <span className="text-xs font-mono font-semibold text-[#F58220] tracking-wider">
                      {service.number} // KONA INTERIOR
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#222222]">
                      {service.title}
                    </h2>
                    <p className="text-sm font-medium text-[#777777]">
                      {service.tagline}
                    </p>
                  </div>

                  <p className="text-sm sm:text-base text-[#555555] leading-relaxed">
                    {service.description}
                  </p>

                  {/* Key inclusions */}
                  <div className="pt-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#222222] block mb-2.5">
                      Key Inclusions
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#666666]">
                      {service.keyPoints.map((point, pIdx) => (
                        <li key={pIdx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#F58220] shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Discuss Your Project Button */}
                  <div className="pt-4 flex items-center gap-4">
                    <button
                      onClick={() => onOpenConsultation(service.title)}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-[#222222] hover:bg-[#333333] text-white text-xs font-medium uppercase tracking-wider rounded-xs transition-colors shadow-xs focus-visible:outline-2 focus-visible:outline-[#F58220]"
                    >
                      <span>Discuss Your Project</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => onNavigate('contact')}
                      className="text-xs text-[#777777] hover:text-[#222222] font-medium"
                    >
                      General Inquiry
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. FINAL CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 lg:p-16 bg-[#222222] text-[#F7F6F2] rounded-xs shadow-xl border border-[#333333] flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl text-center md:text-left">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#F58220]">
              Let's Discuss Your Project
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white">
              Tell us about your space, your ideas, and what you want to achieve.
            </h2>
            <p className="text-xs sm:text-sm text-[#cccccc] leading-relaxed">
              We will discuss your requirements and the next steps. From architectural planning to
              final site execution.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
            <button
              onClick={() => onOpenConsultation()}
              className="w-full sm:w-auto px-6 py-3.5 bg-[#F58220] hover:bg-[#e07416] text-white text-sm font-medium rounded-xs shadow-md transition-colors"
            >
              Book a Consultation
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto px-6 py-3.5 bg-transparent hover:bg-white/10 text-white border border-white/30 text-sm font-medium rounded-xs transition-colors"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
