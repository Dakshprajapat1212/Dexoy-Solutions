import React from 'react';
import { processSteps } from '../data/servicesData';
import { GitCommit } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold tracking-wider text-indigo-400 uppercase bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20 mb-3">
            <GitCommit className="w-3.5 h-3.5" />
            <span>How We Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            From Idea to Running System
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mt-3">
            A structured, transparent delivery methodology that eliminates confusion and keeps you in full control at every stage.
          </p>
        </div>

        {/* 6 Process Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {processSteps.map((step, idx) => (
            <div 
              key={idx}
              className="p-7 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 relative overflow-hidden group transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-mono font-extrabold text-indigo-400">
                  {step.step}
                </span>
                <span className="text-xs uppercase tracking-wider font-semibold text-slate-400">
                  Phase {idx + 1}
                </span>
              </div>

              <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                {step.title}
              </h3>

              <h4 className="text-xs font-semibold text-slate-300 mt-1 mb-2.5">
                {step.headline}
              </h4>

              <p className="text-xs text-slate-400 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
