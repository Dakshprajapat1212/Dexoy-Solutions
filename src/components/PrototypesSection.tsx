import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getWhatsAppLink } from '../config/siteConfig';

export const PrototypesSection: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState<number>(0);

  const demos = [
    {
      num: 'PROTOTYPE 01',
      category: 'WEB APPLICATION',
      title: 'Client Booking & Appointment Portal',
      desc: 'Mobile-optimized scheduling interface built without heavy WordPress plugin bloat. Includes real-time calendar slot reservation, automated WhatsApp SMS reminders, and instant card checkouts.',
      features: [
        'Under 1.0s mobile page load',
        'Zero plugin subscription costs',
        'Direct Google Calendar & Outlook synchronization',
        'Automated booking confirmation on WhatsApp',
      ],
      metric: '< 1s Load Speed',
      target: 'Consultants, Clinics, Service Agencies',
    },
    {
      num: 'PROTOTYPE 02',
      category: 'WORKFLOW AUTOMATION',
      title: 'WhatsApp Order & Dispatch System',
      desc: 'Inbound customer WhatsApp orders and payment screenshots are automatically parsed, logged into Google Sheets or PostgreSQL, and dispatched directly to fulfillment teams.',
      features: [
        'Eliminates 100% of manual spreadsheet typing',
        'Auto-generates branded PDF invoices with GST',
        'Instant delivery notification dispatch to customer',
        'Role-based staff dispatch dashboard',
      ],
      metric: 'Zero Manual Entry',
      target: 'Retailers, Distributors, E-Commerce Shops',
    },
    {
      num: 'PROTOTYPE 03',
      category: 'PRACTICAL AI',
      title: 'Private Business Knowledge Assistant',
      desc: 'An AI assistant trained securely and exclusively on your company’s internal product catalog, PDF manuals, and pricing sheets. Gives fast, accurate answers without hallucinations.',
      features: [
        'Secure: trained only on your private company files',
        'Handles 80% of repetitive customer inquiries instantly',
        'Transfers complex requests smoothly to human staff',
        'Runs directly on your website or WhatsApp Business',
      ],
      metric: 'Accurate Answers 24/7',
      target: 'B2B Suppliers, Law Firms, Support Desks',
    }
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-20 sm:py-24 scroll-mt-20" id="prototypes">

      {/* Header */}
      <div className="max-w-2xl mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary-fixed/40 border border-primary-fixed text-on-primary-fixed rounded-full font-mono text-[11px] font-bold mb-3 uppercase tracking-widest">
          <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
          FUNCTIONAL WORK &bull; WORKING PROTOTYPES
        </div>
        <h2 className="font-headline-xl text-3xl sm:text-4xl text-on-surface font-bold leading-tight">
          We build working software before asking for your business.
        </h2>
        <p className="font-body-md text-sm sm:text-base text-on-surface-variant mt-3 leading-relaxed">
          Explore genuine interactive prototypes engineered to solve common small-business operations. Click each build to inspect technical specs:
        </p>
      </div>

      {/* Interactive Tabs Header */}
      <div className="flex bg-surface-container-low p-1.5 rounded-2xl gap-2 mb-8 max-w-3xl overflow-x-auto scrollbar-none">
        {demos.map((d, idx) => (
          <button
            key={d.num}
            onClick={() => setActiveDemo(idx)}
            className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
              activeDemo === idx
                ? 'bg-surface-container-lowest text-on-surface shadow-xs font-bold'
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            {d.title}
          </button>
        ))}
      </div>

      {/* Active Prototype Showcase Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeDemo}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.25 }}
          className="bg-surface-container-lowest rounded-2xl border border-surface-container-high p-6 sm:p-10 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
        >
          {/* Left: Spec Details */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-bold text-primary-container bg-primary-fixed/30 px-2.5 py-1 rounded-md border border-primary-fixed">
                {demos[activeDemo].num}
              </span>
              <span className="font-mono text-xs text-on-surface-variant font-semibold">
                {demos[activeDemo].category}
              </span>
            </div>

            <h3 className="font-headline-lg text-2xl font-bold text-on-surface">
              {demos[activeDemo].title}
            </h3>

            <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
              {demos[activeDemo].desc}
            </p>

            <div className="space-y-2 pt-2 border-t border-surface-container">
              <p className="text-xs font-bold text-on-surface uppercase tracking-wider font-mono">
                Engineered Capabilities:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-on-surface">
                {demos[activeDemo].features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-sm text-emerald-700 mt-0.5 shrink-0">check_circle</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Key Metric Box & Action */}
          <div className="lg:col-span-5 flex flex-col gap-4 p-6 bg-surface-container-low rounded-2xl border border-surface-container">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-on-surface-variant font-semibold">
                Target Business Fit
              </span>
              <p className="text-xs font-bold text-on-surface mt-1">
                {demos[activeDemo].target}
              </p>
            </div>

            <div className="p-4 bg-surface-container-lowest rounded-xl border border-surface-container flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase text-on-surface-variant font-bold">Key Technical Advantage</span>
                <p className="text-sm font-bold text-primary-container mt-0.5">
                  {demos[activeDemo].metric}
                </p>
              </div>
              <span className="material-symbols-outlined text-2xl text-primary-container">verified</span>
            </div>

            <a
              href={getWhatsAppLink(`Hello Daksh, I am interested in building a prototype similar to "${demos[activeDemo].title}".`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full bg-primary-container hover:bg-primary text-on-primary font-semibold text-xs py-3 rounded-xl transition-all shadow-xs"
            >
              <span>Discuss Similar Build with Daksh</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </a>
          </div>
        </motion.div>
      </AnimatePresence>

    </section>
  );
};
