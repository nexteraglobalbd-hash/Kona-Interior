/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageRoute, ProjectItem } from './types/index.ts';
import { parseHashRoute, getRoutePath, PAGE_TITLES } from './utils/routing.ts';
import { Navbar } from './components/Navbar.tsx';
import { Footer } from './components/Footer.tsx';
import { ConsultationModal } from './components/ConsultationModal.tsx';
import { ProjectModal } from './components/ProjectModal.tsx';

import { HomePage } from './pages/HomePage.tsx';
import { AboutPage } from './pages/AboutPage.tsx';
import { ServicesPage } from './pages/ServicesPage.tsx';
import { ProjectsPage } from './pages/ProjectsPage.tsx';
import { ContactPage } from './pages/ContactPage.tsx';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageRoute>(() => {
    if (typeof window !== 'undefined') {
      return parseHashRoute(window.location.hash);
    }
    return 'home';
  });

  const [projectsFilter, setProjectsFilter] = useState<'completed' | 'ongoing' | 'all'>('all');
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [consultationService, setConsultationService] = useState<string | undefined>(undefined);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  // Sync route on hashchange
  useEffect(() => {
    const handleHashChange = () => {
      const route = parseHashRoute(window.location.hash);
      setCurrentPage(route);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update document title dynamically based on page
  useEffect(() => {
    document.title = PAGE_TITLES[currentPage] || PAGE_TITLES.home;
  }, [currentPage]);

  const handleNavigate = (page: PageRoute, filterCategory?: 'completed' | 'ongoing' | 'all') => {
    if (filterCategory) {
      setProjectsFilter(filterCategory);
    }
    setCurrentPage(page);
    window.location.hash = getRoutePath(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenConsultation = (serviceTitle?: string) => {
    setConsultationService(serviceTitle);
    setIsConsultationOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F6F2] text-[#222222]">
      {/* Universal Sticky Header */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenConsultation={() => handleOpenConsultation()}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenConsultation={handleOpenConsultation}
            onSelectProject={(project) => setSelectedProject(project)}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onNavigate={handleNavigate}
            onOpenConsultation={() => handleOpenConsultation()}
          />
        )}

        {currentPage === 'services' && (
          <ServicesPage
            onNavigate={handleNavigate}
            onOpenConsultation={(serviceTitle) => handleOpenConsultation(serviceTitle)}
          />
        )}

        {currentPage === 'projects' && (
          <ProjectsPage
            initialFilter={projectsFilter}
            onNavigate={handleNavigate}
            onOpenConsultation={() => handleOpenConsultation()}
            onSelectProject={(project) => setSelectedProject(project)}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage
            onOpenConsultation={() => handleOpenConsultation()}
          />
        )}
      </main>

      {/* Universal Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Modals */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        initialService={consultationService}
      />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onInquire={(projectName) => handleOpenConsultation(`Project Discussion: ${projectName}`)}
      />
    </div>
  );
}
