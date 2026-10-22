import React from 'react';
import { motion } from 'framer-motion';
import { siteConfig, getWhatsAppLink } from '../config/siteConfig';

export const FounderAccountability: React.FC = () => {
  const commitments = [
    {
      label: 'Direct Founder Line',
      value: 'WhatsApp & Direct Call',
      sub: '+91 8502099643',
      color: 'bg-blue-50/70 border-blue-200/80 text-blue-900',
      labelColor: 'text-blue-700',
    },
    {
      label: 'Adaptive Architecture',
      value: 'Custom to Your Problem',
      sub: 'Zero unnecessary bloated libraries',
      color: 'bg-amber-50/70 border-amber-200/80 text-amber-900',
      labelColor: 'text-amber-700',
    },
    {
      label: 'Complete Ownership',
      value: '100% Code & Asset Handover',
      sub: 'Zero vendor lock-in or hidden retainers',
      color: 'bg-emerald-50/70 border-emerald-200/80 text-emerald-900',
      labelColor: 'text-emerald-700',
    },
  ];

  return (
    <section
      className="w-full bg-slate-50/70 py-20 sm:py-24 border-t border-slate-200 scroll-mt-20"
      id="founder"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <motion.div
          className="bg-white rounded-2xl border border-slate-200/90 p-7 sm:p-10 lg:p-14 shadow-sm border-t-4 border-t-emerald-700"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: 'easeOut' as const }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

            {/* Left: Founder Card */}
            <div className="lg:col-span-4 flex flex-col gap-4">
              <div className="p-6 bg-slate-50/80 rounded-2xl border border-slate-200 flex flex-col gap-5">

                {/* Monogram Badge */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-800 to-teal-950 text-white flex items-center justify-center font-bold text-2xl tracking-tight shadow-md shadow-emerald-900/25">
                  DP
                </div>

                <div>
                  <h3 className="font-headline-sm text-xl font-bold text-slate-900">
                    {siteConfig.founder.name}
                  </h3>
                  <p className="font-mono text-xs font-bold text-emerald-700 uppercase tracking-wider mt-1">
                    {siteConfig.founder.role}
                  </p>
                  <p className="font-body-sm text-xs text-slate-600 mt-2 leading-relaxed">
                    Computer Science &bull; Poornima University, Jaipur
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200 flex flex-col gap-2 text-xs font-mono text-slate-600">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm text-emerald-700">location_on</span>
                    <span>Newai &bull; Jaipur, Rajasthan</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm text-emerald-700">mail</span>
                    <span>{siteConfig.contact.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm text-emerald-700">call</span>
                    <span>{siteConfig.contact.phone}</span>
                  </div>
                </div>

                <motion.a
                  href={getWhatsAppLink("Hello Daksh, I would like to consult with you directly on a project.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs py-3 px-4 rounded-xl transition-all shadow-md shadow-emerald-700/20"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="material-symbols-outlined text-base">chat</span>
                  <span>WhatsApp Daksh Directly</span>
                </motion.a>
              </div>
            </div>

            {/* Right: Focused Summary & Guarantees */}
            <div className="lg:col-span-8 flex flex-col gap-5">
              <div>
                <span className="font-mono text-[11px] uppercase tracking-widest text-emerald-800 font-bold bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
                  Direct Founder Accountability
                </span>
                <h2 className="font-headline-lg text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mt-3 leading-snug">
                  Work directly with the engineer who builds your systems.
                </h2>
              </div>

              {/* Direct Founder Summary with Fresh Color Contrast */}
              <div className="p-5 sm:p-6 bg-emerald-50/40 rounded-2xl border-l-4 border-l-emerald-700 border border-emerald-100 space-y-2.5">
                <p className="font-body-md text-sm text-slate-800 leading-relaxed italic">
                  &ldquo;I started Dexoy Solutions to give growing businesses practical, high-speed software without the usual agency runaround. When you hire us, you speak directly with me. I architect the system, write the clean code, and personally ensure your operations run smoothly.&rdquo;
                </p>
                <p className="font-mono text-xs text-emerald-800 font-bold">
                  &mdash; Daksh Prajapat, Founder &amp; Lead Engineer
                </p>
              </div>

              {/* Commitments Grid with Real Professional Colors */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                {commitments.map((c) => (
                  <div
                    key={c.label}
                    className={`p-3.5 rounded-xl border ${c.color}`}
                  >
                    <span className={`font-mono text-[10px] uppercase tracking-widest font-bold ${c.labelColor}`}>
                      {c.label}
                    </span>
                    <p className="font-body-sm text-sm font-bold text-slate-900 mt-1">
                      {c.value}
                    </p>
                    <p className="text-xs text-slate-600 mt-0.5">
                      {c.sub}
                    </p>
                  </div>
                ))}
              </div>

              {/* Leadership note */}
              <div className="pt-2 flex flex-wrap items-center gap-3 text-xs text-slate-500 font-mono">
                <span className="inline-flex items-center gap-1.5 text-slate-700 font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  Systems &amp; Architecture: Daksh Prajapat
                </span>
                <span>&bull;</span>
                <a href="#growth" className="inline-flex items-center gap-1.5 text-blue-700 font-bold hover:underline">
                  <span className="w-2 h-2 rounded-full bg-blue-500" />
                  Growth &amp; Partnerships: Raghav Sharma &rarr;
                </a>
              </div>

            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};
