import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Layers } from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { ServiceCard } from './ServiceCard';

export const ServicesSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'build' | 'manage' | 'ai'>('all');

  const filteredServices = servicesData.filter((service) => {
    if (activeCategory === 'build') {
      return ['website-development', 'web-applications', 'business-software', 'custom-projects'].includes(service.id);
    }
    if (activeCategory === 'manage') {
      return ['website-management', 'hosting-deployment', 'technical-support', 'api-integrations'].includes(service.id);
    }
    if (activeCategory === 'ai') {
      return ['ai-integration', 'business-automation'].includes(service.id);
    }
    return true;
  });

  return (
    <section id="services" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center space-x-2 text-xs font-semibold tracking-wider text-indigo-400 uppercase bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20 mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>Full Service Spectrum</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Core Technology Services
            </h2>
            <p className="text-slate-300 text-base sm:text-lg mt-2 max-w-2xl">
              From building your initial website to developing custom internal software, integrating practical AI, and providing monthly system maintenance.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="mt-6 md:mt-0 flex flex-wrap gap-2">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                activeCategory === 'all'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              All Services ({servicesData.length})
            </button>
            <button
              onClick={() => setActiveCategory('build')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                activeCategory === 'build'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              Web &amp; Software Build
            </button>
            <button
              onClick={() => setActiveCategory('manage')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                activeCategory === 'manage'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              Management &amp; Support
            </button>
            <button
              onClick={() => setActiveCategory('ai')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                activeCategory === 'ai'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              AI &amp; Automation
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Bottom Detailed CTA Banner */}
        <div className="mt-14 p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-white">
              Have a project that spans multiple services?
            </h3>
            <p className="text-sm text-slate-300 mt-1 max-w-xl">
              Many clients combine website development with AI assistants, ongoing monthly management, and automated WhatsApp notifications. We package these seamlessly.
            </p>
          </div>
          <Link
            to="/contact?need=Custom%20Technology%20Project"
            className="shrink-0 inline-flex items-center space-x-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-md shadow-indigo-600/20"
          >
            <span>Request a Custom Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
};
