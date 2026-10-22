import React from 'react';
import { 
  ShieldCheck, 
  UserCheck, 
  FileCheck, 
  Cpu, 
  CreditCard, 
  Headphones, 
  Terminal, 
  HelpCircle
} from 'lucide-react';

export const TrustSection: React.FC = () => {
  const trustPillars = [
    {
      icon: <UserCheck className="w-5 h-5 text-indigo-400" />,
      title: "Direct Founder Access",
      desc: "You talk directly with Founder & CEO Daksh Prajapat. No account managers playing telephone."
    },
    {
      icon: <FileCheck className="w-5 h-5 text-emerald-400" />,
      title: "Clear, Itemized Scope",
      desc: "Every feature and deliverable is agreed upon in writing before coding begins. No surprises or scope creep."
    },
    {
      icon: <Cpu className="w-5 h-5 text-purple-400" />,
      title: "No Unnecessary Technology",
      desc: "We won't sell you complex microservices or enterprise bloat when a clean, simple website or database does the job."
    },
    {
      icon: <CreditCard className="w-5 h-5 text-amber-400" />,
      title: "Milestone-Based Payment",
      desc: "Payments are linked to measurable milestones. You preview and test working software before completing final payments."
    },
    {
      icon: <Terminal className="w-5 h-5 text-cyan-400" />,
      title: "100% Code & Asset Ownership",
      desc: "You own all source code, database schemas, accounts, and domain assets. We never lock your business into proprietary traps."
    },
    {
      icon: <Headphones className="w-5 h-5 text-rose-400" />,
      title: "Reliable Ongoing Support",
      desc: "We don't disappear after deployment. We offer ongoing maintenance, updates, backups, and emergency fixes."
    }
  ];

  return (
    <section className="py-20 bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold tracking-wider text-emerald-400 uppercase bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Honest &bull; Transparent</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            How We Build Real Trust
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mt-3">
            As a focused technology company, we earn client trust through transparency, honest technical advice, and disciplined execution.
          </p>
        </div>

        {/* 6 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustPillars.map((pillar, i) => (
            <div 
              key={i}
              className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-slate-700 transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center border border-slate-800 mb-4">
                {pillar.icon}
              </div>
              <h3 className="text-base font-bold text-white mb-2">
                {pillar.title}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Founder Transparency Notice */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-950/60 border border-slate-800/80 max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 text-xs text-indigo-400 mb-2">
            <HelpCircle className="w-4 h-4" />
            <span className="font-semibold">Our Policy on Reviews &amp; References</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            We do not manufacture fake reviews, fake client logos, or fabricated revenue claims. Real case studies and verified client references will be published transparently as projects are completed.
          </p>
        </div>

      </div>
    </section>
  );
};
