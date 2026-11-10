"use client";

import React from "react";
import { Award, ShieldCheck, HeartHandshake, Sparkles, Building2, Quote, CheckCircle2, MapPin, Mail, Phone } from "lucide-react";

export default function LeadershipSection() {
  const values = [
    {
      title: "Integrity & Fairness",
      desc: "Every candidate and client engagement is governed by uncompromising transparency, ethical conduct, and zero bias.",
      icon: ShieldCheck,
    },
    {
      title: "Precision Matching",
      desc: "We look beyond resume keywords to analyze cultural resonance, leadership temperament, and long-term retention.",
      icon: Sparkles,
    },
    {
      title: "Regulatory Guardianship",
      desc: "Guarding our client partners with rigorous statutory adherence across labor laws, PF/ESIC, and workplace equity.",
      icon: Award,
    },
    {
      title: "Enduring Partnerships",
      desc: "Over 85% of our business stems from repeat multi-year retainers and executive client referrals.",
      icon: HeartHandshake,
    },
  ];

  return (
    <section id="leadership" className="py-20 lg:py-28 bg-[#FAF7F2] relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-stone-300 text-xs font-bold text-blue-700 mb-3 shadow-xs">
            <Building2 className="w-3.5 h-3.5" />
            <span>Leadership &amp; Corporate Vision</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Guided by Over a Decade of HR Mastery
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            Founded with the conviction that high-performing organizations shouldn&apos;t be held back by recruitment delays or compliance liabilities.
          </p>
        </div>

        {/* Founder Spotlight Card in Crisp White */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200 shadow-xl relative overflow-hidden mb-16">
          {/* Subtle background ambient image */}
          <div 
            className="absolute inset-0 opacity-[0.03] bg-cover bg-center pointer-events-none"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80')`
            }}
          ></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative">
            
            {/* Founder Visual with Authentic Executive Portrait Photo */}
            <div className="lg:col-span-4 flex flex-col items-center text-center">
              <div className="relative group">
                <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-3xl overflow-hidden p-1 bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-500 shadow-xl shadow-blue-600/15">
                  <div className="w-full h-full rounded-[22px] overflow-hidden bg-white relative">
                    <img
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
                      alt="Ritika Saxena - Founder & Managing Director"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
                  </div>
                </div>

                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-blue-600 text-white font-extrabold text-xs shadow-md flex items-center gap-1.5 whitespace-nowrap">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>10+ Yrs Executive HR</span>
                </div>
              </div>

              <div className="mt-7 text-center">
                <h3 className="text-2xl font-extrabold text-slate-900">Ritika Saxena</h3>
                <p className="text-xs font-bold text-blue-700 uppercase tracking-wider mt-0.5">
                  Founder &amp; Managing Director
                </p>
                <p className="text-[11px] text-slate-500 font-medium mt-1">
                  SRV Headhunt Private Limited
                </p>
                <div className="flex items-center justify-center gap-3 mt-3 text-xs text-slate-600 font-semibold">
                  <a href="tel:+919717160136" className="hover:text-blue-600 transition flex items-center gap-1">
                    <Phone className="w-3 h-3 text-blue-600" />
                    <span>Contact</span>
                  </a>
                  <span>•</span>
                  <a href="mailto:ritika@srvheadhunt.com" className="hover:text-blue-600 transition flex items-center gap-1">
                    <Mail className="w-3 h-3 text-blue-600" />
                    <span>Email</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Founder Story & Vision */}
            <div className="lg:col-span-8 flex flex-col space-y-5">
              <div className="flex items-center gap-2 text-blue-700 text-sm font-bold">
                <Quote className="w-6 h-6 rotate-180 text-blue-200" />
                <span>Founder&apos;s Message &amp; Operating Philosophy</span>
              </div>

              <p className="text-lg sm:text-xl text-slate-800 font-medium leading-relaxed italic">
                &ldquo;Every enterprise reaches an inflection point where talent acquisition and legal compliance can either accelerate forward velocity or bring operations to a grinding halt. Our mission at SRV Headhunt is to take that entire weight off employers&apos; shoulders—giving you executive-grade talent and bulletproof HR infrastructure without the overhead of heavy in-house departments.&rdquo;
              </p>

              <div className="space-y-3 pt-2 text-sm text-slate-600 leading-relaxed">
                <p>
                  With more than a decade of specialized hands-on experience spanning talent acquisition, performance architecture, labor law advisory, and statutory operations, Ritika has built SRV Headhunt into a trusted partner for 500+ corporations across India.
                </p>
                <p className="text-xs text-slate-500">
                  Her leadership bridges enterprise executive search with grassroots labor compliance—ensuring that rapid corporate growth never compromises legal safety or employer reputation.
                </p>
              </div>

              {/* Highlights Pill Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-stone-200">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Strategic Advisor to 500+ CEOs</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Pan-India Executive Reach</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Statutory Law Expert</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Corporate Core Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, idx) => {
            const Icon = v.icon;
            return (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-stone-200 hover:border-blue-400 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">{v.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{v.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
