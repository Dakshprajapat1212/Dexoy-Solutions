import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  RefreshCw, 
  Zap, 
  Lock, 
  HardDrive
} from 'lucide-react';

export const MaintenanceSection: React.FC = () => {
  const maintenanceFeatures = [
    {
      icon: <RefreshCw className="w-5 h-5 text-indigo-400" />,
      title: "Content & Banner Updates",
      desc: "Need new products added, seasonal promotions posted, or pricing updated? Send it to us and it's done."
    },
    {
      icon: <Lock className="w-5 h-5 text-emerald-400" />,
      title: "Security & SSL Renewals",
      desc: "Proactive security patching, free SSL certificate renewal, and firewall monitoring to prevent malware infections."
    },
    {
      icon: <HardDrive className="w-5 h-5 text-amber-400" />,
      title: "Scheduled Backups",
      desc: "Automated daily/weekly backups stored securely in the cloud, so your website can be restored in minutes if anything happens."
    },
    {
      icon: <Zap className="w-5 h-5 text-purple-400" />,
      title: "Speed & Performance Tuning",
      desc: "Image compression, caching setup, and database optimization to keep your loading times fast for mobile visitors."
    }
  ];

  return (
    <section className="py-20 bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="rounded-3xl bg-slate-950 border border-slate-800 p-8 sm:p-12 lg:p-16 relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center space-x-2 text-xs font-semibold tracking-wider text-emerald-400 uppercase bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Ongoing Peace of Mind</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Already Have a Website? We Can Manage It.
              </h2>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                You don't need to rebuild everything from scratch. If your business already has a functional website or software application, we can take over day-to-day maintenance, troubleshooting, security, and updates.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  "No need for a full-time in-house developer",
                  "Direct WhatsApp access for urgent issues",
                  "Fixed monthly maintenance fee (Starting from ₹X)",
                  "Proactive monitoring before downtime strikes"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact?need=Website%20Management"
                  className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-emerald-600 hover:bg-emerald-500 shadow-md shadow-emerald-600/20 transition-colors"
                >
                  <span>Get Website Support</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/contact?need=Technical%20Support"
                  className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl font-semibold text-slate-300 bg-slate-900 hover:bg-slate-800 border border-slate-800 transition-colors"
                >
                  <span>Need an Urgent Fix?</span>
                </Link>
              </div>

            </div>

            {/* Right Feature Grid */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {maintenanceFeatures.map((feat, i) => (
                <div key={i} className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="w-9 h-9 rounded-lg bg-slate-950 flex items-center justify-center border border-slate-800 mb-3">
                    {feat.icon}
                  </div>
                  <h3 className="text-sm font-bold text-white mb-1">
                    {feat.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
