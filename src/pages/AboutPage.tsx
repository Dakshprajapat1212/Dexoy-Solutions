import React from 'react';
import { Link } from 'react-router-dom';
import { 
  siteConfig, 
  getWhatsAppLink 
} from '../config/siteConfig';
import { 
  Users, 
  ArrowRight, 
  MessageSquare, 
  CheckCircle2, 
  MapPin, 
  ShieldCheck, 
  Target
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="bg-slate-950 pt-28">
      
      {/* Header */}
      <section className="py-20 bg-slate-900 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold tracking-wider text-indigo-400 uppercase bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20 mb-3">
            <Users className="w-3.5 h-3.5" />
            <span>Company &amp; Founders</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
            Building Practical Technology Solutions for Real Businesses.
          </h1>

          <p className="text-slate-300 text-base sm:text-lg mt-5 leading-relaxed">
            {siteConfig.companyName} was created with a clear purpose: to help businesses, startups, and professionals build, manage, and automate their digital systems without unnecessary technical complexity or corporate bureaucracy.
          </p>
        </div>
      </section>

      {/* Origin & Philosophy */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center">
                <Target className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-white">Why We Started</h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Many businesses we met struggled with the same problems: an agency charged high fees for an overly complex website that didn&rsquo;t work on mobile; a previous developer built custom software and then disappeared; or daily operations were trapped in fragile Excel spreadsheets and personal WhatsApp chats.
              </p>
              <p className="text-sm text-slate-300 leading-relaxed">
                We started this company to be the honest, dependable technical partner businesses can call directly—whether you need a fast lead-generating website, an automated customer workflow, or dependable monthly server maintenance.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-white">Our Honest Position</h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                We are starting as an agile, focused technology company. We do not pretend to be a massive multinational corporation with hundreds of offshore offices, nor do we invent artificial awards or fake client testimonials.
              </p>
              <p className="text-sm text-slate-300 leading-relaxed">
                Our strength is accessibility, speed, and personal accountability. When you work with us, you work directly with the founder who designs your architecture and builds your systems.
              </p>
            </div>
          </div>

          {/* Founder Section */}
          <div className="pt-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Company Leadership
              </h2>
              <p className="text-slate-400 text-sm mt-2">
                Direct founder leadership and technical execution.
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              
              {/* Founder: Daksh Prajapat */}
              <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all">
                <div className="flex items-center space-x-4 mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-indigo-600 to-blue-500 text-white font-bold text-lg flex items-center justify-center shrink-0 shadow-md">
                    DP
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      Daksh Prajapat
                    </h3>
                    <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider">
                      Founder &amp; CEO
                    </span>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Computer Science &bull; Poornima University, Jaipur
                    </p>
                  </div>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed">
                  Focuses on software architecture, modern web development, infrastructure, and automation. Over time, works with Linux, Git, Python, Java, C++, JavaScript, Node.js, MongoDB, AWS, Docker, Terraform, Ansible, Jenkins, and server management to solve real-world business challenges.
                </p>

                <div className="mt-5 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <span>Direct Technical Consultation</span>
                  <span className="text-emerald-400 font-semibold">Available for Projects</span>
                </div>
              </div>

            </div>
          </div>

          {/* Operating Principles */}
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/60 border border-slate-800">
            <h3 className="text-lg font-bold text-white mb-6 text-center">
              Our 5 Core Principles
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-xs text-slate-300">
              <div className="space-y-1.5">
                <div className="flex items-center space-x-2 font-bold text-white text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>01. Practical Solutions First</span>
                </div>
                <p className="text-slate-400 leading-relaxed">
                  We recommend the simplest tool that solves the problem. No unnecessary technology just to inflate project invoices.
                </p>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center space-x-2 font-bold text-white text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>02. Plain Business Language</span>
                </div>
                <p className="text-slate-400 leading-relaxed">
                  We explain options in clear terms of business impact, timeline, and cost, avoiding confusing jargon.
                </p>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center space-x-2 font-bold text-white text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>03. Full Code Ownership</span>
                </div>
                <p className="text-slate-400 leading-relaxed">
                  You own all source code, databases, and accounts upon project completion. Zero vendor lock-in.
                </p>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center space-x-2 font-bold text-white text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>04. Transparent Pricing</span>
                </div>
                <p className="text-slate-400 leading-relaxed">
                  Clear, itemized milestone quotes before writing any code. No surprise bills or hidden fees.
                </p>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center space-x-2 font-bold text-white text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>05. Long-term Reliability</span>
                </div>
                <p className="text-slate-400 leading-relaxed">
                  We don't abandon clients after launch. We provide ongoing maintenance, security updates, and troubleshooting.
                </p>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center space-x-2 font-bold text-white text-sm">
                  <MapPin className="w-4 h-4 text-indigo-400" />
                  <span>Local &amp; Remote</span>
                </div>
                <p className="text-slate-400 leading-relaxed">
                  Headquartered in Jaipur, Rajasthan. Serving businesses locally and across India remotely via video &amp; WhatsApp.
                </p>
              </div>
            </div>
          </div>

          {/* Action Callout */}
          <div className="text-center pt-6">
            <h3 className="text-xl font-bold text-white mb-3">
              Ready to work with a practical technology partner?
            </h3>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-md transition-colors"
              >
                <span>Schedule a Founder Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={getWhatsAppLink("Hello Daksh, I would like to consult with you on a technology requirement.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 hover:bg-emerald-500/20 transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat Directly on WhatsApp</span>
              </a>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
