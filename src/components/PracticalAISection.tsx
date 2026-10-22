import React from 'react';
import { motion } from 'framer-motion';

export const PracticalAISection: React.FC = () => {
  const useCases = [
    {
      icon: 'forum',
      tag: 'CUSTOMER OPERATIONS',
      title: 'Smart WhatsApp Concierge',
      desc: 'An intelligent WhatsApp bot trained on your product catalog, service pricing, and store hours. Answers FAQs instantly and hands qualified leads directly to your phone.',
      benefit: 'Handles inquiries 24/7 without manual delays.',
      accent: 'border-t-4 border-t-emerald-600',
      iconColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      tagColor: 'text-emerald-800 bg-emerald-50 border-emerald-200',
    },
    {
      icon: 'receipt_long',
      tag: 'FINANCE & INVENTORY',
      title: 'Automated Invoice Extractor',
      desc: 'Vendor bills and receipts sent via email or WhatsApp are instantly read via OCR & AI, itemized, and auto-populated into your Google Sheets or accounting database.',
      benefit: 'Eliminates 3+ hours of manual weekly bookkeeping.',
      accent: 'border-t-4 border-t-amber-500',
      iconColor: 'bg-amber-50 text-amber-700 border-amber-200',
      tagColor: 'text-amber-800 bg-amber-50 border-amber-200',
    },
    {
      icon: 'rate_review',
      tag: 'GROWTH & REPUTATION',
      title: 'Review & Feedback Assistant',
      desc: 'Automatically drafts personalized, professional responses to Google Reviews and customer inquiries for founder approval before posting.',
      benefit: 'Maintains consistent 5-star reputation effortlessly.',
      accent: 'border-t-4 border-t-indigo-600',
      iconColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
      tagColor: 'text-indigo-800 bg-indigo-50 border-indigo-200',
    }
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-20 sm:py-24 scroll-mt-20" id="ai">

      {/* Header */}
      <div className="max-w-2xl mb-12">
        <span className="inline-block font-mono text-[11px] uppercase tracking-widest text-emerald-800 font-bold mb-3 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
          Zero-Hype Implementations
        </span>
        <h2 className="font-headline-xl text-3xl sm:text-4xl text-slate-900 font-bold mt-1 leading-tight">
          AI that saves hours of real work — not marketing gimmicks.
        </h2>
        <p className="font-body-md text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
          We do not build speculative novelty apps. We deploy grounded language models and automated webhooks that solve verifiable small-business operational pain.
        </p>
      </div>

      {/* 3 AI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {useCases.map((uc) => (
          <motion.div
            key={uc.title}
            whileHover={{ y: -4, boxShadow: '0 12px 30px rgba(15,23,42,0.08)' }}
            transition={{ type: 'spring', stiffness: 280, damping: 24 }}
            className={`bg-white p-6 sm:p-7 rounded-2xl border border-slate-200/90 shadow-xs flex flex-col justify-between group transition-all ${uc.accent}`}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center border shadow-xs ${uc.iconColor}`}>
                  <span className="material-symbols-outlined text-xl">{uc.icon}</span>
                </div>
                <span className={`font-mono text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${uc.tagColor}`}>
                  {uc.tag}
                </span>
              </div>

              <h3 className="font-headline-sm text-lg font-bold text-slate-900 mb-2">
                {uc.title}
              </h3>
              <p className="font-body-sm text-sm text-slate-600 leading-relaxed">
                {uc.desc}
              </p>
            </div>
            
            <div className="mt-6 p-3.5 bg-slate-50 rounded-xl border border-slate-200/80 font-mono text-xs text-slate-800">
              <span className="text-emerald-700 font-bold">Outcome: </span>
              {uc.benefit}
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
};
