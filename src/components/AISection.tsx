import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Bot, 
  ArrowRight, 
  MessageSquare, 
  FileText, 
  Search, 
  Filter, 
  Sparkles,
  ShieldAlert
} from 'lucide-react';

export const AISection: React.FC = () => {
  const practicalAIExamples = [
    {
      icon: <MessageSquare className="w-5 h-5 text-purple-400" />,
      title: "24/7 Website Customer Assistant",
      problem: "Customers visit your website after business hours, have basic pricing or service questions, and bounce because nobody replies.",
      solution: "We integrate an AI chatbot trained on your exact business catalog, FAQs, and policies that answers accurately in seconds and captures lead contact info."
    },
    {
      icon: <FileText className="w-5 h-5 text-indigo-400" />,
      title: "Document & Invoice Data Extraction",
      problem: "Staff spend hours manually typing data from incoming vendor PDFs, receipts, or forms into internal databases.",
      solution: "AI extracts names, line items, totals, dates, and GST numbers automatically, validating numbers before saving them to your database."
    },
    {
      icon: <Filter className="w-5 h-5 text-emerald-400" />,
      title: "AI Lead Qualification & Routing",
      problem: "Sales representatives waste time on unqualified leads asking irrelevant questions instead of closing serious prospects.",
      solution: "AI asks 3-4 structured qualifying questions, filters non-serious inquiries, and routes high-intent leads straight to your WhatsApp."
    },
    {
      icon: <Search className="w-5 h-5 text-amber-400" />,
      title: "Smart Semantic Search",
      problem: "Customers or staff struggle to find products or knowledge docs when exact keyword spellings don't match.",
      solution: "AI understands conversational intent, finding relevant articles, products, or service packages even with typos or descriptive phrasing."
    }
  ];

  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-purple-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold tracking-wider text-purple-400 uppercase bg-purple-500/10 px-3.5 py-1.5 rounded-full border border-purple-500/20 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Practical &bull; No Hype</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Make Your Business Smarter With AI
          </h2>

          <p className="text-slate-300 text-base sm:text-lg mt-3">
            We don't sell generic AI buzzwords or pretend to build another ChatGPT. We integrate practical, tested AI capabilities into your existing website, customer channels, and business software.
          </p>
        </div>

        {/* AI Philosophy Callout */}
        <div className="mb-14 p-5 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-start space-x-3">
            <div className="w-9 h-9 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center shrink-0 mt-0.5">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">How We Position AI For Your Business</h3>
              <p className="text-xs text-slate-300 mt-0.5">
                AI should eliminate tedious, repetitive tasks and speed up customer response time. It should have strict guardrails and seamless hand-off to your human team when required.
              </p>
            </div>
          </div>
          <div className="shrink-0 flex items-center space-x-2 text-xs text-slate-400">
            <ShieldAlert className="w-4 h-4 text-emerald-400" />
            <span>Strict data privacy &amp; cost controls</span>
          </div>
        </div>

        {/* 4 Practical AI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {practicalAIExamples.map((item, index) => (
            <div 
              key={index} 
              className="p-7 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-purple-500/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-950 flex items-center justify-center border border-slate-800">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white">
                    {item.title}
                  </h3>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
                    <span className="text-xs font-semibold text-rose-300 block mb-1">Business Pain:</span>
                    <p className="text-slate-300 text-xs leading-relaxed">{item.problem}</p>
                  </div>

                  <div className="p-3 rounded-xl bg-purple-950/20 border border-purple-800/30">
                    <span className="text-xs font-semibold text-purple-300 block mb-1">Our Practical AI Solution:</span>
                    <p className="text-slate-200 text-xs leading-relaxed">{item.solution}</p>
                  </div>
                </div>
              </div>

              <div className="pt-5 mt-5 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-xs font-medium text-purple-300">
                  Ready to embed into your current site
                </span>
                <Link
                  to={`/contact?need=AI%20Integration&note=${encodeURIComponent(item.title)}`}
                  className="inline-flex items-center text-xs font-semibold text-purple-400 hover:text-purple-300"
                >
                  <span>Integrate this &rarr;</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <Link
            to="/contact?need=AI%20Integration"
            className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-purple-600 hover:bg-purple-500 shadow-lg shadow-purple-600/20 transition-all"
          >
            <span>Explore AI Solutions for Your Business</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
};
