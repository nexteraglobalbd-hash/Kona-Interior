/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type PageRoute = 'home' | 'about' | 'services' | 'projects' | 'contact';

export const PAGE_TITLES: Record<PageRoute, string> = {
  home: 'KONA INTERIOR | Interior Design & Execution in Khulna',
  about: 'About KONA INTERIOR | Our Experience & Design Approach',
  services: 'Interior Design Services | KONA INTERIOR',
  projects: 'Interior Projects | KONA INTERIOR',
  contact: 'Contact KONA INTERIOR | Sonadanga, Khulna',
};

export function parseHashRoute(hash: string): PageRoute {
  const cleanHash = hash.replace(/^#\/?/, '').trim().toLowerCase();
  if (cleanHash === 'about' || cleanHash === 'about-us') return 'about';
  if (cleanHash === 'services' || cleanHash === 'our-services') return 'services';
  if (cleanHash === 'projects' || cleanHash === 'our-projects') return 'projects';
  if (cleanHash === 'contact' || cleanHash === 'contact-us') return 'contact';
  return 'home';
}

export function getRoutePath(route: PageRoute): string {
  if (route === 'home') return '#/';
  return `#/${route}`;
}
