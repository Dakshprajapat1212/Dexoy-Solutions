import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, AlertCircle } from 'lucide-react';
import { ServiceItem } from '../data/servicesData';

interface ServiceCardProps {
  service: ServiceItem;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all p-7 flex flex-col justify-between group">
      <div>
        {/* Top Header Badge */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-mono font-bold text-indigo-400 bg-indigo-500/10 px-2.5 py-1 rounded-md border border-indigo-500/20">
            {service.number}
          </span>
          <span className="text-xs text-slate-400 font-medium bg-slate-950 px-2.5 py-1 rounded-md border border-slate-800">
            {service.priceNote}
          </span>
        </div>

        {/* Title & Short Description */}
        <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
          {service.title}
        </h3>
        
        <p className="text-slate-300 text-sm mt-2 leading-relaxed">
          {service.shortDesc}
        </p>

        {/* Problem Solved Callout */}
        <div className="mt-4 p-3 rounded-xl bg-slate-950/80 border border-slate-800/80 flex items-start space-x-2.5">
          <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <p className="text-xs text-slate-300 leading-normal">
            <strong className="text-amber-300 font-medium">Common Issue:</strong> {service.problemSolved}
          </p>
        </div>

        {/* Deliverables / Examples */}
        <div className="mt-5">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2.5">
            Typical Deliverables:
          </h4>
          <ul className="space-y-1.5">
            {service.examples.slice(0, 4).map((ex, i) => (
              <li key={i} className="text-xs text-slate-300 flex items-start space-x-2">
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>{ex}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Card Footer CTA */}
      <div className="pt-6 mt-6 border-t border-slate-800">
        <Link
          to={`/contact?need=${encodeURIComponent(service.ctaIntent)}`}
          className="w-full inline-flex items-center justify-center space-x-2 py-2.5 px-4 rounded-xl text-sm font-semibold text-white bg-slate-800 hover:bg-indigo-600 transition-all shadow-sm"
        >
          <span>{service.ctaText}</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};
