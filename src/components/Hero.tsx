import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig, getWhatsAppLink } from '../config/siteConfig';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: "easeOut" as const },
});

export const Hero: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'deliverables' | 'architecture' | 'guarantee'>('deliverables');

  const deliverableItems = [
    {
      category: 'Websites & Client Portals',
      detail: 'High-speed business storefronts, mobile booking forms, client login portals',
      timeframe: '5–10 Day Delivery',
      icon: 'language',
      color: 'bg-blue-50 text-blue-700 border-blue-200/80',
      tagColor: 'bg-blue-50 text-blue-800 border-blue-200/60',
    },
    {
      category: 'Custom Software & Dashboards',
      detail: 'Internal team dashboards, CRM pipelines, inventory & order management',
      timeframe: 'Scope-Based',
      icon: 'terminal',
      color: 'bg-indigo-50 text-indigo-700 border-indigo-200/80',
      tagColor: 'bg-indigo-50 text-indigo-800 border-indigo-200/60',
    },
    {
      category: 'Workflow Automation',
      detail: 'Automatic WhatsApp lead dispatch, instant PDF invoices, Google Sheets sync',
      timeframe: 'Same-Week Setup',
      icon: 'sync_alt',
      color: 'bg-amber-50 text-amber-700 border-amber-200/80',
      tagColor: 'bg-amber-50 text-amber-800 border-amber-200/60',
    },
    {
      category: 'Founder-Led Monthly Care',
      detail: 'Proactive server updates, automated backups, 4h direct WhatsApp response',
      timeframe: 'Monthly Retainer',
      icon: 'shield',
      color: 'bg-emerald-50 text-emerald-700 border-emerald-200/80',
      tagColor: 'bg-emerald-50 text-emerald-800 border-emerald-200/60',
    }
  ];

  const architecturePillars = [
    {
      step: '01 / SCOPE',
      title: 'Direct Diagnosis with Daksh',
      desc: 'No salespeople. We review your exact business friction and define a clear 1-page spec with a fixed milestone cost.',
      icon: 'chat',
      color: 'text-blue-700 bg-blue-50',
    },
    {
      step: '02 / ENGINEERING',
      title: 'Staged Browser Previews',
      desc: 'You test functioning software in your live browser every week — not static non-functional PDF mockups.',
      icon: 'devices',
      color: 'text-indigo-700 bg-indigo-50',
    },
    {
      step: '03 / PRODUCTION',
      title: 'Zero-Downtime Deployment',
      desc: 'Clean DNS cutover, automated SSL certificate renewal, and full smoke testing before handling real customer traffic.',
      icon: 'rocket_launch',
      color: 'text-emerald-700 bg-emerald-50',
    },
  ];

  const guaranteeItems = [
    {
      title: 'Direct Founder Line',
      desc: 'You have Daksh\'s direct WhatsApp and phone number. No junior account handlers.',
      icon: 'support_agent',
      badge: 'DIRECT ACCESS',
      badgeColor: 'bg-blue-50 text-blue-800 border-blue-200',
    },
    {
      title: 'Fixed Milestone Invoicing',
      desc: 'Every phase is agreed upon upfront. No surprise fees, hourly padding, or vague charges.',
      icon: 'receipt',
      badge: 'TRANSPARENT',
      badgeColor: 'bg-amber-50 text-amber-800 border-amber-200',
    },
    {
      title: '100% Asset & Code Handover',
      desc: 'You own your code repository, domains, and server credentials outright. Zero vendor lock-in.',
      icon: 'lock_open',
      badge: 'FULL OWNERSHIP',
      badgeColor: 'bg-emerald-50 text-emerald-800 border-emerald-200',
    },
  ];

  return (
    <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 pt-32 pb-20 sm:pb-28 overflow-hidden">
      
      {/* Background Soft Atmospheric Mesh - Google Caliber */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[500px] pointer-events-none -z-10 opacity-70">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-100/60 rounded-full blur-3xl" />
        <div className="absolute top-12 right-1/4 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

        {/* Left Column: Clear, Honest Positioning */}
        <div className="lg:col-span-7 flex flex-col gap-6">

          {/* Status Badge */}
          <motion.div 
            {...fadeUp(0.06)} 
            className="inline-flex items-center gap-2 self-start bg-emerald-50 border border-emerald-200/90 text-emerald-900 px-3.5 py-1.5 rounded-full shadow-xs"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shadow-sm shadow-emerald-500/50" />
            <span className="font-mono text-[11px] uppercase tracking-wider font-bold">
              Founder-Led Studio &bull; Direct Accountability
            </span>
          </motion.div>

          {/* Master Headline with Vivid Gradient Accent */}
          <motion.h1
            {...fadeUp(0.12)}
            className="font-display-lg text-[38px] sm:text-[48px] lg:text-[56px] font-bold text-slate-900 tracking-tight leading-[1.12]"
          >
            Websites, custom software, and smart automation —{' '}
            <span className="bg-gradient-to-r from-emerald-800 via-teal-700 to-emerald-900 bg-clip-text text-transparent font-extrabold underline decoration-emerald-300 decoration-4 underline-offset-4">
              built &amp; managed
            </span>{' '}
            for your business.
          </motion.h1>

          {/* Direct Plain-English Subtext */}
          <motion.p {...fadeUp(0.18)} className="font-body-lg text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
            Whether you need a high-converting digital storefront, custom internal tooling, or dependable daily maintenance for your existing tech stack, founder{' '}
            <strong className="text-slate-900 font-semibold">{siteConfig.founder.name}</strong>{' '}
            delivers honest engineering without agency overhead or jargon.
          </motion.p>

          {/* Action Buttons */}
          <motion.div {...fadeUp(0.24)} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1">
            <motion.a
              href="#intake"
              className="inline-flex items-center justify-center bg-emerald-800 hover:bg-emerald-900 text-white font-semibold text-sm px-6 py-3.5 rounded-xl transition-all shadow-md shadow-emerald-800/25 border border-emerald-700 cursor-pointer"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Start a Project</span>
              <span className="material-symbols-outlined text-base ml-2">arrow_forward</span>
            </motion.a>
            <motion.a
              href="#services"
              className="inline-flex items-center justify-center bg-white hover:bg-slate-50 border border-slate-300 hover:border-slate-400 text-slate-800 font-semibold text-sm px-6 py-3.5 rounded-xl transition-all cursor-pointer shadow-xs"
              whileHover={{ scale: 1.01, y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Explore Capabilities</span>
            </motion.a>
          </motion.div>

          {/* Direct WhatsApp Route */}
          <motion.div {...fadeUp(0.3)} className="flex items-center gap-2 text-slate-600 text-xs sm:text-sm">
            <span className="material-symbols-outlined text-emerald-600 text-lg">chat</span>
            <a
              className="text-emerald-700 hover:text-emerald-800 hover:underline font-bold"
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
            >
              or message Daksh directly on WhatsApp &rarr;
            </a>
            <span className="text-slate-300">&bull;</span>
            <span className="text-slate-500 font-medium">Direct founder reply</span>
          </motion.div>

          {/* Simple Proof Guarantees */}
          <motion.div
            {...fadeUp(0.36)}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-200"
          >
            {[
              { icon: 'verified_user', label: 'Direct Founder Access', color: 'text-emerald-600' },
              { icon: 'payments', label: 'Fixed Milestone Pricing', color: 'text-blue-600' },
              { icon: 'lock_open', label: '100% Code Ownership', color: 'text-indigo-600' },
            ].map((t) => (
              <div key={t.label} className="flex items-center gap-2 text-xs">
                <span className={`material-symbols-outlined ${t.color} text-base`}>{t.icon}</span>
                <span className="font-semibold text-slate-800">{t.label}</span>
              </div>
            ))}
          </motion.div>

        </div>

        {/* Right Column: Google-grade Interactive Architecture Card */}
        <div className="lg:col-span-5 flex flex-col mt-2 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.15, ease: "easeOut" as const }}
            className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-[0_10px_35px_rgba(15,23,42,0.06)] border-t-4 border-t-emerald-700 relative"
          >
            {/* Top Interactive Tabs Header */}
            <div className="flex items-center justify-between pb-3.5 border-b border-slate-100">
              <span className="font-mono text-[11px] uppercase tracking-wider text-slate-500 font-bold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                SYSTEM BLUEPRINT
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 font-mono text-[10px] font-bold border border-emerald-200/80">
                ACTIVE
              </span>
            </div>

            {/* Segmented Control Buttons */}
            <div className="flex bg-slate-100/80 p-1 rounded-xl gap-1 mt-3.5 mb-4">
              {[
                { id: 'deliverables', label: 'Deliverables' },
                { id: 'architecture', label: 'Engineering' },
                { id: 'guarantee', label: 'Founder Ethos' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as typeof activeTab)}
                  className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-semibold transition-all relative cursor-pointer ${
                    activeTab === tab.id
                      ? 'bg-white text-slate-900 shadow-sm font-bold border border-slate-200/60'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content Panels */}
            <AnimatePresence mode="wait">
              {activeTab === 'deliverables' && (
                <motion.div
                  key="deliverables"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="divide-y divide-slate-100"
                >
                  {deliverableItems.map((item) => (
                    <div
                      key={item.category}
                      className="py-3 flex items-start gap-3 group transition-colors"
                    >
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 border ${item.color} shadow-xs`}>
                        <span className="material-symbols-outlined text-base">{item.icon}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-1">
                          <p className="text-xs font-bold text-slate-900">{item.category}</p>
                          <span className={`text-[10px] font-mono px-2 py-0.5 rounded-md border shrink-0 font-bold ${item.tagColor}`}>
                            {item.timeframe}
                          </span>
                        </div>
                        <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}

              {activeTab === 'architecture' && (
                <motion.div
                  key="architecture"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-3 py-1"
                >
                  {architecturePillars.map((arch) => (
                    <div
                      key={arch.step}
                      className="p-3 bg-slate-50/80 rounded-xl border border-slate-200/80"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-mono text-[10px] font-bold text-slate-700">{arch.step}</span>
                        <div className={`w-6 h-6 rounded-md flex items-center justify-center ${arch.color}`}>
                          <span className="material-symbols-outlined text-sm">{arch.icon}</span>
                        </div>
                      </div>
                      <h4 className="text-xs font-bold text-slate-900">{arch.title}</h4>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">{arch.desc}</p>
                    </div>
                  ))}
                </motion.div>
              )}

              {activeTab === 'guarantee' && (
                <motion.div
                  key="guarantee"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-3 py-1"
                >
                  {guaranteeItems.map((g) => (
                    <div
                      key={g.title}
                      className="p-3 bg-slate-50/80 rounded-xl border border-slate-200/80"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-emerald-700 text-base">{g.icon}</span>
                          <span>{g.title}</span>
                        </h4>
                        <span className={`font-mono text-[9px] uppercase tracking-wider font-bold px-2 py-0.5 rounded border ${g.badgeColor}`}>
                          {g.badge}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">{g.desc}</p>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Bottom Reassurance */}
            <div className="mt-4 pt-3.5 border-t border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-emerald-700 text-sm">support_agent</span>
                <span className="text-xs font-medium text-slate-800">Need advice on tech choice?</span>
              </div>
              <a
                href={getWhatsAppLink("Hello Daksh, I have a quick question regarding my business tech setup.")}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono font-bold text-emerald-700 hover:text-emerald-800 hover:underline"
              >
                Ask Daksh &rarr;
              </a>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
};
