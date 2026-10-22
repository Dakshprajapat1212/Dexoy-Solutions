import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { getWhatsAppLink } from '../config/siteConfig';

export const ProblemMatrix: React.FC = () => {
  const [selectedProblemIndex, setSelectedProblemIndex] = useState<number | null>(null);

  const problems = [
    {
      icon: 'public_off',
      quote: "My website looks dated or isn't bringing in customers.",
      solution: "We design and build clean, conversion-focused websites that load instantly on mobile, position your business with authority, and turn visitors into qualified calls and inquiries.",
      serviceTag: "Website Build & Optimization",
      timeframe: "5–10 Business Days",
      whatsappMsg: "Hello Daksh, our website is outdated and not generating leads. Can we discuss a redesign?",
      color: "bg-blue-50 text-blue-700 border-blue-200/80",
      pillColor: "bg-blue-50 text-blue-800 border-blue-200",
      accentBorder: "border-t-4 border-t-blue-600",
      actionColor: "text-blue-700",
    },
    {
      icon: 'schedule',
      quote: "We spend hours copying WhatsApp orders and emails into spreadsheets.",
      solution: "We connect your communication channels directly to your database, automatically generating invoices, notifying staff, and keeping records in sync without manual entry.",
      serviceTag: "Workflow Automation",
      timeframe: "3–7 Days Setup",
      whatsappMsg: "Hello Daksh, we spend too much time copying customer orders manually into spreadsheets. Can you automate this?",
      color: "bg-amber-50 text-amber-700 border-amber-200/80",
      pillColor: "bg-amber-50 text-amber-800 border-amber-200",
      accentBorder: "border-t-4 border-t-amber-500",
      actionColor: "text-amber-700",
    },
    {
      icon: 'table_chart',
      quote: "Our team has outgrown spreadsheets and needs a real internal tool.",
      solution: "We build intuitive web portals, staff dashboards, and inventory/order trackers customized precisely to your business workflow with role-based access.",
      serviceTag: "Custom Web Application",
      timeframe: "2–4 Weeks Build",
      whatsappMsg: "Hello Daksh, our team needs a custom web dashboard/portal to manage our business operations.",
      color: "bg-indigo-50 text-indigo-700 border-indigo-200/80",
      pillColor: "bg-indigo-50 text-indigo-800 border-indigo-200",
      accentBorder: "border-t-4 border-t-indigo-600",
      actionColor: "text-indigo-700",
    },
    {
      icon: 'warning',
      quote: "Our current website keeps crashing or hasn't been updated in months.",
      solution: "We handle security patches, SSL renewals, automated off-site backups, and content updates so you never have to panic about downtime or broken plugins.",
      serviceTag: "Website Management & Maintenance",
      timeframe: "Monthly Retainer",
      whatsappMsg: "Hello Daksh, our website has maintenance/bug issues. I want to ask about monthly maintenance.",
      color: "bg-rose-50 text-rose-700 border-rose-200/80",
      pillColor: "bg-rose-50 text-rose-800 border-rose-200",
      accentBorder: "border-t-4 border-t-rose-500",
      actionColor: "text-rose-700",
    },
    {
      icon: 'smart_toy',
      quote: "We want to use AI for customer queries, but don't know where to start.",
      solution: "We embed practical AI assistants trained exclusively on your business FAQs, product catalog, and pricing to handle repetitive customer questions 24/7 on WhatsApp or your website.",
      serviceTag: "Practical AI Integration",
      timeframe: "1–2 Weeks Setup",
      whatsappMsg: "Hello Daksh, we want an automated WhatsApp/website assistant to answer repetitive customer FAQs.",
      color: "bg-emerald-50 text-emerald-700 border-emerald-200/80",
      pillColor: "bg-emerald-50 text-emerald-800 border-emerald-200",
      accentBorder: "border-t-4 border-t-emerald-600",
      actionColor: "text-emerald-700",
    },
    {
      icon: 'cloud_off',
      quote: "Our cloud hosting bill is confusing and we worry about data safety.",
      solution: "We audit, configure, and manage your cloud servers on AWS or reliable Linux VPS instances with automated failover, daily snapshots, and zero unnecessary markup.",
      serviceTag: "Cloud & Infrastructure Setup",
      timeframe: "2–5 Days Migration",
      whatsappMsg: "Hello Daksh, we need help auditing and managing our cloud hosting and server setup.",
      color: "bg-sky-50 text-sky-700 border-sky-200/80",
      pillColor: "bg-sky-50 text-sky-800 border-sky-200",
      accentBorder: "border-t-4 border-t-sky-500",
      actionColor: "text-sky-700",
    }
  ];

  return (
    <section id="problems" className="w-full bg-slate-50/70 py-20 sm:py-24 border-y border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">

        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <span className="inline-block font-mono text-[11px] uppercase tracking-widest text-emerald-800 font-bold mb-3 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
            Self-Diagnostic Matrix
          </span>
          <h2 className="font-headline-xl text-3xl sm:text-4xl text-slate-900 font-bold mt-1 leading-tight">
            What are you trying to solve?
          </h2>
          <p className="font-body-md text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
            Select the hurdle your business is currently facing to see the exact outcome and direct turnaround.
          </p>
        </div>

        {/* 6 Problem Cards Grid with Vibrant Colors */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {problems.map((prob, idx) => {
            const isSelected = selectedProblemIndex === idx;
            return (
              <motion.div
                key={prob.serviceTag}
                onClick={() => setSelectedProblemIndex(isSelected ? null : idx)}
                whileHover={{ y: -4, boxShadow: '0 12px 30px rgba(15,23,42,0.08)' }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                className={`p-6 rounded-2xl bg-white border transition-all flex flex-col justify-between shadow-xs cursor-pointer ${prob.accentBorder} ${
                  isSelected
                    ? 'ring-2 ring-emerald-600/40 border-slate-300'
                    : 'border-slate-200/90 hover:border-slate-300'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center border shadow-xs ${prob.color}`}>
                      <span className="material-symbols-outlined text-xl">{prob.icon}</span>
                    </div>
                    <span className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full font-bold border ${prob.pillColor}`}>
                      {prob.timeframe}
                    </span>
                  </div>

                  <h3 className="font-headline-sm text-base font-bold text-slate-900 leading-snug">
                    &ldquo;{prob.quote}&rdquo;
                  </h3>
                  <p className="font-body-sm text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed">
                    {prob.solution}
                  </p>
                </div>

                <div className="pt-4 mt-5 border-t border-slate-100 flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-slate-800">
                    {prob.serviceTag}
                  </span>
                  <a
                    href={getWhatsAppLink(prob.whatsappMsg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className={`inline-flex items-center gap-1 text-xs font-bold ${prob.actionColor} hover:underline`}
                  >
                    <span>Fix this &rarr;</span>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Direct Route Banner */}
        <div className="mt-8 p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-xs">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
            <p className="text-xs sm:text-sm font-medium text-slate-800">
              Not sure which category fits your need? Just describe what's slowing your business down.
            </p>
          </div>
          <a
            href={getWhatsAppLink("Hello Daksh, I have a technical bottleneck in my business and want to ask your advice.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-emerald-700 hover:text-emerald-800 hover:underline shrink-0"
          >
            <span>Ask Daksh on WhatsApp &rarr;</span>
          </a>
        </div>

      </div>
    </section>
  );
};
