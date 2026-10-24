/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { PageRoute, ProjectItem } from '../types/index.ts';
import {
  COMPANY_INFO,
  HERO_IMAGE,
  SERVICES,
  PROJECTS,
  VIDEO_PROJECTS,
  WHY_CHOOSE_US_POINTS,
} from '../data/content.ts';
import { VideoPlayer } from '../components/VideoPlayer.tsx';
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
  Compass,
  ShieldCheck,
  Clock,
  Layers,
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageRoute, filterCategory?: 'completed' | 'ongoing' | 'all') => void;
  onOpenConsultation: (service?: string) => void;
  onSelectProject: (project: ProjectItem) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenConsultation,
  onSelectProject,
}) => {
  // Services preview cards as specified in Part 2 of PDF
  const previewServices = SERVICES.slice(0, 6);
  const featuredProjects = PROJECTS.slice(0, 3);

  return (
    <div className="space-y-24 md:space-y-32 pb-16">
      {/* 1. HERO SECTION */}
      <section className="relative pt-6 sm:pt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-xs overflow-hidden bg-[#222222] min-h-[520px] sm:min-h-[580px] lg:min-h-[640px] flex items-center shadow-xl">
            {/* Main Hero Visual: High-quality interior project image */}
            <img
              src={HERO_IMAGE.url}
              alt={HERO_IMAGE.alt}
              className="absolute inset-0 w-full h-full object-cover opacity-45 mix-blend-luminosity scale-102 hover:scale-100 transition-transform duration-1000"
            />
            {/* Subtle architectural gradient for legibility */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#222222]/95 via-[#222222]/80 to-transparent" />

            {/* Hero Copy */}
            <div className="relative z-10 max-w-2xl px-6 sm:px-12 py-12 lg:py-16 text-white space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-xs border border-white/15 rounded-xs text-xs font-medium text-[#F58220] tracking-wider uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F58220]" />
                <span>{COMPANY_INFO.experienceBadge}</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-[1.15]">
                {COMPANY_INFO.tagline}
              </h1>

              <div className="space-y-3 text-sm sm:text-base text-[#e0e0e0] leading-relaxed">
                <p>
                  Transform your space with creative interior design, thoughtful planning, and
                  quality-focused execution.
                </p>
                <p className="text-xs sm:text-sm text-[#b8b8b8]">
                  With 25 years of combined experience, KONA INTERIOR delivers interior solutions
                  designed around your vision, needs, and lifestyle.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button
                  onClick={() => onNavigate('projects')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-[#222222] hover:bg-[#F7F6F2] font-medium text-sm rounded-xs shadow-md transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-white"
                >
                  <span>Explore Our Projects</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onOpenConsultation()}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#F58220] hover:bg-[#e07416] text-white font-medium text-sm rounded-xs shadow-md transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-white"
                >
                  <span>Book a Consultation</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SHORT ABOUT US */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-semibold tracking-widest uppercase text-[#F58220]">
                About KONA INTERIOR
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#222222]">
                We believe every space has the potential to become something extraordinary.
              </h2>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-[#555555] leading-relaxed">
              <p>
                With 25 years of combined experience, KONA INTERIOR creates thoughtful interior
                solutions that balance aesthetics, functionality, and quality.
              </p>
              <p>
                From understanding your vision to bringing your ideas to life, we focus on creating
                spaces that feel personal, practical, and inspiring.
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('about')}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#222222] hover:bg-[#333333] text-white text-sm font-medium rounded-xs transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-[#F58220]"
              >
                <span>Learn More About Us</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative p-6 sm:p-8 bg-[#EAE5DC]/50 rounded-xs border border-[#EAE5DC] space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-white rounded-xs shadow-xs border border-[#EAE5DC]">
                  <span className="text-2xl sm:text-3xl font-serif font-bold text-[#F58220] block">
                    25+
                  </span>
                  <span className="text-xs text-[#666666] font-medium mt-1 block">
                    Years Combined Industry Experience
                  </span>
                </div>
                <div className="p-4 bg-white rounded-xs shadow-xs border border-[#EAE5DC]">
                  <span className="text-2xl sm:text-3xl font-serif font-bold text-[#222222] block">
                    Sonadanga
                  </span>
                  <span className="text-xs text-[#666666] font-medium mt-1 block">
                    Khulna, Bangladesh Base
                  </span>
                </div>
              </div>

              <div className="p-4 bg-white rounded-xs border border-[#EAE5DC] space-y-2">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#222222] flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#F58220]" />
                  <span>Quality-Driven Execution</span>
                </h4>
                <p className="text-xs text-[#666666] leading-relaxed">
                  Every residential and commercial project is carried through from preliminary
                  sketches to finished joinery with dedicated on-site supervision.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SERVICES OVERVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-4 border-b border-[#EAE5DC]">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#F58220]">
              Services Overview
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#222222]">
              Complete Interior Solutions
            </h2>
            <p className="text-sm text-[#666666]">
              From design to execution, we provide interior solutions tailored to your space,
              preferences, and requirements.
            </p>
          </div>
          <button
            onClick={() => onNavigate('services')}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#F58220] hover:text-[#e07416] transition-colors py-1 self-start md:self-auto"
          >
            <span>Explore All 8 Services</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 6 Preview Cards matching PDF */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {previewServices.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-xs border border-[#EAE5DC] overflow-hidden flex flex-col shadow-xs hover:shadow-md transition-all duration-300"
            >
              {/* Image matching the exact service */}
              <div className="relative aspect-4/3 w-full overflow-hidden bg-[#EAE5DC]">
                <img
                  src={service.image}
                  alt={service.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 bg-[#222222]/80 backdrop-blur-xs px-2.5 py-1 text-[11px] font-mono text-[#F7F6F2] rounded-xs">
                  {service.number}
                </div>
              </div>

              {/* Details */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-serif font-bold text-[#222222] group-hover:text-[#F58220] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-[#555555] leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#f0ece4] flex items-center justify-between">
                  <button
                    onClick={() => onNavigate('services')}
                    className="text-xs font-medium text-[#222222] hover:text-[#F58220] flex items-center gap-1 transition-colors"
                  >
                    <span>View Service Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => onOpenConsultation(service.title)}
                    className="text-xs font-semibold text-[#F58220] hover:underline"
                  >
                    Inquire
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button
            onClick={() => onNavigate('services')}
            className="inline-flex items-center gap-2 px-7 py-3 bg-[#222222] hover:bg-[#333333] text-white text-sm font-medium rounded-xs shadow-xs transition-colors"
          >
            <span>Explore All Services</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* 4. FEATURED PROJECTS & VIDEO SPOTLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-4 border-b border-[#EAE5DC]">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#F58220]">
              Featured Projects
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#222222]">
              Our Work, Our Commitment
            </h2>
            <p className="text-sm text-[#666666]">
              Explore our interior projects and discover how thoughtful design can transform a space.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => onNavigate('projects', 'completed')}
              className="px-3.5 py-1.5 text-xs font-medium bg-[#EAE5DC] hover:bg-[#ded7cc] text-[#222222] rounded-xs transition-colors"
            >
              Completed Projects
            </button>
            <button
              onClick={() => onNavigate('projects', 'ongoing')}
              className="px-3.5 py-1.5 text-xs font-medium bg-[#EAE5DC] hover:bg-[#ded7cc] text-[#222222] rounded-xs transition-colors"
            >
              Ongoing Projects
            </button>
            <button
              onClick={() => onNavigate('projects', 'all')}
              className="px-3.5 py-1.5 text-xs font-medium bg-[#222222] hover:bg-[#333333] text-white rounded-xs transition-colors"
            >
              View All Projects
            </button>
          </div>
        </div>

        {/* Video Feature Integration */}
        <div className="mb-12">
          <div className="mb-4">
            <h3 className="text-lg font-serif font-semibold text-[#222222]">
              Project Video Walkthrough Showcase
            </h3>
            <p className="text-xs text-[#666666]">
              Playable interior walk-throughs capturing fine joinery, material textures, and spatial flow.
            </p>
          </div>
          <VideoPlayer videos={VIDEO_PROJECTS} />
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group cursor-pointer bg-white rounded-xs border border-[#EAE5DC] overflow-hidden flex flex-col shadow-xs hover:shadow-md transition-all duration-300"
            >
              <div className="relative aspect-4/3 w-full overflow-hidden bg-[#EAE5DC]">
                <img
                  src={project.image}
                  alt={project.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-xs px-2.5 py-1 text-[11px] text-white rounded-xs">
                  {project.category === 'completed' ? 'Completed' : 'Ongoing'}
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-1">
                  <span className="text-[11px] uppercase tracking-wider text-[#F58220] font-semibold">
                    {project.type}
                  </span>
                  <h4 className="text-base font-serif font-bold text-[#222222] group-hover:text-[#F58220] transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-xs text-[#555555] line-clamp-2">
                    {project.description}
                  </p>
                </div>
                <div className="pt-2 border-t border-[#f0ece4] flex items-center justify-between text-xs text-[#777777]">
                  <span>{project.location || 'Khulna'}</span>
                  <span className="text-[#F58220] font-medium flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    <span>Inspect</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. WHY CHOOSE KONA INTERIOR? */}
      <section className="bg-[#EAE5DC]/40 py-16 sm:py-20 border-y border-[#EAE5DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12 space-y-2">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#F58220]">
              Why Choose KONA INTERIOR?
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#222222]">
              Designed Around Your Vision
            </h2>
            <p className="text-sm text-[#555555] leading-relaxed">
              We focus on understanding your needs and creating interior solutions that combine
              thoughtful design with practical functionality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-white rounded-xs border border-[#EAE5DC] space-y-3 shadow-xs">
              <Clock className="w-6 h-6 text-[#F58220]" />
              <h3 className="text-base font-serif font-bold text-[#222222]">
                25 Years Experience
              </h3>
              <p className="text-xs text-[#666666] leading-relaxed">
                Experience that informs our approach to interior planning and execution across both
                residential and commercial spaces.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xs border border-[#EAE5DC] space-y-3 shadow-xs">
              <Sparkles className="w-6 h-6 text-[#F58220]" />
              <h3 className="text-base font-serif font-bold text-[#222222]">
                Creative Design
              </h3>
              <p className="text-xs text-[#666666] leading-relaxed">
                Design concepts shaped around your preferences and the purpose of your space,
                balancing visual elegance with utility.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xs border border-[#EAE5DC] space-y-3 shadow-xs">
              <Compass className="w-6 h-6 text-[#F58220]" />
              <h3 className="text-base font-serif font-bold text-[#222222]">
                Attention to Detail
              </h3>
              <p className="text-xs text-[#666666] leading-relaxed">
                A thoughtful approach to the details that make an interior feel complete—joinery,
                lighting layers, and material balance.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xs border border-[#EAE5DC] space-y-3 shadow-xs">
              <Layers className="w-6 h-6 text-[#F58220]" />
              <h3 className="text-base font-serif font-bold text-[#222222]">
                Quality Execution
              </h3>
              <p className="text-xs text-[#666666] leading-relaxed">
                A commitment to carrying the design vision through the execution process with
                coordinated on-site management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 lg:p-16 bg-[#222222] text-[#F7F6F2] rounded-xs shadow-xl border border-[#333333] flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl text-center md:text-left">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#F58220]">
              Let's Bring Your Vision to Life
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white">
              Planning a new interior or looking to transform an existing space?
            </h2>
            <p className="text-xs sm:text-sm text-[#cccccc] leading-relaxed">
              Let's discuss your ideas and explore the right solution for your project. Located in
              Sonadanga, Khulna, Bangladesh.
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
