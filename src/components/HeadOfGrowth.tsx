import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { siteConfig, getGrowthWhatsAppLink } from '../config/siteConfig';

export const HeadOfGrowth: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const growth = siteConfig.growthLead;

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(growth.phone);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const growthPillars = [
    {
      title: 'Commercial Roadmapping',
      desc: 'Transparent milestone budgeting, clear ROI justification, and zero hidden agency margins.',
      icon: 'calculate',
      badge: 'Budget Integrity',
      accent: 'border-blue-200/80 bg-blue-50/60 text-blue-900',
      badgeColor: 'text-blue-700 bg-blue-100/60',
    },
    {
      title: 'Rapid Scoping Cadence',
      desc: 'Same-day feasibility checks and direct technical alignment with founder Daksh Prajapat.',
      icon: 'bolt',
      badge: '24h Feasibility',
      accent: 'border-indigo-200/80 bg-indigo-50/60 text-indigo-900',
      badgeColor: 'text-indigo-700 bg-indigo-100/60',
    },
    {
      title: 'Post-Launch Scale & SLAs',
      desc: 'Proactive operational governance ensuring your digital system continues to compound value.',
      icon: 'trending_up',
      badge: 'Growth Retention',
      accent: 'border-emerald-200/80 bg-emerald-50/60 text-emerald-900',
      badgeColor: 'text-emerald-700 bg-emerald-100/60',
    },
  ];

  return (
    <section
      className="w-full bg-white py-20 sm:py-24 border-t border-slate-200/80 scroll-mt-20 relative"
      id="growth"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <motion.div
          className="bg-slate-50/80 rounded-2xl border border-slate-200/90 p-7 sm:p-10 lg:p-14 shadow-sm border-t-4 border-t-blue-700"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: 'easeOut' as const }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

            {/* Left: Raghav Sharma Profile Card */}
            <div className="lg:col-span-4 flex flex-col gap-4">
              <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col gap-5">

                {/* Monogram Badge */}
                <div className="flex items-center justify-between">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-700 via-indigo-800 to-slate-900 text-white flex items-center justify-center font-bold text-2xl tracking-tight shadow-md shadow-blue-900/20">
                    RS
                  </div>
                  <span className="font-mono text-[11px] font-bold text-blue-700 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full uppercase tracking-wider">
                    Core Leadership
                  </span>
                </div>

                <div>
                  <h3 className="font-headline-sm text-xl font-bold text-slate-900">
                    {growth.name}
                  </h3>
                  <p className="font-mono text-xs font-bold text-blue-700 uppercase tracking-wider mt-1">
                    {growth.role}
                  </p>
                  <p className="font-body-sm text-xs text-slate-600 mt-2 leading-relaxed">
                    Client Partnerships &bull; Strategic Roadmaps &bull; Operations
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5 text-xs font-mono text-slate-700">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm text-blue-700">call</span>
                    <a
                      href={`tel:${growth.phone.replace(/[^0-9+]/g, '')}`}
                      className="font-bold text-slate-900 hover:text-blue-700 transition-colors"
                    >
                      {growth.phone}
                    </a>
                    <button
                      type="button"
                      onClick={handleCopyPhone}
                      className="ml-auto text-[11px] font-sans px-2 py-0.5 rounded bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
                      title="Copy phone number"
                    >
                      {copied ? 'Copied!' : 'Copy'}
                    </button>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm text-blue-700">location_on</span>
                    <span>Jaipur &bull; Remote All-India</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm text-blue-700">schedule</span>
                    <span>Direct Consultation Availability</span>
                  </div>
                </div>

                {/* Primary Action Buttons */}
                <div className="flex flex-col gap-2 pt-1">
                  <motion.a
                    href={getGrowthWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs py-3 px-4 rounded-xl transition-all shadow-md shadow-blue-700/20"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="material-symbols-outlined text-base">chat</span>
                    <span>WhatsApp Raghav Directly</span>
                  </motion.a>

                  <a
                    href={`tel:${growth.phone.replace(/[^0-9+]/g, '')}`}
                    className="inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs py-2.5 px-4 rounded-xl transition-all border border-slate-200"
                  >
                    <span className="material-symbols-outlined text-base text-slate-600">call</span>
                    <span>Direct Call: {growth.phone}</span>
                  </a>
                </div>

              </div>
            </div>

            {/* Right: Growth Mission & Strategic Pillars */}
            <div className="lg:col-span-8 flex flex-col gap-5">
              <div>
                <span className="font-mono text-[11px] uppercase tracking-widest text-blue-800 font-bold bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
                  Growth &amp; Client Strategy
                </span>
                <h2 className="font-headline-lg text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mt-3 leading-snug">
                  Aligning technology with bottom-line business expansion.
                </h2>
              </div>

              {/* Raghav's Statement */}
              <div className="p-5 sm:p-6 bg-blue-50/50 rounded-2xl border-l-4 border-l-blue-700 border border-blue-100 space-y-2.5">
                <p className="font-body-md text-sm text-slate-800 leading-relaxed italic">
                  &ldquo;Great software fails if it doesn&apos;t move business metrics. At Dexoy Solutions, my responsibility is to bridge client vision with Daksh&apos;s technical execution — ensuring every rupee invested converts into faster operations, client trust, and sustained commercial leverage.&rdquo;
                </p>
                <p className="font-mono text-xs text-blue-800 font-bold">
                  &mdash; Raghav Sharma, Head of Growth
                </p>
              </div>

              {/* Pillars Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                {growthPillars.map((p) => (
                  <div
                    key={p.title}
                    className={`p-4 rounded-xl border ${p.accent} flex flex-col gap-1.5`}
                  >
                    <div className="flex items-center justify-between">
                      <span className={`material-symbols-outlined text-lg ${p.badgeColor.split(' ')[0]}`}>
                        {p.icon}
                      </span>
                      <span className={`font-mono text-[9px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full ${p.badgeColor}`}>
                        {p.badge}
                      </span>
                    </div>
                    <p className="font-body-sm text-sm font-bold text-slate-900 mt-1">
                      {p.title}
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Cohesive Team Note */}
              <div className="pt-2 flex flex-wrap items-center gap-3 text-xs text-slate-500 font-mono">
                <span className="inline-flex items-center gap-1.5 text-slate-700 font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  Engineering: Daksh Prajapat
                </span>
                <span>&bull;</span>
                <span className="inline-flex items-center gap-1.5 text-slate-700 font-bold">
                  <span className="w-2 h-2 rounded-full bg-blue-500" />
                  Growth &amp; Partnerships: Raghav Sharma
                </span>
                <span>&bull;</span>
                <span>Zero Account Manager Middlemen</span>
              </div>

            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};
