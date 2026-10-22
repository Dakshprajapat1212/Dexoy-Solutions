import React from 'react';
import { Link } from 'react-router-dom';
import { FolderGit2, ArrowRight, Clock, CheckCircle } from 'lucide-react';

export const CaseStudiesSection: React.FC = () => {
  return (
    <section id="case-studies" className="py-20 bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold tracking-wider text-indigo-400 uppercase bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20 mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Client Work &bull; Verified Documentation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Case Studies &amp; Project Track Record
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mt-3">
            We document every client implementation through a rigorous framework focusing on the business problem, solution architecture, and verified outcome.
          </p>
        </div>

        {/* Transparent Placeholder Status Card */}
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 border border-slate-800 text-center max-w-3xl mx-auto">
          <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mx-auto mb-4 border border-indigo-500/20">
            <Clock className="w-6 h-6" />
          </div>

          <h3 className="text-xl font-bold text-white mb-2">
            Case studies coming as we complete client projects.
          </h3>

          <p className="text-sm text-slate-300 max-w-xl mx-auto mb-6 leading-relaxed">
            Rather than inventing placeholder logos or fabricated performance metrics, we will publish comprehensive case studies here detailing real client problems and real system architectures.
          </p>

          {/* Standard Case Study Structure Preview */}
          <div className="text-left bg-slate-950/70 border border-slate-800/80 rounded-2xl p-6 mb-6">
            <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-3">
              Standard Case Study Structure We Follow:
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-slate-300">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>01. The Problem</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>02. The Customer</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>03. The Solution</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>04. Technology</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>05. Implementation</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>06. Real Result</span>
              </div>
            </div>
          </div>

          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 px-5 py-2.5 rounded-xl transition-colors shadow-md"
          >
            <span>Discuss Becoming Our Next Client</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
};
