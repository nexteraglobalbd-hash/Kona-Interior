/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ProjectItem } from '../types/index.ts';
import { X, MapPin, Tag, Calendar, ArrowRight } from 'lucide-react';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onInquire: (projectName: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onInquire,
}) => {
  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-fadeIn"
    >
      <div className="relative w-full max-w-3xl bg-[#F7F6F2] rounded-xs shadow-2xl border border-[#EAE5DC] overflow-hidden max-h-[90vh] flex flex-col">
        {/* Top image header */}
        <div className="relative aspect-16/9 w-full bg-black">
          <img
            src={project.image}
            alt={project.alt}
            className="w-full h-full object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-black/60 hover:bg-black text-white rounded-full transition-colors focus-visible:outline-2 focus-visible:outline-[#F58220]"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-xs px-3 py-1 text-xs font-medium text-white rounded-xs">
            {project.category === 'completed' ? 'Completed Project' : 'Ongoing Project'}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#EAE5DC] pb-4">
            <div>
              <span className="text-xs uppercase tracking-wider text-[#F58220] font-semibold">
                {project.type}
              </span>
              <h3 id="project-modal-title" className="text-2xl font-serif font-bold text-[#222222]">
                {project.title}
              </h3>
            </div>
            {project.location && (
              <div className="flex items-center gap-1.5 text-xs text-[#666666] bg-[#EAE5DC]/60 px-3 py-1 rounded-xs">
                <MapPin className="w-3.5 h-3.5 text-[#F58220]" />
                <span>{project.location}</span>
              </div>
            )}
          </div>

          <p className="text-sm text-[#444444] leading-relaxed">
            {project.description}
          </p>

          {project.stage && (
            <div className="p-3 bg-[#EAE5DC]/60 border border-[#EAE5DC] rounded-xs text-xs text-[#333333]">
              <strong className="text-[#222222]">Current Stage:</strong> {project.stage}
            </div>
          )}

          <div className="flex flex-wrap gap-2 pt-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs text-[#555555] bg-white border border-[#EAE5DC] px-2.5 py-1 rounded-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="pt-4 border-t border-[#EAE5DC] flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-[#777777]">
              Interested in a similar design approach for your space?
            </span>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="px-4 py-2 border border-[#d6cfc4] text-xs font-medium text-[#555555] rounded-xs hover:bg-[#EAE5DC]/50 transition-colors"
              >
                Close
              </button>
              <button
                onClick={() => {
                  onClose();
                  onInquire(project.title);
                }}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2 bg-[#F58220] hover:bg-[#e07416] text-white text-xs font-medium rounded-xs shadow-xs transition-colors"
              >
                <span>Discuss Similar Space</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
