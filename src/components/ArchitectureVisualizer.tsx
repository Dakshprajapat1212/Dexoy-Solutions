import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const ArchitectureVisualizer: React.FC = () => {
  const [activeTier, setActiveTier] = useState<number>(0);

  const tiers = [
    {
      id: 'edge',
      num: 'TIER 01',
      name: 'Client Edge & Delivery',
      headline: 'Sub-1.0s Global Edge & SSL Termination',
      tag: 'LATENCY BUDGET: < 1.0s',
      color: 'border-t-4 border-t-blue-600',
      badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
      icon: 'public',
      details: [
        { label: 'Edge Caching', value: 'Global CDN distribution for instant asset delivery' },
        { label: 'DNS & SSL', value: 'Zero-configuration HTTPS with auto-renewing certificates' },
        { label: 'Mobile Optimization', value: 'Responsive vector SVG icons, zero layout shifts (CLS < 0.05)' },
        { label: 'Security Guard', value: 'DDoS mitigation and HTTP security headers enabled by default' },
      ],
      insight: 'Most legacy websites load 40+ plugins taking 4–6 seconds. We budget every asset so your customers never bounce on slow mobile connections.',
    },
    {
      id: 'app',
      num: 'TIER 02',
      name: 'Application & Core Logic',
      headline: 'Modern Component Architecture & Type Safety',
      tag: 'ZERO PLUGIN BLOAT',
      color: 'border-t-4 border-t-emerald-600',
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      icon: 'layers',
      details: [
        { label: 'Frontend Stack', value: 'Clean React + TypeScript with strict compiler validation' },
        { label: 'Design System', value: 'Tailored Tailwind UI with accessible semantic HTML' },
        { label: 'State Management', value: 'Predictable unidirectional data flow without unnecessary re-renders' },
        { label: 'Code Quality', value: 'Zero spaghetti code; modular reusable components' },
      ],
      insight: 'We engineer from first principles. When your business grows or changes a workflow, we modify clean code in minutes instead of debugging broken third-party plugins.',
    },
    {
      id: 'workers',
      num: 'TIER 03',
      name: 'Async Automations & APIs',
      headline: 'Real-Time Webhooks & Messaging Pipelines',
      tag: 'INSTANT DISPATCH',
      color: 'border-t-4 border-t-amber-500',
      badgeColor: 'bg-amber-50 text-amber-700 border-amber-200',
      icon: 'sync_alt',
      details: [
        { label: 'WhatsApp Dispatch', value: 'Instant order alerts and lead delivery directly to founder phone' },
        { label: 'Webhook Handlers', value: 'Stripe, Razorpay, and form submission listeners with retry logic' },
        { label: 'PDF Generation', value: 'Dynamic branded invoices & receipts compiled on the fly' },
        { label: 'Spreadsheet Sync', value: 'Automated bidirectional sync with Google Sheets & CRM' },
      ],
      insight: 'Eliminates 100% of human copy-pasting. Customer actions trigger automated backend tasks reliably in the background.',
    },
    {
      id: 'data',
      num: 'TIER 04',
      name: 'Database & Disaster Recovery',
      headline: 'ACID-Compliant Storage & Automated Snapshots',
      tag: '100% DATA OWNERSHIP',
      color: 'border-t-4 border-t-indigo-600',
      badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
      icon: 'database',
      details: [
        { label: 'Database Engine', value: 'PostgreSQL / Structured Relational Schema' },
        { label: 'Automated Backups', value: 'Daily offsite encrypted snapshots with single-click point-in-time restore' },
        { label: 'Data Sovereignty', value: 'You own your database credentials and export archives' },
        { label: 'Audit Trail', value: 'Immutable logs for administrative actions and orders' },
      ],
      insight: 'Your company data is your most valuable asset. We store it in clean relational tables with automated backups so you never lose customer records.',
    },
  ];

  return (
    <section className="w-full bg-slate-50/70 py-20 sm:py-24 border-y border-slate-200 scroll-mt-20" id="architecture">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="inline-block font-mono text-[11px] uppercase tracking-widest text-emerald-800 font-bold mb-3 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
              Engineering Rigor
            </span>
            <h2 className="font-headline-xl text-3xl sm:text-4xl text-slate-900 font-bold mt-1 leading-tight">
              First-Principles System Architecture
            </h2>
          </div>
          <p className="font-body-sm text-sm text-slate-600 max-w-md leading-relaxed">
            How we design software systems that stay online, load under 1 second, and automate operations without breaking.
          </p>
        </div>

        {/* 4 Interactive Tier Selector Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {tiers.map((tier, idx) => (
            <button
              key={tier.id}
              onClick={() => setActiveTier(idx)}
              className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                activeTier === idx
                  ? 'bg-white shadow-sm border-slate-300 ring-2 ring-emerald-600/30'
                  : 'bg-white/60 hover:bg-white border-slate-200 text-slate-600 hover:text-slate-900'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-[10px] font-bold text-slate-400">{tier.num}</span>
                <span className="material-symbols-outlined text-lg text-slate-700">{tier.icon}</span>
              </div>
              <p className="font-headline-sm text-sm font-bold text-slate-900 leading-snug">
                {tier.name}
              </p>
            </button>
          ))}
        </div>

        {/* Active Architecture Tier Detailed Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTier}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className={`bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-xs ${tiers[activeTier].color}`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Architectural Intent & Insight */}
              <div className="lg:col-span-6 flex flex-col gap-4">
                <div className="flex items-center gap-2.5">
                  <span className="font-mono text-xs font-bold text-slate-400">
                    {tiers[activeTier].num}
                  </span>
                  <span className={`font-mono text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${tiers[activeTier].badgeColor}`}>
                    {tiers[activeTier].tag}
                  </span>
                </div>

                <h3 className="font-headline-lg text-2xl font-bold text-slate-900">
                  {tiers[activeTier].headline}
                </h3>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 mt-2">
                  <p className="font-mono text-[11px] uppercase tracking-wider font-bold text-slate-500 mb-1">
                    Engineering Decision Note
                  </p>
                  <p className="font-body-sm text-xs text-slate-700 leading-relaxed italic">
                    &ldquo;{tiers[activeTier].insight}&rdquo;
                  </p>
                </div>
              </div>

              {/* Right Column: Exact Technical Specs Ledger */}
              <div className="lg:col-span-6 flex flex-col gap-3">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-500">
                  Architecture Specifications:
                </span>
                <div className="divide-y divide-slate-100 bg-slate-50/60 rounded-xl border border-slate-200/80 p-4">
                  {tiers[activeTier].details.map((d) => (
                    <div key={d.label} className="py-2.5 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                      <span className="text-xs font-bold text-slate-900 shrink-0">
                        {d.label}
                      </span>
                      <span className="text-xs text-slate-600 sm:text-right">
                        {d.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
