import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Why custom code instead of WordPress or drag-and-drop website builders?",
      a: "WordPress sites typically require 30–50 plugins that conflict with each other, slow mobile load times to 4+ seconds, and constantly break after security updates. We write clean, high-performance code with sub-1s load times, zero monthly plugin subscription fees, and bank-grade security."
    },
    {
      q: "Who owns the code, assets, and hosting accounts?",
      a: "You own 100% of everything from day one. We transfer the complete Git source code repository, domain DNS controls, and server credentials directly to your business. You will never be held hostage by vendor lock-in."
    },
    {
      q: "How do we test the software before it goes live to customers?",
      a: "Every project is deployed to an isolated staging environment. You and your team can test real booking forms, checkout flows, and admin dashboards in your actual mobile and desktop browsers before any public DNS cutover occurs."
    },
    {
      q: "Can you automate workflows with our existing WhatsApp and spreadsheets?",
      a: "Yes. Using official APIs and secure webhooks, we can capture customer inquiries, payment confirmations, and orders from WhatsApp and automatically format them into your Google Sheets, accounting software, or team dashboards without manual data entry."
    },
    {
      q: "How does pricing and payment milestones work?",
      a: "We operate on transparent, fixed milestone scopes. After an initial diagnosis call, you receive a 1-page spec sheet with a fixed quote. You only pay according to agreed development milestones — never surprise hourly padding."
    },
    {
      q: "What happens if something breaks or needs updating after launch?",
      a: "We offer month-to-month website care with zero long-term lock-in. You have direct WhatsApp access to founder Daksh with a 4-hour response window, automated daily off-site backups, and proactive security monitoring."
    }
  ];

  return (
    <section className="w-full bg-slate-50/70 py-20 sm:py-24 border-t border-slate-200 scroll-mt-20" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block font-mono text-[11px] uppercase tracking-widest text-emerald-800 font-bold mb-3 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
            Engineering Transparency
          </span>
          <h2 className="font-headline-xl text-3xl sm:text-4xl text-slate-900 font-bold tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="font-body-md text-sm sm:text-base text-slate-600 mt-2 max-w-xl mx-auto leading-relaxed">
            Direct answers on technical standards, code ownership, workflow automation, and how we build.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className="rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-xs transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full py-4 px-6 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                >
                  <span className="font-headline-sm text-sm sm:text-base font-bold text-slate-900">
                    {item.q}
                  </span>
                  <span className={`material-symbols-outlined text-emerald-700 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                    expand_more
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
