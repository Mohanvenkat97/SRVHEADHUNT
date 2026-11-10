"use client";

import React from "react";
import { Check, X, ShieldAlert, Sparkles, ArrowRight } from "lucide-react";

interface ComparisonProps {
  onOpenConsultation: () => void;
}

export default function ComparisonSection({ onOpenConsultation }: ComparisonProps) {
  const comparisonRows = [
    {
      metric: "Time-to-Hire Turnaround",
      traditional: "45–60 days of endless interviews & dropouts",
      srv: "7–14 days with pre-screened, offer-ready candidates",
      impact: "75% Faster Ramp-up",
    },
    {
      metric: "Candidate Screening Standard",
      traditional: "Unvetted resume spam from generic job boards",
      srv: "Rigorous 5-tier technical & culture-fit vetting",
      impact: "Top 1% Talent Pool",
    },
    {
      metric: "Statutory & Labor Law Liability",
      traditional: "Internal oversights leading to government audit penalties",
      srv: "Zero-penalty guarantee & ongoing proactive statutory audits",
      impact: "100% Legal Protection",
    },
    {
      metric: "Payroll & Deductions Accuracy",
      traditional: "Spreadsheet errors, delayed PF/ESI & employee grievances",
      srv: "Automated, error-free salary computation & instant Form 16",
      impact: "99.98% Accuracy",
    },
    {
      metric: "Replacement Warranty",
      traditional: "No guarantee or restrictive 30-day window",
      srv: "Unconditional 90-day free candidate replacement warranty",
      impact: "Zero Financial Risk",
    },
    {
      metric: "Account Engagement Model",
      traditional: "Cold transactional recruiter with high turnover",
      srv: "Dedicated Strategic HR Partner & domain headhunter",
      impact: "Continuous Growth Advisory",
    },
  ];

  return (
    <section id="why-us" className="py-20 lg:py-28 bg-[#F4EFE6] relative border-y border-stone-200/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-stone-300 text-xs font-bold text-blue-700 mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The SRV Competitive Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Traditional Hiring vs. <span className="gradient-accent">SRV Precision HR</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            See how partnering with SRV Headhunt streamlines your recruitment velocity, protects you from regulatory pitfalls, and saves your leadership team hundreds of critical hours.
          </p>
        </div>

        {/* Comparison Table in Clean White */}
        <div className="overflow-x-auto">
          <div className="min-w-[720px] rounded-3xl bg-white border border-stone-300 shadow-xl overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-12 bg-stone-100 p-5 sm:p-6 border-b border-stone-200 text-sm font-bold">
              <div className="col-span-4 text-slate-600 uppercase tracking-wider text-xs">
                Performance Dimension
              </div>
              <div className="col-span-4 text-slate-600 uppercase tracking-wider text-xs flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                <span>Traditional / General Agencies</span>
              </div>
              <div className="col-span-4 text-blue-700 uppercase tracking-wider text-xs flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
                <span>SRV Headhunt Advantage</span>
              </div>
            </div>

            {/* Table Rows */}
            <div className="divide-y divide-stone-200">
              {comparisonRows.map((row, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-12 p-5 sm:p-6 items-center hover:bg-stone-50 transition-colors text-sm"
                >
                  <div className="col-span-4 font-bold text-slate-900 pr-4">
                    {row.metric}
                    <div className="text-[11px] font-semibold text-blue-600 mt-0.5 sm:hidden">
                      {row.impact}
                    </div>
                  </div>

                  <div className="col-span-4 text-slate-600 flex items-start gap-2.5 pr-4 text-xs sm:text-sm">
                    <div className="w-5 h-5 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center shrink-0 mt-0.5">
                      <X className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <span>{row.traditional}</span>
                  </div>

                  <div className="col-span-4 text-slate-900 flex items-start justify-between gap-2 text-xs sm:text-sm bg-blue-50/80 -my-3 p-3.5 rounded-xl border border-blue-200/90 shadow-xs">
                    <div className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span className="font-bold text-blue-950">{row.srv}</span>
                    </div>
                    <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-extrabold text-blue-800 bg-white rounded-full border border-blue-200 whitespace-nowrap shadow-2xs">
                      {row.impact}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Banner under comparison */}
        <div className="mt-12 rounded-3xl bg-[#0F172A] p-7 sm:p-10 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white">
              Ready to upgrade from fragmented agencies to strategic HR excellence?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1.5">
              Talk directly with Ritika Saxena and our senior talent advisory team today.
            </p>
          </div>
          <button
            onClick={onOpenConsultation}
            className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-slate-950 font-extrabold text-sm shadow-lg transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer active:scale-95"
          >
            <span>Consult SRV Experts</span>
            <ArrowRight className="w-4 h-4 text-slate-950" />
          </button>
        </div>

      </div>
    </section>
  );
}
