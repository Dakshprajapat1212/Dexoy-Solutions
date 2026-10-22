import React from 'react';
import { PricingSection } from '../components/PricingSection';
import { ContactForm } from '../components/ContactForm';
import { ShieldCheck, CheckCircle2, CreditCard } from 'lucide-react';

export const PricingPage: React.FC = () => {
  return (
    <div className="bg-slate-950 pt-28">
      
      {/* Header */}
      <section className="py-16 bg-slate-900 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold tracking-wider text-indigo-400 uppercase bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20 mb-3">
            <CreditCard className="w-3.5 h-3.5" />
            <span>Pricing Guide &bull; No Surprises</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Transparent, Milestone-Based Pricing
          </h1>
          <p className="text-slate-300 text-base sm:text-lg mt-4 leading-relaxed">
            Every business project has distinct needs. We provide realistic, honest cost estimates with clearly defined milestones before writing a single line of code.
          </p>
        </div>
      </section>

      {/* Main Pricing Grid */}
      <PricingSection />

      {/* How Payment Works */}
      <section className="py-16 bg-slate-900 border-t border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              How Project Payment Works
            </h2>
            <p className="text-slate-400 text-sm mt-2">
              Fair, milestone-linked payments ensuring you only pay for completed, verified work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800">
              <span className="text-xs font-mono font-bold text-indigo-400">STAGE 01</span>
              <h3 className="text-base font-bold text-white mt-1 mb-2">Project Kickoff</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Initial deposit upon agreeing on the detailed scope of work, technical architecture, and project milestones.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800">
              <span className="text-xs font-mono font-bold text-indigo-400">STAGE 02</span>
              <h3 className="text-base font-bold text-white mt-1 mb-2">Staging &amp; Demo</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Milestone payment after previewing the functional application or website on a private staging link.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800">
              <span className="text-xs font-mono font-bold text-indigo-400">STAGE 03</span>
              <h3 className="text-base font-bold text-white mt-1 mb-2">Production Launch</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Final payment after live server deployment, domain DNS setup, SSL configuration, and full source code handover.
              </p>
            </div>
          </div>

          <div className="mt-8 p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-center justify-between text-xs text-slate-300">
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Full code and database ownership transferred to you upon final payment.</span>
            </div>
            <div className="flex items-center space-x-2 text-slate-400">
              <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
              <span>Tax invoices provided</span>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <ContactForm />

    </div>
  );
};
