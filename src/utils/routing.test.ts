/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import test from 'node:test';
import assert from 'node:assert/strict';
import { parseHashRoute, PAGE_TITLES, getRoutePath } from './routing.js';

test('parseHashRoute resolves standard hashes to corresponding routes', () => {
  assert.equal(parseHashRoute(''), 'home');
  assert.equal(parseHashRoute('#/'), 'home');
  assert.equal(parseHashRoute('#/about'), 'about');
  assert.equal(parseHashRoute('#about-us'), 'about');
  assert.equal(parseHashRoute('#/services'), 'services');
  assert.equal(parseHashRoute('#/projects'), 'projects');
  assert.equal(parseHashRoute('#/contact'), 'contact');
  assert.equal(parseHashRoute('#contact-us'), 'contact');
  assert.equal(parseHashRoute('#unknown-route'), 'home');
});

test('PAGE_TITLES match exact PDF specification for all 5 pages', () => {
  assert.equal(PAGE_TITLES.home, 'KONA INTERIOR | Interior Design & Execution in Khulna');
  assert.equal(PAGE_TITLES.about, 'About KONA INTERIOR | Our Experience & Design Approach');
  assert.equal(PAGE_TITLES.services, 'Interior Design Services | KONA INTERIOR');
  assert.equal(PAGE_TITLES.projects, 'Interior Projects | KONA INTERIOR');
  assert.equal(PAGE_TITLES.contact, 'Contact KONA INTERIOR | Sonadanga, Khulna');
});

test('getRoutePath returns clean hash URLs', () => {
  assert.equal(getRoutePath('home'), '#/');
  assert.equal(getRoutePath('about'), '#/about');
  assert.equal(getRoutePath('services'), '#/services');
  assert.equal(getRoutePath('projects'), '#/projects');
  assert.equal(getRoutePath('contact'), '#/contact');
});
