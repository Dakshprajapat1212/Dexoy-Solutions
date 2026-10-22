import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const CapabilitiesSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'web' | 'automation' | 'ai' | 'cloud' | 'care'>('all');

  const pillars = [
    {
      id: 'web',
      num: '01 / ARCHITECTURE',
      title: 'Build',
      badge: 'CORE',
      category: 'Websites & Portals',
      desc: 'High-speed business storefronts, client portals, and custom database software.',
      items: ['Business Fronts (<1s Load)', 'Client Account Portals', 'Internal Admin Dashboards', 'Stripe / Razorpay Checkouts'],
      timeline: '2 – 4 Weeks',
      isCore: true,
      tag: 'web',
      accent: 'border-t-4 border-t-emerald-600',
      tagColor: 'text-emerald-700 bg-emerald-50 border-emerald-200',
      badgeColor: 'bg-emerald-700 text-white',
    },
    {
      id: 'automation',
      num: '02 / WORKFLOWS',
      title: 'Automate',
      badge: 'HIGH ROI',
      category: 'Workflow Automation',
      desc: 'Eliminating manual data entry, spreadsheet copy-pasting, and repetitive office tasks.',
      items: ['WhatsApp Business API Leads', 'Auto PDF Invoice Generation', 'Google Sheets / CRM Sync', 'Order Webhook Triggers'],
      timeline: '3 – 7 Days',
      isCore: false,
      tag: 'automation',
      accent: 'border-t-4 border-t-amber-500',
      tagColor: 'text-amber-700 bg-amber-50 border-amber-200',
      badgeColor: 'bg-amber-600 text-white',
    },
    {
      id: 'ai',
      num: '03 / INTELLIGENCE',
      title: 'Integrate AI',
      badge: null,
      category: 'Practical AI',
      desc: 'Focused LLMs trained exclusively on your business catalog, FAQs, and price lists.',
      items: ['24/7 WhatsApp Query Bot', 'Lead Pre-Qualification', 'Invoice & Receipt OCR Parsing', 'Internal Staff Knowledge Base'],
      timeline: '1 – 2 Weeks',
      isCore: false,
      tag: 'ai',
      accent: 'border-t-4 border-t-indigo-600',
      tagColor: 'text-indigo-700 bg-indigo-50 border-indigo-200',
      badgeColor: 'bg-indigo-600 text-white',
    },
    {
      id: 'cloud',
      num: '04 / INFRASTRUCTURE',
      title: 'Deploy',
      badge: null,
      category: 'Cloud & DevOps',
      desc: 'Clean cloud servers, automatic HTTPS, SSL renewal, and offsite daily backups.',
      items: ['AWS / Linux VPS Hosting', 'Domain & DNS Configuration', 'Automated Daily Snapshots', 'Database Optimization'],
      timeline: '2 – 5 Days',
      isCore: false,
      tag: 'cloud',
      accent: 'border-t-4 border-t-sky-500',
      tagColor: 'text-sky-700 bg-sky-50 border-sky-200',
      badgeColor: 'bg-sky-600 text-white',
    },
    {
      id: 'care',
      num: '05 / OPERATIONS',
      title: 'Maintain',
      badge: 'POPULAR',
      category: 'Website Care',
      desc: 'Continuous monthly care to keep your systems fast, secure, and always online.',
      items: ['Month-to-Month Retainer', 'Zero-Downtime Bug Fixes', 'Weekly Security Updates', 'Direct Founder WhatsApp SLA'],
      timeline: 'Monthly Care',
      isCore: false,
      tag: 'care',
      accent: 'border-t-4 border-t-teal-600',
      tagColor: 'text-teal-700 bg-teal-50 border-teal-200',
      badgeColor: 'bg-teal-700 text-white',
    }
  ];

  const filterTabs = [
    { id: 'all', label: 'All Capabilities' },
    { id: 'web', label: 'Websites' },
    { id: 'automation', label: 'Automations' },
    { id: 'ai', label: 'AI Assistants' },
    { id: 'cloud', label: 'Hosting & Cloud' },
    { id: 'care', label: 'Monthly Care' },
  ];

  const filteredPillars = filter === 'all' ? pillars : pillars.filter(p => p.tag === filter);

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-20 sm:py-24 scroll-mt-20" id="services">

      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <span className="inline-block font-mono text-[11px] uppercase tracking-widest text-emerald-800 font-bold mb-3 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
            Technical Scope
          </span>
          <h2 className="font-headline-xl text-3xl sm:text-4xl text-slate-900 font-bold mt-1 leading-tight">
            Capabilities Architecture
          </h2>
        </div>
        <p className="font-body-sm text-sm text-slate-600 max-w-md leading-relaxed">
          From full website builds to bespoke internal software, automated customer workflows, and monthly server care.
        </p>
      </div>

      {/* Interactive Category Filter Pills (Google-style) */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
        {filterTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setFilter(tab.id as typeof filter)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
              filter === tab.id
                ? 'bg-slate-900 text-white shadow-sm font-bold'
                : 'bg-slate-100/90 text-slate-600 hover:bg-slate-200 hover:text-slate-900 border border-slate-200/80'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* 5 Pillar Cards with Motion layout */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4"
      >
        <AnimatePresence>
          {filteredPillars.map((pillar) => (
            <motion.div
              layout
              key={pillar.title}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              whileHover={{ y: -4, boxShadow: '0 12px 30px rgba(15,23,42,0.08)' }}
              className={`bg-white p-6 rounded-2xl flex flex-col justify-between relative shadow-xs border border-slate-200/90 transition-all ${pillar.accent}`}
            >
              {pillar.badge && (
                <div className={`absolute -top-3 right-3 font-mono text-[9px] font-bold px-2 py-0.5 rounded shadow-xs ${pillar.badgeColor}`}>
                  {pillar.badge}
                </div>
              )}
              <div>
                <span className="font-mono text-[10px] text-slate-400 font-bold tracking-widest">
                  {pillar.num}
                </span>
                <h3 className="font-headline-md text-xl font-bold text-slate-900 mt-1 mb-1">
                  {pillar.title}
                </h3>
                <span className={`inline-block font-mono text-[10px] font-bold px-2 py-0.5 rounded border mb-3 ${pillar.tagColor}`}>
                  {pillar.category}
                </span>
                <p className="font-body-sm text-xs text-slate-600 mb-4 leading-relaxed">
                  {pillar.desc}
                </p>
                <ul className="space-y-2 border-t border-slate-100 pt-3">
                  {pillar.items.map((it) => (
                    <li key={it} className="flex items-start gap-2 text-slate-800 font-body-sm text-xs">
                      <span className="material-symbols-outlined text-sm text-emerald-600 mt-0.5 shrink-0">check_circle</span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between text-slate-500 font-mono text-[11px]">
                <span>Timeline:</span>
                <span className="font-bold text-slate-900">{pillar.timeline}</span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

    </section>
  );
};
