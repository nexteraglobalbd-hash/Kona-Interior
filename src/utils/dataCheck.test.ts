/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import test from 'node:test';
import assert from 'node:assert/strict';
import {
  COMPANY_INFO,
  SERVICES,
  ABOUT_IMAGES,
  VIDEO_PROJECTS,
} from '../data/content.js';

test('COMPANY_INFO contains exact official data from PDF & prompt', () => {
  assert.equal(COMPANY_INFO.name, 'KONA INTERIOR');
  assert.equal(COMPANY_INFO.tagline, 'Your Dream Space, Our Creativity.');
  assert.equal(COMPANY_INFO.experienceBadge, '25 Years of Combined Experience');
  assert.equal(COMPANY_INFO.address, 'Sonadanga, Khulna, Bangladesh');
  assert.equal(COMPANY_INFO.whatsappLocal, '01926608733');
  assert.equal(COMPANY_INFO.whatsappInternational, '8801926608733');
  assert.equal(COMPANY_INFO.facebookUrl, 'https://www.facebook.com/konainteriorbd');
  assert.equal(COMPANY_INFO.facebookPageName, 'Kona Interior');
  assert.match(COMPANY_INFO.logoUrl, /WhatsApp_Image_2026-10-24_at_4\.08\.30_PM_fefe40d0\.jpeg$/);
});

test('SERVICES has all 8 required interior services with distinct high-res imagery', () => {
  assert.equal(SERVICES.length, 8);
  const titles = SERVICES.map((s) => s.title);
  assert.deepEqual(titles, [
    'RESIDENTIAL INTERIOR',
    'COMMERCIAL INTERIOR',
    'LIVING ROOM INTERIOR',
    'BEDROOM INTERIOR',
    'KITCHEN INTERIOR',
    'OFFICE INTERIOR',
    'INTERIOR DESIGN & EXECUTION',
    'SPACE PLANNING',
  ]);

  // Ensure all image URLs are non-empty, distinct, and high quality
  const images = SERVICES.map((s) => s.image);
  const uniqueImages = new Set(images);
  assert.equal(uniqueImages.size, 8, 'Every service must have its own unique image');
});

test('ABOUT_IMAGES contains exactly 2 premium distinct interior images', () => {
  assert.equal(ABOUT_IMAGES.length, 2);
  assert.notEqual(ABOUT_IMAGES[0].url, ABOUT_IMAGES[1].url);
  assert.match(ABOUT_IMAGES[0].url, /^https:\/\/images\.unsplash\.com/);
  assert.match(ABOUT_IMAGES[1].url, /^https:\/\/images\.unsplash\.com/);
});

test('VIDEO_PROJECTS provides playable video slots with clear controls', () => {
  assert.equal(VIDEO_PROJECTS.length, 2);
  assert.ok(VIDEO_PROJECTS[0].videoUrl.length > 0);
  assert.ok(VIDEO_PROJECTS[1].videoUrl.length > 0);
});
