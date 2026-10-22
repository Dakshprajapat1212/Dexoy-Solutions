import React from 'react';
import { motion } from 'framer-motion';
import { getWhatsAppLink } from '../config/siteConfig';

export const WebsiteCareHub: React.FC = () => {
  return (
    <section className="w-full bg-slate-50/70 py-20 sm:py-24 border-t border-slate-200 scroll-mt-20" id="care">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        
        <motion.div 
          className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-10 lg:p-12 shadow-sm border-t-4 border-t-amber-500"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: 'easeOut' as const }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Care Pitch */}
            <div className="lg:col-span-7 flex flex-col gap-5">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-amber-50 border border-amber-200 rounded-full w-fit">
                <span className="material-symbols-outlined text-amber-700 text-base">support</span>
                <span className="font-mono text-[11px] font-bold text-amber-900 uppercase tracking-wider">
                  Website Maintenance &amp; Repair Retainer
                </span>
              </div>

              <h2 className="font-headline-lg text-2xl sm:text-3xl text-slate-900 tracking-tight font-bold">
                Already have a website? We&rsquo;ll maintain, secure, and improve it every month.
              </h2>

              <p className="font-body-md text-sm sm:text-base text-slate-600 leading-relaxed">
                Too many businesses are stuck with a slow website and a previous developer who stopped replying. We offer straightforward, month-to-month website care with zero long-term contracts. Direct WhatsApp access to your engineer.
              </p>

              {/* 4 Feature Items with Distinct Colors */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                {[
                  {
                    icon: 'timer',
                    title: 'Emergency Bug Triage',
                    desc: 'Fast diagnostic and repair if checkouts fail or forms stop working.',
                    color: 'bg-rose-50 text-rose-700 border-rose-200',
                  },
                  {
                    icon: 'verified_user',
                    title: 'Security & Updates',
                    desc: 'Regular updates tested safely on staging to avoid broken layouts.',
                    color: 'bg-emerald-50 text-emerald-700 border-emerald-200',
                  },
                  {
                    icon: 'speed',
                    title: 'Speed Optimization',
                    desc: 'Image compression, caching policies, and mobile loading speed.',
                    color: 'bg-blue-50 text-blue-700 border-blue-200',
                  },
                  {
                    icon: 'edit_note',
                    title: 'Content & Text Changes',
                    desc: 'New banners, pricing adjustments, and form updates included.',
                    color: 'bg-indigo-50 text-indigo-700 border-indigo-200',
                  },
                ].map((item) => (
                  <div 
                    key={item.title}
                    className="flex items-start gap-3 p-3.5 bg-slate-50/80 rounded-xl border border-slate-200/80 transition-all group"
                  >
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border ${item.color} shadow-xs`}>
                      <span className="material-symbols-outlined text-base">
                        {item.icon}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-body-sm text-sm font-bold text-slate-900">{item.title}</h4>
                      <p className="font-label-sm text-xs text-slate-600 mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Founder Direct Guarantee */}
              <div className="pt-3 border-t border-slate-100 flex items-center gap-3 text-xs text-slate-600">
                <span className="material-symbols-outlined text-emerald-600 text-base">verified</span>
                <span>Direct WhatsApp contact with engineer Daksh &bull; 4h response window</span>
              </div>

            </div>

            {/* Right Column: Pricing Retainer Card */}
            <div className="lg:col-span-5">
              <div 
                className="p-6 sm:p-8 bg-slate-50/90 border border-slate-200 rounded-2xl flex flex-col justify-between shadow-xs border-t-4 border-t-emerald-700"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                    <span className="font-mono text-xs text-emerald-800 uppercase tracking-widest font-bold">
                      Monthly Care Retainer
                    </span>
                    <span className="text-[11px] font-mono text-slate-700 bg-white px-2.5 py-0.5 rounded-full border border-slate-200 font-bold">
                      Month-to-Month
                    </span>
                  </div>

                  <div className="mt-4">
                    <h3 className="font-headline-md text-xl font-bold text-slate-900">Standard Website Care</h3>
                    <p className="text-xs text-slate-600 mt-1">
                      Ideal for business websites, landing pages, and service providers.
                    </p>
                  </div>

                  <ul className="space-y-2.5 my-6 text-xs text-slate-800">
                    {[
                      'Weekly off-site automated backups',
                      'Core software & plugin security updates',
                      'Uptime & SSL renewal monitoring',
                      'Up to 2 hours of monthly content updates',
                      'Direct WhatsApp access to Daksh',
                    ].map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-sm text-emerald-600">check_circle</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-200 flex flex-col gap-2">
                  <motion.a 
                    href={getWhatsAppLink("Hello Daksh, I'd like to ask about monthly maintenance for my current website.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-center bg-emerald-800 hover:bg-emerald-900 text-white font-semibold text-xs py-3.5 rounded-xl transition-all shadow-md shadow-emerald-800/20 cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Inquire About Website Care
                  </motion.a>
                  <p className="text-[11px] text-center text-slate-500 font-medium">
                    No long-term contracts &bull; Cancel or pause anytime
                  </p>
                </div>

              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
