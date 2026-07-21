'use client';

import React, { useState } from 'react';
import { Mail, MapPin } from 'lucide-react';
import emailjs from '@emailjs/browser';
import ScrollReveal from './scroll-reveal';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Field validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus('error');
      setErrorMessage('Email configuration is missing. Please try again later.');
      return;
    }

    setStatus('sending');
    setErrorMessage('');

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name.trim(),
          from_email: formData.email.trim(),
          subject: formData.subject.trim(),
          message: formData.message.trim(),
        },
        publicKey
      );

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('error');
      setErrorMessage('Failed to send message. Please try again.');
    }
  };

  return (
    <section 
      id="contact"
      className="relative pt-[140px] pb-[120px] px-5 md:px-12 lg:px-16 border-t border-[rgba(249,115,22,0.15)] flex flex-col items-center select-text"
      style={{
        backgroundImage: 'linear-gradient(to bottom, #FCFAF7 0%, #E8E2D9 70%, #1D1214 100%)',
      }}
    >
      {/* Editorial Statement (Answering recruiter: How can I hire this engineer?) */}
      <ScrollReveal delay={0} className="w-full text-center">
        <p className="font-editorial italic text-lg md:text-[1.25rem] text-[#F97316] tracking-wide mb-6 select-none">
          "Direct channels for opportunities, collaborations, and professional inquiries."
        </p>
      </ScrollReveal>

      {/* Heading (V4 Scale: 60px Desktop, 44px Tablet, 34px Mobile, Spacing: 40px) */}
      <ScrollReveal delay={100} className="w-full flex flex-col items-center text-center max-w-[600px] mb-[40px] select-none">
        <h2 className="text-[34px] sm:text-[44px] md:text-[60px] font-light text-[#111827] mb-4 leading-none">
          <span className="font-editorial italic">Let's</span>{' '}
          <span className="font-sans font-medium tracking-tight">Work Together</span>
        </h2>
        <p className="font-sans text-base md:text-lg text-[#6B7280] leading-relaxed">
          Have an opportunity, an idea, or simply want to connect? I'd love to hear from you.
        </p>
      </ScrollReveal>

      {/* Two Column Layout (60/40) (V4 Spacing: gap-16 between columns, Max Width: 1200px) */}
      <ScrollReveal delay={200} className="w-full flex justify-center">
        <div className="w-full max-w-[1200px] grid grid-cols-1 lg:grid-cols-[3.1fr_1.9fr] gap-16">
          
          {/* Left Column - Contact Details */}
          <div className="flex flex-col justify-between gap-12 text-left">
            <div className="space-y-8">
              <h3 className="font-sans text-3xl md:text-4xl font-light leading-relaxed text-[#111827] max-w-2xl">
                I'm always interested in discussing{' '}
                <span className="font-editorial italic font-normal text-[#F97316]">software engineering</span>,{' '}
                <span className="font-editorial italic font-normal text-[#F97316]">full-stack development</span>,{' '}
                <span className="font-editorial italic font-normal text-[#F97316]">AI-powered products</span>,{' '}
                <span className="font-editorial italic font-normal text-[#F97316]">internship opportunities</span>,{' '}
                and exciting collaborations.
                <br />
                <span className="block mt-6 text-[16px] md:text-[17px] lg:text-[20px] text-[#6B7280] font-normal leading-relaxed">
                  Whether you're a recruiter, founder, or fellow developer, let's build something meaningful.
                </span>
              </h3>

              {/* Info Cards - Rebalanced to Symmetrical 2 Columns after removing Availability */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                {/* Card 1 - Email */}
                <a 
                  href="mailto:harshithyadav662@gmail.com"
                  className="group p-8 bg-white border border-[rgba(249,115,22,0.15)] hover:border-[rgba(249,115,22,0.30)] rounded-2xl hover:bg-[rgba(249,115,22,0.04)] hover:-translate-y-1 shadow-sm hover:shadow-md transition-all duration-[250ms] ease-out flex flex-col justify-between min-h-[220px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316]"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-orange-50 text-[#F97316] border border-orange-100 group-hover:scale-[1.05] transition-transform duration-[250ms] ease-out">
                      <Mail className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold tracking-wider uppercase text-[#6B7280]">Email</span>
                  </div>
                  <div className="mt-6 text-left">
                    <span className="block text-base font-semibold text-[#111827] break-all">
                      harshithyadav662@gmail.com
                    </span>
                    <span className="block text-sm text-[#6B7280] mt-1.5 font-normal">
                      Drop me a message anytime.
                    </span>
                  </div>
                </a>

                {/* Card 2 - Location */}
                <div 
                  className="group p-8 bg-white border border-[rgba(249,115,22,0.15)] hover:border-[rgba(249,115,22,0.30)] rounded-2xl hover:-translate-y-1 shadow-sm hover:shadow-md transition-all duration-[250ms] ease-out flex flex-col justify-between min-h-[220px]"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-orange-50 text-[#F97316] border border-orange-100 group-hover:scale-[1.05] transition-transform duration-[250ms] ease-out">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold tracking-wider uppercase text-[#6B7280]">Location</span>
                  </div>
                  <div className="mt-6 text-left">
                    <span className="block text-base font-semibold text-[#111827]">
                      Bengaluru, India
                    </span>
                    <span className="block text-sm text-[#6B7280] mt-1.5 font-normal">
                      Open to relocation &amp; remote.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form Container (padding p-8 md:p-10, inputs p-4) */}
          <div className="flex flex-col justify-start">
            <div className="bg-white border border-[rgba(249,115,22,0.15)] rounded-2xl p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow duration-[250ms] ease-out">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-[14px] font-semibold tracking-wider uppercase text-[#6B7280] mb-2 select-none">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your Name"
                    className="w-full bg-gray-50 border border-gray-200 focus:border-[#F97316] focus:ring-1 focus:ring-[#F97316] transition-all duration-[250ms] ease-out text-base outline-none rounded-lg p-4 text-[#111827] placeholder:text-gray-400 focus-visible:ring-2 focus-visible:ring-[#F97316]"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-[14px] font-semibold tracking-wider uppercase text-[#6B7280] mb-2 select-none">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="name@example.com"
                    className="w-full bg-gray-50 border border-gray-200 focus:border-[#F97316] focus:ring-1 focus:ring-[#F97316] transition-all duration-[250ms] ease-out text-base outline-none rounded-lg p-4 text-[#111827] placeholder:text-gray-400 focus-visible:ring-2 focus-visible:ring-[#F97316]"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-[14px] font-semibold tracking-wider uppercase text-[#6B7280] mb-2 select-none">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Job Opportunity / Collaboration"
                    className="w-full bg-gray-50 border border-gray-200 focus:border-[#F97316] focus:ring-1 focus:ring-[#F97316] transition-all duration-[250ms] ease-out text-base outline-none rounded-lg p-4 text-[#111827] placeholder:text-gray-400 focus-visible:ring-2 focus-visible:ring-[#F97316]"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-[14px] font-semibold tracking-wider uppercase text-[#6B7280] mb-2 select-none">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Hi Harshith, I'd like to talk about..."
                    className="w-full bg-gray-50 border border-gray-200 focus:border-[#F97316] focus:ring-1 focus:ring-[#F97316] transition-all duration-[250ms] ease-out text-base outline-none rounded-lg p-4 text-[#111827] placeholder:text-gray-400 resize-none focus-visible:ring-2 focus-visible:ring-[#F97316]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full bg-[#F97316] hover:bg-[#FB923C] hover:-translate-y-[2px] active:translate-y-0 text-white font-semibold py-4 px-6 rounded-full shadow-lg shadow-orange-500/10 hover:shadow-orange-500/20 transition-all duration-[250ms] ease-out disabled:opacity-50 disabled:pointer-events-none text-base cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FB923C] select-none"
                >
                  {status === 'sending' ? 'Sending...' : status === 'success' ? 'Message Sent!' : 'Send Message'}
                </button>

                {/* Status Notifications */}
                {status === 'success' && (
                  <p className="text-center text-sm font-medium text-green-600 mt-3 select-none" role="status">
                    Your message has been sent successfully.
                  </p>
                )}
                {status === 'error' && errorMessage && (
                  <p className="text-center text-sm font-medium text-red-500 mt-3 select-none" role="alert">
                    {errorMessage}
                  </p>
                )}
              </form>

              {/* Direct Connect Links */}
              <div className="mt-10 pt-8 border-t border-gray-100 flex flex-col items-center select-none">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#6B7280] mb-4">
                  Connect Directly
                </span>
                <div className="flex items-center gap-6">
                  {/* GitHub */}
                  <a
                    href="https://github.com/Harshith9611"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Harshith Yadav's GitHub Profile"
                    className="p-4 rounded-full border border-gray-200 bg-gray-50 text-[#6B7280] hover:text-[#F97316] hover:border-orange-200/60 hover:bg-orange-50/40 hover:scale-[1.08] hover:-translate-y-[3px] hover:shadow-md hover:shadow-orange-500/[0.08] hover:drop-shadow-[0_0_6px_rgba(249,115,22,0.20)] transition-all duration-[250ms] ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316] cursor-pointer"
                  >
                    <svg 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="1.75" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className="w-7 h-7"
                    >
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/harshith-yadav-dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Harshith Yadav's LinkedIn Profile"
                    className="p-4 rounded-full border border-gray-200 bg-gray-50 text-[#6B7280] hover:text-[#F97316] hover:border-orange-200/60 hover:bg-orange-50/40 hover:scale-[1.08] hover:-translate-y-[3px] hover:shadow-md hover:shadow-orange-500/[0.08] hover:drop-shadow-[0_0_6px_rgba(249,115,22,0.20)] transition-all duration-[250ms] ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316] cursor-pointer"
                  >
                    <svg 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="1.75" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className="w-7 h-7"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect x="2" y="9" width="4" height="12" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </a>

                  {/* Email */}
                  <a
                    href="mailto:harshithyadav662@gmail.com"
                    aria-label="Email Harshith Yadav"
                    className="p-4 rounded-full border border-gray-200 bg-gray-50 text-[#6B7280] hover:text-[#F97316] hover:border-orange-200/60 hover:bg-orange-50/40 hover:scale-[1.08] hover:-translate-y-[3px] hover:shadow-md hover:shadow-orange-500/[0.08] hover:drop-shadow-[0_0_6px_rgba(249,115,22,0.20)] transition-all duration-[250ms] ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316] cursor-pointer"
                  >
                    <svg 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="1.75" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className="w-7 h-7"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </ScrollReveal>
    </section>
  );
}
