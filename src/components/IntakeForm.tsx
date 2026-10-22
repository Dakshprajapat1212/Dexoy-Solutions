import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { getWhatsAppLink } from '../config/siteConfig';

export const IntakeForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    email: '',
    phone: '',
    goals: {
      newWebsite: false,
      maintainWebsite: false,
      automateWorkflows: false,
      customSoftware: false,
    },
    problemDescription: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);
  const [submittedWhatsAppUrl, setSubmittedWhatsAppUrl] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (field: keyof typeof formData.goals) => {
    setFormData((prev) => ({
      ...prev,
      goals: {
        ...prev.goals,
        [field]: !prev.goals[field]
      }
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!formData.name.trim()) {
      setErrorMsg("Please enter your name.");
      return;
    }
    if (!formData.email.trim() && !formData.phone.trim()) {
      setErrorMsg("Please provide an email or WhatsApp number so Daksh can reach you.");
      return;
    }
    if (!formData.problemDescription.trim()) {
      setErrorMsg("Please briefly describe what you are looking to build or solve.");
      return;
    }

    setIsSubmitting(true);

    const selectedObjectives = Object.entries(formData.goals)
      .filter(([, checked]) => checked)
      .map(([key]) => {
        if (key === 'newWebsite') return 'Build New Website';
        if (key === 'maintainWebsite') return 'Maintain/Repair Website';
        if (key === 'automateWorkflows') return 'Automate Workflows';
        if (key === 'customSoftware') return 'Custom Web Application';
        return key;
      });

    const refId = `INQ-${Math.floor(100000 + Math.random() * 900000)}`;

    const formattedMessage = 
`🚀 *New Project Inquiry for Dexoy Solutions*

👤 *Name:* ${formData.name.trim()}
🏢 *Business:* ${formData.businessName.trim() || 'Not specified'}
📧 *Email:* ${formData.email.trim() || 'Not specified'}
📱 *Phone / WhatsApp:* ${formData.phone.trim() || 'Not specified'}

🛠️ *Services Needed:*
${selectedObjectives.length > 0 ? selectedObjectives.map(s => `• ${s}`).join('\n') : '• General Technology Consultation'}

📝 *Project Details:*
${formData.problemDescription.trim()}

📌 *Ref:* ${refId}`;

    const whatsAppUrl = getWhatsAppLink(formattedMessage);
    setSubmittedRef(refId);
    setSubmittedWhatsAppUrl(whatsAppUrl);

    // Open WhatsApp directly in a new tab
    try {
      window.open(whatsAppUrl, '_blank');
    } catch {
      // In case browser restricts direct popup
    }

    setIsSubmitting(false);
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-20 sm:py-24 scroll-mt-20" id="intake">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
        
        {/* Left Column: Plain-English Contact & Promises */}
        <motion.div 
          className="lg:col-span-5 flex flex-col justify-between gap-6"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' as const }}
        >
          <div>
            <span className="inline-block font-mono text-[11px] uppercase tracking-widest text-emerald-800 font-bold mb-3 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
              Immediate Intake
            </span>
            <h2 className="font-headline-xl text-3xl sm:text-4xl text-slate-900 font-bold mt-1 leading-tight">
              Start a conversation
            </h2>
            <p className="font-body-md text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
              Fill out this quick form. Your complete answers are sent directly to founder Daksh Prajapat on WhatsApp for an immediate review.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-emerald-600 text-xl mt-0.5 shrink-0">verified</span>
                <div>
                  <h4 className="font-body-sm text-sm font-bold text-slate-900">Direct reply within 6 hours</h4>
                  <p className="font-label-sm text-xs text-slate-600">No automated nurture sequences or aggressive sales calls.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-blue-600 text-xl mt-0.5 shrink-0">verified</span>
                <div>
                  <h4 className="font-body-sm text-sm font-bold text-slate-900">Fixed pricing scope</h4>
                  <p className="font-label-sm text-xs text-slate-600">Clear quote before any work starts. No unexpected invoices.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-indigo-600 text-xl mt-0.5 shrink-0">verified</span>
                <div>
                  <h4 className="font-body-sm text-sm font-bold text-slate-900">100% Code Ownership</h4>
                  <p className="font-label-sm text-xs text-slate-600">You own all assets, repositories, and domain settings.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-5 bg-emerald-50/60 rounded-2xl border border-emerald-200/80 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-emerald-700 text-2xl">chat</span>
              <div>
                <p className="text-xs font-bold text-slate-900">Prefer a quick chat right now?</p>
                <p className="text-[11px] text-slate-600 font-mono">Message Daksh directly on WhatsApp</p>
              </div>
            </div>
            <motion.a 
              href={getWhatsAppLink("Hello Daksh, I want to discuss a project directly.")}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs py-2.5 px-4 rounded-xl transition-all shadow-xs shrink-0"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              WhatsApp &rarr;
            </motion.a>
          </div>
        </motion.div>

        {/* Right Column: Intake Form Card */}
        <motion.div 
          className="lg:col-span-7 bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-sm border-t-4 border-t-emerald-700"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' as const }}
        >
          {submittedRef && submittedWhatsAppUrl ? (
            <div className="py-8 flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4 border border-emerald-200 shadow-xs">
                <span className="material-symbols-outlined text-3xl">chat</span>
              </div>
              <h3 className="font-headline-md text-2xl font-bold text-slate-900">
                Inquiry Ready for Daksh!
              </h3>
              <p className="font-body-md text-sm text-slate-600 mt-2 max-w-md leading-relaxed">
                Thank you, <strong className="text-slate-900">{formData.name}</strong>. All your project details have been formatted and dispatched to founder Daksh Prajapat.
              </p>
              
              <div className="mt-4 p-3 bg-slate-50 rounded-xl border border-slate-200 font-mono text-xs text-slate-600">
                Reference ID: <span className="font-bold text-slate-900">{submittedRef}</span> &bull; Number: <span className="text-emerald-700 font-bold">+91 8502099643</span>
              </div>

              <motion.a 
                href={submittedWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm py-3.5 px-6 rounded-xl transition-all shadow-md shadow-emerald-700/25"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="material-symbols-outlined text-lg">chat</span>
                <span>Send to Daksh on WhatsApp</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </motion.a>

              <button
                type="button"
                onClick={() => {
                  setSubmittedRef(null);
                  setSubmittedWhatsAppUrl(null);
                  setFormData({
                    name: '',
                    businessName: '',
                    email: '',
                    phone: '',
                    goals: {
                      newWebsite: false,
                      maintainWebsite: false,
                      automateWorkflows: false,
                      customSoftware: false,
                    },
                    problemDescription: '',
                  });
                }}
                className="mt-4 text-xs font-mono text-slate-500 hover:text-slate-800 underline cursor-pointer"
              >
                Submit another inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              
              {errorMsg && (
                <div className="p-3 bg-rose-50 border border-rose-200 text-rose-800 rounded-xl text-xs font-semibold">
                  {errorMsg}
                </div>
              )}

              {/* Basic Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="font-label-md text-xs sm:text-sm text-slate-900 font-semibold">
                    Your Name *
                  </label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g. Ramesh Sharma"
                    className="w-full p-3 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 text-body-sm focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-label-md text-xs sm:text-sm text-slate-900 font-semibold">
                    Business Name (Optional)
                  </label>
                  <input 
                    type="text" 
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleInputChange}
                    placeholder="e.g. Apex Logistics"
                    className="w-full p-3 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 text-body-sm focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="font-label-md text-xs sm:text-sm text-slate-900 font-semibold">
                    Email Address *
                  </label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="name@business.com"
                    className="w-full p-3 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 text-body-sm focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-label-md text-xs sm:text-sm text-slate-900 font-semibold">
                    Phone / WhatsApp (Optional)
                  </label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 98765 43210"
                    className="w-full p-3 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 text-body-sm focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-colors"
                  />
                </div>
              </div>

              {/* What are you looking to do? */}
              <div className="flex flex-col gap-2 pt-1">
                <label className="font-label-md text-xs sm:text-sm text-slate-900 font-semibold">
                  What are you looking to achieve?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <label 
                    onClick={() => handleCheckboxChange('newWebsite')}
                    className={`flex items-center gap-2.5 p-3 rounded-xl border cursor-pointer transition-colors ${
                      formData.goals.newWebsite 
                        ? 'border-emerald-600 bg-emerald-50 text-emerald-950 font-bold' 
                        : 'border-slate-200 bg-slate-50/60 hover:border-slate-300 text-slate-700'
                    }`}
                  >
                    <input 
                      type="checkbox" 
                      checked={formData.goals.newWebsite} 
                      readOnly 
                      className="accent-emerald-700 w-4 h-4 rounded"
                    />
                    <span className="text-xs sm:text-sm">Build a new high-speed website</span>
                  </label>

                  <label 
                    onClick={() => handleCheckboxChange('maintainWebsite')}
                    className={`flex items-center gap-2.5 p-3 rounded-xl border cursor-pointer transition-colors ${
                      formData.goals.maintainWebsite 
                        ? 'border-emerald-600 bg-emerald-50 text-emerald-950 font-bold' 
                        : 'border-slate-200 bg-slate-50/60 hover:border-slate-300 text-slate-700'
                    }`}
                  >
                    <input 
                      type="checkbox" 
                      checked={formData.goals.maintainWebsite} 
                      readOnly 
                      className="accent-emerald-700 w-4 h-4 rounded"
                    />
                    <span className="text-xs sm:text-sm">Maintain / repair an existing website</span>
                  </label>

                  <label 
                    onClick={() => handleCheckboxChange('automateWorkflows')}
                    className={`flex items-center gap-2.5 p-3 rounded-xl border cursor-pointer transition-colors ${
                      formData.goals.automateWorkflows 
                        ? 'border-emerald-600 bg-emerald-50 text-emerald-950 font-bold' 
                        : 'border-slate-200 bg-slate-50/60 hover:border-slate-300 text-slate-700'
                    }`}
                  >
                    <input 
                      type="checkbox" 
                      checked={formData.goals.automateWorkflows} 
                      readOnly 
                      className="accent-emerald-700 w-4 h-4 rounded"
                    />
                    <span className="text-xs sm:text-sm">Automate repetitive business workflows</span>
                  </label>

                  <label 
                    onClick={() => handleCheckboxChange('customSoftware')}
                    className={`flex items-center gap-2.5 p-3 rounded-xl border cursor-pointer transition-colors ${
                      formData.goals.customSoftware 
                        ? 'border-emerald-600 bg-emerald-50 text-emerald-950 font-bold' 
                        : 'border-slate-200 bg-slate-50/60 hover:border-slate-300 text-slate-700'
                    }`}
                  >
                    <input 
                      type="checkbox" 
                      checked={formData.goals.customSoftware} 
                      readOnly 
                      className="accent-emerald-700 w-4 h-4 rounded"
                    />
                    <span className="text-xs sm:text-sm">Build custom software / internal tools</span>
                  </label>
                </div>
              </div>

              {/* Problem Description */}
              <div className="flex flex-col gap-1.5">
                <label className="font-label-md text-xs sm:text-sm text-slate-900 font-semibold">
                  Describe what you are looking to build or solve *
                </label>
                <textarea 
                  name="problemDescription"
                  rows={4}
                  value={formData.problemDescription}
                  onChange={handleInputChange}
                  placeholder="Tell us about your business, what is currently manual or broken, or what you want built. You don't need technical jargon."
                  className="w-full p-3 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 text-body-sm focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 resize-none transition-colors"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-emerald-800 hover:bg-emerald-900 text-white font-semibold text-sm py-3.5 rounded-xl transition-all shadow-md shadow-emerald-800/25 flex items-center justify-center gap-2 disabled:opacity-60 cursor-pointer border border-emerald-700"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <span className="material-symbols-outlined text-lg">chat</span>
                  <span>Send Inquiry to Daksh via WhatsApp</span>
                  <span className="material-symbols-outlined text-base">arrow_forward</span>
                </motion.button>
                <p className="text-[11px] text-center text-slate-500 font-mono mt-2.5">
                  Direct dispatch to Daksh (+91 8502099643). No middleman. Direct reply within 6 hours.
                </p>
                <p className="text-[11px] text-center text-slate-500 font-mono mt-1">
                  Want to speak with Head of Growth instead?{' '}
                  <a
                    href="https://wa.me/919166909099?text=Hi%20Raghav,%20I'd%20like%20to%20discuss%20a%20partnership%20or%20project%20with%20Dexoy%20Solutions."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 font-semibold hover:underline inline-flex items-center gap-0.5"
                  >
                    <span>Chat with Raghav Sharma (+91 9166909099)</span>
                    <span className="material-symbols-outlined text-xs">arrow_forward</span>
                  </a>
                </p>
              </div>

            </form>
          )}
        </motion.div>

      </div>
    </section>
  );
};
