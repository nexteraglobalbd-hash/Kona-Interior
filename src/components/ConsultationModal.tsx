/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { COMPANY_INFO, SERVICES } from '../data/content.ts';
import { generateWhatsAppLink } from '../utils/contactValidation.ts';
import { X, CheckCircle2, MessageSquare, Send, Calendar, MapPin, User, Phone } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  initialService = 'Residential Interior',
}) => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [projectType, setProjectType] = useState(initialService);
  const [projectLocation, setProjectLocation] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim()) {
      setError('Please provide your full name.');
      return;
    }
    if (!phoneNumber.trim()) {
      setError('Please provide your contact phone number.');
      return;
    }
    setError(null);
    setSubmitted(true);
  };

  const formattedWhatsAppMsg = `Hello KONA INTERIOR, I would like to book an interior design consultation:
- Name: ${fullName || 'Client'}
- Phone: ${phoneNumber || 'Not provided'}
- Service: ${projectType}
- Location: ${projectLocation || 'Khulna'}
- Preferred Timing: ${preferredDate || 'Earliest available'}
- Notes: ${message || 'Looking forward to discussing the space.'}`;

  const whatsAppLink = generateWhatsAppLink(
    COMPANY_INFO.whatsappInternational,
    formattedWhatsAppMsg
  );

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="consultation-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn"
    >
      <div className="relative w-full max-w-xl bg-[#F7F6F2] rounded-xs shadow-2xl border border-[#EAE5DC] overflow-hidden max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 bg-[#222222] text-[#F7F6F2]">
          <div>
            <span className="text-[11px] font-medium tracking-widest uppercase text-[#F58220] block">
              KONA INTERIOR · Consultation
            </span>
            <h3 id="consultation-modal-title" className="text-xl font-serif font-semibold">
              Book an Interior Consultation
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-[#aaaaaa] hover:text-white rounded-xs focus-visible:outline-2 focus-visible:outline-[#F58220]"
            aria-label="Close consultation modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-serif font-bold text-[#222222]">
                Consultation Request Received
              </h4>
              <p className="text-sm text-[#555555] max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-[#222222]">{fullName}</strong>. Our team in Sonadanga, Khulna
                will review your interior requirements and reach out to you directly.
              </p>

              <div className="p-4 bg-[#EAE5DC]/60 rounded-xs text-left text-xs space-y-1.5 text-[#333333] border border-[#EAE5DC]">
                <p>
                  <strong>Project:</strong> {projectType}
                </p>
                <p>
                  <strong>Contact:</strong> {phoneNumber}
                </p>
                {projectLocation && (
                  <p>
                    <strong>Location:</strong> {projectLocation}
                  </p>
                )}
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={whatsAppLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#25D366] text-white text-sm font-medium rounded-xs hover:bg-[#20ba59] transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send via WhatsApp</span>
                </a>
                <button
                  onClick={onClose}
                  className="px-5 py-2.5 bg-[#222222] text-white text-sm font-medium rounded-xs hover:bg-[#333333] transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-xs text-[#666666] leading-relaxed">
                Tell us about your space. With 25 years of combined experience, KONA INTERIOR will help
                you plan, design, and execute your interior project.
              </p>

              {error && (
                <div className="p-3 text-xs bg-red-50 text-red-700 border border-red-200 rounded-xs">
                  {error}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#333333] mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-[#888888] absolute left-3 top-2.5" />
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Asif Chowdhury"
                      className="w-full pl-9 pr-3 py-2 text-sm bg-white border border-[#d6cfc4] rounded-xs focus:outline-hidden focus:border-[#F58220] focus:ring-1 focus:ring-[#F58220]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#333333] mb-1">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-[#888888] absolute left-3 top-2.5" />
                    <input
                      type="tel"
                      required
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      placeholder="e.g. 01926608733"
                      className="w-full pl-9 pr-3 py-2 text-sm bg-white border border-[#d6cfc4] rounded-xs focus:outline-hidden focus:border-[#F58220] focus:ring-1 focus:ring-[#F58220]"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#333333] mb-1">
                    Service / Project Type
                  </label>
                  <select
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                    className="w-full px-3 py-2 text-sm bg-white border border-[#d6cfc4] rounded-xs focus:outline-hidden focus:border-[#F58220] focus:ring-1 focus:ring-[#F58220]"
                  >
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                    <option value="Complete Home Interior">Complete Home Interior</option>
                    <option value="Commercial Showroom">Commercial Showroom</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#333333] mb-1">
                    Project Location
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-[#888888] absolute left-3 top-2.5" />
                    <input
                      type="text"
                      value={projectLocation}
                      onChange={(e) => setProjectLocation(e.target.value)}
                      placeholder="e.g. Sonadanga, Khulna"
                      className="w-full pl-9 pr-3 py-2 text-sm bg-white border border-[#d6cfc4] rounded-xs focus:outline-hidden focus:border-[#F58220] focus:ring-1 focus:ring-[#F58220]"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#333333] mb-1">
                  Preferred Consultation Date or Timing
                </label>
                <div className="relative">
                  <Calendar className="w-4 h-4 text-[#888888] absolute left-3 top-2.5" />
                  <input
                    type="text"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    placeholder="e.g. This upcoming Saturday afternoon"
                    className="w-full pl-9 pr-3 py-2 text-sm bg-white border border-[#d6cfc4] rounded-xs focus:outline-hidden focus:border-[#F58220] focus:ring-1 focus:ring-[#F58220]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#333333] mb-1">
                  Project Notes or Dimensions
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Share details such as square footage, apartment status, or specific design preferences..."
                  className="w-full px-3 py-2 text-sm bg-white border border-[#d6cfc4] rounded-xs focus:outline-hidden focus:border-[#F58220] focus:ring-1 focus:ring-[#F58220]"
                />
              </div>

              <div className="pt-2 flex flex-col-reverse sm:flex-row items-center justify-between gap-3">
                <span className="text-[11px] text-[#777777]">
                  No obligation · Direct discussion with senior design team
                </span>
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={onClose}
                    className="flex-1 sm:flex-none px-4 py-2 border border-[#d6cfc4] text-xs font-medium text-[#555555] rounded-xs hover:bg-[#EAE5DC]/50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-5 py-2 bg-[#F58220] hover:bg-[#e07416] text-white text-xs font-medium rounded-xs shadow-xs transition-colors"
                  >
                    <span>Submit Request</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
