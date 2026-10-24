/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ContactFormData {
  fullName: string;
  phoneNumber: string;
  projectType: string;
  projectLocation: string;
  message: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: Partial<Record<keyof ContactFormData, string>>;
}

export function validateContactForm(data: ContactFormData): ValidationResult {
  const errors: Partial<Record<keyof ContactFormData, string>> = {};

  const trimmedName = data.fullName.trim();
  if (!trimmedName) {
    errors.fullName = 'Full Name is required.';
  } else if (trimmedName.length < 2) {
    errors.fullName = 'Please enter a valid full name (at least 2 characters).';
  }

  const trimmedPhone = data.phoneNumber.trim().replace(/[\s-]/g, '');
  if (!trimmedPhone) {
    errors.phoneNumber = 'Phone Number is required.';
  } else if (!/^(?:\+?880|0)?1[3-9]\d{8}$/.test(trimmedPhone) && trimmedPhone.length < 7) {
    errors.phoneNumber = 'Please enter a valid contact phone number.';
  }

  const trimmedType = data.projectType.trim();
  if (!trimmedType) {
    errors.projectType = 'Project Type is required.';
  }

  const trimmedLocation = data.projectLocation.trim();
  if (!trimmedLocation) {
    errors.projectLocation = 'Project Location is required.';
  }

  const trimmedMessage = data.message.trim();
  if (!trimmedMessage) {
    errors.message = 'Please provide details about your project or inquiry.';
  } else if (trimmedMessage.length < 10) {
    errors.message = 'Your message should be at least 10 characters.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

export function generateWhatsAppLink(
  phoneNumber: string = '8801926608733',
  customMessage?: string
): string {
  const defaultMessage =
    'Hello KONA INTERIOR, I would like to discuss an interior project. Please let me know how we can proceed.';
  const messageText = customMessage || defaultMessage;
  const encoded = encodeURIComponent(messageText);
  const cleanNumber = phoneNumber.replace(/[^0-9]/g, '');
  return `https://wa.me/${cleanNumber}?text=${encoded}`;
}

export function formatInquiryForWhatsApp(data: ContactFormData): string {
  return `Hello KONA INTERIOR, I would like to discuss an interior project:
- Name: ${data.fullName.trim()}
- Phone: ${data.phoneNumber.trim()}
- Project Type: ${data.projectType.trim()}
- Location: ${data.projectLocation.trim()}
- Message: ${data.message.trim()}`;
}
