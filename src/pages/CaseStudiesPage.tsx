import React from 'react';
import { CaseStudiesSection } from '../components/CaseStudiesSection';
import { ContactForm } from '../components/ContactForm';
import { FolderGit2, CheckCircle2 } from 'lucide-react';

export const CaseStudiesPage: React.FC = () => {
  return (
    <div className="bg-slate-950 pt-28">
      
      {/* Header */}
      <section className="py-16 bg-slate-900 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold tracking-wider text-indigo-400 uppercase bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20 mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Honest Documentation</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Case Studies &amp; Client Projects
          </h1>
          <p className="text-slate-300 text-base sm:text-lg mt-4 leading-relaxed">
            We hold ourselves to a strict standard of truth: we will only publish real, verified client case studies as projects are delivered.
          </p>
        </div>
      </section>

      {/* Case Studies Section */}
      <CaseStudiesSection />

      {/* Case Study Methodology */}
      <section className="py-16 bg-slate-900 border-t border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-white">
              Our Documentation Framework
            </h2>
            <p className="text-slate-400 text-sm mt-1">
              Every client engagement is measured against concrete business metrics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800">
              <span className="text-xs font-mono font-bold text-indigo-400">01</span>
              <h3 className="text-sm font-bold text-white mt-1 mb-1">The Problem</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                The operational friction, manual bottleneck, or missed revenue opportunity the client faced before contacting us.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800">
              <span className="text-xs font-mono font-bold text-indigo-400">02</span>
              <h3 className="text-sm font-bold text-white mt-1 mb-1">The Customer</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Business category, operational size, and customer base (with permission from the client).
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800">
              <span className="text-xs font-mono font-bold text-indigo-400">03</span>
              <h3 className="text-sm font-bold text-white mt-1 mb-1">The Solution</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                The minimum practical system designed to eliminate the bottleneck without excessive complexity.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800">
              <span className="text-xs font-mono font-bold text-indigo-400">04</span>
              <h3 className="text-sm font-bold text-white mt-1 mb-1">Technology</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Exact stack used (React, Node.js, PostgreSQL, Linux VPS, Nginx, WhatsApp API, OpenAI) and why it was selected.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800">
              <span className="text-xs font-mono font-bold text-indigo-400">05</span>
              <h3 className="text-sm font-bold text-white mt-1 mb-1">Implementation</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Development timeline, staging reviews, data migration from Excel/legacy systems, and team onboarding.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800">
              <span className="text-xs font-mono font-bold text-indigo-400">06</span>
              <h3 className="text-sm font-bold text-white mt-1 mb-1">Real Results</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Hours saved per week, inquiries converted, uptime performance, and client team feedback.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center text-xs text-slate-400 flex items-center justify-center space-x-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Case studies will only feature verified clients with signed consent.</span>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <ContactForm />

    </div>
  );
};
