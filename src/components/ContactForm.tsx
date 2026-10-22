import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  Send, 
  CheckCircle2, 
  MessageSquare, 
  AlertCircle, 
  Loader2,
  Phone,
  Mail,
  MapPin,
  Clock
} from 'lucide-react';
import { siteConfig, getWhatsAppLink } from '../config/siteConfig';
import { submitProjectInquiry, ProjectInquiry } from '../services/inquiryService';

export const ContactForm: React.FC = () => {
  const [searchParams] = useSearchParams();

  const [formData, setFormData] = useState<ProjectInquiry>({
    name: '',
    businessName: '',
    email: '',
    phone: '',
    serviceNeeded: 'Website',
    currentWebsite: '',
    projectDescription: '',
    budgetRange: '₹15,000 – ₹50,000',
    expectedTimeline: 'Within 2-4 weeks',
    preferredContact: 'WhatsApp'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  useEffect(() => {
    const needParam = searchParams.get('need');
    if (needParam) {
      setFormData((prev) => ({ ...prev, serviceNeeded: needParam }));
    }
  }, [searchParams]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    // Basic Validation
    if (!formData.name.trim()) {
      setErrorMsg("Please enter your name.");
      return;
    }
    if (!formData.email.trim() && !formData.phone.trim()) {
      setErrorMsg("Please provide at least a Phone/WhatsApp number or Email address.");
      return;
    }
    if (!formData.projectDescription.trim()) {
      setErrorMsg("Please describe your project or problem briefly.");
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await submitProjectInquiry(formData);
      if (response.success) {
        setSubmittedRef(response.refId || 'INQ-SUCCESS');
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        setErrorMsg(err.message);
      } else {
        setErrorMsg("Failed to submit inquiry. Please message us on WhatsApp directly.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Company & Founder Contact Details */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs font-semibold tracking-wider text-indigo-400 uppercase bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
                Direct Consultation
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mt-3">
                Let&rsquo;s Discuss Your Project
              </h2>
              <p className="text-slate-300 text-base mt-3 leading-relaxed">
                Tell us about your business, the problem you want solved, or the software you want built. You will speak directly with founder Daksh Prajapat.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4">
              
              {/* WhatsApp Callout */}
              <a
                href={getWhatsAppLink(`Hello ${siteConfig.companyName}, I would like to schedule a technology consultation.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/30 hover:border-emerald-500/60 transition-colors flex items-center justify-between group"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                      Fastest Response
                    </div>
                    <div className="text-sm font-bold text-white">
                      Chat on WhatsApp
                    </div>
                  </div>
                </div>
                <span className="text-xs font-semibold text-emerald-400 group-hover:translate-x-1 transition-transform">
                  Open Chat &rarr;
                </span>
              </a>

              {/* Email */}
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-slate-950 text-indigo-400 flex items-center justify-center border border-slate-800">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Direct Email</div>
                  <div className="text-sm font-semibold text-white font-mono">
                    {siteConfig.contact.email}
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-slate-950 text-indigo-400 flex items-center justify-center border border-slate-800">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Phone Support</div>
                  <div className="text-sm font-semibold text-white font-mono">
                    {siteConfig.contact.phone}
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-slate-950 text-indigo-400 flex items-center justify-center border border-slate-800">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Base Location</div>
                  <div className="text-sm font-semibold text-white">
                    {siteConfig.contact.location}
                  </div>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-slate-950 text-indigo-400 flex items-center justify-center border border-slate-800">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Consultation Hours</div>
                  <div className="text-sm font-semibold text-white">
                    {siteConfig.contact.hours}
                  </div>
                </div>
              </div>

            </div>

            {/* Leadership Mention */}
            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Executive Leadership
              </h4>
              <div className="space-y-1 text-sm text-slate-300">
                <div><strong className="text-white">Daksh Prajapat</strong> — Founder &amp; CEO</div>
              </div>
            </div>

          </div>

          {/* Right Column: Serious Project Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl">
              
              {submittedRef ? (
                /* Professional Success State */
                <div className="text-center py-10 space-y-5">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <h3 className="text-2xl font-bold text-white">
                    Consultation Request Received
                  </h3>

                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-white">{formData.name}</strong>. Daksh Prajapat will review your requirements for <strong className="text-indigo-400">{formData.serviceNeeded}</strong> and contact you via your preferred method ({formData.preferredContact}).
                  </p>

                  <div className="inline-block px-4 py-2 rounded-lg bg-slate-950 border border-slate-800 font-mono text-xs text-slate-400">
                    Inquiry Reference: <span className="text-white font-bold">{submittedRef}</span>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={getWhatsAppLink(`Hello, I just submitted an inquiry on your website with Reference ${submittedRef}. My business is ${formData.businessName || formData.name}.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 hover:bg-emerald-500/20"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Follow-up on WhatsApp Instantly</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => setSubmittedRef(null)}
                      className="text-xs text-slate-400 hover:text-white underline py-2"
                    >
                      Submit Another Requirement
                    </button>
                  </div>
                </div>
              ) : (
                /* Inquiry Form */
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  <div className="border-b border-slate-800 pb-4">
                    <h3 className="text-xl font-bold text-white">
                      Project Inquiry &amp; Scope Form
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Fill out what you know. We will determine the most appropriate technical solution.
                    </p>
                  </div>

                  {errorMsg && (
                    <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-center space-x-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  {/* Row 1: Name & Business Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Your Full Name <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Rajesh Kumar"
                        required
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Business / Company Name
                      </label>
                      <input
                        type="text"
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleChange}
                        placeholder="e.g. Apex Diagnostics, Local Cafe"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                      />
                    </div>
                  </div>

                  {/* Row 2: Email & Phone/WhatsApp */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Email Address <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. rajesh@business.com"
                        required
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Phone / WhatsApp Number <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. +91 98765 43210"
                        required
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                      />
                    </div>
                  </div>

                  {/* Service Needed & Current Website */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        What do you need? <span className="text-rose-400">*</span>
                      </label>
                      <select
                        name="serviceNeeded"
                        value={formData.serviceNeeded}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-indigo-500"
                      >
                        <option value="Website">Website</option>
                        <option value="Web Application">Web Application</option>
                        <option value="Business Software">Business Software</option>
                        <option value="AI Integration">AI Integration</option>
                        <option value="Automation">Automation</option>
                        <option value="Website Management">Website Management</option>
                        <option value="Software Maintenance">Software Maintenance</option>
                        <option value="Hosting/Deployment">Hosting/Deployment</option>
                        <option value="API Integration">API Integration</option>
                        <option value="Technical Support">Technical Support</option>
                        <option value="Not Sure">Not Sure</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Current Website (Optional)
                      </label>
                      <input
                        type="url"
                        name="currentWebsite"
                        value={formData.currentWebsite}
                        onChange={handleChange}
                        placeholder="https://yourcurrentwebsite.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                      />
                    </div>
                  </div>

                  {/* Describe Your Problem / Project */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Describe your problem or project idea <span className="text-rose-400">*</span>
                    </label>
                    <textarea
                      name="projectDescription"
                      rows={4}
                      value={formData.projectDescription}
                      onChange={handleChange}
                      placeholder="Explain what your business does and what you are trying to solve or build..."
                      required
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                    />
                  </div>

                  {/* Budget & Timeline & Preferred Contact */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Budget Range
                      </label>
                      <select
                        name="budgetRange"
                        value={formData.budgetRange}
                        onChange={handleChange}
                        className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-indigo-500"
                      >
                        <option value="Under ₹15,000">Under ₹15,000</option>
                        <option value="₹15,000 – ₹50,000">₹15,000 – ₹50,000</option>
                        <option value="₹50,000 – ₹1,50,000">₹50,000 – ₹1,50,000</option>
                        <option value="₹1,50,000+">₹1,50,000+</option>
                        <option value="Need Estimate First">Need Estimate First</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Expected Timeline
                      </label>
                      <select
                        name="expectedTimeline"
                        value={formData.expectedTimeline}
                        onChange={handleChange}
                        className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-indigo-500"
                      >
                        <option value="Urgent (1-2 weeks)">Urgent (1-2 weeks)</option>
                        <option value="Within 2-4 weeks">Within 2-4 weeks</option>
                        <option value="1-2 months">1-2 months</option>
                        <option value="Flexible / Exploring">Flexible / Exploring</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Preferred Contact
                      </label>
                      <select
                        name="preferredContact"
                        value={formData.preferredContact}
                        onChange={handleChange}
                        className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-indigo-500"
                      >
                        <option value="WhatsApp">WhatsApp</option>
                        <option value="Phone Call">Phone Call</option>
                        <option value="Email">Email</option>
                      </select>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center space-x-2 py-3.5 px-6 rounded-xl font-bold text-white bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 transition-all shadow-lg shadow-indigo-600/25"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          <span>Transmitting Inquiry...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Request a Consultation</span>
                        </>
                      )}
                    </button>
                    <p className="text-[11px] text-slate-400 text-center mt-2.5">
                      No spam. We respect your privacy and will only contact you regarding this project inquiry.
                    </p>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
