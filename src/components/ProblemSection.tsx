import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Globe, 
  LayoutDashboard, 
  Wrench, 
  Zap, 
  Bot, 
  ShieldCheck, 
  Server, 
  Lightbulb, 
  AlertTriangle,
  ArrowRight
} from 'lucide-react';
import { customerProblems } from '../data/servicesData';

const iconMap: Record<string, React.ReactNode> = {
  Globe: <Globe className="w-5 h-5" />,
  LayoutDashboard: <LayoutDashboard className="w-5 h-5" />,
  Wrench: <Wrench className="w-5 h-5" />,
  Zap: <Zap className="w-5 h-5" />,
  Bot: <Bot className="w-5 h-5" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5" />,
  Server: <Server className="w-5 h-5" />,
  Lightbulb: <Lightbulb className="w-5 h-5" />,
  AlertTriangle: <AlertTriangle className="w-5 h-5" />
};

export const ProblemSection: React.FC = () => {
  return (
    <section id="solve" className="py-20 bg-slate-900 border-t border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-semibold tracking-wider text-indigo-400 uppercase bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
            Identify Your Goal
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3">
            What Are You Trying to Solve?
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mt-3">
            Choose what best describes your current requirement. We'll direct you to the most practical solution.
          </p>
        </div>

        {/* 9 Problem Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {customerProblems.map((item, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-2xl bg-slate-950/70 border border-slate-800 hover:border-indigo-500/50 hover:bg-slate-950 transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-slate-900 text-indigo-400 flex items-center justify-center border border-slate-800 group-hover:bg-indigo-600 group-hover:text-white transition-colors mb-4">
                  {iconMap[item.icon] || <Globe className="w-5 h-5" />}
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                  &ldquo;{item.question}&rdquo;
                </h3>

                <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-xs font-medium text-slate-400">
                  {item.serviceTitle}
                </span>

                <Link
                  to={`/contact?need=${encodeURIComponent(item.serviceTitle)}`}
                  className="inline-flex items-center text-xs font-semibold text-indigo-400 group-hover:text-indigo-300 group-hover:translate-x-0.5 transition-all"
                >
                  <span>Solve This</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Not Sure Prompt */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-slate-950/40 border border-slate-800 max-w-2xl mx-auto">
          <p className="text-sm text-slate-300">
            <span className="font-semibold text-white">Not sure what category your problem falls under?</span> Describe your situation in plain words and we will recommend the right approach.
          </p>
          <div className="mt-4">
            <Link
              to="/contact?need=Not%20Sure"
              className="inline-flex items-center space-x-2 text-sm font-semibold text-indigo-400 hover:text-indigo-300"
            >
              <span>Explain your idea or problem &rarr;</span>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};
