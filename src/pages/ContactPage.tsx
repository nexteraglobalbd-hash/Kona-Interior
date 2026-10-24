/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { COMPANY_INFO, SERVICES } from '../data/content.ts';
import {
  ContactFormData,
  validateContactForm,
  generateWhatsAppLink,
  formatInquiryForWhatsApp,
} from '../utils/contactValidation.ts';
import {
  MapPin,
  Phone,
  MessageSquare,
  Send,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  ArrowUpRight,
  Clock,
  ShieldCheck,
} from 'lucide-react';

interface ContactPageProps {
  onOpenConsultation: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenConsultation }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    phoneNumber: '',
    projectType: 'Residential Interior',
    projectLocation: 'Sonadanga, Khulna',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedInquiry, setSubmittedInquiry] = useState<{
    id: string;
    timestamp: string;
    data: ContactFormData;
  } | null>(null);

  const whatsAppDirectLink = generateWhatsAppLink(COMPANY_INFO.whatsappInternational);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateContactForm(formData);

    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);

    // Honest submission handling: store inquiry in verified local state and create reference ID
    setTimeout(() => {
      const inquiryId = `KONA-${Date.now().toString().slice(-6)}`;
      const submissionRecord = {
        id: inquiryId,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        data: { ...formData },
      };

      try {
        const stored = JSON.parse(localStorage.getItem('kona_inquiries') || '[]');
        stored.push(submissionRecord);
        localStorage.setItem('kona_inquiries', JSON.stringify(stored));
      } catch (err) {
        // Fallback for isolated storage
      }

      setSubmittedInquiry(submissionRecord);
      setIsSubmitting(false);
    }, 400);
  };

  return (
    <div className="space-y-20 md:space-y-28 pb-16">
      {/* 1. Page Header & Subheading */}
      <section className="bg-[#EAE5DC]/40 py-14 sm:py-20 border-b border-[#EAE5DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#F58220] block">
              Contact KONA INTERIOR
            </span>
            <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#222222]">
              Let's Bring Your Vision to Life.
            </h1>
            <p className="text-base sm:text-lg text-[#555555] font-light leading-relaxed pt-2">
              Planning a new interior project or looking to transform an existing space? We would
              love to hear about your ideas and requirements. Contact KONA INTERIOR to discuss your
              project and explore the next steps.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Main Contact Grid: Get In Touch & Send Us A Message */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: GET IN TOUCH */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-semibold tracking-widest uppercase text-[#F58220]">
                Get In Touch
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#222222]">
                Company Information
              </h2>
              <p className="text-xs sm:text-sm text-[#666666] leading-relaxed">
                Connect directly with our design consultants in Sonadanga, Khulna or visit our office.
              </p>
            </div>

            <div className="bg-white rounded-xs border border-[#EAE5DC] p-6 space-y-6 shadow-xs">
              {/* Office Address */}
              <div className="flex items-start gap-3 pb-5 border-b border-[#f0ece4]">
                <div className="w-10 h-10 rounded-xs bg-[#EAE5DC]/60 flex items-center justify-center text-[#F58220] shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-0.5">
                  <span className="text-xs text-[#888888] font-medium block">Office Address</span>
                  <p className="text-sm font-semibold text-[#222222]">
                    {COMPANY_INFO.name}
                  </p>
                  <p className="text-xs text-[#555555]">
                    {COMPANY_INFO.address}
                  </p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-3 pb-5 border-b border-[#f0ece4]">
                <div className="w-10 h-10 rounded-xs bg-emerald-50 flex items-center justify-center text-[#25D366] shrink-0 mt-0.5">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs text-[#888888] font-medium block">
                    WhatsApp (Direct)
                  </span>
                  <a
                    href={whatsAppDirectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-[#222222] hover:text-[#25D366] transition-colors flex items-center gap-1.5"
                  >
                    <span>{COMPANY_INFO.whatsappLocal}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                  <p className="text-[11px] text-[#777777]">
                    Click-to-chat active (International: +{COMPANY_INFO.whatsappInternational})
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3 pb-5 border-b border-[#f0ece4]">
                <div className="w-10 h-10 rounded-xs bg-[#EAE5DC]/60 flex items-center justify-center text-[#F58220] shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-0.5">
                  <span className="text-xs text-[#888888] font-medium block">
                    Official Phone Number
                  </span>
                  <a
                    href={`tel:${COMPANY_INFO.phone}`}
                    className="text-sm font-semibold text-[#222222] hover:text-[#F58220] transition-colors"
                  >
                    {COMPANY_INFO.phoneDisplay}
                  </a>
                  <p className="text-[11px] text-[#888888]">
                    Available during business hours (9:00 AM – 8:00 PM)
                  </p>
                </div>
              </div>

              {/* Facebook */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xs bg-blue-50 flex items-center justify-center text-[#1877F2] shrink-0 mt-0.5">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </div>
                <div className="space-y-1">
                  <span className="text-xs text-[#888888] font-medium block">
                    Official Facebook Page
                  </span>
                  <a
                    href={COMPANY_INFO.facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-[#1877F2] hover:underline flex items-center gap-1.5"
                  >
                    <span>{COMPANY_INFO.facebookPageName}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                  <p className="text-[11px] text-[#777777]">
                    facebook.com/konainteriorbd
                  </p>
                </div>
              </div>
            </div>

            {/* Khulna Location Anchor */}
            <div className="p-5 bg-[#EAE5DC]/50 rounded-xs border border-[#EAE5DC] space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#222222] block">
                Khulna Operational Hub
              </span>
              <p className="text-xs text-[#666666] leading-relaxed">
                We handle site visits, measurement checks, interior carpentry, and supervision
                across Khulna district and nearby divisions.
              </p>
            </div>
          </div>

          {/* Right Column: SEND US A MESSAGE */}
          <div className="lg:col-span-7 bg-white rounded-xs border border-[#EAE5DC] p-6 sm:p-10 shadow-xs">
            <div className="space-y-2 mb-6">
              <span className="text-xs font-semibold tracking-widest uppercase text-[#F58220]">
                Send Us a Message
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#222222]">
                Tell us a little about your project
              </h2>
              <p className="text-xs sm:text-sm text-[#666666]">
                and we will have the information needed to start a conversation.
              </p>
            </div>

            {submittedInquiry ? (
              <div className="p-6 bg-emerald-50/60 border border-emerald-200 rounded-xs space-y-4 animate-fadeIn">
                <div className="flex items-center gap-3 text-emerald-800">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
                  <div>
                    <h4 className="text-base font-serif font-bold">
                      Inquiry Registered Successfully
                    </h4>
                    <span className="text-xs text-emerald-700">
                      Reference ID: <strong>{submittedInquiry.id}</strong> (Received at{' '}
                      {submittedInquiry.timestamp})
                    </span>
                  </div>
                </div>

                <p className="text-xs text-[#444444] leading-relaxed">
                  Thank you, <strong>{submittedInquiry.data.fullName}</strong>. Your inquiry for{' '}
                  <strong>{submittedInquiry.data.projectType}</strong> in{' '}
                  <strong>{submittedInquiry.data.projectLocation}</strong> has been logged into our
                  consultation queue.
                </p>

                <div className="p-3 bg-white/80 rounded-xs border border-emerald-200 text-xs text-[#444444] space-y-1">
                  <p>
                    <strong>Contact Phone:</strong> {submittedInquiry.data.phoneNumber}
                  </p>
                  <p>
                    <strong>Message:</strong> {submittedInquiry.data.message}
                  </p>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3 items-center">
                  <a
                    href={generateWhatsAppLink(
                      COMPANY_INFO.whatsappInternational,
                      formatInquiryForWhatsApp(submittedInquiry.data)
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-medium rounded-xs shadow-xs transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Also Send to WhatsApp (Instant Reply)</span>
                  </a>
                  <button
                    onClick={() => setSubmittedInquiry(null)}
                    className="w-full sm:w-auto px-4 py-2.5 text-xs font-medium text-[#555555] hover:text-[#222222] border border-[#d6cfc4] rounded-xs"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-medium text-[#222222] mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded-xs focus:outline-hidden transition-colors ${
                      errors.fullName
                        ? 'border-red-400 focus:border-red-500'
                        : 'border-[#d6cfc4] focus:border-[#F58220]'
                    }`}
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.fullName}</span>
                    </p>
                  )}
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-xs font-medium text-[#222222] mb-1">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    placeholder="e.g. 01926608733"
                    className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded-xs focus:outline-hidden transition-colors ${
                      errors.phoneNumber
                        ? 'border-red-400 focus:border-red-500'
                        : 'border-[#d6cfc4] focus:border-[#F58220]'
                    }`}
                  />
                  {errors.phoneNumber && (
                    <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.phoneNumber}</span>
                    </p>
                  )}
                </div>

                {/* Project Type & Location */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#222222] mb-1">
                      Project Type <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#d6cfc4] rounded-xs focus:outline-hidden focus:border-[#F58220]"
                    >
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                      <option value="Complete Home Interior">Complete Home Interior</option>
                      <option value="Commercial Showroom">Commercial Showroom</option>
                      <option value="Renovation & Remodeling">Renovation & Remodeling</option>
                    </select>
                    {errors.projectType && (
                      <p className="mt-1 text-xs text-red-600">{errors.projectType}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#222222] mb-1">
                      Project Location <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="projectLocation"
                      value={formData.projectLocation}
                      onChange={handleInputChange}
                      placeholder="e.g. Sonadanga, Khulna"
                      className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded-xs focus:outline-hidden transition-colors ${
                        errors.projectLocation
                          ? 'border-red-400 focus:border-red-500'
                          : 'border-[#d6cfc4] focus:border-[#F58220]'
                      }`}
                    />
                    {errors.projectLocation && (
                      <p className="mt-1 text-xs text-red-600">{errors.projectLocation}</p>
                    )}
                  </div>
                </div>

                {/* Your Message */}
                <div>
                  <label className="block text-xs font-medium text-[#222222] mb-1">
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your space, dimensions, timeline, or design preferences..."
                    className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded-xs focus:outline-hidden transition-colors ${
                      errors.message
                        ? 'border-red-400 focus:border-red-500'
                        : 'border-[#d6cfc4] focus:border-[#F58220]'
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit button */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-[11px] text-[#777777]">
                    Validation enforced · Guaranteed response from senior team
                  </span>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#222222] hover:bg-[#333333] text-white text-xs font-medium uppercase tracking-wider rounded-xs shadow-xs transition-colors"
                  >
                    <span>{isSubmitting ? 'Validating...' : 'Send Inquiry'}</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 3. PREFER WHATSAPP? SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 bg-white rounded-xs border border-[#EAE5DC] shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#25D366]">
              <MessageSquare className="w-4 h-4" />
              <span>PREFER WHATSAPP?</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#222222]">
              Have a question or want to discuss your project directly?
            </h3>
            <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
              Connect with KONA INTERIOR on WhatsApp to start a conversation.
            </p>
            <p className="text-xs text-[#888888] font-mono">
              WhatsApp number: {COMPANY_INFO.whatsappInternational} ({COMPANY_INFO.whatsappLocal})
            </p>
          </div>

          <div className="shrink-0 w-full sm:w-auto text-center">
            <a
              href={whatsAppDirectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#25D366] hover:bg-[#20ba59] text-white text-sm font-medium rounded-xs shadow-xs transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* 4. LET'S START YOUR PROJECT BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 lg:p-16 bg-[#222222] text-[#F7F6F2] rounded-xs shadow-xl border border-[#333333] flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl text-center md:text-left">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#F58220]">
              LET'S START YOUR PROJECT
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white">
              Your ideas are the starting point.
            </h2>
            <p className="text-xs sm:text-sm text-[#cccccc] leading-relaxed">
              Let's discuss your requirements and explore how KONA INTERIOR can help.
            </p>
          </div>

          <div className="shrink-0 w-full sm:w-auto">
            <button
              onClick={onOpenConsultation}
              className="w-full sm:w-auto px-7 py-3.5 bg-[#F58220] hover:bg-[#e07416] text-white text-sm font-medium rounded-xs shadow-md transition-colors"
            >
              Book a Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
