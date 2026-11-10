"use client";

import React, { useState } from "react";
import { Calculator, Sparkles, TrendingUp, Clock, ShieldCheck, ArrowRight } from "lucide-react";

interface RoiCalculatorProps {
  onOpenConsultation: () => void;
}

export default function RoiCalculator({ onOpenConsultation }: RoiCalculatorProps) {
  const [hiresCount, setHiresCount] = useState(12);
  const [avgSalaryLakhs, setAvgSalaryLakhs] = useState(15);
  const [includePayroll, setIncludePayroll] = useState(true);

  const savedHours = hiresCount * 26;
  const hiringCostWithoutSrv = hiresCount * avgSalaryLakhs * 0.12 * 100000;
  const srvCost = hiresCount * avgSalaryLakhs * 0.0833 * 100000;
  const directRecruitmentSavings = Math.round(hiringCostWithoutSrv - srvCost);
  
  const internalOverheadSavings = hiresCount * 45000 + (includePayroll ? hiresCount * 12 * 1200 : 0);
  const totalAnnualSavings = directRecruitmentSavings + internalOverheadSavings;
  const savingsInLakhs = (totalAnnualSavings / 100000).toFixed(1);

  return (
    <section id="calculator" className="py-20 lg:py-28 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-stone-300 text-xs font-bold text-blue-700 mb-3 shadow-xs">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Financial Projection</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Calculate Your Workforce ROI
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            Discover how much time, capital, and compliance risk your enterprise saves by partnering with SRV Headhunt instead of bearing the heavy cost of in-house HR departments.
          </p>
        </div>

        {/* Calculator Widget Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Controls Column in Pure White */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl border border-stone-200 shadow-xl space-y-8">
            <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-blue-600" />
              <span>Project Parameters</span>
            </h3>

            {/* Slider 1: Hires */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-bold text-slate-800">
                  Target Hires in Next 12 Months:
                </label>
                <span className="text-lg font-extrabold text-blue-700 px-3 py-1 bg-blue-50 border border-blue-200 rounded-xl">
                  {hiresCount} Positions
                </span>
              </div>
              <input
                type="range"
                min="2"
                max="80"
                value={hiresCount}
                onChange={(e) => setHiresCount(Number(e.target.value))}
                className="w-full h-2.5 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <div className="flex justify-between text-[11px] text-slate-500 mt-1.5 font-semibold">
                <span>2 Hires (Boutique)</span>
                <span>40 Hires (Mid-Market)</span>
                <span>80+ Hires (Enterprise)</span>
              </div>
            </div>

            {/* Slider 2: Average CTC */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-bold text-slate-800">
                  Average Annual CTC per Role:
                </label>
                <span className="text-lg font-extrabold text-blue-700 px-3 py-1 bg-blue-50 border border-blue-200 rounded-xl">
                  ₹{avgSalaryLakhs} LPA
                </span>
              </div>
              <input
                type="range"
                min="4"
                max="50"
                step="1"
                value={avgSalaryLakhs}
                onChange={(e) => setAvgSalaryLakhs(Number(e.target.value))}
                className="w-full h-2.5 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <div className="flex justify-between text-[11px] text-slate-500 mt-1.5 font-semibold">
                <span>₹4 LPA (Entry/Ops)</span>
                <span>₹25 LPA (Senior Tech)</span>
                <span>₹50+ LPA (Leadership)</span>
              </div>
            </div>

            {/* Toggle: Payroll & Compliance */}
            <div className="pt-2 border-t border-stone-200">
              <label className="flex items-center justify-between p-4 rounded-2xl bg-stone-50 border border-stone-200 hover:border-stone-300 cursor-pointer transition">
                <div className="flex flex-col pr-4">
                  <span className="text-sm font-bold text-slate-900">
                    Include Statutory HR &amp; Payroll Outsourcing
                  </span>
                  <span className="text-xs text-slate-500 mt-0.5 font-medium">
                    Covers monthly payslips, PF/ESI filing, and quarterly labor law audits.
                  </span>
                </div>
                <input
                  type="checkbox"
                  checked={includePayroll}
                  onChange={(e) => setIncludePayroll(e.target.checked)}
                  className="w-5 h-5 rounded border-stone-300 text-blue-600 focus:ring-blue-500 cursor-pointer accent-blue-600"
                />
              </label>
            </div>

            {/* Explanation Note */}
            <p className="text-xs text-slate-500 italic">
              *Calculations are based on benchmarked hiring metrics across 500+ Indian corporate placements, accounting for recruitment fee optimization, candidate sourcing efficiency, and avoided statutory compliance fines.
            </p>
          </div>

          {/* Results Summary Column in High-Contrast Executive Navy */}
          <div className="lg:col-span-5 rounded-3xl bg-[#0F172A] p-8 sm:p-10 border border-slate-800 shadow-2xl relative overflow-hidden flex flex-col justify-between">
            <div className="space-y-6">
              
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase font-bold tracking-wider text-cyan-400">
                  Estimated Net Value
                </span>
                <span className="text-[11px] font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-500/40 px-2.5 py-0.5 rounded-full">
                  High Impact
                </span>
              </div>

              {/* Huge Saving Number */}
              <div>
                <div className="text-xs text-slate-400 font-medium">Total Projected Annual Savings</div>
                <div className="text-4xl sm:text-5xl font-black text-white tracking-tight mt-1">
                  ₹{savingsInLakhs}{" "}
                  <span className="text-2xl font-bold text-cyan-400">Lakhs</span>
                </div>
                <div className="text-xs text-emerald-400 font-medium mt-1 flex items-center gap-1">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>Direct cost reduction vs maintaining fragmented in-house HR</span>
                </div>
              </div>

              {/* Sub metrics */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-800">
                <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-1 font-semibold">
                    <Clock className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Leadership Hours</span>
                  </div>
                  <div className="text-xl font-bold text-white">
                    {savedHours}+ <span className="text-xs text-slate-400">Hrs Saved</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-1 font-semibold">
                    <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Legal Risk</span>
                  </div>
                  <div className="text-xl font-bold text-emerald-400">
                    0% <span className="text-xs text-slate-400">Audit Penalty</span>
                  </div>
                </div>
              </div>

              {/* What is included */}
              <div className="space-y-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <span className="text-cyan-400 font-bold">✓</span>
                  <span>Free 90-day candidate replacement guarantee included</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-cyan-400 font-bold">✓</span>
                  <span>Full background checks (BGV) for all selected hires</span>
                </div>
              </div>

            </div>

            {/* CTA inside calculator */}
            <div className="pt-8">
              <button
                onClick={onOpenConsultation}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-sm shadow-lg shadow-cyan-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
              >
                <span>Request Custom Commercial Proposal</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
