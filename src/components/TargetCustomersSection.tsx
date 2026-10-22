import React from 'react';
import { targetCustomerGroups } from '../data/servicesData';
import { Users, Check } from 'lucide-react';

export const TargetCustomersSection: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold tracking-wider text-indigo-400 uppercase bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20 mb-3">
            <Users className="w-3.5 h-3.5" />
            <span>Who We Help</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Built For Real Businesses &amp; Founders
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mt-3">
            Whether you run a local clinic in Rajasthan, a fast-growing Indian D2C brand, or an independent consultancy, we provide practical technology that fits your scale.
          </p>
        </div>

        {/* 4 Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {targetCustomerGroups.map((group, index) => (
            <div 
              key={index} 
              className="p-7 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {group.category}
                </h3>
                <p className="text-sm text-slate-300 mb-5 leading-relaxed">
                  {group.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-slate-800/80">
                  {group.types.map((type, i) => (
                    <div key={i} className="flex items-center space-x-2 text-xs text-slate-200">
                      <Check className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                      <span>{type}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
