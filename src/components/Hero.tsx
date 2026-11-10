"use client";

import React, { useState } from "react";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Users,
  CheckCircle2,
  Search,
  Clock,
  Briefcase,
  Award,
  TrendingUp,
  FileCheck2,
} from "lucide-react";

interface HeroProps {
  onOpenConsultation: () => void;
}

export default function Hero({ onOpenConsultation }: HeroProps) {
  const [selectedRole, setSelectedRole] = useState("Tech & Engineering");
  const [selectedExp, setSelectedExp] = useState("Senior (6-10 yrs)");
  const [selectedCity, setSelectedCity] = useState("Noida / NCR");
  const [matchCount, setMatchCount] = useState<number | null>(42);
  const [searching, setSearching] = useState(false);

  const handleSimulatedSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearching(true);
    setTimeout(() => {
      const seed = (selectedRole.length + selectedExp.length + selectedCity.length) * 3;
      setMatchCount(Math.min(95, Math.max(18, seed)));
      setSearching(false);
    }, 600);
  };

  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 bg-[#FAF7F2] border-b border-stone-200/80">
      {/* Background Architectural Stock Photo with Soft Cream Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.035] bg-cover bg-center pointer-events-none"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80')`
        }}
      ></div>

      {/* Ambient Warm Gradients & Subtle Grid */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[850px] h-[500px] bg-gradient-to-b from-blue-100/40 via-amber-100/20 to-transparent blur-3xl rounded-full"></div>
        <div className="absolute top-1/3 -left-32 w-80 h-80 bg-blue-100/30 blur-3xl rounded-full"></div>
        <div className="absolute top-1/2 -right-32 w-96 h-96 bg-amber-100/40 blur-3xl rounded-full"></div>
        <div className="absolute inset-0 subtle-grid opacity-50"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Subtitle, Trust Metrics */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            
            {/* Pill Badge with Live Indicator */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-stone-200 text-xs font-bold text-blue-700 w-fit shadow-xs">
              <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-ping" />
              <span className="flex h-2 w-2 rounded-full bg-blue-600 -ml-4" />
              <span>India&apos;s Strategic HR &amp; Executive Search Firm</span>
              <span className="text-stone-300">•</span>
              <span className="text-slate-600 font-medium">Over 10+ Years of Trust</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.14]">
              Precision Executive Search &amp;{" "}
              <span className="gradient-accent">Strategic HR Operations</span>{" "}
              Engineered for Enterprise Scale.
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal max-w-2xl">
              We empower industry leaders and hyper-growth enterprises with top 1% leadership talent,
              seamless payroll outsourcing, zero-penalty labor law compliance, and comprehensive candidate verification.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onOpenConsultation}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-700 hover:to-indigo-800 text-white font-bold text-base shadow-xl shadow-blue-600/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <Sparkles className="w-5 h-5 text-blue-200 group-hover:rotate-12 transition-transform" />
                <span>Schedule Free Talent Consultation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#jobs"
                className="px-6 py-4 rounded-xl bg-white hover:bg-stone-50 border border-stone-300 text-slate-800 font-semibold text-base shadow-xs transition-all flex items-center justify-center gap-2 text-center"
              >
                <Briefcase className="w-4 h-4 text-blue-600" />
                <span>Explore Open Positions</span>
              </a>
            </div>

            {/* Candidate Avatar Stack & Live Counter */}
            <div className="flex items-center gap-3 pt-2">
              <div className="flex -space-x-2.5 overflow-hidden">
                <img
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"
                  alt="Candidate"
                  loading="lazy"
                />
                <img
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
                  alt="Candidate"
                  loading="lazy"
                />
                <img
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&q=80"
                  alt="Candidate"
                  loading="lazy"
                />
                <img
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80"
                  alt="Candidate"
                  loading="lazy"
                />
              </div>
              <span className="text-xs text-slate-600 font-medium">
                <strong className="text-slate-900 font-bold">10,000+ professionals</strong> placed in top Indian and Global companies
              </span>
            </div>

            {/* Trust Proof Points */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-stone-200">
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  10,000<span className="text-blue-600">+</span>
                </span>
                <span className="text-xs text-slate-500 font-medium mt-0.5">
                  Talent Placed Across India
                </span>
              </div>

              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  500<span className="text-blue-600">+</span>
                </span>
                <span className="text-xs text-slate-500 font-medium mt-0.5">
                  Enterprise Clients Served
                </span>
              </div>

              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  99.8<span className="text-blue-600">%</span>
                </span>
                <span className="text-xs text-slate-500 font-medium mt-0.5">
                  Statutory Audit Accuracy
                </span>
              </div>

              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  12<span className="text-blue-600"> Days</span>
                </span>
                <span className="text-xs text-slate-500 font-medium mt-0.5">
                  Avg. Time-To-Hire
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Instant Talent Match Widget in Crisp White */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl bg-white p-6 sm:p-8 border border-stone-200 shadow-xl">
              
              {/* Header inside widget */}
              <div className="flex items-center justify-between pb-5 border-b border-stone-200">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-sm border border-blue-200">
                    <Search className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900">Instant Talent Availability</h3>
                    <p className="text-xs text-slate-500">SRV Proprietary Candidate Bench</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-full flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  Live Database
                </span>
              </div>

              {/* Form filters */}
              <form onSubmit={handleSimulatedSearch} className="space-y-4 pt-5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Target Domain / Function
                  </label>
                  <select
                    value={selectedRole}
                    onChange={(e) => setSelectedRole(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 font-medium focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20 transition"
                  >
                    <option>Tech &amp; Engineering (Full Stack, DevOps, AI)</option>
                    <option>Leadership &amp; C-Suite (VP, Director, CXO)</option>
                    <option>SAP, ERP &amp; Enterprise Solutions</option>
                    <option>HR, People Operations &amp; Payroll</option>
                    <option>Sales, Revenue &amp; Business Strategy</option>
                    <option>Operations, Supply Chain &amp; Plant HR</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Seniority Level
                    </label>
                    <select
                      value={selectedExp}
                      onChange={(e) => setSelectedExp(e.target.value)}
                      className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-slate-900 font-medium focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20 transition"
                    >
                      <option>Mid-Level (3-6 yrs)</option>
                      <option>Senior (6-10 yrs)</option>
                      <option>Lead / Principal (10-14 yrs)</option>
                      <option>Executive / Director (14+ yrs)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Target Hub
                    </label>
                    <select
                      value={selectedCity}
                      onChange={(e) => setSelectedCity(e.target.value)}
                      className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-slate-900 font-medium focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20 transition"
                    >
                      <option>Noida / NCR / Delhi</option>
                      <option>Bengaluru (Bangalore)</option>
                      <option>Hyderabad</option>
                      <option>Pune / Mumbai</option>
                      <option>Pan-India / Remote</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={searching}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-sm shadow-md shadow-blue-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                >
                  {searching ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Scanning 85,000+ Pre-Vetted Profiles...</span>
                    </>
                  ) : (
                    <>
                      <Search className="w-4 h-4" />
                      <span>Check Candidate Availability</span>
                    </>
                  )}
                </button>
              </form>

              {/* Dynamic Match Result Result Box */}
              {matchCount !== null && (
                <div className="mt-5 p-4 rounded-2xl bg-blue-50/70 border border-blue-200 flex flex-col gap-2.5 animate-fadeIn">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-blue-900 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-blue-600" />
                      Profiles Ready for Immediate Interview
                    </span>
                    <span className="text-base font-extrabold text-blue-800 px-2 py-0.5 bg-white rounded-md border border-blue-200 shadow-xs">
                      {matchCount} Candidates
                    </span>
                  </div>
                  <p className="text-xs text-slate-700">
                    Pre-screened for <span className="font-bold text-slate-900">{selectedRole}</span> in{" "}
                    <span className="font-bold text-slate-900">{selectedCity}</span>. Avg interview turnaround:{" "}
                    <span className="text-blue-700 font-bold">48 Hours</span>.
                  </p>
                  <button
                    onClick={onOpenConsultation}
                    className="mt-1 w-full py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-xs font-bold text-white flex items-center justify-center gap-1.5 transition shadow-xs"
                  >
                    <span>Request Vetted Shortlist for This Role</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}

              {/* Mini Guarantees Footer */}
              <div className="mt-4 pt-4 border-t border-stone-200 flex items-center justify-between text-[11px] text-slate-600 font-medium">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                  90-Day Free Replacement
                </span>
                <span className="flex items-center gap-1">
                  <FileCheck2 className="w-3.5 h-3.5 text-blue-600" />
                  100% Background Verified
                </span>
              </div>
            </div>

            {/* Floating Glass Pill 1 */}
            <div className="hidden sm:flex absolute -bottom-6 -left-6 rounded-2xl bg-white border border-stone-200 p-3.5 shadow-xl items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="text-xs font-bold text-slate-900">98% Retention Rate</div>
                <div className="text-[10px] text-slate-500">Beyond 12 Months Employment</div>
              </div>
            </div>

            {/* Floating Glass Pill 2 */}
            <div className="hidden sm:flex absolute -top-5 -right-5 rounded-2xl bg-white border border-stone-200 p-3.5 shadow-xl items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center">
                <Award className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="text-xs font-bold text-slate-900">Top 1% Talent Pool</div>
                <div className="text-[10px] text-slate-500">5-Stage Rigorous Screening</div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
