import React from 'react';
import { motion } from 'framer-motion';

export const HowWeWork: React.FC = () => {
  const steps = [
    {
      num: "01",
      title: "Understand",
      phase: "Phase: Discovery",
      desc: "A 20-minute diagnosis call directly with Daksh. We pinpoint exact bottlenecks without any confusing tech jargon.",
      accent: "border-t-4 border-t-blue-600",
      numColor: "text-blue-700",
      phaseColor: "bg-blue-50 text-blue-800 border-blue-200",
    },
    {
      num: "02",
      title: "Plan",
      phase: "Phase: Scope & Pricing",
      desc: "A 1-page plain-English scope document with fixed milestone pricing, concrete deliverables, and firm launch date.",
      accent: "border-t-4 border-t-amber-500",
      numColor: "text-amber-600",
      phaseColor: "bg-amber-50 text-amber-800 border-amber-200",
    },
    {
      num: "03",
      title: "Build",
      phase: "Phase: Engineering",
      desc: "Weekly staged previews. You test working software in your actual browser, not static non-functional mockups.",
      accent: "border-t-4 border-t-indigo-600",
      numColor: "text-indigo-600",
      phaseColor: "bg-indigo-50 text-indigo-800 border-indigo-200",
    },
    {
      num: "04",
      title: "Launch",
      phase: "Phase: Deployment",
      desc: "Zero-downtime DNS transfer, SSL installation, and payment gateway activation. Rigorously smoke-tested before live traffic.",
      accent: "border-t-4 border-t-emerald-600",
      numColor: "text-emerald-700",
      phaseColor: "bg-emerald-50 text-emerald-800 border-emerald-200",
    },
    {
      num: "05",
      title: "Support",
      phase: "Phase: Ongoing Care",
      desc: "Continuous monitoring, proactive weekly patching, and direct WhatsApp access whenever you need an update or fix.",
      accent: "border-t-4 border-t-teal-600",
      numColor: "text-teal-700",
      phaseColor: "bg-teal-50 text-teal-800 border-teal-200",
    }
  ];

  return (
    <section className="w-full bg-slate-50/70 py-20 sm:py-24 border-y border-slate-200 scroll-mt-20" id="process">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">

        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <span className="inline-block font-mono text-[11px] uppercase tracking-widest text-emerald-800 font-bold mb-3 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
            Predictable Process
          </span>
          <h2 className="font-headline-xl text-3xl sm:text-4xl text-slate-900 font-bold mt-1 leading-tight">
            How we work together
          </h2>
          <p className="font-body-md text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
            Transparent, milestone-based, and founder-supervised from day one. No surprises or scope creep.
          </p>
        </div>

        {/* 5-Step Process */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
          {steps.map((st) => (
            <motion.div
              key={st.num}
              whileHover={{ y: -4, boxShadow: '0 10px 25px rgba(15,23,42,0.06)' }}
              transition={{ type: 'spring', stiffness: 280, damping: 24 }}
              className={`bg-white p-6 rounded-2xl border border-slate-200/90 flex flex-col justify-between shadow-xs ${st.accent}`}
            >
              <div>
                <span className={`font-mono text-2xl font-extrabold ${st.numColor}`}>
                  {st.num}
                </span>
                <h3 className="font-headline-sm text-base sm:text-lg font-bold text-slate-900 mt-2 mb-1">
                  {st.title}
                </h3>
                <p className="font-body-sm text-xs text-slate-600 leading-relaxed">
                  {st.desc}
                </p>
              </div>

              <div className="pt-3 mt-4 border-t border-slate-100">
                <span className={`inline-block font-mono text-[10px] font-bold px-2 py-0.5 rounded border ${st.phaseColor}`}>
                  {st.phase}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
