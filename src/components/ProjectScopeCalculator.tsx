import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { getWhatsAppLink } from '../config/siteConfig';

export const ProjectScopeCalculator: React.FC = () => {
  const [projectType, setProjectType] = useState<'website' | 'webapp' | 'automation' | 'care'>('website');
  const [addons, setAddons] = useState<Record<string, boolean>>({
    auth: false,
    payments: false,
    whatsapp: true,
    db: false,
    seo: true,
  });

  const toggleAddon = (key: string) => {
    setAddons((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const projectTypes = [
    {
      id: 'website',
      name: 'High-Speed Website',
      baseDays: 7,
      desc: 'Mobile-first storefront, booking form, SSL, domain DNS, and fast edge hosting.',
      badge: '5–10 Days',
    },
    {
      id: 'webapp',
      name: 'Custom Web Application',
      baseDays: 14,
      desc: 'Role-based portals, staff dashboards, inventory, and database business tools.',
      badge: '2–4 Weeks',
    },
    {
      id: 'automation',
      name: 'Workflow Automation',
      baseDays: 4,
      desc: 'Connecting WhatsApp, PDF receipts, and spreadsheet sync without manual entry.',
      badge: '3–7 Days',
    },
    {
      id: 'care',
      name: 'Monthly Systems Care',
      baseDays: 0,
      desc: 'Ongoing monthly server updates, backups, bug fixes, and direct WhatsApp support.',
      badge: 'Retainer',
    },
  ];

  const addonOptions = [
    { id: 'whatsapp', label: 'Instant WhatsApp Lead & Order Notifications', days: 2 },
    { id: 'payments', label: 'Payment Gateway (Razorpay / Stripe Checkout)', days: 2 },
    { id: 'auth', label: 'User Login & Role-Based Permissions', days: 4 },
    { id: 'db', label: 'Dedicated PostgreSQL Database & Analytics Export', days: 3 },
    { id: 'seo', label: 'Structured Schema Markup & Speed Optimization', days: 1 },
  ];

  // Calculate estimated days
  const baseType = projectTypes.find((p) => p.id === projectType);
  const addonDays = Object.entries(addons)
    .filter(([, checked]) => checked)
    .reduce((acc, [key]) => {
      const opt = addonOptions.find((o) => o.id === key);
      return acc + (opt ? opt.days : 0);
    }, 0);

  const estimatedDays = projectType === 'care' ? 'Ongoing Monthly Retainer' : `${(baseType?.baseDays || 5) + addonDays} – ${(baseType?.baseDays || 5) + addonDays + 4} Business Days`;

  const generateWhatsAppExport = () => {
    const selectedAddonLabels = Object.entries(addons)
      .filter(([, checked]) => checked)
      .map(([k]) => addonOptions.find((o) => o.id === k)?.label)
      .filter(Boolean);

    const msg = `🛠️ *Project Scope Estimate via Dexoy Solutions*

📌 *Project Type:* ${baseType?.name}
⏱️ *Calculated Timeline:* ${estimatedDays}

📋 *Selected Modules:*
${selectedAddonLabels.length > 0 ? selectedAddonLabels.map((l) => `• ${l}`).join('\n') : '• Core Base Setup'}

Hi Daksh, I used your Scope Calculator and would like to review this exact specification with you!`;

    return getWhatsAppLink(msg);
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-20 sm:py-24 scroll-mt-20" id="calculator">
      
      {/* Header */}
      <div className="max-w-2xl mb-12">
        <span className="inline-block font-mono text-[11px] uppercase tracking-widest text-emerald-800 font-bold mb-3 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
          Transparent Scope Estimator
        </span>
        <h2 className="font-headline-xl text-3xl sm:text-4xl text-slate-900 font-bold mt-1 leading-tight">
          Calculate Your Project Scope
        </h2>
        <p className="font-body-md text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
          Select what your business needs. See the realistic development timeframe and phased engineering roadmap instantly.
        </p>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-10 items-start border-t-4 border-t-emerald-700">
        
        {/* Left Column: Interactive Selectors */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          
          {/* Step 1: Core Type */}
          <div>
            <label className="font-mono text-xs font-bold text-slate-500 uppercase tracking-wider block mb-3">
              Step 01 / Select Project Type:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {projectTypes.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setProjectType(t.id as typeof projectType)}
                  className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                    projectType === t.id
                      ? 'bg-emerald-50/70 border-emerald-600 ring-2 ring-emerald-600/20'
                      : 'bg-slate-50/80 hover:bg-slate-100 border-slate-200'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-slate-900">{t.name}</span>
                    <span className="text-[10px] font-mono font-bold text-emerald-800 bg-emerald-100/80 px-2 py-0.5 rounded">
                      {t.badge}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-600 leading-relaxed mt-1">{t.desc}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Add-on Modules */}
          <div>
            <label className="font-mono text-xs font-bold text-slate-500 uppercase tracking-wider block mb-3">
              Step 02 / Select Required Capabilities:
            </label>
            <div className="space-y-2.5">
              {addonOptions.map((opt) => (
                <label
                  key={opt.id}
                  onClick={() => toggleAddon(opt.id)}
                  className={`p-3 rounded-xl border flex items-center justify-between cursor-pointer transition-colors ${
                    addons[opt.id]
                      ? 'bg-emerald-50/50 border-emerald-500'
                      : 'bg-slate-50/50 border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={addons[opt.id] || false}
                      readOnly
                      className="accent-emerald-700 w-4 h-4 rounded"
                    />
                    <span className="text-xs font-medium text-slate-800">{opt.label}</span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-500">+{opt.days}d</span>
                </label>
              ))}
            </div>
          </div>

        </div>

        {/* Right Column: Calculated Specification Ledger */}
        <div className="lg:col-span-5 bg-slate-50/90 rounded-2xl border border-slate-200 p-6 flex flex-col justify-between gap-6">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <span className="font-mono text-xs font-bold text-slate-500 uppercase tracking-wider">
                Engineering Estimate
              </span>
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-mono text-[10px] font-bold">
                FIXED MILESTONES
              </span>
            </div>

            <div className="mt-4">
              <span className="text-xs text-slate-500 font-mono">Estimated Turnaround:</span>
              <p className="font-headline-lg text-2xl font-bold text-slate-900 mt-0.5">
                {estimatedDays}
              </p>
            </div>

            {/* Phased Roadmap */}
            <div className="space-y-3 mt-6 pt-4 border-t border-slate-200 text-xs text-slate-700">
              <p className="font-mono text-[11px] uppercase tracking-wider font-bold text-slate-800">
                Delivery Roadmap:
              </p>
              
              <div className="flex items-start gap-2.5">
                <span className="font-mono font-bold text-emerald-700">01</span>
                <div>
                  <span className="font-bold text-slate-900">1-Page Scope Lock</span>
                  <p className="text-[11px] text-slate-500">Exact deliverables and milestone price agreed upfront.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <span className="font-mono font-bold text-emerald-700">02</span>
                <div>
                  <span className="font-bold text-slate-900">Staged Browser Testing</span>
                  <p className="text-[11px] text-slate-500">Live preview environment tested on mobile and desktop.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <span className="font-mono font-bold text-emerald-700">03</span>
                <div>
                  <span className="font-bold text-slate-900">Production Cutover</span>
                  <p className="text-[11px] text-slate-500">Zero-downtime DNS transfer, SSL active, 100% code handover.</p>
                </div>
              </div>
            </div>
          </div>

          <motion.a
            href={generateWhatsAppExport()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full bg-emerald-800 hover:bg-emerald-900 text-white font-semibold text-xs py-3.5 rounded-xl transition-all shadow-md shadow-emerald-800/25"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="material-symbols-outlined text-base">chat</span>
            <span>Send Estimate to Daksh on WhatsApp</span>
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </motion.a>

        </div>

      </div>

    </section>
  );
};
