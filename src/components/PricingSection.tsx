import React from 'react';
import { Link } from 'react-router-dom';
import { pricingTiers } from '../data/servicesData';
import { ArrowRight, Check, Info } from 'lucide-react';

export const PricingSection: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-wider text-indigo-400 uppercase bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
            Transparent Estimates
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mt-3">
            Clear, Practical Pricing
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mt-3">
            We provide upfront, honest cost estimates based on real deliverables. No hidden surcharges, no unnecessary tech overhead.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pricingTiers.map((tier, idx) => (
            <div 
              key={idx}
              className="p-7 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-1">
                  {tier.billingType}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {tier.service}
                </h3>
                
                <div className="py-3 my-2 border-t border-b border-slate-800">
                  <div className="text-2xl font-bold text-white">
                    {tier.startingRate}
                  </div>
                  <span className="text-xs text-slate-400">
                    Transparent milestone-based delivery
                  </span>
                </div>

                <p className="text-xs text-slate-300 mt-2 mb-4 leading-relaxed">
                  {tier.description}
                </p>

                <div className="space-y-2 mt-4">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                    Includes:
                  </span>
                  {tier.features.map((f, i) => (
                    <div key={i} className="flex items-start space-x-2 text-xs text-slate-300">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800">
                <Link
                  to={`/contact?need=${encodeURIComponent(tier.ctaIntent)}`}
                  className="w-full inline-flex items-center justify-center space-x-2 py-2.5 px-4 rounded-xl text-sm font-semibold text-white bg-slate-800 hover:bg-indigo-600 transition-colors"
                >
                  <span>Request Specific Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Policy Disclaimer Note */}
        <div className="mt-12 p-5 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-start space-x-3 max-w-3xl mx-auto">
          <Info className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
          <div className="text-xs text-slate-300 leading-relaxed">
            <strong className="text-white">Pricing Transparency Note:</strong> Final pricing depends on exact requirements, feature complexity, third-party integrations, and whether ongoing support is desired. After an initial consultation, we provide an itemized proposal with clear milestones before any work commences.
          </div>
        </div>

      </div>
    </section>
  );
};
