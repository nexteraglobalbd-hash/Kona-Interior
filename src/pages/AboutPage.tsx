/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { PageRoute } from '../types/index.ts';
import {
  COMPANY_INFO,
  ABOUT_IMAGES,
  DESIGN_APPROACH_STEPS,
  WHY_CHOOSE_US_POINTS,
} from '../data/content.ts';
import {
  MapPin,
  Target,
  Compass,
  ArrowRight,
  ArrowUpRight,
  Award,
  CheckCircle2,
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageRoute) => void;
  onOpenConsultation: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onNavigate,
  onOpenConsultation,
}) => {
  return (
    <div className="space-y-20 md:space-y-28 pb-16">
      {/* 1. Page Header & Subheading */}
      <section className="bg-[#EAE5DC]/40 py-14 sm:py-20 border-b border-[#EAE5DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#F58220] block">
              About KONA INTERIOR
            </span>
            <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#222222]">
              {COMPANY_INFO.tagline}
            </h1>
            <p className="text-base sm:text-lg text-[#555555] font-light leading-relaxed pt-2">
              At KONA INTERIOR, we believe every space has the potential to become something
              extraordinary. With 25 years of combined experience in the interior industry, we are
              committed to transforming ideas into beautiful, functional, and thoughtfully designed
              spaces.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-[#777777] font-medium">
              <MapPin className="w-4 h-4 text-[#F58220]" />
              <span>Based in {COMPANY_INFO.address}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TWO PREMIER BALANCED INTERIOR IMAGES (Strict Requirement 4) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 mb-6">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#F58220]">
            Craftsmanship & Cohesion
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#222222]">
            High-End Interior Spaces
          </h2>
        </div>

        {/* Two balanced, professionally designed image cards with subtle hover effects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ABOUT_IMAGES.map((img) => (
            <div
              key={img.id}
              className="group bg-white rounded-xs border border-[#EAE5DC] overflow-hidden shadow-xs hover:shadow-md transition-all duration-300"
            >
              <div className="relative aspect-16/10 w-full overflow-hidden bg-[#EAE5DC]">
                <img
                  src={img.url}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-104"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
              </div>
              <div className="p-6 space-y-1.5">
                <h3 className="text-lg font-serif font-bold text-[#222222] group-hover:text-[#F58220] transition-colors">
                  {img.title}
                </h3>
                <p className="text-xs text-[#666666] leading-relaxed">
                  {img.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. WHO WE ARE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5 space-y-3">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#F58220]">
              Who We Are
            </span>
            <h2 className="text-3xl font-serif font-bold text-[#222222]">
              Interior spaces that reflect the vision and personality of each client.
            </h2>
            <div className="p-5 bg-[#EAE5DC]/50 rounded-xs border border-[#EAE5DC] space-y-2 mt-4">
              <span className="text-xs font-semibold uppercase text-[#222222] block">
                Regional Presence
              </span>
              <p className="text-xs text-[#555555] leading-relaxed">
                Operating out of Sonadanga, Khulna, providing personalized residential and
                commercial interior design with disciplined execution.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4 text-sm sm:text-base text-[#555555] leading-relaxed">
            <p>
              KONA INTERIOR is dedicated to creating interior spaces that reflect the vision and
              personality of each client. We understand that every project has different
              requirements. That is why we focus on understanding our clients’ ideas, preferences,
              and practical needs before developing an appropriate design approach.
            </p>
            <p>
              Whether it is a residential or commercial interior project, our aim is to create
              thoughtful spaces that combine visual appeal with everyday functionality.
            </p>
            <p>
              Our approach is built around communication, creative planning, attention to detail,
              and a commitment to delivering solutions suited to each project.
            </p>
          </div>
        </div>
      </section>

      {/* 4. OUR EXPERIENCE — 25 Years of Combined Experience */}
      <section className="bg-[#222222] text-[#F7F6F2] py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-4 text-center lg:text-left space-y-2">
              <span className="text-5xl sm:text-7xl font-serif font-bold text-[#F58220] block">
                25
              </span>
              <span className="text-lg font-serif font-semibold text-white block">
                Years of Combined Experience
              </span>
              <p className="text-xs text-[#aaaaaa]">
                Informing our approach to interior planning and execution.
              </p>
            </div>

            <div className="lg:col-span-8 space-y-4 text-sm sm:text-base text-[#cccccc] leading-relaxed border-t lg:border-t-0 lg:border-l border-[#3a3a3a] pt-6 lg:pt-0 lg:pl-10">
              <h3 className="text-2xl font-serif font-bold text-white">
                Experience brings a deeper understanding of space, design, functionality, and
                execution.
              </h3>
              <p>
                With 25 years of combined experience, our team brings industry knowledge and a
                practical perspective to interior projects.
              </p>
              <p className="text-xs sm:text-sm text-[#999999]">
                We aim to make the design journey clear and organized—from understanding your initial
                ideas to working toward the completed space.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. MISSION & VISION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 bg-white rounded-xs border border-[#EAE5DC] shadow-xs space-y-4">
            <div className="w-10 h-10 rounded-xs bg-[#EAE5DC]/70 flex items-center justify-center text-[#F58220]">
              <Target className="w-5 h-5" />
            </div>
            <span className="text-xs font-semibold tracking-widest uppercase text-[#F58220] block">
              Our Mission
            </span>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#222222]">
              Meaningful Environments Through Creative Design
            </h3>
            <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
              Our mission is to transform ordinary spaces into meaningful environments through
              creative design, thoughtful planning, and quality-focused execution. We aim to provide
              interior solutions that reflect our clients’ vision while making effective use of
              their spaces.
            </p>
          </div>

          <div className="p-8 bg-white rounded-xs border border-[#EAE5DC] shadow-xs space-y-4">
            <div className="w-10 h-10 rounded-xs bg-[#EAE5DC]/70 flex items-center justify-center text-[#F58220]">
              <Compass className="w-5 h-5" />
            </div>
            <span className="text-xs font-semibold tracking-widest uppercase text-[#F58220] block">
              Our Vision
            </span>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#222222]">
              A Trusted Name in Interior Design
            </h3>
            <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
              Our vision is to become a trusted name in interior design by consistently delivering
              creative solutions, maintaining professional standards, and building lasting
              relationships with our clients. We aspire to create interiors that are not only
              visually appealing but also functional, comfortable, and suited to the people who use
              them.
            </p>
          </div>
        </div>
      </section>

      {/* 6. OUR DESIGN APPROACH (01 to 05) */}
      <section className="bg-[#EAE5DC]/30 py-16 sm:py-20 border-y border-[#EAE5DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12 space-y-2">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#F58220]">
              Process & Discipline
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#222222]">
              Our Design Approach
            </h2>
            <p className="text-sm text-[#666666]">
              A structured five-phase framework guiding every interior space from concept to handover.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {DESIGN_APPROACH_STEPS.map((step) => (
              <div
                key={step.step}
                className="bg-white p-6 rounded-xs border border-[#EAE5DC] flex flex-col justify-between shadow-xs space-y-3"
              >
                <div>
                  <span className="text-3xl font-serif font-bold text-[#F58220] block mb-2">
                    {step.step}
                  </span>
                  <h3 className="text-base font-serif font-bold text-[#222222] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#555555] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. WHY CHOOSE KONA INTERIOR? */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10 space-y-2">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#F58220]">
            Core Strengths
          </span>
          <h2 className="text-3xl font-serif font-bold text-[#222222]">
            Why Choose KONA INTERIOR?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US_POINTS.map((item, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-xs border border-[#EAE5DC] space-y-3 shadow-xs"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#F58220] shrink-0" />
                <h3 className="text-base font-serif font-bold text-[#222222]">
                  {item.title}
                </h3>
              </div>
              <p className="text-xs text-[#555555] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. FINAL CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 lg:p-16 bg-[#222222] text-[#F7F6F2] rounded-xs shadow-xl border border-[#333333] flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl text-center md:text-left">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#F58220]">
              Every great space begins with an idea.
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white">
              Let's Bring Your Vision to Life.
            </h2>
            <p className="text-xs sm:text-sm text-[#cccccc] leading-relaxed">
              Share your vision with KONA INTERIOR, and let's explore how we can help transform your
              space.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
            <button
              onClick={onOpenConsultation}
              className="w-full sm:w-auto px-6 py-3.5 bg-[#F58220] hover:bg-[#e07416] text-white text-sm font-medium rounded-xs shadow-md transition-colors"
            >
              Book a Consultation
            </button>
            <button
              onClick={() => onNavigate('projects')}
              className="w-full sm:w-auto px-6 py-3.5 bg-transparent hover:bg-white/10 text-white border border-white/30 text-sm font-medium rounded-xs transition-colors"
            >
              Explore Our Projects
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
