/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import test from 'node:test';
import assert from 'node:assert/strict';
import {
  validateContactForm,
  generateWhatsAppLink,
  formatInquiryForWhatsApp,
} from './contactValidation.js';

test('validateContactForm passes with complete and valid details', () => {
  const result = validateContactForm({
    fullName: 'Mohammad Rahim',
    phoneNumber: '01926608733',
    projectType: 'Residential Interior',
    projectLocation: 'Sonadanga, Khulna',
    message: 'We are looking to design a modern 3-bedroom apartment with open living space.',
  });

  assert.equal(result.isValid, true);
  assert.equal(Object.keys(result.errors).length, 0);
});

test('validateContactForm rejects empty fields with specific error messages', () => {
  const result = validateContactForm({
    fullName: '',
    phoneNumber: '',
    projectType: '',
    projectLocation: '',
    message: '',
  });

  assert.equal(result.isValid, false);
  assert.equal(result.errors.fullName, 'Full Name is required.');
  assert.equal(result.errors.phoneNumber, 'Phone Number is required.');
  assert.equal(result.errors.projectType, 'Project Type is required.');
  assert.equal(result.errors.projectLocation, 'Project Location is required.');
  assert.equal(result.errors.message, 'Please provide details about your project or inquiry.');
});

test('validateContactForm rejects short messages', () => {
  const result = validateContactForm({
    fullName: 'Sarah Khan',
    phoneNumber: '01712345678',
    projectType: 'Commercial Interior',
    projectLocation: 'Khulna Sadar',
    message: 'Hello',
  });

  assert.equal(result.isValid, false);
  assert.equal(result.errors.message, 'Your message should be at least 10 characters.');
});

test('generateWhatsAppLink creates correct wa.me link with prefilled text', () => {
  const link = generateWhatsAppLink('8801926608733');
  assert.match(link, /^https:\/\/wa\.me\/8801926608733\?text=/);
  assert.match(link, /Hello%20KONA%20INTERIOR/);
});

test('formatInquiryForWhatsApp builds structured text for instant messaging', () => {
  const formatted = formatInquiryForWhatsApp({
    fullName: 'Tanvir Ahmed',
    phoneNumber: '01926608733',
    projectType: 'Kitchen Interior',
    projectLocation: 'Sonadanga Phase 2',
    message: 'Need modular kitchen with quartz countertop.',
  });

  assert.match(formatted, /Name: Tanvir Ahmed/);
  assert.match(formatted, /Phone: 01926608733/);
  assert.match(formatted, /Project Type: Kitchen Interior/);
  assert.match(formatted, /Location: Sonadanga Phase 2/);
});
