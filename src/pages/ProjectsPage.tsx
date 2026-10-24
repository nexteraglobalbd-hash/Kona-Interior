/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PageRoute, ProjectItem } from '../types/index.ts';
import { PROJECTS, VIDEO_PROJECTS } from '../data/content.ts';
import { VideoPlayer } from '../components/VideoPlayer.tsx';
import { ArrowRight, Film, MapPin, Eye, CheckCircle2 } from 'lucide-react';

interface ProjectsPageProps {
  initialFilter?: 'completed' | 'ongoing' | 'all';
  onNavigate: (page: PageRoute) => void;
  onOpenConsultation: () => void;
  onSelectProject: (project: ProjectItem) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({
  initialFilter = 'all',
  onNavigate,
  onOpenConsultation,
  onSelectProject,
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'completed' | 'ongoing' | 'videos'>(
    initialFilter === 'completed' || initialFilter === 'ongoing' ? initialFilter : 'all'
  );

  const filteredProjects =
    activeTab === 'all'
      ? PROJECTS
      : activeTab === 'videos'
      ? []
      : PROJECTS.filter((p) => p.category === activeTab);

  return (
    <div className="space-y-20 md:space-y-28 pb-16">
      {/* 1. Page Header & Intro */}
      <section className="bg-[#EAE5DC]/40 py-14 sm:py-20 border-b border-[#EAE5DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#F58220] block">
              Our Projects
            </span>
            <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#222222]">
              Spaces We Have Worked On
            </h1>
            <p className="text-base sm:text-lg text-[#555555] font-light leading-relaxed pt-2">
              Explore the interior projects of KONA INTERIOR and discover our approach to design,
              planning, and execution. Every project has its own requirements, challenges, and
              vision. Our goal is to develop solutions that suit the purpose of each space and the
              needs of the client.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Filter Navigation */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center gap-2 border-b border-[#EAE5DC] pb-4">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 text-xs font-medium rounded-xs transition-colors ${
              activeTab === 'all'
                ? 'bg-[#222222] text-white shadow-xs'
                : 'bg-white text-[#555555] hover:text-[#222222] border border-[#EAE5DC]'
            }`}
          >
            All Work ({PROJECTS.length})
          </button>
          <button
            onClick={() => setActiveTab('completed')}
            className={`px-4 py-2 text-xs font-medium rounded-xs transition-colors ${
              activeTab === 'completed'
                ? 'bg-[#222222] text-white shadow-xs'
                : 'bg-white text-[#555555] hover:text-[#222222] border border-[#EAE5DC]'
            }`}
          >
            Completed Projects
          </button>
          <button
            onClick={() => setActiveTab('ongoing')}
            className={`px-4 py-2 text-xs font-medium rounded-xs transition-colors ${
              activeTab === 'ongoing'
                ? 'bg-[#222222] text-white shadow-xs'
                : 'bg-white text-[#555555] hover:text-[#222222] border border-[#EAE5DC]'
            }`}
          >
            Ongoing Projects
          </button>
          <button
            onClick={() => setActiveTab('videos')}
            className={`px-4 py-2 text-xs font-medium rounded-xs transition-colors flex items-center gap-1.5 ${
              activeTab === 'videos'
                ? 'bg-[#F58220] text-white shadow-xs'
                : 'bg-white text-[#555555] hover:text-[#222222] border border-[#EAE5DC]'
            }`}
          >
            <Film className="w-3.5 h-3.5" />
            <span>Official Video Showcase (2)</span>
          </button>
        </div>
      </section>

      {/* 3. Official Video Showcase Section */}
      {(activeTab === 'all' || activeTab === 'videos') && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4 mb-6">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#F58220]" />
              <span className="text-xs font-semibold tracking-widest uppercase text-[#F58220]">
                Official KONA INTERIOR Videos
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#222222]">
              Project Video Walkthroughs
            </h2>
            <p className="text-xs sm:text-sm text-[#666666] max-w-2xl">
              Authentic playable video tours showcasing finished craftsmanship, spatial flows, and
              execution progress. Use the built-in controls or configure customized direct URLs.
            </p>
          </div>

          <VideoPlayer videos={VIDEO_PROJECTS} />
        </section>
      )}

      {/* 4. Projects Cards Grid */}
      {activeTab !== 'videos' && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-3 mb-8">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#222222]">
              {activeTab === 'completed'
                ? 'Bringing Design Ideas to Life'
                : activeTab === 'ongoing'
                ? 'The Process Behind the Space'
                : 'Curated Project Portfolio'}
            </h2>
            <p className="text-xs sm:text-sm text-[#666666] max-w-2xl">
              {activeTab === 'completed'
                ? 'Explore completed projects and see how interior design concepts take shape in real spaces.'
                : activeTab === 'ongoing'
                ? 'Discover selected ongoing projects and see the work in progress as interior concepts move toward completion.'
                : 'A selection of completed and ongoing interior assignments reflecting our disciplined design approach.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className="group cursor-pointer bg-white rounded-xs border border-[#EAE5DC] overflow-hidden flex flex-col shadow-xs hover:shadow-md transition-all duration-300"
              >
                <div className="relative aspect-4/3 w-full overflow-hidden bg-[#EAE5DC]">
                  <img
                    src={project.image}
                    alt={project.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-[#222222]/85 backdrop-blur-xs px-2.5 py-1 text-[11px] text-white rounded-xs font-medium">
                    {project.category === 'completed' ? 'Completed' : 'Ongoing'}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <span className="text-[11px] uppercase tracking-wider text-[#F58220] font-semibold">
                      {project.type}
                    </span>
                    <h3 className="text-xl font-serif font-bold text-[#222222] group-hover:text-[#F58220] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-[#555555] leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  {project.stage && (
                    <div className="text-[11px] text-[#333333] bg-[#EAE5DC]/50 p-2 rounded-xs border border-[#EAE5DC]">
                      <strong>Current Stage:</strong> {project.stage}
                    </div>
                  )}

                  <div className="pt-3 border-t border-[#f0ece4] flex items-center justify-between text-xs text-[#777777]">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#F58220]" />
                      <span>{project.location || 'Khulna'}</span>
                    </div>
                    <span className="text-[#F58220] font-medium flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                      <span>View Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 5. Our Approach */}
      <section className="bg-[#EAE5DC]/40 py-16 sm:py-20 border-y border-[#EAE5DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#F58220]">
              Our Approach
            </span>
            <h2 className="text-3xl font-serif font-bold text-[#222222]">
              We believe successful interior projects begin with understanding the client's vision
              and continue through thoughtful planning, design, and execution.
            </h2>
            <p className="text-sm sm:text-base text-[#555555] leading-relaxed">
              Our aim is to create spaces that balance aesthetics, functionality, and the practical
              requirements of each project.
            </p>
          </div>
        </div>
      </section>

      {/* 6. CTA: Have a Project in Mind? */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 lg:p-16 bg-[#222222] text-[#F7F6F2] rounded-xs shadow-xl border border-[#333333] flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl text-center md:text-left">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#F58220]">
              Have a Project in Mind?
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white">
              Let's discuss your ideas and explore the right interior solution for your space.
            </h2>
            <p className="text-xs sm:text-sm text-[#cccccc] leading-relaxed">
              Connect with our design team in Sonadanga, Khulna to schedule an initial consultation.
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
