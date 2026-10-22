import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { servicesData, ServiceItem } from '../data/servicesData';
import { 
  Check, 
  ArrowRight, 
  AlertCircle, 
  Layers
} from 'lucide-react';
import { ContactForm } from '../components/ContactForm';

export const ServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filtered = servicesData.filter((item: ServiceItem) => {
    if (selectedCategory === 'web') {
      return ['website-development', 'web-applications', 'business-software'].includes(item.id);
    }
    if (selectedCategory === 'ai-automation') {
      return ['ai-integration', 'business-automation'].includes(item.id);
    }
    if (selectedCategory === 'support-infra') {
      return ['website-management', 'hosting-deployment', 'technical-support', 'api-integrations', 'custom-projects'].includes(item.id);
    }
    return true;
  });

  return (
    <div className="bg-slate-950 pt-28">
      
      {/* Header */}
      <section className="py-16 bg-slate-900 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold tracking-wider text-indigo-400 uppercase bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20 mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Complete Capabilities</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Our Technology Services
          </h1>
          <p className="text-slate-300 text-base sm:text-lg mt-4 leading-relaxed">
            We provide practical technology solutions to businesses, startups, local retailers, professionals, and growing operations. Every service is delivered with direct founder oversight.
          </p>

          {/* Filter Pill Controls */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-colors ${
                selectedCategory === 'all'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              All 10 Core Services
            </button>
            <button
              onClick={() => setSelectedCategory('web')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-colors ${
                selectedCategory === 'web'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              Websites &amp; Custom Software
            </button>
            <button
              onClick={() => setSelectedCategory('ai-automation')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-colors ${
                selectedCategory === 'ai-automation'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              AI &amp; Business Automation
            </button>
            <button
              onClick={() => setSelectedCategory('support-infra')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-colors ${
                selectedCategory === 'support-infra'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              Management, Cloud &amp; Support
            </button>
          </div>
        </div>
      </section>

      {/* Services Detailed List */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {filtered.map((service) => (
            <div 
              key={service.id}
              id={service.id}
              className="p-8 sm:p-10 rounded-3xl bg-slate-900 border border-slate-800 scroll-mt-28"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left Overview */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-xs font-mono font-bold text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-md border border-indigo-500/20">
                      SERVICE {service.number}
                    </span>
                    <span className="text-xs font-medium text-slate-400 bg-slate-950 px-3 py-1 rounded-md border border-slate-800">
                      {service.priceNote}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-bold text-white">
                    {service.title}
                  </h2>

                  <p className="text-slate-300 text-base leading-relaxed">
                    {service.fullDesc}
                  </p>

                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 flex items-start space-x-3">
                    <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-xs font-semibold text-amber-300 uppercase tracking-wider block">
                        Problem We Solve:
                      </strong>
                      <p className="text-xs text-slate-300 mt-0.5">
                        {service.problemSolved}
                      </p>
                    </div>
                  </div>

                  <div className="pt-2">
                    <Link
                      to={`/contact?need=${encodeURIComponent(service.ctaIntent)}`}
                      className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-md transition-colors"
                    >
                      <span>{service.ctaText}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                {/* Right Deliverables & Technical Scope */}
                <div className="lg:col-span-5 space-y-6 bg-slate-950/70 p-6 rounded-2xl border border-slate-800/80">
                  
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-3">
                      Example Deliverables:
                    </h3>
                    <ul className="space-y-2">
                      {service.examples.map((ex, i) => (
                        <li key={i} className="text-xs text-slate-300 flex items-start space-x-2">
                          <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{ex}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-slate-800">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                      Core Technical Capabilities:
                    </h3>
                    <ul className="space-y-2">
                      {service.capabilities.map((cap, i) => (
                        <li key={i} className="text-xs text-slate-400 flex items-start space-x-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0 mt-1.5" />
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Inquiry Form */}
      <ContactForm />

    </div>
  );
};
