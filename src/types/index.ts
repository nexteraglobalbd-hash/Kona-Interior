/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type PageRoute = 'home' | 'about' | 'services' | 'projects' | 'contact';

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  alt: string;
  keyPoints: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'completed' | 'ongoing';
  type: string;
  location?: string;
  description: string;
  image: string;
  alt: string;
  stage?: string;
  tags: string[];
}

export interface VideoProject {
  id: string;
  title: string;
  description: string;
  category: 'completed' | 'ongoing';
  videoUrl: string;
  thumbnail: string;
  duration: string;
  clientPlaceholderNote: string;
}

export interface CompanyInfo {
  name: string;
  tagline: string;
  experienceYears: number;
  experienceBadge: string;
  address: string;
  phone: string;
  phoneDisplay: string;
  whatsappLocal: string;
  whatsappInternational: string;
  facebookUrl: string;
  facebookPageName: string;
  logoUrl: string;
}
